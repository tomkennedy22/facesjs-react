import fs from "fs/promises";
import path from "path";
import camelCase from "camelcase";
import prettier from "prettier"; // Uncomment if you're using prettier

const currentDir = path.dirname(new URL(import.meta.url).pathname);
const svgDirectory = path.join(currentDir, "svgs");
const outputDirectory = path.join(currentDir, "components");

const replaceMap = {
  '"$[primary]"': "{props.teamColors[0]}",
  '"$[secondary]"': "{props.teamColors[1]}",
  '"$[accent]"': "{props.teamColors[2]}",
  '"$[hairColor]"': "{props.hair.color}",
  '"$[skinColor]"': "{props.body.color}",
  '"$[headShave]"': "{props.head.shave}",
  '"$[faceShave]"': "{props.face.shave}",

  "class=": "className=",

  ".s0 { fill: #000000 }": "",
  "<!-- Generator: Adobe Illustrator 27.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->":
    "",
  "<!-- Generator: Adobe Illustrator 23.0.5, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->":
    "",
  '<?xml version="1.0" encoding="UTF-8" standalone="no"?>': "",
  '<?xml version="1.0" encoding="utf-8"?>': "",
  '<?xml version="1.0"?>': "",
  '</sodipodi:namedview>': ''
};

const regexMap = new Map([
  [/<style[\s\S]*?>[\s\S]*?<\/style>/g, ""],
  [/<sodipodi:namedview[\s\S]*?<\/sodipodi:namedview>/g, ""],
  [/<sodipodi:namedview[\s\S]*?<\/sodipodi:namedview>/g, ""],
  [/<sodipodi\:namedview[\s\S]*?<\/sodipodi:namedview>/g, ""],
  [/<sodipodi\:namedview[\s\S]*?\/>/g, ""],
  [/<defs[\s\S]*?<\/defs>/g, ""],
  [/<metadata[\s\S]*?<\/metadata>/g, ""],
  [/xmlns:dc="[^"]*"/g, ""],
  [/xmlns:cc="[^"]*"/g, ""],
  [/xmlns:rdf="[^"]*"/g, ""],
  [/xmlns:svg="[^"]*"/g, ""],
  [/xmlns:sodipodi="[^"]*"/g, ""],
  [/xmlns:inkscape="[^"]*"/g, ""],
  [/xmlns:xlink="[^"]*"/g, ""],
  [/xmlns:serif="[^"]*"/g, ""],
  [/xml:space="[^"]*"/g, ""],
  [/inkscape:version="[^"]*"/g, ""],
  [/inkscape:label="[^"]*"/g, ""],
  [/inkscape:groupmode="[^"]*"/g, ""],
  [/sodipodi:docname="[^"]*"/g, ""],
  [/sodipodi:nodetypes="[^"]*"/g, ""],
]);


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

const kebabToCamel = (str) => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

const createComponent = async (subdirectory, filePaths) => {
  await fs.mkdir(outputDirectory, { recursive: true });

  let componentFileNameMap = {};

  let componentContent = `import React from 'react';\nimport { type_face } from '../types';\n\n`;

  for (const filePath of filePaths) {
    let baseFileName = path.basename(filePath, ".svg");
    let componentName = camelCase(baseFileName, { pascalCase: true });

    componentFileNameMap[baseFileName] = componentName;
    let svgContent = await fs.readFile(filePath, "utf8");

    for (const [search_for, replace_with] of regexMap) {
      svgContent = svgContent.replace(search_for, replace_with);
    }

    for (const search_for in replaceMap) {
      let replace_with = replaceMap[search_for];
      while (svgContent.includes(search_for)) {
        svgContent = svgContent.replace(search_for, replace_with);
      }
    }

    const styleRegex = /style="([^"]*)"/g;
    svgContent = svgContent.replace(styleRegex, (match, styleString) => {
      const styleObject = styleString.split(';')
        .filter(style => style)
        .map(style => {
          let [key, value] = style.split(':').map(str => str.trim());
          key = kebabToCamel(key); // Convert CSS property names to camelCase
          return key === 'enableBackground' ? null : `${key}: '${value}'`; // Wrap values in single quotes
        })
        .join(', ');
      return `style={{${styleObject}}}`;
    });

    componentContent += `
    export const ${componentName}: React.FC<type_face> = (props) => (
      <>
        ${svgContent}
      </>
    );\n\n
    `;
  }

  componentContent += `export const ${subdirectory}FileNameComponentMap: { [key: string]: React.FC<type_face> }  = {\n`;
  for (const [fileName, compName] of Object.entries(componentFileNameMap)) {
    componentContent += `  "${fileName}": ${compName},\n`;
  }
  componentContent += "};\n";

  try {
    // Format with prettier (uncomment if needed)
    componentContent = await prettier.format(componentContent, {
      parser: "typescript", // Use the TypeScript parser for TSX
      semi: true,
      singleQuote: true,
      // Add other Prettier options here as needed
    });
  } catch (e) {
    console.error("Error formatting file", e);
  }

  await fs.writeFile(
    path.join(outputDirectory, `${subdirectory}.tsx`),
    componentContent
  );
  console.log(`Created component: ${subdirectory}`);
};

const processDirectory = async (directory) => {
  let files = await fs.readdir(directory, { withFileTypes: true });
  // console.log(`Processing directory: ${directory}`, files);
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
