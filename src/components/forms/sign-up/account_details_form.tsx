"use client";

import { USER_REGISTRATION_FORM } from "@/constants/form";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const AccountDetailsForm = ({ errors, register }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Account Details</h2>
      <p className="text-iridium md:text-sm">Enter your Email and Password</p>
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
};
export default AccountDetailsForm;
