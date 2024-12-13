<template>
  <div class="project-page">
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-icon">
          <i :class="project.icon"></i>
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-links">
            <a :href="project.url" target="_blank" class="project-link">
              <i class="el-icon-link"></i>
              访问
            </a>
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
          title: '小站',
          description: '一个简单的导航页，收集一些常用的网站。',
          icon: 'el-icon-house',
          url: '#'
        },
        {
          id: 2,
          title: '云盘',
          description: '基于 NextCloud 搭建的私人云盘，用于文件存储和同步。',
          icon: 'el-icon-folder',
          url: '#'
        },
        {
          id: 3,
          title: '音乐',
          description: '使用 Navidrome 搭建的私人音乐服务器。',
          icon: 'el-icon-headset',
          url: '#'
        },
        {
          id: 4,
          title: '实验室',
          description: '一些有趣的实验性项目和演示。',
          icon: 'el-icon-data-analysis',
          url: '#'
        },
        {
          id: 5,
          title: '网盘',
          description: '基于 Alist 搭建的网盘聚合服务。',
          icon: 'el-icon-folder-opened',
          url: '#'
        },
        {
          id: 6,
          title: 'RSS',
          description: '使用 Tiny Tiny RSS 搭建的 RSS 阅读器。',
          icon: 'el-icon-reading',
          url: '#'
        },
        {
          id: 7,
          title: '相册',
          description: '基于 Lychee 搭建的个人相册。',
          icon: 'el-icon-picture',
          url: '#'
        },
        {
          id: 8,
          title: '笔记',
          description: '使用 Joplin 搭建的个人笔记系统。',
          icon: 'el-icon-notebook-1',
          url: '#'
        },
        {
          id: 9,
          title: '监控',
          description: '使用 Uptime Kuma 搭建的服务监控系统。',
          icon: 'el-icon-monitor',
          url: '#'
        },
        {
          id: 10,
          title: '书签',
          description: '基于 Shiori 搭建的个人书签管理系统。',
          icon: 'el-icon-collection-tag',
          url: '#'
        },
        {
          id: 11,
          title: '代码',
          description: '使用 Gitea 搭建的私有代码仓库。',
          icon: 'el-icon-document',
          url: '#'
        },
        {
          id: 12,
          title: '下载',
          description: '基于 Aria2 搭建的下载服务器。',
          icon: 'el-icon-download',
          url: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.project-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.project-card {
  background: var(--bg-primary);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: var(--card-shadow);
  transition: var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

.project-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
}

.project-info {
  flex: 1;
}

.project-info h3 {
  margin: 0 0 8px 0;
  color: var(--text-primary);
  font-size: 1.1em;
}

.project-info p {
  margin: 0 0 12px 0;
  color: var(--text-secondary);
  font-size: 0.9em;
  line-height: 1.4;
}

.project-links {
  display: flex;
  gap: 10px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 15px;
  background: var(--bg-secondary);
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.9em;
  transition: var(--transition-normal);
}

.project-link:hover {
  background: var(--primary-color);
  color: white;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
    padding: 10px;
  }
}
</style> 