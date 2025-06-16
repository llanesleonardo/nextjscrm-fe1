import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";

import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";
import FlexBlock100 from "@/components/shared/FlexBlock100";
import PricingTable from "@/components/pricing/PricingTable";
import ContactForm from '@/components/shared/ContactForm';
import SocialMediaIcons from "@/components/shared/SocialMediaHorizontal";
import ContactFormBlock50 from "@/components/shared/ContactFormBlock50";
export default function ContactPage() {
  return (
    <div>
            <Header />
            <Hero
              title="Contact Us"
              subtitle="We’re here to help you with any questions or concerns."
              imageUrl=""
              BgColor="#014fa7"
            />
          <ContactFormBlock50
      title="Let’s talk about your project"
      description="Fill out the form and our team will get back to you within 1–2 business days."
      imageUrl="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-technical-support.png"
    >
      <ContactForm />
    </ContactFormBlock50>
      <SocialMediaIcons />
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
                      <Footer/>
    </div>
  );
}
