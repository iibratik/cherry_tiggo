<template>
  <div class="doc">
    <iframe
      src="https://docs.google.com/document/d/1okMcvaXMGOc6VJLUDamegUv8h-lzT6dvOrjj9SgGFsQ/edit?tab=t.0"
      frameborder="0"
      width="90%"
      height="90%"
    ></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      interval:null,
    }
  },
  mounted() {
    this.interval =  setInterval(() => {
      console.clear()
    }, 2000);
  },
  beforeUnmount(){
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
.doc {
  height: 95%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>