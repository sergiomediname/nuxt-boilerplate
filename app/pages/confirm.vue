<template>
  <div>Waiting for login...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
console.log(user);

watch(
  user,
  async () => {
    if (user.value) {
      // Save user in database
      await $fetch("/api/auth", {
        method: "PUT",
        body: {
          user: user.value,
        },
      });

      // Redirect to protected page
      return navigateTo("/");
    }
  },
  { immediate: true }
);
</script>
