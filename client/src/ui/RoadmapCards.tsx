import { CategoryTag, Upvotes, Comments } from '../constants';
import { useFeedbackQuery } from '../context/FeedbackQueryContext';
import { FeedbackRequest } from '../types';
interface RoadmapSectionProps {
  title: string;
  subtitle: string;
  feedbackList: FeedbackRequest[];
  borderColor: string;
  status: string;
}

const RoadmapSection = ({
  title,
  subtitle,
  feedbackList,
  borderColor,
  status,
}: RoadmapSectionProps) => (
  <div className='flex_col gap-8 w-full'>
    <div className='flex_col gap-[4px] w-full'>
      <h2 className='text-heading-3 text-blue-dark font-bold'>
        {title} ({feedbackList.length || 0})
      </h2>
      <p className='text-darkGray text-body-1'>{subtitle}</p>
    </div>

    <ul className='flex_col gap-6 max-w-[450px]'>
      {feedbackList.map((feedback) => (
        <li
          key={feedback.id}
          className={`bg-white rounded-lg flex_col gap-5 py-6 px-8 border-t-[6px] sm:border-t-8 border-t-${borderColor} w-full`}
        >
          <div className='flex_col gap-[4px]'>
            <div className='flex_row gap-2'>
              <div className={`w-2 h-2 rounded-full bg-${borderColor}`}></div>
              <p className='text-darkGray text-body-1'>{status}</p>
            </div>

            <h2 className='text-blue-dark font-bold text-heading-3'>
              {feedback.title}
            </h2>
            <p className='text-body-1 text-darkGray'>{feedback.description}</p>
          </div>
          <CategoryTag category={feedback.category} />

          <div className='flex_between'>
            <Upvotes upvotes={feedback.upvotes} className='sm:flex-row px-2!' />
            <Comments commentCount={feedback.comments?.length || 0} />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const RoadmapCards = () => {
  const { roadmapFeedbackRequests } = useFeedbackQuery();

  return (
    <section className='sm:block hidden'>
      <div className='grid grid-cols-3 gap-4'>
        <RoadmapSection
          title='Planned'
          subtitle='Ideas prioritized for research'
          feedbackList={roadmapFeedbackRequests.planned}
          borderColor='peach'
          status='Planned'
        />
        <RoadmapSection
          title='In-Progress'
          subtitle='Currently being developed'
          feedbackList={roadmapFeedbackRequests['in-progress']}
          borderColor='purple'
          status='In-Progress'
        />
        <RoadmapSection
          title='Live'
          subtitle='Released features'
          feedbackList={roadmapFeedbackRequests.live}
          borderColor='sky'
          status='Live'
        />
      </div>
    </section>
  );
};

export default RoadmapCards;
