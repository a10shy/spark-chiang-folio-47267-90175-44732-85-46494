import securityDashboard from "@/assets/project-security-dashboard.jpg";
import cinchApp from "@/assets/project-cinch-landscape.jpg";
import adithiProject from "@/assets/project-adithi.jpg";
import prowlerProject from "@/assets/project-prowler.jpg";
import { Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Adithi - Project for Indian Navy",
      description: "Part of 'Project Adithi' for INS Vikrant. Developed a secure multi-device app suite for managing VIP guest data over an encrypted, closed wireless network. The system was handed over to the Indian Navy in Aug 2022.",
      technologies: ["Flutter", "Electron.js", "Offline Network", "MongoDB", "Security"],
      link: "#",
      image: adithiProject,
      period: "Sep 2021 — Aug 2022",
      category: "",
      featured: true
    },
    {
      title: "XSecOps - Security Dashboard Platform",
      description: "Built an enterprise dashboard (React + TypeScript) integrating the Snyk API (Enterprise Level – SCA, SAST, SBOM), Semgrep (Community), Trivy (OpenSource) in the development pipeline to visualize vulnerability findings across 80+ projects. Deployed at Experion, this platform saves the company ~$1M annually and serves 1000+ developers with role-based views.",
      technologies: ["React", "TypeScript", "Snyk API", "Semgrep", "Trivy", "Enterprise"],
      link: "#",
      image: securityDashboard,
      period: "2025",
      category: "",
      featured: true
    },
    {
      title: "Malayalam TTS Engine",
      description: "Final-year research project implementing a Tacotron2-based text-to-speech system for Malayalam (a low-resource Dravidian language) by transfer-learning Tacotron2 Model. This work was novel (one of the first for Malayalam) and published in an IEEE conference paper.",
      technologies: ["Python", "Tacotron2", "TTS", "Machine Learning", "Research"],
      link: "#",
      period: "Apr 2023 — May 2023",
      category: "Academic Project",
      featured: true
    },
    {
      title: "Prowler - Cloud Security Posture Management",
      description: "Developed an automated security monitoring framework for multi-cloud (AWS and Azure) using Prowler. Integrated 40+ client cloud accounts checking cloud misconfigurations, continuous compliance checks (NIST 800, GDPR, FedRamp, CIS) and baseline enforcement to detect and remediate threats in real time.",
      technologies: ["Prowler", "AWS", "Azure", "CSPM", "Compliance", "NIST", "GDPR"],
      link: "#",
      image: prowlerProject,
      period: "2025",
      category: ""
    },
    {
      title: "Malayalam Autonomous Bus Stand Announcement System",
      description: "An Autonomous Bus Stand Announcement System Using a Self Built Malayalam TTS Engine. Uses Haar Cascade Classifier and Python OCR Library to detect Bus Number Plates. Uses Google Excel Sheet API to store Bus Number Plates and Destination Routes. Announces the Bus Name and Bus Routes once Bus enters the Terminal.",
      technologies: ["OpenCV", "Image Processing", "Python", "Pandas", "OCR"],
      link: "https://github.com/mathai-ai/bus_terminal_announcement",
      period: "Oct 2022 — Jun 2023",
      category: "Academic Project"
    },
    {
      title: "Cinch - Accessibility Social Media App",
      description: "A Flutter-based Android app (hosted on Firebase Auth, Firestore) designed for deaf and mute users. Cinch connects specially-abled persons within a location and offers real-time sign-language recognition (English alphabet) for inclusive communication.",
      technologies: ["Flutter", "Firebase", "Firestore", "Accessibility", "Sign Language"],
      link: "#",
      image: cinchApp,
      period: "Jan 2022 — Apr 2022",
      category: "Academic Project"
    },
    {
      title: "Duolingo Clone",
      description: "A feature-complete language-learning web app (clone of Duolingo) built from scratch with vanilla HTML, CSS/SCSS, and JavaScript (using Vite.js) without using any Framework. Demonstrated strong fundamentals with an interactive interface and modern build tooling.",
      technologies: ["HTML", "CSS", "SCSS", "JavaScript", "Vite.js"],
      link: "#",
      period: "2023",
      category: "Academic Project"
    }
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <div className="z-10 sm:col-span-8">
                  <h3 className="font-medium leading-snug text-text-light">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.featured && (
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      )}
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text-light hover:text-primary focus-visible:text-primary group/link text-base"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={project.title}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </a>
                      {project.category && (
                        <span className="text-xs font-medium text-muted-foreground">· {project.category}</span>
                      )}
                    </div>
                  </h3>
                  {project.period && (
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      {project.period}
                    </div>
                  )}
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
