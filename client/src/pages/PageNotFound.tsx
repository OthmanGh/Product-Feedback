import { useNavigate } from "react-router-dom"
import { FaNotEqual } from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa6"

const PageNotFound = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate(-1)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6 md:gap-8 text-center min-h-screen bg-darkBlue px-4 py-10'>
      <FaNotEqual className='hidden sm:block text-purple-light text-6xl mb-4' />
      <div className='flex flex-col gap-2 md:gap-4'>
        <h1 className='md:text-5xl text-3xl font-extrabold text-purple-light'>
          404 Page Not Found 😒
        </h1>
        <p className='md:text-xl text-md text-slate-lavender mb-6'>
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
      <button
        className='flex_row gap-3 px-5 py-3 text-white bg-purple hover:opacity-80 md:max-w-[30%] mx-auto rounded-md shadow-md transition duration-200'
        onClick={handleGoHome}
        aria-label='Navigate to Home'
      >
        <FaArrowLeft />
        Go Back
      </button>
    </div>
  )
}

export default PageNotFound
