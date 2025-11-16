'use client';

import { Layout, Menu, Button } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/common/Logo";
import { ensureAntdCompat } from "@/lib/antdCompat";
import styles from "./MainLayout.module.scss";

ensureAntdCompat();

const { Header, Content, Footer } = Layout;

type NavItem = {
  key: string;
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "team", label: "Team", href: "/team" },
  { key: "publications", label: "Publications", href: "/publications" },
  { key: "news", label: "News", href: "/news" },
];

type Props = {
  children: React.ReactNode;
};

const toMenuItems = (items: NavItem[]): MenuProps["items"] =>
  items.map((item) => ({
    key: item.key,
    label: (
      <Link href={item.href} prefetch className={styles.menuLink}>
        {item.label}
      </Link>
    ),
  }));

const MainLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const selectedKey = useMemo(() => {
    if (!pathname) return "home";
    if (pathname === "/" || pathname === "/home") return "home";
    const matched = NAV_ITEMS.find((item) => pathname.startsWith(item.href) && item.href !== "/");
    return matched?.key ?? "home";
  }, [pathname]);

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
          <Link href="/contact" prefetch>
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
