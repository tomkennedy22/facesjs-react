import { accessoriesFileNameComponentMap } from "./components/accessories";
import { bodyFileNameComponentMap } from "./components/body";
import { earFileNameComponentMap } from "./components/ear";
import { eyeLineFileNameComponentMap } from "./components/eyeLine";
import { eyebrowFileNameComponentMap } from "./components/eyebrow";
import { facialHairFileNameComponentMap } from "./components/facialHair";
import { glassesFileNameComponentMap } from "./components/glasses";
import { hairFileNameComponentMap } from "./components/hair";
import { hairBgFileNameComponentMap } from "./components/hairBg";
import { headFileNameComponentMap } from "./components/head";
import { jerseyFileNameComponentMap } from "./components/jersey";
import { miscLineFileNameComponentMap } from "./components/miscLine";
import { mouthFileNameComponentMap } from "./components/mouth";
import { noseFileNameComponentMap } from "./components/nose";
import { smileLineFileNameComponentMap } from "./components/smileLine";


export type type_team_colors = [string, string, string];
export type type_hair_bg = { id: keyof typeof hairBgFileNameComponentMap };
export type type_body = { id: keyof typeof bodyFileNameComponentMap, color: string, size: number };
export type type_jersey = { id: keyof typeof jerseyFileNameComponentMap };
export type type_ear = { id: keyof typeof earFileNameComponentMap, size: number };
export type type_head = { id: keyof typeof headFileNameComponentMap, shave: string }
export type type_eye_line = { id: keyof typeof eyeLineFileNameComponentMap };
export type type_smile_line = { id: keyof typeof smileLineFileNameComponentMap, size: number };
export type type_misc_line = { id: keyof typeof miscLineFileNameComponentMap };
export type type_facial_hair = { id: keyof typeof facialHairFileNameComponentMap };
export type type_eye = { id: keyof typeof eyeLineFileNameComponentMap, angle: number };
export type type_eyebrow = { id: keyof typeof eyebrowFileNameComponentMap, angle: number };
export type type_hair = { id: keyof typeof hairFileNameComponentMap, color: string, flip: boolean };
export type type_mouth = { id: keyof typeof mouthFileNameComponentMap, flip: boolean };
export type type_nose = { id: keyof typeof noseFileNameComponentMap, flip: boolean, size: number };
export type type_glasses = { id: keyof typeof glassesFileNameComponentMap };
export type type_accessories = { id: keyof typeof accessoriesFileNameComponentMap }


export type type_face = {
    fatness: number,
    teamColors: type_team_colors,
    hairBg: type_hair_bg,
    body: type_body,
    jersey: type_jersey,
    ear: type_ear,
    head: type_head,
    eyeLine: type_eye_line,
    smileLine: type_smile_line,
    miscLine: type_misc_line,
    facialHair: type_facial_hair,
    eye: type_eye,
    eyebrow: type_eyebrow,
    hair: type_hair,
    mouth: type_mouth,
    nose: type_nose,
    glasses: type_glasses,
    accessories: type_accessories
}