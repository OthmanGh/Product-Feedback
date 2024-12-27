import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Home,
  DefaultLayout,
  CreateNewFeedback,
  Roadmap,
  GuestsLayout,
  Login,
  Signup,
  PageNotFound,
} from "./constants"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='' element={<Home />} />
          <Route path='create-new-feedback' element={<CreateNewFeedback />} />
          <Route path='roadmap' element={<Roadmap />} />
        </Route>

        <Route path='/auth' element={<GuestsLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
