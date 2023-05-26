<script setup lang="ts">
import BgSlateContainer from '@/components/containers/BgSlateContainer.vue';
import MemberInformationForm from '@/components/person/physical/MemberInformationForm.vue';
import ProfessionForm from '@/components/person/physical/ProfessionForm.vue';
import AffiliateInformationForm from '@/components/person/physical/AffiliateInformationForm.vue';
import CorrespondenceForm from '@/components/person/physical/CorrespondenceForm.vue';
import FurtherInformationForm from '@/components/person/physical/FurtherInformationForm.vue';
import type { IContainerButton } from '@/components/containers/types/IContainerButton';
import { usePhysicalPersonStore } from '@/stores/person/physical/index';
import { ref } from 'vue';
import BgWhiteContainerFlexible from '@/components/containers/BgWhiteContainerFlexible.vue';
import type { IContainerSlot } from '@/components/containers/types/IContainerSlot';

const physicalPersonStore = usePhysicalPersonStore();

const slots: IContainerSlot[] = [
  {
    id: 'member-information',
    title: 'Informations Sociétaire',
  },
  {
    id: 'flexable-area',
    title: 'Flexable Area',
    containerSlotChildren: [
      {
        id: 'correspondence',
        title: 'Correspondance',
        flexable: true,
      },
      {
        id: 'further-information',
        title: 'Informations Complémentaires',
        flexable: true,
      },
    ],
  },
  {
    id: 'affiliate-information',
    title: "Informations d'affiliation",
  },
  {
    id: 'profession',
    title: 'Profession',
  },
];
</script>

<template>
  <!-- <div class="grid grid-cols-2 gap-2 my-2 mx-2.5">
    <BgSlateContainer title="Informations Sociétaire">
      <MemberInformationForm />
    </BgSlateContainer>
    <BgSlateContainer title="Correspondance" :btn="physicalPersonStore.button">
      <CorrespondenceForm />
    </BgSlateContainer>
  </div>
  <div class="grid grid-cols-2 gap-2 my-2 mx-2.5">
    <BgSlateContainer title="Informations d'affiliation">
      <AffiliateInformationForm />
    </BgSlateContainer>
    <BgSlateContainer title="Profession">
      <ProfessionForm />
    </BgSlateContainer>
  </div>
  <div class="grid grid-cols-2 gap-2 my-2 mx-2.5">
    <BgSlateContainer title="Informations Complémentaires">
      <FurtherInformationForm />
    </BgSlateContainer>
  </div> -->
  <div class="min-h-screen flex justify-center items-center">
    <BgWhiteContainerFlexible title="Nouveau Sociétaire (Personne Physique)">
      <div class="row-span-2">
        <MemberInformationForm />
        <!-- <div class="inline-flex flex-col gap-y-5 pl-10"> -->
        <!-- <div class="row-span-2"> -->
        <AffiliateInformationForm class="mt-8" />
        <!-- <ProfessionForm /> -->
      </div>
      <!-- </div> -->
      <div class="row-span-2 pl-10">
        <CorrespondenceForm class="mb-2" />
        <FurtherInformationForm />
      </div>
      <!-- <div class="inline-flex flex-col gap-y-3">
      </div> -->
      <!-- </div> -->
    </BgWhiteContainerFlexible>
  </div>
</template>
