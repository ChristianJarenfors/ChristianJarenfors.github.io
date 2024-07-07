import { useNavigate } from "react-router-dom";
function IKnowWhatIWantOrNotYet() {
  const navigate = useNavigate();
  const yesIKnow = () => navigate("/YesIknowWhatIWant");
  const noIKnow = () => navigate("/NoIDontKnowConsiousslyWhatIWantYet");

  return (
    <header>
      <h1 style={{ cursor: "pointer" }} onClick={() => noIKnow()}>
        I don't know yet
      </h1>

      <div style={{ width: "24em" }}></div>
      <h1 style={{ cursor: "pointer" }} onClick={() => yesIKnow()}>
        I know!
      </h1>
    </header>
  );
}

export default IKnowWhatIWantOrNotYet;
