import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               
               <Text h3>外围工作室</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                 外围工作室提供广州外围、深圳外围、上海外围、北京外围、杭州外围、等国内一二线城市高端外围资源，及珠三角上海地区中端资源，海外部分城市高端资源，拥有海量高端外围模特资源，满足各界顶尖商务人士娱乐活动和商务交际需求。平面模特、商务模特、嫩模、网红模特、胸模、车模、T台模特、彩妆模特、泳装模特、内衣模特、人体模特、足球宝贝、兼职空姐、coser、洛丽塔等高端资源。高端商务模特平台专业为社会名流高端人士提供高端靠谱商务外围服务，找全球伴游、兼职外围女模特、高端商务陪同、极品外围女请与我们联系。
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     高端外围
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                       主要提供上海、广州、深圳、北京、武汉、南京、天津、成都、重庆、福州、厦门、杭州、宁波、温州、天津、郑州、西安、太原、大连、青岛等全国各省会城市及直辖市。
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     中端外围
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        主要提供上海，广州，深圳，北京，南京， 东莞，惠州，长沙，武汉，成都， 贵阳，常州，重庆，西安，珠海， 南宁，佛山，海口，无锡，苏州， 三亚，桂林，杭州，郑州，茂名， 昆明，柳州，厦门等城市，各城市价格均有所不同。
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     国外高端
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        目前提供多伦多，旧金山，伦敦，新加坡。香港。澳门等地区。 价格港澳5000￥起其他城市具体咨询
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
