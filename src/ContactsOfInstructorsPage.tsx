import { useState } from "react";

function ContactsOfInstructorsPage() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const instructors = [
    { name: "Mr.Drake Sarpong", email: "drakesarpong21@gmail.com" },
    { name: "Mr.Henry Twum", email: "henrytwum09@gmail.com" },
    { name: "Mr.Kwesi Seidu", email: "kwesiseidu03@gmail.com" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated email sending logic
    console.log("Sending email...");
    console.log("Recipient:", recipient);
    console.log("Subject:", subject);
    console.log("Message:", message);
    // Reset form fields
    setRecipient("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
       <div className="items">
          <img
            className="logo"
            src="images/ug logo.png" 
            alt="Logo of University of Ghana." style={{height:"150px",background:"white"}}
          />
        </div>
      <h1 style={{ textAlign: "left", paddingLeft:"420px"}}>Contact Page</h1>
      <div style={{ textAlign: "center", paddingLeft:"420px"}}>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: "left",}}>Instructors</h2>
        <ul>
          {instructors.map((instructor, index) => (
            <li key={index}>
              {instructor.name} - {instructor.email}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: "left"}}>Send Email</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipient">Recipient:</label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactsOfInstructorsPage;
