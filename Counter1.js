import React, { useState } from "react";


const Counter1 = ({ addData }) => {
  const [data, setData] = useState({
    mob: "6509096",
    add: "bang banga ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(data);
    console.log(addData);
  };
  const handleChange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value });
    
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="enter data"
          onChange={handleChange}
          
        />
        <input
          type="text"
          name="lastName"
          placeholder="enter data"
          onChange={handleChange}
         
        />
        <button  type="submit">
          Add Data
        </button>
        </form>
      </div>
    </>
  );
};
export default Counter1;
