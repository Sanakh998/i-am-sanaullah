import { Briefcase, Calendar, MapPin, Heart } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Experience</span>
          </div>

          <h2 className="heading-section text-foreground">
            <span className="accent-underline">Teaching Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-soft">
                  <Briefcase className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-accent/20 text-accent-foreground font-semibold rounded-full text-sm">
                    Current Position
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>3 Years Experience</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Mudaris (Islamic Teacher)
                </h3>

                <div className="flex items-center gap-2 text-primary mb-6">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Madarsa Abi Hurairah, Shahdadpur</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Heart className="h-4 w-4 text-accent" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Teaching comprehensive Islamic sciences including Quran, Hadith, and Fiqh',
                      'Student moral and ethical training based on Islamic principles',
                      'Developing curriculum aligned with traditional Islamic education',
                      'Mentoring students in their spiritual and academic growth',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
