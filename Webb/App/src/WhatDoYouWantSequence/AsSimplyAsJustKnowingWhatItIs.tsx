import { useNavigate } from "react-router-dom";
function AsSimplyAsJustKnowingWhatItIs() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/DoYouKnowWhatYouWant");
  return (
    <header onClick={() => handleOnClick()}>
      <h1>
        What if getting what you want was as simply as just knowing what it is
        you want?
      </h1>
    </header>
  );
}

export default AsSimplyAsJustKnowingWhatItIs;
