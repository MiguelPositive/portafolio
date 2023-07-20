import React from "react";
import Tools from "../tools/Tools";

const Contact = () => {
  return (
    <div className="w-full bg-card text-white  flex justify-center items-center flex-wrap">
      <p className="w-full text-center font-finger-paint">CONTACTO</p>

      <div className="mt-5 flex justify-center items-center flex-wrap">
        <div>
          <Tools name="GitHub" icon="bg-logo-github" />
        </div>
        <div>
          <Tools name="Linkedin" icon="bg-logo-linkedin" />
        </div>

        <div>
          <Tools name="WhatsApp" icon="bg-logo-ws" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
