import { lazy, Suspense, useContext, useEffect, useState } from 'react';

import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import RestMenu from './components/RestMenu.jsx';
import Error from './components/Error.jsx';
import Loading from './components/Loading.jsx';

// import UserContext
import UserContext from './utils/userContext.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// lazy loading
const Grocery = lazy(() => import('./components/Grocery.jsx'));

function App() {

  const {loggedUser} = useContext(UserContext) ;

  const [ userName , setUserName ] = useState(loggedUser);

  // authenticating
  useEffect(() => {
    // making API call to get user data
    const data = {
      name: 'Sayanth T',
    };
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value = { { loggedUser : userName , setUserName } } > 
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
    </UserContext.Provider>
  );
}

export default App;
