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
      <input @input="month = $event.target.value" :value="month" />
      <p>
        {{ month }}개월 선택함 : {{ onerooms[누른거].price * Number(month) }}원
      </p>
      <button @click="sendCloseModalEvent">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    onerooms: Array,
    누른거: Number,
    모달창열렸니: Boolean,
  },
  data() {
    return {
      month: '1',

      //부모도 쓰는 데이터라면 부모 컴포넌트에 만들기....
      //데이터를 위로 전달하는건 어렵다. 아래로 전달하는건 쉽다.
      //위로는 이벤트 전달하고 아래로는 데이터를 받자.
    }
  },
  watch: {
    month(value) {
      this.month = value.trim()

      console.log(`${typeof value}`)
      if (value.indexOf(' ') >= 0) {
        alert('숫자만 입력 가능합니다.')
        this.month = this.month.trim()
        return
      }

      if (isNaN(value)) {
        alert('숫자만 입력 가능합니다.')
        this.month = '1'
        return
      }

      //사용자가 month 에 입력한 데이터가 13보다 크면 경고문 띄우기
      if (value > 12) {
        alert('13이상이면 안됨!')
        this.month = '1'
        return
      }

      //data 영역에 있는 변수와 같은 이름을 가진 함수를 만들면 watch 발동!
    },
  },
  components: {},
  methods: {
    isNumber(n) {
      return !isNaN(parseFloat(n)) && !isNaN(n - 0)
    },

    sendCloseModalEvent() {
      this.$emit('closeModal')
    },
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
