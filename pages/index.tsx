import React, { useState } from "react";
import Input from "../components/Input";
import Nav from "../components/Nav";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

const Home = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col space-y-5 mt-5">
      <Nav />
      <Input setText={setText} placeholder="Type markdown..." />
      <div className="flex justify-center">
        <div className="p-5 rounded-lg resize overflow-auto w-11/12 pb-16 mb-5 ring-1 ring-gray-200 transition delay-200">
          <div className="prose break-words">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
