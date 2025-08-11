// create a react typescript functional component
import React from "react";

type TextBlockProps = {
  title: string;
  description: string;
}

export default function TextBlock( props: TextBlockProps ) {
  const { title, description } = props;

  return (
    <div className="py-16 px-4 bg-gray-100">
     <h2 className="text-black text-3xl font-bold text-center">{title}</h2>
          <p className="text-center my-10">
            {description}
          </p>
    </div>
  );
}