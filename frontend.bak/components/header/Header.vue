<template>
  <header>
    <nav
        class="fixed z-20 w-full overflow-hidden rounded-b-lg border-x border-b bg-white/80 backdrop-blur border-[--ui-light-border-color] dark:bg-gray-950/75 dark:shadow-gray-950/10 dark:border-[--ui-dark-border-color] dark:shadow-md">
      <div class="m-auto max-w-6xl px-6 2xl:px-0">
        <div class="flex flex-wrap items-center justify-between py-2 sm:py-4">
          <div class="flex w-full items-center justify-between lg:w-auto">
            <HeaderLogo/>
            <div class="flex lg:hidden">
              <HeaderHumberger/>
            </div>
          </div>
          <div
              class="h-0 w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:space-y-0 lg:flex lg:h-fit lg:w-fit">
            <div class="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:mt-0 lg:pr-4">
              <HeaderMenu/>
            </div>
            <div
                class="flex w-full flex-col items-center gap-2 border-t pt-6 pb-4 space-y-2 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] lg:space-y-0 lg:w-fit lg:flex-row lg:border-t-0 lg:border-l lg:pt-0 lg:pb-0 lg:pl-2">
              <HeaderAuth/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>