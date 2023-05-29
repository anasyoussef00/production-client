import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ICorrespondenceErrors, ICorrespondenceFormData } from './types';
import type { IContainerButton } from '@/components/containers/types/IContainerButton';
import { z } from 'zod';
import type { IMember } from '@/models/member/types';

export const usePhysicalPersonStore = defineStore('physicalPerson', () => {
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }
  // return { count, doubleCount, increment };

  const editMode = ref(true);
  const formData: IMember = reactive({
    id: 0,
    intermediate: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    vip: false,
    country: '',
    cin: '',
    deliveryDate: '',
    deliveryLocation: '',
    cinValidUntil: '',
    nationality: '',
    moroccanNationality: false,
    fullFatherName: '',
    fullMotherName: '',
    profession: {
      title: '',
    },
    correspondance: [
      {
        addressType: '',
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
  });

  let results: ICorrespondenceFormData = reactive({
    number: '',
    way: '',
    complement: '',
    city: '',
    postalCode: '',
    emailAddress: '',
    phoneNumber: '',
    fixNumber: '',
    faxNumber: '',
  });

  const errors: ICorrespondenceErrors = reactive({
    number: [],
    way: [],
    complement: [],
    city: [],
    postalCode: [],
    emailAddress: [],
    phoneNumber: [],
    fixNumber: [],
    faxNumber: [],
  });

  // const toggleEditMode = () => (editMode.value = !editMode.value);

  const submitForm = () => {
    try {
      const zodData = z.object({
        number: z.string().min(5).max(10),
        way: z.string().min(1, { message: 'Please select a way' }),
        complement: z.string().min(1),
        city: z.string().min(1, { message: 'Please select a city' }),
        postalCode: z.string().min(5).max(10),
        emailAddress: z.string().email(),
        phoneNumber: z.string().min(5).max(20),
        fixNumber: z.string().optional(),
        faxNumber: z.string().optional(),
      });

      zodData.parse(formData);
      Object.assign(results, formData);
      editMode.value = false;
      Object.assign(button, {
        text: 'Edit',
        onClick: () => switchToEditMode(),
        type: 'button',
        form: undefined,
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        Object.assign(errors, {
          number: err.formErrors.fieldErrors['number'] ?? [],
          way: err.formErrors.fieldErrors['way'] ?? [],
          complement: err.formErrors.fieldErrors['complement'] ?? [],
          city: err.formErrors.fieldErrors['city'] ?? [],
          postalCode: err.formErrors.fieldErrors['postalCode'] ?? [],
          emailAddress: err.formErrors.fieldErrors['emailAddress'] ?? [],
          phoneNumber: err.formErrors.fieldErrors['phoneNumber'] ?? [],
          fixNumber: err.formErrors.fieldErrors['fixNumber'] ?? [],
          faxNumber: err.formErrors.fieldErrors['faxNumber'] ?? [],
        });
      } else {
        console.error(err);
      }
    }
  };

  const button: IContainerButton = reactive({
    text: 'Submit',
    onClick: () => submitForm(),
    type: 'submit',
    form: 'correspondence-form',
  });

  const switchToEditMode = () => {
    console.log('teeeest');
    editMode.value = true;
    Object.assign(button, {
      text: 'Submit',
      onClick: () => submitForm(),
      type: 'submit',
      form: 'correspondence-form',
    });
  };

  const addNew = () => {
    switchToEditMode();
    Object.assign(formData, {
      number: '',
      way: '',
      complement: '',
      city: '',
      postalCode: '',
      emailAddress: '',
      phoneNumber: '',
      fixNumber: '',
      faxNumber: '',
    });
    Object.assign(results, {
      number: '',
      way: '',
      complement: '',
      city: '',
      postalCode: '',
      emailAddress: '',
      phoneNumber: '',
      fixNumber: '',
      faxNumber: '',
    });
  };

  const fillMemberData = (member: IMember) => {
    Object.assign(formData, {
      id: member.id,
      intermediate: member.intermediate,
      firstName: member.firstName,
      lastName: member.lastName,
      birthDate: member.birthDate,
      gender: member.gender,
      vip: member.vip,
      country: member.country,
      cin: member.cin,
      deliveryDate: member.deliveryDate,
      deliveryLocation: member.deliveryLocation,
      cinValidUntil: member.cinValidUntil,
      nationality: member.nationality,
      moroccanNationality: member.moroccanNationality,
      fullFatherName: member.fullFatherName,
      fullMotherName: member.fullMotherName,
      profession: {
        title: member.profession.title,
      },
      correspondance: [
        {
          addressType: member.correspondance[0].addressType,
          number: member.correspondance[0].number,
          way: member.correspondance[0].way,
          complement: member.correspondance[0].complement,
          city: member.correspondance[0].city,
          postalCode: member.correspondance[0].postalCode,
          emailAddress: member.correspondance[0].emailAddress,
          phoneNumber: member.correspondance[0].phoneNumber,
          fixNumber: member.correspondance[0].fixNumber,
          faxNumber: member.correspondance[0].faxNumber,
        },
      ],
    });
  };

  return {
    button,
    editMode,
    formData,
    results,
    errors,
    submitForm,
    switchToEditMode,
    addNew,
    fillMemberData,
  };
});
