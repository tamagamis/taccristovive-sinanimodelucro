export interface Ministry {
  id: string;
  name: string;
  leader: string;
  leaderMessage: string;
  leaderPhoto: string;
  mission: string;
  vision: string;
  objectives: string[];
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  author: string;
  image?: string;
  ministry?: string;
}