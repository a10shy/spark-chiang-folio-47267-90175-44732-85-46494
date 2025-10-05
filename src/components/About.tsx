const About = () => {
  return (
    <section id="about" className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">About</h2>
      </div>
      <div className="space-y-4">
        <p>
          I'm a Cybersecurity Analyst at <span className="text-text-light font-medium">Experion Technologies</span>, specializing in application security, cloud security, and building secure development pipelines. I excel at embedding AppSec practices into CI/CD workflows – implementing SAST, SCA, and SBOM licensing (using tools like Snyk, Semgrep, Trivy, SonarQube) to catch vulnerabilities early.
        </p>
        <p>
          My core expertise is <span className="text-text-light font-medium">integrating source-code security testing into the software development lifecycle</span> from the ground up. I also work on cloud security posture management (using Prowler), AWS infrastructure hardening, and Wazuh SIEM deployments. I have performed penetration tests for diverse clients, from Japanese electronics firms to American healthcare and Gulf oil companies.
        </p>
        <p>
          With a background in both development and security, I combine strong programming skills with risk assessment. I collaborate closely with cross-functional teams to improve software security through secure design, coding, and deployment practices. I'm passionate about building tools and dashboards that give teams real-time threat visibility, and about automating security at every stage of delivery.
        </p>
      </div>
    </section>
  );
};

export default About;
