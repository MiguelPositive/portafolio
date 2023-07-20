import React from "react";
import Tools from "../tools/Tools";

const Contact = () => {
  return (
    <div className="w-full bg-card text-white  flex justify-center items-center flex-wrap">
      <p className="w-full text-center font-finger-paint">CONTACTO</p>

      <div className="mt-5 grid grid-cols-1 350px:grid-cols-2 500px:grid-cols-3">
        <div>
          <Tools
            name="GitHub"
            icon="bg-logo-github"
            link="https://github.com/MiguelPositive"
          />
        </div>
        <div>
          <Tools
            name="Linkedin"
            icon="bg-logo-linkedin"
            link="https://www.linkedin.com/in/miguel-angel-clavijo-moreno-6ab3aa148/"
          />
        </div>

        <div>
          <Tools name="WhatsApp" icon="bg-logo-ws" link="https://wa.me/+0573223380551" />
        </div>
      </div>
    </div>
  );
};

export default Contact;