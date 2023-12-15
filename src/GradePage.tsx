import { useState } from "react";


function GradePage() {
  const [firstGrade] = useState([
    {
      firstCode: "UGBS",
      firstCourse: "PRINCIPLES OF MANAGEMENT",
      firstGrade: "A",
    },
    {
      firstCode: "DCIT 101",
      firstCourse: "INTRODUCTION TO COMPUTER SCIENCE",
      firstGrade: "A",
    },
    {
      firstCode: "DCIT 103",
      firstCourse: "OFFICE PRODUCTIVITY TOOLS",
      firstGrade: "A",
    },
    {
      firstCode: "ECONS",
      firstCourse: "MACRO ECONOMICS",
      firstGrade: "A",
    },
    {
      firstCode: "STAT 111",
      firstCourse: "INTRODUCTION TO STATISTICS AND PROBABILITY I",
      firstGrade: "A",
    },
    {
      firstCode: "UGRC 150",
      firstCourse: "CRITICAL THINKING AND PRACTICAL REASONING",
      firstGrade: "A",
    },
  ]);

  const [secondGrade] = useState([
    {
      secondCode: "DCIT 102",
      secondCourse: "COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS",
      secondGrade: "A",
    },
    {
      secondCode: "DCIT 104",
      secondCourse: "PROGRAMMING FUNDAMENTALS",
      secondGrade: "A",
    },
    { secondCode: "MATH 122", secondCourse: "CALCULUS I", secondGrade: "A" },
    {
      secondCode: "ECONS ",
      secondCourse: "MICRO ECONOMICS",
      secondGrade: "A",
    },
    {
      secondCode: "STAT 112",
      secondCourse: "INTRODUCTION TO STATISTICS AND PROBABILITY II",
      secondGrade: "A",
    },
    {
      secondCode: "UGRC 110",
      secondCourse: "ACADEMIC WRITING I",
      secondGrade: "A",
    },
  ]);

  const [thirdGrade] = useState([
    {
      thirdCode: "CBAS 210",
      thirdCourse: "ACADEMIC WRITING II",
      thirdGrade: "N/A",
    },
    { thirdCode: "DCIT 201", thirdCourse: "PROGRAMMING I", thirdGrade: "N/A" },
    {
      thirdCode: "DCIT 203",
      thirdCourse: "DIGITAL AND LOGIC SYSTEMS DESIGN",
      thirdGrade: "N/A",
    },
    {
      thirdCode: "DCIT 205 ",
      thirdCourse: "MULTI MEDIA AND WEB DESIGN",
      thirdGrade: "N/A",
    },
    {
      thirdCode: "DCIT 207",
      thirdCourse: "COMPUTER ORGANIZATION & ARCHITECTURE",
      thirdGrade: "N/A",
    },
    { thirdCode: "DCIT 209", thirdCourse: "E-BUSINESS ARCHITECTURES", thirdGrade: "N/A" },
  ]);

  const [selectedFirstCode] = useState("");
  const [selectedFirstCourse] = useState("");

  const [selectedSecondCode] = useState("");
  const [selectedSecondCourse] = useState("");

  const [selectedThirdCode] = useState("");
  const [selectedThirdCourse] = useState("");

  const filteredFirstGrades = firstGrade.filter((firstGrade) => {
    if (selectedFirstCode) {
      return firstGrade.firstCode === selectedFirstCode;
    }
    if (selectedFirstCourse) {
      return firstGrade.firstCourse === selectedFirstCourse;
    }
    return true;
  });

  const filteredSecondGrades = secondGrade.filter((secondGrade) => {
    if (selectedSecondCode) {
      return secondGrade.secondCode === selectedSecondCode;
    }
    if (selectedSecondCourse) {
      return secondGrade.secondCourse === selectedSecondCourse;
    }
    return true;
  });

  const filteredThirdGrades = thirdGrade.filter((thirdGrade) => {
    if (selectedThirdCode) {
      return thirdGrade.thirdCode === selectedThirdCode;
    }
    if (selectedThirdCourse) {
      return thirdGrade.thirdCourse === selectedThirdCourse;
    }
    return true;
  });

  return (
    <>
      <div>
        <div>
        <img
            className="logo"
            src="images/ug logo.png" 
            alt="Logo of University of Ghana." style={{height:"150px",background:"white"}}
            
          />
        </div>
      </div>
      <br />
      <h1 style={{paddingLeft:"420px"}}>Academic Record</h1>
      <div className="record_grid">
        <div>
          <p>StudentID: 1129644</p>
          <p>Name: Jabez Tachie Mensah</p>
        </div>
        <div>
          <p>Date of Birth: 29-JUN-04</p>
          <p>Sex: Male</p>
        </div>
      </div>
      <hr /> <hr />
      <div className="record">
        <div className="inner_record">
          <b>ACADEMIC YEAR: 2022/2023</b>
        </div>
        <div className="inner_record">
          <b>FIRST SEMESTER</b>
        </div>
        <div className="inner_record">
          <b>CCT: 12</b>
        </div>
        <div className="inner_record">
          <b>CCP: 12</b>
        </div>
        <div className="inner_record">
          <b>CGPA: 4.00</b>
        </div>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>code</th>
            <th>Course Title</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredFirstGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.firstCode}</td>
              <td>{grade.firstCourse}</td>
              <td>{grade.firstGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="record">
        <div className="inner_record">
          <b>ACADEMIC YEAR: 2022/2023</b>
        </div>
        <div className="inner_record">
          <b>SECOND SEMESTER</b>
        </div>
        <div className="inner_record">
          <b>CCT: 12</b>
        </div>
        <div className="inner_record">
          <b>CCP: 12</b>
        </div>
        <div className="inner_record">
          <b>CGPA: 4.00</b>
        </div>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>code</th>
            <th>Course Title</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredSecondGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.secondCode}</td>
              <td>{grade.secondCourse}</td>
              <td>{grade.secondGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="record">
        <div className="inner_record">
          <b>ACADEMIC YEAR: 2023/2024</b>
        </div>
        <div className="inner_record">
          <b>FIRST SEMESTER</b>
        </div>
        <div className="inner_record">
          <b>CCT: </b>
        </div>
        <div className="inner_record">
          <b>CCP: </b>
        </div>
        <div className="inner_record">
          <b>CGPA: </b>
        </div>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>code</th>
            <th>Course Title</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredThirdGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.thirdCode}</td>
              <td>{grade.thirdCourse}</td>
              <td>{grade.thirdGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
}
export default GradePage;
