import React, { useRef } from 'react';
import http from '../plugins/http';

function SearchBar({ setPosts }) {
  const searchRef = useRef();
  async function search() {
    const data = {
      searchPhrase: searchRef.current.value,
    };

    const res = await http.post('search', data);
    console.log(res);
    setPosts(res.data.posts);
  }

  function showAll() {
    http.get('getAll').then((res) => {
      setPosts(res.data.posts);
    });
  }
  return (
    <div>
      <input type='text' ref={searchRef} placeholder='search phrase' />
      <button onClick={search}>Search</button>
      <button onClick={showAll}>ShowAll</button>
    </div>
  );
}

export default SearchBar;
