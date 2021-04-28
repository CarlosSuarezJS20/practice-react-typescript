import React, { useRef, useState } from "react";

import Loader from "../UI/loader/loader";

import axios from "axios";
import "./surveybox.css";

const DB_URL: string =
  "https://typescript-react-portfolio-default-rtdb.firebaseio.com/";

interface surveryAnswer {
  id: number;
  answers: string[];
}

const SurveyBox: React.FC = () => {
  const [surveyUserAnswers, setSurveyUserAnswers] = useState<surveryAnswer>();
  const [loading, setLoading] = useState(false);
  const programmingQRef = useRef<HTMLSelectElement>(null);
  const skillsQRef = useRef<HTMLSelectElement>(null);
  const stateManagementQRef = useRef<HTMLSelectElement>(null);
  const programmerTypeQRef = useRef<HTMLSelectElement>(null);

  const onSubmitSurvey = (e: React.FormEvent): void => {
    e.preventDefault();
    setLoading((prevLoading) => !prevLoading);
    setSurveyUserAnswers({
      id: Math.random(),
      answers: [
        programmerTypeQRef.current!.value,
        skillsQRef.current!.value,
        stateManagementQRef.current!.value,
        programmerTypeQRef.current!.value,
      ],
    });

    axios
      .post(`${DB_URL}/users-answers.json`, surveyUserAnswers)
      .then((res) => {
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
        <div className={"loader-holder"}>
          <Loader />
        </div>
      ) : (
        <React.Fragment>
          <h2>Quick survey!</h2>
          <form action="submit">
            <label>favorite programming framework?</label>
            <select ref={programmingQRef} name="programming">
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
              <option value="None of the above">None of the above</option>
            </select>
            <br></br>
            <label>what a junior developer should have?</label>
            <select ref={skillsQRef} name="skills">
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
              <option value="Redux">Redux</option>
              <option value="Context Api">Context Api</option>
            </select>
            <br></br>
            <label>Backend, Frontend, Mobile?</label>
            <select ref={programmerTypeQRef} name="profession">
              <option value="Back-end">back-end</option>
              <option value="Front-end">front-end</option>
              <option value="mobile">mobile</option>
            </select>
            <br></br>
            <button onClick={onSubmitSurvey}>submit</button>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default SurveyBox;
