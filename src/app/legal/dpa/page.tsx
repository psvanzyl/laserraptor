import type { Metadata } from "next";
import LegalDocView from "@/components/LegalDocView";
import { DOCS } from "@/content/legal-docs";

const doc = DOCS.dpa;

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "Article 28 GDPR data processing terms for Broomy and other LaserRaptor services, including the technical and organisational measures.",
  alternates: { canonical: "/legal/dpa" },
};

export default function DpaPage() {
  return <LegalDocView doc={doc} />;
}
