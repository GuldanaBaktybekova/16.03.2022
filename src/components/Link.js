function Link(props) {

  const links = props.output;
  let lis = links.forEach(link => {
    <li><a href={link.href}>{link.title}</a></li>
  });

  return (
   <ul>{lis}</ul>
  );
  }


export default Link;


