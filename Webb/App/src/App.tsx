import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "./header.less";

import { useState } from "react";
import AsSimplyAsJustKnowingWhatItIs from "./WhatDoYouWantSequence/AsSimplyAsJustKnowingWhatItIs";
import WhatDoYouReallyWant from "./WhatDoYouWantSequence/WhatDoYouReallyWant";
import DoYouKnowWhatYouWant from "./WhatDoYouWantSequence/DoYouKnowWhatYouWant";
import HowDoesItFeel from "./WhatDoYouWantSequence/HowDoesItFeel";
import IKnowWhatIWantOrNotYet from "./WhatDoYouWantSequence/IKnowWhatIWantOrNotYet";
import YesIknowWhatIWant from "./WhatDoYouWantSequence/YesIknow/YesIknowWhatIWant";
import NoIDontKnowConsiousslyWhatIWantYet from "./WhatDoYouWantSequence/NoNotYet/NoIDontKnowConsiousslyWhatIWantYet";

function App() {
  const [Contintue, setContintue] = useState(0);
  const incrementContinue = () => setContintue(Contintue + 1);

  return (
    <div className="App" onClick={() => incrementContinue()}>
      <Router>
        {/* <nav>
          <ul className="button-list">
            <li className="button-item">
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li className="button-item">
              <Link to="/about">
                <button>About</button>
              </Link>
            </li>
            <li className="button-item">
              <Link to="/contact">
                <button>Contact</button>
              </Link>
            </li>
            <li className="button-item">
              <Link to="/flappyCanvas">
                <button>flappyCanvas</button>
              </Link>
            </li>
          </ul>
        </nav> */}
        {Contintue > 3 && false ? (
          <Link id="continue_towards_your_goal" to="/continue">
            <h1>Continue towards your goal..</h1>
          </Link>
        ) : null}
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/WhatDoYouReallyWant" />}
          />
          <Route
            path="/WhatDoYouReallyWant"
            element={<WhatDoYouReallyWant />}
          />

          <Route
            path="/AsSimplyAsJustKnowingWhatItIs"
            element={<AsSimplyAsJustKnowingWhatItIs />}
          />

          <Route
            path="/DoYouKnowWhatYouWant"
            element={<DoYouKnowWhatYouWant />}
          />
          <Route path="/HowDoesItFeel" element={<HowDoesItFeel />} />
          <Route path="/HowDoesItFeel" element={<HowDoesItFeel />} />

          <Route
            path="/IKnowWhatIWantOrNotYet"
            element={<IKnowWhatIWantOrNotYet />}
          />
          <Route path="/YesIknowWhatIWant" element={<YesIknowWhatIWant />} />
          <Route
            path="/NoIDontKnowConsiousslyWhatIWantYet"
            element={<NoIDontKnowConsiousslyWhatIWantYet />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
