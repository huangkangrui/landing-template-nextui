import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../common/icons/CheckIcon';
import { Box } from '../common/styles/box';
import { Flex } from '../common/styles/flex';
import ModelCard from '../ModelCard';




const Preview = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text h2>模特预览</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
         <ModelCard />
         <ModelCard />
         <ModelCard />
         <ModelCard />
         <ModelCard />
         <ModelCard />

        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};


export default Preview;