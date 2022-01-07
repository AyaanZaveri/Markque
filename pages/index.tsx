import React, { useState } from "react";
import Input from "../components/Input";
import Nav from "../components/Nav";
import ReactMarkdown from "react-markdown";

const Home = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col space-y-5 mt-5">
      <Nav />
      <Input setText={setText} text={text} placeholder="Type markdown..." />
      <div className="prose flex justify-start p-5">
        <ReactMarkdown>
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Home;
