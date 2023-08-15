<template>
  <footer class="web-footer">
    <div class="footer-content">
      <div class="footer-logo">
<!--        <img src="/assets/logo.png" alt="Company Logo">-->
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'WebFooter',
}
</script>

<style scoped>
.web-footer {
  background-color: #ffcc66;
  color: white;
  padding: 1rem 0;
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-logo img {
  max-width: 150px;
}

.footer-bottom {
  text-align: center;
  margin-top: 1rem;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
  opacity: 0.7;
}
</style>
