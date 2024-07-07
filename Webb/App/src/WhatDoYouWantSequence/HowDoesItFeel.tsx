import { useNavigate } from "react-router-dom";
function HowDoesItFeel() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/IKnowWhatIWantOrNotYet");
  return (
    <header onClick={() => handleOnClick()}>
      <h1 style={{ paddingRight: "3em" }}>
        How does <br />
        it feel?
      </h1>
      <h1 style={{ paddingRight: "3em" }}>
        Does it <br />
        feel good?
      </h1>
      <h1>
        Can you see it <br />
        clearly before you?
      </h1>
    </header>
  );
}

export default HowDoesItFeel;
