<template>
  <h1>Сводка</h1>
  <div class="login">
    <button v-if="!isAuthenticated" @click="accountIn">Log in</button>
    <button v-if="isAuthenticated" @click="accountOut">Log out</button>
  </div>
  <div class="user">
    <pre v-if="isAuthenticated">
      <code>{{ user }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const {
  loginWithRedirect,
  logout,
  user,
  isAuthenticated,
} = useAuth0();

const accountIn = () => {
  loginWithRedirect();
};

const accountOut = () => {
  logout({ returnTo: window.location.origin });
};
</script>
