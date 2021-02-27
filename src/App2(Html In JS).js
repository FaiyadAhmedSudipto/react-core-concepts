import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Faiyad Ahmed";
  var details = {
    job: "Designer",
    passion: "Coding"
  }

  var styles = { color: 'gray' }
  var styles2 = {
    color: 'black',
    // background-color: 'yellow'
    // In CSS, you write "background" + "-" + "color". But in React, you have to write "background" + "Color".
    // It means, the second text will start with Capital letter.
    backgroundColor: 'lightcoral'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Edit done with <code>src/App.js</code> and save to reload.
        </p>

        <p className="" style={styles}>My First React Paragraph</p>
        {/* Style from a single variable. */}
        <p style={styles2}>React is a library,not a framework</p>
        {/* Style from an object variable. */}
        <h4 style={{ color: 'black', backgroundColor: 'lightblue' }}>My name is {name}</h4>
        {/* Style directly in a tag. */}
        {/* Value from a single variable. */}
        <h5>I am {details.job + " " + details.passion}</h5>
        {/* Value from an object variable. */}
        <h6>My Heading: {(2 + 5) * 55 - 100 + (10)}</h6>


        {/* ===>>>Write Html tag by pasting these codes in "Emmet" in VScode settings.<<<=== */}
        {/* <p>"emmet.includeLanguages": {
          "javascript": "javascriptreact",
          }</p> */}


        {/* ===>>>Just Remove an ancore<<<=== */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
