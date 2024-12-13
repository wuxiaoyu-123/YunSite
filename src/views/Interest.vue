<template>
  <div class="interest-page">
    <div class="mountain-bg"></div>
    
    <div class="content">
      <!-- 左侧部分 -->
      <div class="left-section">
        <div class="logo">
          <i class="el-icon-time"></i>
          <span>imsyy.top</span>
        </div>

        <div class="quote-container">
          <div class="quote">" Hello World! "</div>
          <div class="subtitle">一个建站了21年的小站，酷库博客</div>
        </div>

        <div class="social-links">
          <a href="#" class="social-link">
            <i class="el-icon-user"></i>
          </a>
          <a href="#" class="social-link">
            <i class="el-icon-message"></i>
          </a>
          <a href="#" class="social-link">
            <i class="el-icon-position"></i>
          </a>
          <a href="#" class="social-link">
            <i class="el-icon-share"></i>
          </a>
          <a href="#" class="social-link">
            <i class="el-icon-chat-dot-round"></i>
          </a>
        </div>
      </div>

      <!-- 右侧部分 -->
      <div class="right-section">
        <div class="clock">
          <div class="clock-content">
            <div class="time">{{ currentTime }}</div>
            <div class="date">{{ currentDate }}</div>
            <div class="weather">天气 加载失败 °C ~ °C</div>
          </div>
        </div>

        <div class="nav-grid">
          <a href="#" class="nav-item">
            <i class="el-icon-cloudy"></i>
            <span>小站</span>
          </a>
          <a href="#" class="nav-item">
            <i class="el-icon-partly-cloudy"></i>
            <span>资源网</span>
          </a>
          <a href="#" class="nav-item">
            <i class="el-icon-headset"></i>
            <span>音乐</span>
          </a>
          <a href="#" class="nav-item">
            <i class="el-icon-files"></i>
            <span>实验室</span>
          </a>
          <a href="#" class="nav-item">
            <i class="el-icon-notebook-2"></i>
            <span>网址集</span>
          </a>
          <a href="#" class="nav-item">
            <i class="el-icon-chat-line-round"></i>
            <span>留言板</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterestPage',
  data() {
    return {
      currentTime: '',
      currentDate: '',
      timer: null
    }
  },
  mounted() {
    this.updateTime()
    this.timer = setInterval(this.updateTime, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    updateTime() {
      const now = new Date()
      
      // 更新时间 - 24小时制
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      this.currentTime = `${hours}:${minutes}:${seconds}`
      
      // 更新日期
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      const weekDay = weekDays[now.getDay()]
      this.currentDate = `${year}年${month}月${day}日 ${weekDay}`
    }
  }
}
</script>

<style scoped>
.interest-page {
  min-height: 100vh;
  background: #1a0523;
  position: relative;
  overflow: hidden;
}

.mountain-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  filter: hue-rotate(240deg);
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  padding: 0;
}

/* 左侧部分 */
.left-section {
  width: 40%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
}

.logo i {
  font-size: 40px;
  color: #fff;
}

.logo span {
  color: #fff;
  font-size: 24px;
  font-family: 'Monaco', monospace;
}

.quote-container {
  text-align: left;
  margin-bottom: 60px;
}

.quote {
  font-family: 'Monaco', monospace;
  font-size: 42px;
  color: #fff;
  margin-bottom: 15px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
}

.social-links {
  display: flex;
  gap: 25px;
}

.social-link {
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #fff;
  transform: translateY(-2px);
}

/* 右侧部分 */
.right-section {
  width: 60%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.clock {
  text-align: right;
  color: #fff;
  margin-bottom: 60px;
  position: relative;
  padding: 3px;
  border-radius: 10px;
  overflow: hidden;
}

.clock::before,
.clock::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent 30%
  );
  animation: rotate 4s linear infinite;
}

.clock::after {
  animation: rotate 4s linear infinite reverse;
  animation-delay: -2s;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.clock-content {
  position: relative;
  z-index: 1;
  background: rgba(26, 5, 35, 0.9);
  border-radius: 8px;
  padding: 15px;
}

.time {
  font-family: 'Monaco', monospace;
  font-size: 32px;
  margin-bottom: 4px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.date, .weather {
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.4;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 180px);
  gap: 20px;
  margin-top: auto;
}

.nav-item {
  height: 140px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-item i {
  font-size: 36px;
  color: #fff;
  margin-bottom: 15px;
}

.nav-item span {
  color: #fff;
  font-size: 16px;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

@media (max-width: 1280px) {
  .content {
    flex-direction: column;
  }

  .left-section, .right-section {
    width: 100%;
    padding: 40px;
    align-items: center;
  }

  .quote-container {
    text-align: center;
  }

  .nav-grid {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .left-section, .right-section {
    padding: 20px;
  }

  .nav-grid {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .nav-item {
    height: 120px;
  }

  .quote {
    font-size: 32px;
  }

  .social-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style> 