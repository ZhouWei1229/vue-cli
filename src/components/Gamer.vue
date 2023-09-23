<template>
  <div class="card-container">
    <CardItem cardName="姜維" :position="0" country="蜀國"/>
    <CardItem cardName="關銀屏" :position="1" country="蜀國"/>
    <CardItem cardName="關羽" :position="2" country="蜀國"/>
  </div>
</template>

<script>
import CardItem from './CardItem.vue';

export default {
  name: 'App',
  components: {
    CardItem,
  },
};
</script>

<style scoped>
/* 默认布局，将卡片横向排列 */
.card-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* 默认的间距 */
}

/* 在小屏幕上将卡片纵向排列 */
@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    gap: 10px; /* 中等屏幕的间距 */
  }
}

/* 在更小的屏幕上，调整卡片的宽度和间距 */
@media (max-width: 480px) {
  .card-container {
    gap: 5px; /* 小屏幕的间距 */
  }
}

/* 在非常小的屏幕上，进一步调整卡片的宽度和字体大小 */
@media (max-width: 320px) {
  .card-container {
    gap: 2px; /* 非常小屏幕的间距 */
  }

  .card-container .card {
    width: 100%;
  }

  .card-container .card .total-power {
    font-size: 14px;
  }
}
</style>
