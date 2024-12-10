<template>
  <div id="app">
    <snowflake />
    <nav class="nav-bar">
      <div class="nav-container">
        <router-link to="/" class="logo">我的博客园</router-link>
        <div class="nav-links">
          <div class="nav-link-container">
            <router-link to="/" class="nav-link" exact>
              <span>首页</span>
              <div class="link-line"></div>
            </router-link>
            <router-link to="/articles" class="nav-link">
              <span>技术文章</span>
              <div class="link-line"></div>
            </router-link>
            <router-link to="/projects" class="nav-link">
              <span>项目展示</span>
              <div class="link-line"></div>
            </router-link>
            <router-link to="/notes" class="nav-link">
              <span>学习笔记</span>
              <div class="link-line"></div>
            </router-link>
            <router-link to="/resources" class="nav-link">
              <span>资源分享</span>
              <div class="link-line"></div>
            </router-link>
            <router-link to="/about" class="nav-link">
              <span>关于我</span>
              <div class="link-line"></div>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <chat-bot />
  </div>
</template>

<script>
import Snowflake from './components/Snowflake.vue'
import ChatBot from './components/ChatBot.vue'

export default {
  name: 'App',
  components: {
    Snowflake,
    ChatBot
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  background: var(--bg-gradient);
  min-height: 100vh;
}

.nav-bar {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo:hover {
  color: var(--primary-dark);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link-container {
  position: relative;
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  width: 600px;
  padding: 0 10px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  padding: 8px 16px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
}

.nav-link span {
  margin-bottom: 5px;
  position: relative;
  z-index: 1;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-color);
  border-radius: 20px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.nav-link:hover::before {
  opacity: 0.1;
  transform: scale(1);
}

.nav-link.router-link-active::before {
  opacity: 0.15;
  transform: scale(1);
}

.link-line {
  height: 3px;
  width: 0;
  background: var(--primary-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 3px;
  opacity: 0;
  position: relative;
  z-index: 1;
}

.nav-link:hover .link-line {
  width: 30px;
  opacity: 1;
}

.nav-link.router-link-active .link-line {
  width: calc(100% - 20px);
  opacity: 1;
  background: var(--primary-color);
  box-shadow: 0 0 12px var(--primary-light);
}

.nav-link:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  color: var(--primary-color);
  font-weight: 600;
  transform: translateY(-2px);
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px var(--primary-light);
  }
  50% {
    box-shadow: 0 0 15px var(--primary-color);
  }
  100% {
    box-shadow: 0 0 5px var(--primary-light);
  }
}

.nav-link.router-link-active .link-line {
  animation: glow 2s ease-in-out infinite;
}

.nav-link:active {
  transform: scale(0.95) translateY(-2px);
}

.main-content {
  margin-top: 80px;
  padding: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@media (max-width: 768px) {
  .nav-link-container {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 5px;
  }
  
  .nav-link {
    padding: 8px 8px;
  }
  
  .link-line {
    display: none;
  }
}
</style> 