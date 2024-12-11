<template>
  <div class="article-page">
    <div v-if="isArticleDetail" class="article-detail">
      <article class="article-content">
        <h1>{{ currentArticle.title }}</h1>
        <div class="article-meta">
          <span class="date"><i class="far fa-calendar"></i> {{ currentArticle.date }}</span>
          <span class="read-time"><i class="far fa-clock"></i> {{ currentArticle.readTime }}分钟阅读</span>
          <span class="views"><i class="far fa-eye"></i> {{ currentArticle.views }}阅读</span>
        </div>
        <div class="article-tags">
          <span v-for="tag in currentArticle.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="article-body">
          <!-- 文章内容将在这里渲染 -->
          {{ currentArticle.content }}
        </div>
      </article>
      <TableOfContents :isDarkMode="isDarkMode" />
    </div>
    <div v-else>
      <div class="page-header">
        <h1 class="page-title">技术文章</h1>
        <div class="category-tabs">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            :class="['category-btn', { active: currentCategory === cat.id }]"
            @click="currentCategory = cat.id"
          >
            <i :class="cat.icon"></i>
            {{ cat.name }}
          </button>
        </div>
      </div>

      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索文章..."
          class="search-input"
        >
        <div class="filter-tags">
          <span 
            v-for="tag in selectedTags" 
            :key="tag"
            class="filter-tag"
            @click="removeTag(tag)"
          >
            {{ tag }} ×
          </span>
        </div>
      </div>

      <div class="article-grid">
        <div v-for="article in filteredArticles" :key="article.id" class="article-card">
          <div class="article-image">
            <img :src="article.cover" :alt="article.title">
            <div class="article-category">{{ getCategoryName(article.categoryId) }}</div>
          </div>
          <div class="article-content">
            <h2 class="article-title">{{ article.title }}</h2>
            <p class="article-meta">
              <span class="date"><i class="far fa-calendar"></i> {{ article.date }}</span>
              <span class="read-time"><i class="far fa-clock"></i> {{ article.readTime }}分钟阅读</span>
              <span class="views"><i class="far fa-eye"></i> {{ article.views }}阅读</span>
            </p>
            <p class="article-excerpt">{{ article.excerpt }}</p>
            <div class="article-tags">
              <span 
                v-for="tag in article.tags" 
                :key="tag" 
                class="tag"
                @click="addTag(tag)"
              >
                {{ tag }}
              </span>
            </div>
            <div class="article-footer">
              <button class="read-more" @click="readArticle(article.id)">
                阅读全文
                <i class="fas fa-arrow-right"></i>
              </button>
              <div class="article-actions">
                <button class="action-btn like" :class="{ active: article.isLiked }" @click="toggleLike(article)">
                  <i class="far fa-heart"></i>
                  <span>{{ article.likes }}</span>
                </button>
                <button class="action-btn comment">
                  <i class="far fa-comment"></i>
                  <span>{{ article.comments }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button 
          :disabled="currentPage === 1" 
          @click="currentPage--"
          class="page-btn"
        >
          <i class="fas fa-chevron-left"></i> 上一页
        </button>
        <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
        <button 
          :disabled="currentPage === totalPages" 
          @click="currentPage++"
          class="page-btn"
        >
          下一页 <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TableOfContents from '@/components/TableOfContents.vue'

export default {
  name: 'ArticlePage',
  components: {
    TableOfContents
  },
  data() {
    return {
      isDarkMode: false,
      currentArticle: null,
      currentCategory: 'all',
      searchQuery: '',
      selectedTags: [],
      currentPage: 1,
      pageSize: 6,
      categories: [
        { id: 'all', name: '全部文章', icon: 'fas fa-th-large' },
        { id: 'frontend', name: '前端开发', icon: 'fas fa-code' },
        { id: 'backend', name: '后端开发', icon: 'fas fa-server' },
        { id: 'devops', name: 'DevOps', icon: 'fas fa-tools' },
        { id: 'algorithm', name: '算法', icon: 'fas fa-brain' }
      ],
      articles: [
        {
          id: 1,
          title: 'Vue3 组合式 API 实战指南',
          excerpt: '深入探讨 Vue3 组合式 API 的使用方法和最佳实践，包括 setup 函数、响应式系统、生命周期钩子等核心概念...',
          date: '2024-03-20',
          readTime: 8,
          views: 1234,
          likes: 88,
          comments: 23,
          isLiked: false,
          categoryId: 'frontend',
          cover: 'https://picsum.photos/400/200?random=1',
          tags: ['Vue3', 'JavaScript', '前端开发']
        },
        {
          id: 2,
          title: 'Node.js 性能优化实践',
          excerpt: '探索 Node.js 应用性能优化的各种技巧，包括内存管理、异步操作优化、缓��策略等...',
          date: '2024-03-18',
          readTime: 12,
          views: 856,
          likes: 67,
          comments: 15,
          isLiked: true,
          categoryId: 'backend',
          cover: 'https://picsum.photos/400/200?random=2',
          tags: ['Node.js', '性能优化', '后端开发']
        },
        // 添加更多文章...
      ]
    }
  },
  computed: {
    isArticleDetail() {
      return this.$route.params.id !== undefined
    },
    filteredArticles() {
      let result = this.articles

      // 分类筛选
      if (this.currentCategory !== 'all') {
        result = result.filter(article => article.categoryId === this.currentCategory)
      }

      // 搜索筛选
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(article => 
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query)
        )
      }

      // 标签筛选
      if (this.selectedTags.length > 0) {
        result = result.filter(article =>
          this.selectedTags.every(tag => article.tags.includes(tag))
        )
      }

      return result
    },
    totalPages() {
      return Math.ceil(this.filteredArticles.length / this.pageSize)
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler(to) {
        if (to.params.id) {
          this.loadArticle(to.params.id)
        }
      }
    }
  },
  methods: {
    async loadArticle(id) {
      // 模拟从后端加载文章数据
      const article = this.articles.find(a => a.id === parseInt(id))
      if (article) {
        // 模拟文章内容
        article.content = `
          <h2>引言</h2>
          <p>这是一段示例文章内容...</p>
          <h2>第一部分</h2>
          <p>详细内容...</p>
          <h3>1.1 小节</h3>
          <p>更多内容...</p>
          <h2>第二部分</h2>
          <p>继续讲解...</p>
          <h3>2.1 小节</h3>
          <p>深入探讨...</p>
        `
        this.currentArticle = article
      }
    },
    getCategoryName(id) {
      const category = this.categories.find(cat => cat.id === id)
      return category ? category.name : ''
    },
    addTag(tag) {
      if (!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag)
      }
    },
    removeTag(tag) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag)
    },
    toggleLike(article) {
      article.isLiked = !article.isLiked
      article.likes += article.isLiked ? 1 : -1
    },
    readArticle(id) {
      // 跳转到文章详情页
      this.$router.push(`/article/${id}`)
    }
  }
}
</script>

