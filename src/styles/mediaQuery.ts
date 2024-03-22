const breakpoints = {
  phone: 550,
  tablet: 1280,
  desktop: 1440
} as const;

type Breakpoints = (typeof breakpoints)[keyof typeof breakpoints];

const mediaQueryBuilder = (width: Breakpoints): string =>
  `@media (min-width: ${width}px)`;

export const mediaQuery = {
  phone: mediaQueryBuilder(breakpoints.phone),
  tablet: mediaQueryBuilder(breakpoints.tablet),
  desktop: mediaQueryBuilder(breakpoints.desktop)
};
