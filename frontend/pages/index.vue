<template>
  <div class="flex flex-col space-y-8">
    <form class="flex flex-row space-x-4" data-shade="900">
      <button class="btn variant-solid sz-sm intent-primary">Generate</button>
      <div class="field">
        <input type='email' class="input variant-mixed sz-md" placeholder="Your email"/>
      </div>
    </form>

    <div class="card variant-mixed max-w-xs" data-shade="900">
      <span class="text-caption text-xs">Great UX</span>
      <h3 class="mt-2 text-title text-sm font-medium">Realtime insights</h3>
      <p class="text-sm mt-3">Provident fugit vero voluptate. dolores voluptates inventore nisi.</p>

      <div class="mt-16">
        <div class="text-caption text-xs">Loading 60%</div>
        <div class="mt-3 progress sz-sm relative">
          <div class="progress-indicator bg-gradient-to-r from-primary-600 to-accent-500 w-[60%]"></div>
        </div>
        <div class="w-[60%] blur-sm h-6 bg-gradient-to-b from-accent-500/10 to-transparent"></div>
      </div>
    </div>
  </div>
</template>