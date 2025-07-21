import { getIntl } from "@/lib/intl";
import { Locale } from "@/lib/definitions";
import AvailableCoursesSection from "@/components/AvailableCoursesSection";

interface Props {
  params: {
    lang: Locale;
  };
}

export default function Page({ params: { lang: locale } }: Props) {
  return <PageContent locale={locale} />;
}

async function PageContent({ locale }: { locale: Locale }) {
  const intl = await getIntl(locale);
  return (
    <>
      <section className="hero">
        <div className="container h-full mx-auto">
          <article className="flex flex-col items-start justify-center py-8 h-full max-w-[38rem]">
            <header className="mb-4 w-full">
              <span className="text-title-small font-bold uppercase text-neutral-300">Become a certified coach</span>
              <h1 className="text-display-small">{intl.formatMessage({ id: "page.main.heading" })}</h1>
            </header>
            <p className="text-base">{intl.formatMessage({ id: "page.main.text" })}</p>
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

      <AvailableCoursesSection />
    </>
  );
}
