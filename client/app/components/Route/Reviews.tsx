import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";
import Ratings from "@/app/utils/Ratings";

type Props = {};

export const reviews = [
  {
    name: "Aklank Jain",
    star:<Ratings rating={4.5}/>,
    avatar: "https://i.postimg.cc/0yQ4z43d/user-1.jpg",
    // avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "AWS DEVOPS | DevOps Engineer",
    comment:
      "Vishwanath sir depth of knowledge and expertise in AWS , Devops and Azure is impressive. He has ability to explain complex aws concepts in a clear and understandable manner is commendable. He has added more hands-on lab exercises rather than theoretical learning. He also helps all his students for interview preparations, real time scenario project work , job support. He will also guide and help students on how to switch career in aws-Devops job roles as well. He is one of the best trainer , mentor , life-coach, friend in Bangalore I have ever met in my life.",

  },
  {
    name: "Biplab Raut",
    star:<Ratings rating={4}/>,
    avatar: "https://i.postimg.cc/FsTQ73Pc/user-2.jpg",
    profession: "AWS Solution Architect | Cloud Engineering",
    comment:
      "The way he explains the things related to the subject is very interesting. He makes you involved in that part of the example so that you can be able to analyse the course better. Good concept of taking an example which makes you understand the topic in a better way. Very helpful.",
  },
  {
    name: "Sumer",
    star:<Ratings rating={5}/>,
    avatar: "https://i.postimg.cc/yN95XZTL/user-3.jpg",
    profession: "AWS Solution Architect | DevOps Engineering",
    comment:
      "I really want thank Vishwanath for the training he provided, I can confidently rave that it's been the most innovative, practical and effective course I have attended. All thanks to Vishwanath for sharing and improving the perception towards technology."
  },
  {
    name: "Shweta Patel",
    star:<Ratings rating={4.5}/>,
    avatar: "https://i.postimg.cc/xCpKXsbh/user-6.jpg",
    profession: "Amazon Web Services | DevOps Engineer",
    comment:
      "I had a great time learning the new concepts about aws from scratch. Practical's were very helpful, study guide also covers all the topics which is helpful from the exam perspective. I would recommend anyone to join Vishwanath Sir if you are new to this technology as his way of explaining with examples is extremely good.",
  },
  {
    name: "Andrew Onyango",
    star:<Ratings rating={4}/>,
    avatar: "https://i.postimg.cc/5N6sSz48/user-4.jpg",
    profession: "Microsoft Azure | Azure Cloud Engineer",
    comment:
      "Good training session that I had with Vish. He has a good understanding of MS Azure, and the lecture that I had with him was so fruitful in bid for my journey to certify in Azure.",
  },
  {
    name: "Masoom Mujawar",
    star:<Ratings rating={5}/>,
    avatar: "https://i.postimg.cc/sXjcQQHQ/user-5.jpg",
    profession: "AWS Plus Devops Training | DevOps Engineer",
    comment:
      "It's an excellent experience with Vishwa to learn AWS, he has vast experience in AWS, DevOps, networking and Azure and the way of teaching is very good. Clear and detail understanding of each topic and concepts, and he is putting extra efforts and take more classes for understanding and practice all concepts to each student. Overall, it's knowledge gaining class in friendly environment. Vishwa is the best trainer/teacher in this field with real-time experience. ",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${ styles.title } 800px: !text - [40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            {/* add any lines if u want */}
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(4)]:!mt-[-40px] md:[&>*:nth-child(6)]:!mt-[0px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
