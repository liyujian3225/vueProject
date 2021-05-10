<template>
  <div class="fundManagers">
    <a-card>
      <a-collapse :border="false">
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <template v-for="item in fundManagers">
          <a-collapse-panel :key="item.managerId">
            <template #header>
              <a-space>
                <span>{{item.name}}</span>
                <span>{{item.managerId}}</span>
              </a-space>
            </template>
            <a-space direction="vertical">
              <p>
                <a-tag>{{gender[item.gender]}}</a-tag>
                <a-tag>{{item.incumbent ? '离职' : '在职'}}</a-tag>
                <a-tag>{{item.educationLevel}}</a-tag>
              </p>
              <p>{{ item.background }}</p>
            </a-space>
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
      gender: [ '未知', '男', '女'],
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
