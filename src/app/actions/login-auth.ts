"use server";

import { LoginState } from "@/types/types";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";

// تعریف اسکیمای اعتبارسنجی
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export async function loginAction(
  callbackUrl: string,
  prevState: LoginState | undefined,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { message: "Invalidate Username Or Password" };
  }

  // اعتبارسنجی داده‌ها با Zod
  const validation = loginSchema.safeParse({ email, password });

  if (!validation.success) {
    // استخراج خطاهای هر فیلد
    const fieldErrors: Record<string, string> = {};
    validation.error.errors.forEach((err) => {
      if (err.path.length > 0) {
        fieldErrors[err.path[0]] = err.message;
      }
    });
    return { errors: fieldErrors };
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl ?? "/",
    });
    console.log("نتیجه ورود: ", result);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "اعتبارسنجی با خطا مواجه شد" };
        default:
          return { message: "مشکلی پیش آمده." };
      }
    }
    throw error;
  }

  return { message: "" };
}
