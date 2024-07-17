import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useAuthContextHook } from "../../../context/use_auth_context";
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

  return;
};

export default RegistrationFormStep;
