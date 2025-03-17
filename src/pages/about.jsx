import { motion } from "motion/react";

import "../App.css";

import SectionJoiner from "./components/section-joiner";

function About() {
  return (
    <>
      <div className="relative w-full bg-ghost-white">
        <div className="m-auto py-16 flex content-center w-sm md:w-xl lg:w-250">
          <div className="flex flex-col lg:flex-row">
            <img
              src="https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/367450177_823890629340664_3685571923467889333_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=i7-KYqzCFTgQ7kNvgH76-lV&_nc_oc=AdiXaz-j6qjy_b_pYuCxeu5sFxcxOquWuWUuYwduwhrC0yBRGRnJzGeJFcOBl2f6qdc&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=2VhjdYCEv1ZQyOLkK-LaIg&oh=00_AYGvsRa1Q3eITQkk3xYZ1IrQGnSdBTOhd1GCtnzDxNQaZA&oe=67DDD627"
              alt=""
              className="w-full md:-ml-32 lg:ml-0 lg:w-3/4 self-center rounded-md"
            />
            <motion.div
              className="bg-moss-green text-ghost-white p-8 m-4 rounded-md -mt-16 md:m-8 md:-mt-32 md:-mr-16 lg:mt-8 lg:-ml-96 lg:mr-0"
              initial={{ x: 160, y: 160 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-russo text-3xl">INTRODUCING TAUTAS</h2>
              <p className="pt-4">
                Cras eu nibh sed nulla feugiat semper at non odio. Aliquam vitae
                dui accumsan, commodo ligula facilisis, rhoncus ex. Vivamus
                condimentum pretium sem sed ornare. Proin lacus enim, elementum
                sit amet viverra vel, imperdiet sed nulla. Ut iaculis gravida
                nibh, ac malesuada libero consectetur in. Aenean laoreet blandit
                nisl, a interdum arcu commodo quis. Curabitur id pharetra purus,
                eget molestie dolor. Morbi a nulla sit amet ex scelerisque
                gravida eu sit amet enim. Vivamus lectus mauris, tincidunt
                varius luctus non, commodo sed tortor. Etiam erat dui, hendrerit
                sit amet sodales eget, mattis sit amet sem. Mauris a lectus
                arcu. Fusce et sem magna. Cras porta tristique dictum. Duis
                porttitor nunc nec lectus mollis porttitor. Morbi dictum posuere
                magna sed pretium. Maecenas risus nisi, malesuada eget felis et,
                congue euismod erat.
              </p>
              <br />
              <p>
                Nunc suscipit libero vel pellentesque dictum. Phasellus eget
                sagittis sapien. Nullam in dolor lobortis, dignissim mi sed,
                accumsan nisi. Integer posuere condimentum leo sed condimentum.
                Proin ut volutpat ex. Aenean vestibulum nibh in sodales dictum.
                Nullam id tristique ante. Aenean eget feugiat ipsum, at mattis
                enim. Ut venenatis arcu a ipsum semper tempus.
              </p>
            </motion.div>
          </div>
        </div>
        <SectionJoiner color={"moss-green"} />
      </div>
    </>
  );
}

export default About;
