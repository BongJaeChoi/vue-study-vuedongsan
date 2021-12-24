<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img
        :src="onerooms[누른거].image"
        :alt="onerooms[누른거].content"
        class="room-img"
      />
      <h4>{{ onerooms[누른거].title }}</h4>
      <p>{{ onerooms[누른거].content }}</p>
      <p>{{ onerooms[누른거].price }}</p>
      <Discount />
      <!-- <button @click="모달창열렸니 = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
import Discount from './Discount.vue'
export default {
  name: 'Modal',
  props: {
    onerooms: Array,
    누른거: Number,
    모달창열렸니: Boolean,
  },
  data() {
    return {
      //부모도 쓰는 데이터라면 부모 컴포넌트에 만들기....
      //데이터를 위로 전달하는건 어렵다. 아래로 전달하는건 쉽다.
      //위로는 이벤트 전달하고 아래로는 데이터를 받자.
    }
  },
  components: {
    Discount: Discount,
  },
}
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
}
</style>
