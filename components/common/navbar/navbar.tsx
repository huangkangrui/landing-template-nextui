import { Button, Dropdown, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import {Router, useRouter} from "next/router";

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const route = useRouter();
  
  const collapseItems = [
   {title: '广州外围', href: '/guangzhou/1'},

  ];
  return (
    <Navbar
      isBordered
      css={{
        'overflow': 'hidden',
        '&.nextui-navbar-container': {
          background: '$background',
          borderBottom: 'none',
        },
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Link href='/'>
          <AcmeLogo />
        </Link>
        <Text b color="inherit" hideIn="xs">
          外围工作室
        </Text>

        <Navbar.Content
          hideIn="sm"
          css={{
            pl: '6rem',
          }}
        >
            <Link href="/" style={{color: route.pathname === '/' ? 'var(--nextui-colors-link)' : 'inherit'}}>首页</Link>
            <Link href="/guangzhou/1" style={{color: route.route === '/guangzhou/[page]' ? 'var(--nextui-colors-link)' : 'inherit'}}>广州外围</Link>
          {/* </Navbar.Link> */}
          {/* <Navbar.Link>
            <Link href="/guangzhou/1">广州外围</Link>
          </Navbar.Link> */}
          {/* <Navbar.Link href="#">
            深圳外围
          </Navbar.Link> */}
          {/* <Navbar.Link href="#">上海外围</Navbar.Link> */}
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              color="inherit"
              // css={{
              //   minWidth: '100%',
              // }}
              href={item.href}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            // css={{
            //   minWidth: '100%',
            // }}
            target="_blank"
            href="/about"
          >
            联系我们
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Switch
            checked={isDark}
            onChange={(e) =>
              setTheme(e.target.checked ? 'dark' : 'light')
            }
          />
        </Navbar.CollapseItem>
      </Navbar.Collapse>
      <Navbar.Content>


        <Navbar.Item hideIn={'xs'}>
          <Link
            color="inherit"
            // css={{
            //   minWidth: '100%',
            // }}
            target="_blank"
            href="https://github.com/Siumauricio/landing-template-nextui"
          >
            联系我们
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn={'xs'}>
          <Switch
            checked={isDark}
            onChange={(e) =>
              setTheme(e.target.checked ? 'dark' : 'light')
            }
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
