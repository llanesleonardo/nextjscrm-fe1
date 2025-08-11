import { FaRocket, FaShieldAlt, FaCogs,FaList,FaProjectDiagram,FaRegLaughBeam } from "react-icons/fa";
import HeroCarouselComponent from "@/components/shared/HeroCarouselComponent";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import Footer from "@/components/shared/Footer";
import GridComponent from "@/components/shared/GridComponent";
import MessageButtonComponent from "@/components/shared/MessageButtonComponent";

export default function AboutPage() {

  const HeroCarouselComponentProps = {
    items: [
      {
        title: "About us",
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

  const FlexBlock50Props = {
    title: "Company Overview",
    text: "Since launching in 2020, 3L has been at the forefront of innovative and entrepreneurial solutions, partnering with customers to help them grow, improve efficiency, and make a positive impact in their communities.",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain",
    imageAlt: "Team working",
    imgPosition: "left" as const,
    BgColor: "white",
    txtColor: "black",
  };

  const FlexBlock50Props2 = {
    title: "Our Purpose",
    text: "Our CRM software is all about making your day easier. It will simplify your daily tasks, increasing efficiency, and driving real results for your business.",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain",
    imageAlt: "Team working",
    imgPosition: "right" as const,
    BgColor: "white",
    txtColor: "black",
  };

  const GridComponentProps = {
    title: "What Inspired Us to Build This CRM",
    description: "We are a team of developers who are passionate about building software that helps businesses grow and succeed.",
    textColor: "black",
    items: [
      {
        icon: <FaRegLaughBeam />,
        title: "Improved Customer Experience",
        description:
          "provides a complete view of customer interactions and preferences, enabling personalized and consistent service that enhances satisfaction.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaList />,
        title: "Streamlined Sales Processes",
        description: "CRM automates routine sales tasks, tracks interactions, and visualizes pipelines to help close deals faster and more efficiently.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaCogs />,
        title: "Enhanced Communication and Collaboration",
        description: "By sharing customer data across teams, CRM breaks down silos and ensures everyone is aligned for a seamless customer journey.",
        linkHref: "/features",
        linkText: "Learn More",
      },
                {
        icon: <FaRocket />,
        title: "Greater Efficiency and Productivity",
        description:
          "Automating manual tasks and centralizing data frees up time for teams to focus on building relationships and strategic growth.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaShieldAlt />,
        title: "Insightful Analytics for Better Decisions",
        description: "CRM systems analyze customer data to reveal trends, forecast outcomes, and guide smarter business strategies.",
        linkHref: "/features",
        linkText: "Learn More",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Integration with Other Tools",
        description: "CRM connects with existing business apps, reducing data entry, improving accuracy, and creating a unified workflow across platforms.",
        linkHref: "/features",
        linkText: "Learn More",
      }
    ],
    BgColor: "graytres",
    txtColor: "black",
  };

  const MessageButtonComponentProps = {
    message: "Want to see our full pricing breakdown?",
    linkText: "View Pricing",
    linkHref: "/pricing",
  };

  return (
    <div>
      <section>
        <HeroCarouselComponent  {...HeroCarouselComponentProps} />
      </section>
      <section  >
        <div className="bg-gray-100 py-16 px-4">
          <FlexBlock50 {...FlexBlock50Props} />
          <FlexBlock50 {...FlexBlock50Props2} />
        </div>
      </section>
      <section>
        <GridComponent {...GridComponentProps} />
      </section>
      <section>
        <MessageButtonComponent {...MessageButtonComponentProps} />
      </section>  
      <Footer/>
    </div>
  );
}
