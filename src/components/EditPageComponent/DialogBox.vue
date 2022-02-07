<template>
  <div id="dialog-outsidebox">
    <div>
      <div class="dialog-box">
        <h3>项目发布链接</h3>
        <div class="link-box">
          <img src="/img/EditIcons/链接.png" />
          <input type="text" placeholder="https://www.baidu.com" />
        </div>
        <button id="copyBtn" @click="copyPublishLink">复 &nbsp; 制</button>
        <button id="cancelBtn" @click="cancelDialog">取 &nbsp; 消</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, watch} from 'vue';
export default {
  name: 'DialogBox',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['dialogVisible'],
  setup(props, {emit}) {
    let dialogDisvisible = ref(props.dialogVisible);
    // 监听改变
    watch(
      () => props.dialogVisible,
      () => {
        dialogDisvisible.value = props.dialogVisible;
      }
    );

    const cancelDialog = () => {
      emit('dialogVisible', dialogDisvisible.value);
    };

    const copyPublishLink = () => {};

    return {
      dialogDisvisible,
      cancelDialog,
      copyPublishLink,
    };
  },
};
</script>
<style>
#dialog-outsidebox {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.3607843137254902);
  z-index: 1000;
}

#dialog-outsidebox > div {
  display: flex;
  height: 100%;
  justify-content: center;
  /* align-items: center; */
}

.dialog-box {
  margin-top: 150px;
  width: 450px;
  height: 181.25px;
  background: #ffffff;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.25098039215686274);
  border-radius: 4px 4px 4px 4px;
  border: 1px solid rgba(112, 112, 112, 0.6);
}

.dialog-box > h3 {
  margin: 18px 0 28px 20px;
  color: #333333;
  letter-spacing: 1px;
}

.link-box {
  display: flex;
  margin: 0 auto;
  width: 280px;
  height: 32px;
  line-height: 32px;
  border: 1px solid #c8c8c8;
}

.link-box > img {
  margin: 4px 4px;
  width: 24px;
}

.link-box > input {
  margin-left: 2px;
  padding-left: 4px;
  width: 100%;
  outline: none;
  border: none;
}

.link-box > input:focus {
  outline: 1px solid #4a8af4;
}

.dialog-box > button {
  margin-top: 28px;
  width: 100px;
  height: 32px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  border: none;
  transition: all ease-in-out 0.3s;
}

.dialog-box > button:hover {
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
}

#copyBtn {
  margin: 0 12px 0 215px;
  background: #4a8af4;
  color: #ffffff;
}

#cancelBtn {
  background: #fafafb;
  border: 1px solid #4a8af4;
  box-sizing: border-box;
}
</style>
