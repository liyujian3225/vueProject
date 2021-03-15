<template>
  <div class="fundViews">
    <a-card>
      <a-row :gutter="16">
        <a-col :span="3">
          <a-statistic :title="netValueData" :value="fundInfo['netValue']" style="margin-right: 50px" />
        </a-col>
        <template v-for="item in rangeType">
          <a-col :span="3" :key="item.key">
            <a-statistic
              :title="item.name"
              :precision="2"
              suffix="%"
              :value="fundInfo[item.key] * 100"
              :value-style="{ color: fundInfo[item.key] < 0 ? '#3f8600' : '#cf1322' }"
            >
              <template #prefix>
                <a-icon :type="fundInfo[item.key] < 0 ? 'arrow-down' : 'arrow-up'" />
              </template>
            </a-statistic>
          </a-col>
        </template>
      </a-row>
    </a-card>
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
export default {
  name: "fundViews",
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
    netValueData: function() {
      return '最新净值（' + this.fundInfo.netValueDate.substr(5, 5) + '）';
    }
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
