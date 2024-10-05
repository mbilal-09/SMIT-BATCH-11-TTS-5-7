import React from "react";

const Blogs = () => {
  return (
    <div className="text-center">
      Blogs
      {["1", "2", "3", "4"].map((data) => (
        <h1
          key={data}
          className="border p-3 rounded my-2 cursor-pointer hover:bg-fuchsia-100 "
        >
          Blog {data}
        </h1>
      ))}
    </div>
  );
};

export default Blogs;
