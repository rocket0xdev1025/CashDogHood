import {
  a as e,
  c as t,
  i as n,
  l as r,
  n as i,
  o as a,
  t as o,
  u as s,
} from "./index-CDC7euCw.js";
import {
  a as c,
  i as l,
  n as u,
  r as d,
  t as f,
} from "./SiteHeader-QxIpLYz-.js";
var p = t();
function m({ text: e }) {
  return (0, p.jsx)(`div`, {
    "aria-hidden": `true`,
    className: `overflow-hidden border-y-4 border-primary bg-panel py-3`,
    children: (0, p.jsxs)(`div`, {
      className: `flex w-max animate-marquee`,
      children: [
        (0, p.jsx)(`span`, {
          className: `whitespace-nowrap px-6 font-pixel text-[10px] uppercase tracking-widest text-primary sm:text-xs`,
          children: e,
        }),
        (0, p.jsx)(`span`, {
          className: `whitespace-nowrap px-6 font-pixel text-[10px] uppercase tracking-widest text-primary sm:text-xs`,
          children: e,
        }),
      ],
    }),
  });
}
function h() {
  return (0, p.jsx)(`ul`, {
    className: `grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5`,
    children: e.map((e) =>
      (0, p.jsx)(
        `li`,
        {
          className: `border-4 border-border bg-surface p-2 transition-transform duration-150 hover:-translate-y-1`,
          children: (0, p.jsx)(`img`, {
            src: e.src,
            alt: e.alt,
            loading: `lazy`,
            decoding: `async`,
            className: `h-auto w-full`,
          }),
        },
        e.src
      )
    ),
  });
}
var g = s(r(), 1),
  _ = [
    { label: `Ticker`, value: a.ticker },
    { label: `Chain`, value: a.chain },
    { label: `Supply`, value: a.supply },
    { label: `Taxes`, value: a.taxes },
  ];
