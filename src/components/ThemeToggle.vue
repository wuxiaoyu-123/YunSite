<template>
  <div class="theme-toggle" @click="toggleTheme">
    <i :class="isDarkMode ? 'el-icon-sunny' : 'el-icon-moon'"></i>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDarkMode: false
    }
  },
  created() {
    // 检查本地存储的主题设置
    const savedTheme = localStorage.getItem('theme')
    this.isDarkMode = savedTheme === 'dark'
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      this.applyTheme()
      // 保存主题设置到本地存储
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
      this.$emit('theme-change', this.isDarkMode)
    },
    applyTheme() {
      document.body.classList.toggle('dark-theme', this.isDarkMode)
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  right: 40px;
  bottom: 100px;
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

.theme-toggle:hover {
  transform: translateY(-5px);
  background: var(--primary-dark);
}

.theme-toggle i {
  font-size: 20px;
}

@media (max-width: 768px) {
  .theme-toggle {
    right: 20px;
    bottom: 80px;
  }
}
</style> 