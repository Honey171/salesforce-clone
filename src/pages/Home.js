
import React, { useEffect, useState } from 'react';
import ContentSection from '../components/ContentSection';
import DiscoverSection from '../components/DiscoverSection';
import EventSection from '../components/EventSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InstallSection from '../components/InstallSection';
import LinksSection from '../components/LinksSection';
import MobileNavbar from '../components/MobileNavbar';
import Navbar from '../components/Navbar';
import NewSection from '../components/NewSection';
import ProductSection from '../components/ProductSection';
import SkillsSection from '../components/SkillsSection';
import UpdateSection from '../components/UpdateSection';
import { femalePhoto } from '../assets/imageLinks';
import { BsFillChatLeftFill } from 'react-icons/bs';

function Home() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  useEffect(() => {
    if (mobileNavbar) {
      document.querySelector('body').classList.add('unscrollable');
    } else {
      document.querySelector('body').classList.remove('unscrollable');
    }
  }, [mobileNavbar]);

  return (
    <div className="min-w-full min-h-full">
      <Navbar
        mobileNavbar={mobileNavbar}
        setMobileNavbar={setMobileNavbar}
      />
      <MobileNavbar mobileNavbar={mobileNavbar} />
      <HeroSection mobileNavbar={mobileNavbar} />
      <NewSection />
      <ProductSection mobileNavbar={mobileNavbar} />
      <ContentSection mobileNavbar={mobileNavbar} />
      <EventSection />
      <SkillsSection />
      <DiscoverSection />
      <InstallSection />
      <UpdateSection mobileNavbar={mobileNavbar} />
      <LinksSection />
      <Footer />
      <div className="fixed lg:bottom-0 lg:right-10 right-10 bottom-5 bg-[#0B5CAB] hover:bg-[#094A89] cursor-pointer flex items-center justify-center px-3 lg:px-2 rounded-full lg:rounded-br-none lg:rounded-bl-none lg:rounded-tr-sm lg:rounded-tl-sm h-[55px] lg:h-[30px] space-x-1">
        <img
          src={femalePhoto}
          alt=""
          className="w-12 h-12 rounded-full border-2 border-blue-500 -translate-y-3 hidden lg:block"
        />
        <BsFillChatLeftFill className="text-white text-3xl block lg:hidden" />
        <p className="text-lg tracking-wider  text-white hidden lg:block">
          LET'S CHAT
        </p>
      </div>
    </div>
  );
}

export default Home;
