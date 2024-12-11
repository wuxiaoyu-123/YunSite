<template>
  <div id="app">
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <i class="el-icon-s-home"></i>
            <span class="site-name">云深小站</span>
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <button class="menu-toggle" @click="toggleMenu">
          <i :class="['el-icon-s-fold', { 'is-active': isMenuOpen }]"></i>
        </button>

        <!-- 导航菜单 -->
        <nav :class="['nav-menu', { 'is-open': isMenuOpen }]">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="nav-item"
            :exact="item.path === '/'"
            @click.native="closeMenu"
          >
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view></router-view>
      <chat-bot />
    </main>
  </div>
</template>

<script>
import ChatBot from './components/ChatBot.vue'

export default {
  name: 'App',
  components: {
    ChatBot
  },
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { path: '/', name: '首页', icon: 'el-icon-s-home', exact: true },
        { path: '/articles', name: '文章', icon: 'el-icon-document' },
        { path: '/projects', name: '项目', icon: 'el-icon-folder' },
        { path: '/notes', name: '笔记', icon: 'el-icon-notebook-1' },
        { path: '/resources', name: '资源', icon: 'el-icon-collection' },
        { path: '/about', name: '关于', icon: 'el-icon-user' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  },
  watch: {
    '$route'() {
      this.closeMenu()
    }
  }
}
</script>

<style>
:root {
  --header-height: 60px;
  --mobile-header-height: 50px;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  z-index: 1001;
}

.logo a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  text-decoration: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--primary-color);
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: var(--primary-color);
  background: var(--bg-secondary);
}

.nav-item.router-link-active {
  color: #000;
  font-weight: 600;
  background: var(--bg-secondary);
}

.main-content {
  margin-top: var(--header-height);
  flex: 1;
  padding: 20px;
  position: relative;
  z-index: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header {
    height: var(--mobile-header-height);
    background: white;
  }

  .main-content {
    margin-top: var(--mobile-header-height);
    padding: 15px;
  }

  .menu-toggle {
    display: block;
  }

  .site-name {
    font-size: 0.9em;
  }

  .nav-menu {
    position: fixed;
    top: var(--mobile-header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 999;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }

  .nav-menu.is-open {
    transform: translateX(0);
  }

  .nav-item {
    padding: 15px;
    font-size: 1.1em;
    border-radius: 8px;
    background: #f8f9fa;
    width: 100%;
    justify-content: flex-start;
  }

  .nav-item i {
    margin-right: 10px;
    font-size: 1.2em;
    width: 24px;
    text-align: center;
  }

  .nav-item:hover {
    background: #f0f0f0;
    color: #000;
  }

  .nav-item.router-link-active {
    background: #f0f0f0;
    color: #000;
    font-weight: 700;
  }

  .menu-toggle .el-icon-s-fold {
    transition: transform 0.3s ease;
    font-size: 24px;
  }

  .menu-toggle .el-icon-s-fold.is-active {
    transform: rotate(180deg);
  }
}

/* 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
    --bg-secondary: #242424;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
  }

  .nav-item.router-link-active {
    color: #fff;
    font-weight: 600;
    background: var(--primary-color);
  }

  @media (max-width: 768px) {
    .header {
      background: #1a1a1a;
    }

    .nav-menu {
      background: #1a1a1a;
    }

    .nav-item {
      background: #242424;
      color: #cccccc;
    }

    .nav-item:hover {
      background: #2c2c2c;
      color: #fff;
    }

    .nav-item.router-link-active {
      background: #2c2c2c;
      color: #fff;
      font-weight: 700;
    }
  }
}
</style> 