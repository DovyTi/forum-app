import React, { useRef, useState } from 'react';
import http from '../plugins/http';
import { useEffect } from 'react';
import SingleMainTopic from '../components/SingleMainTopic';
import { useStore } from '../store/MyStore';

function ForumPage() {
  const refMainTopic = useRef();

  const { user, setUser } = useStore((state) => state);

  const [mainTopic, setMainTopic] = useState([]);

  async function create() {
    const mainTopic = {
      title: refMainTopic.current.value,
    };

    const res = await http.postWithToken('createMainTopic', mainTopic);

    setMainTopic(res.data.mainTopics);

    console.log(res);
  }

  useEffect(() => {
    http.get('getAllTopic').then((res) => {
      setMainTopic(res.data.mainTopics);
    });
  }, []);

  return (
    <div className='forum-page '>
      <div className='forum-page-topic  d-flex f-column g-1'>
        <div className='d-flex f-column g-1'>
          {mainTopic.map((x) => (
            <SingleMainTopic
              setMainTopic={setMainTopic}
              key={x._id}
              mainTopic={x}
            />
          ))}
        </div>
      </div>
      {user.role === 'admin' ? (
        <div className='d-flex j-space-between a-center j-center'>
          <div className='d-flex a-center j-center'>
            Create new forum topic:
            <input
              className='create-new-forum-topic-input'
              type='text'
              ref={refMainTopic}
              placeholder='Main topic name'
            />
          </div>

          <button className='create-topic-btn' onClick={create}>
            CREATE TOPIC
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ForumPage;
