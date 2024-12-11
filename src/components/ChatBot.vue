<template>
  <div>
    <!-- 聊天图标 -->
    <div 
      v-show="!isOpen" 
      class="chat-icon"
      @click="toggleChat"
    >
      <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>

    <!-- 聊天窗口 -->
    <div 
      v-show="isOpen" 
      class="chat-window"
      :class="{ 'is-dragging': isDragging }"
      :style="chatWindowStyle"
      ref="chatWindow"
    >
      <!-- 聊天头部 -->
      <div class="chat-header">
        <!-- 拖拽区域 -->
        <div 
          class="drag-handle"
          @mousedown="startDrag"
        >
          <div class="header-left">
            <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span>AI 助手</span>
            <div class="typing-indicator" v-if="isTyping">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="header-actions">
          <button class="minimize-btn" @click="toggleChat">
            <i class="el-icon-minus"></i>
          </button>
        </div>
      </div>

      <!-- 聊天内容区 -->
      <div class="chat-messages" ref="messageContainer">
        <div 
          v-for="(message, index) in messages" 
          :key="index"
          :class="['message', message.type]"
        >
          <div class="message-avatar">
            <el-avatar 
              :size="36" 
              :src="message.type === 'sent' ? 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' : 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
            ></el-avatar>
          </div>
          <div class="message-wrapper">
            <div class="message-content" v-html="message.content"></div>
            <div class="message-time">{{ message.time }}</div>
          </div>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="chat-input">
        <textarea 
          ref="inputArea"
          v-model="inputMessage"
          @keyup.enter.exact.prevent="sendMessage"
          @keyup.enter.shift.exact="newLine"
          placeholder="输入消息... (Shift + Enter 换行)"
          :rows="inputRows"
          @input="adjustTextarea"
        ></textarea>
        <button @click="sendMessage" :disabled="isTyping || !inputMessage.trim()">
          <i class="el-icon-position"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBot',
  data() {
    return {
      isOpen: false,
      messages: [
        {
          content: '你好！我是AI助手,有什么可以帮你的吗?',
          type: 'received',
          time: this.getCurrentTime()
        }
      ],
      inputMessage: '',
      position: {
        right: '30px',
        bottom: '30px'
      },
      isDragging: false,
      dragOffset: { x: 0, y: 0 },
      isTyping: false,
      inputRows: 1,
      maxRows: 5,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      initialPosition: null
    }
  },
  computed: {
    chatWindowStyle() {
      return {
        ...this.position,
        transform: this.isDragging ? 'scale(0.98)' : 'scale(1)',
        transition: this.isDragging ? 'transform 0.2s' : 'all 0.3s ease'
      }
    }
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$nextTick(() => {
          this.$refs.inputArea?.focus()
        })
      }
    },
    getCurrentTime() {
      const now = new Date()
      return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    },
    async typeMessage(message) {
      this.isTyping = true
      let displayText = ''
      const words = message.split('')
      
      for (let i = 0; i < words.length; i++) {
        displayText += words[i]
        this.messages[this.messages.length - 1].content = displayText
        await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 50))
      }
      this.isTyping = false
    },
    newLine(e) {
      e.preventDefault()
      this.inputMessage += '\n'
      this.adjustTextarea()
    },
    adjustTextarea() {
      const textarea = this.$refs.inputArea
      if (textarea) {
        textarea.style.height = 'auto'
        textarea.style.height = Math.min(textarea.scrollHeight, this.maxRows * 20) + 'px'
        this.inputRows = Math.min(Math.floor(textarea.scrollHeight / 20), this.maxRows)
      }
    },
    async sendMessage(e) {
      if (e) e.preventDefault()
      if (!this.inputMessage.trim() || this.isTyping) return

      // 添加用户消息
      const userMessage = this.inputMessage.trim()
      this.messages.push({
        content: userMessage.replace(/\n/g, '<br>'),
        type: 'sent',
        time: this.getCurrentTime()
      })

      this.inputMessage = ''
      this.adjustTextarea()
      this.$nextTick(() => {
        this.scrollToBottom()
      })

      // 添加空的AI回复消息
      this.messages.push({
        content: '',
        type: 'received',
        time: this.getCurrentTime()
      })

      // 模拟AI回复
      const responses = [
        `我理解你的问题是关于"${userMessage}"。让我来帮你解答。`,
        '这是一个很好的问题！让我详细解释一。',
        '我明白你的意思了。这个问题的关键在于...',
        '根据我的理解，你想知道的是...',
        '这个问题很有趣！让我从以下几个方面来回答：'
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      await this.typeMessage(randomResponse)
      
      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },
    scrollToBottom() {
      const container = this.$refs.messageContainer
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
      this.ensureWindowInBounds()
    },
    ensureWindowInBounds() {
      if (!this.$refs.chatWindow) return

      const rect = this.$refs.chatWindow.getBoundingClientRect()
      const padding = 10 // 距边界的最小距离

      // 如果窗口超出右边界
      if (rect.right > this.windowWidth - padding) {
        this.position.left = `${this.windowWidth - rect.width - padding}px`
        delete this.position.right
      }

      // 如果窗口超出左边界
      if (rect.left < padding) {
        this.position.left = `${padding}px`
      }

      // 如果窗口超出底部边界
      if (rect.bottom > this.windowHeight - padding) {
        this.position.top = `${this.windowHeight - rect.height - padding}px`
        delete this.position.bottom
      }

      // 如果窗口超出顶部边界
      if (rect.top < padding) {
        this.position.top = `${padding}px`
      }
    },
    startDrag(event) {
      // 如果不是左键点击，则返回
      if (event.button !== 0) return
      
      this.isDragging = true
      const rect = this.$refs.chatWindow.getBoundingClientRect()
      this.dragOffset = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      }

      // 记录初始位置
      this.initialPosition = { ...this.position }

      // 添加临时的全局样式
      document.body.style.userSelect = 'none'
      document.body.style.cursor = 'move'

      // 使用 addEventListener 而不是 on 属性
      window.addEventListener('mousemove', this.onDrag)
      window.addEventListener('mouseup', this.stopDrag)

      // 阻止默认行为和冒泡
      event.preventDefault()
      event.stopPropagation()
    },
    onDrag(event) {
      if (!this.isDragging) return

      requestAnimationFrame(() => {
        const x = event.clientX - this.dragOffset.x
        const y = event.clientY - this.dragOffset.y
        const padding = 10

        // 限制在可视区域内
        const maxX = this.windowWidth - this.$refs.chatWindow.offsetWidth - padding
        const maxY = this.windowHeight - this.$refs.chatWindow.offsetHeight - padding

        const boundedX = Math.max(padding, Math.min(x, maxX))
        const boundedY = Math.max(padding, Math.min(y, maxY))

        // 更新位置
        this.position = {
          left: `${boundedX}px`,
          top: `${boundedY}px`
        }

        // 移除right和bottom属性
        delete this.position.right
        delete this.position.bottom
      })
    },
    stopDrag() {
      if (!this.isDragging) return

      this.isDragging = false
      
      // 移除临时的全局样式
      document.body.style.userSelect = ''
      document.body.style.cursor = ''

      // 检查是否需要吸附到边缘
      this.snapToEdges()

      // 移除事件监听器
      window.removeEventListener('mousemove', this.onDrag)
      window.removeEventListener('mouseup', this.stopDrag)
    },
    snapToEdges() {
      const rect = this.$refs.chatWindow.getBoundingClientRect()
      const snapThreshold = 20 // 吸附阈值
      const padding = 10

      // 吸附到右边
      if (this.windowWidth - rect.right < snapThreshold) {
        this.position = {
          right: `${padding}px`,
          top: `${rect.top}px`
        }
      }
      // 吸附到左边
      else if (rect.left < snapThreshold) {
        this.position = {
          left: `${padding}px`,
          top: `${rect.top}px`
        }
      }
      // 吸附到底部
      if (this.windowHeight - rect.bottom < snapThreshold) {
        this.position = {
          ...(this.position.left ? { left: this.position.left } : { right: this.position.right }),
          bottom: `${padding}px`
        }
        delete this.position.top
      }
    }
  },
  mounted() {
    // 添加窗口大小改变监听
    window.addEventListener('resize', this.handleResize)

    // 添加键盘快捷键
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault()
        this.toggleChat()
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    document.removeEventListener('mousemove', this.onDrag)
    document.removeEventListener('mouseup', this.stopDrag)
  }
}
</script>

