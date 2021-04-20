import { useCallback, useEffect, useMemo, useState } from "react";

import ScreenReaderTips from "./ScreenReaderTips/ScreenReaderTips";
import Task0 from "./Task0/Task0";
import Task1 from "./Task1/Task1";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";
import EndSlide from "./End/End";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const history = useHistory();
  const initialIndex = useMemo(() => {
    const index = location.pathname.substring(1);
    if (Number.isInteger(parseInt(index, 10))) {
      return parseInt(index, 10);
    }
    return 0;
  }, []);

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const goToNext = useCallback((index) => {
    setActiveIndex(activeIndex + 1);
  }, []);

  useEffect(() => {
    history.push(`/${activeIndex}`);
  }, [activeIndex]);

  useEffect(() => {
    const index = location.pathname.substring(1);
    if (Number.isInteger(parseInt(index, 10))) {
      setActiveIndex(parseInt(index, 10));
    }
  }, [location.pathname]);

  return (
    <main>
      <Switch>
        <Route path="/0" render={() => <Task0 onSubmit={goToNext} />} />
        <Route path="/1" render={() => <Task1 onSubmit={goToNext} />} />
        <Route path="/2" render={() => <Task2 onSubmit={goToNext} />} />
        <Route path="/3" render={() => <Task3 onSubmit={goToNext} />} />
        <Route path="/4" render={() => <EndSlide />} />
      </Switch>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <ScreenReaderTips />
      <Main />
    </Router>
  );
};

export default App;
