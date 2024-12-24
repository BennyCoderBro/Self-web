<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;

}
.responsive-img {
  width: 100%;
  height: auto;
  object-fit: cover; /* 保持图片比例填充 */
}

</style>
