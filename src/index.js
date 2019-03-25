import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText () {
    return {text:'new'};
}

//react component
const App = () => {

    const buttonTxt = 'Click';
    return (
        <div>
        <label htmlFor="name" className="label">
            Enter name:
        </label>
        <input id="name" type="text" />
        <button style={{backgroundColor:'green', color: 'white'}}>
            {buttonTxt}
            {getButtonText().text}
        </button>
    </div>
    );

};

ReactDOM.render(<App />,  document.querySelector('#root'));
