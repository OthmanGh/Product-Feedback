import MobileHeader from '../ui/MobileHeader';
import Home from '../pages/Home';
import DefaultLayout from '../components/DefaultLayout';
import Overlay from '../ui/Overlay';
import MobileSidebar from '../ui/MobileSidebar';
import FeedbackNavItems from '../ui/FeedbackNavItems';
import RoadmapCard from '../ui/RoadmapCard';
import Button from '../components/Button';
import FilterBar from '../ui/FilterBar';
import CustomDropdown from '../components/CustomDropdown';
import ProductFeedbackContainer from '../ui/ProductFeedbackContainer';
import CategoryTag from '../ui/mini/CategoryTag';
import Comments from '../ui/mini/Comments';
import Upvotes from '../ui/mini/Upvotes';
import FeedbackItem from '../ui/FeedbackItem';
import EmptyProductFeedback from '../ui/EmptyProductFeedback';
import MainBoard from '../ui/MainBoard';
import FeedbackBoardCard from '../ui/FeedbackBoardCard';
import CreateNewFeedback from '../pages/CreateNewFeedback';
import BackButton from '../ui/BackButton';
import Roadmap from '../pages/Roadmap';
import RoadmapHeader from '../ui/RoadmapHeader';
import RoadmapMobileNavbar from '../ui/RoadmapMobileNavbar';
import RoadmapCardsMobile from '../ui/RoadmapCardsMobile';
import RoadmapCards from '../ui/RoadmapCards';

//* icons
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { FaCheck } from 'react-icons/fa';

// dummy
import { dummyData } from '../context/dummy';
const { user, feedbackRequests } = dummyData;

// utils:
import { sortFeedbackRequests } from '../utils/helpers';

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
  ProductFeedbackContainer,
  user,
  feedbackRequests,
  FeedbackItem,
  Upvotes,
  Comments,
  CategoryTag,
  EmptyProductFeedback,
  BackButton,
  MainBoard,
  FeedbackBoardCard,
  CreateNewFeedback,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  Roadmap,
  RoadmapHeader,
  RoadmapMobileNavbar,
  RoadmapCardsMobile,
  RoadmapCards,
  sortFeedbackRequests,
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

export const MobileRoadmapNavItems = [
  {
    label: 'Planned',
    value: 'planned',
    color: '#F49F85',
  },
  {
    label: 'In Progress',
    value: 'in-progress',
    color: '#AD1FEA',
  },
  {
    label: 'Live',
    value: 'live',
    color: '#62BCFA',
  },
];
