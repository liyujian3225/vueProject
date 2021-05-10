<template>
  <ve-line
    width="100%"
    :data="chartData"
    :settings="chartSettings"
    :colors="color"
  ></ve-line>
</template>
<script>
export default {
  data () {
    this.chartSettings = {
      area: true,
    };
    this.color = ['#7CB5EC'];
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      }
    }
  },
}
</script>
