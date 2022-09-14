import { useState } from "react";

const Home = () => {
  //let name = "Filip";
  const [name, setName] = useState("Luigi");
  const [age, setAge] = useState(19);

  const handleClick = () => {
    setName("Filip");
    setAge(25);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>
        {name} is {age} years old
      </p>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
