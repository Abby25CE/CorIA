"use client";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useAuthContextHook } from "../../../context/use_auth_context";
import TypeSelectionForm from "./type_selection_form";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/spinner";

const DetailForm = dynamic(() => import("./account_details_form"), {
  ssr: false,
  loading: Spinner,
});
type Props = {};

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContextHook();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "studen">("owner");

  setValue("otp", onOTP);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          setUserType={setOnUserType}
          userType={onUserType}
        ></TypeSelectionForm>
      );
    case 2:
      return <DetailForm></DetailForm>;
    case 3:
  }

  return;
};

export default RegistrationFormStep;
