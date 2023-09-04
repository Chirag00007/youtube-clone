import React from 'react'
import {useSelector} from 'react-redux';

const Sidebar = () => {

  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
  
  if(!isSideBarOpen) return null;

  return (
    <div className="p-5  shadow-lg w-[12rem]">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className=" pt-5 font-bold font-serif"> Subscriptions</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>

      <h1 className=" pt-5 font-bold font-serif"> Subscriptions</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
}

export default Sidebar