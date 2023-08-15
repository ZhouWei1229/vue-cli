<template>
  <div class="home-page">
    <div class="welcome-section">
      <h1 class="welcome-title">Welcome to CuteLand</h1>
      <p class="welcome-message">
        Explore the adorable world of fluffy creatures, magical places, and heartwarming stories.
      </p>
      <el-button class="explore-button" type="danger">Explore Now</el-button>
    </div>
    <div class="feature-section">
      <div class="feature-card">
        <img src="../assets/feature1.jpg" alt="Feature 1" class="feature-image" />
        <h2 class="feature-title">Meet Our Cute Characters</h2>
        <p class="feature-description">
          Discover a collection of charming characters that will melt your heart.
        </p>
      </div>
      <div class="feature-card">
        <img src="../assets/feature1.jpg" alt="Feature 2" class="feature-image" />
        <h2 class="feature-title">Magical Adventures Await</h2>
        <p class="feature-description">
          Embark on whimsical journeys through enchanted forests and hidden realms.
        </p>
      </div>
      <div class="feature-card">
        <img src="../assets/feature1.jpg" alt="Feature 3" class="feature-image" />
        <h2 class="feature-title">Spread Love and Joy</h2>
        <p class="feature-description">
          Share heartwarming stories and delightful moments with your friends and family.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ... (your script code)
};
</script>

<style scoped>
.home-page {
  background-color: #f3e1dd; /* Soft pastel background color */
  color: #333;
}

.welcome-section {
  text-align: center;
  padding: 100px 0;
}

.welcome-title {
  font-size: 36px;
  color: #e76f51; /* Warm title color */
  margin-bottom: 20px;
}

.welcome-message {
  font-size: 18px;
  margin-bottom: 30px;
}

.explore-button {
  background-color: #e76f51; /* Warm button color */
  transition: background-color 0.3s ease;
}

.explore-button:hover {
  background-color: #d46e26; /* Darker warm color on hover */
}

.feature-section {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 50px 10px;
  gap: 15px;
}

.feature-card {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-image {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  border-radius: 50%;
}

.feature-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .feature-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>