<template>
  <div class="home-page">
    <div class="welcome-section">
      <h1 class="title">欢迎来到我的博客园</h1>
      <p class="subtitle">分享技术，记录生活</p>
    </div>
    <image-carousel :items="carouselItems" />
    
    <div class="featured-section">
      <h2 class="section-title">精选内容</h2>
      <div class="featured-grid">
        <div v-for="item in featuredItems" :key="item.id" class="featured-card">
          <div class="card-icon">
            <i :class="item.icon"></i>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <router-link :to="item.link" class="read-more">
            了解更多
            <i class="fas fa-arrow-right"></i>
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
          icon: 'fas fa-code',
          title: '最新技术博文',
          description: '探索前端开发的最新趋势和技术实践',
          link: '/articles'
        },
        {
          id: 2,
          icon: 'fas fa-project-diagram',
          title: '项目展示',
          description: '查看我的开源项目和实践案例',
          link: '/projects'
        },
        {
          id: 3,
          icon: 'fas fa-book',
          title: '学习笔记',
          description: '分享学习过程中的心得体会',
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

.welcome-section {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
}

.title {
  font-size: 2.8em;
  margin-bottom: 15px;
  color: var(--primary-color);
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.4em;
  color: var(--text-secondary);
  margin-bottom: 30px;
  font-weight: 500;
}

.featured-section {
  padding: 60px 0;
  background: var(--bg-secondary);
  border-radius: 20px;
  margin: 40px 0;
}

.section-title {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2em;
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
  text-align: center;
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
}

.featured-card p {
  color: var(--text-light);
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
  padding: 60px 0;
  background: white;
  border-radius: 20px;
  margin: 40px 0;
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
  color: var(--text-light);
  font-size: 1.1em;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .stats-section {
    flex-direction: column;
    gap: 30px;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
}
</style> 