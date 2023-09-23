<template>
  <nav class="web-menu">
    <ul>
      <li>
        <router-link to="/" class="menu-link">Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="menu-link">About</router-link>
      </li>
      <li>
        <router-link to="/contact" class="menu-link">Contact</router-link>
      </li>
      <li>
        <router-link to="/loginFunction" class="menu-link">Login Function</router-link>
      </li>
      <li>
        <router-link to="/apiFunction" class="menu-link">API Function</router-link>
      </li>
      <!--      <li><router-link to="/gamer" class="menu-link">Gamer</router-link></li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'WebMenu',
}
</script>

<style scoped>
.web-menu {
  background-color: #ffcc66;
  padding: 1rem 0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.menu-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  transition: color 0.3s ease;
  display: block;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.menu-link:hover {
  color: #d46e26;
  background-color: #f5e0b3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
