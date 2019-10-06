<template>
  <div class ="sign-up">
<<<<<<< HEAD
    <v-form class="sign-up sign-up-form" @submit.prevent="signup">
=======
    <v-form v-model="validSignUp" class="sign-up sign-up-form" @submit.prevent="signup">
>>>>>>> :sparkles: Add Sign up for user
      <h2 class="text--center">Inscription</h2>

      <h3 class="text--center">
      </h3>
<<<<<<< HEAD
=======
      *Champs obligatoires
>>>>>>> :sparkles: Add Sign up for user
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
<<<<<<< HEAD
=======
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
>>>>>>> :sparkles: Add Sign up for user
          @click:append="showPassword = !showPassword"
          hint="Au moins 8 caractères"
          label="mot de passe"
          name="password"
          :rules="passwordRules"
          tabindex="2"
          :type="showPassword ? 'text' : 'password'"
<<<<<<< HEAD
          v-model="newPassword"
=======
          v-model="password"
>>>>>>> :sparkles: Add Sign up for user
        >
        </v-text-field>
      </div>
      <div class="form-input">
        <v-text-field
          class="t-new-password"
          aria-placeholder="confirmation du mot de passe"
<<<<<<< HEAD
=======
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
>>>>>>> :sparkles: Add Sign up for user
          @click:append="showPassword = !showPassword"
          hint="Au moins 8 caractères"
          label="confirmation du mot de passe"
          name="password"
<<<<<<< HEAD
          :rules="passwordRules"
          tabindex="2"
          :type="showPassword ? 'text' : 'password'"
          v-model="newPassword"
=======
          :rules="confirmPasswordRules"
          tabindex="2"
          :type="showPassword ? 'text' : 'password'"
          v-model="confirmPassword"
>>>>>>> :sparkles: Add Sign up for user
        >
        </v-text-field>
      </div>

<<<<<<< HEAD
      <v-btn>
        Sign Up
=======
      <v-btn 
      type="submit"
      class="submit-btn"
      :disabled="isSendingSignUp"
      :aria-disabled="isSendingSignUp"
      >
        M'inscrire
>>>>>>> :sparkles: Add Sign up for user
      </v-btn>

    </v-form>
  </div>
</template>

<script>
import Birthday from './Birthday'
<<<<<<< HEAD
=======
import { email as emailRegex , strongEnoughPassword } from '@/util/regex'
import { SIGNUP_REQUEST } from '@/store'

>>>>>>> :sparkles: Add Sign up for user


export default {
  components:  {
    Birthday,
  },
  data () {
    return {
<<<<<<< HEAD
=======
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      validSignUp: false,
      emailRules: [
        v => v !== '' || ('Veuillez renseigner une adresse email'),
        v => emailRegex.test(v) || ('Veuillez renseigner une adresse email valide'),
      ],
      passwordRules: [
        value => !!value || ('Veuillez renseigner votre mot de passe'),
        value => strongEnoughPassword.every(regex => regex.test(value)) ||
          'Veuillez entrez un mot de passe fort',
      ],
      confirmPasswordRules: [
        value => !!value || ('Veuillez confirmer votre mot de passe'),
      ],
>>>>>>> :sparkles: Add Sign up for user

    }
  },

  computed: {
<<<<<<< HEAD
    name() {
      return this.data 
=======
    isSendingSignUp() {
      console.log('123')
      return this.$store.state.user.isSendingSignUp
>>>>>>> :sparkles: Add Sign up for user
    }
  },

  methods: {
<<<<<<< HEAD
=======
    async signup () {
      if (!this.validSignUp) {
        return this.$store.dispatch('Veuillez remplir le formulaire ' )
      }
      const {
        lastName,
        firstName,
        email,
        password,
        confirmPassword,   
      } = this

      try {
        const response = await this.$store.dispatch(SIGNUP_REQUEST, {
          lastName,
        firstName,
        email,
        password,
        confirmPassword, 
        })
        console.log('456')
      }catch (error) {
        this.$store.dispatch( ' blabla')
      }
    }
>>>>>>> :sparkles: Add Sign up for user
    
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
