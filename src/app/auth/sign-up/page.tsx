import ButtonHandle from "@/components/forms/sign-up/button_handle";
import SignUpFormProvider from "@/components/forms/sign-up/form_provider";
import HighlightBar from "@/components/forms/sign-up/highligth_bar";
import RegistrationFormStep from "@/components/forms/sign-up/registration_step";
import React from "react";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full ">
      <div className="flex, flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandle />
          </div>
          <HighlightBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
