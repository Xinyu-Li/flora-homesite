import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import TeamGrid from "@/components/team/TeamGrid";
import { coreTeam } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Researchers, developers, and learning scientists advancing the FLoRA Engine.",
};

export default function TeamPage() {
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted)", marginBottom: "0.5rem" }}>
            Collective intelligence
          </p>
          <h1 style={{ margin: 0 }}>Meet the team</h1>
          <p>Interdisciplinary collaborators spanning learning analytics, psychology, AI, and platform engineering.</p>
        </div>
        <TeamGrid members={coreTeam} />
      </div>
    </MainLayout>
  );
}
