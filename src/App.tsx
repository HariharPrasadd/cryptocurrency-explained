import { useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { GameNode } from '@/components/GameNode';
import { HomePage } from '@/components/HomePage';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const { currentNode, makeChoice, goBack, restart, canGoBack } = useGameState();

  const handleStart = () => {
    setHasStarted(true);
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
          <GameNode
            node={currentNode}
            onChoice={makeChoice}
            onGoBack={goBack}
            onRestart={handleRestart}
            canGoBack={canGoBack}
          />
        )}
      </div>
    </div>
  );
}

export default App;