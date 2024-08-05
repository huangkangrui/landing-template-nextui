import type { NextPage } from 'next';


import { Hero } from '@/components/common/hero';
import { Trusted } from '@/components/common/trusted';
import { Box } from '@/components/common/styles/box';
import { Features1 } from '@/components/common/features1';
import { Features2 } from '@/components/common/features2';
import { Features3 } from '@/components/common/features3';
import { Testimonials } from '@/components/common/tesminonials';
import { Statistics } from '@/components/common/statistics';
import { Plans } from '@/components/common/plans';
import { Faq } from '@/components/common/faq';
import { Trial } from '@/components/common/trial';


const Home: NextPage = () => {
  return (
    <Box as="main">
           <Hero />
            <Trusted />
            <Features1 />
            <Features2 />
            <Features3 />
            <Testimonials />
            <Statistics />
            <Plans />
            <Faq />
            <Trial />

    </Box>

  );
};

export default Home;
