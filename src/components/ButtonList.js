import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Reactjs",
    "Gaming",
    "Music",
    "News",
    "Movies",
    "Live",
    "WWE",
    "Learning",
    "Spotlight",
    "Angular",
    "Motivation",
    "Spring",
    "Redux",
    "Cricker",
    "Football",
    "COmedy", 
    "Fashion",
  ];

  return (
    <div className="flex">

      {buttonList.map((button) => (
        <Buttons key={button} name={button} />
      ))}


    </div>
  );
};

export default ButtonList;
