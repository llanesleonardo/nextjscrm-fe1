// app/components/ClientSlider.tsx
'use client'; // This directive tells Next.js this component runs on the client

import React from 'react';
import Slider from 'react-slick';

// Define types for the component props
interface ClientSliderProps {
  children: React.ReactNode;
}

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

// Define the settings type (you can also import this from react-slick if available)
interface SlickSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
}

// Custom arrow components (you'll need to implement these)
const CustomPrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default function ClientSlider({ children }: ClientSliderProps) {
  // Carousel settings for screenshots and FAQs
  const settings: SlickSettings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
      
  return (
    <Slider prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />} {...settings}>
      {children}
    </Slider>
  );
}
