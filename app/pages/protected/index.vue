<template>
  <div>
    <div>
      Protected - <span v-if="user">{{ user?.email }}</span>
    </div>
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  else navigateTo("/login");
};
</script>
