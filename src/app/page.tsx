import Image from 'next/image';

import Heading from './components/atoms/Heading';

const Home = () => (
  <div className="mx-auto max-w-5xl">
    <main>
      <Heading type="h1">Test heading</Heading>
      <p>Test paragraph</p>
    </main>
    <footer></footer>
  </div>
);

export default Home;
