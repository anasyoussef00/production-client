<!-- <script setup lang="ts">
import type { IContainerSlot } from './types/IContainerSlot';

defineProps<{
  cols: string;
  width: string;
  padding: string;
  gapX: string;
  gapY: string;
  margin?: string;
}>();
</script> -->

<script setup lang="ts">
import Member from '@/models/member';
import {usePhysicalPersonStore} from '@/stores/person/physical';
import Swal from 'sweetalert2';
import {isAxiosError} from 'axios';

defineProps<{
  title: string;
}>();

const physicalPersonStore = usePhysicalPersonStore();

const handleGetById = async () => {
  try {
    const member = await Member.getById(physicalPersonStore.formData.id);

    physicalPersonStore.fillMemberData(member!);
  } catch (err) {
    if (isAxiosError(err) && err.response && err.response.status == 404) {
      return Swal.fire({
        title: 'Oops...!',
        text: `Couldn't find a member with the given id: ${physicalPersonStore.formData.id}`,
        icon: 'error',
      });
    } else {
      return Swal.fire({
        title: 'Oops...!',
        text: `An error has occurred while trying to fetch for the user with the given id: ${physicalPersonStore.formData.id}`,
        icon: 'error',
        toast: true
      });
    }
  }
};

const handleUpdateOrCreate = async () => {
  try {
    await Member.getById(physicalPersonStore.formData.id);

    await Member.updateById(physicalPersonStore.formData.id, physicalPersonStore.formData);
    return Swal.fire({
      title: 'Nice!',
      text: `User with the ID "${physicalPersonStore.formData.id}" has been successfully updated.`,
      icon: 'success',
    });
  } catch (err) {
    if (isAxiosError(err)) {
      if (err.response) {
        if (err.response.status == 404) {
          await Member.store(physicalPersonStore.formData);
          return Swal.fire({
            title: 'Nice!',
            text: `User with the ID "${physicalPersonStore.formData.id}" has been successfully created.`,
            icon: 'success',
          });
        }
      }
    }
    console.error(err);
  }
};

const handleDelete = async () => {
  try {
    await Member.getById(physicalPersonStore.formData.id);

    const res = await Member.deleteById(physicalPersonStore.formData.id);
    if (res.status == 204) {
      Swal.fire({
        title: 'Nice!',
        text: `User with the ID "${physicalPersonStore.formData.id}" has been successfully deleted.`,
        icon: 'success',
      });
      Object.assign(physicalPersonStore.formData, {
        id: 0,
        intermediate: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        vip: '',
        country: '',
        cin: '',
        deliveryDate: '',
        deliveryLocation: '',
        cinValidUntil: '',
        nationality: '',
        moroccanNationality: '',
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
    }
  } catch (err) {
    if (isAxiosError(err)) {
      if (err.response) {
        if (err.response.status == 404) {
          return Swal.fire({
            title: 'Oops...!',
            text: `Couldn't find a member with the given id: ${physicalPersonStore.formData.id}`,
            icon: 'error',
          });
        }
      }
    }
    console.error(err);
  }
};
</script>

<template>
  <div class="bg-white border border-slate-200 py-5 px-4 shadow-lg rounded-lg m-7 w-5/6">
    <div class="mb-4 inline-flex gap-4 items-center">
      <div>
        <h1 class="font-bold text-2xl mb-1">{{ title }}</h1>
        <div class="border-b-4 border-teal-500 w-20"></div>
      </div>
      <div class="relative flex flex-wrap items-stretch">
        <input
            v-model="physicalPersonStore.formData.id"
            class="outlined-floating-label-inp peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            id="search-by-id-inp"
            placeholder="e.g. 7777"
            min="0"
        />
        <label class="outlined-floating-label-label" for="search-by-id-inp">ID</label>
        <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
        >
          <font-awesome-icon icon="fa-solid fa-search"/>
        </span>
      </div>
      <button
          @click="handleGetById"
          class="btn-bg-slate-500 w-20 h-8 flex items-center justify-between"
          :disabled="physicalPersonStore.formData.id <= 0"
      >
        Find
        <font-awesome-icon class="text-sm" icon="fa-solid fa-search"/>
      </button>
      <button
          @click="handleUpdateOrCreate"
          class="btn-bg-teal-500 w-44 h-8 flex items-center justify-between"
          :disabled="physicalPersonStore.formData.id <= 0"
      >
        Update/Create
        <span>
          <font-awesome-icon class="text-sm" icon="fa-solid fa-pen"/>/<font-awesome-icon
            class="text-sm"
            icon="fa-solid fa-plus"
        />
        </span>
      </button>
      <button
          @click="handleDelete"
          class="btn-bg-red-500 w-24 h-8 flex items-center justify-between"
          :disabled="physicalPersonStore.formData.id <= 0"
      >
        Delete
        <font-awesome-icon class="text-sm" icon="fa-solid fa-trash"/>
      </button>
    </div>
    <div
        class="grid grid-cols-1 lg:grid-cols-2 grid-flow-col grid-rows-2 gap-x-10 divide-x-2 divide-teal-500 divide-solid"
    >
      <slot></slot>
    </div>
    <!-- <div>
      <section v-for="slot in slots" :key="slot.id">
        <div class="flex flex-col gap-y-3">
          <slot
            v-for="(containerSlotChildren, index) in slots.filter(
              (s) => typeof s.containerSlotChildren !== 'undefined'
            )"
            :key="containerSlotChildren[index].id"
          ></slot>
        </div>
        <slot
          v-if="`${typeof slot.containerSlotChildren === 'undefined'}`"
          :name="slot.id"
          :id="slot.id"
        ></slot>
      </section>
    </div> -->
    <!-- <section v-for="slot in slots.filter((slot) => slot.flexable)" :key="slot.id">
      <div class="flex flex-col gap-y-3">
        <slot :name="slot.id" :id="slot.id"></slot>
      </div>
    </section> -->
  </div>
</template>
