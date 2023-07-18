import Seo from '@/components/Seo';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // async function getData() {
    //   const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
    //   console.log(results);
    //   setMovies(results);
    // }
    // getData();
    //()() immediate functions
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);

  return (
    <div className='container'>
      <Seo title='Home' />
      {!movies && <h4>Loading..</h4>}
      {movies?.map((item, idx) => {
        return (
          <div key={item.id} className='movie'>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            <h4>{item.original_title}</h4>
          </div>
        );
      })}
      <h1>Hello</h1>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
