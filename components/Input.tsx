import React from "react";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";

const SimplMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const Input = ({
  placeholder,
  setText,
  text,
  preview,
  setPreview,
}: {
  placeholder?: string;
  setText?: any;
  text?: string;
  preview?: boolean;
  setPreview?: any;
}) => {
  return (
    <div className="flex justify-start w-screen border-y items-start">
      <SimplMDE
        className={`flex justify-start p-3 outline-none w-screen transition`}
        onChange={setText}
        options={{
          autofocus: true,
          spellChecker: false,
          placeholder: placeholder,
          toolbar: [],
        }}
        value={text}
      />
    </div>
  );
};

export default Input;
