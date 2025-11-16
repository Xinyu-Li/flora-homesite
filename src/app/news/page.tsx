import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import NewsTimeline from "@/components/news/NewsTimeline";
import { newsItems } from "@/content/news";

export const metadata: Metadata = {
  title: "News",
  description: "Field notes, workshops, and deployment updates from the FLoRA community.",
};

export default function NewsPage() {
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted)", marginBottom: "0.5rem" }}>
            Dispatches
          </p>
          <h1 style={{ margin: 0 }}>News & events</h1>
          <p>Snapshots from workshops, deployments, and the behind-the-scenes work of the research partnership.</p>
        </div>
        <NewsTimeline items={newsItems} />
      </div>
    </MainLayout>
  );
}
