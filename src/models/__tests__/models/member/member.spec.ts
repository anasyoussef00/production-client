import { it, test, vi } from 'vitest';
import Member from '@/models/member';
import { EGender } from '@/models/member/types';

vi.mock('@/models/member');

test('Member can be mocked', () =>
  vi.mocked(Member).mockResolvedValue({
    id: 1,
    intermediate: 'CIE MAMDA',
    firstName: 'Anas Youssef',
    lastName: 'El Mahdad',
    birthDate: '26-08-2002',
    gender: EGender.Male,
    vip: 'Y',
    country: 'Morocco',
    cin: 'AD327961',
    deliveryDate: '26-08-2022',
    deliveryLocation: 'Temara',
    cinValidUntil: '26-08-2040',
    nationality: 'Moroccan',
    moroccanNationality: 'Y',
    fullFatherName: 'Youssef El Mahdad',
    fullMotherName: 'Samira Gouiza',
    profession: {
      title: 'Judo',
    },
    correspondance: [
      {
        addressType: 'U',
        number: '',
        way: '',
        complement: '',
        city: '',
        postalCode: '',
        emailAddress: '',
        phoneNumber: '',
        fixNumber: '',
        faxNumber: '',
      },
    ],
  }));
