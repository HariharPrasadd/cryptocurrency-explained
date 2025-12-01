import { useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { GameNode } from '@/components/GameNode';
import { HomePage } from '@/components/HomePage';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const { currentNode, makeChoice, goBack, restart, canGoBack, history } = useGameState();

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleGoBack = () => {
    // If we're at the first game node, go back to homepage
    if (history.length === 1 && currentNode.id === 'node-0') {
      setHasStarted(false);
    } else {
      goBack();
    }
  };

  const handleRestart = () => {
    restart();
    setHasStarted(false);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        {!hasStarted ? (
          <HomePage onStart={handleStart} />
        ) : (
          <>
            <header className="text-center mb-8 space-y-2">
              <h1 className="text-4xl">How Cryptocurrency Was Created</h1>
              <p className="text-lg text-muted-foreground">
                Inspired by 3Blue1Brown's{' '}
                <a
                  href="https://youtu.be/bBC-nXj3Ng4?si=yKF2BEv6V6BqcG1a"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  "But how does bitcoin actually work?"
                </a>
              </p>
            </header>
            <GameNode
              node={currentNode}
              onChoice={makeChoice}
              onGoBack={handleGoBack}
              onRestart={handleRestart}
              canGoBack={canGoBack}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;