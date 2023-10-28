
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
          <router-link to="/new-event"><el-icon><Present /></el-icon> New Event </router-link>
          <router-link to="/about-me"><el-icon><Avatar /></el-icon> About Me </router-link>
      </div>
    </header>
  
    <main>
      <router-view />
    </main>

    <footer>
      <el-divider/>
      <p>By: LeoWong(P2104214), A MPU student.</p>
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
  padding: 1rem 2rem;
  height: auto;
  background-color: #343434; // A slightly different shade from #242424 for differentiation
  border-bottom: 1px solid #3a3a3a; // Adjusted the color for the border
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2); // Enhanced shadow for depth

  .left-icons {
    display: block;
  
    &:hover {
      cursor: pointer;
    }
  
    svg {
      display: block;
      text {
        fill: #ffffff; // White text for contrast
      }
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
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff; // White text for contrast

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3); // A brighter border on hover
      }
    }
  }
}



main {
  padding: 2rem;
  min-height: calc(100vh - 5rem - 5rem);
}

</style>