import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mr.ssk998@gmail.com',
    href: 'mailto:mr.ssk998@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+92 301 0348300',
    href: 'https://wa.me/923010348300',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sindh, Pakistan',
    href: null,
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Contact</span>
          </div>

          <h2 className="heading-section text-foreground">
            <span className="accent-underline">Get In Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Feel free to reach out for inquiries about Islamic education, teaching opportunities, or collaboration.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-primary-foreground/70 text-sm mb-1">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block hover:translate-x-1 transition-transform"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-soft">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
