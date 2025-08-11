
// create a react typescript functional component
'use client';
import React from "react";
import Image from "next/image";
import { Carousel, Typography, Card } from "antd";
const { Title, Paragraph } = Typography;

type CarouselComponentProps = {
    title: string;
    description: string;
    items: {
        title: string;
        src: string;
        alt: string;
        width: number;
        height: number;
        imgWidth: string;
        imgHeight: number;
        description: string;
        cardBackground: string;
        cardBorder: string;
        cardBorderRadius: number;
    }[];
}


export default function CarouselComponent( props: CarouselComponentProps ) {
  const {items } = props;

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
    
 
    return (

    <Carousel afterChange={onChange}>
      {items.map((item: CarouselComponentProps['items'][0], index: number) => (
    <div key={index}>
      <div style={{ position: 'relative' }}>
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          style={{  objectFit: 'cover', width: item.imgWidth, height: item.imgHeight }}
        />
        <Card
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: item.cardBackground,
            border: item.cardBorder,
            borderRadius: item.cardBorderRadius
          }}
        >
          <Title level={3} style={{ color: 'white', margin: 0 }}>
              {item.title}  
          </Title>
          <Paragraph style={{ color: 'white', margin: 0 }}>
            {item.description}
          </Paragraph>
        </Card>
        </div>
    </div>
    ))}
  </Carousel>
  )
}