import Image from "next/image";
import styles from "./WhatWeDO.module.css";

const Testimonial = () => {
  return (
    <div className={`${styles.testimonialBg}`}>
      <div className={`${styles.navContainer} mx-auto py-40`}>
        <div className="grid grid-cols-2 grid-flow-dense">
          <div className="my-20">
            <div className="">
              <p className="text-white text-2xl mb-7"> Testimonials</p>
              <h5 className="text-white text-6xl">About vcScholar</h5>
            </div>
          </div>

          <div className="">
            <ul className="tabs">
              <li
                className="mr-10 tab tab-bordered border-white pb-2 "
                tabIndex={0}
                style={{ height: "unset !important" }}
              >
                <a href="">
                  <Image
                    className="inline-block text-white rounded-full "
                    src={"/student1.png"}
                    width={30}
                    height={30}
                    alt=""
                  ></Image>
                </a>
              </li>
              <li
                className="mr-10 tab tab-bordered border-white pb-2"
                style={{ height: "unset !important" }}
              >
                <a href="">
                  <Image
                    className="inline-block text-white rounded-full "
                    src={"/student1.png"}
                    width={60}
                    height={60}
                    alt=""
                  ></Image>
                </a>
              </li>
              <li
                className="mr-10 tab tab-bordered border-white pb-2"
                style={{ height: "unset !important" }}
              >
                <a href="">
                  <Image
                    className="inline-block text-white rounded-full  "
                    src={"/student1.png"}
                    width={60}
                    height={60}
                    alt=""
                  ></Image>{" "}
                </a>
              </li>
              <li
                className="mr-10 tab tab-bordered border-white pb-2"
                style={{ height: "unset !important" }}
              >
                <a href="">
                  <Image
                    className="inline-block text-white rounded-full "
                    src={"/student1.png"}
                    width={60}
                    height={60}
                    alt=""
                  ></Image>
                </a>
              </li>
            </ul>

            <div className="">Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
