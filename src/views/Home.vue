<template>
  <div class="home-page">
    <div class="intro-banner">
      <div class="intro-text">
        <p>热爱技术，专注分享</p>
        <p>记录学习，探索创新</p>
        <p>前端开发工程师 / 技术博主</p>
      </div>
    </div>

    <image-carousel :items="carouselItems" />
    
    <div class="featured-section">
      <h2 class="section-title">最新动态</h2>
      <div class="featured-grid">
        <div v-for="item in featuredItems" :key="item.id" class="featured-card">
          <div class="card-icon">
            <i :class="item.icon"></i>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <router-link :to="item.link" class="read-more">
            了解更多
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">100+</div>
        <div class="stat-label">技术文章</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">项目案例</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">1000+</div>
        <div class="stat-label">代码提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from '@/components/Carousel.vue'

export default {
  name: 'HomePage',
  components: {
    ImageCarousel
  },
  data() {
    return {
      carouselItems: [
        {
          image: 'https://picsum.photos/1200/500?random=1',
          title: '前端开发技术探索'
        },
        {
          image: 'https://picsum.photos/1200/500?random=2',
          title: '全栈工程师成长之路'
        },
        {
          image: 'https://picsum.photos/1200/500?random=3',
          title: '云原生技术实践'
        }
      ],
      featuredItems: [
        {
          id: 1,
          icon: 'el-icon-edit-outline',
          title: '最新技术博文',
          description: '探索Vue3新特性，掌握前端开发的最新趋势',
          link: '/articles'
        },
        {
          id: 2,
          icon: 'el-icon-monitor',
          title: '项目展示',
          description: '基于微服务架构的企业级应用实践分享',
          link: '/projects'
        },
        {
          id: 3,
          icon: 'el-icon-notebook-2',
          title: '学习笔记',
          description: '系统化的前端学习路线和知识整理',
          link: '/notes'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-page {
  animation: fadeIn 1s ease-out;
}

.intro-banner {
  background: var(--bg-gradient);
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
}

.intro-text {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.intro-text p {
  font-size: 1.2em;
  color: var(--text-primary);
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: var(--card-shadow);
}

.featured-section {
  padding: 40px 20px;
  margin: 20px 0;
}

.section-title {
  text-align: center;
  font-size: 2em;
  color: var(--text-primary);
  margin-bottom: 30px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
}

.featured-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

.card-icon {
  font-size: 2.5em;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.featured-card h3 {
  color: var(--text-primary);
  margin-bottom: 15px;
  font-size: 1.5em;
}

.featured-card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.read-more {
  color: var(--primary-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.read-more:hover {
  color: var(--primary-dark);
  gap: 12px;
}

.stats-section {
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  margin: 20px;
  box-shadow: var(--card-shadow);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 1.1em;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .intro-text {
    flex-direction: column;
    gap: 15px;
  }

  .intro-text p {
    width: 100%;
    text-align: center;
  }

  .stats-section {
    flex-direction: column;
    gap: 30px;
  }
}
</style> 