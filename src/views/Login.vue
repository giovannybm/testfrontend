<template>
  <section
    class="
      login__container
      h-screen
      v-screen
      flex flex-wrap
      content-center
      justify-center
    "
  >
    <div
      class="
        login_form
        relative
        pt-5
        px-8
        pb-12
        shadow
        mx-auto
        flex flex-col
        rounded-lg
      "
    >
      <div class="flex-1 w-72">
        <img
          class="mb-3 mx-auto"
          style="height: 150px"
          src="../assets/images/logo.png"
          alt=""
        />
        <span class="flex shadow-md mb-5 text-xs">
          <span
            class="
              bg-blue-theme-1
              w-16
              font-bold
              text-center text-gray-200
              p-2
              px-5
              rounded-l
            "
            ><i class="fas fa-user"></i
          ></span>
          <input
            class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
            type="text"
            placeholder="user@example.com"
            v-model="userInput"
            @focus="clearError"
          />
        </span>
        <span class="flex shadow-md mb-5 text-xs relative">
          <span
            class="
              bg-blue-theme-1
              w-16
              font-bold
              text-center text-gray-200
              p-2
              px-5
              rounded-l
            "
            ><i class="fas fa-key"></i></span
          ><input
            class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
            type="password"
            placeholder="pass"
            v-model="passwdInput"
            @focus="clearError"
            ref="inputPasswd"
          />
          <i
            @mousedown="revealPasswd"
            @mouseup="unrevealPasswd"
            class="fas fa-eye absolute right-0 pr-3 pt-3"
          ></i>
        </span>

        <span
          class="
            bg-blue-theme-1
            hover:bg-blue-theme-2 hover:text-gray-100
            mt-3
            text-white
            block
            text-center
            p-3
            px-4
            text-sm
            rounded-lg
            cursor-pointer
            font-bold
            shadow-md
          "
          @click="login"
          >Login</span
        >
      </div>

      <div
        class="
          bg-yellow-400
          rounded-b-lg
          mt-4
          p-2
          absolute
          left-0
          bottom-0
          w-full
          text-center text-sm text-red-800
        "
        v-if="loginError"
      >
        {{ this.errorText }}
      </div>
    </div>

    <footer
      class="
        fixed
        bottom-0
        left-0
        w-full
        text-white text-center text-sm
        bg-gradient-to-b
        from-blue-theme-0
        to-blue-theme-2
        flex flex-col
        sm:flex-row
        justify-between
        content-center
        items-center
      "
    >
      <div></div>
      <div class="p-2">
        <p>Usuario: Administrador, Contraseña: Administrador</p>
        <p>Usuario: Coordinador, Contraseña: Coordinador</p>
      </div>
      <div class="text-2xl h-full items-center pr-4 pb-1">
        <a href="https://github.com/lexetam/testfrontend"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </footer>
  </section>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      userInput: null,
      passwdInput: null,
      loginError: false,
      errorText: null,
    };
  },
  computed: {},
  methods: {
    login() {
      if ((this.userInput != null) & (this.passwdInput != null)) {
        const userData = this.$store.getters.userValidation(this.userInput);
        if (userData != null) {
          if (userData.passwd === this.passwdInput) {
            const userData = {};
            userData.username = this.userInput;
            userData.role = this.userInput;
            localStorage.setItem("currentUser", JSON.stringify(userData));
            this.$store.commit("setAuthUser", userData);
            if (userData.role == "Administrador") {
              this.$router.replace({ path: "administrador" });
            } else if (userData.role == "Coordinador") {
              this.$router.replace({ path: "coordinador" });
            }
          } else {
            this.loginError = true;
            this.errorText = "Error, Credenciales Incorrectas";
          }
        } else {
          this.loginError = true;
          this.errorText = "Error, Credenciales Incorrectas";
        }
      } else {
        this.loginError = true;
        this.errorText = "Error, Complete los campos";
      }
    },
    clearError() {
      this.errorText = null;
      this.loginError = false;
    },
    revealPasswd(e) {
      e.target.classList.add("text-blue-theme-2");
      this.$refs.inputPasswd.type = "text";
    },
    unrevealPasswd(e) {
      e.target.classList.remove("text-blue-theme-2");
      this.$refs.inputPasswd.type = "password";
    },
  },
};
</script>
<style>
.login__container {
  background-color: rgba(255, 255, 255, 0.438);
  background-image: url("../assets/images/bg.jpg");
}
.login_form {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
