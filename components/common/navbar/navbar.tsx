import { Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = [
    '广州外围',
    '深圳外围',
    '上海外围',
  ];
  return (
    <Navbar
      isBordered
      css={{
        'overflow': 'hidden',
        '& .nextui-navbar-container': {
          background: '$background',
          borderBottom: 'none',
        },
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
        <Navbar.Content
          hideIn="sm"
          css={{
            pl: '6rem',
          }}
        >
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: 'center',
                  svg: { pe: 'none' },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                广州外围
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                '$$dropdownMenuWidth': '340px',
                '$$dropdownItemHeight': '70px',
                '& .nextui-dropdown-item': {
                  'py': '$4',
                  'svg': {
                    color: '$secondary',
                    mr: '$4',
                  },
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                  },
                },
              }}
            >
              <Dropdown.Item
                key="广州大圈">
                广州大圈
              </Dropdown.Item>
              <Dropdown.Item
                key="广州外围">
                广州外围
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready">
                天河
              </Dropdown.Item>
              <Dropdown.Item
                key="越秀">
                越秀
              </Dropdown.Item>
              <Dropdown.Item
                key="海珠">
               海珠
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#">
            深圳外围
          </Navbar.Link>
          <Navbar.Link href="#">上海外围</Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: '100%',
            }}
            target="_blank"
            href="https://github.com/Siumauricio/landing-template-nextui"
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
            css={{
              minWidth: '100%',
            }}
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
