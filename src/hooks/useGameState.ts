import { useState, useCallback } from 'react';
import { gameTree } from '@/data/gameTree';
import type { GameNode } from '@/types/game';

export const useGameState = () => {
  const [currentNodeId, setCurrentNodeId] = useState('node-0');
  const [history, setHistory] = useState<string[]>(['node-0']);

  const currentNode: GameNode = gameTree[currentNodeId];

  const makeChoice = useCallback((targetNodeId: string) => {
    setCurrentNodeId(targetNodeId);
    setHistory((prev) => [...prev, targetNodeId]);
  }, []);

  const goBack = useCallback(() => {
    if (currentNode.isDeadEnd && currentNode.returnTo) {
      // For dead ends, go back to returnTo node but don't add it to history
      const returnNodeId = currentNode.returnTo;
      setCurrentNodeId(returnNodeId);
      // Remove the dead end from history instead of adding returnTo
      setHistory((prev) => prev.slice(0, -1));
    } else if (history.length > 1) {
      // Normal back navigation
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentNodeId(newHistory[newHistory.length - 1]);
    }
  }, [currentNode, history]);

  const restart = useCallback(() => {
    setCurrentNodeId('node-0');
    setHistory(['node-0']);
  }, []);

  // Can go back if we're not at the first node
  const canGoBack = history.length > 1 || currentNodeId !== 'node-0';

  return {
    currentNode,
    makeChoice,
    goBack,
    restart,
    canGoBack,
    history,
  };
};