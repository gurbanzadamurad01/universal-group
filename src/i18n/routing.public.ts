import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ['az', 'en', 'tr'],
  defaultLocale: 'az',
  localePrefix: 'always',
});
