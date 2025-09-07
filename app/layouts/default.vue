<template>
  <div>
    <header>
      <ul>
        <NuxtLink to="/">Inicio</NuxtLink>
        <NuxtLink style="margin: 0px 15px" to="/protected/">Protected</NuxtLink>
        <NuxtLink to="/login/">Login</NuxtLink>
      </ul>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
