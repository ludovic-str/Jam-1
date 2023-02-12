export interface HeroBaseInfos {
  name: string;
  image: string;
}

export interface Hero {
  id: number;
  name: string;
  gender: string;
  eyeColor: string;
  race: string;
  hairColor: string;
  height: number;
  publisher: string;
  skinColor: string;
  alignment: string;
  weight: number;
  path: string;
  image: string;
}

export type NumberFieldValidation = "more" | "less" | "equal";

export interface HeroGuess {
  image: string;
  gender: string;
  isGenderValid: boolean;
  species: string;
  isSpeciesValid: boolean;
  height: number;
  isHeightValid: NumberFieldValidation;
  weight: number;
  isWeightValid: NumberFieldValidation;
  hairColor: string;
  isHairColorValid: boolean;
  skinColor: string;
  isSkinColorValid: boolean;
  publisher: string;
  isPublisherValid: boolean;
}

export interface HeroValidation {
  name: string;
  image: string;
  isValid: boolean;
}
