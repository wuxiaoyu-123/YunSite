<template>
  <div class="grade-list">
    <table>
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>语文</th>
          <th>数学</th>
          <th>英语</th>
          <th>总分</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in currentPageData" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.chinese }}</td>
          <td>{{ student.math }}</td>
          <td>{{ student.english }}</td>
          <td>{{ student.total }}</td>
        </tr>
      </tbody>
    </table>
    
    <div class="pagination">
      <button 
        :disabled="currentPage === 1" 
        @click="currentPage--"
      >上一页</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button 
        :disabled="currentPage === totalPages" 
        @click="currentPage++"
      >下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GradeList',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      students: Array.from({ length: 50 }, (_, index) => ({
        id: String(2024001 + index).padStart(7, '0'),
        name: `学生${index + 1}`,
        chinese: Math.floor(Math.random() * 30 + 70),
        math: Math.floor(Math.random() * 30 + 70),
        english: Math.floor(Math.random() * 30 + 70),
        get total() {
          return this.chinese + this.math + this.english;
        }
      }))
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.students.length / this.pageSize)
    },
    currentPageData() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.students.slice(start, end)
    }
  }
}
</script>

<style scoped>
.grade-list {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 12px;
  text-align: center;
  border: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
}

tr:nth-child(even) {
  background-color: #fafafa;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

button {
  padding: 8px 16px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style> 