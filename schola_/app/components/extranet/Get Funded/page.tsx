import Image from "next/image";
import { PrimaryButton } from "../../buttons/PrimaryButton";

const GetFunded = () => {
  return (
    <div>
      <div className="container mx-auto my-20">
        <div className="relative">
          <Image
            src={"/assetTop.svg"}
            alt="asset"
            width={100}
            height={100}
            className="absolute"
          ></Image>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Get Funded Easily?</h1>
          <p className="w-1/2 text-lg mx-auto mt-4">
            At vcScholar we prioritise transparency in our procedures. You will
            have clear visibility into the sources and destinations of every
            dollar, ensuring your peace of mind.
          </p>
        </div>

        <div className="text-center mx-auto mt-20">
          <div className="grid grid-cols-5 grid-flow-dense">
            <div>
              <div className="w-100  bg-transparent">
                <figure className="flex justify-center">
                  <Image
                    src={"/formImg.svg"}
                    alt=""
                    width={150}
                    height={150}
                  ></Image>
                </figure>
                <div className="text-center mt-5 w-2/3 mx-auto">
                  <p>
                    Fill out the <br /> application form
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="w-100  bg-transparent">
                  <figure className="flex justify-center">
                    <Image
                      src={"/uploadImg.svg"}
                      alt=""
                      width={150}
                      height={150}
                    ></Image>
                  </figure>
                  <div className="text-center mt-5 w-2/3 mx-auto">
                    <p>Upload the required documents </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="w-100  bg-transparent">
                  <figure className="flex justify-center">
                    <Image
                      src={"/submitImg.svg"}
                      alt=""
                      width={150}
                      height={150}
                    ></Image>
                  </figure>
                  <div className="text-center mt-5 w-2/3 mx-auto">
                    <p>Submit your application and wait for feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="w-100  bg-transparent">
                  <figure className="flex justify-center">
                    <Image
                      src={"/fundedImg.svg"}
                      alt=""
                      width={150}
                      height={150}
                    ></Image>
                  </figure>
                  <div className="text-center mt-5 w-2/3 mx-auto">
                    <p>Get your tuition account funded. </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="w-100  bg-transparent">
                  <figure className="flex justify-center">
                    <Image
                      src={"/aidMyStudy.svg"}
                      alt=""
                      width={150}
                      height={150}
                    ></Image>
                  </figure>
                  <div className="text-center mt-5 w-2/3 mx-auto">
                    <p>
                      Get listed in <br />
                      <span className="font-extrabold text-gray-950">
                        AidMyStudy®️
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-20 flex justify-center gap-5">
            <div className="">
              <PrimaryButton
                className=""
                label="
                Apply Now
                "
              ></PrimaryButton>
            </div>
            <div>
              <PrimaryButton label="Apply Now" className=""></PrimaryButton>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={"./assetTop.svg"}
            alt="asset"
            width={100}
            height={100}
            className="absolute bottom-0 right-0"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default GetFunded;
