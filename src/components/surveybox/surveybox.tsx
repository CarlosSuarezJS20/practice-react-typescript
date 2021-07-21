import React, { useRef, useState, useEffect } from "react";

import Loader from "../UI/loader/loader";

import axios from "axios";
import "./surveybox.scss";

const DB_URL = "https://typescript-react-portfolio-default-rtdb.firebaseio.com";

const SurveyBox: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [numberOfAnswers, setNumberOfAnswers] = useState<number>(0);

  const programmingQRef = useRef<HTMLSelectElement>(null);
  const skillsQRef = useRef<HTMLSelectElement>(null);
  const stateManagementQRef = useRef<HTMLSelectElement>(null);
  const programmerTypeQRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    // This request allows to fetch all the responses and display the length in the UI
    axios
      .get(`${DB_URL}/users-answers.json`)
      .then((res) => {
        setNumberOfAnswers(Object.keys(res.data).length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // To update the number in the form
  const fetchAnswersFromServer = () => {
    axios
      .get(`${DB_URL}/users-answers.json`)
      .then((res) => {
        setNumberOfAnswers(Object.keys(res.data).length);
      })
      .catch((err) => {});
  };

  const onSubmitSurvey = (e: React.FormEvent): void => {
    e.preventDefault();

    // validation
    if (
      programmerTypeQRef.current!.value.trim() === "" &&
      skillsQRef.current!.value.trim() === "" &&
      stateManagementQRef.current!.value.trim() === "" &&
      programmerTypeQRef.current!.value.trim() === ""
    ) {
      alert("You must answer all questions!");
      return;
    }

    setLoading((prevLoading) => !prevLoading);
    const newAnswer = {
      id: Math.random(),
      answers: [
        programmerTypeQRef.current!.value,
        skillsQRef.current!.value,
        stateManagementQRef.current!.value,
        programmerTypeQRef.current!.value,
      ],
    };

    axios
      .post(`${DB_URL}/users-answers.json`, newAnswer)
      .then((res) => {
        fetchAnswersFromServer();
        setLoading((prevLoading) => !prevLoading);
      })
      .catch((error) => {
        console.log(error);
        setLoading((prevLoading) => !prevLoading);
      });
  };

  return (
    <div className="surveybox-container">
      {loading ? (
        <div className={"surveybox-container__loader-holder"}>
          <Loader />
        </div>
      ) : (
        <React.Fragment>
          <h2>Quick survey!</h2>
          <form action="submit" onSubmit={onSubmitSurvey}>
            <label>favorite programming framework?</label>
            <select ref={programmingQRef} name="programming">
              <option value="">-select one-</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
              <option value="None of the above">None of the above</option>
            </select>
            <br></br>
            <label>what a junior developer should have?</label>
            <select ref={skillsQRef} name="skills">
              <option value="">-select one-</option>
              <option value="Eagerness to lear">Eagerness to learn</option>
              <option value="CS Degree">CS Degree</option>
              <option value="Commercial experience">
                Commercial experience
              </option>
              <option value="Portfolio">Portfolio</option>
            </select>
            <br></br>
            <label>Redux or Context Api?</label>
            <select ref={stateManagementQRef} name="state-management">
              <option value="">-select one-</option>
              <option value="Redux">Redux</option>
              <option value="Context Api">Context Api</option>
            </select>
            <br></br>
            <label>Backend, Frontend, Mobile?</label>
            <select ref={programmerTypeQRef} name="profession">
              <option value="">-select one-</option>
              <option value="Back-end">back-end</option>
              <option value="Front-end">front-end</option>
              <option value="mobile">mobile</option>
            </select>
            <br></br>
            <button type="submit">submit</button>
          </form>
          <p className="total-visitors-answers">
            answered by {numberOfAnswers} visitors
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default SurveyBox;
