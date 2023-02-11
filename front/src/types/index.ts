export interface HeroBaseInfos {
  name: string,
  image: string,
}

export interface Hero {
    id: number,
    name: string,
    gender: string,
    'eyeColor': string,
    race: string,
    'hairColor': string,
    height: number,
    publisher: string,
    'skinColor': string,
    alignment: string,
    weight: number,
    path: string,
    image: string,
}

export interface HeroValidation {
  name: string,
  image: string,
  isValid: boolean,
}
