const heroImage = "http://localhost:3845/assets/d505d906af02139d964dddedf5d9b30f53caf96b.png";

export default function ImageTextBanner() {
  return (
    <section className="hero image-text-banner">
      <div className="container h-full mx-auto">
        <article className="flex flex-col items-start justify-center py-8 h-full max-w-[41rem]">
          <header className="mb-6 w-full">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-display-small font-bold text-white">We Are</h1>
              <div className="image-text-banner__brand-pill inline-flex items-center bg-white px-4 py-1 rounded-full border-[3px] border-[#F76900]">
                <span className="text-display-small font-extrabold text-[#003262] tracking-tight">racketpro</span>
              </div>
            </div>
            <h2 className="text-display-small font-bold text-white leading-tight">The Gold Standard</h2>
            <h2 className="text-display-small font-bold text-white leading-tight">of Pickleball Education</h2>
          </header>

          <div className="mb-6 w-full">
            <p className="text-body-medium text-white leading-relaxed">
              Racketpro empowers and inspires current and future coaching leaders within the racket sports community,
              fostering excellence and innovation across the rackets industry.
            </p>
            <p className="text-body-medium text-white leading-relaxed mt-4">That's the racketpro way!</p>
          </div>

          <footer>
            <a href="/" className="btn btn-secondary btn-lg">
              Learn More
            </a>
          </footer>
        </article>
      </div>

      <figure className="absolute inset-0 z-[-1]">
        <img src={heroImage} alt="Racket sports player celebrating" className="w-full h-full object-cover" />
        <div className="image-text-banner__overlay absolute inset-0"></div>
      </figure>
    </section>
  );
}
