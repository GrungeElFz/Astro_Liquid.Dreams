import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'Mission',
          href: getPermalink('/#mission'),
        },
        {
          text: 'History',
          href: getPermalink('/#history'),
        },
      ],
    },
    {
      text: 'Events',
      links: [
        {
          text: 'LiQuid Dreams VOLUME 3',
          href: getPermalink('/events/liquid-dreams-volume-3'),
        },
        {
          text: 'L̶i̶Q̶u̶i̶d̶ ̶D̶r̶e̶a̶m̶s̶ ̶V̶O̶L̶U̶M̶E̶ ̶2̶ - Past Event',
          href: getPermalink('/events'),
        },
        {
          text: 'L̶i̶Q̶u̶i̶d̶ ̶D̶r̶e̶a̶m̶s̶ ̶V̶O̶L̶U̶M̶E̶ ̶1̶ - Past Event',
          href: getPermalink('/events'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'TUKUPI',
          href: getPermalink('artist_TUKUPI', 'post'),
        },
        {
          text: 'Howz',
          href: getPermalink('artist_howz', 'post'),
        },
        {
          text: '0x01000111',
          href: getPermalink('artist_0x01000111', 'post'),
        },
        {
          text: 'Santa Cecilia',
          href: getPermalink('artist_santacecilia', 'post'),
        },
      ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Home',
      links: [
        { text: 'LiQuid Dreams', href: '#' },
        { text: 'Mission', href: '#mission' },
        { text: 'History', href: '#history' },
        { text: 'Videos', href: '#videos' },
      ],
    },
    {
      title: 'Event',
      links: [
        { text: 'VOLUME 3', href: getPermalink('/events/liquid-dreams-volume-3') },
        { text: 'V̶O̶L̶U̶M̶E̶ ̶2̶ - Past Event', href: getPermalink('/events/liquid-dreams-volume-2') },
        { text: 'V̶O̶L̶U̶M̶E̶ ̶1̶ - Past Event', href: getPermalink('/events/liquid-dreams-volume-1') },
      ],
    },
    {
      title: 'Socials',
      links: [
        { text: 'Howz', href: getPermalink('https://instagram.com/howzhowzhowz') },
        { text: 'TUKUPI', href: getPermalink('https://instagram.com/tukupi.live') },
        { text: '0x01000111', href: getPermalink('https://instagram.com/0x01000111') },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          text: 'liquiddreamscu@gmail.com',
          href: 'mailto:liquiddreamscu@gmail.com?subject=[Inquiry]%20Your%20Subject&body=Hi,%0D%0A%0D%0AI%20have%20a%20question%20regarding...',
        },
        {
          text: '01000111@0x01000111.io',
          href: 'mailto:01000111@0x01000111.io?subject=[Inquiry%20%7C%20LiQuid%20Dreams]%20Your%20Subject&body=Hi,%0D%0A%0D%0AI%20have%20a%20question%20regarding...',
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/liquiddreams.event' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/GrungeElFz/Astro_Liquid.Dreams' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
