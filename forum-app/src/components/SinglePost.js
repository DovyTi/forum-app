import React, { useEffect, useRef, useState } from 'react';
import http from '../plugins/http';

function SinglePost({ post, setPosts }) {
  const commentRef = useRef();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(post.comments);
  }, []);

  async function deletePost() {
    const res = await http.get('deletePost/' + post._id);
    console.log(res);
    setPosts(res.data.posts);
  }

  async function comment() {
    const data = {
      comment: commentRef.current.value,
      id: post._id,
    };
    const res = await http.postWithToken('makeComment', data);

    setComments(res.data.post.comments);

    console.log(res);
  }

  return (
    <div>
      <img className='post-img' src={post.image} alt='' />
      <h2>{post.title}</h2>
      <button onClick={deletePost}>DELETE POST</button>

      <div className='comments'>
        <div>
          <input type='text' ref={commentRef} placeholder='comment'></input>
          <button onClick={comment}>Comment</button>
        </div>
        {comments.map((x, i) => (
          <div className='singleComment' key={i}>
            <h2>{x.username}</h2>
            <div>{x.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SinglePost;
