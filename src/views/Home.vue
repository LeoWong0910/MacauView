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
            <div v-for="(data, index) in datas" :key="data.id">
                <ContentCard 
                    class="reveal"
                    :image-src="data.imageLink"
                    :head="data.name"
                    :text="data.description"
                    :isLeftImage="index % 2 == 0"/>
            </div>
        </div>
    </div>
</template> 

<script setup>
    import  {ref, onMounted} from 'vue';
    import ScrollReveal from 'scrollreveal';
    import ContentCard from '../components/ContentCard.vue';

    import { places } from '../public/data.js';


    onMounted(() => {
        ScrollReveal().reveal('.reveal', {
        distance: '30px',
        origin: 'left',
        opacity: 0,
        duration: 1000,
        reset: true 
        })
    });
    const datas = ref(places);


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