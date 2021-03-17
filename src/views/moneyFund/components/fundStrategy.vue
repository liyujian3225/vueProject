<template>
  <div class="fundStrategy">
    <a-card>
      <a-collapse v-model="activeKey">
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <a-collapse-panel key="1" header="投资策略">
          <p>{{ fundInfo.investStrategy }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="投资理念">
          <p>{{ fundInfo.investPhilosophy }}</p>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "fundStrategy",
  data() {
    return {
      activeKey: ['1'],
    }
  },
  props: {
    fundInfo: {
      type: Object,
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
