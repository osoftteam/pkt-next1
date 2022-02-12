import { useContext } from "react";
import StylesContext from "../../../store/styles-context";

export default function IsometricProgrammerTable({ animate }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "IsometricProgrammer"
  ).styles;

  return (
    <div
      id={styles.table}
      className={[styles.wrapper, animate ? styles.animate : undefined].join(" ")}
    >
      <svg
        originalartby="Chalermsuk Bootvises - Vecteezy.com"
        link="https://www.vecteezy.com/vector-art/2212500-programmer-mobile-application"
        viewBox="0 0 1077.57 1429.08"
        style={{ enableBackground: "new 0 0 1077.57 1429.08" }}
      >
        <g>
          <g className={styles.tableLeg}>
            <g>
              <path
                className={styles.st21}
                d="M497.17,1362.54l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C488.03,1374.82,491.93,1367.06,497.17,1362.54z"
              />
              <path
                className={styles.st21}
                d="M497.6,1362.72l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83L693.1,1195l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C488.46,1375,492.36,1367.23,497.6,1362.72z"
              />
              <path
                className={styles.st21}
                d="M498.03,1362.89l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C488.89,1375.18,492.79,1367.41,498.03,1362.89z"
              />
              <path
                className={styles.st21}
                d="M498.45,1363.07l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C489.32,1375.35,493.22,1367.59,498.45,1363.07z"
              />
              <path
                className={styles.st21}
                d="M498.88,1363.25l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C489.75,1375.53,493.65,1367.76,498.88,1363.25z"
              />
              <path
                className={styles.st21}
                d="M499.31,1363.42l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C490.18,1375.71,494.08,1367.94,499.31,1363.42z"
              />
              <path
                className={styles.st21}
                d="M499.74,1363.6l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C490.61,1375.88,494.51,1368.12,499.74,1363.6z"
              />
              <path
                className={styles.st21}
                d="M500.17,1363.78l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C491.03,1376.06,494.93,1368.29,500.17,1363.78z"
              />
              <path
                className={styles.st21}
                d="M500.6,1363.95l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C491.46,1376.24,495.36,1368.47,500.6,1363.95z"
              />
              <path
                className={styles.st21}
                d="M501.03,1364.13l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C491.89,1376.41,495.79,1368.65,501.03,1364.13z"
              />
              <path
                className={styles.st21}
                d="M501.46,1364.31l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.7-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.5,5.69,3.61,5.69,8.67c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16C492.32,1376.59,496.22,1368.82,501.46,1364.31z"
              />
              <path
                className={styles.st21}
                d="M501.88,1364.48l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C492.75,1376.77,496.65,1369,501.88,1364.48z"
              />
              <path
                className={styles.st21}
                d="M502.31,1364.66l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C493.18,1376.94,497.08,1369.18,502.31,1364.66z"
              />
              <path
                className={styles.st21}
                d="M502.74,1364.84l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C493.61,1377.12,497.51,1369.35,502.74,1364.84z"
              />
              <path
                className={styles.st21}
                d="M503.17,1365.01l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C494.04,1377.3,497.94,1369.53,503.17,1365.01z"
              />
              <path
                className={styles.st21}
                d="M503.6,1365.19l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C494.46,1377.47,498.36,1369.71,503.6,1365.19z"
              />
              <path
                className={styles.st21}
                d="M504.03,1365.37l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C494.89,1377.65,498.79,1369.88,504.03,1365.37z"
              />
              <path
                className={styles.st21}
                d="M504.46,1365.54l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C495.32,1377.83,499.22,1370.06,504.46,1365.54z"
              />
              <path
                className={styles.st21}
                d="M504.89,1365.72l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83L700.4,1198l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C495.75,1378,499.65,1370.24,504.89,1365.72z"
              />
              <path
                className={styles.st21}
                d="M505.31,1365.9l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C496.18,1378.18,500.08,1370.41,505.31,1365.9z"
              />
              <path
                className={styles.st21}
                d="M505.74,1366.07l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C496.61,1378.36,500.51,1370.59,505.74,1366.07z"
              />
              <path
                className={styles.st21}
                d="M506.17,1366.25l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C497.04,1378.53,500.94,1370.77,506.17,1366.25z"
              />
            </g>
            <g>
              <path
                className={styles.st22}
                d="M513.89,1371.25l11.86-75.2l11.83-83.7c5.14-47.52,37.7-99.73,75.78-121.71
							c36.99-21.35,68.62-8.6,75.22,30.34l13.1,77.56l11.15,57.86l8.99-7.35l-11.14-57.76l-13.08-77.45
							c-7.39-43.62-42.81-57.91-84.24-33.99c-42.64,24.62-79.12,83.11-84.84,136.05l-11.78,83.32l-11.84,75.07L513.89,1371.25z"
              />
              <g>
                <path
                  className={styles.st22}
                  d="M706.92,1263.98c0,7.77,5.35,10.97,11.95,7.16c6.6-3.81,11.95-13.2,11.95-20.96s-5.35-10.97-11.95-7.16
								C712.27,1246.83,706.92,1256.21,706.92,1263.98z"
                />
                <path
                  className={styles.st23}
                  d="M713.54,1260.15c0,3.46,2.38,4.89,5.32,3.19s5.32-5.88,5.32-9.34s-2.38-4.89-5.32-3.19
								C715.93,1252.51,713.54,1256.69,713.54,1260.15z"
                />
              </g>
              <g>
                <path
                  className={styles.st22}
                  d="M497.04,1385.15c0,7.77,5.35,10.97,11.95,7.16c6.6-3.81,11.95-13.2,11.95-20.96
								c0-7.77-5.35-10.97-11.95-7.16C502.39,1368,497.04,1377.38,497.04,1385.15z"
                />
                <path
                  className={styles.st23}
                  d="M503.67,1381.32c0,3.46,2.38,4.89,5.32,3.19c2.94-1.7,5.32-5.88,5.32-9.34s-2.38-4.89-5.32-3.19
								S503.67,1377.86,503.67,1381.32z"
                />
              </g>
            </g>
          </g>
          <g className={styles.tableLeg}>
            <g>
              <path
                className={styles.st21}
                d="M63.8,1114l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C54.67,1126.28,58.57,1118.52,63.8,1114z"
              />
              <path
                className={styles.st21}
                d="M64.23,1114.17l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7L73.3,1110.6c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C55.1,1126.46,59,1118.69,64.23,1114.17z"
              />
              <path
                className={styles.st21}
                d="M64.66,1114.35l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C55.53,1126.63,59.43,1118.87,64.66,1114.35z"
              />
              <path
                className={styles.st21}
                d="M65.09,1114.53l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C55.96,1126.81,59.86,1119.05,65.09,1114.53z"
              />
              <path
                className={styles.st21}
                d="M65.52,1114.7l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C56.38,1126.99,60.28,1119.22,65.52,1114.7z"
              />
              <path
                className={styles.st21}
                d="M65.95,1114.88l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C56.81,1127.16,60.71,1119.4,65.95,1114.88z"
              />
              <path
                className={styles.st21}
                d="M66.38,1115.06l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C57.24,1127.34,61.14,1119.58,66.38,1115.06z"
              />
              <path
                className={styles.st21}
                d="M66.8,1115.23l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C57.67,1127.52,61.57,1119.75,66.8,1115.23z"
              />
              <path
                className={styles.st21}
                d="M67.23,1115.41l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C58.1,1127.69,62,1119.93,67.23,1115.41z"
              />
              <path
                className={styles.st21}
                d="M67.66,1115.59l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7L76.73,1112c3.41,0.5,5.7,3.61,5.7,8.68c0,7.76-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C58.53,1127.87,62.43,1120.11,67.66,1115.59z"
              />
              <path
                className={styles.st21}
                d="M68.09,1115.76l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.42-23.92,76.85-9.62,84.24,33.99l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16c0-4.54,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.07,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.51,66.62c3.41,0.5,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C58.96,1128.05,62.86,1120.28,68.09,1115.76z"
              />
              <path
                className={styles.st21}
                d="M68.52,1115.94l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C59.39,1128.22,63.29,1120.46,68.52,1115.94z"
              />
              <path
                className={styles.st21}
                d="M68.95,1116.12l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C59.81,1128.4,63.71,1120.64,68.95,1116.12z"
              />
              <path
                className={styles.st21}
                d="M69.38,1116.29l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C60.24,1128.58,64.14,1120.81,69.38,1116.29z"
              />
              <path
                className={styles.st21}
                d="M69.81,1116.47l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C60.67,1128.75,64.57,1120.99,69.81,1116.47z"
              />
              <path
                className={styles.st21}
                d="M70.24,1116.65l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C61.1,1128.93,65,1121.17,70.24,1116.65z"
              />
              <path
                className={styles.st21}
                d="M70.66,1116.82l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C61.53,1129.11,65.43,1121.34,70.66,1116.82z"
              />
              <path
                className={styles.st21}
                d="M71.09,1117l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C61.96,1129.28,65.86,1121.52,71.09,1117z"
              />
              <path
                className={styles.st21}
                d="M71.52,1117.18l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C62.39,1129.46,66.29,1121.7,71.52,1117.18z"
              />
              <path
                className={styles.st21}
                d="M71.95,1117.35l10.57-67.04L94.3,967c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							s-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C62.82,1129.64,66.72,1121.87,71.95,1117.35z"
              />
              <path
                className={styles.st21}
                d="M72.38,1117.53l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83l-9.95-51.61l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C63.24,1129.81,67.14,1122.05,72.38,1117.53z"
              />
              <path
                className={styles.st21}
                d="M72.81,1117.71l10.57-67.04l11.78-83.32c5.72-52.94,42.19-111.43,84.84-136.05
							c41.43-23.92,76.85-9.62,84.24,34l13.08,77.45l9.82,50.93c5.83-2.43,10.32,0.84,10.32,7.96c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.6-11.95-7.16c0-4.55,1.86-9.62,4.71-13.83L268.32,950l-13.1-77.56c-6.6-38.94-38.23-51.69-75.22-30.34
							c-38.08,21.98-70.64,74.2-75.78,121.71l-11.83,83.7l-10.5,66.62c3.41,0.51,5.7,3.61,5.7,8.68c0,7.77-5.35,17.15-11.95,20.96
							c-6.6,3.81-11.95,0.61-11.95-7.16C63.67,1129.99,67.57,1122.23,72.81,1117.71z"
              />
            </g>
            <g>
              <path
                className={styles.st22}
                d="M80.53,1122.71l11.86-75.2l11.83-83.7c5.14-47.52,37.7-99.73,75.78-121.71
							c36.99-21.35,68.62-8.6,75.22,30.34l13.1,77.56l11.15,57.87l8.99-7.35l-11.13-57.76l-13.08-77.45
							c-7.39-43.62-42.81-57.91-84.24-34c-42.64,24.62-79.12,83.11-84.84,136.05l-11.78,83.32l-11.84,75.07L80.53,1122.71z"
              />
              <g>
                <path
                  className={styles.st22}
                  d="M273.55,1015.43c0,7.77,5.35,10.97,11.95,7.16c6.6-3.81,11.95-13.2,11.95-20.96s-5.35-10.97-11.95-7.16
								C278.9,998.29,273.55,1007.67,273.55,1015.43z"
                />
                <path
                  className={styles.st23}
                  d="M280.18,1011.61c0,3.46,2.38,4.89,5.32,3.19s5.32-5.88,5.32-9.34s-2.38-4.89-5.32-3.19
								S280.18,1008.15,280.18,1011.61z"
                />
              </g>
              <g>
                <path
                  className={styles.st22}
                  d="M63.67,1136.61c0,7.77,5.35,10.97,11.95,7.16c6.6-3.81,11.95-13.19,11.95-20.96s-5.35-10.97-11.95-7.16
								S63.67,1128.84,63.67,1136.61z"
                />
                <path
                  className={styles.st23}
                  d="M70.3,1132.78c0,3.46,2.38,4.89,5.32,3.19c2.94-1.7,5.32-5.88,5.32-9.34s-2.38-4.89-5.32-3.19
								C72.69,1125.14,70.3,1129.32,70.3,1132.78z"
                />
              </g>
            </g>
          </g>
          <g>
            <g className={styles.tableSide}>
              <polygon
                className={styles.st24}
                points="41.39,919.69 494.17,1181.1 719.25,1051.16 266.46,789.74 						"
              />
              <polygon
                className={styles.st25}
                points="41.39,918.55 494.17,1179.96 719.25,1050.02 266.46,788.6 						"
              />
              <polygon
                className={styles.st26}
                points="41.39,917.41 494.17,1178.82 719.25,1048.87 266.46,787.46 						"
              />
              <polygon
                className={styles.st27}
                points="41.39,916.26 494.17,1177.68 719.25,1047.73 266.46,786.32 						"
              />
              <polygon
                className={styles.st28}
                points="41.39,915.12 494.17,1176.54 719.25,1046.59 266.46,785.18 						"
              />
              <polygon
                className={styles.st29}
                points="41.39,913.98 494.17,1175.4 719.25,1045.45 266.46,784.03 						"
              />
              <polygon
                className={styles.st30}
                points="41.39,912.84 494.17,1174.26 719.25,1044.31 266.46,782.89 						"
              />
              <polygon
                className={styles.st31}
                points="41.39,911.7 494.17,1173.12 719.25,1043.17 266.46,781.75 						"
              />
              <polygon
                className={styles.st32}
                points="41.39,910.56 494.17,1171.98 719.25,1042.03 266.46,780.61 						"
              />
              <polygon
                className={styles.st33}
                points="41.39,909.42 494.17,1170.83 719.25,1040.89 266.46,779.47 						"
              />
              <polygon
                className={styles.st34}
                points="41.39,908.28 494.17,1169.69 719.25,1039.74 266.46,778.33 						"
              />
              <polygon
                className={styles.st35}
                points="41.39,907.14 494.17,1168.55 719.25,1038.6 266.46,777.19 						"
              />
              <polygon
                className={styles.st36}
                points="41.39,905.99 494.17,1167.41 719.25,1037.46 266.46,776.05 						"
              />
              <polygon
                className={styles.st37}
                points="41.39,904.85 494.17,1166.27 719.25,1036.32 266.46,774.91 						"
              />
              <polygon
                className={styles.st38}
                points="41.39,903.71 494.17,1165.13 719.25,1035.18 266.46,773.76 						"
              />
              <polygon
                className={styles.st39}
                points="41.39,902.57 494.17,1163.99 719.25,1034.04 266.46,772.62 						"
              />
              <polygon
                className={styles.st40}
                points="41.39,901.43 494.17,1162.85 719.25,1032.9 266.46,771.48 						"
              />
              <polygon
                className={styles.st41}
                points="41.39,900.29 494.17,1161.7 719.25,1031.76 266.46,770.34 						"
              />
              <polygon
                className={styles.st42}
                points="41.39,899.15 494.17,1160.56 719.25,1030.62 266.46,769.2 						"
              />
              <polygon
                className={styles.st43}
                points="41.39,898.01 494.17,1159.42 719.25,1029.47 266.46,768.06 						"
              />
              <polygon
                className={styles.st44}
                points="41.39,896.87 494.17,1158.28 719.25,1028.33 266.46,766.92 						"
              />
            </g>
          </g>
          <polygon
            className={styles.st45}
            points="41.39,895.72 494.17,1157.14 719.25,1027.19 266.46,765.78 					"
          />
        </g>
      </svg>
    </div>
  );
}
