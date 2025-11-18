export interface Choice {
  id: string;
  text: string;
  targetNodeId: string;
  isDeadEnd?: boolean;
}

export interface GameNode {
  id: string;
  title?: string;
  text: string;
  choices?: Choice[];
  isDeadEnd?: boolean;
  isEnding?: boolean;
  returnTo?: string;
}

export type GameTree = Record<string, GameNode>;