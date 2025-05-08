import React from 'react';
import HeroSection from './components/HeroSection/page';
import BenefitsSection from './components/BenefitSection';
import FormSection from './components/Founders';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FormSection title={''} children={undefined} />
    </main>
  );
}