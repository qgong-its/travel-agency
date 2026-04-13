import { Routes, Route, BrowserRouter } from 'react-router';

import {
  Home,
  Destinations,
  DestinationDetails,
  About,
  Contact,
  NotFound,
} from '@/pages';

const App = () => {
  return (
    <BrowserRouter basename="/travel-agency">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<DestinationDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
