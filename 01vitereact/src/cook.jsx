function Cook() {

  const name = "Naman Singla"
  const style = {
    color: "#fac800",
    textAlign : "center",
    backgroundColor : "#000",
    fontSize: 100
  }

  return (
    <>
    <h3 style={style}>Hello {name} inline css</h3>
    <h3 style={{color: "blue", textAlign: "center", fontSize: 50}}>Hello {name} internal css</h3>
    <h3 className="test">Hello {name} External css</h3>

    </>
  );
}

export default Cook;
