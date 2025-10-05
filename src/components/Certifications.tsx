import { Shield, BookOpen } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH v11)",
      issuer: "EC-Council",
      date: "Licensed since Jan 2023",
      description: "Industry-recognized certification demonstrating expertise in ethical hacking methodologies, security testing, and vulnerability assessment.",
      link: "#"
    },
    {
      name: "IELTS Academic",
      issuer: "English Language Proficiency Test",
      date: "Oct 2025",
      icon: "book",
      description: "",
      link: "#",
      scores: [
        { name: "Overall", score: "8.0" },
        { name: "Reading", score: "8.5" },
        { name: "Listening", score: "9.0" },
        { name: "Speaking", score: "7.0" },
        { name: "Writing", score: "7.0" }
      ]
    }
  ];

  return (
    <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Certifications</h2>
      </div>
      <div>
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index}>
              <div className="group relative rounded-lg border border-border bg-secondary/20 p-6 transition-all hover:bg-secondary/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-text-light">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {cert.issuer}
                    </p>
                    <p className="mt-1 text-xs text-foreground">
                      {cert.date}
                    </p>
                    {cert.description && (
                      <p className="mt-3 text-sm leading-normal">
                        {cert.description}
                      </p>
                    )}
                    {cert.scores && (
                      <div className="mt-3">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm text-muted-foreground">Overall:</span>
                          <span className="text-2xl font-bold text-primary">
                            {cert.scores.find(s => s.name === "Overall")?.score}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {cert.scores.filter(s => s.name !== "Overall").map((score) => (
                            <div key={score.name} className="flex items-center rounded-lg bg-secondary/20 px-3 py-2">
                              <span className="text-xs text-muted-foreground mr-2">{score.name}:</span>
                              <span className="text-sm font-semibold text-primary">{score.score}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-center sm:mt-0">
                    {cert.icon === "book" ? (
                      <BookOpen className="h-8 w-8 text-primary" />
                    ) : (
                      <Shield className="h-8 w-8 text-primary" />
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;