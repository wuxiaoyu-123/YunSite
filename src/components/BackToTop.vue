<template>
  <div class="back-to-top" 
       v-show="visible" 
       @click="scrollToTop"
       :class="{ 'dark-mode': isDarkMode }"
  >
    <i class="el-icon-top"></i>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      visible: false
    }
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.back-to-top:hover {
  transform: translateY(-5px);
  background: var(--primary-dark);
}

.back-to-top.dark-mode {
  background: var(--primary-light);
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .back-to-top {
    right: 20px;
    bottom: 20px;
  }
}
</style> 