import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Award, Share2, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const AchievementModal = ({ open, onOpenChange, achievement }) => {
  const [copied, setCopied] = useState(false);
  const [linkedInDraft, setLinkedInDraft] = useState('');

  const generateLinkedInPost = () => {
    const post = `🎉 Just completed: ${achievement?.title || 'Data Analytics Path'}!

✅ ${achievement?.lessonsCompleted || '8'} lessons completed
⏱️ ${achievement?.hoursSpent || '12'} hours of focused learning
📈 Mastered key skills in ${achievement?.topic || 'data analytics'}

Thanks to @YouLearn AI for the structured, AI-guided path that made this journey efficient and engaging.

Next up: Applying these skills to real-world projects!

#CareerDevelopment #SkillBuilding #DataAnalytics #ContinuousLearning`;
    
    setLinkedInDraft(post);
  };

  const handleShare = (platform) => {
    const text = `Just completed ${achievement?.title || 'my learning path'} on YouLearn AI!`;
    const url = 'https://youlearn.ai';
    
    if (platform === 'linkedin') {
      if (!linkedInDraft) generateLinkedInPost();
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
    }
    
    toast.success('Opening share dialog...');
  };

  const handleCopy = () => {
    if (!linkedInDraft) generateLinkedInPost();
    
    navigator.clipboard.writeText(linkedInDraft);
    setCopied(true);
    toast.success('LinkedIn post copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex flex-col items-center text-center mb-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-primary" />
            </div>
            <DialogTitle className="text-2xl">
              🎉 Path Completed!
            </DialogTitle>
            <p className="text-muted-foreground mt-2">
              {achievement?.title || 'Data Analytics for Career Growth'}
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">
                {achievement?.lessonsCompleted || '8'}
              </div>
              <div className="text-xs text-muted-foreground">Lessons</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {achievement?.hoursSpent || '12'}h
              </div>
              <div className="text-xs text-muted-foreground">Time Invested</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {achievement?.quizScore || '92'}%
              </div>
              <div className="text-xs text-muted-foreground">Quiz Average</div>
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-semibold">Share Your Achievement</h3>
            </div>
            
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  handleShare('linkedin');
                  if (!linkedInDraft) generateLinkedInPost();
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="#0077B5" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Share on LinkedIn
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleShare('twitter')}
              >
                <svg className="w-5 h-5 mr-2" fill="#1DA1F2" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
                Share on Twitter
              </Button>
            </div>
          </div>

          {/* LinkedIn Post Draft */}
          {linkedInDraft && (
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm">AI-Generated LinkedIn Post</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <><Check className="w-4 h-4 mr-1" /> Copied</>
                  ) : (
                    <><Copy className="w-4 h-4 mr-1" /> Copy</>
                  )}
                </Button>
              </div>
              <Textarea
                value={linkedInDraft}
                onChange={(e) => setLinkedInDraft(e.target.value)}
                rows={8}
                className="text-sm"
              />
            </div>
          )}

          {!linkedInDraft && (
            <Button
              variant="outline"
              className="w-full"
              onClick={generateLinkedInPost}
            >
              Generate LinkedIn Post Draft
            </Button>
          )}

          <Button
            className="w-full"
            onClick={() => {
              triggerConfetti();
              onOpenChange(false);
            }}
          >
            Celebrate! 🎉
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
