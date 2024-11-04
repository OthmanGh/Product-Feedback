import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { dummyData } from './dummy';
import type { FeedbackRequest } from '../types';

interface FeedbackStorageContextValue {
  feedbackRequests: FeedbackRequest[];
  incrementUpvotes: (id: number) => void;
}

const FeedbackStorageContext =
  createContext<FeedbackStorageContextValue | null>(null);

export const FeedbackStorageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [feedbackRequests, setFeedbackRequests] = useState<FeedbackRequest[]>(
    []
  );

  useEffect(() => {
    setFeedbackRequests(dummyData.feedbackRequests);
  }, []);

  const incrementUpvotes = (id: number) => {
    setFeedbackRequests((prev) =>
      prev.map((request) =>
        request.id === id
          ? { ...request, upvotes: request.upvotes + 1 }
          : request
      )
    );
  };

  return (
    <FeedbackStorageContext.Provider
      value={{ feedbackRequests, incrementUpvotes }}
    >
      {children}
    </FeedbackStorageContext.Provider>
  );
};

export const useFeedbackStorage = () => {
  const context = useContext(FeedbackStorageContext);
  if (!context) {
    throw new Error(
      'useFeedbackStorage must be used within FeedbackStorageProvider'
    );
  }
  return context;
};
