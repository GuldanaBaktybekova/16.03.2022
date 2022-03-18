import "./App.css";
// import Student from "./components/Student";
// import Link from "./components/Link";
import Article from "./components/Article";

// function App() {
// const students = [
//    {name: "John Doe", score:4.5, homework: 4},
//    {name: "Elon Mask", score: 3, homework: 5},
//    {name: "Donald Trump", score: 2, homework: 1},
//    {name: "Madonna", score: 4, homework: 4},
//    {name: "Michael Jackson", score: 2, homework: 4},
// ];
// const output = students.map(student => {
//   return (
//    <Student
//    name={student.name}
//     score={student.score}
//     homework={student.homework} >
//       {student.notes}
//     </Student>
//   );
// });

// return (
//   <div className="App">
//     {output}

//     <Link to="https://google.com">Google</Link>

//   </div>
// );
// }

function App() {
  const articles = [
    {
      img: "https://media.istockphoto.com/photos/groups-of-dogs-labrador-puppies-puppy-chocolate-labrador-retriever-in-picture-id1069531070?s=612x612",
      title: "Dog",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ornare leo. Sed vel felis sed lorem facilisis tincidunt. Nullam commodo lectus non turpis posuere, id euismod enim hendrerit. Sed bibendum, tellus ut volutpat sollicitudin, turpis ante rhoncus or.",
    },
    {
      img: "https://media.istockphoto.com/photos/groups-of-dogs-labrador-puppies-puppy-chocolate-labrador-retriever-in-picture-id1069531070?s=612x612",
      title: "Dog",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ornare leo. Sed vel felis sed lorem facilisis tincidunt. Nullam commodo lectus non turpis posuere, id euismod enim hendrerit. Sed bibendum, tellus ut volutpat sollicitudin, turpis ante rhoncus or.",
    },
    {
      img: "https://media.istockphoto.com/photos/groups-of-dogs-labrador-puppies-puppy-chocolate-labrador-retriever-in-picture-id1069531070?s=612x612",
      title: "Dog",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ornare leo. Sed vel felis sed lorem facilisis tincidunt. Nullam commodo lectus non turpis posuere, id euismod enim hendrerit. Sed bibendum, tellus ut volutpat sollicitudin, turpis ante rhoncus or.",
    },
  ];
  const output = articles.map((article) => {
    return (
      <Article
        img={article.img}
        title={article.title}
     
        note={article.note}
      ></Article>
    );
  });

  return <div className="App">{output}</div>;
}

export default App;
