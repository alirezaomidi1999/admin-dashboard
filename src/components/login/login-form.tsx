"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "../shadcn/ui/input";
import { Label } from "../shadcn/ui/label";
import { loginAction } from "@/app/actions/login-auth";
import { useFormState } from "react-dom";
import { SubmitButton } from "./submit-button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const getCallbackUrl = searchParams.get("callbackUrl") as string;
  const loginActionAndParams = loginAction.bind(null, getCallbackUrl);
  const [state, formAction] = useFormState(loginActionAndParams, {});
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form
        className="flex flex-col gap-6 bg-white shadow-shadow-1 px-12 py-16 w-[450px] rounded-lg"
        action={formAction}
      >
        <h2 className="text-3xl text-center font-semibold mb-8">Login</h2>

        {/* پیام کلی خطا */}
        {state?.message && <span className="text-red-500">{state.message}</span>}

        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="py-4"
            type="email"
            id="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* نمایش خطای ایمیل */}
          {state?.errors?.email && (
            <span className="text-sm text-red-500">{state.errors.email}</span>
          )}
        </div>

        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* نمایش خطای رمز عبور */}
          {state?.errors?.password && (
            <span className="text-sm text-red-500">{state.errors.password}</span>
          )}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
