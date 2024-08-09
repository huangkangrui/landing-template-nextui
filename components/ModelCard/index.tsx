import { Button, Card, Divider, Grid, Text, Image, Tooltip } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../common/icons/CheckIcon';
import { Box } from '../common/styles/box';
import { Flex } from '../common/styles/flex';
import Link from 'next/link';
import url from '@/assets/model.jpg';
interface Props {
  title: string;
  description: string;
  url: string;
  id: string;
}

const ModelCard = (props: Props) => {
  return <Card css={{ p: '$6', mw: '500px' }}>
    <Link href={`/${props.id}`}>
      <Card.Header>
        <Grid.Container css={{ pl: '$6' }}>
          <Grid xs={12}>
            <Tooltip content={props.title}>
              <Text h4 css={{ lineHeight: '$xs' }}>
                {props.title}
              </Text>
            </Tooltip>
          </Grid>
          <Grid xs={12}>
            <Tooltip content={props.description}>
              <Text css={{ color: '$accents8', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} >
                {props.description}
              </Text>
            </Tooltip>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: '$4' }}>
        <Image
          width={'100%'}
          height={'$80'}
          objectFit='cover'
          alt="全国外围模特"
          src={props.url} />
      </Card.Body>
      </Link>
    </Card>
 
}

export default ModelCard