import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";

import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";
import FlexBlock100 from "@/components/shared/FlexBlock100";

export default function FeaturesPage() {
  return (
    <div>
      <Header />
      <Hero
        title="Features"
        subtitle="CRM offers everything you need to manage your productivity and performance."
        ctaText="Sign Up for Free"
        ctaLink="/signup"
        imageUrl=""
        BgColor="#014fa7"
      />
      <FlexBlock100
        title="Leads Management"
        text="We are based in the USA and understand the local market. Our team is dedicated to providing top-notch service and support."
        imageUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain"
        imageAlt="Team working"
        imgPosition="right"
        BgColor="graytres"
        txtColor="black"
      />
          <GridBlock3
            sectionTitle=""
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
                description: "Enterprise-grade security is built-in from day one."
              },
              {
                icon: <FaCogs />,
                title: "Customizable",
                description: "Tailor the platform to your exact business needs.",
              }
            ]}
          />
      <FlexBlock50
        title="Contact Management"
        text="We are based in the USA and understand the local market. Our team is dedicated to providing top-notch service and support."
        imageUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain"
        imageAlt="Team working"
        imgPosition="right"
        BgColor="white"
        txtColor="black"
      />
          <GridBlock3
            sectionTitle=""
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
                description: "Enterprise-grade security is built-in from day one."
              },
              {
                icon: <FaCogs />,
                title: "Customizable",
                description: "Tailor the platform to your exact business needs.",
              }
            ]}
            BgColor="white"
            txtColor="black"
          />
      <FlexBlock100
        title="Account Management"
        text="We are based in the USA and understand the local market. Our team is dedicated to providing top-notch service and support."
        imageUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain"
        imageAlt="Team working"
        imgPosition="right"
        BgColor="bluetres"
        txtColor="white"
      />
          <GridBlock3
            sectionTitle=""
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
                description: "Enterprise-grade security is built-in from day one."
              },
              {
                icon: <FaCogs />,
                title: "Customizable",
                description: "Tailor the platform to your exact business needs.",
              }
            ]}
        BgColor="bluetres"
        txtColor="white"
        gridItemColor="white"
        gridItemTxtColor="black"
          />
      <FlexBlock100
        title="Quote Management"
        text="We are based in the USA and understand the local market. Our team is dedicated to providing top-notch service and support."
        imageUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain"
        imageAlt="Team working"
        imgPosition="right"
        BgColor="graytres"
        txtColor="black"
      />
          <GridBlock3
            sectionTitle=""
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
                description: "Enterprise-grade security is built-in from day one."
              },
              {
                icon: <FaCogs />,
                title: "Customizable",
                description: "Tailor the platform to your exact business needs.",
              }
            ]}
          />      
            <MessageWithLink
              message="Want to see our full pricing breakdown?"
              linkText="View Pricing"
              linkHref="/pricing"
              BgColor="graytres"
              txtColor="black"
              containerColor="white"
              buttonColor="bluetobluer"
              btnTextColor="white"
      
            />
          
                <Footer/>
    </div>
  );
}
