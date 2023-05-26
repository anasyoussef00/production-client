import type { EGender, TYesOrNo } from '@/types';

export declare interface IMember {
  id: number;
  intermediate: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  vip: string;
  country: string;
  cin: string;
  deliveryDate: string;
  deliveryLocation: string;
  cinValidUntil: string;
  nationality: string;
  moroccanNationality: string;
  fullFatherName: string;
  fullMotherName: string;
  profession: IProfession;
  correspondance: ICorrespondance[];
}

export declare interface IProfession {
  title: string;
}

export declare type TAddressType = 'U' | 'R' | 'u' | 'r' | 'urban' | 'rural' | 'urbaine' | 'rurale';

export declare interface ICorrespondance {
  addressType: string;
  number: string;
  way: string;
  complement: string;
  city: string;
  postalCode: string;
  emailAddress: string;
  phoneNumber: string;
  fixNumber: string;
  faxNumber: string;
}
