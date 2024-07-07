import React, { useState } from "react";
import emailjs from "emailjs-com";

const EMAIL_LIMIT = 3;
const LOCAL_STORAGE_KEY = "email_count";
const serviceId = "service_prrmu89";
const YOUR_TEMPLATE_ID = "template_4tb59yl";
const publickey = "36TUg4J7bVP4sOsKc";
const EmailForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        from_email: email,
        message,
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

  return (
    <form onSubmit={sendEmail}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Email</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};
interface ITextObject {
  text: string;
}
export default EmailForm;
