import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Heart, Zap, Users, Award, TrendingUp } from 'lucide-react';
import { i18n, getDictionary, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.about.meta.title, description: dict.about.meta.description };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.about;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-semibold">{t.heroBadge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.heroTitle1}<br /><span className="text-accent">{t.heroTitle2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">{t.heroDescription}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-accent mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.ourStory}</h2>
              <div className="h-px w-12 bg-accent ml-4" />
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.whatDrivesUs}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.whatDrivesUsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6"><Target className="w-7 h-7 text-accent" /></div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.ourMission}</h3>
              <p className="text-gray-600 leading-relaxed">{t.missionText}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6"><Zap className="w-7 h-7 text-secondary" /></div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.ourVision}</h3>
              <p className="text-gray-600 leading-relaxed">{t.visionText}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6"><Heart className="w-7 h-7 text-accent" /></div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.ourValues}</h3>
              <p className="text-gray-600 leading-relaxed">{t.valuesText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.whatWeBelieve}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.whatWeBelieveSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300"><Zap className="w-6 h-6 text-accent group-hover:text-white" /></div>
              <div><h3 className="text-xl font-bold text-primary mb-2">{t.belief1Title}</h3><p className="text-gray-600 leading-relaxed">{t.belief1Text}</p></div>
            </div>
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300"><Users className="w-6 h-6 text-secondary group-hover:text-white" /></div>
              <div><h3 className="text-xl font-bold text-primary mb-2">{t.belief2Title}</h3><p className="text-gray-600 leading-relaxed">{t.belief2Text}</p></div>
            </div>
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300"><Award className="w-6 h-6 text-accent group-hover:text-white" /></div>
              <div><h3 className="text-xl font-bold text-primary mb-2">{t.belief3Title}</h3><p className="text-gray-600 leading-relaxed">{t.belief3Text}</p></div>
            </div>
            <div className="group flex items-start space-x-5 bg-gray-50 rounded-xl p-6 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300"><Heart className="w-6 h-6 text-secondary group-hover:text-white" /></div>
              <div><h3 className="text-xl font-bold text-primary mb-2">{t.belief4Title}</h3><p className="text-gray-600 leading-relaxed">{t.belief4Text}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.byTheNumbers}</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">{t.byTheNumbersSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, color: 'accent', value: '50+', label: t.stat1 },
              { icon: Target, color: 'secondary', value: '200+', label: t.stat2 },
              { icon: TrendingUp, color: 'accent', value: '10K+', label: t.stat3 },
              { icon: Zap, color: 'secondary', value: '40%', label: t.stat4 },
            ].map(({ icon: Icon, color, value, label }) => (
              <div key={label} className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 text-${color}`} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{value}</div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">{t.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5" /><span>{t.ctaRequestDemo}</span>
            </Link>
            <Link href={`/${lang}/product`} className="bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center">
              {t.ctaExplorePlatform}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
