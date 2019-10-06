<template>
  <div class ="sign-up">
    <v-form class="sign-up sign-up-form" @submit.prevent="signup">
      <h2 class="text--center">Inscription</h2>

      <h3 class="text--center">
      </h3>
      <div class="form-input">
        <v-text-field
        label="Prénom"
        :v-model="firstName"
        tabindex="1"
        required 
        aria-placeholder="Prénom"
        v-model="firstName"
        >
        </v-text-field>
      </div>
      <div class="form-input">
        <v-text-field
        label="Nom"
        tabindex="1"
        required 
        aria-placeholder="Nom"
        v-model="lastName"

        >
        </v-text-field>
      </div>
      <div class="form-input">
      <birthday/> 
      </div>
      <div class="form-input">
        <v-text-field
        label="email"
        tabindex="1"
        required 
        :rules="emailRules"
        aria-placeholder="Nom"
        :v-model="email"

        >
        </v-text-field>
      </div>
      <div class="form-input">
        <v-text-field
        class="t-new-password"
          aria-placeholder="mot de passe"
          @click:append="showPassword = !showPassword"
          hint="Au moins 8 caractères"
          label="mot de passe"
          name="password"
          :rules="passwordRules"
          tabindex="2"
          :type="showPassword ? 'text' : 'password'"
          v-model="newPassword"
        >
        </v-text-field>
      </div>
      <div class="form-input">
        <v-text-field
          class="t-new-password"
          aria-placeholder="confirmation du mot de passe"
          @click:append="showPassword = !showPassword"
          hint="Au moins 8 caractères"
          label="confirmation du mot de passe"
          name="password"
          :rules="passwordRules"
          tabindex="2"
          :type="showPassword ? 'text' : 'password'"
          v-model="newPassword"
        >
        </v-text-field>
      </div>

      <v-btn>
        Sign Up
      </v-btn>

    </v-form>
  </div>
</template>

<script>
import Birthday from './Birthday'


export default {
  components:  {
    Birthday,
  },
  data () {
    return {

    }
  },

  computed: {
    name() {
      return this.data 
    }
  },

  methods: {
    
  },
}
</script>

<style lang="postcss" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sign-up-form {
  margin: 50px;
  z-index: 1;
  background: #fff;
  border-radius: 10px;
  padding: 4.5em 4.5em 3em 4.5em;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  
}

.form-input {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 599px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.submit-button {
  width: 100%;
}
</style>
