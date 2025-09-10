import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
// import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      {/* <div className="blog-background">
        <Blog />
      </div> */}
      <div className="bg-soft-white">
        <Profession />
      </div>
      <HappyClients />
      <Testimonial />
      <Contact />

      <a
        href="https://wa.me/5544998101446?text=Olá, gostaria de agendar uma consulta com o Dr. Leonardo, por favor."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        className="fixed bottom-10 right-5 w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white z-[1000]"
      >
        <FaWhatsapp className="text-xl sm:text-2xl lg:text-3xl" />
      </a>
    </div>
  );
};

export default Home;
