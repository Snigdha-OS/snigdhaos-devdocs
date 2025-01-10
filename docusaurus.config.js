// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SNIGDHA OS | DEVELOPER DOCS',
  tagline: 'Comprehensive Documentation for Next-Level Development on Snigdha OS.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://snigdha-os.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/snigdhaos-devdocs/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Snigdha-OS', // Usually your GitHub org/user name.
  projectName: 'snigdhaos-devdocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', // English
      'hi', // Hindi
      'bn', // Bengali
      'te', // Telugu
      'mr', // Marathi
      'ta', // Tamil
      'ur', // Urdu
      'gu', // Gujarati
      'kn', // Kannada
      'ml', // Malayalam
      'or', // Odia
      'pa', // Punjabi
      'as', // Assamese
      'ne', // Nepali
      'si', // Sinhala
      'hy', // Hindi
      'ks', // Kashmiri
      'sa', // Sanskrit
      'bo', // Tibetan
    ],
    localeConfigs: {
      en: { label: 'English' },
      hi: { label: 'हिन्दी' },
      bn: { label: 'বাংলা' },
      te: { label: 'తెలుగు' },
      mr: { label: 'मराठी' },
      ta: { label: 'தமிழ்' },
      ur: { label: 'اردو' },
      gu: { label: 'ગુજરાતી' },
      kn: { label: 'ಕನ್ನಡ' },
      ml: { label: 'മലയാളം' },
      or: { label: 'ଓଡ଼ିଆ' },
      pa: { label: 'ਪੰਜਾਬੀ' },
      as: { label: 'অসমীয়া' },
      ne: { label: 'नेपाली' },
      si: { label: 'සිංහල' },
      hy: { label: 'հայերեն' },
      ks: { label: 'کشمیر' },
      sa: { label: 'संस्कृत' },
      bo: { label: 'བོད་ཡིག' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsible: false, // Sidebar items are not collapsible
          routeBasePath: '/', // Set docs as the homepage
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Snigdha-OS/snigdhaos-devdocs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SNIGDHA OS | DEVELOPER DOCS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown', // Language switcher dropdown
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/Snigdha-OS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Snigdha OS. Powered by TONMOY INFRASTRUCTURE.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
