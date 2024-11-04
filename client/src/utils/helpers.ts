import { FeedbackRequest } from '../types';

export const sortFeedbackRequests = (
  requests: FeedbackRequest[],
  sortBy: string
): FeedbackRequest[] => {
  return [...requests].sort((a: any, b: any) => {
    if (sortBy === 'most-upvotes') {
      return b.upvotes - a.upvotes;
    } else if (sortBy === 'least-upvotes') {
      return a.upvotes - b.upvotes;
    } else if (sortBy === 'most-comments') {
      return (b.comments?.length || 0) - (a.comments?.length || 0);
    } else if (sortBy === 'least-comments') {
      return (a.comments?.length || 0) - (b.comments?.length || 0);
    }
    return 0;
  });
};
