import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { NotFound } from 'Pages/NotFound';
import { Layout } from '../components/Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
