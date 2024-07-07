import { useNavigate } from "react-router-dom";
function NoIDontKnowConsiousslyWhatIWantYet() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/AsSimplyAsJustKnowingWhatItIs");
  return (
    <header onClick={() => handleOnClick()}>
      <h1 style={{ fontSize: "2em" }}>
        Allow yourself to relax, Allow yourself to imagine and drop all thoughts
        regaring resourses or the how's of getting what you want.
      </h1>
      <h1>
        Drift into a space of your mind where your though flow freely. A space
        must people don't allow themselves to got to. Now close your eyes and
        sit comfortably or lay down and do this. See what you can come up with..
      </h1>
    </header>
  );
}

export default NoIDontKnowConsiousslyWhatIWantYet;
