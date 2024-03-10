import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
function App() {

    const [userInputs, setUserInputs] = useState({
      initialInvestment: 15000,
      annualInvestment: 1500,
      expectedReturn: 5,
      duration: 15,
    });

    const inputIsValid =userInputs.duration >= 1;

    function handleChange(userInput, newValue) {
      setUserInputs((prevInputs) => {
        return {
          ...prevInputs,
          [userInput]: +newValue, // the plut to convert to number
        };
      });
    }




  return (
    <>
      <h1>React Investment Calculator</h1>
      <Header />
      <UserInput handleChange={handleChange} userInputs={userInputs} />
      {!inputIsValid && <p>Please enter a duration greater than Zero</p> }
      {inputIsValid && <Results userInputs={userInputs} />}
    </>
  );
}

export default App
