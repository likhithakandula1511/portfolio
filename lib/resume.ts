import fs from "fs";
import path from "path";

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

/**
 * External links (e.g. a Google Drive share link) are assumed to be available.
 * Local paths like "/resume.pdf" are checked against the public folder.
 */
export function resumeAvailable(resumeUrl: string): boolean {
  if (!resumeUrl) return false;
  if (isExternalUrl(resumeUrl)) return true;
  try {
    const resumePath = path.join(process.cwd(), "public", resumeUrl.replace(/^\//, ""));
    return fs.existsSync(resumePath);
  } catch {
    return false;
  }
}
