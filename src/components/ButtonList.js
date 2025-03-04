import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Live"];

const ButtonList = () => {
  return (
    <div className="flex ">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Movies" />
      <Button name="Confidence" />
      <Button name="Knowledge" />
    </div>
  );
};

export default ButtonList;
