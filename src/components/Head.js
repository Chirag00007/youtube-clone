import React, { useEffect } from "react";
import { toggleSideBar } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);// making api call for every word typed in search bar

  const getSearchSugsestions = async () => {
    // console.log("making api call" + searchQuery) ;
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenu = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenu()}
          className="h-8 px-2 py-1"
          alt="menu"
          src="https://indonesiamodificationexpo.com/wp-content/uploads/2018/04/Hamburger_icon.svg_.png"
        />
        <img
          className="h-8 px-2 py-1"
          alt="youtube-logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-2-3.png"
        />
      </div>

      <div className="flex col-span-10 relative left-[20rem]">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-[35rem] p-2 px-4 border-2 relative  rounded-l-full border-gray-400 input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-2 border-gray-400 p-1 rounded-r-full bg-gray-200 relative top-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="23"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
            </svg>
          </button>
        </div>
        {showSuggestions && (
          <div  className="absolute top-12 left-0 bg-white w-[35rem] ">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="p-1 m-1  border-b-2 border-gray-100 flex space-x-5 font-sans font-medium text-[17px] hover:bg-gray-100">
                  <svg
                    className="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
                  </svg>

                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="User"
          src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
