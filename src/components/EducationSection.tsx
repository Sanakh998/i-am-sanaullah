import { GraduationCap, BookMarked, Award, BookOpenCheck, Mic } from 'lucide-react';

const educationData = [
  {
    title: 'Hifz-ul-Quran',
    institution: 'Memorization of the Holy Quran',
    year: '2011',
    icon: BookOpenCheck,
  },
  {
    title: 'M.A Islamic Studies & Arabic',
    institution: 'Wafaq ul Madaris',
    year: '2021',
    icon: BookMarked,
  },
  {
    title: 'Tajweed-ul-Quran',
    institution: 'Mahd ul Quran Lahore',
    year: '2022',
    icon: Mic,
  },
  {
    title: 'A.D Arts',
    institution: 'University of Sindh',
    year: '2023',
    icon: GraduationCap,
  },
  {
    title: 'Dars-e-Nizami',
    institution: 'Jamia Badi-ul-uloom',
    year: '2023',
    icon: Award,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Education</span>
          </div>

          <h2 className="heading-section text-foreground">
            <span className="accent-underline">Academic Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary transform -translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-6 shadow-soft card-hover">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground text-xs font-semibold rounded-full mb-2">
                            {item.year}
                          </span>
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
