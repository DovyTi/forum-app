import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import http from '../plugins/http';
import SingleDiscussion from '../components/SingleDiscussion';

function ForumMainTopic() {
  const { id } = useParams();
  const [allMainTopic, setAllMainTopic] = useState(null);
  const refDiscussions = useRef();
  const [discussion, setDiscussion] = useState([]);

  async function createDiscussions() {
    const discussion = {
      title: refDiscussions.current.value,
    };
    const res = await http.postWithToken('createDiscussion', discussion);

    setDiscussion(res.data.discussion);

    console.log(res);
  }

  useEffect(() => {
    http.get('forum/' + id).then((res) => {
      console.log(res);
      setAllMainTopic(res.data.allMainTopic);
    });
  }, []);
  useEffect(() => {
    http.get('getAllDiscussion').then((res) => {
      setDiscussion(res.data.discussions);
    });
  }, []);
  return (
    <div>
      {allMainTopic && (
        <div className='d-flex j-center forum-page'>
          <div className='forum-page-topic  d-flex a-center f-column'>
            <h1 className='discussions-h2'>Main Topic: {allMainTopic.title}</h1>
            <div className='d-flex discussion-box'>
              <div className='discussion-box'>
                {discussion.map((x) => (
                  <SingleDiscussion key={x._id} discussion={x} />
                ))}
              </div>
            </div>
            <input
              className='create-new-forum-topic-input'
              ref={refDiscussions}
              type='text'
              placeholder='Field to write a new discussion'
            />
            <button className='create-topic-btn' onClick={createDiscussions}>
              CREATE discussions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForumMainTopic;
