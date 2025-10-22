import { useState } from "react";

function BasicFormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Please fill all Fields!!!");
    } else {
      setError("");
      console.log("Form Sumbitted : ", { name, email });
      alert("Form is succesffuly sumbitted");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Baisc Form Validation</h1>

        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="ENter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        {error && <p style={{color: "red"}}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicFormValidation;
