import React, { useState, useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import { serverTimestamp } from '@firebase/firestore';

const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Omekagu Ebuka',
      description: 'this is a test ',
      message: input,
      photoUrl: '',
      timestamp: serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon className="create" />
          <form className="feed__form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="photo" color="#7005f9" />
          <InputOption Icon={SubscriptionIcon} title="video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#cbc0cd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc1fe"
          />
        </div>
      </div>

      {/* Posts*/}

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photourl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
