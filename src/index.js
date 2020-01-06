// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
	const button = { text: 'Click me' };
	const label = { text: 'Enter name:' };

	return (
		<div>
			<label className="label" htmlFor="name">
				{ label.text }
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{ button.text }
			</button>
		</div>
	);
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);