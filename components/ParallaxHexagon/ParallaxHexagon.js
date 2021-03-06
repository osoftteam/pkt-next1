// import styles from "./ParallaxHexagon.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import RefsContext from "../../store/refs-context";
import calculateScrollProgression from "../../utils/CalculateScrollProgression";
import { v4 as uuidv4 } from "uuid";
import StylesContext from "../../store/styles-context";

export default function ParallaxHexagon(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "ParallaxHexagon"
  ).styles;

  const [mainDivRefState, setMainDivRef] = useState(null);
  const [id, setId] = useState(null);
  const parallaxRef = useRef();
  const wrapperRef = useRef();
  // Calculate distance from top of document (not the viewport -- the entire document/window).
  const [offsetTopState, setOffsetTop] = useState(null);
  useEffect(() => {
    var parent = parallaxRef.current.parentNode;
    var totalOffsetTop = parallaxRef.current.offsetTop;
    while (parent.parentNode) {
      if (parent.offsetTop !== totalOffsetTop)
        totalOffsetTop += parent.offsetTop;
      parent = parent.parentNode;
    }
    setOffsetTop(totalOffsetTop);

    setId(uuidv4());
  }, []);

  // Retrieve the ref of mainDiv from layout.js
  const refsContext = useContext(RefsContext);
  useEffect(() => {
    if (!mainDivRefState && refsContext.refs.length > 0) {
      const mainDivRef = refsContext.refs.find(
        (ref) => ref.name === "mainDivRef"
      );
      setMainDivRef(mainDivRef.ref);
    }
  }, [refsContext.refs.length]);

  // set scroll event listener on mainDiv
  const [eventListenerSet, setEventListenerSet] = useState(false);
  useEffect(() => {
    if (!eventListenerSet && mainDivRefState) {
      setEventListenerSet(true);
      mainDivRefState.current.addEventListener("scroll", (e) => {
        const transformOffset = 550;
        const opacityOffset = 550;
        if (
          e.target.scrollTop <= offsetTopState + opacityOffset &&
          !props.visibilitySensorReveal
        ) {
          let opacityEquation = calculateScrollProgression(
            e.target.scrollTop,
            offsetTopState,
            opacityOffset
            // 300
          );

          parallaxRef.current.style.opacity = `${opacityEquation}`;

          let transformEquation = calculateScrollProgression(
            e.target.scrollTop,
            offsetTopState,
            transformOffset,
            500, // finishWithin
            props.blockTopBoundary
          );

          let rotateEquation =
            1 -
            calculateScrollProgression(
              e.target.scrollTop,
              offsetTopState,
              transformOffset,
              props.gradientColor1 ? 600 : null,
              props.gradientColor1 && props.blockTopBoundary
            );

          parallaxRef.current.style.transform = `rotate(${
            100 * rotateEquation + 20
          }deg)`;

          wrapperRef.current.style.transform = `translateY(${
            // 100 * transformEquation
            (props.climb ? props.climb : 100) * transformEquation
          }px)`;
        }
      });
    }
  }, [eventListenerSet, mainDivRefState]);

  const { gradientColor1, gradientColor2, bgFill } = props;

  return (
    <div
      ref={wrapperRef}
      className={[
        styles.wrapper,
        props.bgFill && styles.lowerOpacity,
        props.gradientColor1 && props.gradientColor1 && styles.gradient,
      ].join(" ")}
    >
      <div ref={parallaxRef} className={styles.parallaxHexagon}>
        <svg
          // className="hexagonSVG"
          x="0px"
          y="0px"
          viewBox="0 0 552 619"
          style={{ enableBackground: "new 0 0 552 619" }}
        >
          <linearGradient
            id={`hexagonShapeLinearGradient_${id}`}
            gradientTransform="rotate(20)"
          >
            <stop offset="10%" stopColor={gradientColor1} />
            <stop offset="90%" stopColor={gradientColor2} />
          </linearGradient>

          <g>
            <path
              fill={
                gradientColor1 && gradientColor2
                  ? `url(#hexagonShapeLinearGradient_${id})`
                  : null
              }
              className="hexagonPath"
              d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
  c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
  c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
