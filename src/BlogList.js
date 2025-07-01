const BlogList = ({blogs,isPending,error,title}) => {
    console.log('BlogList received props:', { blogs, isPending, error, title });


    return (  
        <div className="blog-list">
            <h1>Blog List</h1>
            {title && <h2>{title}</h2>} 
            {isPending && <div>Loading...</div>}
            {error && <p> error :{error}</p>}
            {blogs && blogs.length > 0 && (
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </li>
                    ))}
                </ul>
            )}
      {blogs && blogs.length === 0 && !isPending && !error && (
        <div>No post found.</div>
      )}
        </div>
    );
}
 
export default BlogList;