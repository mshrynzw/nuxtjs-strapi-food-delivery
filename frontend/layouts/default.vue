<template>
  <div class="bg-white dark:bg-gray-950 min-h-screen">
    <Header/>
    <div class="overflow-hidden">
      <section class="relative">
        <div class="relative flex justify-center py-24 lg:py-28">
          <slot/>
        </div>
      </section>
    </div>
  </div>
</template>