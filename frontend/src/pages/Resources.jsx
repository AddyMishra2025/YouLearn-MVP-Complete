import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { BookOpen, Zap, Layers, ArrowRight, Play } from 'lucide-react';

const Resources = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { query, mode, level, role } = location.state || {};

  const resources = [
    {
      id: 1,
      category: 'Beginners',
      title: 'Key concepts and terminology',
      description: '15 minutes to understand the fundamentals',
      duration: '15 min',
      icon: BookOpen,
    },
    {
      id: 2,
      category: 'Intermediate',
      title: 'Tools and common workflows',
      description: '30 minutes to build working knowledge',
      duration: '30 min',
      icon: Zap,
    },
    {
      id: 3,
      category: 'Advanced',
      title: 'Strategies and professional techniques',
      description: '45 minutes to master the nuances',
      duration: '45 min',
      icon: Layers,
    },
  ];

  const handleContinue = () => {
    navigate('/lesson/1', {
      state: { query, mode, level, role, fromResources: true },
    });
  };

  const handleBack = () => {
    navigate('/learning-path', {
      state: { query, mode, level, role },
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header showBack />

      {/* Hero Section */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Prepare
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Start strong
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-6">
            Curated resources to empower you so you learn faster and retain more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="dark" onClick={handleContinue}>
              Begin
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={handleBack}
            >
              Skip
            </Button>
          </div>
        </div>
      </section>

      {/* Essential Resources */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              Resources
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Essential resources for your path
            </h2>
            <p className="text-primary-foreground/80">
              Start with what matters most to you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="p-6 flex flex-col">
                  <div className="bg-muted/30 rounded-lg mb-4 h-32 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-3">
                    {resource.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-muted-foreground">
                      {resource.duration}
                    </span>
                    <Button
                      variant="link"
                      className="p-0 h-auto"
                      onClick={() =>
                        navigate(`/lesson/${resource.id}`, {
                          state: { query, mode, level, role },
                        })
                      }
                    >
                      Start <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Prepare Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Why prepare before you start
                </h2>
                <p className="text-muted-foreground mb-6">
                  We've pulled together the most critical material to give you the
                  foundation you need. Watch these before diving into your learning
                  path, and everything will click faster and stick longer.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={handleBack}>
                    Skip
                  </Button>
                  <Button onClick={handleContinue}>Learn</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Ready to Start */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to start
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            You've prepared well. Return to your path and begin learning
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="dark" onClick={handleContinue}>
              Continue Preparation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={handleBack}
            >
              Back
            </Button>
          </div>
        </div>
      </section>

      {/* Clarifications */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-foreground mb-8 text-center">
            Clarifications
          </h2>
          <p className="text-center text-primary-foreground/80 mb-8">
            Got questions? Learn more about how it works
          </p>
          <Accordion type="single" collapsible className="bg-card rounded-lg p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What exactly are these resources?
              </AccordionTrigger>
              <AccordionContent>
                These are short, focused resources that give you the basics you'll
                need before diving into your learning path. They're carefully
                selected to provide foundational knowledge so the main lessons make
                more sense.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Must I finish them all first?</AccordionTrigger>
              <AccordionContent>
                No, you can skip them and go straight to your learning path. These
                resources are optional but highly recommended if you're new to the
                topic or want a stronger foundation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I come back to them later?
              </AccordionTrigger>
              <AccordionContent>
                Yes! These resources remain available at any time. You can revisit
                them whenever you need to refresh your knowledge or fill in gaps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How much time should I spend here?
              </AccordionTrigger>
              <AccordionContent>
                It depends on your experience level. Beginners might spend 30-60
                minutes total, while those with some background might only need
                15-30 minutes. Go at your own pace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Will this hold me back?</AccordionTrigger>
              <AccordionContent>
                Not at all. In fact, these resources help you move faster through
                the main lessons by building a strong foundation. Think of it as
                investing time now to save time later.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Need Help */}
      <section className="px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need more help?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            We're here to support your learning journey
          </p>
          <Button
            variant="outline"
            className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            Reach out
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
