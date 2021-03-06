import classnames from "classnames";
import { useRouter } from "next/router";
import { useState } from "react";
// import styles from "./MainGradientShape.module.css";

export default function MainGradientShape(props) {
  const [transitionDurationSet, setTransitionDurationSet] = useState(null);
  const router = useRouter();

  // console.log("router", router.pathname);

  return (
    <svg
      className={classnames("mainGradientShape", {
        home: router.pathname === "/",
      })}
      x="0px"
      y="0px"
      viewBox="0 0 552 619"
      style={{ enableBackground: "new 0 0 552 619" }}
      preserveAspectRatio="none"
      onTransitionEnd={(e) => {
        if (!transitionDurationSet) {
          setTransitionDurationSet(true);

          if (props.showMainGradientShape < 2)
            props.setShowMainGradientShape(props.showMainGradientShape + 1);

          e.target.style.transitionDuration = "2s";
        }
      }}
    >
      <g>
        <path
          className="mainGradientShapePath0"
          d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
        />
        <clipPath id="clipPath">
          <path
            className="mainGradientShapePath0"
            d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
          />
        </clipPath>
        <foreignObject clipPath="url(#clipPath)" width="200%" height="100%">
          <div className={"gradientShape"}></div>
        </foreignObject>

        <foreignObject clipPath="url(#clipPath)" width="200%" height="100%">
          <div className="isometricProgrammerShadow"></div>
        </foreignObject>
        {/* <path
        d="M276,10.2c18.62,0,36.98,4.92,53.1,14.23l166.79,96.3c32.76,18.91,53.1,54.16,53.1,91.98v192.6
c0,37.82-20.35,73.07-53.1,91.98l-166.79,96.3c-16.12,9.31-34.49,14.23-53.1,14.23c-18.62,0-36.98-4.92-53.1-14.23L56.1,497.28
C23.35,478.36,3,443.12,3,405.3V212.7c0-37.82,20.35-73.07,53.1-91.98l166.79-96.3C239.02,15.12,257.38,10.2,276,10.2 M276,9.2
c-18.51,0-37.02,4.79-53.6,14.36L55.6,119.86C22.43,139.01,2,174.4,2,212.7v192.6c0,38.3,20.43,73.69,53.6,92.84l166.79,96.3
c16.58,9.58,35.09,14.36,53.6,14.36s37.02-4.79,53.6-14.36l166.79-96.3c33.17-19.15,53.6-54.54,53.6-92.84V212.7
c0-38.3-20.43-73.69-53.6-92.84L329.6,23.56C313.02,13.98,294.51,9.2,276,9.2L276,9.2z"
      /> */}
      </g>
    </svg>
  );
}
