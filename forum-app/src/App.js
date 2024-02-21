import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import ProfilePage from './Pages/ProfilePage';
import ForumPage from './Pages/ForumPage';
import MessagesPage from './Pages/MessagesPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PostsPage from './Pages/PostsPage';
import ForumMainTopic from './Pages/ForumMainTopic';
import SingleDiscussionPage from './components/SingleDiscussion';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/forum' element={<ForumPage />} />
          <Route path='/messages' element={<MessagesPage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/forum/:id' element={<ForumMainTopic />} />
          <Route path='/topic/:id' element={<SingleDiscussionPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
