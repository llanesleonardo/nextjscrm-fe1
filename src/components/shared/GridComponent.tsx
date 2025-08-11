'use client';
import React from "react";
type GridComponentProps = {
    title: string;
    description: string;
    textColor: string;
    items: {
        title: string;
        description: string;
        icon: React.ReactNode;
        linkHref: string;
        linkText: string;
    }[];
}
    export default function GridComponent( props: GridComponentProps ) {
        const { title, description, items, textColor="black" } = props;

        return (
            <div className="py-16 px-4 bg-gray-100">
                <h2 className={`text-${textColor} text-3xl font-bold text-center`}>{title}</h2>
                <p className={`text-${textColor} text-center my-10`}>{description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {items.map((item: GridComponentProps['items'][0],index:number  ) => (
                        <div key={index}
                        className={`p-6 border rounded-lg shadow hover:shadow-md transition duration-300 text-${textColor}`}
                      >
                            <div className="mb-4 text-[#014fa7] text-4xl">
                                {item.icon}
                            </div>
                            <h3 className={`text-${textColor} text-xl font-bold mb-2`}>{item.title}</h3>
                            <p className={`text-${textColor} mb-4`}>{item.description}</p>
                            {item.linkHref && item.linkText && (
              <a
                href={item.linkHref}
                className="text-[#014fa7] font-medium underline"
              >
                {item.linkText}
              </a>
            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }