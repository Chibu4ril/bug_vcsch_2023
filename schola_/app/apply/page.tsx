import React from "react";
import styles from "./Apply.module.css";
import {
  CheckBox,
  DatePicker,
  FileUpload,
  PhoneNumber,
  SelectField,
  Textfield,
} from "../components/application/Application";
import { DeleteIcon, PDFIcon } from "../components/Icons";
import ApplyButton from "./ApplyButton";

const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl font-semibold	">
            Let's begin your application journey
          </h1>
          <p className="text-sm mb-5">
            We're here to guide you through every step, ensuring a smooth path
            towards your educational and career goals.
          </p>
        </div>

        <div className="grid grid-flow-row-dense gap-x-10 grid-cols-3 ">
          <div className={`col-span-2  mb-10 ${styles.myColoredCards}`}>
            <h4 className="font-bold h-2 mb-10">
              Enter your personal details.
            </h4>
            <div className="grid gap-x-10 gap-y-5 grid-flow-row-dense grid-cols-2 ">
              <Textfield
                label="First name"
                placeholder="Enter your first name"
              ></Textfield>
              <Textfield
                label="Last name"
                placeholder="Enter your last name"
              ></Textfield>
              <Textfield
                label=" Email address"
                placeholder="eg. markaddison@email.com"
              ></Textfield>
              <PhoneNumber
                label="Phone number"
                placeholder="eg. 912 334 1234"
              ></PhoneNumber>

              <SelectField label="Select your gender">
                <option selected disabled>
                  -- Select your gender --
                </option>
              </SelectField>
              <SelectField label="Select your country">
                <option selected disabled>
                  -- Select your country --
                </option>
              </SelectField>
              <DatePicker label="Date of Birth"></DatePicker>
            </div>
          </div>

          <div className={`col-span-2  ${styles.myColoredCards}`}>
            <h4 className="font-bold h-2 mb-10">
              Enter your personal details.
            </h4>
            <div className="grid gap-x-10 gap-y-5 grid-flow-row-dense grid-cols-2 ">
              <div className="col-span-2">
                <CheckBox
                  checked
                  label="Do you have your letter of Admission"
                ></CheckBox>
                <CheckBox label="Would you need help processing your visa application yourself."></CheckBox>
              </div>
              <SelectField label="Year of intended study">
                <option selected disabled>
                  --Select your year of study --
                </option>
              </SelectField>
              <SelectField label="Country of study">
                <option selected disabled>
                  --Select country of study --
                </option>
              </SelectField>
              <Textfield
                label="Course of study"
                placeholder="Enter course of study"
              ></Textfield>
              <Textfield
                label="University or College Name"
                placeholder="Enter institution name"
              ></Textfield>
              <SelectField label="Select academic degree">
                <option selected disabled>
                  -- Select advanced degree type --
                </option>
              </SelectField>

              <FileUpload
                label="Upload the necessary documents"
                rightLabel=""
                errorLabel=""
                infoLabel=""
              ></FileUpload>
            </div>
          </div>

          <div className={`col-span-2 my-5 `}>
            <div className="grid grid-cols-2 gap-10">
              <div
                className={`flex justify-between border-s-8 border-purple-700 rounded-none ${styles.myColoredCardsBorderless}`}
              >
                <div>
                  <PDFIcon></PDFIcon>
                </div>

                <div>
                  <DeleteIcon label=""></DeleteIcon>
                </div>
              </div>
              <div
                className={`flex justify-between border-s-8 border-purple-700 rounded-none ${styles.myColoredCardsBorderless}`}
              >
                <div>
                  <PDFIcon></PDFIcon>
                </div>

                <div>
                  <DeleteIcon label=""></DeleteIcon>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-10 mb-20">
            <div className="flex justify-end ">
              <ApplyButton></ApplyButton>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
