<template>
  <div class="customModal" ref="customModal">
    <!--
      属性                  描述                       类型                  默认值
      afterClose	          Modal 完全关闭后的回调	    function	            无
      bodyStyle	            Modal body样式	          object	              {}
      cancelText	          取消按钮文字	              string|slot	          取消
      centered	            垂直居中展示Modal	        Boolean	              false
      closable	            是否显示右上角的关闭按钮	  Boolean	              true
      destroyOnClose	      关闭时销毁 Modal里的子元素	Boolean	              false
      footer	              底部内容，当不需要默认底部按钮时，可以设为 :footer="null"
      getContainer	        指定 Modal挂载的HTML节点(instance): HTMLElement	() => document.body
      keyboard	            是否支持键盘 esc关闭	      Boolean	              true
      maskClosable	        点击蒙层是否允许关闭	      Boolean	              true
      maskStyle	            遮罩样式                  	object	{}
      okText	              确认按钮文字	              string|slot	          确定
      okType	              确认按钮类型	              string	              primary
      title	                标题	                    string|slot	          无
      visible(v-model)	    对话框是否可见	            Boolean	              无
      width	                宽度	                    string|number       	520
      wrapClassName	        对话框外层容器的类名	      string	              无
      zIndex	              设置Modal的z-index	        Number	              1000
      dialogStyle	          可用于设置浮层的样式，调整浮层位置等	object	      无
      标记★的为自定义后的属性，与官方文档有差别
      ★ closeIcon	            自定义关闭图标	            string                close
      ★ isIconfont            是否是iconfont图标(此值为true时，closeIcon必须设置)         Boolean               false
    -->
    <!-- TODO 用法 -->
    <!--<customModal
      :visible="true"
    >
      <template #modalContent>
        <div>内容区域</div>
      </template>
      <template #extraBtn>
        <a-button>底部区域</a-button>
      </template>
    </customModal>-->
    <template v-if="footer !== null">
      <a-modal
        :afterClose="() => {$emit('afterClose')}"
        :centered="true"
        :destroyOnClose="true"
        :keyboard="false"
        :maskClosable="false"
        :bodyStyle="bodyStyle"
        :closable="closable"
        :visible="visible"
        :width="width"
        :title='title'
        :wrapClassName="wrapClassName"
        :zIndex="zIndex"
        :dialogStyle="dialogStyle"
        :getContainer="() => $refs.customModal"
        @cancel="() => { $emit('cancel') }"
      >
        <slot name="modalContent"></slot>

        <!-- 自定义右上角关闭图标 -->
        <template #closeIcon>
          <template v-if="isIconfont">
            <i :class="['iconfont', closeIcon]"></i>
          </template>
          <template v-else>
            <a-icon :type="closeIcon" />
          </template>
        </template>

        <!-- 自定义按钮 -->
        <template #footer>
          <div class="modalBtn">
            <a-button
              :disabled="disableBtn"
              :loading="disableBtn"
              :type="okType"
              @click="() => { $emit('ok') }"
            >{{okText}}
            </a-button>
            <slot name="extraBtn"></slot>
            <a-button
              :disabled="disableBtn"
              @click="() => { $emit('cancel') }"
            >{{cancelText}}
            </a-button>
            <!--<a-button
              v-if="isContinueBtn"
              :disabled="disableBtn"
              :loading="disableBtn"
              key="submit" type="primary"
              @click="() => { $emit('SaveHandlerContinue') }"
            >保存并继续添加
            </a-button>-->
          </div>
        </template>
      </a-modal>
    </template>
    <template v-else>
      <a-modal
        :afterClose="() => {$emit('afterClose')}"
        :centered="true"
        :destroyOnClose="true"
        :keyboard="false"
        :maskClosable="false"
        :footer="null"
        :bodyStyle="bodyStyle"
        :closable="closable"
        :visible="visible"
        :width="width"
        :title='title'
        :wrapClassName="wrapClassName"
        :zIndex="zIndex"
        :dialogStyle="dialogStyle"
        :getContainer="() => $refs.customModal"
        @cancel="() => { $emit('cancel') }"
      >
        <slot name="modalContent"></slot>

        <!-- 自定义右上角关闭图标 -->
        <template #closeIcon>
          <template v-if="isIconfont">
            <i :class="['iconfont', closeIcon]"></i>
          </template>
          <template v-else>
            <a-icon :type="closeIcon" />
          </template>
        </template>
      </a-modal>
    </template>
  </div>
</template>

<script>
  export default {
    name: "customModal",
    data() {
      return {}
    },
    props: {
      bodyStyle: {
        type: Object,
        default: {}
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeIcon: {
        type: String,
        default: 'close'
      },
      isIconfont: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 520
      },
      title: {
        type: String,
        default: '对话框'
      },
      wrapClassName: {
        type: String,
        default: ''
      },
      zIndex: {
        type: Number,
        default: 1000
      },
      dialogStyle: {
        type: Object,
        default: {}
      },
      disableBtn: {
        type: Boolean,
        default: false
      },
      okType: {
        type: String,
        default: 'primary'
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      footer: {
        default: true
      }
    }
  }
</script>

<style lang="less" scoped>
  div.customModal {

  }
</style>
