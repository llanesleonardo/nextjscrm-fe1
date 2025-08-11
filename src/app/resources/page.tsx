import { FaVideo,FaBook,FaLightbulb } from "react-icons/fa";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroCarouselComponent from "@/components/shared/HeroCarouselComponent";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridComponent from "@/components/shared/GridComponent";
import MessageButtonComponent from "@/components/shared/MessageButtonComponent";

export default function ResourcesPage() {

    const HeroCarouselComponentProps = {
        
      items: [
            {
                title: "Resources",
                src: "",
                alt: "Resources",
                width: 800,
                height: 400,
                imgWidth: "100%",
                imgHeight: 400,
                description: "Explore our curated collection of guides, tools, and insights designed to help you get the most out of your CRM and grow your business.",
                cardBackground: "rgba(202, 37, 37, 0.7)",
                cardBorder: "none",
                cardBorderRadius: 0,
                ctaText: "Get Started",
                ctaLink: "/resources",
            },
        ],   
    };

    const FlexBlock50Props = {
      title: "Resources & Guides",
      text: "Discover comprehensive resources to help you maximize your CRM potential and drive business growth.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Resources",
      imgPosition: "left" as const,
      BgColor: "white",
      txtColor: "black",
    };

    const GridComponentProps = {
      title: "Resource Categories",
      description: "Explore our comprehensive collection of resources to help you succeed with your CRM.",
      textColor: "black",
      items: [
        {
          icon: <FaBook />,
          title: "Documentation",
          description: "Comprehensive guides and technical documentation.",
          linkHref: "/docs",
          linkText: "Read Docs",
        },
        {
          icon: <FaVideo />,
          title: "Video Tutorials",
          description: "Step-by-step video guides and tutorials.",
          linkHref: "/videos",
          linkText: "Watch Videos",
        },
        {
          icon: <FaLightbulb />,
          title: "Best Practices",
          description: "Industry best practices and tips.",
          linkHref: "/best-practices",
          linkText: "Learn More",
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
              <Header />
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
                <MessageButtonComponent {...MessageButtonComponentProps}/>
              </section>                    
        <Footer/>
      </div>
    );
  }
  