import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';
import { useState } from 'react';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 10,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue,
			};
		});
	}

	return (
		<div>
			<Header />
			<UserInput userInput={userInput} onChangeInput={handleChange} />
			{!inputIsValid && <p>Please Enter a duration greater than zero!</p>}
			{inputIsValid && <ResultsTable userInput={userInput} />}
		</div>
	);
}

export default App;
