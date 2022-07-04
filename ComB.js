function ComB(props) {
  return (
    <div>
      <h1>componentB {props.count}</h1>
      <button onClick={props.test}>increment</button>
    </div>
  );
}

export default ComB;
