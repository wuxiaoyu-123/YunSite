<template>
  <div class="links-page">
    <h1 class="page-title">友情链接</h1>
    
    <div class="links-grid">
      <a v-for="link in links" 
         :key="link.id" 
         :href="link.url" 
         target="_blank" 
         class="link-card"
      >
        <img :src="link.avatar" :alt="link.name" class="link-avatar">
        <div class="link-info">
          <h3>{{ link.name }}</h3>
          <p>{{ link.description }}</p>
        </div>
      </a>
    </div>

    <div class="apply-section">
      <h2>申请友链</h2>
      <div class="my-info">
        <h3>我的信息</h3>
        <ul>
          <li>名称：云深小站</li>
          <li>描述：探索技术的深度，感受编程的魅力</li>
          <li>地址：https://wuxiaoyu-123.github.io/YunSite/</li>
        </ul>
      </div>
      <div class="requirements">
        <h3>申请要求</h3>
        <ul>
          <li>网站内容积极向上，无不良信息</li>
          <li>网站稳定运行，访问流畅</li>
          <li>网站有原创内容，更新频率正常</li>
          <li>已添加本站友链</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksPage',
  data() {
    return {
      links: [
        {
          id: 1,
          name: 'Vue.js官网',
          description: 'Vue.js - 渐进式JavaScript框架',
          url: 'https://vuejs.org',
          avatar: 'https://picsum.photos/100?random=1'
        },
        {
          id: 2,
          name: 'Element UI',
          description: '基于Vue的桌面端组件库',
          url: 'https://element.eleme.io',
          avatar: 'https://picsum.photos/100?random=2'
        },
        {
          id: 3,
          name: 'MDN Web Docs',
          description: 'Web技术权威文档',
          url: 'https://developer.mozilla.org',
          avatar: 'https://picsum.photos/100?random=3'
        }
      ]
    }
  }
}
</script>

<style scoped>
.links-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2em;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.link-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

.link-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
}

.link-info h3 {
  margin: 0 0 8px 0;
  color: var(--text-primary);
}

.link-info p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9em;
}

.apply-section {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: var(--card-shadow);
}

.apply-section h2 {
  color: var(--text-primary);
  margin-bottom: 30px;
  text-align: center;
}

.my-info, .requirements {
  margin-bottom: 30px;
}

.my-info h3, .requirements h3 {
  color: var(--text-primary);
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  color: var(--text-secondary);
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style> 