<template>
  <div class="project-page">
    <h1 class="page-title">项目展示</h1>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" :alt="project.title" class="project-image">
        <div class="project-info">
          <h2>{{ project.title }}</h2>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" 
                  :key="tech" 
                  class="tech-tag">{{ tech }}</span>
          </div>
          <div class="project-links">
            <a :href="project.demo" target="_blank" class="project-link">演示</a>
            <a :href="project.github" target="_blank" class="project-link">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: '个人博客系统',
          description: '基于Vue3和Node.js的全���博客系统',
          image: 'https://picsum.photos/400/300?random=1',
          technologies: ['Vue3', 'Node.js', 'MongoDB'],
          demo: '#',
          github: '#'
        },
        // 更多项目...
      ]
    }
  }
}
</script>

<style scoped>
.project-page {
  padding: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.tech-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.9em;
}

.project-links {
  display: flex;
  gap: 10px;
}

.project-link {
  padding: 8px 16px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.project-link:hover {
  background: #2980b9;
}
</style> 