import MobileHeader from '../ui/MobileHeader';
import Home from '../pages/Home';
import DefaultLayout from '../components/DefaultLayout';
import Overlay from '../ui/Overlay';
import MobileSidebar from '../ui/MobileSidebar';
import FeedbackNavItems from '../ui/FeedbackNavItems';
import RoadmapCard from '../ui/RoadmapCard';
import Button from '../components/Button';
import { FaCheck } from 'react-icons/fa';
import FilterBar from '../ui/FilterBar';
import CustomDropdown from '../components/CustomDropdown';

//* icons
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

export {
  MobileHeader,
  Home,
  DefaultLayout,
  Overlay,
  MobileSidebar,
  FeedbackNavItems,
  RoadmapCard,
  CustomDropdown,
  Button,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  FaCheck,
  FilterBar,
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

export const selectOptions = [
  {
    label: 'Most Upvotes',
    value: 'most-upvotes',
  },

  {
    label: 'Least Upvotes',
    value: 'least-upvotes',
  },

  {
    label: 'Most Comments',
    value: 'most-comments',
  },

  {
    label: 'Least Comments',
    value: 'least-comments',
  },
];
