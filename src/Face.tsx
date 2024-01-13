import { ComponentType } from 'react';
import { bodyFileNameComponentMap } from './components/body';
import { Hair } from './components/hair';
import { type_body, type_ear, type_face, type_jersey } from './types';
import { jerseyFileNameComponentMap } from './components/jersey';
import { earFileNameComponentMap } from './components/ear';




export const Face = (face_obj: type_face) => {

    return (
        <div className="face">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
                {/* <HairBg {...face_obj} /> */}
                <Body {...face_obj} />
                {/* <Jersey {...face_obj} />
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
                <Accessories {...face_obj} /> */}
            </svg>
        </div>
    )
}


export const Body = (props: type_face): JSX.Element => {

    let ChosenComponent = bodyFileNameComponentMap[props.body.id];
    return ChosenComponent;
}

export const Jersey = (props: type_jersey): ComponentType<any> => {

    let ChosenComponent = jerseyFileNameComponentMap[props.id];
    return ChosenComponent;
}

export const Ear = (props: type_ear): ComponentType<any> => {

    let ChosenComponent = earFileNameComponentMap[props.id];
    return ChosenComponent;
}