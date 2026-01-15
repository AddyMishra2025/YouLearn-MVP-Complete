import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AchievementModal } from '../components/AchievementModal';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { CheckCircle, XCircle, ArrowRight, FileText, Award } from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const LessonView = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('video');
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [achievementModalOpen, setAchievementModalOpen] = useState(false);
  const [pathCompleted, setPathCompleted] = useState(false);

  const lesson = {
    id,
    title: 'Python Basics',
    subtitle: 'Lesson 2 of 8 - You\'re building momentum!',
    videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
    duration: '12:30',
    summary:
      'In this lesson, we covered the fundamentals of Python programming including variables, data types, and basic operations. You learned how to declare variables, work with different data types like strings and integers, and perform arithmetic operations.',
    notes: [
      'Variables store data values',
      'Python has dynamic typing',
      'Use print() to display output',
      'Indentation is crucial in Python',
    ],
    quiz: {
      question: 'Which of the following is the correct way to declare a variable in Python?',
      options: [
        'var x = 5',
        'x = 5',
        'int x = 5',
        'let x = 5',
      ],
      correctAnswer: 1,
    },
    transcript:
      "Welcome to Python Basics. In this lesson, we'll explore the fundamental concepts of Python programming. Python is a versatile, high-level programming language known for its simplicity and readability. Let's start with variables. A variable is a container that stores data values. In Python, you don't need to declare the type of a variable explicitly. This is called dynamic typing...",
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer === lesson.quiz.correctAnswer) {
      setQuizCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      toast.success('Correct! Great job! 🎉');
    } else {
      toast.error('Not quite. Try again!');
    }
  };

  const handleNextLesson = () => {
    const nextId = parseInt(id) + 1;
    navigate(`/lesson/${nextId}`, { state: location.state });
    setQuizOpen(false);
    setQuizCompleted(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBack />

      {/* Lesson Header */}
      <section className="bg-primary px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Badge variant="secondary" className="mb-3">
            Learning
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            {lesson.title}
          </h1>
          <p className="text-primary-foreground/80">{lesson.subtitle}</p>
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-primary-foreground/80">
                Your progress
              </span>
              <span className="text-sm text-primary-foreground/80">25%</span>
            </div>
            <Progress value={25} className="h-2 bg-primary-foreground/20" />
          </div>
        </div>
      </section>

      {/* Video and Tabs */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="summary">AI Summary</TabsTrigger>
                <TabsTrigger value="notes">Your notes</TabsTrigger>
                <TabsTrigger value="transcript">Full transcript</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="video">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src={lesson.videoUrl}
                    title="Lesson Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="summary">
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">AI Summary</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {lesson.summary}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {lesson.notes.map((note, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Your notes</h3>
                <div className="space-y-4">
                  {lesson.notes.map((note, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted/50 rounded-lg border"
                    >
                      <p className="text-sm">{note}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Add a note
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="transcript">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Full transcript</h3>
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {lesson.transcript}
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* What you've learned */}
      <section className="px-4 py-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-3">
              Milestone
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              What you've learned matters
            </h2>
            <p className="text-muted-foreground">
              Don't let it slip away. A 2-minute quiz locks it in.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Card className="p-6 max-w-2xl w-full">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center">
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">AI summary</h4>
                  <p className="text-xs text-muted-foreground">
                    Quick refresher on what matters
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">
                    View
                  </Button>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Your notes</h4>
                  <p className="text-xs text-muted-foreground">
                    Any highlights you captured
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">
                    View
                  </Button>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Full transcript</h4>
                  <p className="text-xs text-muted-foreground">
                    Every word recorded, searchable
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">
                    View
                  </Button>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Award className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Commitments</h4>
                  <p className="text-xs text-muted-foreground">
                    Actions to take based on what you learned
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-xs">
                    Set
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Test What You Know */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Test what you know</h2>
          <p className="text-muted-foreground mb-8">
            Answer a few questions to test if you've learned from this lesson
          </p>
          <Button size="lg" onClick={() => setQuizOpen(true)}>
            Take Quiz
          </Button>
        </div>
      </section>

      {/* Quiz Modal */}
      <Dialog open={quizOpen} onOpenChange={setQuizOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Test Your Knowledge</DialogTitle>
          </DialogHeader>
          {!quizCompleted ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {lesson.quiz.question}
                </h3>
                <div className="space-y-3">
                  {lesson.quiz.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAnswer(index)}
                      className={
                        `w-full p-4 text-left rounded-lg border-2 transition-all ${
                          selectedAnswer === index
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            `w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedAnswer === index
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground'
                            }`
                          }
                        >
                          {selectedAnswer === index && (
                            <CheckCircle className="w-4 h-4 text-primary-foreground" />
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <Button
                onClick={handleQuizSubmit}
                disabled={selectedAnswer === null}
                className="w-full"
              >
                Submit Answer
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Great work!</h3>
                <p className="text-muted-foreground">
                  You've successfully completed lesson {id}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" onClick={handleNextLesson}>
                  Next Lesson <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* You've finished */}
      <section className="px-4 py-12 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Success
          </Badge>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            You've finished lesson {id}
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Keep the momentum going. Start the next lesson now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="dark" onClick={handleNextLesson}>
              Next Lesson
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
          </div>
        </div>
      </section>

      {/* Next Lesson Preview */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Ready for the next one</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Award className="w-16 h-16 mx-auto mb-2" />
                  <p>Next Lesson Preview</p>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-3">
                  Next up
                </Badge>
                <h3 className="text-2xl font-semibold mb-2">
                  Advanced Python Concepts
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn about functions, classes, and object-oriented programming
                  in Python. Build more complex programs.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">18 min</span>
                  <Button onClick={handleNextLesson}>
                    Start <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LessonView;
