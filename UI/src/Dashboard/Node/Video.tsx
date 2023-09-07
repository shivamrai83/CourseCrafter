import React, { useContext } from "react";
import { ReactVideo } from "reactjs-media";
import DashboardContext from "../DashboardContext";
interface NavigatorProps {
  video: Array<object>; // You can provide a more specific type here if available
}

interface MyContext {
  videoId: string;
}
interface Vid {
  id: string;
  video: string
}
function Content({ video }: NavigatorProps) {
  const { videoId } = useContext<MyContext>(DashboardContext);

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
