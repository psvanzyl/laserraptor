import type { Metadata } from "next";
import LegalDocView from "@/components/LegalDocView";
import { DOCS } from "@/content/legal-docs";

const doc = DOCS.privacy;

export const metadata: Metadata = {
  title: "Privacy statement",
  description:
    "What LaserRaptor and Broomy collect, why, how long we keep it, and how to exercise your GDPR rights. No cookies, no trackers, no analytics.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return <LegalDocView doc={doc} />;
}
