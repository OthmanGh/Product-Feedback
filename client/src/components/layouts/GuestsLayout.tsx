import { Outlet } from "react-router-dom"
import { AuthImagePattern } from "../../constants"

const GuestsLayout = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 min-h-screen'>
      <Outlet />
      <AuthImagePattern title='test' subtitle='hey here' />
    </div>
  )
}

export default GuestsLayout
