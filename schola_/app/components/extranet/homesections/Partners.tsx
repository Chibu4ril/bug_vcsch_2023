import Image from "next/image";
import styles from "./WhatWeDO.module.css";

const Partners = () => {
  return (
    <div className={`${styles.partnerBg}`}>
      <div className={`${styles.navContainer} mx-auto py-10`}>
        <div className="flex justify-center">
          <p className="font-bold text-lg text-center  w-4/12">
            Enabled through the collaboration and support of prominent brands
            and dedicated teams.
          </p>
        </div>

        <div className="grid grid-cols-4 grid-flow-dense mt-14">
          <Image
            src={"/stripe.svg"}
            alt="Stripe payments logo"
            width={1}
            height={1}
            className="w-9/12"
          ></Image>
          <Image
            src={"/supabase.svg"}
            alt="supabase"
            width={1}
            height={1}
            className="w-9/12"
          ></Image>
          <Image
            src={"/paystack.svg"}
            alt="paystack"
            width={1}
            height={1}
            className="w-9/12"
          ></Image>
          <Image
            src={"/flutterwave.svg"}
            alt="flutterwave"
            width={1}
            height={1}
            className="w-9/12"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Partners;
