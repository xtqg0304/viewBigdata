<template>
  <div>
    <div class="drag-box-left">
      <div class="drag-title">拖动排序</div>
      <div draggable="true" @dragstart="dragstartEvent" @dragend="dragendEvent" @dragenter="dragenterEvent" @dragleave="dragleaveEvent" @dragover="dragoverEvent">
        111111
      </div>
      <div draggable="true" @dragstart="dragstartEvent" @dragend="dragendEvent" @dragenter="dragenterEvent" @dragleave="dragleaveEvent" @dragover="dragoverEvent">
        22222
      </div>
      <div draggable="true" @dragstart="dragstartEvent" @dragend="dragendEvent" @dragenter="dragenterEvent" @dragleave="dragleaveEvent" @dragover="dragoverEvent">
        333333
      </div>
      <div draggable="true" @dragstart="dragstartEvent" @dragend="dragendEvent" @dragenter="dragenterEvent" @dragleave="dragleaveEvent" @dragover="dragoverEvent">
        444444
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dragElement: null,
      lock: true
    }
  },
  methods: {
    dragstartEvent (ev) {
      const self = this;
      self.dragElement = ev.target;
      ev.target.style.backgroundColor = '#f8f8f8';
    },
    dragendEvent (ev) {
      ev.target.style.backgroundColor = '#fff';
      ev.preventDefault();
    },
    dragenterEvent (ev) {
      const self = this;
      if (self.dragElement !== ev.target) {
        ev.target.parentNode.insertBefore(self.dragElement, ev.target);
      }
    },
    dragleaveEvent (ev) {
      const self = this;
      if (self.dragElement !== ev.target) {
        if (self.lock && (ev.target === ev.target.parentNode.lastElementChild || ev.target === ev.target.parentNode.lastChild)) {
          ev.target.parentNode.appendChild(self.dragElement);
          self.lock = false;
        } else {
          self.lock = true;
        }
      }
    },
    dragoverEvent (ev) {
      ev.preventDefault();
    }
  }
}
</script>

<style scoped>
.drag-box-left {
  float: left;
  width: 45%;
}
.drag-box-right {
  float: right;
  width: 45%;
}
.drag-list {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  transition: border 0.3s;
}
.drag-list:hover {
  border: 1px solid #20a0ff;
}
.drag-title {
  font-weight: 400;
  line-height: 25px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
</style>
