'use client';
import React, { FC, useState } from 'react';
import { Button, Layout, Space, Menu } from 'antd';
import type { MenuProps } from 'antd';

import styles from './MainLayout.module.scss';

import { useRouter } from 'next/router';

import Logo from '../components/Logo';
import Link from 'next/link';

type PropsType = {
  children: React.ReactNode | React.ReactNode[];
};

const { Header, Content, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: (
      <Link href="/" style={{ color: 'white' }}>
        Home
      </Link>
    ),
    key: 'Home',
  },
  {
    label: (
      <Link href="/team" style={{ color: 'white' }}>
        Team
      </Link>
    ),
    key: 'Team',
  },
  {
    label: (
      <Link href="/publications" style={{ color: 'white' }}>
        Publications
      </Link>
    ),
    key: 'Publications',
  },
  {
    label: (
      <Link href="/contact" style={{ color: 'white' }}>
        Contact Us
      </Link>
    ),
    key: 'Contact',
  }
];

const MainLayout: FC<PropsType> = (props: PropsType) => {
  // const { waitingUserData } = useLoadUserData();
  // useNavPage(waitingUserData);
  // const router = useRouter();
  // const { asPath } = useRouter();
  const { children } = props;

  // const [current, setCurrent] = useState(router.pathname.split('/')[1] || 'Home');
  //
  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   console.log('click ', e.key);
  //
  //   // if (e.key === 'logout') {
  //   //   removeToken();
  //   // }
  //   setCurrent(e.key);
  // };

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <Menu theme="dark"  mode="horizontal" items={items} />
        </div>
      </Header>
      <Layout className={styles.main}>
        <Content style={{ padding: '16px 16px' }}>
          {/*{waitingUserData ? (*/}
          {/*  <div style={{ textAlign: 'center', marginTop: '60px' }}>*/}
          {/*    <Spin />*/}
          {/*  </div>*/}
          {/*) : (*/}
          {/*  <Outlet />*/}
          {/*)}*/}
          {children}
        </Content>
      </Layout>
      <Footer className={styles.footer}>&copy; 2024 - COLAM - MONASH UNIVERSITY</Footer>
    </Layout>
  );
};

export default MainLayout;
