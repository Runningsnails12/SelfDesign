<template>
  <div class="edit-page">
    <component-panel />
    <canvas-page />
    <control-panel />
    <div class="zoom-box">
      <ul>
        <li>
          <button id="plusBtn"></button>
        </li>
        <li>
          <button id="minusBtn"></button>
        </li>
        <li>100%</li>
        <li>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
  <!-- <zoom-panel /> -->
</template>
<script>
import ComponentPanel from '@/components/EditPageComponent/ComponentPanel.vue';
import CanvasPage from '@/components/EditPageComponent/CanvasPage.vue';
import ControlPanel from '@/components/EditPageComponent/ControlPanel.vue';
// import ZoomPanel from '../components/EditPageComponent/zoomPanel.vue';

export default {
  name: 'ProjectEdit',
  components: {
    ComponentPanel,
    CanvasPage,
    ControlPanel,
    // ZoomPanel
  },
  setup() {}
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

<style scoped>
  .edit-page {
    display: flex;
    height: calc(100vh - 60px);
    justify-content: space-between;
    background-color: #e9ebed;
    overflow-x: hidden;
  }

/* 画板缩放控件 */
  .zoom-box {
    position: absolute;
    right: 10%;
    bottom: 5%;
    width: 156px;
    height: 46px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
    border-radius: 4px;
    border: 1px solid #DBDFE4;
  }

  .zoom-box button {
    margin: 10px 0 10px 10px;
    width: 25px;
    height: 25px;
    background: url(img/EditIcons/zoom_icon.png);
    background-size: auto 25px; 
    background-repeat: no-repeat;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
  }

  #minusBtn {
    background-position: -25px 0;
  }

  .zoom-box > ul {
    display: flex;
    list-style: none;
  }

  .zoom-box > ul > li:nth-child(3) {
    margin: 5px 0 0 8px;
    width: 40px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #666666;
    background: #EEF2F7;
    border-radius: 4px;
    border: 1px solid #DBDFE4;
    box-sizing: border-box;
  }

  .zoom-box > ul > li:nth-child(4) {
    margin-left: 6px;
    width: 32px;
    height: 46px;
    text-align: center;
    background-color: #FAFAFB;
    border-radius: 0px 4px 4px 0px;
    border-left: 1px solid #DBDFE4;
  }

  .zoom-box > ul span {
    display: inline-block;
    margin-top: 10px;
    width: 25px;
    height: 25px;
    background: url(img/EditIcons/zoom_icon.png);
    background-position: -50px 0;
    background-repeat: no-repeat;
    background-size: auto 25px; 
    cursor: pointer;
  }

  .zoom-box > ul span:hover {
    background-position: -75px 0;
  }
</style>