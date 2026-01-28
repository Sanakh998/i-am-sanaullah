import { BookOpen } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>

          <h2 className="heading-section text-foreground mb-8">
            <span className="accent-underline">Dedicated to Islamic Education</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a dedicated Islamic educator with strong academic and religious qualifications. 
              I have over three years of experience as a Mudaris, teaching Quran, Hadith, and 
              Islamic Studies.
            </p>
            <p>
              My mission is to spread authentic Islamic knowledge while building strong moral 
              values in students. Through patience, understanding, and a deep commitment to the 
              traditions of Islamic scholarship, I strive to nurture the next generation of 
              believers.
            </p>
          </div>

          {/* Decorative element */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
