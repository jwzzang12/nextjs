import Seo from '@/components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id, posterPath] = params || [];

  return (
    <div className='container'>
      <Seo title={title} />
      <div className='movie'>
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt='poster' className='poster' />
        <h4>{title}</h4>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #121212;
          color: #f5c518;
          padding: 20px;
        }
        .movie {
          background-color: #333;
          border-radius: 12px;
          padding: 20px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          text-align: center;
          max-width: 80%; /* Adjust the size as needed */
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
        }
        h4 {
          font-size: 20px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

//Server side pre-render
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
