const Box = (props) => {
  return (
    <div className={props.name}>
      <h1 className={props.head}>{props.children}</h1>
    </div>
  );
};

const element = (
  <div className="cont">
    <h1 className="head">Boxes</h1>
    <div className="card-cont">
      <Box name="box1" children="small" head="heading" />
      <Box name="box2" children="medium" head="heading" />
      <Box name="box3" children="large" head="heading" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
