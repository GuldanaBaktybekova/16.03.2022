function Article(props) {

  return (
    <div>
       <img src={props.img}/>
       <h1> {props.title}</h1>
       
       <p>{props.note}</p>
     </div>
  );
}

export default Article;