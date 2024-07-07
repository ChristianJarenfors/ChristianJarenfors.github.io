import { useNavigate } from "react-router-dom";
function HowDoesItFeel() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/IKnowWhatIWantOrNotYet");
  return (
    <header onClick={() => handleOnClick()}>
      <h1>How does it feel?</h1>
      <h1>Does it feel good?</h1>
      <h1>Can you see it clearly before you?</h1>
    </header>
  );
}

export default HowDoesItFeel;
