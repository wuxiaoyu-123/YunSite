<template>
  <div class="toc-container" :class="{ 'dark-mode': isDarkMode }">
    <div class="toc-header">
      <i class="el-icon-document"></i>
      目录
    </div>
    <div class="toc-content">
      <div v-for="(item, index) in tocItems" 
           :key="index" 
           class="toc-item"
           :class="{ 
             'active': activeId === item.id,
             [`level-${item.level}`]: true 
           }"
           @click="scrollToHeading(item.id)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tocItems: [],
      activeId: '',
      observer: null
    }
  },
  mounted() {
    this.initTOC()
    this.initIntersectionObserver()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    initTOC() {
      // 获取文章内容中的所有标题
      const article = document.querySelector('.article-content')
      if (!article) return

      const headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6')
      this.tocItems = Array.from(headings).map(heading => {
        // 为每个标题添加id
        const id = heading.textContent.toLowerCase().replace(/\s+/g, '-')
        heading.id = id
        
        return {
          id,
          text: heading.textContent,
          level: parseInt(heading.tagName.charAt(1))
        }
      })
    },
    initIntersectionObserver() {
      const options = {
        rootMargin: '-70px 0px -70% 0px'
      }

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeId = entry.target.id
          }
        })
      }, options)

      // 观察所有标题元素
      this.tocItems.forEach(item => {
        const element = document.getElementById(item.id)
        if (element) {
          this.observer.observe(element)
        }
      })
    },
    scrollToHeading(id) {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80 // 头部导航栏的高度
        const top = element.offsetTop - offset
        window.scrollTo({
          top,
          behavior: 'smooth'
        })
      }
    },
    handleScroll() {
      // 处理目录固定定位
      const toc = this.$el
      const scrollTop = window.pageYOffset
      const headerHeight = 60 // 头部导航栏高度

      if (scrollTop > headerHeight) {
        toc.style.position = 'fixed'
        toc.style.top = '20px'
      } else {
        toc.style.position = 'absolute'
        toc.style.top = `${headerHeight + 20}px`
      }
    }
  }
}
</script>

<style scoped>
.toc-container {
  position: absolute;
  top: 80px;
  right: 40px;
  width: 260px;
  background: var(--bg-primary);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  transition: var(--transition-normal);
}

.toc-header {
  padding: 15px 20px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--bg-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.toc-content {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 15px 0;
}

.toc-item {
  padding: 8px 20px;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.9em;
  transition: var(--transition-normal);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toc-item:hover {
  color: var(--primary-color);
  background: var(--bg-secondary);
}

.toc-item.active {
  color: var(--primary-color);
  background: var(--bg-secondary);
  border-right: 2px solid var(--primary-color);
}

/* 目录层级缩进 */
.level-1 { padding-left: 20px; }
.level-2 { padding-left: 35px; }
.level-3 { padding-left: 50px; }
.level-4 { padding-left: 65px; }
.level-5 { padding-left: 80px; }
.level-6 { padding-left: 95px; }

/* 滚动条样式 */
.toc-content::-webkit-scrollbar {
  width: 4px;
}

.toc-content::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

.toc-content::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 2px;
}

/* 深色模式 */
.dark-mode {
  background: var(--bg-primary);
  box-shadow: var(--card-shadow);
}

@media (max-width: 1280px) {
  .toc-container {
    display: none;
  }
}
</style> 