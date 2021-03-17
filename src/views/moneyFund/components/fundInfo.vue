<template>
  <div class="fundViews">
    <a-card>
      <a-descriptions bordered size="small">
        <template v-for="item in infoType">
          <a-descriptions-item :label="item.name" :key="item.key">
            {{ fundInfo[item.key] }}
          </a-descriptions-item>
        </template>
        <a-descriptions-item label="类型/等级">
          <a-tag color="#f50">{{this.fundType[fundInfo.fundType]}}</a-tag>
          <a-tag color="#f50">{{this.riskLevel[fundInfo.riskLevel]}}</a-tag>
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>
<script>
import mixins from "@/views/mixins";
export default {
  mixins: [mixins],
  name: "fundInfo",
  data() {
    return {

    }
  },
  props: {
    fundInfo: {
      type: Object,
      require: true,
    },
  },
  computed: {

  },
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
<style scoped lang="scss">

</style>
