import { FaRocket, FaShieldAlt, FaCogs,FaVideo,FaBook,FaClipboardList,FaLightbulb,FaYoutube } from "react-icons/fa";

import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";
import FlexBlock100 from "@/components/shared/FlexBlock100";

export default function ResourcesPage() {
    return (
      <div>
              <Header />
              <Hero
                title="Resources"
                subtitle="Explore our curated collection of guides, tools, and insights designed to help you get the most out of your CRM and grow your business."
                imageUrl=""
                BgColor="#014fa7"
              />
                            <GridBlock3
                    sectionTitle=""
                    items={[
                      {
                        icon: <FaBook />,
                        title: "Guides",
                        description:
                          "Our step-by-step guides walk you through essential CRM tasks and strategies, making it easy to get started and master new features.",
                        linkText: "Learn more",
                        linkHref: "/resources-guides",
                      },
                      {
                        icon: <FaVideo />,
                        title: "Videos",
                        description: "Watch our video tutorials for clear, visual demonstrations of CRM setup, usage, and best practices, perfect for learning at your own pace.",
                        linkText: "Learn more",
                        linkHref: "/resources-videos",
                      },
                      {
                        icon: <FaCogs />,
                        title: "Blog",
                        description: "Stay informed with our blog posts, where we share the latest CRM tips, industry trends, and actionable insights to help you grow your business.",
                        linkText: "Learn more",
                        linkHref: "/blog",
                      }
                    ]}
                    BgColor="white"
                    txtColor="black"
                  />
                  <GridBlock3
                    sectionTitle=""
                    items={[
                      {
                        icon: <FaLightbulb />,
                        title: "Ebooks",
                        description:
                          "Dive deeper into CRM concepts and strategies with our comprehensive ebooks, designed to provide in-depth knowledge and practical advice for all experience levels.",
                        linkText: "Learn more",
                        linkHref: "/resources-ebooks",
                      },
                      {
                        icon: <FaYoutube />,
                        title: "Webinars",
                        description: "Join our live and on-demand webinars to learn from CRM experts, see real-world use cases, and get your questions answered in interactive sessions.",
                        linkText: "Learn more",
                        linkHref: "/resources-webinars",
                      },
                      {
                        icon: <FaClipboardList />,
                        title: "Case Studies",
                        description: "Explore our case studies to see how businesses like yours have successfully implemented CRM solutions to improve customer relationships and drive results.",
                        linkText: "Learn more",
                        linkHref: "/resources-case-studies",
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
                            
                                  <Footer/>
      </div>
    );
  }
  