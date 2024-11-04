import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, DefaultLayout, CreateNewFeedback, Roadmap } from './constants';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/create-new-feedback' element={<CreateNewFeedback />} />
          <Route path='/roadmap' element={<Roadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
