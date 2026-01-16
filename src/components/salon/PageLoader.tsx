import { useEffect, useState } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground">
            The Cut <span className="text-gradient-gold">Hut</span>
          </h1>
        </div>

        {/* Animated Scissors */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-16 h-16 text-gold animate-spin"
            style={{ animationDuration: "2s" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
            />
          </svg>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-gold-animated w-full" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
