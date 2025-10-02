import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "../config";

export const routing = defineRouting({
  locales,
  defaultLocale: defaultLocale as (typeof locales)[number],
});
