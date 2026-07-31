import { HeroContent } from './types';

export const heroContent: HeroContent = {
  greeting: "Hi, I'm",
  descriptionSuffix: "years turning complex enterprise procurement problems into fast, reliable products.",
  primaryButtonText: "Get in touch",
  secondaryButtonText: "Download Resume",
  stats: [
    {
      label: "Experience",
      value: 0,
      dynamicValue: 'experienceYears',
      suffix: "+ yrs"
    },
    {
      label: "Roles Played",
      value: 0,
      dynamicValue: 'totalRoles',
      suffix: "+"
    },
    {
      label: "Employee of the Month",
      value: "×4",
      suffix: ""
    }
  ]
};
