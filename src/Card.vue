<template>
  <section>
    <img :src="room.image" :alt="room.content" class="room-img" />
    <h4 @click="sendOpenModalEvent">{{ room.title }}</h4>
    <p>{{ room.content }}</p>
    <p>{{ room.price }} 원</p>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    room: Object,
  },
  methods: {
    sendOpenModalEvent() {
      this.$emit('openModal', this.room.id)
    },
  },
}
</script>

<style>
.room-img {
  width: 100%;
}
</style>
