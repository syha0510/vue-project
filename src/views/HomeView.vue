<template>
    <div class="home">
        <DragTable/>
    </div>
</template>


<script>

import DragTable from '@/components/DragTable.vue'
export default {
  name:'HomeView',
  components: {
    DragTable,
}
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    min-height: 591px;
    background-image: url('../assets/bgdep.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    
  }
</style>