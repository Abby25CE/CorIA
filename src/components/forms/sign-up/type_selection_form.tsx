import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import UserTypeCard from "./user_type_card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Create an Acount</h2>
      <p className="text-iridium md:text-sm">
        Tell us about yourself! what do you do? Let's trailor your <br />{" "}
        experience so it best suits you.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        title="I own a buisness"
        text="Setting up my account for my company."
        userType={userType}
        value="owner"
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        title="Im a student"
        text="Looking to learn about the tool."
        userType={userType}
        value="student"
      />
    </>
  );
};
export default TypeSelectionForm;
