"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../shadcn/ui/button";
import { Input } from "../shadcn/ui/input";
import { Label } from "../shadcn/ui/label";
import Link from "next/link";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
      console.log(result);
    } else {
      alert("ok");
      router.replace("http://localhost:3000");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form
        className="flex flex-col gap-8 bg-white shadow-shadow-1 px-12 py-16 w-[450px] rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold">Sign in</h2>
        {error && <div className="text-red-500">{error}</div>}

        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="py-4"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">SIGN IN</Button>
      </form>
    </div>
  );
}
