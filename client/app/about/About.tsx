import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Vishwa Cloud Lab ?</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          VishwaCloudLab is a dynamic training company specializing in cutting-edge cloud technologies.
          <br />
          <br />
          With a focus on delivering comprehensive courses and hands-on experiences, we're dedicated to shaping proficient cloud professionals of tomorrow.
          <br />
          <br />
          Our mission is to equip individuals and businesses with the skills and expertise needed to thrive in the ever-evolving realm of cloud computing.
          <br />
          <br />
          At VishwaCloudLab, we believe in cultivating innovation, fostering growth, and paving the way for a successful digital future.
          <br />
        </p>
        <br />
        <span className="text-[22px]">----------------</span>
        <br />
        <br />
        <h5 className="text-[18px] font-Poppins">
          CEO Mr Vishwanath has 18 years of Industry experience, which he would want to share with others via an effitiant Training programs offered by VishwaCloudLab (Parent company Kloud gateway services )
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
