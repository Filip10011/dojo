import BlogList from "./BlogList";
import useFetch from "./useFatch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
