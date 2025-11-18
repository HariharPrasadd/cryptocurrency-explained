import { useGameState } from '@/hooks/useGameState';
import { GameNode } from '@/components/GameNode';

function App() {
  const { currentNode, makeChoice, goBack, restart, canGoBack } = useGameState();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <header className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-bold">How Cryptocurrency Was Created</h1>
          <p className="text-lg text-muted-foreground">
            Inspired by 3Blue1Brown's <a href="https://youtu.be/bBC-nXj3Ng4?si=yKF2BEv6V6BqcG1a" className="text-blue-400" target="_blank">"But how does bitcoin actually work?"</a>
          </p>
        </header>
        <GameNode
          node={currentNode}
          onChoice={makeChoice}
          onGoBack={goBack}
          onRestart={restart}
          canGoBack={canGoBack}
        />
      </div>
    </div>
  );
}

export default App;