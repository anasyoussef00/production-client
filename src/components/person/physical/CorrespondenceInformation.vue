<script setup lang="ts">
import { usePhysicalPersonStore } from '@/stores/person/physical';

const physicalPersonStore = usePhysicalPersonStore();
</script>

<template>
  <!-- <div class="grid grid-cols-2 gap-4">
    <div>
      <p class="font-bold">
        Numéro: <span>{{ physicalPersonStore.results.number }}</span>
      </p>
    </div>

    <div>
      <p class="font-bold">
        Voie: <span>{{ physicalPersonStore.results.way }}</span>
      </p>
    </div>

    <div>
      <p class="font-bold">
        Complement: <span>{{ physicalPersonStore.results.complement }}</span>
      </p>
    </div>

    <div>
      <p class="font-bold">
        Ville: <span>{{ physicalPersonStore.results.city }}</span>
      </p>
    </div>

    <div>
      <p class="font-bold">
        Code postal: <span>{{ physicalPersonStore.results.postalCode }}</span>
      </p>
    </div>

    <div>
      <p class="font-bold">
        Email: <span>{{ physicalPersonStore.results.emailAddress }}</span>
      </p>
    </div>

    <div>
      <p class="font-bold">
        N°Portable: <span>{{ physicalPersonStore.results.phoneNumber }}</span>
      </p>
    </div>

    <div v-if="physicalPersonStore.results.fixNumber.trim().length !== 0">
      <p class="font-bold">
        N°Fixe: <span>{{ physicalPersonStore.results.fixNumber }}</span>
      </p>
    </div>

    <div v-if="physicalPersonStore.results.faxNumber.trim().length !== 0">
      <p class="font-bold">
        N°Faxe: <span>{{ physicalPersonStore.results.faxNumber }}</span>
      </p>
    </div>
  </div> -->
  <!-- <div class="overflow-x-auto w-full">
    <table
      class="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"
    >
      <thead class="bg-gray-900">
        <tr class="text-white text-left">
          <th class="font-semibold text-sm uppercase px-6 py-4">Numéro</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Voie</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Complement</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Ville</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Code Postal</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Email</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">N°Portable</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">N°Fixe</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">N°Faxe</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4">
            {{ physicalPersonStore.results.number }}
          </td>
          <td class="px-6 py-4">
            {{ physicalPersonStore.results.way }}
          </td>
          <td class="px-6 py-4">
            {{ physicalPersonStore.results.complement }}
          </td>
          <td class="px-6 py-4">{{ physicalPersonStore.results.city }}</td>
          <td class="px-6 py-4">
            {{ physicalPersonStore.results.postalCode }}
          </td>
          <td class="px-6 py-4">
            {{ physicalPersonStore.results.emailAddress }}
          </td>
          <td class="px-6 py-4">
            {{ physicalPersonStore.results.phoneNumber }}
          </td>
          <td class="px-6 py-4">
            {{
              physicalPersonStore.results.fixNumber.trim().length === 0
                ? 'none'
                : physicalPersonStore.results.fixNumber
            }}
          </td>
          <td class="px-6 py-4">
            {{
              physicalPersonStore.results.faxNumber.trim().length === 0
                ? 'none'
                : physicalPersonStore.results.faxNumber
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div> -->
  <div class="grid grid-cols-3 gap-x-2 gap-y-4">
    <div>
      <label class="block text-sm font-medium" for="number-inp">Numéro</label>
      <input
        :value="physicalPersonStore.results.number"
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="number-inp"
        disabled
      />
    </div>

    <div>
      <label class="block text-sm font-medium" for="way-inp">Voie</label>
      <input
        :value="physicalPersonStore.results.way"
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="way-inp"
        disabled
      />
    </div>

    <div>
      <label class="block text-sm font-medium" for="complement-inp">Complement</label>
      <input
        :value="physicalPersonStore.results.complement"
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="complement-inp"
        disabled
      />
    </div>

    <div>
      <label class="block text-sm font-medium" for="city-inp">Ville</label>
      <input
        :value="physicalPersonStore.results.city"
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="city-inp"
        disabled
      />
    </div>

    <div>
      <label class="block text-sm font-medium" for="postal-code-inp">Code postal</label>
      <input
        :value="physicalPersonStore.results.postalCode"
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="postal-code-inp"
        disabled
      />
    </div>

    <div class="col-span-2">
      <label class="block text-sm font-medium" for="email-inp">Email</label>
      <input
        :value="physicalPersonStore.results.emailAddress"
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="email-inp"
        disabled
      />
    </div>

    <div>
      <label class="required block text-sm font-medium" for="phone-number-inp">N°Portable</label>
      <input
        :value="physicalPersonStore.results.phoneNumber"
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="phone-number-inp"
        disabled
      />
    </div>

    <div>
      <label class="block text-sm font-medium" for="fix-number-inp">N°Fixe</label>
      <input
        :value="
          physicalPersonStore.results.fixNumber.length !== 0
            ? physicalPersonStore.results.fixNumber
            : 'none'
        "
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="fix-number-inp"
        disabled
      />
    </div>

    <div>
      <label class="block text-sm font-medium" for="fax-number-inp">N°Faxe</label>
      <input
        :value="
          physicalPersonStore.results.faxNumber.length !== 0
            ? physicalPersonStore.results.faxNumber
            : 'none'
        "
        class="py-1 px-2 placeholder-slate-300 text-slate-700 relative bg-slate-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
        type="text"
        id="fax-number-inp"
        disabled
      />
    </div>

    <div class="flex items-center mt-4">
      <div class="relative flex w-full flex-wrap items-stretch">
        <button
          @click="physicalPersonStore.addNew"
          class="py-0.5 px-1 bg-teal-500 hover:bg-teal-400 text-white rounded-md shadow-md hover:shadow-lg relative w-full"
          type="button"
        >
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-white bg-transparent rounded text-base items-center justify-center w-8 right-0 py-0.5"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </span>
          Add New
        </button>
      </div>
    </div>
  </div>
</template>
