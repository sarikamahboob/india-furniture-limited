import React from "react";
import { useForm } from "react-hook-form";

const InquiryForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-4xl text-orange-500 font-bold">
              Enquiry Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full max-w-xs"
                  {...register("address", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("number", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Inquiry Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Inquiry Details"
                  className="input input-bordered w-full max-w-xs"
                  {...register("details", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>

              <input
                className="btn bg-orange-500 border border-orange-500 w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-orange-500 hover:text-orange-500 hover:ease-in-out hover:duration-300 mt-4"
                type="submit"
                value="Send Enquiry"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
