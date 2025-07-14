import { getIntl } from "@/lib/intl";
import { Locale } from "@/lib/definitions";

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
    <section className="hero aspect-[16/6] relative text-white">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-start justify-center py-8 h-full">
          <header>
            <span className="text-lg font-bold mb-4 uppercase">Become a certified coach</span>
            <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: "page.main.heading" })}</h1>
          </header>
          <p className="text-lg">{intl.formatMessage({ id: "page.main.text" })}</p>
          <footer className="mt-8">
            <a href="/" className="button block bg-orange-500 text-white px-6 py-4 rounded-full">
              Get Started
            </a>
          </footer>
        </div>
      </div>
      <figure className="absolute inset-0 z-[-1]">
        <img src="/images/hero-banner-image.png" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </figure>
    </section>
  );
}
