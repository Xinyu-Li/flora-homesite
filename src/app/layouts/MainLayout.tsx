import React, { FC, useState } from 'react';
import { Button, Layout, Space, Menu } from 'antd';
import type { MenuProps } from 'antd';

import styles from '@/styles/MainLayout.module.scss';

import { useRouter } from 'next/router';

import Logo from '@/components/Logo';
import Link from 'next/link';
import { useAppDispatch } from '@/store/redux-hooks';
import { setCourseData, setStudentData } from '@/store/slices/DataManageSlice';
import { removeToken } from '@/utils/user-token';
// import useLoadUserData from '../hooks/useLoadUserData';
// import { useRequest } from 'ahooks';
// import useNavPage from '../hooks/useNavPage';

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
  },
  {
    label: <Space style={{ color: 'white' }}>DataManage</Space>,
    key: 'data-manage',
    children: [
      {
        label: (
          <Link href="/data-manage/student" style={{ color: 'white' }}>
            StudentManage
          </Link>
        ),
        key: 'student',
      },
      {
        label: (
          <Link href="/data-manage/course" style={{ color: 'white' }}>
            CourseManage
          </Link>
        ),
        key: 'course',
      },
    ],
  },
  {
    label: <Space style={{ color: 'white' }}>Visualization</Space>,
    key: 'visualization',
    children: [
      {
        label: (
          <Link href="/visualization/personalGraph" style={{ color: 'white' }}>
            Personal Level Graph
          </Link>
        ),
        key: 'personalGraph',
      },
      {
        label: (
          <Link href="/visualization/groupColumnGraph" style={{ color: 'white' }}>
            Group Level Column Graph
          </Link>
        ),
        key: 'groupColumnGraph',
      },
      {
        label: (
          <Link href="/visualization/sumActionsPieChart" style={{ color: 'white' }}>
            All Actions Pie Chart
          </Link>
        ),
        key: 'sumActionsPieChart',
      },
      {
        label: (
          <Link href="/visualization/timelineGraph" style={{ color: 'white' }}>
            Timeline Graph
          </Link>
        ),
        key: 'timelineGraph',
      },
    ],
  },
  // {
  //   label: (
  //     <Link href="/config-moodle-courses" style={{ color: 'white' }}>
  //       ConfigMoodle
  //     </Link>
  //   ),
  //   key: 'config-moodle-courses',
  // },
  {
    label: (
      <Link href="/config-tools" style={{ color: 'white' }}>
        ConfigTools
      </Link>
    ),
    key: 'config-tools',
  },
  // {
  //   label: (
  //     <Link href="/config-srl-model" style={{ color: 'white' }}>
  //       ConfigSRLModel
  //     </Link>
  //   ),
  //   key: 'config-srl-model',
  // },
  {
    label: (
      <Link href="/account" style={{ color: 'white' }}>
        ConfigFLoRAUser
      </Link>
    ),
    key: 'config-flora-user',
  },
  {
    label: (
      <Link href={'/#'} style={{ color: 'white' }}>
        Logout
      </Link>
    ),
    key: 'logout',
  },
];

const MainLayout: FC<PropsType> = (props: PropsType) => {
  // const { waitingUserData } = useLoadUserData();
  // useNavPage(waitingUserData);
  const router = useRouter();
  const { asPath } = useRouter();
  const { children } = props;

  const [current, setCurrent] = useState(router.pathname.split('/')[1] || 'Home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    console.log('click ', e.key);

    if (e.key === 'logout') {
      removeToken();
    }
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
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
