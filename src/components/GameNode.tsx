import type { GameNode as GameNodeType } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, RotateCcw } from 'lucide-react';

interface GameNodeProps {
  node: GameNodeType;
  onChoice: (targetNodeId: string) => void;
  onGoBack: () => void;
  onRestart: () => void;
  canGoBack: boolean;
}

export const GameNode = ({
  node,
  onChoice,
  onGoBack,
  onRestart,
  canGoBack,
}: GameNodeProps) => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header with back/restart buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={onGoBack}
          disabled={!canGoBack}
          className="gap-2 hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button variant="ghost" onClick={onRestart} className="gap-2 hover:bg-white/10">
          <RotateCcw className="w-4 h-4" />
          Restart
        </Button>
      </div>

      {/* Main content card */}
      <Card className="bg-background border-white/20">
        {node.title && (
          <CardHeader>
            <CardTitle className="text-2xl">{node.title}</CardTitle>
          </CardHeader>
        )}
        <CardContent className="space-y-6">
          {/* Node text */}
          <div className="space-y-4">
            {node.text.split('\n\n').map((paragraph, i) => (
              <p key={i} className="whitespace-pre-wrap leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Dead end "GO BACK" button */}
          {node.isDeadEnd && (
            <Button
              onClick={onGoBack}
              size="lg"
              variant="outline"
              className="w-full border-red-500/50 text-red-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500"
            >
              Go Back
            </Button>
          )}

          {/* Choice buttons */}
          {node.choices && (
            <div className="space-y-3">
              {node.choices.map((choice, index) => (
                <Button
                  key={choice.id}
                  onClick={() => onChoice(choice.targetNodeId)}
                  variant="outline"
                  className="w-full text-left h-auto py-4 px-6 justify-start whitespace-pre-wrap border-white/20 hover:bg-white/10 hover:border-white/40"
                >
                  <span className="font-bold mr-3">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{choice.text}</span>
                </Button>
              ))}
            </div>
          )}

          {/* Ending state */}
          {node.isEnding && (
            <Button 
              onClick={onRestart} 
              size="lg" 
              variant="outline"
              className="w-full border-white/20 hover:bg-white/10 hover:border-white/40"
            >
              Play Again
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};