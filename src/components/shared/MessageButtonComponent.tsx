'use client';
import { Button } from "antd";
import React from "react";

type MessageButtonComponentProps = {
    message: string;
    linkText: string;
    linkHref: string;
}

export default function MessageButtonComponent( props: MessageButtonComponentProps ) {
    const { message, linkText, linkHref } = props;

    return (
        <div className="flex flex-row items-center justify-between gap-4 bg-gray-100 p-4">
            <h2>{message}</h2>
            <Button onClick={() => window.location.href = linkHref} className="bg-blue-500 text-white">{linkText}</Button>
        </div>
    );
}