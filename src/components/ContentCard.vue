<template>
    <div :class="isLeftImage ? 'left-image' : 'right-image'" class="card-effect content-card" @click="showDetails" >
        <el-avatar shape="square" fit="cover" size="default" :src="imageSrc" />
        <div class="description">
            <h3 class="head">{{ head }}</h3>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>
    import { defineProps ,defineEmits } from 'vue';

    const props = defineProps({
      info: {
        type: Object,
        required: true
      },
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

    const emit = defineEmits(['openDialog']); 

    const showDetails = () => {
        emit('openDialog', props.info);
    };
</script>

<style lang="scss" scoped>
.card-effect {
    transition: 0.3s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.05) translateY(-5px) !important;
    }
}

.content-card {
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1.5px solid #eaeaea;
    border-radius: 0.45rem;
    background-color: #242424;

    cursor: pointer;

    transition: transform 0.3s ease;

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
