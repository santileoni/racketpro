import { getIntl } from "@/lib/intl";
import { Locale } from "@/lib/definitions";

export default async function Hero({ locale }: { locale: Locale }) {
  const intl = await getIntl(locale);
  return (
    <section className="hero">
      <div className="container h-full mx-auto">
        <article className="flex flex-col items-start justify-center py-8 h-full max-w-2xl">
          <header className="mb-4">
            <span className="text-title-large font-bold uppercase">Become a certified coach</span>
            <h1 className="text-display-medium">{intl.formatMessage({ id: "page.main.heading" })}</h1>
          </header>
          <p className="text-body-large">{intl.formatMessage({ id: "page.main.text" })}</p>
          <footer className="mt-8">
            <a href="/" className="btn btn-secondary">
              Get Started
            </a>
          </footer>
        </article>
      </div>
      <figure className="absolute inset-0 z-[-1]">
        <img src="/images/hero-banner-image.png" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </figure>
    </section>
  );
}
