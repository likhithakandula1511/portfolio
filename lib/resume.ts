import fs from "fs";
import path from "path";

export function resumeFileExists(): boolean {
  try {
    const resumePath = path.join(process.cwd(), "public", "resume.pdf");
    return fs.existsSync(resumePath);
  } catch {
    return false;
  }
}
