import Image from "next/image";
import styles from "./WhatWeDO.module.css";

const Testimonial = () => {
  return (
    <div className={`${styles.testimonialBg}`}>
      <div className={`${styles.navContainer} mx-auto py-40`}>
        <div className="grid grid-cols-2 grid-flow-dense">
          <div className="my-20 self-center">
            <div className="">
              <p className="text-white text-xl mb-3"> Testimonials</p>
              <h5 className="text-white text-4xl">About vcScholar</h5>
            </div>
          </div>

          <div className="">
            <div className="border border-t-0 border-x-0 flex">
              <div className="flex ">
                <div className="pb-3 border border-t-0 border-x-0 px-3 mr-4">
                  <a href="" className="">
                    <Image
                      src={"/student1.png"}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full"
                    ></Image>
                  </a>
                </div>
              </div>
              <div className="flex ">
                <div className="pb-3 px-5">
                  <a href="" className="">
                    <Image
                      src={"/student2.png"}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full"
                    ></Image>
                  </a>
                </div>
              </div>
              <div className="flex ">
                <div className="pb-3 px-5">
                  <a href="" className="">
                    <Image
                      src={"/student3.png"}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full"
                    ></Image>
                  </a>
                </div>
              </div>
              <div className="flex ">
                <div className="pb-3 px-5">
                  <a href="" className="">
                    <Image
                      src={"/student4.png"}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full"
                    ></Image>
                  </a>
                </div>
              </div>
              <div className="flex ">
                <div className="pb-3 px-5">
                  <a href="" className="">
                    <Image
                      src={"/student5.png"}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full"
                    ></Image>
                  </a>
                </div>
              </div>
            </div>

            <div className="my-10 ">
              <p className="text-white w-10/12">
                We believe that education should never be limited by financial
                barriers. Our mission is clear: to empower driven African
                students, like you, to access quality education abroad by
                providing the support you need to subsidize your necessary fees
                or secure full scholarships.
              </p>
            </div>

            <div className="mt-7 text-white">
              <p className="text-lg">Mellisa Okwara Jude</p>

              <div className="mt-2">
                <Image
                  src={"/fiveStar.svg"}
                  alt=""
                  height={100}
                  width={100}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
