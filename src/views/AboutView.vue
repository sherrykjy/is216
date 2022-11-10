<script>
    import algoNavbar from '@/components/algoNavbar.vue';
    import newGrid from '@/components/newGrid.vue';
    export default{
      name: "AboutView",
      components: {
        algoNavbar,
        newGrid
      },
      // data() {
      //   return {
      //     componentKey: 0,
      //   };
      // },
      // methods: {
      //   forceRerender() {
      //     this.componentKey += 1
      //   }
      // }
    }
</script>


<template>
  <div class="about">
    <algoNavbar></algoNavbar>
    <newGrid></newGrid>
  </div>
</template>
