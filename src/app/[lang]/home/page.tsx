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
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <h1 className="text-4xl font-bold mb-4">{intl.formatMessage({ id: "page.main.heading" })}</h1>
      <p className="text-lg text-gray-700">{intl.formatMessage({ id: "page.main.text" })}</p>
    </div>
  );
} 