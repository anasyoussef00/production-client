<template>
  <div class="grid grid-cols-3 gap-x-2 gap-y-4">
    <div class="grid grid-cols-3 col-span-full mt-3.5">
      <h3 class="col-span-2">
        <span class="text-slate-700-title">Informations Complémentaires</span>
      </h3>
      <button class="btn-bg-slate-500 h-8">OCR Permis</button>
    </div>

    <div class="relative">
      <select class="outlined-floating-label-inp peer" id="license-type-sel">
        <option value="" selected disabled>Please select a type</option>
        <option value="A">Classe A</option>
        <option value="B">Classe B</option>
        <option value="C">Classe C</option>
      </select>
      <label class="outlined-floating-label-label" for="license-type-sel">Type permis</label>
    </div>

    <div>
      <div class="relative flex w-full flex-wrap items-stretch">
        <input
          class="outlined-floating-label-inp peer"
          type="text"
          id="driving-license-number-inp"
          placeholder="N°Permis de conduite"
        />
        <label class="outlined-floating-label-label" for="driving-license-number-inp"
          >N°Permis de conduite</label
        >
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-up-9-1" />
        </span>
      </div>
    </div>

    <div class="relative">
      <input class="outlined-floating-label-inp peer" type="date" id="license-delivery-date-inp" />
      <label class="outlined-floating-label-label" for="license-delivery-date-inp"
        >Date délivrance</label
      >
    </div>

    <div class="relative">
      <select class="outlined-floating-label-inp peer" id="license-delivery-location-sel">
        <option value="" selected disabled>Please select a city</option>
        <option value="rabat">Rabat</option>
        <option value="tamesna">Tamesna</option>
      </select>
      <label class="outlined-floating-label-label" for="license-delivery-location-sel"
        >Lieu délivrance</label
      >
    </div>

    <div class="relative">
      <input class="outlined-floating-label-inp peer" type="date" id="previous-accident-date-inp" />
      <label class="outlined-floating-label-label" for="previous-accident-date-inp"
        >Date d'accident antérieur</label
      >
    </div>

    <div class="relative">
      <input class="outlined-floating-label-inp peer" type="date" id="disability-date-inp" />
      <label class="outlined-floating-label-label" for="disability-date-inp"
        >Date d'invalidité</label
      >
    </div>

    <div class="relative">
      <select class="outlined-floating-label-inp peer" id="sports-practice-sel">
        <option value="" selected disabled>Please select a sport</option>
        <option value="judo">Judo</option>
        <option value="football">Football</option>
      </select>
      <label class="outlined-floating-label-label" for="sports-practice-sel">Pratique sport</label>
    </div>

    <div class="col-span-2 relative">
      <div class="relative flex w-full flex-wrap items-stretch">
        <input
          class="outlined-floating-label-inp peer"
          type="text"
          id="business-rs-nature-inp"
          placeholder="Objet et nature de la relation d'affaire"
        />
        <label class="outlined-floating-label-label" for="business-rs-nature-inp"
          >Objet et nature de la relation d'affaire</label
        >
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-slate-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 py-[calc(theme(spacing.2)-1px)]"
        >
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </span>
      </div>
    </div>
  </div>
</template>
