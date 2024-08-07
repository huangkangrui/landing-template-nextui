import type { NextPage } from 'next';


import { Hero } from '../components/common/hero';

import { Box } from '../components/common/styles/box';
import { Features1 } from '../components/common/features1';

import { Faq } from '../components/common/faq';

import Preview from '@/components/Preview';


const Home: NextPage = () => {
  return (
    <Box as="main">
      <Hero />
      <Features1 />
      <Preview />
      <Faq />
    </Box>

  );
};

export default Home;
