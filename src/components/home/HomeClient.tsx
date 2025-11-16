'use client';

import { Button, Card, Divider, Space, Tag, Typography } from "antd";
import Link from "next/link";
import Image from "next/image";
import {
  FocusArea,
  Metric,
  NewsHighlight,
  RegionalSite,
  heroContent as defaultHero,
  cellaHighlight,
} from "@/content/home";
import styles from "./HomeClient.module.scss";

const { Title, Paragraph, Text } = Typography;

type Props = {
  hero?: typeof defaultHero;
  sites: RegionalSite[];
  focusAreas: FocusArea[];
  stats: Metric[];
  highlights: NewsHighlight[];
};

const HomeClient = ({ hero = defaultHero, sites, focusAreas, stats, highlights }: Props) => {
  return (
    <div>
      <section className={`${styles.section} ${styles.hero}`}>
        <Tag color="geekblue">{hero.eyebrow}</Tag>
        <Title level={1} style={{ margin: 0, color: "#ffffff" }}>
          {hero.title}
        </Title>
        <Paragraph>{hero.body}</Paragraph>
        <div className={styles.heroButtons}>
          <Link href={hero.primaryCta.href}>
            <Button type="primary" size="large">
              {hero.primaryCta.label}
            </Button>
          </Link>
          <Link href={hero.secondaryCta.href}>
            <Button size="large">{hero.secondaryCta.label}</Button>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <Title level={3} style={{ marginTop: 0 }}>
          Signals we monitor
        </Title>
        <div className={styles.metrics}>
          {stats.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <div className={styles.metricValue}>{metric.value}</div>
              <Text type="secondary">{metric.label}</Text>
              <Paragraph style={{ marginTop: "0.5rem" }}>{metric.detail}</Paragraph>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Title level={3} style={{ marginTop: 0 }}>
          Regional deployments
        </Title>
        <Paragraph>Partners co-design interventions and share governance models across multiple contexts.</Paragraph>
        <div className={styles.siteGrid}>
          {sites.map((site) => (
            <Card
              key={site.name}
              variant="borderless"
              styles={{ body: { padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" } }}
            >
              <Image
                src={site.image}
                width={360}
                height={210}
                alt={`${site.name} deployment`}
                style={{ borderRadius: "0.75rem", objectFit: "cover", width: "100%", height: "auto" }}
                unoptimized
              />
              <Space direction="vertical" size={4}>
                <Text strong>{site.name}</Text>
                <Paragraph style={{ marginBottom: 0 }}>{site.tagline}</Paragraph>
                <Link href={site.url} target="_blank" rel="noreferrer">
                  <Button type="link">{site.actionLabel}</Button>
                </Link>
              </Space>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Title level={3} style={{ marginTop: 0 }}>
          Current focus areas
        </Title>
        <div className={styles.focusGrid}>
          {focusAreas.map((focus) => (
            <Card
              key={focus.title}
              variant="borderless"
              styles={{ body: { display: "flex", flexDirection: "column", gap: "0.5rem" } }}
            >
              <Title level={4} style={{ margin: 0 }}>
                {focus.title}
              </Title>
              <Paragraph>{focus.description}</Paragraph>
              <Divider style={{ margin: "0.5rem 0" }} />
              <ul style={{ paddingLeft: "1.25rem", margin: 0, color: "var(--muted)" }}>
                {focus.bullets.map((point) => (
                  <li key={point} style={{ marginBottom: "0.35rem" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Title level={3} style={{ marginTop: 0 }}>
          CELLA partnership
        </Title>
        <Paragraph>{cellaHighlight.description}</Paragraph>
        <Divider />
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", color: "var(--muted)" }}>
          {cellaHighlight.bullets.map((item) => (
            <li key={item} style={{ marginBottom: "0.4rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <Link href={cellaHighlight.actionUrl} target="_blank" rel="noreferrer">
          <Button type="primary">{cellaHighlight.actionLabel}</Button>
        </Link>
      </section>

      <section className={styles.section}>
        <Title level={3} style={{ marginTop: 0 }}>
          Field notes & news
        </Title>
        <div className={styles.newsList}>
          {highlights.map((item) => (
            <Card key={item.title} variant="borderless">
              <Space direction="vertical" size={4} style={{ width: "100%" }}>
                <Text type="secondary">{item.date}</Text>
                <Title level={4} style={{ margin: 0 }}>
                  {item.title}
                </Title>
                <Paragraph style={{ marginBottom: "0.5rem" }}>{item.summary}</Paragraph>
                {item.href && (
                  <Link href={item.href} target="_blank" rel="noreferrer">
                    <Button type="link">Read more</Button>
                  </Link>
                )}
              </Space>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeClient;
