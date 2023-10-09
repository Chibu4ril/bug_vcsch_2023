import Image from "next/image";
import styles from "./BlogSection.module.css";
import { Calender, DoubleCaret, UserIcon } from "../../Icons";
import Link from "next/link";
import LinkButton from "../../buttons/LinkButton";

const BlogSect = () => {
  return (
    <div>
      <div className={`${styles.navContainer} mx-auto py-28`}>
        <div className="flex justify-between">
          <h4 className="text-4xl font-bold">Read our latest blog</h4>
          <LinkButton className="self-center flex link-primary" href="">
            View more
            <DoubleCaret className="text-primary self-center"></DoubleCaret>
          </LinkButton>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-4 grid-flow-dense gap-16">
            <div className="">
              <Image
                className="rounded-lg w-full"
                src={"/blog1.png"}
                height={300}
                width={300}
                alt=""
              ></Image>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <UserIcon
                    className={"text-primary text-xs self-center mr-1"}
                  ></UserIcon>
                  <p className="text-xs self-center">Innocent</p>
                </div>
                <div className="flex">
                  <Calender
                    className={"text-primary text-xs self-center mr-1"}
                  ></Calender>
                  <p className="text-xs self-center">23, Aug 2023</p>
                </div>
              </div>

              <div className="mt-5">
                <p className=" h-12 overflow-y-hidden ">
                  We believe that education should never be limited by financial
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  corporis rem consequatur, atque nesciunt consequuntur
                  architecto nobis fugit autem, pariatur nam nihil maxime,
                  adipisci exercitationem impedit deserunt libero natus enim?
                </p>
              </div>

              <div className="mt-5">
                <Link className="link-primary flex content-center" href="">
                  Read More
                  <DoubleCaret className="text-primary self-center"></DoubleCaret>
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                className="rounded-lg w-full"
                src={"/blog1.png"}
                height={300}
                width={300}
                alt=""
              ></Image>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <UserIcon
                    className={"text-primary text-xs self-center mr-1"}
                  ></UserIcon>
                  <p className="text-xs self-center">Innocent</p>
                </div>
                <div className="flex">
                  <Calender
                    className={"text-primary text-xs self-center mr-1"}
                  ></Calender>
                  <p className="text-xs self-center">23, Aug 2023</p>
                </div>
              </div>

              <div className="mt-5">
                <p className=" h-12 overflow-y-hidden ">
                  We believe that education should never be limited by financial
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  corporis rem consequatur, atque nesciunt consequuntur
                  architecto nobis fugit autem, pariatur nam nihil maxime,
                  adipisci exercitationem impedit deserunt libero natus enim?
                </p>
              </div>

              <div className="mt-5">
                <Link className="link-primary flex content-center" href="">
                  Read More
                  <DoubleCaret className="text-primary self-center"></DoubleCaret>
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                className="rounded-lg w-full"
                src={"/blog1.png"}
                height={300}
                width={300}
                alt=""
              ></Image>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <UserIcon
                    className={"text-primary text-xs self-center mr-1"}
                  ></UserIcon>
                  <p className="text-xs self-center">Innocent</p>
                </div>
                <div className="flex">
                  <Calender
                    className={"text-primary text-xs self-center mr-1"}
                  ></Calender>
                  <p className="text-xs self-center">23, Aug 2023</p>
                </div>
              </div>

              <div className="mt-5">
                <p className=" h-12 overflow-y-hidden ">
                  We believe that education should never be limited by financial
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  corporis rem consequatur, atque nesciunt consequuntur
                  architecto nobis fugit autem, pariatur nam nihil maxime,
                  adipisci exercitationem impedit deserunt libero natus enim?
                </p>
              </div>

              <div className="mt-5">
                <Link className="link-primary flex content-center" href="">
                  Read More
                  <DoubleCaret className="text-primary self-center"></DoubleCaret>
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                className="rounded-lg w-full"
                src={"/blog1.png"}
                height={300}
                width={300}
                alt=""
              ></Image>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <UserIcon
                    className={"text-primary text-xs self-center mr-1"}
                  ></UserIcon>
                  <p className="text-xs self-center">Innocent</p>
                </div>
                <div className="flex">
                  <Calender
                    className={"text-primary text-xs self-center mr-1"}
                  ></Calender>
                  <p className="text-xs self-center">23, Aug 2023</p>
                </div>
              </div>

              <div className="mt-5">
                <p className=" h-12 overflow-y-hidden ">
                  We believe that education should never be limited by financial
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  corporis rem consequatur, atque nesciunt consequuntur
                  architecto nobis fugit autem, pariatur nam nihil maxime,
                  adipisci exercitationem impedit deserunt libero natus enim?
                </p>
              </div>

              <div className="mt-5">
                <Link className="link-primary flex content-center" href="">
                  Read More
                  <DoubleCaret className="text-primary self-center"></DoubleCaret>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSect;
