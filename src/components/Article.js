function Article(props) {
  return (
    <div>
      <img src={props.src} />
      <h1>{props.children}</h1>
    </div>
  );
}

export default Article;
