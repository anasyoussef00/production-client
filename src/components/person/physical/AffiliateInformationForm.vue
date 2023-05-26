<template>
  <div class="grid grid-cols-3 gap-x-2 gap-y-4">
    <h3 class="col-span-full">
      <span class="text-slate-700-title">Informations d'affiliation</span>
    </h3>
    <div class="relative">
      <select class="outlined-floating-label-inp peer" id="member-category-sel">
        <option value="" selected disabled>Please select a category</option>
        <option value="EFP">Enseignant formation professionnelle</option>
      </select>
      <label class="outlined-floating-label-label" for="member-category-sel"
        >Catégorie Sociétaire</label
      >
    </div>

    <div class="relative">
      <select class="outlined-floating-label-inp peer" id="affiliate-group-sel">
        <option value="" selected disabled>Please select a group</option>
        <option value="MAMDA">MAMDA</option>
        <option value="MCMA">MCMA</option>
      </select>
      <label class="outlined-floating-label-label" for="affiliate-group-sel"
        >Groupe d'affiliation</label
      >
    </div>

    <div class="col-span-full md:col-span-1">
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          class="outlined-floating-label-inp peer"
          type="text"
          id="membership-inp"
          placeholder="Référence d'appartenance"
        />
        <label class="outlined-floating-label-label" for="membership-inp">Affiliation</label>
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
        >
          <font-awesome-icon icon="fa-solid fa-barcode" />
        </span>
      </div>
    </div>
  </div>
</template>
