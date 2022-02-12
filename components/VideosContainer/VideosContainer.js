import { useContext, useEffect, useState } from "react";
import isEmpty from "../../utils/validation/is-empty";
import { v4 as uuidv4 } from "uuid";
import StylesContext from "../../store/styles-context";
import VideoContainer from "./VideoContainer";

export default function VideosContainer() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "VideosContainer"
  ).styles;

  const [IDs, setIDs] = useState([]);

  const videosWidth = "100%";
  const videosHeight = "100%";

  const videos = [
    {
      url: "https://www.youtube-nocookie.com/embed/yLqbXYmIFag",
      title: "Ardi - authorize Gmail access",
    },

    {
      url: "https://www.youtube-nocookie.com/embed/oBwrf6iCZX8",
      title:
        "Ardi - working with Outline and Gmail",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/BD2yPp-w2mw",
      title: "Ardi - working with Notes and Emails",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/PBuG7qXHCkc",
      title: "Ardi - working with Boards",
    },  
  ];

  useEffect(() => {
    let tempIDs = [];
    for (var i = 0; i < videos.length; i++) {
      tempIDs.push(uuidv4());
    }
    setIDs(tempIDs);
  }, []);

  if (isEmpty(IDs)) return <h1>Loading videos...</h1>;

  return (
    <div className={styles.container}>
      <a
        className={styles.header}
        href="https://www.youtube.com/channel/UCll5lZq0reYXYz2OeSC-zbw/videos"
        target="_blank"
      >
        Videos
      </a>
      <ul className={styles.list}>
        {videos.map((video, index) => {
          return (
            <VideoContainer
              key={IDs[index]}
              video={video}
              videosWidth={videosWidth}
              videosHeight={videosHeight}
            />
          );
        })}
      </ul>
    </div>
  );
}
