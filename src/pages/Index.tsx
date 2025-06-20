
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import SubscriptionsSection from '@/components/SubscriptionsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <SubscriptionsSection />
      <Footer />
    </div>
  );
};

export default Index;
