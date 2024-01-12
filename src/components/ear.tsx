import React from 'react';



    export const Ear1 = (props) => (
      <svg {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 69" width="46" height="69">
	<path id="ear1" d="M43 13C43 13 23 3 13 3C3 3 3 23 3 33C3 43 6 53 16 63C26 73 43 53 43 53L43 13Z" fill={props.skinColor} stroke="#000" stroke-width="6"/>
</svg>
      </svg>
    );


    
    export const Ear2 = (props) => (
      <svg {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 68" width="43" height="68">
	<path id="ear2" d="M40 14C40 14 10 -1 5 4C0 9 5 34 10 44C15 54 5 69 40 64L40 14Z" fill={props.skinColor} stroke="#000" stroke-width="6"/>
</svg>
      </svg>
    );


    
    export const Ear3 = (props) => (
      <svg {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 63" width="46" height="63">
	<path id="ear3" d="M43 8C43 8 3 -12 3 28C3 73 43 58 43 58L43 8Z" fill={props.skinColor} stroke="#000" stroke-width="6"/>
</svg>
      </svg>
    );


    export const earFileNameComponentMap = {
  "ear1": Ear1,
  "ear2": Ear2,
  "ear3": Ear3,
};
