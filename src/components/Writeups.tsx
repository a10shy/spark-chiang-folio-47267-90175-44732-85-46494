import mediumLogo from "@/assets/medium-logo.svg";

const Writeups = () => {
  const writeups = [
    {
      title: "Integrating SAST Tools into CI/CD Pipelines",
      date: "Coming Soon",
      excerpt: "A comprehensive guide on implementing Static Application Security Testing in continuous integration workflows to catch vulnerabilities before they reach production.",
      tags: ["DevSecOps", "SAST", "CI/CD"],
      link: "#"
    },
    {
      title: "Cloud Security Posture Management with Prowler",
      date: "Coming Soon",
      excerpt: "Learn how to automate cloud security assessments and maintain compliance across AWS and Azure using Prowler for continuous monitoring.",
      tags: ["Cloud Security", "AWS", "Azure", "Compliance"],
      link: "#"
    },
    {
      title: "Building a Security Dashboard with React and Snyk API",
      date: "Coming Soon",
      excerpt: "Step-by-step tutorial on creating an enterprise security dashboard that aggregates vulnerability data from multiple sources for real-time monitoring.",
      tags: ["React", "Security", "Dashboard", "API"],
      link: "#"
    }
  ];

  return (
    <section id="writeups" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Writeups</h2>
      </div>
      <div>
        <ul className="space-y-6">
          {writeups.map((writeup, index) => (
            <li key={index}>
              <a
                href={writeup.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative rounded-lg border border-border bg-secondary/20 p-6 transition-all hover:bg-secondary/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={mediumLogo} 
                        alt="Medium" 
                        className="h-8 w-8 opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-text-light group-hover:text-primary transition-colors">
                        {writeup.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                        </svg>
                      </h3>
                      <p className="mt-1 text-xs text-primary font-medium">
                        {writeup.date}
                      </p>
                      <p className="mt-3 text-sm leading-normal">
                        {writeup.excerpt}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tags">
                        {writeup.tags.map((tag) => (
                          <li key={tag}>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Writeups;