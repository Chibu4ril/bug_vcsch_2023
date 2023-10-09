import Image from "next/image";
import styles from "./Footer.module.css";
import { Copyright, Facebook, Instagram, LinkedIn, Twitter } from "../../Icons";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className={`${styles.footerBg}`}>
      <div className={`${styles.navContainer} mx-auto py-14`}>
        <div className="flex justify-between">
          <div>
            <Image
              src={"/mainLogo.svg"}
              alt=""
              width={100}
              height={100}
              className="w-1/6"
            ></Image>
            {/* <p className="mt-3 text-sm">
              <span className="text-purple-700">
                Transforming Dreams into Degrees.
              </span>
            </p> */}
          </div>
          <div>
            <ul className="inline-flex gap-7">
              <li className={`${styles.footerLink}`}>
                <a href="">Success Stories</a>
              </li>
              <li className={`${styles.footerLink}`}>
                <a href="">Blog</a>
              </li>
              <li className={`${styles.footerLink}`}>
                <a href="">Careers</a>
              </li>
              <li className={`${styles.footerLink}`}>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 mt-20 ">
          <hr className="border-gray-300" />
          <div className="flex justify-between py-5">
            <div className="flex ">
              <Copyright className="self-center mr-1"></Copyright>{" "}
              <p className="text-sm self-center">
                {currentYear} &nbsp; VCScholar Ltd. All Rights Reserved.
              </p>
            </div>
            <div className="">
              <ul className="inline-flex gap-7 text-sm">
                <li className={`${styles.footerLink}`}>
                  <a href="" className="">
                    Terms of Service
                  </a>
                </li>
                <li className={`${styles.footerLink}`}>
                  <a href="">Privacy Policy</a>
                </li>
                <li className={`${styles.footerLink}`}>
                  <a href="">Cookies Policy</a>
                </li>
              </ul>
            </div>
            <div className=" flex">
              <p className="mr-3 font-bold text-black">Follow Us: </p>
              <ul className="inline-flex gap-2">
                <li
                  className={`${styles.socialCard} p-1 text-white rounded-md `}
                >
                  <a href="" className={`${styles.socialItem}`}>
                    <Instagram className="text-lg"></Instagram>
                  </a>
                </li>
                <li
                  className={`${styles.socialCard} p-1 text-white rounded-sm `}
                >
                  <a href="" className={`${styles.socialItem}`}>
                    <Facebook className="text-lg"></Facebook>
                  </a>
                </li>
                <li
                  className={`${styles.socialCard} p-1 text-white rounded-sm `}
                >
                  <a href="" className={`${styles.socialItem}`}>
                    <Twitter className="text-lg"></Twitter>
                  </a>
                </li>
                <li
                  className={`${styles.socialCard} p-1 text-white rounded-sm `}
                >
                  <a href="" className={`${styles.socialItem}`}>
                    <LinkedIn className="text-lg"></LinkedIn>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-300" />
        </div>
        <p className="text-xs text-gray-500">
          The material presented via this website is for informational purposes
          only. Nothing in this website constitutes a solicitation for the
          purchase or sale of any financial product or service. Material
          presented on this website does not constitute a public offering of
          securities or investment management services in any jurisdiction.
          Investing in startup and early stage companies involves risks,
          including loss of capital, illiquidity, lack of dividends and
          dilution, and it should be done only as part of a diversified
          portfolio. The Investments presented in this website are suitable only
          for investors who are sufficiently sophisticated to understand these
          risks and make their own investment decisions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
