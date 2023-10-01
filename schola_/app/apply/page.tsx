import React from "react";

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
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text ">What is your name?</span>
            <span className="label-text-alt">Top Right label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full rounded-sm max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Bottom Left label</span>
            <span className="label-text-alt">Bottom Right label</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default page;
