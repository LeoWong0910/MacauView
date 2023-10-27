
<template>
  <div>
    <header>
      <router-link class="left-icons" to="/">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
              <text x="10" y="40" font-family="Arial" font-size="40" fill="black">Macau_</text>
          </svg>
        </div>
      </router-link>
      <div class="tabs">
          <router-link to="/"><el-icon><HomeFilled /></el-icon> Home </router-link>
          <router-link to="/myself"><el-icon><Avatar /></el-icon> MySelf </router-link>
          <router-link to="/references"><el-icon><Histogram /></el-icon> References </router-link>
      </div>
    </header>
  
    <main>
      <router-view />
    </main>

    <footer>
      <p>By: Your Name</p>
    </footer>

    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  background-color: #615649;
  border-bottom: 1px solid #ccc;

  .left-icons {
    display: block;
  
    &:hover {
      cursor: pointer;
    }
  
    svg {
      display: block;
    }
  }

  .tabs {
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 1rem;
    flex-grow: 1; 

    router-link {
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
    }
  }
}

main {
  padding: 2rem;
  min-height: calc(100vh - 5rem - 5rem);
}

</style>