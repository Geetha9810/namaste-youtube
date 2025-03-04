import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import Button from "./Button";

const MainContainer = () => {
  return (
    <div className="col-span-10">
      <Button />
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
