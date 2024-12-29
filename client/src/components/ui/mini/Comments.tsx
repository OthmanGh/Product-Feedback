interface CommentsProps {
  commentCount: number;
}

const Comments = ({ commentCount }: CommentsProps) => (
  <p className='flex_between gap-2'>
    <img src='/shared/icon-comments.svg' alt='Comments icon' />
    <span className='text-blue-dark font-bold'>{commentCount}</span>
  </p>
);

export default Comments;
