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

export interface HeroGuess {
  image: string;
  gender: string;
  isGenderValid: boolean;
  species: string;
  isSpeciesValid: boolean;
  height: number;
  isHeightValid: boolean;
  weight: number;
  isWeightValid: boolean;
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
