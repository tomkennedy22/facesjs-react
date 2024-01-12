import fs from "fs/promises";
import path from "path";
import camelCase from "camelcase";
// import prettier from "prettier"; // Uncomment if you're using prettier

const currentDir = path.dirname(new URL(import.meta.url).pathname);
const svgDirectory = path.join(currentDir, "svgs");
const outputDirectory = path.join(currentDir, "components");

const attributesToReplace = [
  "accent",
  "secondary",
  "primary",
  "hairColor",
  "skinColor",
];
const stringsToRemove = [".s0 { fill: #000000 }", "<!-- Generator: Adobe Illustrator 27.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->", '<?xml version="1.0" encoding="UTF-8" standalone="no"?>'];

let subdirectoryMapping = {};

// Function to extract the subdirectory name
const extractSubdirectory = (filePath) => {
  const parts = filePath.split(path.sep);
  const svgsIndex = parts.indexOf("svgs");
  if (svgsIndex >= 0 && svgsIndex < parts.length - 1) {
    return parts[svgsIndex + 1];
  }
  return null;
};

const createComponent = async (subdirectory, filePaths) => {
  await fs.mkdir(outputDirectory, { recursive: true });

  let componentFileNameMap = {};

  let componentContent = `import React from 'react';\n\n\n`;

  for (const filePath of filePaths) {
    let baseFileName = path.basename(filePath, ".svg");
    let componentName = camelCase(baseFileName, { pascalCase: true });

    componentFileNameMap[baseFileName] = componentName;
    const svgContent = await fs.readFile(filePath, "utf8");

    componentContent += `
    export const ${componentName} = (props) => (
      <svg {...props}>
        ${svgContent}
      </svg>
    );\n\n
    `;
  }

  componentContent += `export const ${subdirectory}FileNameComponentMap = {\n`;
  for (const [fileName, compName] of Object.entries(componentFileNameMap)) {
    componentContent += `  "${fileName}": ${compName},\n`;
  }
  componentContent += "};\n";

  for (const attribute of attributesToReplace) {
    let placeholder = `"${"$[" + attribute + "]"}"`;
    while (componentContent.includes(placeholder)) {
      componentContent = componentContent.replace(
        placeholder,
        `{props.${attribute}}`
      );
    }
  }

  for (const string of stringsToRemove) {
    componentContent = componentContent.replace(string, "");
  }

  while (componentContent.includes('class="')) {
    componentContent = componentContent.replace(
      'class="',
      'className="'
    );
  }

  componentContent = componentContent.replace(/<style>[\s\S]*?<\/style>/g, '');

  // Format with prettier (uncomment if needed)
  // componentContent = await prettier.format(componentContent, {
  //   parser: "babel",
  //   semi: true,
  //   singleQuote: true,
  // });

  await fs.writeFile(
    path.join(outputDirectory, `${subdirectory}.tsx`),
    componentContent
  );
  console.log(`Created component: ${subdirectory}`);
};

const processDirectory = async (directory) => {
  let files = await fs.readdir(directory, { withFileTypes: true });
  console.log(`Processing directory: ${directory}`, files);
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      await processDirectory(fullPath); // Recurse into directories
    } else if (path.extname(fullPath) === ".svg") {
      let subdirectory = extractSubdirectory(fullPath);
      if (!subdirectoryMapping[subdirectory]) {
        subdirectoryMapping[subdirectory] = [];
      }
      subdirectoryMapping[subdirectory].push(fullPath);
    }
  }
};

const main = async () => {
  await processDirectory(svgDirectory);

  for (const subdirectory in subdirectoryMapping) {
    await createComponent(subdirectory, subdirectoryMapping[subdirectory]);
  }
};

main();
