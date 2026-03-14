import { useState, useEffect } from 'react';

const USERS_API = 'https://randomuser.me/api/?results=20';
const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

function randomFollowers() {
  return Math.floor(Math.random() * 900000) + 10000;
}

function randomEngagement() {
  return (Math.random() * 8 + 1).toFixed(1);
}

export function useInfluencers() {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(USERS_API)
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.results.map((user, index) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          username: `@${user.login.username}`,
          email: user.email,
          location: `${user.location.city}, ${user.location.country}`,
          avatar: user.picture.large,
          followers: randomFollowers(),
          engagement: parseFloat(randomEngagement()),
          postUserId: (index % 10) + 1,
        }));
        setInfluencers(mapped);
      })
      .catch(() => setError('Failed to load influencers.'))
      .finally(() => setLoading(false));
  }, []);

  return { influencers, loading, error };
}

export function usePosts(userId) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${POSTS_API}?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [userId]);

  return { posts, loading };
}
