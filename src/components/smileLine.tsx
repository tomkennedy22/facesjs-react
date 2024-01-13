import React from 'react';
import { type_face } from '../types';

export const Line1: React.FC<type_face> = (props) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 38"
      width="11"
      height="38"
    >
      <path
        id="Shape 9"
        className="shp0"
        d="M9 2C9 2 -3.5 10.95 5 36"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
    </svg>
  </>
);

export const Line2: React.FC<type_face> = (props) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 28"
      width="18"
      height="28"
    >
      <path
        id="line 2"
        className="shp0"
        d="M17 2L2 12L7 27"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
    </svg>
  </>
);

export const Line3: React.FC<type_face> = (props) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 35"
      width="15"
      height="35"
    >
      <path
        id="line3"
        className="shp0"
        d="M12.33 4.32C12.33 4.32 2.33 7.61 2.33 17.5C2.33 27.39 12.33 30.68 12.33 30.68"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
    </svg>
  </>
);

export const Line4: React.FC<type_face> = (props) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 22"
      width="12"
      height="22"
    >
      <path
        id="Shape 10"
        className="shp0"
        d="M0 20L6 10L0 1"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
    </svg>
  </>
);

export const None: React.FC<type_face> = (props) => <></>;

export const smileLineFileNameComponentMap: {
  [key: string]: React.FC<type_face>;
} = {
  line1: Line1,
  line2: Line2,
  line3: Line3,
  line4: Line4,
  none: None,
};
