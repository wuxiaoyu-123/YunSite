<template>
  <div class="business-card">
    <div class="card">
      <div class="avatar">
        <img src="https://picsum.photos/200" alt="头像">
      </div>
      <div class="info">
        <h2>张三</h2>
        <p>职位：软件工程师</p>
        <p>邮箱：zhangsan@example.com</p>
        <p>电话：123-4567-8900</p>
        <p>技能：Vue.js, JavaScript, HTML, CSS</p>
        <p class="description">
          个人简介：热爱编程，对新技术充满热情。有多年的前端开发经验，
          擅长使用Vue.js框架开发现代化的Web应用。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessCard'
}
</script>

<style scoped>
.business-card {
  padding: 20px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  padding: 20px;
  display: flex;
  max-width: 800px;
  margin: 0 auto;
}

.avatar {
  flex: 0 0 200px;
  margin-right: 30px;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}

.info {
  flex: 1;
}

h2 {
  margin-top: 0;
  color: #333;
}

p {
  margin: 10px 0;
  color: #666;
}

.description {
  margin-top: 20px;
  line-height: 1.6;
}
</style> 