export interface HeroBaseInfos {
  name: string;
  image: string;
  publisher: string;
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
  publisher: string;
  isValid: boolean;
}

export interface PedagoGuess {
  image: string;
  role: string;
  isRoleValid: boolean;
  gender: string;
  isGenderValid: boolean;
  mainLanguage: string;
  isMainLanguageValid: boolean;
  hairColor: string;
  isHairColorValid: boolean;
  height: number;
  isHeightValid: NumberFieldValidation;
  graduationYear: number;
  isGraduationYearValid: NumberFieldValidation;
  favoriteIDE: string;
  isFavoriteIDEValid: boolean;
}

export interface Pedago {
  id: number;
  name: string;
  role: string;
  gender: string;
  mainLanguage: string;
  hairColor: string;
  height: number;
  graduationYear: number;
  favoriteIDE: string;
  image: string;
}
