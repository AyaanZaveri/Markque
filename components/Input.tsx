import React from "react";

const Input = ({
  type,
  placeholder,
  setText,
  setMarkdown,
  color,
  width,
  padx,
  pady,
}: {
  type?: string;
  placeholder?: string;
  setText?: any;
  setMarkdown?: any;
  color?: string;
  width?: string | number;
  padx?: string | number;
  pady?: string | number;
}) => {
  return (
    <div className="flex justify-center">
      <textarea
        placeholder={placeholder}
        className="ring-1 ring-gray-200 focus:ring-2 focus:ring-sky-500 p-3 outline-none rounded-lg w-11/12 h-48"
        onChange={(e) => setText(e.target.value)}
      />
      <code>
        <div></div>
      </code>
    </div>
  );
};

export default Input;
