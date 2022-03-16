

function Student(props) {
  const studentStyles = {
    boxShadow: "0 0 10px black",
    padding: "10px",
    margin: "10px",
    paddingTop: 0,
  };
  return (
    <div style={studentStyles}>
       <h2>{props.name}</h2>
       <p> Score{props.score}/5</p>
       <p>Homework{props.homework}/5</p>
       <p>Notes{props.children}</p>
     </div>
  );
}

export default Student;