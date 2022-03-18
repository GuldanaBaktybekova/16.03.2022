function Text(props) {
  return (
    <div>
      <h1>{props.h1}</h1>
      <p>{props.children}</p>
     </div>
  );
}

export default Text;