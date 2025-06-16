import { FaRocket, FaShieldAlt, FaCogs,FaList,FaProjectDiagram,FaRegLaughBeam } from "react-icons/fa";

import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <Hero
        title="About us"
        subtitle="We help you organize contacts, track interactions, and never miss a follow-up again."
        ctaText="Get started"
        ctaLink="/login"
        imageUrl=""
        BgColor="#014fa7"
      />
      <FlexBlock50
        title="Company Overview"
        text="Since launching in 2020, 3L has been at the forefront of innovative and entrepreneurial solutions, partnering with customers to help them grow, improve efficiency, and make a positive impact in their communities."
        imageUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain"
        imageAlt="Team working"
        imgPosition="left"
        BgColor="#white"
        txtColor="black"
      />
      <FlexBlock50
        title="Our Purpose"
        text="Our CRM software is all about making your day easier. It will simplify your daily tasks, increasing efficiency, and driving real results for your business."
        imageUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-bg_1600x560?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=952&qlt=95&fit=constrain"
        imageAlt="Team working"
        imgPosition="right"
        BgColor="#white"
        txtColor="black"
        gridItemColor="white"
      />
      <GridBlock3
        sectionTitle="What Inspired Us to Build This CRM"
        items={[
          {
            icon: <FaRegLaughBeam />,
            title: "Improved Customer Experience",
            description:
              "provides a complete view of customer interactions and preferences, enabling personalized and consistent service that enhances satisfaction.",
          },
          {
            icon: <FaList />,
            title: "Streamlined Sales Processes",
            description: "CRM automates routine sales tasks, tracks interactions, and visualizes pipelines to help close deals faster and more efficiently.",
          },
          {
            icon: <FaCogs />,
            title: "Enhanced Communication and Collaboration",
            description: "By sharing customer data across teams, CRM breaks down silos and ensures everyone is aligned for a seamless customer journey.",
          },
                    {
            icon: <FaRocket />,
            title: "Greater Efficiency and Productivity",
            description:
              "Automating manual tasks and centralizing data frees up time for teams to focus on building relationships and strategic growth.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Insightful Analytics for Better Decisions",
            description: "CRM systems analyze customer data to reveal trends, forecast outcomes, and guide smarter business strategies.",
          },
          {
            icon: <FaProjectDiagram />,
            title: "Integration with Other Tools",
            description: "CRM connects with existing business apps, reducing data entry, improving accuracy, and creating a unified workflow across platforms.",
          }
        ]}
        BgColor="graytres"
        txtColor="black"
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
