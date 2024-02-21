import React, { useRef } from 'react';
import { useStore } from '../store/MyStore';

function ProfilePage() {
  const { user, setUser } = useStore((state) => state);
  const updateImageRef = useRef();

  function updateImage() {
    const data = {
      image: updateImageRef.current.value,
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: localStorage.getItem('secret'),
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:2500/updateImage', options)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        if (resData.success) {
          setUser(resData.data);
        }
      });
  }

  return (
    <div className='profile-page-container'>
      {user && (
        <>
          <div className='profile-img d-flex a-center j-center'>
            <img
              className='profile-img-src'
              src={user.image}
              alt='User image'
            />
          </div>
          <div className='image-input d-flex a-center j-center'>
            Put new your profile photo :
            <input
              className='new-image-input'
              type='text'
              ref={updateImageRef}
              placeholder='new user image url'
            />
          </div>
          <div className='update-img-btn d-flex a-center j-center'>
            <button className='update-btn' onClick={updateImage}>
              Update
            </button>
          </div>

          <div className='user-name d-flex a-center j-center g-1'>
            <p>{user.username}</p>
            <p>Role: {user.role}</p>
          </div>
          <div className='user-topics-box d-flex a-center j-center f-column'>
            <p>Topic created in forum</p>
            <p>{user.discussion}</p>
          </div>
          <div className='posts-write-in-forum d-flex a-center j-center f-column'>
            <p>Posts written in forum</p>
            <div className='post'>dasdaswelegjkleajgrkljearklg</div>
            <div className='post'>dasdaswelegjkleajgrkljearklg</div>
            <div className='post'>dasdaswelegjkleajgrkljearklg</div>
            <div className='post'>dasdaswelegjkleajgrkljearklg</div>
            <div className='post'>dasdaswelegjkleajgrkljearklg</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
