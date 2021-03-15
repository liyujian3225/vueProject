<template>
  <div class="fundManagers">
    <a-card>
      <a-collapse>
        <template v-for="item in fundManagers">
          <a-collapse-panel :key="item.managerId" :header="item.name">
            <p>{{ item.background }}</p>
          </a-collapse-panel>
        </template>
      </a-collapse>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "fundManagers",
  data() {
    return {

    }
  },
  props: {
    fundManagers: {
      type: Array,
      require: true,
    },
  },
  computed: {},
  components: {},
  mounted() {
  },
  methods: {},
  created() {
  },
  watch: {},
  activated() {
  },
  deactivated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
}
</script>
<style scoped>

</style>
