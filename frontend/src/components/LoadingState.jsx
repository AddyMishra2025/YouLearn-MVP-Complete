import { Loader2 } from 'lucide-react';
import { Card } from './ui/card';
import { Skeleton } from './ui/skeleton';

export const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
};

export const PathGenerationLoader = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-2">Building your learning path...</h2>
        <p className="text-muted-foreground">
          Our AI is curating the perfect lessons for your goals
        </p>
        <div className="mt-8 space-y-2">
          <p className="text-sm text-muted-foreground animate-pulse">
            \u2713 Analyzing your experience level...
          </p>
          <p className="text-sm text-muted-foreground animate-pulse delay-100">
            \u2713 Finding relevant content...
          </p>
          <p className="text-sm text-muted-foreground animate-pulse delay-200">
            \u2713 Organizing by difficulty...
          </p>
        </div>
      </div>
      
      {/* Skeleton Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-4 w-20 mb-4" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export const EmptyState = ({ 
  title = 'No results found', 
  description = 'Try adjusting your search or filters',
  action,
  actionLabel = 'Go back'
}) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
        <svg 
          className="w-8 h-8 text-muted-foreground" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">{description}</p>
      {action && (
        <button
          onClick={action}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export const ErrorState = ({ 
  title = 'Something went wrong', 
  description = 'We encountered an error. Please try again.',
  action,
  actionLabel = 'Try again'
}) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg 
          className="w-8 h-8 text-destructive" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">{description}</p>
      {action && (
        <button
          onClick={action}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
