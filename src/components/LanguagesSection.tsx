import { Globe } from 'lucide-react';

const languages = [
  { name: 'Urdu', level: 'Native', proficiency: 100 },
  { name: 'Sindhi', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Professional', proficiency: 75 },
  { name: 'Arabic', level: 'Academic', proficiency: 80 },
];

const LanguagesSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Languages</span>
          </div>

          <h2 className="heading-section text-foreground">
            <span className="accent-underline">Languages I Speak</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-soft card-hover text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {/* Circular progress */}
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      className="fill-none stroke-muted stroke-[6]"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      className="fill-none stroke-primary stroke-[6]"
                      strokeDasharray={`${(lang.proficiency / 100) * 264} 264`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-foreground">
                    {lang.proficiency}%
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {lang.name}
                </h3>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
