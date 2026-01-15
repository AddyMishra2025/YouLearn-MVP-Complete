import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { TrendingUp, Play, Clock, Users } from 'lucide-react';

const Trending = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('popular');

  const trendingContent = {
    popular: [
      {
        id: 1,
        title: 'Data Analytics Career Track',
        description: 'Master data analysis from basics to advanced',
        badge: 'Career Track',
        lessons: 24,
        duration: '12 hours',
        students: '15.2K',
        thumbnail: TrendingUp,
      },
      {
        id: 2,
        title: 'Full Stack Web Development',
        description: 'Build complete web applications',
        badge: 'Career Track',
        lessons: 32,
        duration: '18 hours',
        students: '12.8K',
        thumbnail: TrendingUp,
      },
      {
        id: 3,
        title: 'Machine Learning Fundamentals',
        description: 'Introduction to ML and AI concepts',
        badge: 'Career Track',
        lessons: 20,
        duration: '10 hours',
        students: '10.5K',
        thumbnail: TrendingUp,
      },
    ],
    ai: [
      {
        id: 4,
        title: 'Python for Beginners',
        description: 'Start your programming journey',
        badge: 'AI Pick',
        lessons: 15,
        duration: '8 hours',
        students: '8.3K',
        thumbnail: Play,
      },
      {
        id: 5,
        title: 'UI/UX Design Essentials',
        description: 'Design beautiful user interfaces',
        badge: 'AI Pick',
        lessons: 18,
        duration: '9 hours',
        students: '7.6K',
        thumbnail: Play,
      },
      {
        id: 6,
        title: 'Digital Marketing Mastery',
        description: 'Grow your online presence',
        badge: 'AI Pick',
        lessons: 22,
        duration: '11 hours',
        students: '9.1K',
        thumbnail: Play,
      },
    ],
    watched: [
      {
        id: 7,
        title: 'JavaScript Complete Guide',
        description: 'Modern JavaScript development',
        badge: 'Most Watched',
        lessons: 28,
        duration: '14 hours',
        students: '18.9K',
        thumbnail: Users,
      },
      {
        id: 8,
        title: 'React Development Path',
        description: 'Build dynamic web applications',
        badge: 'Most Watched',
        lessons: 25,
        duration: '13 hours',
        students: '16.4K',
        thumbnail: Users,
      },
      {
        id: 9,
        title: 'Product Management Basics',
        description: 'Lead product development',
        badge: 'Most Watched',
        lessons: 20,
        duration: '10 hours',
        students: '14.7K',
        thumbnail: Users,
      },
    ],
  };

  const handleStartPath = (item) => {
    navigate('/learning-path', {
      state: { query: item.title, mode: 'quick', generated: true },
    });
  };

  const renderCards = (items) => (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item) => {
        const Icon = item.thumbnail;
        return (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleStartPath(item)}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Icon className="w-16 h-16 text-primary" />
            </div>
            <div className="p-6">
              <Badge variant="secondary" className="mb-3">
                {item.badge}
              </Badge>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  <span>{item.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{item.students} learners</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Trending
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            What's popular right now
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore the most popular learning paths and career tracks chosen by
            thousands of learners
          </p>
        </div>
      </section>

      {/* Trending Content */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="popular">Popular Tracks</TabsTrigger>
                <TabsTrigger value="ai">AI Picks</TabsTrigger>
                <TabsTrigger value="watched">Most Watched</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="popular">
              {renderCards(trendingContent.popular)}
            </TabsContent>

            <TabsContent value="ai">{renderCards(trendingContent.ai)}</TabsContent>

            <TabsContent value="watched">
              {renderCards(trendingContent.watched)}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Create your own personalized learning path with AI
          </p>
          <Button size="lg" variant="dark" onClick={() => navigate('/')}>
            Generate My Path
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trending;
