/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import { Box } from '@/components/common/styles/box';
import { Flex } from '@/components/common/styles/flex';
import { Text } from "@nextui-org/react";


import { useRouter } from "next/router";
import girls from '@/database/guangzhou';
import Image from 'next/image';



const Home: NextPage = (props) => {
  const router = useRouter();
  const id = router.query.id;

  const girl = girls.find(item => item.id === id);
  const images = girl?.image || [];
  return (
    <Box as="main">
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        css={{
          pt: '$20',
        }}
      >

        <Text h3 css={{
          margin: '0 2rem',
            
          }}>{girl?.title}</Text>
        <Text
          span
          css={{
            maxWidth: '800px',
            color: '$accents8',
            textAlign: 'center',
            margin: '0 2rem',
          }}
        >
          {girl?.description}
        </Text>
      </Flex>
      <Flex
        css={{ gap: '2rem', marginTop: '4rem' }}
        wrap={'wrap'}
        justify={'center'}
        direction={'column'}
        align={'center'}
      >
        {
          images.map((url, index) => <img style={{ maxWidth: '80%' }} src={url} alt='' key={url} />)
        }

      </Flex>
    </Box>

  );
};

export default Home;
