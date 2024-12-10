<template>
  <div class="snowflakes" aria-hidden="true">
    <!-- 左侧雪花 -->
    <div v-for="n in 10" :key="`left-${n}`" class="snowflake left-snow">❅</div>
    <!-- 右侧雪花 -->
    <div v-for="n in 10" :key="`right-${n}`" class="snowflake right-snow">❅</div>
  </div>
</template>

<script>
export default {
  name: 'SnowflakeEffect'
}
</script>

<style scoped>
.snowflakes {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1000;
}

.snowflake {
  position: fixed;
  color: var(--primary-light);
  font-size: 1.2em;
  text-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}

/* 添加一些雪花的变体颜色 */
.snowflake:nth-of-type(3n) {
  color: var(--secondary-light);
  text-shadow: 0 0 5px rgba(243, 156, 18, 0.3);
}

.snowflake:nth-of-type(3n+1) {
  color: var(--accent-light);
  text-shadow: 0 0 5px rgba(46, 204, 113, 0.3);
}

/* 左侧雪花位置 */
.left-snow:nth-of-type(1) { left: 2%; animation-delay: 0s, 0s; }
.left-snow:nth-of-type(2) { left: 4%; animation-delay: 1s, 1s; }
.left-snow:nth-of-type(3) { left: 6%; animation-delay: 6s, 0.5s; }
.left-snow:nth-of-type(4) { left: 8%; animation-delay: 4s, 2s; }
.left-snow:nth-of-type(5) { left: 10%; animation-delay: 2s, 2s; }
.left-snow:nth-of-type(6) { left: 12%; animation-delay: 8s, 3s; }
.left-snow:nth-of-type(7) { left: 14%; animation-delay: 6s, 2s; }
.left-snow:nth-of-type(8) { left: 16%; animation-delay: 2.5s, 1s; }
.left-snow:nth-of-type(9) { left: 18%; animation-delay: 3s, 1.5s; }
.left-snow:nth-of-type(10) { left: 20%; animation-delay: 4s, 2.5s; }

/* 右侧雪花位置 */
.right-snow:nth-of-type(1) { right: 2%; animation-delay: 5s, 1.5s; }
.right-snow:nth-of-type(2) { right: 4%; animation-delay: 3s, 2.5s; }
.right-snow:nth-of-type(3) { right: 6%; animation-delay: 7s, 2s; }
.right-snow:nth-of-type(4) { right: 8%; animation-delay: 2s, 1s; }
.right-snow:nth-of-type(5) { right: 10%; animation-delay: 4s, 3s; }
.right-snow:nth-of-type(6) { right: 12%; animation-delay: 6s, 2s; }
.right-snow:nth-of-type(7) { right: 14%; animation-delay: 8s, 1.5s; }
.right-snow:nth-of-type(8) { right: 16%; animation-delay: 3s, 2s; }
.right-snow:nth-of-type(9) { right: 18%; animation-delay: 5s, 1s; }
.right-snow:nth-of-type(10) { right: 20%; animation-delay: 7s, 2.5s; }

@keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}

@keyframes snowflakes-shake {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px); /* 减小摇摆幅度 */
  }
}

/* 添加悬浮效果 */
.snowflake:hover {
  animation-play-state: paused;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .left-snow:nth-of-type(n+6),
  .right-snow:nth-of-type(n+6) {
    display: none; /* 在小屏幕上减少雪花数量 */
  }
}
</style> 