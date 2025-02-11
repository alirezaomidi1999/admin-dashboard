import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    // اگر کاربر احراز هویت نشده باشد، ریدایرکت می‌شود
    const token = req.cookies.get("next-auth.session-token");

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // اگر کاربر وارد شده باشد، ادامه می‌دهد
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login", // صفحه لاگین
    },
  }
);

export const config = {
    matcher: ["/", "/:path*"], // مسیرهایی که باید محافظت شوند
};
