<template>
  <div>
    <button @click="signInWithOAuth">Sign In with Google</button>
  </div>
</template>

<script setup>
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    return navigateTo("/");
  }
});

const supabase = useSupabaseClient();

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) console.log(error);
};
</script>
