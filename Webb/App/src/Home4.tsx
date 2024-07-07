import { useState } from "react";
import "./header.less";
function Home() {
  const [Contintue, setContintue] = useState(0);
  const [knownWant, setKnownWant] = useState(0);
  const incrementContinue = () => setContintue(Contintue + 1);
  return (
    <header onClick={() => incrementContinue()}>
      {Contintue === 0 ? <h1>What do you really want?</h1> : null}
      {Contintue === 1 ? (
        <h1>
          What if getting what you want was as simply as just knowing what it is
          you want?
        </h1>
      ) : null}
      {Contintue >= 2 &&
      (Contintue === 2 || Contintue % 2 === 1) &&
      knownWant === 0 ? (
        <h1>Do you know what you want?</h1>
      ) : null}
      {Contintue > 3 && Contintue % 2 === 1 && knownWant === 0 ? (
        <h1>How does it feel?</h1>
      ) : null}
      {Contintue > 3 && Contintue % 2 === 1 && knownWant === 0 ? (
        <h1>Can you see it clearly before you?</h1>
      ) : null}
      {Contintue > 3 && Contintue % 2 === 0 && knownWant === 0 ? (
        <h1>I know!</h1>
      ) : null}
      {Contintue > 3 && Contintue % 2 === 0 && knownWant === 0 ? (
        <h1>I don't know yet</h1>
      ) : null}
    </header>
  );
}

export default Home;
