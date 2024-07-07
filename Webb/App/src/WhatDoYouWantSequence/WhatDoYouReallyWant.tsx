import { useNavigate } from "react-router-dom";
function WhatDoYouReallyWant() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/AsSimplyAsJustKnowingWhatItIs");
  return (
    <header onClick={() => handleOnClick()}>
      <h1>What do you really want?</h1>
    </header>
  );
}

export default WhatDoYouReallyWant;
