export type ProjectKind = "solution" | "personal" | "university";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  kind: ProjectKind;
  status: "Demo" | "En desarrollo" | "Documentado";
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};
