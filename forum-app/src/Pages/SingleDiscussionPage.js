import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import http from '../plugins/http';

function SingleDiscussionPage() {
  const { id } = useParams();

  useEffect(() => {
    http.get('topic/' + id).then((res) => {
      console.log(res);
      setDiscussion(res.data.discussion);
    });
  }, []);

  return <div>dasdasddaf</div>;
}

export default SingleDiscussionPage;
