import React from "react";
import style from "./style.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerLeftSection}>
        <ul >
          <li>
            <FmdGoodIcon fontSize="large"></FmdGoodIcon>
            1 Hacker Way, Menlo Park, California, United States
          </li>
          <li>
            <PhoneIcon fontSize="large"></PhoneIcon>
            
            +7999999999
          </li>
          <li>
            <EmailIcon fontSize="large"></EmailIcon>
            fakeemail@gmail.com
          </li>
        </ul>
      </div>
      <div className={style.footerRightSection}>
        <div className={style.footerRightTopSubsection}>
          <h4>About company:</h4>
          <p>
            Sint ullamco et non in labore. Id reprehenderit reprehenderit sint
            laboris non non qui consectetur magna sunt cillum mollit cupidatat.
            Cillum irure do laborum excepteur eu incididunt voluptate sit cillum
            pariatur cillum.
          </p>
        </div>
        <div className={style.footerRightBottomSubsection}>
          <FacebookIcon fontSize="large"></FacebookIcon>
          <InstagramIcon fontSize="large"></InstagramIcon>
          <TwitterIcon fontSize="large"></TwitterIcon>
        </div>
      </div>
    </footer>
  );
};
