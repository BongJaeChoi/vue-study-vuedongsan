<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountPercent }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      discountPercent: 30,
    }
  },
  mounted() {
    const timer = setInterval(() => {
      //1초마다 Discount 값 1% 씩 하락
      this.discountPercent--

      if (this.discountPercent === 0) {
        clearInterval(timer)
      }
    }, 1000)
  },
  updated() {},
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
}
</style>
