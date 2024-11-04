export interface Category {
    pointsPossible: number | null;
    pointsCollected: number | null;
    title: string | null;
    used: boolean;
    calculate: () => void;
  }
  