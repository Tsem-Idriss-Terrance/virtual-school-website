import {getRequestConfig} from 'next-intl/server';
import { cookies } from "next/headers"; 

 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  
  const cookieLang = (await cookies()).get('language')?.value || 'en';
 
  return {
    locale: cookieLang,
    messages: (await import(`../messages/${cookieLang}.json`)).default
  };
});