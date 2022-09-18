import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import Img from "../../assets/images/Me.png";

import "./styles.css";

import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import { motion } from "framer-motion";

const AboutMe = () => {
  const { t } = useContext(ThemeContext);
  return (
    <motion.div
      className="app__section sm:h-screen lg:h-screen items-center justify-center sm:pt-48 lg:pt-4 bg-light dark:bg-dark"
      id="about__me__section"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.h1
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="sm:text-6xl lg:text-4xl opacity-80 font-righteous"
      >
        {t("about_me_section.title")}
      </motion.h1>
      <div className="flex sm:flex-col lg:flex-row justify-between items-center w-5/6 lg:h-4/6">
        <div className="text-dark dark:text-light px-10 sm:py-20 lg:py-0">
          <p className="first-letter:font-splash sm:first-letter:text-5xl lg:first-letter:text-4xl sm:text-2xl lg:text-base font-normal first-letter:text-teal">
            Salut, je m'appelle &nbsp;&nbsp;
            <span className="font-righteous sm:text-2xl lg:text-lg text-teal tracking-wide">
              Abdoul-Wahabou Harouna TAMBOU
            </span>
            .
          </p>
          <p className="font-normal sm:text-2xl lg:text-base">
            {t("about_me_section.a_young_student")}{" "}
            <span className="text-teal font-kanit sm:text-2xl lg:text-lg font-medium">
              {t("about_me_section.niger")}
            </span>{" "}
            {t("about_me_section.residing_in_tunisia_and_it_passionated")}
            <br />
            {t("about_me_section.currently_studies")}
            <br />
            {t("about_me_section.also_the_founder_and_ceo_of")}{" "}
            <span className="sm:text-2xl lg:text-lg font-righteous tracking-wide text-teal hover:underline cursor-pointer">
              TIAMTECH CO
            </span>
            , {t("about_me_section.tiamtech_description")}
            <br />
            {t("about_me_section.anest_post")}
          </p>
          <div className="flex justify-center">
            <Button
              variant="outlined"
              color="secondary"
              className="sm:w-3/4 sm:h-16 lg:h-auto sm:text-xl lg:text-base lg:w-2/4 font-righteous mt-5"
              startIcon={<DownloadIcon />}
            >
              <a
                href="https://drive.google.com/drive/folders/1HnYUK9uh1hsmu6DmLgeUaBqzps9Vxok0?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {t("about_me_section.download_my_resume_button_text")}
              </a>
            </Button>
          </div>
        </div>
        <img
          alt="me"
          id="profile__image"
          src={Img}
          className="bg-dark dark:bg-light lg:h-96 lg:w-auto flex justify-center items-center"
        />
      </div>
    </motion.div>
  );
};

export default AboutMe;
