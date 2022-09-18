const BlogList = (props) => {
  const blogs = props.blogs;

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <h3>Written by {blog.author}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
