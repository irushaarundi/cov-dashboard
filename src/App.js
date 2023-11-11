import "./App.css";
import React from "react";
// Import end

function App(){
// App component starts here
// return statement goes below this
    return (
        <div className="App">
            <h1>COVID 19 Dashboard </h1>
            <div className="dashboard-container">
                <div className='dashboar-menu'></div>
                <div className="dashboard-summary"></div>
            </div>
        </div>
    );
}

export default App;
