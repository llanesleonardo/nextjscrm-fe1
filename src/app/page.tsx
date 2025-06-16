"use client";
import {
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaQuestionCircle,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";
import FlexBlock100 from "@/components/shared/FlexBlock100";
import PricingTable from "@/components/pricing/PricingTable";
// Import slick-carousel css in _app.tsx or here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  // Carousel settings for screenshots and FAQs
  const carouselSettings = {
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
    <main style={{ fontFamily: "Arial, sans-serif", color: "#000" }}>
      {/* 1. Full-Screen Hero */}
      <Header />
      <section
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#014fa7",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 1rem"
        }}
      >
        <div className="max-w-6xl">
        <h1 style={{ fontSize: "6rem" }}>
          Transform the Way You Manage Customers
        </h1>
        <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
          All-in-one CRM to boost productivity, streamline workflows, and grow
          your business.
        </p>
        <button
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#1e3c72",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
        </div>
      </section>

      {/* 2. Pricing Section */}

      {/* 3. App Screenshots Carousel */}
      <section
        style={{
          padding: "6rem 1rem",
          backgroundColor: "#f7fafd",
          maxWidth: "max-w-screen",
          margin: "0 auto",
        }}
      >
         <div className="max-w-6xl mx-auto  pl-16">
          <h2 className="text-black text-3xl font-bold text-center"> CRM App</h2>
          <p className="text-center my-10">Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.</p>
        <div style={{ maxWidth: "max-w-6xl", margin: "2rem auto" }}>
          <Slider prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />} {...carouselSettings}>
            <div>
              <img
                src="https://web-assets.bcg.com/dims4/default/3492546/2147483647/strip/true/crop/3520x1980+0+0/resize/4266x2400!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F6b%2F99%2Ffd1726fe4d96ad75831f159660a4%2Fadobestock-943962528-2.jpg"
                alt="Dashboard Screenshot"
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>
            <div>
              <img
                src="https://web-assets.bcg.com/dims4/default/3492546/2147483647/strip/true/crop/3520x1980+0+0/resize/4266x2400!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F6b%2F99%2Ffd1726fe4d96ad75831f159660a4%2Fadobestock-943962528-2.jpg"
                alt="Dashboard Screenshot"
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>
          </Slider>
        </div>
           </div>
      </section>

      <GridBlock3
        sectionTitle="CRM Value proposition"
        items={[
          {
            icon: <FaRocket />,
            title: "Blazing Fast",
            description:
              "Experience ultra-low latency and fast response times.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Secure by Design",
            description: "Enterprise-grade security is built-in from day one.",
          },
          {
            icon: <FaCogs />,
            title: "Customizable",
            description: "Tailor the platform to your exact business needs.",
          },
          {
            icon: <FaRocket />,
            title: "Blazing Fast",
            description:
              "Experience ultra-low latency and fast response times.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Secure by Design",
            description: "Enterprise-grade security is built-in from day one.",
          },
          {
            icon: <FaCogs />,
            title: "Customizable",
            description: "Tailor the platform to your exact business needs.",
          }
        ]}
        BgColor="bluetres"
        txtColor="white"
      />
      {/* 4. FAQs Carousel */}
      <section
        style={{
          padding: "6rem 1rem",
          backgroundColor: "#fff",
          maxWidth: "max-w-screen",
          margin: "0 auto",
        }}
      >
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-black text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <div  className="mt-20 text-left bg-gray-100 shadow rounded-lg py-20 px-20">
            <Slider prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />} {...carouselSettings}>
              {[
                {
                  question: "How do I get started?",
                  answer:
                    "Sign up for a free trial and explore all features with guided onboarding.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan anytime from your account settings.",
                },
                {
                  question: "Is my data secure?",
                  answer:
                    "Absolutely. We use industry-leading security protocols to keep your data safe.",
                },
              ].map(({ question, answer }) => (
                <div key={question}  className="px-10">
                  <h4 className="text-black text-3xl font-bold"> {question}</h4>
                  <p className="text-black text-1xl mt-8 mb-16">{answer}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* 3. App Screenshots Carousel */}
      <section
        style={{
          padding: "6rem 1rem",
          backgroundColor: "#014fa7",
          maxWidth: "max-w-screen",
          margin: "0 auto",
        }}
      >
         <div className="max-w-6xl mx-auto  pl-16">
       <h2 className="text-white text-3xl font-bold text-center">Markets</h2>
                 <p className="text-center my-10 text-white">Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team — all with some AI assistance, of course. Start winning more, together.</p>

        <div style={{ maxWidth: "max-w-6xl", margin: "2rem auto" }}>
          <Slider prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />} {...carouselSettings}>
            <div>
              <img
                src="https://web-assets.bcg.com/dims4/default/3492546/2147483647/strip/true/crop/3520x1980+0+0/resize/4266x2400!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F6b%2F99%2Ffd1726fe4d96ad75831f159660a4%2Fadobestock-943962528-2.jpg"
                alt="Dashboard Screenshot"
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>
            <div>
              <img
                src="https://web-assets.bcg.com/dims4/default/3492546/2147483647/strip/true/crop/3520x1980+0+0/resize/4266x2400!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F6b%2F99%2Ffd1726fe4d96ad75831f159660a4%2Fadobestock-943962528-2.jpg"
                alt="Dashboard Screenshot"
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>
          </Slider>
        </div>
        </div>
      </section>
      <MessageWithLink
        message="Want to see our full pricing breakdown?"
        linkText="View Pricing"
        linkHref="/pricing"
        BgColor="white"
        txtColor="black"
        containerColor="graytres"
        buttonColor="bluetobluer"
        btnTextColor="white"
      />
      <Footer />
    </main>
  );
}


const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'red', fontSize: '30px' }}
      onClick={onClick}
    >
      {/* You can use any icon here, for example: */}
      <svg width="24" height="24" fill="red" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" stroke="red" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'red', fontSize: '30px' }}
      onClick={onClick}
    >
      <svg width="24" height="24" fill="red" viewBox="0 0 24 24">
        <path d="M9 6l6 6-6 6" stroke="red" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};