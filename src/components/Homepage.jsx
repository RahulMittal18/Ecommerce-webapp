import { Slider } from './Slideshow';
import { Shirts } from './Shirts';
import { Tshirts } from './Tshirt';
import { Jeans } from './Jeans';
import { Shorts } from './Shorts';
import { Shoes } from './Shoes';
import { Watches } from './Watches';
import { Kurtas } from './Kurtas';

const Home = () => {
  return (
    <div>
      <Slider />
      <Shirts />
      <Kurtas/>
      <Jeans />
      <Tshirts />
      <Watches/>
      <Shorts />
      <Shoes />
    </div>
  );
};

export default Home;
