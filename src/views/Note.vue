<template>
  <div class="note-page">
    <h1 class="page-title">学习笔记</h1>
    <div class="note-categories">
      <button 
        v-for="cat in categories" 
        :key="cat.id"
        :class="['category-btn', { active: currentCategory === cat.id }]"
        @click="currentCategory = cat.id"
      >
        {{ cat.name }}
      </button>
    </div>
    <div class="notes-grid">
      <div v-for="note in filteredNotes" :key="note.id" class="note-card">
        <div class="note-header">
          <span class="note-date">{{ note.date }}</span>
          <span class="note-category">{{ getCategoryName(note.categoryId) }}</span>
        </div>
        <h3>{{ note.title }}</h3>
        <p class="note-excerpt">{{ note.excerpt }}</p>
        <div class="note-footer">
          <span class="note-tag" v-for="tag in note.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotePage',
  data() {
    return {
      currentCategory: 'all',
      categories: [
        { id: 'all', name: '全部' },
        { id: 'frontend', name: '前端开发' },
        { id: 'backend', name: '后端开发' },
        { id: 'devops', name: 'DevOps' }
      ],
      notes: [
        {
          id: 1,
          title: 'Vue3 Composition API 学习笔记',
          excerpt: 'Setup函数的使用方法和注意事项...',
          date: '2024-03-15',
          categoryId: 'frontend',
          tags: ['Vue3', 'JavaScript']
        },
        // 更多笔记...
      ]
    }
  },
  computed: {
    filteredNotes() {
      if (this.currentCategory === 'all') return this.notes
      return this.notes.filter(note => note.categoryId === this.currentCategory)
    }
  },
  methods: {
    getCategoryName(id) {
      const category = this.categories.find(cat => cat.id === id)
      return category ? category.name : ''
    }
  }
}
</script>

<style scoped>
.note-page {
  padding: 20px;
}

.note-categories {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn.active {
  background: #3498db;
  color: white;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.note-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.note-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #666;
}

.note-tag {
  background: #e8f5e9;
  color: #4CAF50;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 0.9em;
}
</style> 