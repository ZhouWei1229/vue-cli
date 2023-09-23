<template>
  <header class="web-header">
    <div class="header-content">
      <div class="logo">
<!--        <img src="/assets/logo.png" alt="Company Logo">-->
      </div>
      <div class="nav" v-if="isDesktop">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/loginFunction" class="nav-link">Login Function</router-link>
        <router-link to="/apiFunction" class="nav-link">API Function</router-link>
        <router-link to="/gamer" class="nav-link">Gamer</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'WebHeader',
  setup() {
    const isDesktop = ref(false);

    const checkScreenSize = () => {
      isDesktop.value = window.innerWidth >= 768; // Adjust breakpoint as needed
    };

    onMounted(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    });

    return { isDesktop };
  }
}
</script>

<style scoped>
.web-header {
  background-color: #ffcc66;
  color: white;
  padding: 1rem 0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo img {
  max-width: 150px;
}

.nav {
  flex: 1;
  /*text-align: right;*/
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-left: 1.5rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d46e26;
}
</style>
