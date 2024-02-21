import React, { useEffect, useRef, useState } from 'react';
import http from '../plugins/http';
import SinglePost from '../components/SinglePost';
import SearchBar from '../components/SearchBar';

function PostsPage() {
  const refTitle = useRef();
  const refImage = useRef();

  const [posts, setPosts] = useState([]);

  async function create() {
    const post = {
      title: refTitle.current.value,
      image: refImage.current.value,
    };

    const res = await http.post('create', post);

    setPosts(res.data.posts);

    console.log(res);
  }

  useEffect(() => {
    http.get('getAll').then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div className='d-flex posts-container'>
      <div className='grow1 d-flex f-column'>
        <input type='text' ref={refTitle} placeholder='title' />
        <input type='text' ref={refImage} placeholder='image' />
        <button onClick={create}> Create post</button>
      </div>
      <div className='grow3'>
        <SearchBar setPosts={setPosts} />
        {posts.map((x) => (
          <SinglePost setPosts={setPosts} key={x._id} post={x} />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
