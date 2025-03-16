import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      date: "March 10, 2025",
      excerpt: "AI is reshaping the way we build and interact with web applications. In this blog, we explore the most exciting trends in AI-powered development.",
      link: "#",
    },
    {
      title: "Understanding the Power of Blockchain",
      date: "February 20, 2025",
      excerpt: "Blockchain technology is not just for cryptocurrencies. Learn how it's revolutionizing industries like healthcare, supply chain, and more.",
      link: "#",
    },
    {
      title: "Building Scalable Web Applications with React",
      date: "January 15, 2025",
      excerpt: "React.js is one of the most popular JavaScript frameworks. This post provides insights into building scalable applications with React.",
      link: "#",
    },
  ];

  return (
    <section className="blogs">
      <div className="blogs-container">
        <h2 className="section-title">
          <span className="title-decorator">//</span> Blog Posts
        </h2>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
