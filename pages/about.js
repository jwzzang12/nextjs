import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Seo from '@/components/Seo';

export default function About() {
  return (
    <div>
      <Seo title='About' />
      <main>
        <section className='about'>
          <h1>About</h1>
          <p>
            This is a personal project aimed at honing my skills in Next.js. It provides dynamic routing to fetch and display movie data from an
            external API.
          </p>
          <p>
            I built this app to practice Next.js. It allows me to practice various front-end and back-end technologies while creating a functional and
            enjoyable application
          </p>
          <div className='links'>
            <Link href='https://github.com/jwzzang12' target='_blank'>
              GitHub
            </Link>
            <Link href='https://www.linkedin.com/in/mjiwon/' target='_blank'>
              LinkedIn
            </Link>
          </div>
        </section>
      </main>
      <style jsx>{`
        main {
          padding: 20px;
        }
        .about {
          max-width: 600px;
          margin: 0 auto;
        }
        h1 {
          font-size: 24px;
        }
        p {
          font-size: 18px;
          margin-bottom: 20px;
          color: #fff;
        }
        .links {
          display: flex;
          gap: 20px;
          color: #f5c518;
          font-weight: 600;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
