import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(th|en)/:path*",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)"
  ]
};
