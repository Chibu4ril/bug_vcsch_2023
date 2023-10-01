"use client";

import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import styles from "./Application.module.css";
import { Icon } from "@iconify/react";

interface TextfieldProps {
  label?: string;
  rightLabel?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  errorLabel?: string;
  infoLabel?: string;
}

export const Textfield: React.FC<TextfieldProps> = ({
  label,
  rightLabel,
  errorLabel,
  infoLabel,
  id,
  placeholder,
  name,

  ...props
}) => {
  return (
    <>
      <div className="form-control justify-center	 w-full  ">
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text-alt">{rightLabel}</span>
        </label>
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          className={`input input-bordered rounded-sm w-full md:max-w-xl placeholder:text-sm placeholder:font-extralight`}
        />
        <label className="label">
          <span className="label-text-alt">{errorLabel}</span>
          <span className="label-text-alt">{infoLabel}</span>
        </label>
      </div>
    </>
  );
};

export const InputGroup = () => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
      </div>
    </>
  );
};

interface PhoneNumberProps {
  label?: string;
  rightLabel?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  errorLabel?: string;
  infoLabel?: string;
}

export const PhoneNumber: React.FC<PhoneNumberProps> = ({
  label,
  rightLabel,
  name,
  id,
  placeholder,
  errorLabel,
  infoLabel,
}) => {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt">{rightLabel}</span>
      </label>
      <div className="flex">
        <div className=" me-2">
          <select className="select select-bordered rounded-sm ">
            <option>+234</option>
            <option>+234</option>
            <option>+234</option>
          </select>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className={`input input-bordered rounded-sm w-full md:max-w-xl placeholder:text-sm placeholder:font-extralight`}
        />
      </div>
      <label className="label">
        <span className="label-text-alt">{errorLabel}</span>
        <span className="label-text-alt">{infoLabel}</span>
      </label>
    </div>
  );
};

interface SelectFieldProps {
  label?: string;
  rightLabel?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  errorLabel?: string;
  infoLabel?: string;
  children: any;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  rightLabel,
  name,
  id,
  placeholder,
  errorLabel,
  infoLabel,
  children,
}) => {
  return (
    <div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text-alt">{rightLabel}</span>
        </label>
        <select className="select select-bordered rounded-sm">
          {children}
        </select>
        <label className="label">
          <span className="label-text-alt">{errorLabel}</span>
          <span className="label-text-alt">{infoLabel}</span>
        </label>
      </div>
    </div>
  );
};

interface DatePickerProps {
  label?: string;
  rightLabel?: string;
  errorLabel?: string;
  infoLabel?: string;
}

interface DateValue {
  startDate: Date;
  endDate: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  rightLabel,
  errorLabel,
  infoLabel,
}) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text-alt">{rightLabel}</span>
        </label>
        <div>
          <Datepicker
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
            showFooter={true}
            separator={"~"}
            inputClassName="input w-full input-bordered rounded-sm"
            containerClassName="relative"
            popoverDirection="down"
          />
        </div>

        <label className="label">
          <span className="label-text-alt">{errorLabel}</span>
          <span className="label-text-alt">{infoLabel}</span>
        </label>
      </div>
    </>
  );
};

interface CheckboxProps {
  children?: any;
  label: string;
  checked?: any;
}

export const CheckBox: React.FC<CheckboxProps> = ({
  children,
  label,
  checked,
}) => {
  return (
    <div className="form-control mb-4">
      <label className="label cursor-pointer justify-start">
        <input
          checked={checked}
          type="checkbox"
          className="checkbox checkbox-primary rounded-sm  "
        />
        <span className="label-text font-bold text-base mx-3">{label}</span>
      </label>
    </div>
  );
};

interface FileUploadProps {
  label?: string;
  rightLabel: string;
  errorLabel: string;
  infoLabel: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  rightLabel,
  errorLabel,
  infoLabel,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt">{rightLabel}</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text-alt">{errorLabel}</span>
        <span className="label-text-alt">{infoLabel}</span>
      </label>
    </div>
  );
};
