import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Sparkles, TrendingUp, Target, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const popularTopics = [
    'Data Analytics',
    'Product Management',
    'UI/UX Design',
    'Digital Marketing',
    'Project Management',
    'Software Engineering',
  ];

  const myPaths = [
    {
      id: 1,
      title: 'Data Analytics for Career Growth',
      status: 'Active',
      progress: '3 of 8 lessons complete',
      message: 'Build in-demand analytics skills.',
      query: 'Data Analytics',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1758874384722-ab97b4c9af89',
    },
    {
      id: 2,
      title: 'Product Management Essentials',
      status: 'Active',
      progress: '5 of 12 lessons complete',
      message: 'Master product strategy and execution.',
      query: 'Product Management',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1758518730178-6e237bc8b87d',
    },
    {
      id: 3,
      title: 'UI/UX Design Career Track',
      status: 'Paused',
      progress: '1 of 10 lessons complete',
      message: 'Design skills employers want.',
      query: 'UI/UX Design',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1758691737568-a1572060ce5a',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Data Analyst at Google',
      location: 'San Francisco',
      text: 'I transitioned from marketing to data analytics in 4 months. The structured learning path and real-world projects helped me land my dream role at Google.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1762341122735-d6ae18da4c01',
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Manager at Stripe',
      location: 'New York',
      text: 'Upskilled from engineer to PM while working full-time. Got promoted within 6 months of completing the product management track.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1758691737207-e75821e080cb',
    },
    {
      name: 'Priya Patel',
      role: 'Senior UX Designer at Airbnb',
      location: 'London',
      text: 'Broke into UX design with zero experience. The portfolio projects from this platform were key to landing interviews at top tech companies.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1765648763932-43a3e2f8f35c',
    },
  ];

  const handleGenerate = () => {
    const query = searchQuery || 'Python';
    navigate('/learning-path', {
      state: { query, mode: 'quick', generated: true },
    });
  };

  const handleContinue = (path) => {
    navigate('/learning-path', {
      state: {
        query: path.query,
        difficulty: path.difficulty,
        mode: 'quick',
        fromContinue: true,
      },
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header />

      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                AI-Powered Career Development
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Land your dream job with AI-guided skill building
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Master in-demand skills for your target role. Get a personalized learning path with hand-picked content, ordered by difficulty. Build the expertise employers are looking for—in weeks, not years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Input
                  placeholder="e.g., Product Manager, Data Analyst, UX Designer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" variant="dark" onClick={handleGenerate}>
                  Build My Career Path
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                  onClick={() => navigate('/trending')}
                >
                  Explore Roles
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-primary-foreground/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>15,000+ career changers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Average 40% salary increase</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1762341122735-d6ae18da4c01?w=800&q=80"
                  alt="Professional working on career development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Maria just landed her role!</p>
                    <p className="text-sm text-muted-foreground">Product Manager at Amazon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Jump into what matters
            </h2>
            <p className="text-primary-foreground/80">
              Choose a skill below and let AI build your path instantly
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTopics.map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="px-6 py-3 text-base cursor-pointer hover:scale-105 transition-transform"
                onClick={() => {
                  setSearchQuery(topic);
                  navigate('/learning-path', {
                    state: { query: topic, mode: 'quick', generated: true },
                  });
                }}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* My Learning Paths */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Your learning paths
            </h2>
            <p className="text-primary-foreground/80">Pick up where you left off</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {myPaths.map((path) => (
              <Card
                key={path.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleContinue(path)}
              >
                <Badge
                  variant={path.status === 'Active' ? 'default' : 'secondary'}
                  className="mb-3"
                >
                  {path.status}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {path.progress}. {path.message}
                </p>
                <Button variant="link" className="p-0 h-auto">
                  {path.status === 'Active' ? 'Continue' : 'Resume'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Built for momentum
            </h2>
            <p className="text-primary-foreground/80">
              Structure without the weight of formal courses
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8">
              <div className="mb-4">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                AI-powered learning paths
              </h3>
              <p className="text-muted-foreground mb-4">
                Tell us what you want to learn. AI generates a curated path with
                hand-picked YouTube lessons, ordered by difficulty and skill
                progression.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
            <Card className="p-8">
              <div className="mb-4">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Summaries and quizzes
              </h3>
              <p className="text-muted-foreground mb-4">
                Every lesson comes with an AI summary, notes, and a quick quiz to
                lock in what you learned.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-center">
            What learners are saying...
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-center">
            FAQs
          </h2>
          <Accordion type="single" collapsible className="bg-card rounded-lg p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Tell us what you want to learn, and our AI will generate a
                personalized learning path with curated YouTube videos, organized by
                difficulty and skill progression.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who should use this?</AccordionTrigger>
              <AccordionContent>
                Anyone looking to learn new skills efficiently. Whether you're a
                beginner or advancing your career, YouLearn AI creates paths
                tailored to your goals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does it cost anything?</AccordionTrigger>
              <AccordionContent>
                YouLearn AI is free to use. All content comes from YouTube, so
                there are no hidden fees or subscriptions required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I want to change course?</AccordionTrigger>
              <AccordionContent>
                You can regenerate your learning path anytime. Simply adjust your
                query or preferences, and the AI will create a new path instantly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start learning now
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Build your first path in under a minute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="dark" onClick={handleGenerate}>
              Begin
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={() => navigate('/trending')}
            >
              Browse
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
