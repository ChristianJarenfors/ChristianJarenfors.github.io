import { useNavigate } from "react-router-dom";
import EmailForm from "./EmailForm";
function YesIknowWhatIWant() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/DoYouKnowWhatYouWant");
  return (
    <header>
      <h1>
        Are you ready to invest in yourself?
        <iframe
          width="963"
          height="542"
          src="https://www.youtube.com/embed/Azu2UWG3OzQ?si=1lcDAwaSOHRylFpb"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </h1>
      <EmailForm></EmailForm>
    </header>
  );
}

export default YesIknowWhatIWant;
