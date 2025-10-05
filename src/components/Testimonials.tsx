const Testimonials = () => {
  const testimonials = [
    {
      quote: "Aloyise consistently demonstrated a profound understanding of complex technical concepts and delivered innovative, high-quality solutions.",
      author: "Anandu Sunil Kumar",
      position: "IBM",
      year: "2024"
    },
    {
      quote: "He was always approachable, patient, and willing to share his knowledge. His professionalism, positive energy, and dedication to quality work were truly inspiring.",
      author: "Nevin Jacob Kurian",
      position: "SRM University",
      year: "2025"
    },
    {
      quote: "Working with Aloyise is truly one of the best experiences. His attention to detail and persistence to achieve perfection are inspiring. His in-depth knowledge of network security helped the team spot mistakes early.",
      author: "Febin K Dominic",
      position: "DeltaX",
      year: "2024"
    }
  ];

  return (
    <section id="testimonials" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Testimonials</h2>
      </div>
      <div>
        <ul className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <div className="group relative rounded-lg border border-border bg-secondary/20 p-6 transition-all hover:bg-secondary/30">
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-primary opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="text-sm leading-relaxed italic text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-light">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-primary">
                    {testimonial.year}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;