import React, { useState } from "react";
import emailjs from "emailjs-com";
import TimezonePicker, {
  ITimeZone,
} from "../../components/timezone-picker/timezone-picker";
import ReCAPTCHA from "react-google-recaptcha";
import "./EmailForm.less";
const EMAIL_LIMIT = 3;
const LOCAL_STORAGE_KEY = "email_count";
const serviceId = "service_prrmu89";
const YOUR_TEMPLATE_ID = "template_4tb59yl";
const publickey = "36TUg4J7bVP4sOsKc";
const EmailForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState<ITimeZone | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const emailCount = localStorage.getItem(LOCAL_STORAGE_KEY);
    const today = new Date().toLocaleDateString();

    if (emailCount) {
      const emailData = JSON.parse(emailCount);
      if (emailData.date === today && emailData.count >= EMAIL_LIMIT) {
        setError("You have reached the maximum email limit for today.");
        return;
      }
    }

    emailjs.init(publickey); // Your EmailJS user ID
    emailjs
      .send(serviceId, YOUR_TEMPLATE_ID, {
        from_name: name,
        from_email: email,

        reply_to: email,
        timezone,
      })
      .then(
        (result: ITextObject) => {
          console.log("Email sent:", result.text);
          setSuccess("Email sent successfully!");

          let newCount = 1;
          if (emailCount && JSON.parse(emailCount).date === today) {
            newCount = JSON.parse(emailCount).count + 1;
          }

          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({ date: today, count: newCount })
          );
        },
        (error: ITextObject) => {
          console.log("Failed to send email:", error.text);
          setError("Failed to send email.");
        }
      );
  };
  const newTimeZone = (tz: ITimeZone | null) => (tz ? setTimezone(tz) : null);
  return (
    <div id="form-container">
      <form onSubmit={sendEmail}>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <div>
          <label>Your Name:</label>
          <br />
          <input
            className="input-style"
            type="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <TimezonePicker newTimeZone={newTimeZone} />
        <div>
          <label>Your Email:</label>
          <br />
          <input
            className="input-style"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="g-recaptcha" data-sitekey="your_site_key"></div>
        <button className="email-button" type="submit">
          I am interested to know more
        </button>
        <ReCAPTCHA
          sitekey="6LdDOwoqAAAAAMWp4s9E-RXr84-uPqyVaojohWvC" // Replace with your site key
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
};
interface ITextObject {
  text: string;
}
export default EmailForm;
