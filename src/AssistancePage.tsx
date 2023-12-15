import { useState } from "react";

const AssistancePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated submission logic
    console.log("Sending support request...");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    // Set submission status
    setSubmitted(true);
  };
 
  <div className="items_container">
        <div className="items">
          <img
            className="logo"
            src="images/ug logo.png" 
            alt="Logo of University of Ghana." style={{height:"150px",background:"white"}}
          />
        </div>
      </div>
  

  return (
    <div>
      <h1>Help and Support</h1>
      <h2>Most Asked Questions</h2>
      <ul>
        <li>
          <strong>Question:</strong> How do I report my grades?
          <p>
            <strong>Answer:</strong>Go to the "Grades" area of your account after logging in to report your grades. To submit your grades, click the "Report" button and adhere to the prompts.
          </p>
        </li>
        {/* Add more FAQs here */}
      </ul>

      <h2>Contact Technical Support</h2>
      {submitted ? (
        <div>
          <p>We appreciate you contacting us! We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AssistancePage;

