<template>
    <div class="content-card" :class="isLeftImage ? 'left-image' : 'right-image'">
        <el-avatar shape="square" fit="cover" size="default" :src="imageSrc" />
        <div class="description">
            <h3 class="head">{{ head }}</h3>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
      imageSrc: {
        type: String,
        required: true
      },
      head: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      isLeftImage: {
        type: Boolean,
        default: true
      }
    });
</script>

<style lang="scss" scoped>
.content-card {
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1.5px solid #eaeaea;
    border-radius: 0.45rem;
    &.left-image {
        flex-direction: row;
    }

    &.right-image {
        flex-direction: row-reverse;
    }
  
    .el-avatar {
        flex: none;
        width: 500px;
        height: 250px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%; 
            object-fit: cover;
        }
    }
  
    .description {
        flex: 1;
        
        .head {
            margin: 0;
            padding-top: 15px;
        }
        .text {  
            margin: 0;
            padding: 10px;
        }
    }
}
</style>
