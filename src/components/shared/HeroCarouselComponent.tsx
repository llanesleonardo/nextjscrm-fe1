
// create a react typescript functional component
'use client';
import React from "react";
import Image from "next/image";
import { Carousel, Typography, Card, Button } from "antd";
const { Title, Paragraph } = Typography;

type HeroCarouselComponentProps = {
    items: {
        title: string;
        src: string;
        alt: string;
        width: number;
        height: number;
        cardBackground: string;
        cardBorder: string;
        cardBorderRadius: number;
        ctaText: string;
        ctaLink: string;
        imgWidth: string;
        imgHeight: number;
      }[];

}

export default function HeroCarouselComponent( props: HeroCarouselComponentProps ) {
  const {items } = props;

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
    
 
    return (

    <Carousel afterChange={onChange}>
      {items.map((item: any) => (
    <div key={item.title} className={`w-full ${item.src ? "h-auto" : "h-screen"} bg-[#014fa7] flex justify-center items-center text-center`}>
      <div>
        {item.src && <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          style={{  objectFit: 'cover', width: item.imgWidth, height: item.imgHeight }}
        />
        }
        <Card
          className={` w-full ${item.src ? "h-auto" : "h-screen"} flex flex-col justify-center items-center text-center`}
          style={{
            background: 'transparent !important',
            border: item.cardBorder,
            borderRadius: item.cardBorderRadius
          }}
        >
          <Title level={3} style={{ color: 'white', marginBottom: 0,textAlign: 'center',fontSize: '3rem' }}>
              {item.title}  
          </Title>
          <Paragraph style={{ color: 'white', marginBottom: 0,textAlign: 'center',fontSize: '1.5rem', marginTop: '1rem' }}>
            {item.description}
          </Paragraph>
          {item.ctaText && <Button onClick={() => window.location.href = item.ctaLink} color="primary" variant="outlined" size="large" style={{ marginTop: '1rem' }}>
            {item.ctaText}
          </Button>}
        </Card>
        </div>
  
    </div>
    ))}
  </Carousel>
  )
}