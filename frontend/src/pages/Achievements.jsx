import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Award, Trophy, Target, Star, BookOpen, Clock, CheckCircle, Lock } from 'lucide-react';

const Achievements = () => {
  const stats = {
    totalLessons: 24,
    completedLessons: 15,
    totalHours: 12.5,
    streak: 7,
  };

  const achievements = [
    {
      id: 1,
      title: 'First Step',
      description: 'Complete your first lesson',
      icon: CheckCircle,
      earned: true,
      date: '2024-01-10',
    },
    {
      id: 2,
      title: 'Week Warrior',
      description: 'Maintain a 7-day learning streak',
      icon: Trophy,
      earned: true,
      date: '2024-01-12',
    },
    {
      id: 3,
      title: 'Knowledge Seeker',
      description: 'Complete 10 lessons',
      icon: BookOpen,
      earned: true,
      date: '2024-01-14',
    },
    {
      id: 4,
      title: 'Time Master',
      description: 'Spend 10 hours learning',
      icon: Clock,
      earned: true,
      date: '2024-01-13',
    },
    {
      id: 5,
      title: 'Quiz Champion',
      description: 'Pass 20 quizzes with perfect scores',
      icon: Star,
      earned: false,
      progress: 12,
      total: 20,
    },
    {
      id: 6,
      title: 'Path Completer',
      description: 'Complete your first learning path',
      icon: Target,
      earned: false,
      progress: 15,
      total: 24,
    },
    {
      id: 7,
      title: 'Dedicated Learner',
      description: 'Maintain a 30-day learning streak',
      icon: Award,
      earned: false,
      progress: 7,
      total: 30,
    },
    {
      id: 8,
      title: 'Master Scholar',
      description: 'Complete 5 learning paths',
      icon: Trophy,
      earned: false,
      progress: 1,
      total: 5,
    },
  ];

  const milestones = [
    { label: 'Lessons Completed', value: stats.completedLessons, total: stats.totalLessons },
    { label: 'Hours Learned', value: stats.totalHours, total: 50 },
    { label: 'Current Streak', value: stats.streak, total: 30 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showBack />

      <section className="bg-primary px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Your Progress
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Achievements
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Track your learning journey and celebrate your milestones
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {milestone.label}
                </h3>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-3xl font-bold">{milestone.value}</span>
                  <span className="text-lg text-muted-foreground pb-1">/ {milestone.total}</span>
                </div>
                <Progress value={(milestone.value / milestone.total) * 100} />
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Earned Achievements</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements
                .filter((a) => a.earned)
                .map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <Card
                      key={achievement.id}
                      className="p-6 text-center hover:shadow-lg transition-shadow"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        Earned {achievement.date}
                      </Badge>
                    </Card>
                  );
                })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">In Progress</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements
                .filter((a) => !a.earned)
                .map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <Card key={achievement.id} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold mb-1">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {achievement.description}
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            <Progress
                              value={(achievement.progress / achievement.total) * 100}
                              className="flex-grow"
                            />
                            <span className="text-sm text-muted-foreground">
                              {achievement.progress}/{achievement.total}
                            </span>
                          </div>
                        </div>
                        <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      </div>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;
