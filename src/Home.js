import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Et deserunt ex nulla veniam anim ad Lorem amet excepteur in aute sit nisi. Est sit officia cillum deserunt quis aliquip excepteur commodo dolor cillum enim sint. Id dolor adipisicing mollit proident duis.",
      author: "Filip",
      id: 1,
    },
    {
      title: "Welcome party",
      body: "Nisi veniam reprehenderit aute in excepteur consequat magna. Nostrud nisi do sunt aute cillum labore aliqua reprehenderit magna laboris amet irure. Nostrud reprehenderit irure qui ex ad proident.",
      author: "Mario",
      id: 2,
    },
    {
      title: "Web dev tools",
      body: "Est commodo irure dolore voluptate ullamco culpa pariatur. Dolore ullamco eiusmod in do sunt labore qui anim officia voluptate duis. Labore sint cillum ad non fugiat mollit occaecat ea commodo. In eiusmod tempor proident amet cillum dolor commodo sunt laborum reprehenderit laborum. Occaecat excepteur ut voluptate irure ad. Nostrud exercitation duis laboris aliqua consectetur minim et. Cupidatat elit fugiat fugiat id aliquip.",
      author: "Luigi",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
