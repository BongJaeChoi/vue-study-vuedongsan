<template>
  <div id="app">
    <transition name="fade">
      <Modal
        :onerooms="onerooms"
        :누른거="누른거"
        :모달창열렸니="모달창열렸니"
        @closeModal="모달창열렸니 = false"
      />
    </transition>
    <div>
      {{ 모달창열렸니 }}
    </div>
    <div v-if="모달창열렸니">열렸다</div>
    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>

    <Discount :이름="오브젝트.name" :나이="오브젝트.age" />

    <button @click="priceSort">가격낮은순정렬</button>
    <button @click="sortBack">되돌리기</button>
    <button @click="priceSortDesc">가격높은순정렬</button>
    <button @click="priceSortHangle">가나다순정렬</button>
    <button @click="priceFilter50">50만원이하 상품만필터</button>

    <div>
      <Card
        @openModal="
          모달창열렸니 = true
          누른거 = $event
        "
        :room="room"
        v-for="room in onerooms"
        :key="room.id"
      />
    </div>
  </div>
</template>

<script>
import onerooms from './assets/onerooms.js'
import Discount from './Discount.vue'
import Modal from './Modal.vue'
import Card from './Card.vue'

export default {
  name: 'App',
  data() {
    return {
      원룸들오리지널: [...onerooms],
      오브젝트: { name: 'kim', age: 20 },
      누른거: 0,
      모달창열렸니: false,
      onerooms: onerooms,
      menus: ['Home', 'Shop', 'About'],
    }
  },
  methods: {
    increase() {
      // const newArr = Object.assign([], this.reports);
      // newArr[i]++;
      // this.reports = newArr;
      //array index의 값 변경은 바로 바인딩이 적용이 안됨. 그렇다면 right way 는 무엇일까??
      //정답: 간단한 케이스의 경우 slice() 를 통해 새로운 배열객체를 만들어줌(얕은복사, 객체의 메모리주소만 다르고 안에 값은 아직 같음)
      //array 내 element 들이 object 일 경우 깊은복사 하자
    },
    priceSort() {
      this.onerooms.sort((a, b) => a.price - b.price)
    },
    sortBack() {
      this.onerooms = [...this.원룸들오리지널]
    },
    priceSortDesc() {
      this.onerooms = this.onerooms.sort((a, b) => b.price - a.price)
    },
    priceSortHangle() {
      this.onerooms = this.onerooms.sort(
        (a, b) => a.content.charCodeAt() - b.content.charCodeAt()
      )
    },
    priceFilter50() {
      this.onerooms = this.onerooms.filter((item) => item.price <= 500000)
    },
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  },
}
</script>

<style>
/* 뷰 애니메이션 xxx-enter-from.. */
.fade-enter-from {
  opacity: 0;
  /* 시작 스타일 */
}
.fade-enter-active {
  transition: all 1;
}
.fade-enter-to {
  /* 끝 스타일 */
  opacity: 1;
}

.fade-leave-from {
  opacity: 0;
  /* 시작 스타일 */
}
.fade-leave-active {
  transition: all 1;
}
.fade-leave-to {
  /* 끝 스타일 */
  opacity: 1;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
}
.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}
</style>
