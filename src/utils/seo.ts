import { siteConfig } from "../data/site";

export interface MetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

export function formatTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return `${siteConfig.name} | Paket Outbound, Team Building & Gathering Batu Malang`;
  }
  if (pageTitle.includes(siteConfig.name)) {
    return pageTitle;
  }
  return `${pageTitle} | ${siteConfig.name}`;
}

export function getCanonicalUrl(pathname: string): string {
  // Ensure trailing slash per PRD 4.2
  let cleanPath = pathname;
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }
  if (!cleanPath.endsWith("/") && !cleanPath.includes(".")) {
    cleanPath = `${cleanPath}/`;
  }
  return `${siteConfig.url.replace(/\/$/, "")}${cleanPath}`;
}