<style scoped>
.article-page {
  padding: 20px;
  animation: fadeIn 0.5s ease-out;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 2.5em;
  color: var(--text-primary);
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background: rgba(103, 58, 183, 0.08);
  color: rgba(103, 58, 183, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transform-origin: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-btn i {
  font-size: 1.1em;
  opacity: 0.8;
}

.category-btn:hover {
  background: rgba(103, 58, 183, 0.15);
  color: #673ab7;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(103, 58, 183, 0.1);
}

.category-btn.active {
  background: rgba(103, 58, 183, 0.2);
  color: #673ab7;
  box-shadow: 0 4px 15px rgba(103, 58, 183, 0.15);
}

.category-btn.active::after {
  display: none;
}

.category-btn:active {
  transform: scale(0.95);
}

.search-bar {
  margin-bottom: 30px;
}

.search-input {
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  background: white;
  box-shadow: var(--card-shadow);
  font-size: 1.1em;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  box-shadow: var(--hover-shadow);
}

.filter-tags {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.filter-tag {
  padding: 5px 10px;
  background: rgba(103, 58, 183, 0.15);
  color: #673ab7;
  border-radius: 15px;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  background: rgba(103, 58, 183, 0.2);
  transform: translateY(-2px);
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.article-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

.article-image {
  position: relative;
  height: 200px;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-category {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 15px;
  background: #673ab7;
  color: white;
  border-radius: 15px;
  font-size: 0.9em;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(103, 58, 183, 0.3);
  transition: all 0.3s ease;
}

.article-card:hover .article-category {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(103, 58, 183, 0.4);
}

.article-content {
  padding: 20px;
}

.article-title {
  font-size: 1.4em;
  margin-bottom: 10px;
  color: var(--text-primary);
  line-height: 1.4;
}

.article-meta {
  display: flex;
  gap: 15px;
  color: var(--text-light);
  font-size: 0.9em;
  margin-bottom: 15px;
}

.article-meta i {
  margin-right: 5px;
}

.article-excerpt {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.article-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tag {
  padding: 4px 12px;
  background: rgba(103, 58, 183, 0.08);
  color: rgba(103, 58, 183, 0.8);
  border-radius: 15px;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tag:hover {
  background: rgba(103, 58, 183, 0.15);
  color: #673ab7;
  transform: translateY(-2px);
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.read-more {
  padding: 8px 16px;
  background: #673ab7;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.read-more:hover {
  background: #5e35b1;
  transform: translateX(5px);
}

.article-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  padding: 8px 12px;
  border: none;
  background: var(--bg-secondary);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.action-btn:hover {
  background: var(--primary-light);
  color: white;
}

.action-btn.active {
  background: var(--accent-color);
  color: white;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.page-btn {
  padding: 10px 20px;
  border: none;
  background: #673ab7;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-btn:disabled {
  background: var(--text-light);
  cursor: not-allowed;
}

.page-btn:not(:disabled):hover {
  background: #5e35b1;
  transform: translateX(5px);
}

.page-info {
  font-size: 1.1em;
  color: var(--text-secondary);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
  
  .category-tabs {
    overflow-x: auto;
    padding-bottom: 10px;
  }
  
  .article-meta {
    flex-wrap: wrap;
  }
}

.article-detail {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.article-content {
  background: var(--bg-primary);
  padding: 40px;
  border-radius: 10px;
  box-shadow: var(--card-shadow);
}

.article-content h1 {
  font-size: 2.5em;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.article-meta {
  display: flex;
  gap: 20px;
  color: var(--text-light);
  margin-bottom: 20px;
}

.article-body {
  color: var(--text-primary);
  line-height: 1.8;
  margin-top: 30px;
}

.article-body h2 {
  font-size: 1.8em;
  margin: 40px 0 20px;
  color: var(--text-primary);
}

.article-body h3 {
  font-size: 1.4em;
  margin: 30px 0 15px;
  color: var(--text-primary);
}

.article-body p {
  margin-bottom: 20px;
}

@media (max-width: 1280px) {
  .article-detail {
    padding: 20px;
  }
  
  .article-content {
    padding: 20px;
  }
}
</style> 