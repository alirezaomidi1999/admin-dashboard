import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// دیتابیس فرضی برای کاربران
const users = [
  {
    id: "1",
    email: "test@example.com",
    password: bcrypt.hashSync("123", 3),
  },
];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // پیدا کردن کاربر
  const user = users.find((u) => u.email === email);
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // بررسی رمز عبور
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // ایجاد توکن JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  return NextResponse.json({ token });
}
