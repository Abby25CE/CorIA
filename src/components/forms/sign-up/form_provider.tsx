"use client";
import { Loader } from "@/components/loader";
import { AuthContextProvider } from "@/context/use_auth_context";
import { UseSignUpForm } from "@/hooks/sign-up/use_sign_up";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = UseSignUpForm();

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignUpFormProvider;
