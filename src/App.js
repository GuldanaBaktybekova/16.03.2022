import "./App.css"

function App() {
  const studentStyles = {
    boxShadow: "0 0 10px black",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div className="App">
     <div style={studentStyles}>
       <h2>John Doe</h2>
       <div>Score: 4.5/5</div>
       <div>Homework: 4/5</div>
     </div>
    
       <div style={studentStyles} >
       <h2>Elon Mask</h2>
       <div>Score: 3/5</div>
       <div>Homework: 5/5</div>
     </div>
    
    <div style={studentStyles}>
    <h2>Donald Trump</h2>
    <div>Score: 2/5</div>
    <div>Homework: 1/5</div>
  </div>
  </div>
  );
}

export default App;
