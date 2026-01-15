import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const IntentCaptureModal = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState({
    topic: '',
    goal: '',
    mode: '',
    level: '',
  });

  const goals = [
    { id: 'quick', label: 'Quick Learning', desc: 'Understand a topic efficiently' },
    { id: 'career', label: 'Career Path', desc: 'Build job-ready skills' },
  ];

  const levels = [
    { id: 'beginner', label: 'Beginner', desc: 'No prior experience needed' },
    { id: 'intermediate', label: 'Intermediate', desc: 'Some basic knowledge' },
    { id: 'advanced', label: 'Advanced', desc: 'Ready for expert-level content' },
  ];

  const exampleTopics = [
    'Product Manager',
    'Data Analyst',
    'UX Designer',
    'Digital Marketing',
    'Full Stack Developer',
  ];

  const handleGenerate = async () => {
    setLoading(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    toast.success('Your personalized learning path is ready!');
    onOpenChange(false);
    
    navigate('/learning-path', {
      state: {
        query: intent.topic,
        mode: intent.goal,
        difficulty: intent.level,
        generated: true,
      },
    });
    
    // Reset for next time
    setStep(1);
    setIntent({ topic: '', goal: '', mode: '', level: '' });
  };

  const canProceed = () => {
    if (step === 1) return intent.topic.length > 2;
    if (step === 2) return intent.goal !== '';
    if (step === 3) return intent.level !== '';
    return false;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Build Your Career Path
          </DialogTitle>
          <DialogDescription>
            Step {step} of 3 • Takes ~30-60 seconds
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step 1: Topic */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="topic">What role or skill do you want to build?</Label>
                <Input
                  id="topic"
                  placeholder="e.g., Product Manager, Data Analyst, UX Designer..."
                  value={intent.topic}
                  onChange={(e) => setIntent({ ...intent, topic: e.target.value })}
                  className="mt-2"
                  autoFocus
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Popular choices:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setIntent({ ...intent, topic })}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Goal */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label>What's your learning goal?</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  For {intent.topic}
                </p>
              </div>
              <div className="grid gap-3">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setIntent({ ...intent, goal: goal.id })}
                    className={
                      `p-4 rounded-lg border-2 text-left transition-all ${
                        intent.goal === goal.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`
                    }
                  >
                    <div className="font-semibold mb-1">{goal.label}</div>
                    <div className="text-sm text-muted-foreground">{goal.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Level */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label>What's your experience level?</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  With {intent.topic}
                </p>
              </div>
              <div className="grid gap-3">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setIntent({ ...intent, level: level.id })}
                    className={
                      `p-4 rounded-lg border-2 text-left transition-all ${
                        intent.level === level.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`
                    }
                  >
                    <div className="font-semibold mb-1">{level.label}</div>
                    <div className="text-sm text-muted-foreground">{level.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-sm text-muted-foreground">
                Building your personalized learning path...
              </p>
            </div>
          )}

          {/* Navigation */}
          {!loading && (
            <div className="flex justify-between pt-4">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  Back
                </Button>
              )}
              <div className="flex-1" />
              {step < 3 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                >
                  Next <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleGenerate}
                  disabled={!canProceed() || loading}
                >
                  Generate My Path <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
