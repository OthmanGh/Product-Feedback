import { feedbackRequests } from '../constants';
import { CategoryTag, Upvotes, Comments } from '../constants';

const roadmapNavItemsHeaders = [
  {
    value: 'planned',
    label: 'Planned',
    description: 'Ideas prioritized for research',
  },

  {
    value: 'in-progress',
    label: 'In Progress',
    description: 'Currently being developed',
  },

  {
    value: 'live',
    label: 'Live',
    description: 'Features currently being developed',
  },
];

const RoadmapCards = () => {
  const filteredProductFeedbackRequests = feedbackRequests.reduce(
    (accum, feedback) => {
      if (feedback.status === 'planned') accum['planned'].push(feedback);
      if (feedback.status === 'live') accum['live'].push(feedback);
      if (feedback.status === 'in-progress')
        accum['in-progress'].push(feedback);

      return accum;
    },
    {
      planned: [],
      'in-progress': [],
      live: [],
    }
  );

  return (
    <section>
      <ul className='hidden sm:flex_row w-full'>
        {roadmapNavItemsHeaders.map((item) => (
          <li key={item.value} className='flex_col gap-[4px] w-full'>
            <div className='flex_col gap-[4px] w-full'>
              <h2 className='text-heading-3 text-blue-dark font-bold'>
                {item.label} (X)
              </h2>
              <p className='text-darkGray text-body-3'>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className='flex gap-[4px]'>
        <ul>
          {filteredProductFeedbackRequests['planned'].map((feedback) => (
            <li
              key={feedback.id}
              className={`bg-white rounded-lg flex_col gap-5 p-4 border-t-[6px] sm:border-t-8`}
            >
              <div className='flex_row gap-2'>
                <div className={` w-2 h-2 rounded-full`}></div>
                <p className='text-darkGray text-body-3'></p>
              </div>

              <div className='flex_col gap-[9px]'>
                <h2 className='text-blue-dark font-bold text-heading-4'>
                  {feedback.title}
                </h2>
                <p className='text-body-3 text-darkGray'>
                  {feedback.description}
                </p>
              </div>
              <CategoryTag category={feedback.category} />

              <div className='flex_between'>
                <Upvotes upvotes={feedback.upvotes} />
                <Comments commentCount={feedback?.comments?.length || 0} />
              </div>
            </li>
          ))}
        </ul>

        <ul>
          {filteredProductFeedbackRequests['in-progress'].map((feedback) => (
            <li
              key={feedback.id}
              className={`bg-white rounded-lg flex_col gap-5 p-4 border-t-[6px] sm:border-t-8`}
            >
              <div className='flex_row gap-2'>
                <div className={` w-2 h-2 rounded-full`}></div>
                <p className='text-darkGray text-body-3'></p>
              </div>

              <div className='flex_col gap-[9px]'>
                <h2 className='text-blue-dark font-bold text-heading-4'>
                  {feedback.title}
                </h2>
                <p className='text-body-3 text-darkGray'>
                  {feedback.description}
                </p>
              </div>
              <CategoryTag category={feedback.category} />

              <div className='flex_between'>
                <Upvotes upvotes={feedback.upvotes} />
                <Comments commentCount={feedback?.comments?.length || 0} />
              </div>
            </li>
          ))}
        </ul>

        <ul>
          {filteredProductFeedbackRequests['live'].map((feedback) => (
            <li
              key={feedback.id}
              className={`bg-white rounded-lg flex_col gap-5 p-4 border-t-[6px] sm:border-t-8 w-full`}
            >
              <div className='flex_row gap-2'>
                <div className={` w-2 h-2 rounded-full`}></div>
                <p className='text-darkGray text-body-3'></p>
              </div>

              <div className='flex_col gap-[9px]'>
                <h2 className='text-blue-dark font-bold text-heading-4'>
                  {feedback.title}
                </h2>
                <p className='text-body-3 text-darkGray'>
                  {feedback.description}
                </p>
              </div>
              <CategoryTag category={feedback.category} />

              <div className='flex_between'>
                <Upvotes upvotes={feedback.upvotes} />
                <Comments commentCount={feedback?.comments?.length || 0} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RoadmapCards;
