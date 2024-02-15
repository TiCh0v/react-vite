import React from "react";
import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  HomeIcon,
  MailIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed bg-black flex-none w-14 sm:w-20 h-screen flex flex-col justify-between items-center"
      style={{ scrollBehavior: "smooth" }} // Инлайн-стиль для плавной прокрутки
    >
      <div className="h-20">
        <HomeIcon width={40} className="text-gray-300 mt-4" />
      </div>
      <div className="flex flex-col items-center">
        <ChartBarIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <DocumentSearchIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <MailIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <CreditCardIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <BellIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
      </div>
      <div className="bottom-4" onClick={scrollToTop}>
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
