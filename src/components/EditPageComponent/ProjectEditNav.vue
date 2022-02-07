<template>
  <div class="edit-nav-box">
    <div class="edit-nav">
      <div class="left-part">
        <div id="user-msg">
          <div id="user-icon">
            {{ userIcon }}
          </div>
          <ul id="to-manage-page">
            <li @click="$router.push('/tutorial')"><i /><span>新手教程</span></li>
            <li @click="$router.push('/project')"><i /><span>项目管理</span></li>
            <li @click="$router.push('/template')"><i /><span>相关模板</span></li>
          </ul>
        </div>
        <div class="file-name">
          <input type="text" value="未命名文件" />
        </div>
        <div class="edit-operation">
          <button id="revoke" />
          <button id="recover" />
          <button id="edit-save" />
          <p id="edit-save-time">保存于 {{ lastSaveTime }}</p>
        </div>
      </div>
      <div class="right-part">
        <button id="preview">预览</button>
        <button id="publish" @click="displaylDialog">发 &nbsp; 布</button>
      </div>
    </div>
  </div>
  <dialog-box v-show="dialogVisible" @dialog-visible="childData" />
</template>

<script>
import {ref, computed} from 'vue';
import {useStore} from 'vuex';
import DialogBox from '@/components/EditPageComponent/DialogBox.vue';

export default {
  name: 'ProjectEditNav',
  components: {
    DialogBox,
  },
  setup() {
    let lastSaveTime = '00:00'; // 最后一次的保存时间
    // 父传子的数据：修改子
    let dialogVisible = ref(false);
    // 子传父的数据：修改父
    const childData = (val) => {
      dialogVisible.value = val;
    };

    // 头像
    const store = useStore();
    const userIcon = computed(() => store.state.username?.slice(0, 2));

    // 预览 & 发布
    const displaylDialog = () => {
      confirm(111);
      dialogVisible.value = !dialogVisible.value;
    };

    const publishMessage = () => {};

    return {
      userIcon,
      childData,
      dialogVisible,
      lastSaveTime,
      displaylDialog,
      publishMessage,
    };
  },
};
</script>
<style scoped>
.edit-nav-box {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #bfbfbf;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
  box-sizing: border-box;
}

.edit-nav {
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  /* min-width: 1200px; */
  height: 60px;
  background: #ffffff;
  justify-content: space-between;
}

.left-part {
  display: flex;
}

/* 用户头像和二级导航 */
#user-msg {
  margin: 0 50px 0 15px;
  width: 50px;
}

#user-msg > #user-icon {
  position: absolute;
  margin: 7px 0;
  width: 48px;
  height: 48px;
  line-height: 45px;
  text-align: center;
  background: #c4e5ff;
  border-radius: 50%;
  border: 1.5px solid #5b9bc8;
  box-sizing: border-box;
  transition: ease-in-out all 0.5s;
  z-index: 10;
}

/* 二级导航 */
#user-msg:hover #user-icon {
  /* transform-origin: 0% 0%; */
  /* transform: scale(1.8); */
  width: 80px;
  height: 80px;
  line-height: 75px;
  font-size: 32px;
}

#user-msg:hover #to-manage-page {
  left: 0;
}

#to-manage-page {
  position: absolute;
  padding: 30px 16px 16px 16px;
  width: 162px;
  height: 138px;
  top: 68px;
  left: -200px;
  list-style: none;
  background: #ffffff;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.25098039215686274);
  border-radius: 2px;
  border: 1px solid #f5f5f5;
  transition: ease-in-out all 0.4s;
}

#to-manage-page li {
  display: flex;
  margin-bottom: 8px;
  padding: 9px 19px 9px 17px;
  color: #666666;
  font-size: 16px;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  transition: ease-in-out all 0.3s;
  cursor: pointer;
}
#to-manage-page li:hover {
  background: #f1f2f4;
}

#to-manage-page li i {
  width: 30px;
  height: 20px;
  background: url(/img/新手教程.png);
  background-size: auto 20px;
  background-repeat: no-repeat;
}

#to-manage-page li:nth-child(2) i {
  background: url(/img/项目管理.png);
  background-size: auto 20px;
  background-repeat: no-repeat;
}
#to-manage-page li:nth-child(3) i {
  background: url(/img/相关模板.png);
  background-size: auto 20px;
  background-repeat: no-repeat;
}
/* 项目名称修改 */
.file-name > input {
  margin: 5px 0;
  padding: 0 10px;
  width: 220px;
  height: 50px;
  background: #ffffff;
  font-size: 18px;
  font-weight: bold;
  color: #444444;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #eeeeee;
}

.file-name > input:focus {
  background: #f8f8f8;
  color: #333333;
  outline: none;
}

/* 编辑操作 */
.edit-operation {
  margin-left: 72px;
}

.edit-operation > button {
  margin: 14px 25px 0 0;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  background: url(/img/EditIcons/nav_icon.png);
  background-size: 128px 64px;
  background-repeat: no-repeat;
  outline: none;
  border: none;
  cursor: pointer;
}

#revoke {
  background-position: -32px 0;
}
#revoke:hover {
  background-position: -32px -32px;
}

#recover {
  background-position: -64px 0;
}
#recover:hover {
  background-position: -64px -32px;
}

/* 保存和保存时间 */
#edit-save {
  margin-right: 12px;
}
#edit-save:hover {
  background-position: 0 -32px;
}

#edit-save-time {
  float: right;
  margin: 21px 0;
  font-size: 16px;
  color: #888888;
}

/* 右边的预览和发布按钮 */
.right-part {
  margin: 8px 20px 8px 0;
}

.right-part > button {
  outline: none;
  border: none;
  background: none;
  transition: ease-in-out all 0.2s;
  cursor: pointer;
}

#preview {
  margin-right: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  letter-spacing: 1px;
}
#preview:hover {
  color: #4a8af4;
}

#publish {
  display: inline-block;
  text-align: cent;
  width: 120px;
  height: 45px;
  background: #4a8af4;
  border-radius: 6px;
  color: #ffffff;
}
#publish:hover {
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
}

/* 弹框 */
</style>
