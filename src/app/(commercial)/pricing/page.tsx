import { FaQuestionCircle,FaBook,FaEnvelope } from "react-icons/fa";

import FlexBlock50 from "@/components/shared/FlexBlock50";
import Footer from "@/components/shared/Footer";
import PricingTable from "@/components/pricing/PricingTable";
import HeroCarouselComponent from "@/components/shared/HeroCarouselComponent";
import GridComponent from "@/components/shared/GridComponent";

export default function PricingPage() {

  const HeroCarouselComponentProps = {
    items: [
      {
        title: "Flexible Pricing",
        src: "",
        alt: "Flexible Pricing",
        width: 800,
        height: 400,
        imgWidth: "100%",
        imgHeight: 400,
        description: "Choose the plan that fits your business needs. Our flexible pricing ensures you get the right tools to boost productivity and drive performance without paying for extras you don't need.",
        cardBackground: "rgba(202, 37, 37, 0.7)",
        cardBorder: "none",
        cardBorderRadius: 0,
        ctaText: "Get Started",
        ctaLink: "/pricing",
      },
    ],
  };

  const FlexBlock50Props = {
    title: "Privacy Policy",
    text: "Your privacy is important to us at 3L. Our CRM is designed with your data security and transparency in mind, and our Privacy Policy explains what information we collect, how we use it, and the rights you have as a user. We are committed to protecting your personal data and ensuring you always have control over your information. For full details, please download our Privacy Policy using the link below.",
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
        icon: <FaQuestionCircle />,
        title: "FAQs",
        description: "Have questions about how our CRM works, what features are available? Our Frequently Asked Questions section covers everything from setup, core functionalities to best practices, so you can get the most out of your CRM experience.",
        linkHref: "/faqs",
        linkText: "Learn more",
      },
      {
        icon: <FaBook />,
        title: "Resources",
        description: "Explore our collection of CRM resources, including guides, videos and tutorials, designed to help you maximize your productivity and stay ahead with the latest trends in customer relationship management.",
        linkHref: "/resources",
        linkText: "Learn more",
      },
      {
        icon: <FaEnvelope />,
        title: "Contact Us",
        description: "Need assistance or want to learn more about our CRM? Our team is here to help, reach out to us anytime with your questions, feedback, or support needs, and we’ll get back to you as soon as possible.",
        linkHref: "/contact",
        linkText: "Learn more",
      },
    ],
  };


    return (
    <div>
      <section>
        <HeroCarouselComponent {...HeroCarouselComponentProps} />
      </section>
      <section>
        <div className="bg-gray-100 py-16 px-4">  
          <PricingTable />
        </div>
      </section>
      <section>
        <div className="bg-gray-100 py-16 px-4">  
          <FlexBlock50 {...FlexBlock50Props}/>
          <GridComponent {...GridComponentProps} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
