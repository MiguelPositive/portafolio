import React from "react";

const Apps = ({ title, text, img, link }) => {
  return (
    <div className="border-white/30 border-[1px] rounded-md w-[20rem] text-white  overflow-hidden transition-all duration-50 hover:scale-105">
      <a target="_blank" href={link}>
        <div
          id="card-apps"
          className="flex justify-center items-center rounded-md mt-7"
        >
          <div
            id="img-card-apps"
            className={`${img} bg-cover bg-center rounded-md w-[18rem] h-[14rem] shadow-md shadow-black/80`}
            title={title}
          ></div>
        </div>
        <div className="p-5">
          <p className="text-lg font-finger-paint mb-5 text-start">{title}</p>

          <p className="text-lg text-justify font-raleway">{text}</p>
        </div>
      </a>
    </div>
  );
};

export default Apps;
