import MobileHeader from "../components/ui/MobileHeader"
import Home from "../pages/Home"
import DefaultLayout from "../components/layouts/DefaultLayout"
import Overlay from "../components/ui/Overlay"
import MobileSidebar from "../components/ui/MobileSidebar"
import FeedbackNavItems from "../components/ui/FeedbackNavItems"
import RoadmapCard from "../components/ui/RoadmapCard"
import FilterBar from "../components/ui/FilterBar"
import CustomDropdown from "../components/ui/CustomDropdown"
import ProductFeedbackContainer from "../components/ui/ProductFeedbackContainer"
import Button from "../components/ui/Button"
import Login from "../components/ui/Login"
import Signup from "../components/ui/Signup"
import CategoryTag from "../components/ui/mini/CategoryTag"
import Comments from "../components/ui/mini/Comments"
import Upvotes from "../components/ui/mini/Upvotes"
import FeedbackItem from "../components/ui/FeedbackItem"
import EmptyProductFeedback from "../components/ui/EmptyProductFeedback"
import MainBoard from "../components/ui/MainBoard"
import FeedbackBoardCard from "../components/ui/FeedbackBoardCard"
import CreateNewFeedback from "../pages/CreateNewFeedback"
import BackButton from "../components/ui/BackButton"
import RoadmapHeader from "../components/ui/RoadmapHeader"
import Roadmap from "../pages/Roadmap"
import RoadmapMobileNavbar from "../components/ui/RoadmapMobileNavbar"
import RoadmapCardsMobile from "../components/ui/RoadmapCardsMobile"
import RoadmapCards from "../components/ui/RoadmapCards"
import GuestsLayout from "../components/layouts/GuestsLayout"
import AuthImagePattern from "../components/ui/AuthImagePattern"
import PageNotFound from "../pages/PageNotFound"

//* icons
import { MdKeyboardArrowDown } from "react-icons/md"
import { MdKeyboardArrowUp } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"

import { FaCheck } from "react-icons/fa"

// dummy
import { dummyData } from "../context/dummy"
const { user, feedbackRequests } = dummyData

// utils:
import { sortFeedbackRequests } from "../utils/helpers"

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
  GuestsLayout,
  AuthImagePattern,
  Login,
  Signup,
  PageNotFound,
}

export const menuNavItems = [
  {
    value: "all",
    label: "All",
  },

  {
    value: "ui",
    label: "UI",
  },

  {
    value: "ux",
    label: "UX",
  },

  {
    value: "enhancement",
    label: "Enhancement",
  },
  {
    value: "bug",
    label: "Bug",
  },

  {
    value: "feature",
    label: "Feature",
  },
]

export const roadmapItems = [
  {
    label: "Planned",
    numItems: 2,
    value: "planned",
    color: "bg-coral",
  },

  {
    label: "In-Progress",
    numItems: 3,
    value: "in-progress",
    color: "bg-purple",
  },

  {
    label: "Live",
    numItems: 1,
    value: "live",
    color: "bg-sky",
  },
]

export const selectOptions = [
  {
    label: "Most Upvotes",
    value: "most-upvotes",
  },

  {
    label: "Least Upvotes",
    value: "least-upvotes",
  },

  {
    label: "Most Comments",
    value: "most-comments",
  },

  {
    label: "Least Comments",
    value: "least-comments",
  },
]

export const MobileRoadmapNavItems = [
  {
    label: "Planned",
    value: "planned",
    color: "#F49F85",
  },
  {
    label: "In Progress",
    value: "in-progress",
    color: "#AD1FEA",
  },
  {
    label: "Live",
    value: "live",
    color: "#62BCFA",
  },
]
