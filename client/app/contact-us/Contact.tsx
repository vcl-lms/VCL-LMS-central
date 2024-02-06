import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2  text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Contact US
        </h1><br />
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <p className={`${styles.subtitle}`}>Mail-Us: info@vishwacloudlab.com</p><br />
            <p className={`${styles.subtitle}`}>Call-Us: 799-699-5959 | 799-699-7995</p><br />
            <p className={`${styles.subtitle}`}>Address: 3rd Floor, Krishna towers (behind Vijaya bank), Opp to Patanjali Shop, Marathahalli service Road, Marathahalli - 560037</p><br />

            <iframe
              title="Google Maps Embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.21179607645!2d77.69821797454638!3d12.958295015171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1381610c6a11%3A0x695bccfc760ec34!2sVishwa%20Cloud%20Lab(Registered%20Name%20%3A%20Kloud%20gateway%20services)-%20Cloud%20Training%20in%20Marathahalli!5e0!3m2!1sen!2sin!4v1707228059243!5m2!1sen!2sin"
              width="350"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
