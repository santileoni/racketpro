const heroImage = "http://localhost:3845/assets/d505d906af02139d964dddedf5d9b30f53caf96b.png";

export default function ImageTextBanner() {
  return (
    <section className="hero image-text-banner">
      <div className="container h-full mx-auto">
        <article className="flex flex-col items-start justify-center py-8 h-full max-w-[41rem]">
          <header className="mb-6 w-full">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-display-small font-bold text-white">
                We Are
                <div className="image-text-banner__brand-pill inline-flex items-center bg-white px-4 pb-[0.25rem] rounded-full border-[3px] border-brand-orange ml-2">
                  <span className="text-display-small font-extrabold block text-brand-navy tracking-tight">
                    racketpro
                  </span>
                </div>
                The Gold Standard of Pickleball Education
              </h2>
            </div>
          </header>

          <div className="mb-6 w-full typo typo--white">
            <p>
              Racketpro empowers and inspires current and future coaching leaders within the racket sports community,
              fostering excellence and innovation across the rackets industry.
            </p>
            <p>That&apos;s the racketpro way!</p>
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
