import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, DefaultLayout } from './constants';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
