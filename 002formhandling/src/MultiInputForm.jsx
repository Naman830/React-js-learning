import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ((prev) => ({
        ...prev, 
        [name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Multi input form</h1>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiInputForm;
