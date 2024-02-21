import React from 'react';
import http from '../plugins/http';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/MyStore';

function SingleMainTopic({ mainTopic, setMainTopic }) {
  const { user, setUser } = useStore((state) => state);
  const nav = useNavigate();

  async function deleteMainTopic() {
    const res = await http.get('deleteMainTopic/' + mainTopic._id);
    console.log(res);
    setMainTopic(res.data.mainTopics);
  }

  return (
    <div className='d-flex j-space-between a-center'>
      <div
        className='d-flex j-space-between main-topic-box a-center j-center'
        onClick={() => nav('/forum/' + mainTopic._id)}
      >
        <div className='main-topic-title'>
          <h2>{mainTopic.title}</h2>
          <p className='forum-topic-p'>Topics amount</p>
        </div>
      </div>
      {user.role === 'admin' ? (
        <button className='delete-topic-bnt' onClick={deleteMainTopic}>
          Delete Topic
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SingleMainTopic;
