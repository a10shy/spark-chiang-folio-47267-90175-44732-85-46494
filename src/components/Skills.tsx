const Skills = () => {
  const skillCategories = [
    {
      category: "Application Security",
      skills: [
        "SAST (Static Application Security Testing)",
        "SCA (Software Composition Analysis)",
        "SBOM Licensing",
        "Vulnerability Assessment",
        "Penetration Testing (VAPT)"
      ]
    },
    {
      category: "Cloud Security",
      skills: [
        "AWS & Azure Misconfigurations",
        "Cloud Security Posture Management (CSPM)",
        "Cloud Security Audits & Compliance",
        "AWS S3 Security, EC2 Hardening"
      ]
    },
    {
      category: "DevSecOps",
      skills: [
        "CI/CD Pipeline Security",
        "Container Scanning (Docker)",
        "IaC Security (Terraform Scanning)",
        "Security Automation & Orchestration"
      ]
    },
    {
      category: "Security Tools",
      skills: [
        "Snyk, Semgrep, Trivy",
        "SonarQube (Enterprise & Community)",
        "Wazuh SIEM",
        "Rapid7 (Nexpose)",
        "Prowler (CSPM)",
        "Burp Suite, OWASP ZAP",
        "DirBuster, Nmap, Wireshark"
      ]
    },
    {
      category: "Security Testing",
      skills: [
        "External Perimeter Scanning",
        "Web Application & API Security Testing",
        "Network Security Assessment",
        "Penetration Testing"
      ]
    },
    {
      category: "Security Operations",
      skills: [
        "Phishing Awareness Campaigns",
        "SIEM Management & Tuning",
        "Incident Response & Root Cause Analysis",
        "Threat Intelligence",
        "Agent-Based Scanning (AWS Inspector)"
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        "Python",
        "JavaScript",
        "Dart (Flutter)",
        "Shell Scripting",
        "C",
        "Java"
      ]
    }
  ];

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Skills</h2>
      </div>
      <div className="grid gap-4">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="group relative rounded-lg border border-border bg-secondary/20 p-5 transition-all hover:bg-secondary/30"
          >
            <h3 className="mb-3 text-sm font-semibold text-text-light">
              {category.category}
            </h3>
            <ul className="space-y-1.5">
              {category.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex} 
                  className="flex items-start text-xs leading-relaxed"
                >
                  <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;