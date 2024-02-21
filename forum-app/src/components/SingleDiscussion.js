import React from 'react';
import { useNavigate } from 'react-router-dom';

function SingleDiscussion({ discussion }) {
  const nav = useNavigate();
  return (
    <div
      className='d-flex  d-flex a-center discussion-box-2'
      onClick={() => {
        nav('topic/' + discussion._id);
      }}
    >
      <div className='d-flex discussion-container j-center a-center j-space-between'>
        <p>{discussion.title}</p>
        <div>Answers</div>
      </div>
    </div>
  );
}

export default SingleDiscussion;
