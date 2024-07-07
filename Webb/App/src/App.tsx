import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./header.less";

import AsSimplyAsJustKnowingWhatItIs from "./WhatDoYouWantSequence/AsSimplyAsJustKnowingWhatItIs";
import WhatDoYouReallyWant from "./WhatDoYouWantSequence/WhatDoYouReallyWant";
import DoYouKnowWhatYouWant from "./WhatDoYouWantSequence/DoYouKnowWhatYouWant";
import HowDoesItFeel from "./WhatDoYouWantSequence/HowDoesItFeel";
import IKnowWhatIWantOrNotYet from "./WhatDoYouWantSequence/IKnowWhatIWantOrNotYet";
import YesIknowWhatIWant from "./WhatDoYouWantSequence/YesIknow/YesIknowWhatIWant";
import NoIDontKnowConsiousslyWhatIWantYet from "./WhatDoYouWantSequence/NoNotYet/NoIDontKnowConsiousslyWhatIWantYet";
import NoPage from "./NoPage";

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
