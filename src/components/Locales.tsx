// import React, { useState, useEffect } from 'react';

// // third-party
// import { IntlProvider } from 'react-intl';

// // project import
// import useConfig from 'hooks/useConfig';

// // types
// import { I18n } from 'types/config';

// // Helper function to flatten nested messages
// export function flattenMessages(nestedMessages: Record<string, any>, prefix = ''): Record<string, string> {
//   return Object.keys(nestedMessages).reduce(
//     (messages, key) => {
//       const value = nestedMessages[key];
//       const prefixedKey = prefix ? `${prefix}.${key}` : key;

//       if (typeof value === 'string') {
//         messages[prefixedKey] = value;
//       } else {
//         Object.assign(messages, flattenMessages(value, prefixedKey));
//       }

//       return messages;
//     },
//     {} as Record<string, string>
//   );
// }

// // Load locales dynamically
// const loadLocaleData = async (i18n: I18n) => {
//   const enData = await import('../utils/locales/en.json');
//   let localeData;

//   const localeMap = {
//     el: () => import('../utils/locales/el.json'), // Greek
//     es: () => import('../utils/locales/es.json'), // Spanish
//     ro: () => import('../utils/locales/ro.json'), // Romanian
//     it: () => import('../utils/locales/it.json'), // Italian
//     nl: () => import('../utils/locales/nl.json'), // Dutch
//     da: () => import('../utils/locales/da.json'), // Danish
//     et: () => import('../utils/locales/et.json'), // Estonian
//     fi: () => import('../utils/locales/fi.json'), // Finnish
//     cs: () => import('../utils/locales/cs.json'), // Czech
//     en: () => Promise.resolve(enData) // English (default)
//   };

//   try {
//     const loader = localeMap[i18n] ?? (() => enData);
//     localeData = await loader();
//   } catch (error) {
//     console.error(`Error loading locale "${i18n}", falling back to English.`);
//     localeData = enData;
//   }

//   return {
//     en: flattenMessages(enData.default),
//     current: flattenMessages(localeData.default)
//   };
// };

// // ==============================|| LOCALIZATION ||============================== //
// interface LocalsProps {
//   children: React.ReactNode;
// }

// const Locales = ({ children }: LocalsProps) => {
//   const { i18n } = useConfig();
//   const [messages, setMessages] = useState<Record<string, string> | undefined>();

//   useEffect(() => {
//     loadLocaleData(i18n).then(({ en, current }) => {
//       // Merge current language with English fallback
//       const mergedMessages = { ...en, ...current };
//       setMessages(mergedMessages);
//     });
//   }, [i18n]);

//   return (
//     <>
//       {messages && (
//         <IntlProvider locale={i18n} defaultLocale="en" messages={messages}>
//           {children}
//         </IntlProvider>
//       )}
//     </>
//   );
// };

// export default Locales;
