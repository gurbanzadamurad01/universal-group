import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing.public";

export default createMiddleware(routing);

export const config = {
  // Include root path and all locale paths
  matcher: [
    '/',
    '/(az|en|tr)/:path*',
    // Exclude Next.js internals and static files
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};