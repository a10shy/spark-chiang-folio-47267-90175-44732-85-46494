const Experience = () => {
  const experiences = [
    {
      company: "Experion Technologies",
      companyUrl: "https://www.experiontech.com",
      title: "Cyber Security Analyst",
      period: "Jun 2025 — Present",
      employmentType: "Full Time",
      description: "Configure and secure AWS infrastructure for internal security tools and services. Conduct cloud security compliance audits using CSPM tools (e.g. Prowler) mapped to CIS/NIST frameworks. Led evaluation of application security tools (Mend, Snyk, SonarQube Enterprise, Trivy, Semgrep) and integrated the best solutions into CI/CD pipelines to shift security left. Perform ongoing security assessments across cloud-native environments, identify gaps, and recommend scalable fixes.",
      technologies: ["AWS", "Azure", "Prowler", "Snyk", "SonarQube", "Trivy", "Semgrep", "CI/CD"],
      contributions: [
        {
          title: "Security Dashboard Platform",
          description: "Developed the Security Dashboard platform (React + Snyk API) that integrates vulnerability findings across 80+ projects, serving 1000+ developers with real-time security insights.",
          impact: "Saves ~$1M annually"
        },
        {
          title: "Cloud Compliance Automation",
          description: "Implemented cloud security compliance frameworks for AWS and Azure, automating audits against industry standards (CIS/NIST) for 40+ client accounts.",
          impact: "Continuous Compliance"
        }
      ]
    },
    {
      company: "Experion Technologies",
      companyUrl: "https://www.experiontech.com",
      title: "Associate Security Analyst",
      period: "May 2024 — Jun 2025",
      employmentType: "Full Time",
      description: "Designed and led the POC and full deployment of Wazuh SIEM, integrating AWS WAF, VPC Flow, CloudTrail logs, and EC2 events for centralized monitoring. Developed and fine-tuned SIEM dashboards for real-time monitoring, incident response, and tailored threat visibility aligned with business risk priorities. Conducted penetration tests and vulnerability assessments on critical cloud and web applications.",
      technologies: ["Wazuh", "AWS WAF", "CloudTrail", "SIEM", "Penetration Testing", "VAPT"],
      contributions: [
        {
          title: "Enterprise SIEM Deployment",
          description: "Deployed an organization-wide Wazuh SIEM solution with custom dashboards, decoders, and rules, significantly improving threat detection and incident response capabilities.",
          impact: "Enhanced Security Monitoring"
        },
        {
          title: "Incident Response Excellence",
          description: "Established comprehensive incident response procedures, enabling clients to quickly mitigate and recover from cybersecurity attacks with minimal downtime.",
          impact: "Improved Response Time"
        }
      ]
    },
    {
      company: "Experion Technologies",
      companyUrl: "https://www.experiontech.com",
      title: "Trainee",
      period: "Oct 2023 — May 2024",
      employmentType: "Full Time",
      description: "Completed intensive training in agile project management and soft skills, building foundational knowledge in security operations and modern development practices.",
      technologies: ["Agile", "Security Fundamentals", "Project Management"]
    },
    {
      company: "Indian Navy (INS Vikrant) via Amal Jyothi College",
      companyUrl: "#",
      title: "Secure Application Developer (Contract)",
      period: "Dec 2021 — Aug 2022",
      employmentType: "Part Time",
      description: "Developed a secure, real-time multi-device communication system for India's first aircraft carrier (INS Vikrant) under an air-gapped, wireless network. Built both Flutter-based mobile and Electron.js desktop apps for managing high-profile guest data, with encrypted local storage and offline backup to ensure data integrity. Configured the isolated network to prevent external interference and implemented defense-grade security protocols.",
      technologies: ["Flutter", "Electron.js", "MongoDB", "Network Security", "Encryption"]
    },
    {
      company: "i-ERA Technical Solutions LLP, AJCE",
      companyUrl: "#",
      title: "Frontend Developer Intern",
      period: "Oct 2019",
      employmentType: "Part Time",
      description: "Contributed to HTML/CSS/JavaScript front-end development based on Figma designs. Implemented UI enhancements and interactive features for client web projects.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"]
    }
  ];

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-foreground sm:col-span-2" aria-label={exp.period}>
                  <div>{exp.period}</div>
                  {exp.employmentType && (
                    <div className="mt-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                      {exp.employmentType}
                    </div>
                  )}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-text-light">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text-light hover:text-primary focus-visible:text-primary group/link text-base"
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exp.title} at ${exp.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
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
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                  {exp.contributions && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Notable Contributions:</p>
                      <ul className="space-y-3">
                        {exp.contributions.map((contribution, contIndex) => (
                          <li key={contIndex} className="rounded-lg border border-border/50 bg-background/50 p-3">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="text-sm font-semibold text-text-light">{contribution.title}</h4>
                              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary whitespace-nowrap">
                                {contribution.impact}
                              </span>
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">{contribution.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
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
        </ol>
      </div>
    </section>
  );
};

export default Experience;
