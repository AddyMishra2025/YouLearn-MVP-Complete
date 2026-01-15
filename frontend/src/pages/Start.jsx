import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { toast } from 'sonner';

const Start = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleStart = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      toast.success('Account created! Welcome to YouLearn AI!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header />

      <section className="px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Start learning today</h1>
              <p className="text-muted-foreground">
                Create your account and begin your AI-guided learning journey
              </p>
            </div>

            <form onSubmit={handleStart} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/signin')}
                  className="text-primary font-medium hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Start;
