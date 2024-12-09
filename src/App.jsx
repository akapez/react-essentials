import { Fragment, useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserINput";


function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const handleChangeInput = (inputIdentifier, newValue) => {
    setInputs(prevState => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue
      };
    });
  };

  const inputIsValid = inputs.duration >= 1;

  return (
    <Fragment>
      <Header />
      <UserInput onChange={handleChangeInput} inputs={inputs} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results inputs={inputs} />}
    </Fragment>
  );
}

export default App;
