import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PathGenerationLoader } from '../components/LoadingState';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../components/ui/collapsible';
import { Play, Clock, Target, TrendingUp, Layers, ArrowRight, ChevronDown, CheckCircle, Sparkles } from 'lucide-react';

const LearningPath = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState(location.state?.mode || 'quick');
  const [selectedLevel, setSelectedLevel] = useState(
    location.state?.difficulty || location.state?.level || null
  );
  const [selectedRole, setSelectedRole] = useState(location.state?.role || null);
  const [query, setQuery] = useState(location.state?.query || 'Python');
  const [isGenerating, setIsGenerating] = useState(false);

  // Simulate AI path generation
  useEffect(() => {
    if (location.state?.generated && !selectedLevel && !selectedRole) {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
      }, 2000);
    }
  }, [location.state?.generated, selectedLevel, selectedRole]);

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const roles = [
    {
      title: 'Data Analyst',
      description: 'Analyze data and create insights',
      icon: TrendingUp,
    },
    {
      title: 'Product Manager',
      description: 'Build and manage products',
      icon: Target,
    },
    {
      title: 'Growth Marketer',
      description: 'Drive growth and acquisition',
      icon: Layers,
    },
  ];

  const quickLearningLessons = {
    Beginner: [
      {
        id: 1,
        title: 'Fundamentals of the skill',
        description: 'Learn core concepts and terminology',
        duration: '15 minutes',
        icon: Target,
      },
      {
        id: 2,
        title: 'Basic concepts and terminology',
        description: '15 minutes to understand the fundamentals',
        duration: '15 minutes',
        icon: Play,
      },
    ],
    Intermediate: [
      {
        id: 3,
        title: 'Intermediate tools and common workflows',
        description: '30 minutes to build working knowledge',
        duration: '30 minutes',
        icon: Clock,
      },
      {
        id: 4,
        title: 'Applying what you\'ve learned',
        description: 'Practice with real examples',
        duration: '20 minutes',
        icon: Play,
      },
    ],
    Advanced: [
      {
        id: 5,
        title: 'Advanced techniques and professional techniques',
        description: '45 minutes to master the nuances',
        duration: '45 minutes',
        icon: Layers,
      },
      {
        id: 6,
        title: 'Advanced techniques and real examples',
        description: 'Nineteen minutes. Learn from experts.',
        duration: '19 minutes',
        icon: TrendingUp,
      },
    ],
  };

  const careerPathSections = [
    {
      level: 'Basics',
      lessons: [
        {
          id: 1,
          title: 'Introduction to the role',
          description: 'Understand responsibilities and expectations',
          duration: '20 minutes',
        },
        {
          id: 2,
          title: 'Essential skills overview',
          description: 'Core competencies you need',
          duration: '25 minutes',
        },
      ],
    },
    {
      level: 'Intermediate',
      lessons: [
        {
          id: 3,
          title: 'Tools and workflows',
          description: 'Master the day-to-day toolkit',
          duration: '30 minutes',
        },
        {
          id: 4,
          title: 'Real-world applications',
          description: 'Practice with actual scenarios',
          duration: '35 minutes',
        },
      ],
    },
    {
      level: 'Advanced',
      lessons: [
        {
          id: 5,
          title: 'Advanced strategies',
          description: 'Expert-level techniques',
          duration: '40 minutes',
        },
        {
          id: 6,
          title: 'Career advancement',
          description: 'How to grow in this role',
          duration: '30 minutes',
        },
      ],
    },
  ];

  const handleChangePrompt = () => {
    navigate('/', { replace: false });
  };

  const handleStartLesson = (lessonId) => {
    navigate(`/lesson/${lessonId}`, {
      state: { query, mode, level: selectedLevel, role: selectedRole },
    });
  };

  const handleContinue = () => {
    navigate('/resources', {
      state: { query, mode, level: selectedLevel, role: selectedRole },
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header showBack />

      {isGenerating ? (
        <PathGenerationLoader />
      ) : (
        <>
          {/* Hero Section */}
          <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Ready
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Your learning path
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-6">
            Start with lesson one or adjust your path if something doesn't fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="dark" onClick={handleContinue}>
              Start
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={handleChangePrompt}
            >
              Change Prompt
            </Button>
          </div>
        </div>
      </section>

      {/* Mode Selection */}
      <section className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-3 mb-12">
            <Button
              variant={mode === 'quick' ? 'dark' : 'outline'}
              onClick={() => setMode('quick')}
              className={
                mode !== 'quick'
                  ? 'bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground text-sm sm:text-base'
                  : 'text-sm sm:text-base'
              }
              size="sm"
            >
              Quick Learning
            </Button>
            <Button
              variant={mode === 'career' ? 'dark' : 'outline'}
              onClick={() => setMode('career')}
              className={
                mode !== 'career'
                  ? 'bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground text-sm sm:text-base'
                  : 'text-sm sm:text-base'
              }
              size="sm"
            >
              Career Path
            </Button>
          </div>

          {mode === 'quick' && (
            <div>
              {!selectedLevel ? (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                      Question
                    </h2>
                    <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                      How much time you'll invest
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {levels.map((level) => (
                      <Card
                        key={level}
                        className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                        onClick={() => setSelectedLevel(level)}
                      >
                        <h3 className="text-xl font-semibold mb-2">{level}</h3>
                        <p className="text-sm text-muted-foreground">
                          {level === 'Beginner' &&
                            'Start with the basics - 2 hours total'}
                          {level === 'Intermediate' &&
                            'Build working knowledge - 4 hours total'}
                          {level === 'Advanced' &&
                            'Master the skill - 6+ hours total'}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                        Your structured learning path
                      </h2>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                        onClick={() => setSelectedLevel(null)}
                      >
                        Change Level
                      </Button>
                    </div>
                    <p className="text-primary-foreground/80">
                      Each lesson builds on the last. Work through them in order or
                      skip ahead if you know the material.
                    </p>
                  </div>

                  {Object.entries(quickLearningLessons).map(([level, lessons]) => (
                    <div key={level} className="mb-12">
                      <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                        {level}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {lessons.map((lesson) => {
                          const Icon = lesson.icon;
                          return (
                            <Card
                              key={lesson.id}
                              className="p-6 hover:shadow-lg transition-shadow"
                            >
                              <Icon className="w-8 h-8 text-primary mb-3" />
                              <h4 className="text-lg font-semibold mb-2">
                                {lesson.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                {lesson.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  {lesson.duration}
                                </span>
                                <Button
                                  variant="link"
                                  className="p-0 h-auto"
                                  onClick={() => handleStartLesson(lesson.id)}
                                >
                                  Play <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {mode === 'career' && (
            <div>
              {!selectedRole ? (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                      Choose your career path
                    </h2>
                    <p className="text-primary-foreground/80">
                      Select a role to see the skills you need
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      return (
                        <Card
                          key={role.title}
                          className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                          onClick={() => setSelectedRole(role.title)}
                        >
                          <Icon className="w-10 h-10 text-primary mb-4" />
                          <h3 className="text-xl font-semibold mb-2">
                            {role.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {role.description}
                          </p>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                        {selectedRole} Path
                      </h2>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                        onClick={() => setSelectedRole(null)}
                      >
                        Change Role
                      </Button>
                    </div>
                    <p className="text-primary-foreground/80">
                      Progress through each level to master this career path
                    </p>
                  </div>

                  {careerPathSections.map((section) => (
                    <div key={section.level} className="mb-12">
                      <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                        {section.level}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.lessons.map((lesson) => (
                          <Card
                            key={lesson.id}
                            className="p-6 hover:shadow-lg transition-shadow"
                          >
                            <h4 className="text-lg font-semibold mb-2">
                              {lesson.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {lesson.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </span>
                              <Button
                                variant="link"
                                className="p-0 h-auto"
                                onClick={() => handleStartLesson(lesson.id)}
                              >
                                Start <ArrowRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Customization Section */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 bg-card/50">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Customize
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Reshape your path whenever you need to
              </h2>
              <p className="text-muted-foreground mb-6">
                Not happy with what the AI suggested? Start over with a different
                angle or add calendar reminders so learning happens when life
                allows. You're in control.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" onClick={handleChangePrompt}>
                  Regenerate Path
                </Button>
                <Button variant="outline">Add to Calendar</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to begin
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Start with lesson one or adjust your path if something doesn't fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="dark" onClick={handleContinue}>
              Start
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={handleChangePrompt}
            >
              Change
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      </>
      )}
    </div>
  );
};

export default LearningPath;
