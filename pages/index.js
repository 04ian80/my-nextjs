import Head from 'next/head';
import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = '8b282bd74c8ec8d87741915ecfc8adbf';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(URL)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title='Home' />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
