import { Button } from '@/components/ui/button';
import { ArrowDown, FileDown } from 'lucide-react';
import profileImage from '@/assets/sanaullah.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero pattern-accent overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-0">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground/90 rounded-full text-sm font-medium backdrop-blur-sm">
                  Assalamu Alaikum
                </span>
              </div>

              <h1 className="heading-display text-primary-foreground">
                Sanaullah
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/80 font-heading">
                Islamic Studies Teacher | Mudaris | Quran & Hadith Instructor
              </p>

              <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Dedicated Islamic educator with experience in Quran, Hadith, and Islamic Studies, 
                committed to teaching with authenticity and wisdom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button variant="gold" size="lg" asChild>
                  <a href="#contact">
                    Contact Me
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="/cv.pdf" download>
                    <FileDown className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl rotate-6" />
              <div className="absolute -inset-4 bg-gradient-to-tl from-primary-foreground/10 to-transparent rounded-3xl -rotate-6" />
              
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={profileImage}
                  alt="Sanaullah - Islamic Studies Teacher"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
