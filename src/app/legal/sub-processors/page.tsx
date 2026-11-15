import type { Metadata } from "next";
import LegalDocView from "@/components/LegalDocView";
import { DOCS } from "@/content/legal-docs";

const doc = DOCS["sub-processors"];

export const metadata: Metadata = {
  title: "Sub-processors",
  description:
    "Every third party that can reach customer data at LaserRaptor and Broomy: who, where, what data, and how to object to a change.",
  alternates: { canonical: "/legal/sub-processors" },
};

export default function SubProcessorsPage() {
  return <LegalDocView doc={doc} />;
}
