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
          {
            [
              {
                title: '小小 𝐇𝐞𝐢𝐠𝐡𝐭 身高170 • 𝐖𝐞𝐢𝐠𝐡𝐭体重/90', description: `
                • 𝐁𝐮𝐬𝐭胸围/D             
                • 𝐀𝐠𝐞年龄/04 短期兼职.声音甜美，🥢腿，完美身材 •待客热情 身体柔软 配合度高💯 
                • 不催不事 乖巧听话 • 实力喜神 好评神器`, url: '/static/preview/1.jpg'
              },
              {
                title: '汤院 03 171C ', description: `
                💜蜜桃臀多汁 软糯 与周海媚相似80％ 
                💙 171  50公斤 03年 柳腰细腿 
                💚H好不事   女友值爆棚 
                💞涵养素质极高  期待与你相遇`, url: '/static/preview/2.jpg'
              },
              {
                title: '小粉 175- E🐻', 
                description: `
                小红书博主-店铺主理人 偶尔兼职 遇见便是好运😍`, 
                url: '/static/preview/3.jpg'
              },
              {
                title: '新疆妹 真实02年   172真🐻D🍬', 
                description: `
               舞蹈学院在校学生，纯兼职 全身雪白 欢迎体验 无一丝风尘味 
               ⭐ 高素质 肤皮‬非常白滑五官精致                
               ⭐ 涩羞‬可爱 乖听巧‬话 气质甜美款 
               ⭐ 年轻💦 多 👇 紧面‬致有弹性`, 
                url: '/static/preview/4.jpg'
              },
              {
                title: '悦悦  03年166天然d', 
                description: `
                兼职短开`, 
                url: '/static/preview/5.jpg'
              },
              {
                title: 'Cindy IN ＃GUANGZHOU＃ 甜美少女う小清新', 
                description: `
                初恋女朋友 可盐可甜 性格nice 175cm  04年.  🐻c  A4腰 👸氧气甜妹，初恋女朋友feel. 清纯与精致兼具，美貌与气质共存`, 
                url: '/static/preview/6.png'
              },
            ].map((model, index) =>
              <ModelCard
                url={model.url}
                key={index}
                title={model.title}
                description={model.description} />)
          }


        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};


export default Preview;