<template>
  <div id="app">
    <nav
      v-if="user"
      class="
        flex
        justify-between
        items-center
        py-4
        px-6
        bg-white
        border-b-4 border-blue-theme-1
        sticky
        top-0
        z-50
        shadow-md
      "
    >
      <img class="w-12" src="./assets/logo_bar.png" />
      <div class="flex" @click="displayMenu">
        <div class="bg-red rounded-full">
          <img
            class="h-10 rounded-full shadow"
            src="https://i.pravatar.cc/150"
          />
        </div>
        <i class="fas fa-chevron-down pt-4"></i>
      </div>
      <div
        tabindex="0"
        ref="menu"
        @blur="onBlur"
        class="
          absolute
          right-2
          top-14
          
          p-2
          bg-white
          shadow-md
          rounded-md
          border-0
          hidden
        "
      >
        <ul>
          <li class="py-1 px-1">{{ user.username }}</li>
          <li
            class="py-1 px-1 hover:bg-blue-theme-1 hover:text-white  rounded-md"
            @click="logout"
          >
            Cerrar sesión
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userMenu: false,
    };
  },
  created() {
    if (localStorage.getItem("currentUser")) {
      const userData = JSON.parse(localStorage.getItem("currentUser"));
      this.$store.commit("setAuthUser", userData);
    }
  },

  computed: {
    user() {
      return this.$store.state.authUser;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("currentUser");
      this.$store.commit("setAuthUser", null);
      this.$router.push({ path: "/" });
    },
    displayMenu() {
      this.userMenu = true;
      this.$refs.menu.classList.remove("hidden");
      this.$refs.menu.focus();
    },
    onBlur() {
      this.$refs.menu.classList.add("hidden");
    },
  },
};
</script>
<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

body {
  @apply text-gray-600;
}
</style>
