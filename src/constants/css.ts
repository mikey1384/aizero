export const Color: {
  blue: (opacity?: number) => string;
  lightBlue: (opacity?: number) => string;
  darkBlue: (opacity?: number) => string;
  darkGold: (opacity?: number) => string;
  logoBlue: (opacity?: number) => string;
  skyBlue: (opacity?: number) => string;
  littleBoyBlue: (opacity?: number) => string;
  lightOceanBlue: (opacity?: number) => string;
  oceanBlue: (opacity?: number) => string;
  darkOceanBlue: (opacity?: number) => string;
  darkerOceanBlue: (opacity?: number) => string;
  black: (opacity?: number) => string;
  brown: (opacity?: number) => string;
  lightBrown: (opacity?: number) => string;
  lighterBrown: (opacity?: number) => string;
  limeGreen: (opacity?: number) => string;
  sandyBrown: (opacity?: number) => string;
  logoGreen: (opacity?: number) => string;
  purple: (opacity?: number) => string;
  redOrange: (opacity?: number) => string;
  vantaBlack: (opacity?: number) => string;
} = {
  blue: (opacity = 1) => `rgba(5,110,178,${opacity})`,
  lightBlue: (opacity = 1) => `rgba(117,192,255,${opacity})`,
  darkBlue: (opacity = 1) => `rgba(0,70,195,${opacity})`,
  darkGold: (opacity = 1) => `rgba(250,193,50,${opacity})`,
  logoBlue: (opacity = 1) => `rgba(65, 140, 235,${opacity})`,
  skyBlue: (opacity = 1) => `rgba(63,175,255,${opacity})`,
  littleBoyBlue: (opacity = 1) => `rgba(103,163,217,${opacity})`,
  lightOceanBlue: (opacity = 1) => `rgba(87,190,255,${opacity})`,
  oceanBlue: (opacity = 1) => `rgba(36,135,235,${opacity})`,
  darkOceanBlue: (opacity = 1) => `rgba(30,110,183,${opacity})`,
  darkerOceanBlue: (opacity = 1) => `rgba(13,85,173,${opacity})`,
  black: (opacity = 1) => `rgba(51,51,51,${opacity})`,
  brown: (opacity = 1) => `rgba(139,69,19,${opacity})`,
  lightBrown: (opacity = 1) => `rgba(150,125,76,${opacity})`,
  lighterBrown: (opacity = 1) => `rgba(175,135,70,${opacity})`,
  limeGreen: (opacity = 1) => `rgba(34,197,94,${opacity})`,
  sandyBrown: (opacity = 1) => `rgba(230,204,96,${opacity})`,
  logoGreen: (opacity = 1) => `rgba(97,226,101,${opacity})`,
  purple: (opacity = 1) => `rgba(152,28,235,${opacity})`,
  redOrange: (opacity = 1) => `rgba(240,100,70,${opacity})`,
  vantaBlack: (opacity = 1) => `rgba(0,0,0,${opacity})`
};

export const strongColors: string[] = ['rose', 'red', 'purple'];

export const borderRadius = '5px';
export const innerBorderRadius = '4px';
export const mobileMaxWidth = '850px';
export const desktopMinWidth = '851px';
