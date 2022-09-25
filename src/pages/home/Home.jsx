import { Categories } from './Categories';
import '../../css/Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className='m-auto'>
      <section>
        <div className='home-hero txt-center'>
          <div className='nav_logo'>
            <span className='h1'>MARVEL</span>
          </div>
          <p className='my-8 h2'>
            Your ultimate destination for Marvel merchandise
          </p>
          <Link to={'/products'} className='btn btn-primary'>
            Shop Now
          </Link>
        </div>
      </section>
      <section className='mx-8'>
        <h3 className='txt-center my-4'>Shop by Featured OG Avengers</h3>
        <div className='categories flex-row flex-wrap justify-cntr gap-2'>
          <Categories />
        </div>
      </section>
    </main>
  );
};
