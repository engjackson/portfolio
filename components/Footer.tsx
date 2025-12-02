import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-0">
        <p>
          © {new Date().getFullYear()} Jackson Eng · Product & AI Leader. 
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/jacksoneng/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-800"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/engjackson"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-800"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:jackson.eng@gmail.com"
            className="inline-flex items-center gap-1 hover:text-zinc-800"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}