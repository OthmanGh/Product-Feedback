import MobileHeader from '../ui/MobileHeader';
import Home from '../pages/Home';
import DefaultLayout from '../components/DefaultLayout';
import Overlay from '../ui/Overlay';
import MobileSidebar from '../ui/MobileSidebar';
import FeedbackNavItems from '../ui/FeedbackNavItems';
import RoadmapCard from '../ui/RoadmapCard';

export {
  MobileHeader,
  Home,
  DefaultLayout,
  Overlay,
  MobileSidebar,
  FeedbackNavItems,
  RoadmapCard,
};

export const menuNavItems = [
  {
    value: 'all',
    label: 'All',
  },

  {
    value: 'ui',
    label: 'UI',
  },

  {
    value: 'ux',
    label: 'UX',
  },

  {
    value: 'enhancement',
    label: 'Enhancement',
  },
  {
    value: 'bug',
    label: 'Bug',
  },

  {
    value: 'feature',
    label: 'Feature',
  },
];

export const roadmapItems = [
  {
    label: 'Planned',
    numItems: 2,
    value: 'planned',
    color: 'bg-coral',
  },

  {
    label: 'In-Progress',
    numItems: 3,
    value: 'in-progress',
    color: 'bg-purple',
  },

  {
    label: 'Live',
    numItems: 1,
    value: 'live',
    color: 'bg-sky',
  },
];
