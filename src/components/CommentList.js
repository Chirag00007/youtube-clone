import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md mb-4">
      <div className="flex items-center">
        <img
          src={comment.userAvatar}
          alt={comment.userName}
          className="w-8 h-8 rounded-full mr-2"
        />
        <p className="font-semibold">{comment.userName}</p>
      </div>
      <p className="mt-2">{comment.text}</p>
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-8 mt-2">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentList = () => {
  // Dummy data for comments
  const comments = [
    {
      id: 1,
      userName: "User 1",
      userAvatar: "https://via.placeholder.com/50",
      text: "This is the main comment text.",
      replies: [
        {
          id: 2,
          userName: "User 2",
          userAvatar: "https://via.placeholder.com/50",
          text: "Reply 1 to the main comment.",
          replies: [],
        },
        {
          id: 3,
          userName: "User 3",
          userAvatar: "https://via.placeholder.com/50",
          text: "Reply 2 to the main comment.",
          replies: [
            {
              id: 4,
              userName: "User 4",
              userAvatar: "https://via.placeholder.com/50",
              text: "Reply 1 to Reply 2.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      userName: "User 5",
      userAvatar: "https://via.placeholder.com/50",
      text: "Another main comment.",
      replies: [],
    },
    ,
    {
      id: 6,
      userName: "User 6",
      userAvatar: "https://via.placeholder.com/50",
      text: "Another main comment.",
      replies: [
        {
          id: 7,
          userName: "User 7",
          userAvatar: "https://via.placeholder.com/50",
          text: "Reply 1 to Reply 2.",
          replies: [],
        },
        {
          id: 8,
          userName: "User 8",
          userAvatar: "https://via.placeholder.com/50",
          text: "Reply 1 to Reply 2.",
          replies: [
            {
              id: 9,
              userName: "User 9",
              userAvatar: "https://via.placeholder.com/50",
              text: "Reply 1 to Reply 2.",
              replies: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
