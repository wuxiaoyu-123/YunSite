<template>
  <div class="carousel">
    <div class="carousel-container" :style="containerStyle">
      <div 
        v-for="(item, index) in carouselItems" 
        :key="index" 
        class="carousel-item"
        :class="{ active: currentIndex === index }"
      >
        <img 
          :src="item.image" 
          :alt="item.title"
          loading="lazy"
        >
        <div class="carousel-caption">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
    
    <div class="carousel-controls">
      <button class="control-btn prev" @click="prev">
        <i class="el-icon-arrow-left"></i>
      </button>
      <button class="control-btn next" @click="next">
        <i class="el-icon-arrow-right"></i>
      </button>
    </div>
    
    <div class="carousel-indicators">
      <span 
        v-for="(_, index) in carouselItems" 
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
      isTransitioning: false
    }
  },
  computed: {
    carouselItems() {
      return this.items
    },
    containerStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: this.isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
      }
    }
  },
  methods: {
    next() {
      if (this.isTransitioning) return
      this.isTransitioning = true
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length
      this.resetTransition()
    },
    prev() {
      if (this.isTransitioning) return
      this.isTransitioning = true
      this.currentIndex = this.currentIndex === 0 
        ? this.carouselItems.length - 1 
        : this.currentIndex - 1
      this.resetTransition()
    },
    goTo(index) {
      if (this.isTransitioning || this.currentIndex === index) return
      this.isTransitioning = true
      this.currentIndex = index
      this.resetTransition()
    },
    resetTransition() {
      setTimeout(() => {
        this.isTransitioning = false
      }, 500)
    },
    startTimer() {
      if (!this.timer) {
        this.timer = setInterval(this.next, 5000)
      }
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.stopTimer()
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
}

.carousel-container {
  display: flex;
  height: 100%;
  will-change: transform;
}

.carousel-item {
  position: relative;
  flex: 0 0 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  color: white;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    transparent
  );
}

.carousel-caption h3 {
  font-size: 1.8em;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.control-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel:hover .control-btn {
  opacity: 1;
}

.control-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.prev { left: 20px; }
.next { right: 20px; }

.control-btn i {
  font-size: 20px;
  color: #333;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  z-index: 2;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel {
    height: 300px;
  }
  
  .carousel-caption h3 {
    font-size: 1.4em;
  }
  
  .control-btn {
    width: 36px;
    height: 36px;
  }
}
</style> 