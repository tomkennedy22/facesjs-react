import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Face } from './Face';
import { ReactComponent as Head1 } from './svgs/head/head1.svg';
import { type_face } from './types';

function App() {


  let face_obj: type_face = { 
        "fatness": 0.61, 
        "teamColors": ["#89bfd3", "#7a1319", "#07364f"], 
        "hairBg": { "id": "none" }, 
        "body": { "id": "body2", "color": "#a67358", "size": 1 }, 
        "jersey": { "id": "football5" }, 
        "ear": { "id": "ear3", "size": 0.93 }, 
        "head": { "id": "head7", "shave": "rgba(0,0,0,0.13)" }, 
        "eyeLine": { "id": "none" }, 
        "smileLine": { "id": "line2", "size": 1.76 }, 
        "miscLine": { "id": "none" }, 
        "facialHair": { "id": "none" }, 
        "eye": { "id": "eye15", "angle": 8 }, 
        "eyebrow": { "id": "eyebrow4", "angle": -12 }, 
        "hair": { "id": "cornrows", "color": "#272421", "flip": true }, 
        "mouth": { "id": "angry", "flip": true }, 
        "nose": { "id": "nose4", "flip": true, "size": 0.58 }, 
        "glasses": { "id": "none" }, 
        "accessories": { "id": "none" } 
      }

  return (
    <div className="App">
      <header className="App-header">
        <Face face_obj={face_obj} />
      </header>
    </div>
  );
}

export default App;
