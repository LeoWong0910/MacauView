<template>
    <div>
        <div>
            <el-carousel :interval="4000" type="card" height="300pxContainer(
                child: Container
            )(
                child: 
            )">
                <el-carousel-item v-for="image in images" :key="image.alt">
                  <img :src="image.src" :alt="image.alt" class="carousel-image" />
                </el-carousel-item>
            </el-carousel>
        </div>
    
        <!-- <div class="content-card left-image">
            <el-avatar shape="square" size="500" src="www" />
            <div class="description">
                <h3 class="head">School</h3>
                <p class="text">This is hell</p>
            </div>
        </div> -->
        <div class="card-list">
            <div v-for="item in 10" :key="item">
                <ContentCard 
                    :image-src="'www'"
                    :head="'School ' + item"
                    :text="'This is hell'"
                    :isLeftImage="item % 2 !== 0"/>
            </div>
        </div>
    </div>
</template> 

<script setup>
    import  {ref} from 'vue';
    import ContentCard from '../components/ContentCard.vue';
    // const images = ref([
    //     {
    //         src: image1,
    //         alt: 'Image 1'
    //     },
    //     {
    //         src: image2,
    //         alt: 'Image 2'
    //     }
    // ]);
    const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,gif}');

    const images = ref([]);
    for (const path in imageModules) {
        imageModules[path]().then((mod) => {
            images.value.push({
            src: mod.default,
            alt: path.split('/').pop()
            });
        });
    }


</script>

<style lang="scss" scoped>
.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-list {
    margin: 0.5rem;
}

</style>