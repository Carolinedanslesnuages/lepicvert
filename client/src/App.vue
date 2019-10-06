<template>
  <v-app>
    <v-content>
      <sign-up/>
    </v-content>
  </v-app>
</template>

<script>
import SignUp from './components/SignUp';

export default {
  name: 'App',
  components: {
    SignUp,
  },
  data: () => ({
    //
  }),
};
</script>
