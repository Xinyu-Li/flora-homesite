import { Layout, Menu, Button } from 'antd';
import type { MenuProps } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router';
import { useMemo } from 'react';
import Logo from '@/components/common/Logo';
import styles from './MainLayout.module.scss';

const { Header, Content, Footer } = Layout;

type NavItem = {
  key: string;
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'team', label: 'Team', href: '/team' },
  { key: 'publications', label: 'Publications', href: '/publications' },
  { key: 'news', label: 'News', href: '/news' },
];

type Props = {
  children: React.ReactNode;
};

const toMenuItems = (items: NavItem[]): MenuProps['items'] =>
  items.map((item) => ({
    key: item.key,
    label: (
      <Link to={item.href} className={styles.menuLink}>
        {item.label}
      </Link>
    ),
  }));

const MainLayout = ({ children }: Props) => {
  const location = useLocation();

  const selectedKey = useMemo(() => {
    const pathname = location.pathname;
    if (!pathname || pathname === '/' || pathname === '/home') return 'home';
    const matched = NAV_ITEMS.find((item) => pathname.startsWith(item.href) && item.href !== '/');
    return matched?.key ?? 'home';
  }, [location.pathname]);

  return (
    <Layout className={styles.shell}>
      <Header className={styles.header}>
        <Logo />
        <div className={styles.navGroup}>
          <Menu
            mode="horizontal"
            selectable
            selectedKeys={[selectedKey]}
            className={styles.menu}
            items={toMenuItems(NAV_ITEMS)}
          />
          <a
            href="https://github.com/Xinyu-Li/FLoRA"
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
          >
            <GithubOutlined />
          </a>
          <Link to="/contact">
            <Button type="primary" size="middle">
              Contact
            </Button>
          </Link>
        </div>
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        (c) {new Date().getFullYear()} - Centre for Learning Analytics (CoLAM) - Monash University
      </Footer>
    </Layout>
  );
};

export default MainLayout;
