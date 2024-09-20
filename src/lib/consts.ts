// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Multilingual } from "./i18n";

export const SITE_TITLE: string | Multilingual = "ponktoku.dev";

export const SITE_DESCRIPTION: string | Multilingual = {
  en: "Danny Bao's Personal Website",
  ja: "Danny Baoの個人ウェブサイト",
};

export const TWITTER_ACCOUNT: string | Multilingual = "@ponktoku";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  en: "This page is not available in your language.",
  ja: "このページはご利用の言語でご覧いただけません。",
};
