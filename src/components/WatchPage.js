import React, { useEffect } from 'react'
import { closeSideBar } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentList from './CommentList';

const WatchPage = () => {

 const [searchParams] = useSearchParams();
 console.log(searchParams.get('v'));


 const dispatch = useDispatch();

 useEffect(() => { 
  dispatch(closeSideBar());
 }, []);

  return (
    <div className='m-5 border-3 border-black'>
    <div className="px-5 py-3">
      <iframe
        width="1200"
        height="630"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")+ "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      
        
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentList/>
    </div>
  );
}

export default WatchPage
