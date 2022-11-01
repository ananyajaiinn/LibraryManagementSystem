import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostForm from './PostForm';
import AllPost from './AllPost';

function LocalStorage() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path ='/' render=
            {props => <PostForm {...props} />}>
          </Route>
          <Route exact path='/gallery' render=
            {props => <AllPost {...props} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
    );
}

export default LocalStorage