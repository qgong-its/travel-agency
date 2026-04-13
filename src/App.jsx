import { Routes, Route, BrowserRouter } from 'react-router';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow">
        <BrowserRouter basename="/travel-agency">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route
              path="/destinations/:slug"
              element={<DestinationDetails />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </div>
  );
};

export default App;
