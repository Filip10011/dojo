const Home = () => {
  const handleClick = (e) => {
    console.log("Alo brej", e);
  };

  const handleClick2 = (name, e) => {
    console.log("Hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClick2("Filip", e)}>Click me again</button>
    </div>
  );
};

export default Home;
