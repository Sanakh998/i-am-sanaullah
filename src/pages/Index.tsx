import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
