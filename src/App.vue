<script setup>
import { ref, computed } from 'vue'
import { gitLessons } from './data.js'

const activeLessonId = ref(gitLessons[0].id)

const activeLesson = computed(() => {
  return gitLessons.find(lesson => lesson.id === activeLessonId.value)
})

const copyCode = (code, event) => {
  navigator.clipboard.writeText(code).then(() => {
    const btn = event.target
    btn.textContent = 'Copied!'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = 'Copy'
      btn.classList.remove('copied')
    }, 2000)
  })
}
</script>

<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h1 class="sidebar-title">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" 
        stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
        Git Mastery
      </h1>
      <nav>
        <ul class="nav-list">
          <li v-for="lesson in gitLessons" :key="lesson.id" class="nav-item">
            <button 
              @click="activeLessonId = lesson.id"
              :class="['nav-button', { active: activeLessonId === lesson.id }]"
            >
              {{ lesson.title }}
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <div v-if="activeLesson">
        <header class="lesson-header">
          <h2 class="lesson-title">{{ activeLesson.title }}</h2>
          <p v-if="activeLesson.description" class="lesson-description">
            {{ activeLesson.description }}
          </p>
        </header>

        <section 
          v-for="(section, index) in activeLesson.sections" 
          :key="index" 
          class="lesson-section"
        >
          <h3 v-if="section.subtitle" class="section-subtitle">{{ section.subtitle }}</h3>
          <p v-if="section.text" class="section-text">{{ section.text }}</p>

          <div class="commands-list">
            <div 
              v-for="(cmd, cmdIndex) in section.commands" 
              :key="cmdIndex" 
              class="command-card"
            >
              <p class="command-desc">{{ cmd.desc }}</p>
              <div class="code-wrapper">
                <button class="copy-btn" @click="copyCode(cmd.code, $event)">Copy</button>
                <pre><code>{{ cmd.code }}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>