function v() {
  let [e, t] = (0, g.useState)(!1);
  async function n() {
    try {
      await navigator.clipboard.writeText(a.contract),
        t(!0),
        window.setTimeout(() => t(!1), 1500);
    } catch {
      t(!1);
    }
  }
  return (0, p.jsxs)(`div`, {
    className: `bg-card p-6 px-border sm:p-8`,
    children: [
      (0, p.jsx)(`dl`, {
        className: `divide-y-2 divide-border/30`,
        children: _.map((e) =>
          (0, p.jsxs)(
            `div`,
            {
              className: `flex items-center justify-between gap-4 py-3`,
              children: [
                (0, p.jsx)(`dt`, {
                  className: `font-pixel text-[10px] uppercase text-muted-foreground`,
                  children: e.label,
                }),
                (0, p.jsx)(`dd`, {
                  className: `text-right text-primary`,
                  children: e.value,
                }),
              ],
            },
            e.label
          )
        ),
      }),
      (0, p.jsxs)(`div`, {
        className: `mt-6 border-4 border-border/60 bg-background p-4`,
        children: [
          (0, p.jsx)(`p`, {
            className: `break-all text-center text-base text-foreground sm:text-lg`,
            children: a.contract,
          }),
          (0, p.jsx)(c, {
            onClick: n,
            className: `mt-4 w-full`,
            children: e ? `Copied!` : `Copy CA`,
          }),
        ],
      }),
      (0, p.jsxs)(`div`, {
        className: `mt-6 flex flex-wrap gap-4`,
        children: [
          (0, p.jsx)(c, {
            href: i.buy,
            className: `flex-1`,
            children: `Buy on DEX`,
          }),
          (0, p.jsx)(c, {
            variant: `ghost`,
            href: i.chart,
            className: `flex-1`,
            children: `Chart`,
          }),
          (0, p.jsx)(c, {
            variant: `ghost`,
            href: i.geckoterminal,
            className: `flex-1`,
            children: `GeckoTerminal`,
          }),
        ],
      }),
    ],
  });
}
function y() {
  return (0, p.jsxs)(`div`, {
    id: `top`,
    children: [
      (0, p.jsx)(f, {}),
      (0, p.jsxs)(`main`, {
        children: [
          (0, p.jsxs)(`section`, {
            className: `relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center`,
            children: [
              (0, p.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0 starfield animate-stars opacity-70`,
              }),
              (0, p.jsx)(`div`, {
                className: `pointer-events-none absolute right-[8%] top-[12%] size-24 rounded-full bg-muted-foreground/60 blur-[1px] sm:size-32`,
              }),
              (0, p.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, p.jsx)(`h1`, {
                    className: `font-pixel text-3xl uppercase leading-tight text-primary px-shadow-gold sm:text-5xl md:text-6xl`,
                    children: `$CASHDOG — The Dog That Carries the Bags`,
                  }),
                  (0, p.jsx)(`p`, {
                    className: `mt-6 text-muted-foreground`,
                    children: `The dog that carries the bags.`,
                  }),
                  (0, p.jsx)(`img`, {
                    src: o.heroDog,
                    alt: `CASHDOG riding a rocket to the moon`,
                    width: 220,
                    height: 220,
                    className: `mx-auto mt-10 w-40 animate-float sm:w-56`,
                  }),
                  (0, p.jsxs)(`div`, {
                    className: `mt-12 flex flex-wrap justify-center gap-4`,
                    children: [
                      (0, p.jsx)(c, { href: i.buy, children: `Buy $CASHDOG` }),
                      (0, p.jsx)(c, {
                        variant: `ghost`,
                        href: `/how-to-buy-on-robinhood-chain`,
                        children: `How to Buy`,
                      }),
                      (0, p.jsx)(c, {
                        variant: `ghost`,
                        href: i.twitter,
                        children: `Follow on X`,
                      }),
                      (0, p.jsx)(c, {
                        variant: `ghost`,
                        href: i.tiktok,
                        children: `Follow on TikTok`,
                      }),
                      (0, p.jsx)(c, {
                        variant: `ghost`,
                        href: i.telegram,
                        children: `Join Telegram`,
                      }),
                      (0, p.jsx)(c, {
                        variant: `ghost`,
                        href: `/game`,
                        children: `▶ Play Game`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, p.jsx)(m, {
            text: `▲ $CASHDOG ▲ MUCH CASH ▲ VERY MOON ▲ ON ROBINHOOD CHAIN ▲ $CASHDOG ▲ MUCH CASH ▲ VERY MOON ▲ ON ROBINHOOD CHAIN ▲`,
          }),
          (0, p.jsxs)(d, {
            id: `story`,
            children: [
              (0, p.jsx)(l, { children: `The Story` }),
              (0, p.jsxs)(`div`, {
                className: `mt-10 grid items-center gap-10 md:grid-cols-2`,
                children: [
                  (0, p.jsx)(`video`, {
                    src: o.storyVideo,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    controls: !0,
                    preload: `none`,
                    poster: o.ogBanner,
                    className: `w-full border-4 border-border`,
                  }),
                  (0, p.jsxs)(`div`, {
                    className: `space-y-5`,
                    children: [
                      (0, p.jsxs)(`p`, {
                        children: [
                          `The market crashed. Candles bled red.`,
                          ` `,
                          (0, p.jsx)(`span`, {
                            className: `text-primary`,
                            children: `CASHCAT was falling.`,
                          }),
                        ],
                      }),
                      (0, p.jsxs)(`p`, {
                        children: [
                          `One dog answered the call. One rocket. One rope. One rule:`,
                          ` `,
                          (0, p.jsx)(`span`, {
                            className: `text-primary`,
                            children: `no cat left behind.`,
                          }),
                        ],
                      }),
                      (0, p.jsx)(`p`, {
                        children: `Now the whole chain rides with him — through every dump, straight to the moon.`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, p.jsx)(m, {
            text: `▲ WAGMI ▲ NO CAT LEFT BEHIND ▲ WAGMI ▲ NO CAT LEFT BEHIND ▲ WAGMI ▲ NO CAT LEFT BEHIND ▲`,
          }),
          (0, p.jsxs)(d, {
            id: `token`,
            children: [
              (0, p.jsx)(l, { children: `Token Details` }),
              (0, p.jsxs)(`div`, {
                className: `mt-10 grid items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr]`,
                children: [
                  (0, p.jsx)(`img`, {
                    src: n.king.src,
                    alt: `CASHDOG wearing a crown`,
                    loading: `lazy`,
                    decoding: `async`,
                    className: `mx-auto w-56 md:w-full`,
                  }),
                  (0, p.jsx)(v, {}),
                ],
              }),
            ],
          }),
          (0, p.jsx)(m, {
            text: `▲ 20 STICKERS ▲ FREE TO USE ▲ IMPOSSIBLE TO STOP ▲ 20 STICKERS ▲ FREE TO USE ▲ IMPOSSIBLE TO STOP ▲`,
          }),
          (0, p.jsxs)(d, {
            id: `stickers`,
            children: [
              (0, p.jsx)(l, { children: `Sticker Arsenal` }),
              (0, p.jsx)(`p`, {
                className: `mt-4 text-muted-foreground`,
                children: `Twenty animated CASHDOG stickers. Free to use, impossible to stop.`,
              }),
              (0, p.jsx)(`div`, {
                className: `mt-10`,
                children: (0, p.jsx)(h, {}),
              }),
              (0, p.jsx)(`div`, {
                className: `mt-10 text-center`,
                children: (0, p.jsx)(c, {
                  href: i.stickerPack,
                  children: `Get the Pack`,
                }),
              }),
            ],
          }),
          (0, p.jsx)(m, {
            text: `▲ PLAY FUD BUSTER ▲ BUST THE FUD ▲ TOP THE LEADERBOARD ▲ PLAY FUD BUSTER ▲ BUST THE FUD ▲`,
          }),
          (0, p.jsxs)(d, {
            id: `game`,
            children: [
              (0, p.jsx)(l, { children: `FUD Buster` }),
              (0, p.jsxs)(`div`, {
                className: `mt-10 grid items-center gap-10 md:grid-cols-2`,
                children: [
                  (0, p.jsxs)(`div`, {
                    className: `relative bg-card p-8 px-border`,
                    children: [
                      (0, p.jsx)(`span`, {
                        className: `absolute -top-4 left-6 border-4 border-border bg-primary px-3 py-1 font-pixel text-[10px] text-primary-foreground`,
                        children: `🎮 Arcade`,
                      }),
                      (0, p.jsx)(`img`, {
                        src: n.lfg.src,
                        alt: `CASHDOG ready to bust FUD`,
                        loading: `lazy`,
                        decoding: `async`,
                        className: `mx-auto w-48`,
                      }),
                    ],
                  }),
                  (0, p.jsxs)(`div`, {
                    className: `space-y-5`,
                    children: [
                      (0, p.jsx)(`p`, {
                        children: `Red candles incoming. Paper hands everywhere. The FUD never sleeps.`,
                      }),
                      (0, p.jsxs)(`p`, {
                        children: [
                          `Grab CASHDOG and`,
                          ` `,
                          (0, p.jsx)(`span`, {
                            className: `text-primary`,
                            children: `bust every piece of FUD`,
                          }),
                          ` before it tanks the chart. Rack up points, climb the leaderboard, and prove your diamond paws.`,
                        ],
                      }),
                      (0, p.jsx)(c, { href: `/game`, children: `▶ Play Now` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, p.jsx)(u, {}),
    ],
  });
}
export { y as component };
