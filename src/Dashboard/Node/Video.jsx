import React, { useContext } from "react";
import { ReactVideo } from "reactjs-media";
import Context from "../DashboardContext";

function Content({ video }) {
  const { videoId } = useContext(Context);

  const defaultVideo = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
  return (
    <div>
      {video.map((vid)=>(
        vid.id===videoId ? vid.video ? <ReactVideo
        src={vid.video ? vid.video : defaultVideo }
        primaryColor="green"
      /> : <React.Fragment />
      : <React.Fragment />
      ))}
    </div>
  );
}

export default Content;
