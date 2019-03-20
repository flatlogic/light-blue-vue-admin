<template>
  <div class="login-page">
    <b-container>
      <Widget class="mx-auto" title="<h3 class='mt-0 fw-normal text-center'>Login to your Web App</h3>" customHeader>
        <p class="text-center login-info mb-0 mt">
          Use Facebook, Twitter or your email to sign in.
        </p>
        <p class="text-center login-info">
          Don't have an account? Sign up now!
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <b-form-group label="Email" label-for="username-input">
            <b-input-group class="input-group-transparent">
              <b-input-group-text slot="prepend"><i class="fa fa-user text-white"></i></b-input-group-text>
              <b-form-input id="username-input"
                            class="input-transparent pl-0"
                            type="text"
                            v-model="form.email"
                            required
                            placeholder="Your Email" />
            </b-input-group>
          </b-form-group>
          <b-form-group label="Password" label-for="password-input">
            <b-input-group class="input-group-transparent">
              <b-input-group-text slot="prepend"><i class="fa fa-lock text-white"></i></b-input-group-text>
              <b-form-input id="password-input"
                            class="input-transparent pl-0"
                            type="text"
                            v-model="form.password"
                            required
                            placeholder="Your Password" />
            </b-input-group>
          </b-form-group>
          <div class="widget-middle-overflow bg-widget mt-4 px-4 py-3">
            <b-button class="btn-block btn-lg fs-normal" type="submit" variant="danger">
              <span class="login-circle"><i class="fa fa-caret-right"></i></span>
              Sign in
            </b-button>
            <a href="#" class="text-center text-gray w-100 d-block mt-4">Forgot Username or Password?</a>
          </div>
          <div class="widget-bottom-overflow">
            <b-button class="btn-block btn-lg fs-normal" type="cancel" variant="primary">
              <i class="fa fa-facebook-square mr-2 fa-lg"></i>
              Login with Facebook
            </b-button>
          </div>
        </form>
      </Widget>
    </b-container>
    <footer class="footer">
      Light Blue Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" target="_blank">Flatlogic</a>
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'LoginPage',
  components: { Widget },
  data() {
    return {
      errorMessage: null,
      form: {
        email: '',
        name: '',
      }
    };
  },
  methods: {
    login() {
      const username = this.form.email;
      const password = this.form.password;

      if (username.length !== 0 && password.length !== 0) {
        window.localStorage.setItem('authenticated', true);
        this.$router.push('/app/dashboard');
      }
    },
  },
  created() {
    if (window.localStorage.getItem('authenticated') === 'true') {
      this.$router.push('/app/dashboard');
    }
  },
};
</script>

<style src="./Login.scss" lang="scss" scoped />
