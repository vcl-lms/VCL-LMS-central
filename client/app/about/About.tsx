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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio quia accusantium quo expedita at id nemo, aspernatur praesentium illo consequatur deleniti, consectetur accusamus itaque quasi quae iusto! Voluptate, ut!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit soluta itaque distinctio magnam, natus impedit consectetur iure debitis voluptatum cupiditate a maiores iste eligendi voluptate molestiae porro. Minus, ea quis!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus iste laboriosam deserunt pariatur voluptate alias nihil, est repudiandae, adipisci perferendis eius aliquam. Non voluptatem esse, odio fugit illo vel ad?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam recusandae exercitationem porro aliquam quis quasi dolores! Soluta pariatur fugiat quod neque blanditiis, necessitatibus reiciendis sapiente eveniet magnam exercitationem ut excepturi!
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum saepe error optio nesciunt recusandae veniam placeat molestiae repellat? Culpa obcaecati, eos sint officiis omnis quae cum similique odio corporis harum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illum porro amet asperiores, aliquid earum voluptas ea nostrum pariatur ut impedit. Doloribus obcaecati sapiente tempora accusantium repudiandae provident. Cum, repudiandae.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laboriosam iure asperiores ducimus nesciunt impedit quos incidunt cumque possimus? Ipsam aliquam officia veritatis consectetur blanditiis voluptatum aut sed repellendus amet?
        </p>
        <br />
        <span className="text-[22px]">Vishwanath</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of Vishwa Cloud Lab
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
