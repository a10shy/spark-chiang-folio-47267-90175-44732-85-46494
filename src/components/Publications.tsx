const Publications = () => {
  const publications = [
    {
      title: "Malayalam Text-to-Speech System using Tacotron2",
      conference: "IEEE Conference",
      year: "2022",
      description: "Research paper on implementing a Tacotron2-based text-to-speech system for Malayalam, a low-resource Dravidian language, using transfer learning techniques. This work was novel as one of the first implementations for the Malayalam language.",
      authors: "Aloyise Biju Mathew, et al.",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Publications</h2>
      </div>
      <div>
        <ul className="space-y-6">
          {publications.map((pub, index) => (
            <li key={index}>
              <div className="group relative rounded-lg border border-border bg-secondary/20 p-6 transition-all hover:bg-secondary/30">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-text-light group-hover:text-primary transition-colors">
                        {pub.title}
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
                      <p className="mt-2 text-sm font-medium text-primary">
                        {pub.conference} • {pub.year}
                      </p>
                      <p className="mt-2 text-xs text-foreground italic">
                        {pub.authors}
                      </p>
                      <p className="mt-3 text-sm leading-normal">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;