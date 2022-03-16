import "./App.css";
import Student from "./components/Student";
import Link from "./components/Link";

function App() {
const students = [
   {name: "John Doe", score:4.5, homework: 4},
   {name: "Elon Mask", score: 3, homework: 5},
   {name: "Donald Trump", score: 2, homework: 1},
   {name: "Madonna", score: 4, homework: 4},
   {name: "Michael Jackson", score: 2, homework: 4},
];
const output = students.map(student => {
  return (
   <Student 
   name={student.name}
    score={student.score}
    homework={student.homework} >
      {student.notes}
    </Student>
  );
});


return (
  <div className="App">
    {output}

    <Link to="https://google.com">Google</Link>

  </div>
);
}


export default App;






