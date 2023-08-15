<template>
  <div className="about-page">
    <div className="page-content">
      <h1>About Us</h1>
      <p>We are a team of dedicated professionals committed to providing top-notch services and products.</p>
      <p>Our mission is to deliver excellence and exceed expectations in everything we do.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
}
</script>

<style scoped>
.about-page {
  background-color: #f9f9f9;
  color: #333;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

.page-content h1 {
  font-size: 36px;
  margin-bottom: 1rem;
}

.page-content p {
  font-size: 18px;
  margin-bottom: 1.5rem;
}
</style>
