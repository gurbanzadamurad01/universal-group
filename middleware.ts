import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing.public";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(pt|en)/:path*"], // At this line, define into the matcher all the availables language you have defined into routing.ts
};
