import React from 'react';



    export const Body = (props) => (
      <svg {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
	<g id="Body">
		<path id="Body" className="body" d="M10 600C10 600 10 550 70 530C130 510 140 480 140 480L200 300L260 480C260 480 270 510 330 530C390 550 390 600 390 600" fill={props.skinColor} stroke="#000" stroke-width="6"/>
	</g>
</svg>
      </svg>
    );


    
    export const Body2 = (props) => (
      <svg {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
	<g id="Body">
		<path id="Body" className="body" d="M10 600C10 600 0 535 60 535C65 535 85 520 130 500L200 300L270 500C315 520 335 535 340 535C400 535 390 600 390 600" fill={props.skinColor} stroke="#000" stroke-width="6"/>
	</g>
</svg>
      </svg>
    );


    
    export const Body3 = (props) => (
      <svg {...props}>
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
	<title>body3-svg</title>
	<g id="Body">
		<path id="Body" d="m10 600c0 0-10-70 50-70c10 0 0-10 60-20c0 0 50-210 80-210c30 0 80 210 80 210c60 10 50 20 60 20c60 0 50 70 50 70"  fill={props.skinColor} stroke="#000" stroke-width="6"/>
		<path id="collar-bone" d="m71 545c0 0 46.9-3 82.1 10m175.9-10c0 0-46.9-3-82.1 10" />
		<path id="shoulder-def" d="m324 537c0 0 5.5-7.5 22-7m-271 7c0 0-5.5-7.5-22-7" />
	</g>
</svg>
      </svg>
    );


    
    export const Body4 = (props) => (
      <svg {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
	<g id="Body">
		<path id="Body" className="body" d="M20 600C20 600 15 540 60 530C75 530 105 515 150 495L200 300L250 495C295 515 325 530 340 530C385 540 385 600 385 600" fill={props.skinColor} stroke="#000" stroke-width="6"/>
	</g>
</svg>
      </svg>
    );


    
    export const Body5 = (props) => (
      <svg {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
	<g id="Body">
		<path id="Body" className="body" d="M5 600C5 600 0 540 40 530C40 530 80 530 130 500L200 300L270 500C320 530 360 530 360 530C400 540 395 600 395 600" fill={props.skinColor} stroke="#000" stroke-width="6"/>
	</g>
</svg>
      </svg>
    );


    export const bodyFileNameComponentMap = {
  "body": Body,
  "body2": Body2,
  "body3": Body3,
  "body4": Body4,
  "body5": Body5,
};
