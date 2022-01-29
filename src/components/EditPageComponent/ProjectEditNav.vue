<template>
  <div class="edit-nav-box">
    <div class="edit-nav">
      <div class="left-part">
        <div id="user-msg">
          <img id="user-icon" src="img/EditIcons/header_icon.png">
          <ul>
            <li><i /><span>新手教程</span></li>
            <li><i /><span>项目管理</span></li>
            <li><i /><span>相关模板</span></li>
          </ul>
        </div>
        <div class="file-name">
          <input
            type="text"
            value="未命名文件"
          >
        </div>
        <div class="edit-operation">
          <button id="revoke" />
          <button id="recover" />
          <button id="edit-save" />
          <p id="edit-save-time">
            保存于 {{ lastSaveTime }}
          </p>
        </div>
      </div>
      <div class="right-part">
        <button id="preview">
          预览
        </button>
        <button id="publish">
          发 &nbsp; 布
        </button> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectEditNav',
  setup() {
    let lastSaveTime = '00:00';   // 最后一次的保存时间

    // let revokeBtn = document.getElementById('revoke');
    // const revokeBtn = () => {

    // };

    return {
      lastSaveTime,
    };
  }
};

</script>
<style scoped>
  .edit-nav-box {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
  }

  .edit-nav {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-width: 1200px;
    height: 60px;
    justify-content: space-between;
  }

  .left-part {
    display: flex;
  }

/* 用户头像和二级导航 */
  #user-msg {
    margin: 0 50px 0 15px;
    width: 50px;
    border: 1px solid #f00;
  }

  #user-msg > img {
    margin: 5px 0;
    width: 50px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid #5b9bc8;
    transition: ease-in-out all .5s;
  }

  /* 二级导航 */
  #user-msg:hover #user-icon {
    width: 90px;
  }

  #user-msg:hover ul {
  
  }

  #user-msg ul {
    margin-top: -32px;
    width: 0;
    height: 0;
    padding: 30px 16px 16px 16px;
    width: 108px;
    height: 102px;
    list-style: none;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.25098039215686274);
    border-radius: 2px;
    border: 1px solid #F5F5F5;
    transition: ease-in-out all .5s;
  }

  #user-msg ul li {
    display: flex;
    margin-bottom: 6px;
    padding: 7px 19px 7px 17px;
    color: #666666;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid #F1F2F4;
    transition: ease-in-out all .3s;
    cursor: pointer;
  }
  #user-msg ul li:hover {
    background: #F1F2F4;
  }

  #user-msg ul li i {
    width: 20px;
    height: 16px;
    background: url(../../../public/img/新手教程.png);
    background-size: auto 16px;
    background-repeat: no-repeat;
  }
  
  #user-msg ul li:nth-child(2) i {
    background: url(../../../public/img/项目管理.png);
    background-size: auto 16px;
    background-repeat: no-repeat;
  }
  #user-msg ul li:nth-child(3) i {
    background: url(../../../public/img/相关模板.png);
    background-size: auto 16px;
    background-repeat: no-repeat;
  }
/* 项目名称修改 */
  .file-name > input {
    margin: 5px 0;
    padding: 0 10px;
    width: 220px;
    height: 50px;
    background: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    color: #444444;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid #EEEEEE;
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
    background: url(../../../public/img/EditIcons/nav_icon.png);
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
    transition: ease-in-out all .2s;
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
    background: #4A8AF4;
    border-radius: 6px;
    color: #ffffff;
  }
  #publish:hover {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
  }
</style>