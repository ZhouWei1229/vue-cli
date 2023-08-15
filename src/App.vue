<template>
  <div id="app">
    <WebHeader/>
    <div className="mobile-content">
      <el-aside v-if="isMobile" width="100%">
        <WebMenu/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </div>
    <WebFooter/>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import WebHeader from "@/components/WebHeader.vue";
import WebMenu from "@/components/WebMenu.vue";
import WebFooter from "@/components/WebFooter.vue";

export default {
  name: 'App',
  components: {
    WebHeader,
    WebMenu,
    WebFooter,
  },
  setup() {
    const isMobile = ref(false);

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768; // Adjust breakpoint as needed
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
    });

    return {isMobile};
  }
}
</script>

<style>

</style>
