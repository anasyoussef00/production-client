<script setup lang="ts">
import CorrespondenceInformation from '@/components/person/physical/CorrespondenceInformation.vue';
import { usePhysicalPersonStore } from '@/stores/person/physical';
import { reactive } from 'vue';
import { z } from 'zod';

const physicalPersonStore = usePhysicalPersonStore();

// interface ICorrespondenceErrors {
//   number: string[];
//   way: string[];
//   complement: string[];
//   city: string[];
//   postalCode: string[];
//   emailAddress: string[];
//   phoneNumber: string[];
//   fixNumber: string[];
//   faxNumber: string[];
// }

// const errors: ICorrespondenceErrors = reactive({
//   number: [],
//   way: [],
//   complement: [],
//   city: [],
//   postalCode: [],
//   emailAddress: [],
//   phoneNumber: [],
//   fixNumber: [],
//   faxNumber: [],
// });

const handleSubmit = () => {
  try {
    const formData = z.object({
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

    formData.parse(physicalPersonStore.formData);
    physicalPersonStore.submitForm();
  } catch (err) {
    if (err instanceof z.ZodError) {
      Object.assign(physicalPersonStore.errors, {
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

const numberChanged = () => {
  if (physicalPersonStore.errors.number.length === 0) return;
  physicalPersonStore.errors.number = [];
};

const wayChanged = () => {
  if (physicalPersonStore.errors.way.length === 0) return;
  physicalPersonStore.errors.way = [];
};

const complementChanged = () => {
  if (physicalPersonStore.errors.complement.length === 0) return;
  physicalPersonStore.errors.complement = [];
};

const cityChanged = () => {
  if (physicalPersonStore.errors.city.length === 0) return;
  physicalPersonStore.errors.city = [];
};

const postalCodeChanged = () => {
  if (physicalPersonStore.errors.postalCode.length === 0) return;
  physicalPersonStore.errors.postalCode = [];
};

const emailAddressChanged = () => {
  if (physicalPersonStore.errors.emailAddress.length === 0) return;
  physicalPersonStore.errors.emailAddress = [];
};

const phoneNumberChanged = () => {
  if (physicalPersonStore.errors.phoneNumber.length === 0) return;
  physicalPersonStore.errors.phoneNumber = [];
};

const fixNumberChanged = () => {
  if (physicalPersonStore.errors.fixNumber.length === 0) return;
  physicalPersonStore.errors.fixNumber = [];
};

const faxNumberChanged = () => {
  if (physicalPersonStore.errors.faxNumber.length === 0) return;
  physicalPersonStore.errors.faxNumber = [];
};
</script>

<template>
  <!-- <div class="flex gap-x-3">
    <span class="text-sm">Type adresse: </span>
    <div class="inline-flex gap-x-2">
      <input type="radio" name="address-type" id="urban-radio" />
      <label class="text-sm" for="urban-radio">Urbaine</label>
    </div>
    <div class="inline-flex gap-x-2">
      <input type="radio" name="address-type" id="rural-radio" />
      <label class="text-sm" for="rural-radio">Rurale</label>
    </div>
  </div> -->
  <div v-if="physicalPersonStore.editMode">
    <div class="flex flex-col 2xl:flex-row gap-1 justify-between mb-5">
      <h3 class="col-span-full">
        <span class="text-slate-700-title">Correspondance</span>
      </h3>
      <div
        class="inline-flex items-center border border-gray-200 rounded-lg py-2 px-3 overflow-hidden select-none"
      >
        <div class="inline-flex justify-between items-center">
          <span class="my-auto text-sm mr-5 text-gray-500">Type adresse:</span>

          <div class="inline-flex items-center">
            <label class="inline-flex items-center cursor-pointer">
              <input
                v-model="physicalPersonStore.formData.correspondance[0].addressType"
                class="my-auto transform scale-125 accent-teal-500"
                type="radio"
                name="address-type"
                value="U"
              />
              <div class="px-2 font-medium text-sm">Urbaine</div>
            </label>

            <label class="inline-flex items-center cursor-pointer">
              <input
                v-model="physicalPersonStore.formData.correspondance[0].addressType"
                class="my-auto transform scale-125 accent-teal-500"
                type="radio"
                name="address-type"
                value="R"
              />
              <div class="px-2 font-medium text-sm">Rurale</div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="physicalPersonStore.submitForm" id="correspondence-form" method="POST">
      <!-- <hr class="my-2" /> -->

      <div class="grid grid-cols-2 gap-x-5 gap-y-3">
        <div class="flex flex-col">
          <div class="relative flex w-full flex-wrap items-stretch">
            <!-- <input
              v-model="physicalPersonStore.formData.number"
              @input="numberChanged"
              class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-teal-500 text-sm"
              :class="`${
                physicalPersonStore.errors.number.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="text"
              id="number-inp"
              placeholder="Numéro"
            /> -->
            <input
              v-model="physicalPersonStore.formData.correspondance[0].number"
              @input="numberChanged"
              class="outlined-floating-label-inp peer"
              :class="`${
                physicalPersonStore.errors.number.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="text"
              id="number-inp"
              placeholder="Numéro"
            />
            <!-- <label class="text-xs font-medium mb-1" for="number-inp">Numéro</label> -->
            <label class="outlined-floating-label-label" for="number-inp">Numéro</label>
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
            >
              <font-awesome-icon
                :class="`${physicalPersonStore.errors.number.length !== 0 ? 'text-red-500' : ''}`"
                icon="fa-solid fa-arrow-up-9-1"
              />
            </span>
          </div>
          <span
            class="text-red-500 text-xs"
            v-for="(err, _, index) in physicalPersonStore.errors.number"
            :key="index"
            >{{ err }}</span
          >
        </div>

        <div class="relative flex flex-col">
          <select
            v-model="physicalPersonStore.formData.correspondance[0].way"
            @input="wayChanged"
            class="block py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] border border-gray-200 appearance-none w-full text-sm text-gray-900 bg-white rounded-lg placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-teal-500 peer"
            :class="`${
              physicalPersonStore.errors.way.length !== 0
                ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                : 'text-gray-900'
            }`"
            id="way-sel"
          >
            <option value="" selected disabled>Please select a way</option>
            <option value="aire">Aire</option>
          </select>
          <label class="outlined-floating-label-label" for="way-sel">Voie</label>
          <span
            class="text-red-500 text-xs"
            v-for="(err, _, index) in physicalPersonStore.errors.way"
            :key="index"
            >{{ err }}</span
          >
        </div>

        <div class="flex flex-col col-span-2">
          <div class="relative flex w-full flex-wrap items-stretch">
            <input
              v-model="physicalPersonStore.formData.correspondance[0].complement"
              @input="complementChanged"
              class="outlined-floating-label-inp peer"
              :class="`${
                physicalPersonStore.errors.complement.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="text"
              id="complement-inp"
              placeholder="Complement d'adresse"
            />
            <label class="outlined-floating-label-label" for="complement-inp"
              >Complement d'adresse</label
            >
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
            >
              <font-awesome-icon
                :class="`${
                  physicalPersonStore.errors.complement.length !== 0 ? 'text-red-500' : ''
                }`"
                icon="fa-solid fa-location-arrow"
              />
            </span>
            <span
              class="text-red-500 text-xs"
              v-for="(err, value, index) in physicalPersonStore.errors.complement"
              :key="index"
              >{{ err }}</span
            >
          </div>
        </div>

        <div class="relative flex flex-col">
          <select
            v-model="physicalPersonStore.formData.correspondance[0].city"
            @input="cityChanged"
            class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-teal-500 text-sm"
            :class="`${
              physicalPersonStore.errors.city.length !== 0
                ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                : 'text-gray-900'
            }`"
            id="city-sel"
          >
            <option value="" selected disabled>Please select a city</option>
            <option value="rabat">Rabat</option>
            <option value="tamesna">Tamesna</option>
          </select>
          <label class="outlined-floating-label-label" for="city-sel">Ville</label>
          <span
            class="text-red-500 text-xs"
            v-for="(err, value, index) in physicalPersonStore.errors.city"
            :key="index"
            >{{ err }}</span
          >
        </div>

        <div class="flex flex-col">
          <div class="relative flex w-full flex-wrap items-stretch">
            <input
              v-model="physicalPersonStore.formData.correspondance[0].postalCode"
              @input="postalCodeChanged"
              class="outlined-floating-label-inp peer"
              :class="`${
                physicalPersonStore.errors.postalCode.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="text"
              id="postal-code-inp"
              placeholder="Code postal"
            />
            <label class="outlined-floating-label-label" for="postal-code-inp">Code postal</label>
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
            >
              <font-awesome-icon
                :class="`${
                  physicalPersonStore.errors.postalCode.length !== 0 ? 'text-red-500' : ''
                }`"
                icon="fa-solid fa-location-dot"
              />
            </span>
            <span
              class="text-red-500 text-xs"
              v-for="(err, value, index) in physicalPersonStore.errors.postalCode"
              :key="index"
              >{{ err }}</span
            >
          </div>
        </div>

        <div class="flex flex-col col-span-2">
          <div class="relative flex w-full flex-wrap items-stretch">
            <input
              v-model="physicalPersonStore.formData.correspondance[0].emailAddress"
              @input="emailAddressChanged"
              class="outlined-floating-label-inp peer"
              :class="`${
                physicalPersonStore.errors.emailAddress.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="email"
              id="email-inp"
              placeholder="e.g. johndoe@example.com"
            />
            <label class="outlined-floating-label-label" for="email-inp">Email</label>
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
            >
              <font-awesome-icon
                :class="`${
                  physicalPersonStore.errors.emailAddress.length !== 0 ? 'text-red-500' : ''
                }`"
                icon="fa-solid fa-at"
              />
            </span>
            <span
              class="text-red-500 text-xs"
              v-for="(err, value, index) in physicalPersonStore.errors.emailAddress"
              :key="index"
              >{{ err }}</span
            >
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative flex w-full flex-wrap items-stretch">
            <input
              v-model="physicalPersonStore.formData.correspondance[0].phoneNumber"
              @input="phoneNumberChanged"
              class="outlined-floating-label-inp peer"
              :class="`${
                physicalPersonStore.errors.phoneNumber.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="text"
              id="phone-number-inp"
              placeholder="0XXXXXXXXX"
            />
            <label class="required outlined-floating-label-label" for="phone-number-inp"
              >N°Portable</label
            >
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
            >
              <font-awesome-icon
                :class="`${
                  physicalPersonStore.errors.phoneNumber.length !== 0 ? 'text-red-500' : ''
                }`"
                icon="fa-solid fa-mobile"
              />
            </span>
            <span
              class="text-red-500 text-xs"
              v-for="(err, value, index) in physicalPersonStore.errors.phoneNumber"
              :key="index"
              >{{ err }}</span
            >
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative flex w-full flex-wrap items-stretch">
            <input
              v-model="physicalPersonStore.formData.correspondance[0].fixNumber"
              @input="fixNumberChanged"
              class="outlined-floating-label-inp peer"
              :class="`${
                physicalPersonStore.errors.fixNumber.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="text"
              id="fix-number-inp"
              placeholder="0XXXXXXXXX"
            />
            <label class="outlined-floating-label-label" for="fix-number-inp">N°Fixe</label>
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
            >
              <font-awesome-icon
                :class="`${
                  physicalPersonStore.errors.fixNumber.length !== 0 ? 'text-red-500' : ''
                }`"
                icon="fa-solid fa-phone"
              />
            </span>
            <span
              class="text-red-500 text-xs"
              v-for="(err, value, index) in physicalPersonStore.errors.fixNumber"
              :key="index"
              >{{ err }}</span
            >
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative flex w-full flex-wrap items-stretch">
            <input
              v-model="physicalPersonStore.formData.correspondance[0].faxNumber"
              @input="faxNumberChanged"
              class="outlined-floating-label-inp peer"
              :class="`${
                physicalPersonStore.errors.faxNumber.length !== 0
                  ? 'border-red-500 text-red-500 focus:border-red-600 focus:outline-none focus:ring-red-500'
                  : ''
              }`"
              type="text"
              id="fax-number-inp"
              placeholder="0XXXXXXXXX"
            />
            <label class="outlined-floating-label-label" for="fax-number-inp">N°Faxe</label>
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
            >
              <font-awesome-icon
                :class="`${
                  physicalPersonStore.errors.faxNumber.length !== 0 ? 'text-red-500' : ''
                }`"
                icon="fa-solid fa-fax"
              />
            </span>
            <span
              class="text-red-500 text-xs"
              v-for="(err, value, index) in physicalPersonStore.errors.faxNumber"
              :key="index"
              >{{ err }}</span
            >
          </div>
        </div>

        <div>
          <button
            class="bg-teal-500 hover:bg-teal-400 text-white rounded-md shadow-md hover:shadow-lg w-full py-[calc(theme(spacing.2)-3px)] px-[calc(theme(spacing.3)-1px)]"
            type="submit"
            ref="correspondence-form-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  <div v-else>
    <CorrespondenceInformation />
  </div>
</template>
