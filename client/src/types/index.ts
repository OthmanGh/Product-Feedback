// Interfaces:
export interface User {
  image: string;
  name: string;
  username: string;
}

export interface Comment {
  id: number | string;
  content: string;
  user: User[];
}

export interface FeedbackRequest {
  id: number;
  title: string;
  category: 'all' | 'enhancement' | 'ui' | 'ux' | 'feature' | 'bug';
  upvotes: number | string;
  status: 'suggestion' | 'planned' | 'in-progress' | 'live';
  description: string;
  comments: Comment[];
}

export interface SortOption {
  label: string;
  value: string;
}

// types:
export type NavItemType = 'planned' | 'in-progress' | 'live';
