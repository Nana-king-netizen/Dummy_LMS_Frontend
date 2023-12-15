import { useState } from "react";
function MissingGradeForm() {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();


    if (
      courseName.trim() === "" ||
      instructorName.trim() === "" ||
      expectedGrade.trim() === "" ||
      explanation.trim() === ""
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setCourseName("");
    setInstructorName("");
    setExpectedGrade("");
    setExplanation("");
    setErrorMessage("");
  };

  return (
    <div className="body">
    <img src="images/ug logo.png" alt="Ug logo"style={{height:"150px"}} />
      <h2 style={{paddingLeft:"420px"}}>Missing Grade Report Form< /h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName" style={{paddingLeft:"250px"}}>
            <b>Course Name:</b>
          </label>
          <input
            type="text"
            id="courseName"
            placeholder="Enter the course name"
            value={courseName}
            onChange={(event) => setCourseName(event.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="instructorName" style={{paddingLeft:"250px"}}>
            <b>Instructor's Name:</b>
          </label>
          <input
            type="text"
            id="instructorName"
            placeholder="Enter the instructor's name"
            value={instructorName}
            onChange={(event) => setInstructorName(event.target.value)}
            required
          />
          
        </div>
        <br />
        <div>
          <label htmlFor="expectedGrade" style={{paddingLeft:"250px"}}>
            <b>Anticipated Grade:</b>
          </label>
          <input
            type="text"
            id="expectedGrade"
            placeholder="Enter the expected grade"
            value={expectedGrade}
            onChange={(event) => setExpectedGrade(event.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="explanation" style={{paddingLeft:"250px"}}>
            <b>Explanation:</b>
          </label>
          <textarea
            id="explanation"
            placeholder="Enter an explanation for the missing grade"
            value={explanation}
            onChange={(event) => setExplanation(event.target.value)}
            required
          ></textarea>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" style={{paddingLeft:"250px"}}>Submit</button>
      </form>
    </div>
  );
}

export default MissingGradeForm;
