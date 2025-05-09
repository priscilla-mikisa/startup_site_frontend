// import React from 'react';
// import HeroSection from './components/HeroSection/page';
// import BenefitsSection from './components/BenefitSection';
// import FormSection from './components/Founders';

// export default function Home() {
//   return (
//     <main>
//       <HeroSection />
//       <BenefitsSection />
//       <FormSection title={''} children={undefined} />
//     </main>
//   );
// }

// src/app/page.tsx
import React from 'react';
import HeroSection from './components/HeroSection/page';
import BenefitsSection from './components/BenefitSection';
// import FormSection from './components/Founders';
// import FounderForm from './components/Form';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      {/* <FormSection title="Startup Application">
        <FounderForm />
      </FormSection> */}
    </main>
  );
}