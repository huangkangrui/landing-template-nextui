import type { NextPage } from 'next';

import { Box } from '@/components/common/styles/box';
import { Flex } from '@/components/common/styles/flex';
import { Pagination } from "@nextui-org/react";
import ModelCard from '@/components/ModelCard';

import { useRouter } from "next/router";
import girls from '@/pages/database/guangzhou';




const Home: NextPage = (props) => {
  const { query, push } = useRouter();
  const page = Number(query.page) || 1;
  const pageSize = 4;
  const total = girls.length
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  console.log(Number(query.page));

  return (
    <Box as="main">
      <Flex
        css={{ gap: '2rem', width: '100%', marginTop: '4rem' }}
        wrap={'wrap'}
        justify={'center'}
      >
        {
          girls.slice(start, end).map((model, index) =>
            <ModelCard
              url={model.image[1]}
              key={model.id}
              id={model.id}
              title={model.title}
              description={model.description} />)
        }


      </Flex>
      <Flex justify={'center'} css={{ marginRight: '10rem', marginTop: '6rem', width: '100%' }}>
        <Pagination 
        total={Math.ceil(total / pageSize)} 
        page={Number(query.page)} 
        onChange={(number) => push(`/guangzhou/${number}`)} />
      </Flex>
    </Box>

  );
};

export default Home;
