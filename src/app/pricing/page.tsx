import { FaRocket, FaShieldAlt, FaCogs,FaQuestionCircle,FaBook,FaEnvelope } from "react-icons/fa";

import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";
import FlexBlock100 from "@/components/shared/FlexBlock100";
import PricingTable from "@/components/pricing/PricingTable";

export default function PricingPage() {
  return (
    <div>
      <Header />
      <Hero
        title="Flexible Pricing"
        subtitle="Choose the plan that fits your business needs. Our flexible pricing ensures you get the right tools to boost productivity and drive performance without paying for extras you don't need."
        imageUrl=""
        BgColor="#014fa7"
      />
      <PricingTable />

      <FlexBlock50
        title="Privacy Policy"
        text="Your privacy is important to us at 3L. Our CRM is designed with your data security and transparency in mind, and our Privacy Policy explains what information we collect, how we use it, and the rights you have as a user. We are committed to protecting your personal data and ensuring you always have control over your information. For full details, please download our Privacy Policy using the link below."
        imageUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain"
        imageAlt="Team working"
        imgPosition="right"
        BgColor="white"
        txtColor="black"
        linkTo="https://www.3lstrategy.com/privacy-policy"
        linkTxt="Download Privacy Policy"
      />
                <GridBlock3
                  sectionTitle=""
                  items={[
                    {
                      icon: <FaQuestionCircle />,
                      title: "FAQs",
                      description:
                      "Have questions about how our CRM works, what features are available? Our Frequently Asked Questions section covers everything from setup, core functionalities to best practices, so you can get the most out of your CRM experience.",
                      linkText: "Learn more",
                      linkHref: "/faqs",
                      },
                    {
                      icon: <FaBook />,
                      title: "Resources",
                      description: "Explore our collection of CRM resources, including guides, videos and tutorials, designed to help you maximize your productivity and stay ahead with the latest trends in customer relationship management.",
                      linkText: "Learn more",
                      linkHref: "/resources",
                    },
                    {
                      icon: <FaEnvelope />,
                      title: "Contact Us",
                      description: "Need assistance or want to learn more about our CRM? Our team is here to help, reach out to us anytime with your questions, feedback, or support needs, and we’ll get back to you as soon as possible.",
                      linkText: "Learn more",
                      linkHref: "/contact",
                    }
                  ]}
                  BgColor="white"
                  txtColor="black"
                />
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
    </div>
  );
}
