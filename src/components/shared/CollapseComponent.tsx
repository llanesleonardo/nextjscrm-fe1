// create a react typescript functional component
'use client';
import React from "react";
import { Collapse } from "antd";

type CollapseComponentProps = {
    items: {
        key: string;
        label: string;
        children: React.ReactNode;
    }[];
}
export default function CollapseComponent( props: CollapseComponentProps ) {
    const { items } = props;
    const onChange = (key: string[]) => {
        console.log(key);
      };
    return (
        <div className="bg-gray-100">
            <h2 className="text-black text-4xl font-bold text-center">Frequently Asked Questions</h2>
           <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>
    );
}