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

// Works
export const worksEn = [
  {
    title: "Wordwise",
    description:
      "University project to assess the validity of machine translation",
    image: "@/assets/works/wordwise_01.png",
    url: "/en/works/wordwise",
    showLinkSvg: true,
    workBadge: "uni project",
  },
  {
    title: "ponktoku.dev",
    description: "My first website that I put on the internet",
    image: "@/assets/works/homepage_thumb.jpeg",
    url: "/en/works/ponktoku-dev",
    showLinkSvg: false,
    workBadge: "personal project",
  },
  {
    title: "ponktoku.dev.v2",
    description: "It's the website you're seeing right now",
    image: "/images/hool.png",
    url: "/en/works/ponktoku-dev-v2",
    showLinkSvg: false,
    workBadge: "personal project",
  },
];

export const worksJa = [
  {
    title: "ワードワイズ",
    description:
      "University project to assess the validity of machine translation",
    image: "@/assets/works/wordwise_01.png",
    url: "/en/works/wordwise",
    showLinkSvg: true,
    workBadge: "uni project",
  },
  {
    title: "ponktoku.dev",
    description: "My first website that I put on the internet",
    image: "@/assets/works/homepage_thumb.jpeg",
    url: "/en/works/ponktoku-dev",
    showLinkSvg: false,
    workBadge: "personal project",
  },
  {
    title: "ponktoku.dev.v2",
    description: "It's the website you're seeing right now",
    image: "/images/hool.png",
    url: "/en/works/ponktoku-dev-v2",
    showLinkSvg: false,
    workBadge: "personal project",
  },
];
