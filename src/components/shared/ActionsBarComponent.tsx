// create a component that displays a actions bar with a title, a description, a button, and a link

import { Button } from 'antd';

type ActionsBarComponentProps = {
  items: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    buttonColor?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'danger' | 'warning' | 'info' | 'success' | 'error';
    ButtonDisplay?: 'outlined' | 'filled' | 'solid';
    icon?: React.ReactNode;
    onClick?: () => void;
    loading?: boolean;
  }[];
}

export default function ActionsBarComponent({ items }: ActionsBarComponentProps) {
  return (
    <div className="flex justify-end items-center gap-2 mr-10 my-5">
      {items.map((item, index) => (
        <Button key={index} type={item.buttonColor} variant={item.ButtonDisplay} href={item.buttonLink} onClick={item.onClick} loading={item.loading}>{item.icon}{item.buttonText}</Button>
      ))}
    </div>
  );
}