<style scoped>
.chat-icon {
  position: fixed;
  right: 40px;
  bottom: 160px;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.chat-icon:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.chat-icon:active {
  transform: translateY(-1px) scale(0.98);
}

.chat-window {
  position: fixed;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  will-change: transform;
  touch-action: none;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-window.is-dragging {
  transition: none;
  cursor: move;
}

.chat-header {
  padding: 0;
  background: var(--primary-color, #1a73e8);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  user-select: none;
}

.drag-handle {
  flex: 1;
  padding: 15px 20px;
  cursor: move;
  display: flex;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-actions {
  display: flex;
  align-items: center;
  padding-right: 10px;
}

.minimize-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.minimize-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.minimize-btn:active {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(0.95);
}

.minimize-btn i {
  font-size: 18px;
}

/* 拖拽时的视觉反馈 */
.chat-window.is-dragging .drag-handle {
  cursor: move;
  background: rgba(255, 255, 255, 0.05);
}

.chat-window.is-dragging {
  opacity: 0.95;
  transform: scale(0.98);
}

.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f8f9fa;
}

.message {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  max-width: 100%;
}

.message.sent {
  flex-direction: row-reverse;
}

.message-avatar {
  flex-shrink: 0;
}

.message-wrapper {
  max-width: calc(100% - 46px);
}

.message-content {
  padding: 12px 16px;
  border-radius: 15px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  word-break: break-word;
  line-height: 1.5;
}

.message.sent .message-content {
  background: var(--primary-color, #1a73e8);
  color: white;
}

.message-time {
  font-size: 0.8em;
  color: #666;
  margin-top: 5px;
  text-align: right;
}

.chat-input {
  padding: 15px;
  background: white;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

.chat-input textarea {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  transition: all 0.3s ease;
  resize: none;
  min-height: 40px;
  max-height: 120px;
  line-height: 1.5;
  font-size: 14px;
}

.chat-input textarea:focus {
  border-color: var(--primary-color, #1a73e8);
  box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.1);
}

.chat-input button {
  padding: 10px 15px;
  background: var(--primary-color, #1a73e8);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-input button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.chat-input button:not(:disabled):hover {
  background: var(--primary-dark, #1557b0);
  transform: translateX(2px);
}

.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 0 8px;
}

.typing-indicator span {
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: typing 1s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(2) { animation-delay: 0.3s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.mr-2 {
  margin-right: 8px;
}

/* 滚动条样式 */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* 添加拖拽时的视觉反馈 */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(0.98); }
  100% { transform: scale(1); }
}

.isDragging {
  animation: pulse 1s ease infinite;
  opacity: 0.98;
  cursor: move !important;
}

@media (max-width: 768px) {
  .chat-icon {
    right: 20px;
    bottom: 140px;
  }
}
</style> 