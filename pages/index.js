import Seo from '@/components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title, posterPath) => {
    router.push(`/movies/${title}/${id}/${posterPath}`);
  };
  return (
    <div className='container'>
      <Seo title='Home' />
      {results?.map((movie) => {
        return (
          <div onClick={() => onClick(movie.id, movie.original_title, movie.poster_path)} key={movie.id} className='movie'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <h4>{movie.original_title}</h4>
            </Link>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          background-color: #121212;
          color: #f5c518;
        }
        .movie {
          cursor: pointer;
          background-color: #333;
          padding: 20px;
          border-radius: 12px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .container {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // this code will run ONLY on the SERVER
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
