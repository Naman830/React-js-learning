function Array() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
            <li>{index} - {fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default Array;
