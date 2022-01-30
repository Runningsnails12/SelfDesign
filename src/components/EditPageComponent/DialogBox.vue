<template>
  <div id="dialog-outsidebox">
    <div>
      <div class="dialog-box">
        <div>
          content
        </div>
        <button id="cancelBtn" @click="cancelDialog">取 消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogBox',
  setup() {
    let cancelBtn = document.getElementById('cancelBtn');

    const cancelDialog = () => {
      let dialogOutsidebox = document.getElementById('dialog-outsidebox');
      dialogOutsidebox.style.display = 'none';
    };

    return {
      cancelBtn,
      cancelDialog
    };
  }
};

</script>
<style>
  #dialog-outsidebox {
    display: none;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    z-index: 1000;
  }

  #dialog-outsidebox > div {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .dialog-box {
    width: 640px;
    height: 360px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.16);
  }

  .dialog-box > button {
    width: 120px;
    height: 36px;
    outline: none;
    border: none;
  }
</style>