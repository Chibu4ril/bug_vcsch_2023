"use client";
import { Icon } from "@iconify/react";
import { GradCapIcon } from "../../Icons";

const WhatWeDo = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">What we do?</h1>
          <p className="w-1/3 text-lg mx-auto mt-4">
            At vcScholar, we're not just helping you fund your education; we're
            helping you write a good story of your future.{" "}
          </p>
        </div>

        <div className="grid grid-cols-2 grid-flow-dense">
          <div>
            <h1 className="text-3xl font-bold my-10">
              Unlock Your Educational Dreams.
            </h1>
            <ul>
              <li>
                <div className="flex gap-5">
                  <div className="p-5">
                    <GradCapIcon></GradCapIcon>
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold mb-3">
                      Access to Essential Funds
                    </h2>
                    <p className="font-normal text-base">
                      Here at vcScholar, we you gain access to the critical
                      funding needed to cover tuition fees and deposits. We
                      remove the financial barriers that can hinder your
                      academic pursuits, allowing you to focus on your
                      education. No collateral required, no repayments.{" "}
                    </p>
                  </div>
                </div>
              </li>

              <li className="mt-10">
                <div className="flex gap-5">
                  <div className="p-5">
                    <GradCapIcon></GradCapIcon>
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold mb-3">
                      Access to Essential Funds
                    </h2>
                    <p className="font-normal text-base">
                      Here at vcScholar, we you gain access to the critical
                      funding needed to cover tuition fees and deposits. We
                      remove the financial barriers that can hinder your
                      academic pursuits, allowing you to focus on your
                      education. No collateral required, no repayments.{" "}
                    </p>
                  </div>
                </div>
              </li>

              <li className="mt-10">
                <div className="flex gap-5">
                  <div className="p-5">
                    <GradCapIcon></GradCapIcon>
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold mb-3">
                      Access to Essential Funds
                    </h2>
                    <p className="font-normal text-base">
                      Here at vcScholar, we you gain access to the critical
                      funding needed to cover tuition fees and deposits. We
                      remove the financial barriers that can hinder your
                      academic pursuits, allowing you to focus on your
                      education. No collateral required, no repayments.{" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
