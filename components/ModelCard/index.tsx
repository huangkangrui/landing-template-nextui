import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../common/icons/CheckIcon';
import { Box } from '../common/styles/box';
import { Flex } from '../common/styles/flex';


const ModelCard = () => {
  return <Card css={{ p: '$6', mw: '500px' }}>
    <Card.Header>
      <Grid.Container css={{ pl: '$6' }}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: '$xs' }}>
            Free
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: '$accents8' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam lacinia, elit
          </Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
    <Card.Body css={{ py: '$4' }}>
      <Text css={{ display: 'contents' }} h2>
        $0{' '}
      </Text>
      <Text css={{ display: 'contents', color: '$accents8' }}>/mo</Text>
      <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

      <Divider />
      <Box as={'ul'}>
        <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
          <CheckIcon />
          <Text span css={{ color: '$accents8' }}>
            1 Team Members
          </Text>
        </Flex>
        <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
          <CheckIcon />
          <Text span css={{ color: '$accents8' }}>
            1 Website
          </Text>
        </Flex>
        <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
          <CheckIcon />
          <Text span css={{ color: '$accents8' }}>
            1 GB Storage
          </Text>
        </Flex>
        <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
          <CheckIcon />
          <Text span css={{ color: '$accents8' }}>
            1 TB Transfer
          </Text>
        </Flex>
        <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
          <CheckIcon />
          <Text span css={{ color: '$accents8' }}>
            Email Support
          </Text>
        </Flex>
      </Box>
    </Card.Body>
  </Card>
}

export default ModelCard