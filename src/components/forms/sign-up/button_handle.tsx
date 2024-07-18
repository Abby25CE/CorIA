"use client";

import { Button } from "@/components/ui/button";
import { useAuthContextHook } from "@/context/use_auth_context";
import { UseSignUpForm } from "@/hooks/sign-up/use_sign_up";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

type Props = {};

const ButtonHandle = (props: Props) => {
  const { setCurrentStep, currentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP } = UseSignUpForm();

  const { isDirty: isName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPassword } = getFieldState("password", formState);
  if (currentStep === 3) {
    return (
      <>
        <div className="w-full flex flex-col gap-3 items-center">
          <Button type="submit" className="w-full">
            Create An Account
          </Button>
          <p>
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </>
    );
  }
  if (currentStep === 2) {
    return (
      <>
        <div className="w-full flex flex-col gap-3 items-center">
          <Button
            type="submit"
            className="w-full"
            {...(isName &&
              isEmail &&
              isPassword && {
                onclick: () =>
                  onGenerateOTP(
                    getValues("email"),
                    getValues("Password"),
                    setCurrentStep
                  ),
              })}
          >
            Continue
          </Button>
          <p>
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          onClick={() => setCurrentStep((prev: number) => prev + 1)}
        >
          Continue
        </Button>
        <p>
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};
export default ButtonHandle;
