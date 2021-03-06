// import styles from "./DownloadButton.module.css";
import { useContext, useEffect, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import StylesContext from "../../store/styles-context";
import { DownloadButtonStrip } from "./DownloadButtonStrip";
import { v4 as uuidv4 } from "uuid";
import isEmpty from "../../utils/validation/is-empty";
import classNames from "classnames";

export default function DownloadButton(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "DownloadButton").styles;

  const [showComponent, setShowComponent] = useState(false);
  const [showChildComponents, setShowChildComponents] = useState(false);

  const [IDs, setIDs] = useState([]);

  useEffect(() => {
    let tempIDs = [];
    "Download Now".split("").forEach(() => {
      tempIDs.push(uuidv4());
    });
    setIDs(tempIDs);
  }, []);

  if (isEmpty(IDs)) return <p>Loading</p>;

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && props.visibilitySensorReveal) {
          setShowComponent(true);
        }
        // else setShowComponent(false);
      }}
      partialVisibility={true}
      offset={{ top: 10 }}
    >
      <a
        className={classNames(styles.btn, {
          [styles.show]: showComponent,
          [styles[props.color]]: props.color,
        })}
        href={props.url}
        download={props.fileName}
        onTransitionEnd={() => setShowChildComponents(true)}
      >
        <div className={styles.downloadTextWrapper}>
          <div className={styles.downloadText}>
            {"Download Now".split("").map((letter, index) => {
              return letter === " " ? (
                <p key={IDs[index]} style={{ marginLeft: "5px" }}></p>
              ) : (
                <p
                  key={IDs[index]}
                  style={{
                    animationDelay: `${index * 50 + 100}ms`,
                  }}
                  className={showChildComponents ? styles.animate : undefined}
                >
                  {letter}
                </p>
              );
            })}
          </div>

          {(props.fileName || props.fileSize) && (
            <div className={styles.fileNameAndSizeWrapper}>
              {props.fileName && <p className={styles.fileName}>{props.fileName}</p>}
              {props.fileName && props.fileSize && <p className={styles.hyphen}>-</p>}
              {props.fileSize && <p className={styles.fileSize}>{props.fileSize}</p>}
            </div>
          )}
        </div>
        <div className={styles.separatingLine}></div>
        <DownloadButtonStrip show={showChildComponents} color={props.color} />
      </a>
    </ReactVisibilitySensor>
  );
}
