import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";

import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import FlexBlock50 from "@/components/shared/FlexBlock50";
import GridBlock3 from "@/components/shared/GridBlock3";
import Footer from "@/components/shared/Footer";
import MessageWithLink from "@/components/shared/MessageWithLink";
import FlexBlock100 from "@/components/shared/FlexBlock100";
import LoginForm from "@/components/login/LoginForm";
import SignupForm from "@/components/signup/SignUpForm";

export default function ResourcesPage() {
    return (
      <div>
              <Header />
              <Hero
                title="Sign Up Now"
                subtitle="Start for free and explore our CRM."
                imageUrl=""
                BgColor="#014fa7"
              />
          <SignupForm />
                            
                                  <Footer/>
      </div>
    );
  }
  