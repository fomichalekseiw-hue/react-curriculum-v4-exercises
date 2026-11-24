import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api.js';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick() {
    try {
      setIsLoading(true);
      setError('');

      const data = await getSinglePost(1);

      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get post'}
      </button>
      <div className="content">
        {error && <p>Error: {error}</p>}

        {isLoading && <p>Loading post...</p>}

        {post && !isLoading && (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        )}
      </div>
    </div>
  );
}
