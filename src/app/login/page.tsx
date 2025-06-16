import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";

import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";
import FlexBlock100 from "@/components/shared/FlexBlock100";
import ContactForm from '@/components/shared/ContactForm';
import ContactFormBlock50 from "@/components/shared/ContactFormBlock50";
import LoginForm from "@/components/login/LoginForm";

export default function ResourcesPage() {
    return (
      <div>
              <Header />
              <Hero
                title="Start Your Journey"
                subtitle="Start creating your database and managing your contacts today."
                imageUrl=""
                BgColor="#014fa7"
              />
                   <LoginForm />

                            
                                  <Footer/>
      </div>
    );
  }
  