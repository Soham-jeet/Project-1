import React, { useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
// Counter is a state initialized to 0
const [counter, setCounter] = useState(0)

// Function is called everytime increment button is clicked
const handleClick1 = () => {
	// Counter state is incremented
	setCounter(counter + 1)
}

// Function is called everytime decrement button is clicked
const handleClick2 = () => {
	// Counter state is decremented
	setCounter(counter - 1)
}

return (
	
	<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '400%',
    position: 'absolute',
    width: '98%',
    height: '98%',
    top: '-14%',
    color: "red"
  }}>
    <h4>Count Values</h4>
	<div
  style={{
    fontSize: '120%',
    position: 'relative',
    top: '0vh',
    color:"yellow"
  }}>
  {counter}
	</div>
	<div>
		<button
    style={{
      fontSize: '100%',
      position: 'relative',
      top: '20vh',
      marginRight: '5px',
      backgroundColor: 'green',
      borderRadius: '-3%',
      color: 'white',
    }}
		onClick={handleClick1}> Increase value</button>
		<button
    style={{
      fontSize: '100%',
      position: 'relative',
      top: '20vh',
      marginLeft: '5px',
      backgroundColor: 'blue',
      borderRadius: '-3%',
      color: 'white',
    }}
		onClick={handleClick2}> Decrease Value</button>
	</div>
	</div>
)
}

export default App;
