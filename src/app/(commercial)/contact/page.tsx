
import Footer from "@/components/shared/Footer";
import ContactForm from '@/components/shared/ContactForm';
import SocialMediaIcons from "@/components/shared/SocialMediaHorizontal";
import HeroCarouselComponent from "@/components/shared/HeroCarouselComponent";
import MessageButtonComponent from "@/components/shared/MessageButtonComponent";
import TextBlock50 from "@/components/shared/TextBlock50";

export default function ContactPage() {

  const HeroCarouselComponentProps = {
    items: [
      {
        title: "Contact Us",
        src: "",
        alt: "Contact Us",
        width: 800,
        height: 400,
        imgWidth: "100%",
        imgHeight: 400,
        description: "We’re here to help you with any questions or concerns.",
        cardBackground: "rgba(202, 37, 37, 0.7)",
        cardBorder: "none",
        cardBorderRadius: 0,
        ctaText: "Get Started",
        ctaLink: "/contact",
      },
    ],
  };

  const MessageButtonComponentProps = {
    message: "Want to see our full pricing breakdown?",
    linkText: "View Pricing",
    linkHref: "/pricing",
  };

    return (
    <div>
            <section>
              <HeroCarouselComponent {...HeroCarouselComponentProps} />
            </section>
            <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 bg-gray-100">
                <TextBlock50 />                  
                <ContactForm />
            </div>
            </section>
            <section>
              <SocialMediaIcons />
            </section>
            <section>
              <MessageButtonComponent {...MessageButtonComponentProps}/>
            </section>
           <Footer/>
    </div>
  );
}
