import "./App.css";
import Student from "./components/Student";

function App() {
const students = [
   {name: "John Doe", score:4.5, homework: 4},
   {name: "Elon Mask", score: 3, homework: 5},
   {name: "Donald Trump", score: 2, homework: 1},
   {name: "Madonna", score: 4, homework: 4},
   {name: "Michael Jackson", score: 2, homework: 4},
];
const output = students.map(student => {
  return <Student name={student.name}
    score={student.score}
    homework={student.homework}/>
});


return (
  <div className="App">
    {output}


  </div>
);
}


export default App;






