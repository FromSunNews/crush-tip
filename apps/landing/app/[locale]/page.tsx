import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ToneStylesSection } from "@/components/ToneStylesSection";
import { CultureFeatureSection } from "@/components/CultureFeatureSection";
import { SpeedFeatureSection } from "@/components/SpeedFeatureSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Navbar dict={dict} locale={locale as Locale} />
      <main className="w-full overflow-hidden">
        <HeroSection dict={dict} />
        <MetricsSection dict={dict} />
        <ProblemSection dict={dict} />
        <FeaturesSection dict={dict} />
        <HowItWorksSection dict={dict} />
        <ToneStylesSection dict={dict} />
        <CultureFeatureSection dict={dict} />
        <SpeedFeatureSection dict={dict} />
        <TestimonialsSection dict={dict} />
        <CtaSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
