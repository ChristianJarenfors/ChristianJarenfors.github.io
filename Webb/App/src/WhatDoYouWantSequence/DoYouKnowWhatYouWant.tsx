import { useNavigate } from "react-router-dom";
function DoYouKnowWhatYouWant() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/HowDoesItFeel");
  return (
    <header onClick={() => handleOnClick()}>
      <h1>Do you know what you want?</h1>
    </header>
  );
}

export default DoYouKnowWhatYouWant;
