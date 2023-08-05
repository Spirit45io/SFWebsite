import { Default } from '@layouts/Default';
import { Hero, About } from '@parts/home';

export default function Index():JSX.Element{
  return (
    <Default>
      <Hero />
      <About />
    </Default>
  );
};

