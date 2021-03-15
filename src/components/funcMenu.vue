<template>
  <div class="ctrlBox">
    <!-- 筛选过滤 -->
    <div class="filterContent">
      <slot name="filterForm"></slot>
    </div>

    <div class="ctrlBtn">
      <div class="leftBtn">
        <a-button
          class="customMarginStyle"
          type="primary"
          @click="$emit('showAddModal')"
          v-if="showAddBtn"
        >{{addBtnText}}</a-button>
        <slot name="leftSlot"></slot>
        <a-button-group>
          <template v-if="isClickBatch">
            <!-- 插槽：如果有其他功能性按钮，显示在此 -->
            <slot name="batchOperation"></slot>
            <a-button
              class="transparent"
              @click="$emit('deleteData')"
              v-if="delBtn"
            >批量删除</a-button>
          </template>
        </a-button-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "funcMenu",
    data() {
      return {
        isClickBatch: false
      }
    },
    props: {
      showAddBtn: {
        type: Boolean,
        default: true,
      },
      delBtn: {
        type: Boolean,
        default: true
      },
      addBtnText: {
        type: String,
        default: '添加',
      },
    },
    methods: {
      updateBatchState(arr) {
        this.isClickBatch = !!arr.length;
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.ctrlBox {
    margin-bottom: 20px;

    div.filterContent {
      background: #fff;
      padding: 14px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
    div.ctrlBtn{
      display: flex;
      justify-content: space-between;

      div.leftBtn{
        display: flex;
      }
    }
  }
</style>