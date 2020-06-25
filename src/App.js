import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import ScrollToTop from "./utils/scroll-to-top";
import LoadingScreen from "./components/loading-screen/loading-screen";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";


const Home = lazy(() => import("./pages/home/home.component"));
// const WorkDetails = lazy(() => import("./pages/work-details/work-details.component"));

function App() {
  return (
      <div className="App">
        <Suspense fallback={<LoadingScreen/>}>
          <NavBar/>
          <ScrollToTop/>
          <Switch>
            <Route exact path='/' component={Home}/>
            {/*<Route exact path='/works' component={WorkDetails}/>*/}
            {/*<Route path='/works/:index' component={WorkDetails}/>*/}
          </Switch>
          <Footer/>
        </Suspense>
      </div>
  );
}

export default App;
