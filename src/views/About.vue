<template>
  <div class="about-page">
    <div class="profile-card">
      <div class="profile-header">
        <img src="https://picsum.photos/200" alt="头像" class="avatar">
        <h1>关于我</h1>
      </div>
      <div class="profile-content">
        <p class="bio">热爱编程的全栈开发工程师，专注于前端技术栈。喜欢分享技术经验和学习心得。</p>
        <div class="skills">
          <h2>技术栈</h2>
          <div class="skill-tags">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">微前端</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  padding: 20px;
}

.profile-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.profile-header {
  text-align: center;
  margin-bottom: 30px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.bio {
  font-size: 1.1em;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}
</style> 