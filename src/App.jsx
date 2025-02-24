import { lazy, Suspense } from 'react';

import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import RestMenu from './components/RestMenu.jsx';
import Error from './components/Error.jsx';
import Loading from './components/Loading.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// lazy loading
const Grocery = lazy(()=> import('./components/Grocery.jsx')) ;

function App() {
  return (
    <div className="App-container">
      <Router>

        <Header />

        <Routes>
          <Route path="/" element={<Body />} errorElement={<Error />} />
          <Route
            path="/grocery"
            element={
              <Suspense fallback={<Loading />}>
                <Grocery />
              </Suspense>
            }
            errorElement={<Error />}
          />
          <Route path="/about" element={<About />} errorElement={<Error />} />
          <Route
            path="/contact"
            element={<Contact />}
            errorElement={<Error />}
          />
          <Route
            path="/restaurent-menu/:restId"
            element={<RestMenu />}
            errorElement={<Error />}
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
