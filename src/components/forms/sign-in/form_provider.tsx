"use client";
import { FormProvider } from "react-hook-form";
import { useSignInForm } from "@/hooks/sign-in/use_sign_in";
import { AuthContextProvider } from "@/context/use_auth_context";
import { Loader } from "@/components/loader";

type Props = {
  children: React.ReactNode;
};

const SignInFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignInForm();

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-fullull">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignInFormProvider;
