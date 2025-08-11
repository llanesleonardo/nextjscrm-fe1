import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import Footer from "@/components/shared/Footer";
import HeroCarouselComponent from "@/components/shared/HeroCarouselComponent";
import GridComponent from "@/components/shared/GridComponent";

export default function FeaturesPage() {

  const HeroCarouselComponentProps = {
    items: [
      {
        title: "Features",
        src: "",
        alt: "CRM Dashboard",
        width: 800,
        height: 400,
        imgWidth: "100%",
        imgHeight: 400,
        description: "CRM offers everything you need to manage your productivity and performance.",
        cardBackground: "rgba(202, 37, 37, 0.7)",
        cardBorder: "none",
        cardBorderRadius: 0,
        ctaText: "Get Started",
        ctaLink: "/pricing",
      },
    ],
  };

  const FlexBlock50Props = {
    title: "Contact Management",
    text: "We are based in the USA and understand the local market. Our team is dedicated to providing top-notch service and support.",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain",
    imageAlt: "Team working",
    imgPosition: "right" as const,
    BgColor: "white",
    txtColor: "black",
  };

  const GridComponentProps = {
    title: "",
    description: "We are based in the USA and understand the local market. Our team is dedicated to providing top-notch service and support.",
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
        description: "Experience ultra-low latency and fast response times.",
        linkHref: "/features",
        linkText: "Learn More",
      },
    ],
    BgColor: "graytres",
    txtColor: "black",
  };


  return (
    <div>
      <section>
        <HeroCarouselComponent {...HeroCarouselComponentProps} />
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <section> 
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      

          
    <Footer/>
    </div>
  );
}
