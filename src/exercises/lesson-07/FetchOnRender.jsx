import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api.js';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function fetchPosts() {
      try {
        setIsLoading(true);

        const data = await getPosts();

        if (!ignore) {
          setPosts(data);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading && <p>Loading posts...</p>}

        {error && <p>Error: {error}</p>}

        {!isLoading &&
          !error &&
          posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
      </div>
    </div>
  );
}
