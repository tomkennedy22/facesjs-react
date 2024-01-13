import { ComponentType } from 'react';
import { bodyFileNameComponentMap } from './components/body';
import { type_body, type_ear, type_face, type_jersey } from './types';
import { jerseyFileNameComponentMap } from './components/jersey';
import { earFileNameComponentMap } from './components/ear';
import { headFileNameComponentMap } from './components/head';
import { eyeLineFileNameComponentMap } from './components/eyeLine';
import { smileLineFileNameComponentMap } from './components/smileLine';
import { miscLineFileNameComponentMap } from './components/miscLine';
import { facialHairFileNameComponentMap } from './components/facialHair';
import { eyeFileNameComponentMap } from './components/eye';
import { eyebrowFileNameComponentMap } from './components/eyebrow';
import { mouthFileNameComponentMap } from './components/mouth';
import { noseFileNameComponentMap } from './components/nose';
import { hairFileNameComponentMap } from './components/hair';
import { glassesFileNameComponentMap } from './components/glasses';
import { accessoriesFileNameComponentMap } from './components/accessories';




export const Face = (face_obj: type_face) => {

    return (
        <div className="face">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
                {/* <HairBg {...face_obj} /> */}
                <Body {...face_obj} />
                <Jersey {...face_obj} />
                <Ear {...face_obj} />
                <Head {...face_obj} />
                <EyeLine {...face_obj} />
                <SmileLine {...face_obj} />
                <MiscLine {...face_obj} />
                <FacialHair {...face_obj} />
                <Eye {...face_obj} />
                <Eyebrow {...face_obj} />
                <Mouth {...face_obj} />
                <Nose {...face_obj} />
                <Hair {...face_obj} />
                <Glasses {...face_obj} />
                <Accessories {...face_obj} />
            </svg>
        </div>
    )
}


export const Body = (props: type_face): JSX.Element => {
    const ChosenComponent = bodyFileNameComponentMap[props.body.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Assuming you want to render the ChosenComponent multiple times based on 'positions'
    // For this example, let's say you want it 3 times. Adjust as needed.
    const positions: null[] | number[][] = [null]; // Example positions

    return (
        <g>
            {positions.map((position, index) => {
                let positionProps = {};

                if (Array.isArray(position)) {
                    positionProps = { positionX: position[0], positionY: position[1] };
                }

                return <ChosenComponent key={index} {...props} {...positionProps} />;
            })}
        </g>
    );
}


export const Jersey = (props: type_face): JSX.Element => {

    const ChosenComponent = jerseyFileNameComponentMap[props.body.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}

export const Ear = (props: type_face): JSX.Element => {
    const ChosenComponent = earFileNameComponentMap[props.ear.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Assuming you want to render the ChosenComponent multiple times based on 'positions'
    // For this example, let's say you want it 3 times. Adjust as needed.
    const positions: null | number[][] = [
        [40, 325],
        [330, 325],
    ]

    const scaleFatness = true;

    return (
        <g>
            {positions.map((position, index) => {
                let transform = '';

                if (position) {
                    const [x, y] = position;
                    transform = `translate(${x}, ${y})`;
                }

                return (
                    <g transform={transform}>
                        <ChosenComponent key={index} {...props} />
                    </g>
                )
            })}
        </g>
    );
}

export const Head = (props: type_face): JSX.Element => {

    const ChosenComponent = headFileNameComponentMap[props.head.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}

export const EyeLine = (props: type_face): JSX.Element => {

    const ChosenComponent = eyeLineFileNameComponentMap[props.eyeLine.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const SmileLine = (props: type_face): JSX.Element => {

    const ChosenComponent = smileLineFileNameComponentMap[props.smileLine.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const MiscLine = (props: type_face): JSX.Element => {

    const ChosenComponent = miscLineFileNameComponentMap[props.miscLine.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const FacialHair = (props: type_face): JSX.Element => {

    const ChosenComponent = facialHairFileNameComponentMap[props.facialHair.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const Eye = (props: type_face): JSX.Element => {

    const ChosenComponent = eyeFileNameComponentMap[props.eye.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const Eyebrow = (props: type_face): JSX.Element => {

    const ChosenComponent = eyebrowFileNameComponentMap[props.eyebrow.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const Mouth = (props: type_face): JSX.Element => {

    const ChosenComponent = mouthFileNameComponentMap[props.mouth.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const Nose = (props: type_face): JSX.Element => {

    const ChosenComponent = noseFileNameComponentMap[props.nose.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const Hair = (props: type_face): JSX.Element => {

    const ChosenComponent = hairFileNameComponentMap[props.hair.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const Glasses = (props: type_face): JSX.Element => {

    const ChosenComponent = glassesFileNameComponentMap[props.glasses.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}



export const Accessories = (props: type_face): JSX.Element => {

    const ChosenComponent = accessoriesFileNameComponentMap[props.accessories.id];

    // Check if ChosenComponent exists
    if (!ChosenComponent) {
        return <></>; // Or handle the error as needed
    }

    // Render ChosenComponent as a JSX element
    return <ChosenComponent {...props} />;
}


