
import React from "react";
import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";
import Footer from "@/components/shared/Footer";
import CarouselComponent from "@/components/shared/CarouselComponent";
import HeroCarouselComponent from "@/components/shared/HeroCarouselComponent";
import TextBlock from "@/components/shared/TextBlock";
import GridComponent from "@/components/shared/GridComponent";
import CollapseComponent from "@/components/shared/CollapseComponent";
import MessageButtonComponent from "@/components/shared/MessageButtonComponent";



export default function Home() {

  const CarouselComponentProps = {
      title: "CRM App",
      description: "Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.",
      items: [
        {
          title: "CRM App",
          src:"https://web-assets.bcg.com/dims4/default/3492546/2147483647/strip/true/crop/3520x1980+0+0/resize/4266x2400!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F6b%2F99%2Ffd1726fe4d96ad75831f159660a4%2Fadobestock-943962528-2.jpg",
          alt:"CRM Dashboard",
          width:800,
          height:400,
          imgWidth:"100%",
          imgHeight:400,
          description: "Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.",
          cardBackground: "rgba(202, 37, 37, 0.7)",
          cardBorder: "none",
          cardBorderRadius: 0
        },
      ],
    };


  const CarouselComponentProps2 = {
      title: "CRM App",
      description: "Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.",
      items: [
        {
          title: "CRM App 2",
          src:"https://web-assets.bcg.com/dims4/default/3492546/2147483647/strip/true/crop/3520x1980+0+0/resize/4266x2400!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F6b%2F99%2Ffd1726fe4d96ad75831f159660a4%2Fadobestock-943962528-2.jpg",
          alt:"CRM Dashboard",
          width:800,
          height:400,
          imgWidth:"100%",
          imgHeight:400,
          description: "Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.",
          cardBackground: "rgba(202, 37, 37, 0.7)",
          cardBorder: "none",
          cardBorderRadius: 0
        },
      ],
    };
    
  const HeroCarouselComponentProps = {
      items: [
        {
          title: "CRM App",
          src:"",
          alt: "CRM Dashboard",
          width: 800,
          height: 400,
          imgWidth:"100%",
          imgHeight:400,
          description: "Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.",
          cardBackground: "rgba(202, 37, 37, 0.7)",
          cardBorder: "none",
          cardBorderRadius: 0,
          ctaText: "Get Started",
          ctaLink: "/pricing",
        },
      ],
    };

  const GridComponentProps = {
    title: "CRM App",
    description: "Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.",
    textColor: "black",
    items: [
      {
        icon: <FaRocket />,
        title: "Blazing Fast",
        description: "Experience ultra-low latency and fast response times.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure by Design",
        description: "Enterprise-grade security is built-in from day one.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaCogs />,
        title: "Customizable",
        description: "Tailor the platform to your exact business needs.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaRocket />,
        title: "Blazing Fast",
        description:
          "Experience ultra-low latency and fast response times.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure by Design",
        description: "Enterprise-grade security is built-in from day one.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaCogs />,
        title: "Customizable",
        description: "Tailor the platform to your exact business needs.",
        linkHref: "/features",
        linkText: "Learn More",
      },
    ],
  };

  const CollapseComponentProps = {
    items: [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>This is panel content 1</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>This is panel content 2</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>This is panel content 3</p>,
    },
  ],
  };
  const TextBlockProps = {
      title: "CRM App",
      description: "Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team, all with some AI assistance, of course. Start winning more, together.",
  };

  const MessageButtonComponentProps = {
    message: "Want to see our full pricing breakdown?",
    linkText: "View Pricing",
    linkHref: "/pricing",
  };

  return (
    <main className="font-sans text-black">
     <section>
          <HeroCarouselComponent {...HeroCarouselComponentProps} />
     </section>
      <section>
          <TextBlock {...TextBlockProps} />
          <CarouselComponent {...CarouselComponentProps}/>
      </section>
      <section>
          <GridComponent {...GridComponentProps} />
      </section>
      <section>
           <CollapseComponent {...CollapseComponentProps} />
      </section>
      <section>
            <CarouselComponent {...CarouselComponentProps2}/>
      </section>
      <section>
            <MessageButtonComponent {...MessageButtonComponentProps} />
      </section>
      <Footer />
    </main>
  );
}
