import api from '@/api';
import type { ICorrespondance, IMember, IProfession } from './types';
import { isAxiosError, type AxiosResponse } from 'axios';

export default class Member implements IMember {
  id: number | number;
  intermediate: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  vip: boolean;
  country: string;
  cin: string;
  deliveryDate: string;
  deliveryLocation: string;
  cinValidUntil: string;
  nationality: string;
  moroccanNationality: boolean;
  fullFatherName: string;
  fullMotherName: string;
  profession: IProfession;
  correspondance: ICorrespondance[];

  constructor(details: IMember) {
    this.id = details.id!;
    this.intermediate = details.intermediate;
    this.firstName = details.firstName;
    this.lastName = details.lastName;
    this.birthDate = details.birthDate;
    this.gender = details.gender;
    this.vip = details.vip;
    this.country = details.country;
    this.cin = details.cin;
    this.deliveryDate = details.deliveryDate;
    this.deliveryLocation = details.deliveryLocation;
    this.cinValidUntil = details.cinValidUntil;
    this.nationality = details.nationality;
    this.moroccanNationality = details.moroccanNationality;
    this.fullFatherName = details.fullFatherName;
    this.fullMotherName = details.fullMotherName;
    this.profession = details.profession;
    this.correspondance = details.correspondance;
  }

  static async getById(id: number): Promise<IMember | undefined> {
    try {
      const { data } = await api.get<IMember>(`/members/member/${id}`);
      // if (!foundMember)
      //   return Promise.reject(new Error(`Couldn't find a member with the given id: ${id}`));
      // console.log(foundMember);
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        throw err;
      }
    }
  }

  static async updateById(id: number, member: IMember): Promise<IMember | undefined> {
    try {
      const { data } = await api.put<IMember>(`/members/member/${id}`, member);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async store(member: IMember): Promise<IMember | undefined> {
    try {
      const { data } = await api.post<IMember>('/members/create', member);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async deleteById(id: number): Promise<AxiosResponse<void>> {
    try {
      const res = await api.delete<void>(`/members/member/${id}`);
      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
