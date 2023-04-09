import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold">{title}</h3>
        </div>
      </motion.div>
      {title}
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
        doloribus perferendis. Accusantium, maxime explicabo, aperiam obcaecati
        asperiores mollitia cupiditate molestias illo enim dolorum ullam
        similique animi necessitatibus commodi porro omnis, rerum dignissimos
        quaerat eos et odio culpa id officiis quas. Minima cumque cum eveniet,
        aspernatur accusantium totam tenetur sunt harum vero expedita asperiores
        vitae optio quasi velit autem voluptatem ullam impedit neque! Expedita,
        culpa provident, natus veniam pariatur mollitia, dolorem odit illo
        accusantium laborum perspiciatis incidunt beatae molestias voluptatem
        voluptatibus quia hic eligendi minima. Voluptate eligendi culpa, nemo
        blanditiis rerum, iure id tempora adipisci nihil quis, ipsa repellendus
        cumque at.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "About");
