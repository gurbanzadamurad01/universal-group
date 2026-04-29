import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {COOKIE_NAME, defaultLocale, locales} from '../config';
import {cookies} from 'next/headers';

export default getRequestConfig(async ({requestLocale}) => {
  let candidate = await requestLocale;

  if (!candidate) {
    const store = await cookies();
    candidate = store.get(COOKIE_NAME)?.value;
  }

  const locale = hasLocale(locales, candidate) ? candidate : defaultLocale;

  const baseMessages = (await import(`../../messages/${locale}.json`)).default;
  const chatbotMessages = (await import(`../../messages/chatbot/${locale}.json`)).default;

  return {
    locale,
    messages: {
      ...baseMessages,
      ...chatbotMessages
    }
  };
});