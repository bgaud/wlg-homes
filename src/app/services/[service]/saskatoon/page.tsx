import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalServiceView from "@/components/LocalServiceView";
import { allSaskatoonServiceSlugs, getSaskatoonService } from "@/lib/saskatoon-services";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return allSaskatoonServiceSlugs().map((service) => ({ service }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const page = getSaskatoonService(service);
  if (!page) return {};
  const url = `${SITE_URL}/services/${page.slug}/saskatoon`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      images: [{ url: page.image, width: 1200, height: 630, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image],
    },
  };
}

export default async function SaskatoonServiceRoute({ params }: Props) {
  const { service } = await params;
  const page = getSaskatoonService(service);
  if (!page) notFound();
  return <LocalServiceView page={page} />;
}
