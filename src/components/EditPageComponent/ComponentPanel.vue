<template>
  <div id="component-panel">
    <ul>
      <li 
        @click="tabChange(index)"
        :class="checkedOne == index ? 'tabSelected':''"
        :key="item.id"
        v-for="(item, index) in componentOptions"
      >
        {{ item.tag }}
      </li>
    </ul>
    <div
      id="component-options" 
      :class="checkedOne == index?'current':''"
      :key="item.id"
      v-for="(item, index) in componentOptions"
    >
      <p>{{ item.title }}</p>
      <ul>
        <li 
          v-for="p in item.componentData"
          :key="p.cid"
        >
          <img 
            :src="p.img" 
          >
          <span>{{ p.cname }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {ref, reactive} from 'vue';

export default {
  name: 'ComponentPanel',
  setup() {
    let checkedOne = ref(0);
    // 组件选项（容器/组件）
    const componentOptions = reactive([{
      id: 1,
      tag: '容  器',
      title: '大组件',
      componentData: [{
        cid: 1,
        cname: '布局',
        img: 'img/EditIcons/布局.png'
      },{
        cid: 2,
        cname: '轮播图',
        img: 'img/EditIcons/轮播图.png'
      },{
        cid: 3,
        cname: '二级导航',
        img: 'img/EditIcons/二级导航.png'
      },{
        cid: 4,
        cname: '列表',
        img: 'img/EditIcons/列表.png'
      },{
        cid: 5,
        cname: '表格',
        img: 'img/EditIcons/表格.png'
      }]
    }, {
      id: 2,
      tag: '组  件',
      title: '小组件',
      componentData: [{
        cid: 1,
        cname: '图片',
        img: 'img/EditIcons/图片.png'
      },{
        cid: 2,
        cname: '文本框',
        img: 'img/EditIcons/文本框.png'
      },{
        cid: 3,
        cname: '按钮',
        img: 'img/EditIcons/按钮.png'
      }]
    }]);

    // tag栏更改
    const tabChange = (index) => {
      checkedOne.value = index;
    };

    return {
      checkedOne,
      componentOptions,
      tabChange
    };
  }
};

</script>
<style scoped>
  #component-panel {
    width: 240px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.1607843137254902);
  }

  ul {
    display: flex;
    list-style: none;
  }
  #component-panel > ul li {
    width: 120px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    color: #333333;
    font-weight: bold;
    border: 1px solid #bfbfbf;
    transition: ease-in-out all .3s;
    cursor: pointer;
  }
  #component-panel > ul li:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }

  .tabSelected {
    color: #ffffff !important;
    background: #4A8AF4;
  }
/* 当前：被选中显示 */
  .current {
    display: block !important;
  }
  
/* 下方的内容 */
  #component-options {
    display: none;
  }

  #component-options p {
    padding: 33px 0 15px 23px;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    letter-spacing: 1px;
  }

  #component-options ul {
    margin: 0 30px;
    flex-wrap: wrap;
  }

  #component-options ul > li {
    margin-bottom: 12px;
    width: 80px;
    height: 88px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #eeeeee;
    transition: ease-in-out all .3s;
    cursor: pointer;
  }
  #component-options ul > li:nth-child(2n+1) {
    margin-right: 18px;
  }
  #component-options ul > li:hover {
    background: #eef2f7;
    border: 1px solid #eef2f7;
  }

  #component-options ul > li > img {
    margin: 17px 24px 8px;
    width: 32px;
  }

  #component-options ul > li > span {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #666666;
  }
</style>