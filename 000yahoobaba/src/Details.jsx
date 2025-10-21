// function Details() {
//   const user = {
//     firstName: "Naman Singla",
//     Age: 16,
//     dream: "Billionare",
//   };

//   const fullname = (user) => {
//     return user.dream + " " + user.firstName  ;
//   };
//   return (
//     <>
//       <br />
//       <br />
//       <h2>Personal Details with Object</h2>
//       <p>Dream Name: {fullname(user)}</p>
//       <p>Name: {user.firstName}</p>
//       <p>Age: {user.Age}</p>
//       <p>Dream: {user.dream}</p>
//     </>
//   );
// }


function Details() {
  const users = [
    { name: "John Wick", age: "30", dream: "Psyco Killer" },
    { name: "Akshay", age: "25", dream: "SuperStar" },
    { name: "Naman", age: "16", dream: "Billionare" },
  ];

  return (
    <>
      <h2>Personal Detail </h2>
      <ul>
        {users.map((user, index) => (
          <li>
            {(user.name)} is {user.age}years old
          </li>
        ))}
      </ul>
    </>
  );
}

export default Details;
