<template>
  <div class="timeline-page">
    <h1 class="page-title">成长历程</h1>
    
    <div class="timeline">
      <div v-for="(item, index) in timelineItems" 
           :key="index" 
           class="timeline-item"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="time-tag">{{ item.date }}</div>
          <div class="content-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <div v-if="item.tags" class="tags">
              <span v-for="tag in item.tags" 
                    :key="tag" 
                    class="tag"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelinePage',
  data() {
    return {
      timelineItems: [
        {
          date: '2024',
          title: '个人技术博客上线',
          content: '使用Vue.js开发个人技术博客，记录学习心得和技术分享。',
          tags: ['Vue.js', 'Element UI', 'GitHub Pages']
        },
        {
          date: '2023',
          title: '全栈开发工程师',
          content: '负责企业级应用的前后端开发，深入学习微服务架构。',
          tags: ['全栈开发', '微服务', 'DevOps']
        },
        {
          date: '2022',
          title: '前端开发工程师',
          content: '专注于前端技术栈，参与多个大型项目开发。',
          tags: ['前端开发', 'Vue.js', 'React']
        },
        {
          date: '2021',
          title: '开启编程之旅',
          content: '开始系统学习编程，踏上技术成长之路。',
          tags: ['编程基础', 'JavaScript', 'HTML/CSS']
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline-page {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2em;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--primary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 4px solid white;
  box-shadow: var(--card-shadow);
  z-index: 1;
}

.timeline-content {
  width: 45%;
  margin-left: 55%;
  position: relative;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 0;
  margin-right: 55%;
  text-align: right;
}

.time-tag {
  position: absolute;
  top: -30px;
  left: 0;
  background: var(--primary-color);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.9em;
}

.timeline-item:nth-child(even) .time-tag {
  left: auto;
  right: 0;
}

.content-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
}

.content-card h3 {
  color: var(--text-primary);
  margin: 0 0 10px 0;
}

.content-card p {
  color: var(--text-secondary);
  margin: 0 0 15px 0;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
}

.timeline-item:nth-child(even) .tags {
  justify-content: flex-end;
}

.tag {
  background: var(--bg-secondary);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85em;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }

  .timeline-dot {
    left: 30px;
  }

  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 60px;
    margin-right: 0;
    text-align: left;
  }

  .timeline-item:nth-child(even) .time-tag {
    left: 0;
    right: auto;
  }

  .timeline-item:nth-child(even) .tags {
    justify-content: flex-start;
  }
}
</style> 