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
       
        p-10
        pt-5
        shadow
        mx-auto
        flex
        rounded-lg
      "
    >
      <div class="flex-1">
        <img
          class="mb-3 mx-auto"
          style="height: 150px"
          src="../assets/logo.png"
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
            ><i class="fas fa-user"></i></span
          ><input
            class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
            type="text"
            placeholder="someonespecial@example.com"
            v-model="userInput"
          />
        </span>
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
            ><i class="fas fa-key"></i></span
          ><input
            class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
            type="password"      
            placeholder="pass"
            v-model="passwdInput"
          />
        </span>
      
        <span
          class="
            bg-blue-theme-1            
            hover:bg-blue-theme-2
            hover:text-gray-100
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
    </div>

    <footer
      class="
        fixed
        bottom-0
        left-0        
        h-20
        w-full
        text-white text-center
        bg-gradient-to-b from-blue-theme-0 to-blue-theme-2
        flex items-center
        justify-center
      "
    >
    <div>
      <p>Usuario: Administrador, Contraseña: Administrador</p>
      <p>Usuario: Coordinador, Contraseña: Coordinador</p>
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
          }
        }
      }
    },
  },
};
</script>
<style >
.login__container{
    background-color: rgba(255, 255, 255, 0.438);
  background-image: url('../assets/bg.jpg');

}
.login_form{
  background-color: rgba(255, 255, 255, 0.9);
  
  backdrop-filter: blur(25px);

}
</style>