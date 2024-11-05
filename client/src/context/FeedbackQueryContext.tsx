import { createContext, useContext, useState, useMemo } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useFeedbackStorage } from './FeedbackStorageContext';
import type { FeedbackRequest, SortOption } from '../types';
import { selectOptions, sortFeedbackRequests } from '../constants';

interface FeedbackQueryContextValue {
  activeFeedbackNavItems: string;
  setActiveFeedbackNavItems: Dispatch<SetStateAction<string>>;
  sortedFeedbackRequests: FeedbackRequest[];
  selectedSortOption: SortOption;
  setSelectedSortOption: Dispatch<SetStateAction<SortOption>>;
  numOfSuggestedFeedbackRequests: number;
  roadmapFeedbackRequests: {
    planned: FeedbackRequest[];
    'in-progress': FeedbackRequest[];
    live: FeedbackRequest[];
  };
}

const FeedbackQueryContext = createContext<FeedbackQueryContextValue | null>(
  null
);

export const FeedbackQueryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { feedbackRequests } = useFeedbackStorage();
  const [activeFeedbackNavItems, setActiveFeedbackNavItems] = useState('all');
  const [selectedSortOption, setSelectedSortOption] = useState(
    selectOptions[0]
  );

  const suggestedFeedbackRequests = useMemo(
    () =>
      feedbackRequests.filter((feedback) => feedback.status === 'suggestion'),
    [feedbackRequests]
  );

  const filteredFeedbackRequests = useMemo(
    () =>
      activeFeedbackNavItems === 'all'
        ? suggestedFeedbackRequests
        : suggestedFeedbackRequests.filter(
            (feedback) => feedback.category === activeFeedbackNavItems
          ),
    [activeFeedbackNavItems, suggestedFeedbackRequests]
  );

  const sortedFeedbackRequests = useMemo(
    () =>
      sortFeedbackRequests(filteredFeedbackRequests, selectedSortOption.value),
    [filteredFeedbackRequests, selectedSortOption.value]
  );

  const roadmapFeedbackRequests = feedbackRequests.reduce(
    (accum, feedback) => {
      if (feedback.status === 'planned') accum['planned'].push(feedback);
      if (feedback.status === 'in-progress')
        accum['in-progress'].push(feedback);
      if (feedback.status === 'live') accum['live'].push(feedback);

      return accum;
    },
    {
      planned: [],
      'in-progress': [],
      live: [],
    }
  );

  const value = {
    activeFeedbackNavItems,
    setActiveFeedbackNavItems,
    sortedFeedbackRequests,
    selectedSortOption,
    setSelectedSortOption,
    numOfSuggestedFeedbackRequests: suggestedFeedbackRequests.length,
    roadmapFeedbackRequests,
  };

  return (
    <FeedbackQueryContext.Provider value={value}>
      {children}
    </FeedbackQueryContext.Provider>
  );
};

export const useFeedbackQuery = () => {
  const context = useContext(FeedbackQueryContext);
  if (!context) {
    throw new Error(
      'useFeedbackQuery must be used within FeedbackQueryProvider'
    );
  }
  return context;
};
