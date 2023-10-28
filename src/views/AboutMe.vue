<template>
    <div class="intro-container">
      <el-card class="intro-card">
        <div class="card-header">
          <span>{{ person.name }}</span>
        </div>
        <div>
          <p><strong>Eduation:</strong> {{ person.education }}</p>
          <p><strong>Hobbies:</strong> {{ person.hobbies }}</p>
          <p><strong>Introduction:</strong> {{ person.introduction }}</p>
        </div>
        <el-button @click="doSomething">Secret Button</el-button>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue';

    const person = ref({
        name: 'LeoWong',
        education: 'Macao Polytechnic University',
        hobbies: 'Coding, Gaming, Reading',
        introduction: 'I am a student from Macao Polytechnic University. I am currently studying in the Bachelor of Science in Computing. This is an assignment for the course of Multimedia.'
      })

    const doSomething = () => {
        person.value.name = 'LeoWong (p2104214)';
      }
  </script>
  
  <style scoped>
  .intro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .intro-card {
    width: 60%;
  }
  
  .profile-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
  
  .card-header {
    font-size: 24px;
    text-align: center;
  }
  </style>
  