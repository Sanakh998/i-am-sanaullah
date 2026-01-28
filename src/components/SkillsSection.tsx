import { Lightbulb, BookOpen, BookCheck, ClipboardPenLine, Languages, Users, FileSpreadsheet, Database } from 'lucide-react';

const skills = [
  { name: 'Islamic Theology', level: 95, icon: BookCheck },
  { name: 'Quranic Interpretation Principles', level: 88, icon: BookOpen },
  { name: 'Hadith & its Principles', level: 90, icon: Lightbulb },
  { name: 'Islamic Jurisprudence Principles', level: 85, icon: ClipboardPenLine },
  { name: 'Arabic Grammar & Sentence Structure', level: 92, icon: Languages },
  { name: 'Classroom Management', level: 88, icon: Users },
  { name: 'MS Word & Excel', level: 80, icon: FileSpreadsheet },
  { name: 'Student Data & Record Management', level: 82, icon: Database },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <Lightbulb className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Expertise</span>
          </div>

          <h2 className="heading-section text-foreground">
            <span className="accent-underline">Skills & Abilities</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-subtle rounded-xl p-5 border border-border hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-foreground">{skill.name}</h3>
                        <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
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

export default SkillsSection;
