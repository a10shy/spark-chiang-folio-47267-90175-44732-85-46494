const Education = () => {
  const education = [
    {
      institution: "Amal Jyothi College of Engineering",
      institutionType: "Autonomous",
      degree: "Engineer's degree, Computer Science",
      period: "Jul 2019 - Jul 2023",
      grade: "9.1 CGPA",
      activities: [
        "Final Year Representative - AJCE Students Council",
        "Student Multimedia Head - Radio 90.0 FM",
        "National Service Scheme Volunteer",
        "IEEE, ACM, EC Council Membership"
      ],
      achievements: [
        "Semester First Rank: S2, S3, S4",
        "Managers Honours List: S1, S2, S3, S4, S6, S7",
        "Principals Honours List: S8"
      ]
    }
  ];

  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Education</h2>
      </div>
      <div>
        <ol className="group/list">
          {education.map((edu, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-foreground sm:col-span-2" aria-label={edu.period}>
                  {edu.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-text-light">
                    <div className="text-base">
                      {edu.institution}
                      {edu.institutionType && (
                        <span className="text-sm text-muted-foreground ml-2">({edu.institutionType})</span>
                      )}
                    </div>
                  </h3>
                  <p className="mt-1 text-sm leading-normal">{edu.degree}</p>
                  {edu.grade && (
                    <p className="mt-1 text-sm font-medium text-primary">Grade: {edu.grade}</p>
                  )}
                  {edu.activities && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Activities and Societies:</p>
                      <ul className="space-y-1">
                        {edu.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start text-sm leading-relaxed">
                            <span className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {edu.achievements && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Academic Achievements:</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm leading-relaxed">
                            <span className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
