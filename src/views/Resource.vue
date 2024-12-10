<template>
  <div class="resource-page">
    <h1 class="page-title">资源分享</h1>
    <div class="resource-sections">
      <div v-for="section in sections" :key="section.id" class="resource-section">
        <h2 class="section-title">{{ section.title }}</h2>
        <div class="resource-grid">
          <a 
            v-for="resource in section.resources" 
            :key="resource.id"
            :href="resource.link"
            target="_blank"
            class="resource-card"
          >
            <img :src="resource.icon" :alt="resource.name" class="resource-icon">
            <h3>{{ resource.name }}</h3>
            <p>{{ resource.description }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcePage',
  data() {
    return {
      sections: [
        {
          id: 1,
          title: '推荐工具',
          resources: [
            {
              id: 1,
              name: 'VS Code',
              description: '强大的代码编辑器',
              icon: 'https://picsum.photos/50?random=1',
              link: '#'
            },
            // 更多资源...
          ]
        },
        // 更多分类...
      ]
    }
  }
}
</script>

<style scoped>
.resource-page {
  padding: 20px;
}

.resource-section {
  margin-bottom: 40px;
}

.section-title {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #3498db;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.resource-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.resource-card:hover {
  transform: translateY(-5px);
}

.resource-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}
</style> 