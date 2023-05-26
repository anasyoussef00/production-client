<script setup lang="ts">
import { usePhysicalPersonStore } from '@/stores/person/physical';
import { EGender } from '@/types';

const physicalPersonStore = usePhysicalPersonStore();

const dateChanged = () => console.log(physicalPersonStore.formData.birthDate);
</script>

<template>
  <div class="grid grid-cols-2 gap-x-5 gap-y-3">
    <div class="grid grid-cols-3 col-span-full">
      <h3 class="md:mb-4 col-span-2">
        <span class="text-slate-700-title">Informations Sociétaire</span>
      </h3>
      <button class="btn-bg-slate-500 h-8">OCR C.I.N</button>
    </div>
    <div class="relative">
      <select
        v-model="physicalPersonStore.formData.intermediate"
        class="outlined-floating-label-inp peer"
        id="intermediate-sel"
      >
        <option value="" selected disabled>Please select an intermediate</option>
        <option value="CIE-MAMDA">CIE MAMDA</option>
        <option value="CIE-MCMA">CIE MCMA</option>
      </select>
      <label class="required outlined-floating-label-label" for="intermediate-sel"
        >Intermédiaire</label
      >
    </div>

    <!-- <input
        class="bg-white py-1 px-2 rounded-md shadow-sm focus:outline-none border border-gray-200 w-full"
        type="text"
        id="first-name-inp"
        placeholder="e.g. John"
        /> -->
    <div class="relative flex w-full flex-wrap items-stretch">
      <input
        v-model="physicalPersonStore.formData.firstName"
        class="outlined-floating-label-inp peer"
        type="text"
        id="first-name-inp"
        placeholder="e.g. John"
      />
      <label class="required outlined-floating-label-label" for="first-name-inp">Prénom</label>
      <span
        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
      >
        <font-awesome-icon icon="fa-solid fa-user" />
      </span>
    </div>

    <div class="relative flex w-full flex-wrap items-stretch">
      <input
        v-model="physicalPersonStore.formData.lastName"
        class="outlined-floating-label-inp peer"
        type="text"
        id="last-name-inp"
        placeholder="e.g. Doe"
      />
      <label class="required outlined-floating-label-label" for="last-name-inp">Nom</label>
      <span
        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
      >
        <font-awesome-icon icon="fa-solid fa-user" />
      </span>
    </div>

    <div class="relative">
      <input
        v-model="physicalPersonStore.formData.birthDate"
        class="outlined-floating-label-inp peer"
        type="date"
        id="birthdate-inp"
        @input="dateChanged"
      />
      <label class="required outlined-floating-label-label" for="birthdate-inp"
        >Date de naissance</label
      >
    </div>

    <!-- <div class="relative">
      <select class="outlined-floating-label-inp peer" id="gender-sel">
        <option value="" selected disabled>Please select a gender</option>
        <option value="M">Masculin</option>
        <option value="F">Feminin</option>
      </select>
      <label class="required outlined-floating-label-label" for="gender-sel">Sexe</label>
    </div> -->

    <div
      class="inline-flex items-center border border-gray-200 rounded-lg py-2 px-3 overflow-hidden select-none"
    >
      <div class="inline-flex justify-between items-center">
        <span class="my-auto text-sm mr-5 text-gray-500">Sexe:</span>

        <div class="inline-flex items-center">
          <label class="inline-flex items-center cursor-pointer">
            <input
              v-model="physicalPersonStore.formData.gender"
              class="my-auto transform scale-100 accent-teal-500"
              type="radio"
              name="gender"
              :value="EGender.Male"
            />
            <div class="px-2 font-medium text-sm">Masculin</div>
          </label>

          <label class="inline-flex items-center cursor-pointer">
            <input
              v-modell="physicalPersonStore.formData.gender"
              class="my-auto transform scale-100 accent-teal-500"
              type="radio"
              name="gender"
              :value="EGender.Female"
            />
            <div class="px-2 font-medium text-sm">Feminin</div>
          </label>
        </div>
      </div>
    </div>

    <div
      class="inline-flex items-center border border-gray-200 rounded-lg py-2 px-3 overflow-hidden select-none"
    >
      <div class="inline-flex justify-between items-center">
        <span class="my-auto text-sm mr-5 text-gray-500">V.I.P:</span>

        <div class="inline-flex items-center">
          <label class="inline-flex items-center cursor-pointer">
            <input
              v-model="physicalPersonStore.formData.vip"
              class="my-auto transform scale-100 accent-teal-500"
              type="radio"
              name="vip"
              value="Y"
            />
            <div class="px-2 font-medium text-sm">Oui</div>
          </label>

          <label class="inline-flex items-center cursor-pointer">
            <input
              v-model="physicalPersonStore.formData.vip"
              class="my-auto transform scale-100 accent-teal-500"
              type="radio"
              name="vip"
              value="Y"
            />
            <div class="px-2 font-medium text-sm">Non</div>
          </label>
        </div>
      </div>
    </div>

    <!-- <div class="relative">
      <select class="outlined-floating-label-inp peer" id="vip-sel">
        <option value="" selected disabled>Please select an answer</option>
        <option value="Y">Oui</option>
        <option value="N">Non</option>
      </select>
      <label class="block outlined-floating-label-label" for="vip-sel">V.I.P</label>
    </div> -->

    <div class="relative">
      <select
        v-model="physicalPersonStore.formData.country"
        class="outlined-floating-label-inp peer"
        id="native-country-sel"
      >
        <option value="" selected disabled>Please select a country</option>
        <option value="morocco">Morocco</option>
        <option value="spain">Spain</option>
        <option value="greece">Greece</option>
      </select>
      <label class="required outlined-floating-label-label" for="native-country-sel"
        >Pays de naissance</label
      >
    </div>

    <div>
      <div class="relative flex w-full flex-wrap items-stretch">
        <input
          v-model="physicalPersonStore.formData.cin"
          class="outlined-floating-label-inp peer"
          type="text"
          id="cin-inp"
          placeholder="e.g. XX000000"
        />
        <label class="required outlined-floating-label-label" for="cin-inp">C.I.N</label>
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
        >
          <font-awesome-icon icon="fa-solid fa-id-card" />
        </span>
      </div>
    </div>

    <div class="relative">
      <input
        v-model="physicalPersonStore.formData.deliveryDate"
        class="outlined-floating-label-inp peer"
        type="date"
        id="delivery-date-inp"
      />
      <label class="required outlined-floating-label-label" for="delivery-date-inp"
        >Date de délivrance</label
      >
    </div>

    <div class="relative flex w-full flex-wrap items-stretch">
      <input
        v-model="physicalPersonStore.formData.deliveryLocation"
        class="outlined-floating-label-inp peer"
        type="text"
        id="delivery-location-inp"
        placeholder="e.g. Rabat"
      />
      <label class="required outlined-floating-label-label" for="delivery-location-inp"
        >Lieu de délivrance</label
      >
      <span
        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
      >
        <font-awesome-icon icon="fa-solid fa-map" />
      </span>
    </div>

    <div class="relative">
      <input
        v-model="physicalPersonStore.formData.cinValidUntil"
        class="outlined-floating-label-inp peer"
        type="date"
        id="cin-valid-until-inp"
      />
      <label class="required outlined-floating-label-label" for="cin-valid-until-inp"
        >C.I.N Valable jusqu'au</label
      >
    </div>

    <div>
      <div class="relative flex w-full flex-wrap items-stretch">
        <input
          v-model="physicalPersonStore.formData.nationality"
          class="outlined-floating-label-inp peer"
          type="text"
          id="nationality-inp"
          placeholder="e.g. Marocain"
        />
        <label class="required outlined-floating-label-label" for="nationality-inp"
          >Nationalité</label
        >
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
        >
          <font-awesome-icon icon="fa-solid fa-flag-usa" />
        </span>
      </div>
    </div>

    <div class="relative">
      <select
        v-model="physicalPersonStore.formData.moroccanNationality"
        class="outlined-floating-label-inp peer"
        id="moroccan-nationality-sel"
      >
        <option value="" selected disabled>Please select an answer</option>
        <option value="Y">Oui</option>
        <option value="N">Non</option>
      </select>
      <label class="outlined-floating-label-label" for="moroccan-nationality-sel"
        >Nationalité Marocaine</label
      >
    </div>

    <div class="relative flex w-full flex-wrap items-stretch">
      <input
        v-model="physicalPersonStore.formData.fullFatherName"
        class="outlined-floating-label-inp peer"
        type="text"
        id="full-father-name-inp"
        placeholder="e.g. John Doe"
      />
      <label class="required outlined-floating-label-label" for="full-father-name-inp"
        >Nom complet du pére</label
      >
      <span
        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
      >
        <font-awesome-icon icon="fa-solid fa-user" />
      </span>
    </div>

    <div class="relative flex w-full flex-wrap items-stretch">
      <input
        v-model="physicalPersonStore.formData.fullMotherName"
        class="outlined-floating-label-inp peer"
        type="text"
        id="full-mother-name-inp"
        placeholder="e.g. Jane Doe"
      />
      <label class="required outlined-floating-label-label" for="full-mother-name-inp"
        >Nom complet du mére</label
      >
      <span
        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
      >
        <font-awesome-icon icon="fa-solid fa-user" />
      </span>
    </div>

    <div class="relative flex w-full flex-wrap items-stretch">
      <select
        v-model="physicalPersonStore.formData.profession.title"
        class="outlined-floating-label-inp peer"
        id="profession-sel"
      >
        <option value="" selected disabled>Please select a profession</option>
        <option value="cs">Informaticien</option>
        <option value="animator">Animateur</option>
      </select>
      <label class="required outlined-floating-label-label" for="profession-sel">Profession</label>
    </div>
  </div>
</template>
