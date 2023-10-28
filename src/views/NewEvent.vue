<template>
    <div>
        <div v-for="item in items" :key="item.link">
            <el-card class="card-effect" @click="showDetail(item)">
                <h2><a :href="item.link">{{ item.title }}</a></h2>
                <!-- <p v-html="item.description"></p> -->
                <p>{{ item.pubDate }}</p>
            </el-card>
        </div>

        <el-dialog v-model="showDialog" title="New Event Invitation">
            <h2><a :href="detail.link">{{detail.title}}<el-icon><Link /></el-icon></a></h2>
            <el-divider/>
            <p v-html="detail.description"></p>
            <el-divider/>
            <p>{{detail.pubDate}}</p>
        </el-dialog>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import X2JS from 'x2js'; // Import the x2js library

    const items = ref([]);
    const showDialog = ref(false);
    const detail = ref({});


    onMounted(async () => {
        try {
            const response = await axios.get('/rss/whatson_en.xml');
            const x2js = new X2JS();
            const jsonData = x2js.xml2js(response.data);
            items.value = jsonData.rss.channel.item; 
        } catch (error) {
            console.error("Error fetching or parsing XML:", error);
        }
    });

    const showDetail = (data) => {
        detail.value = data;
        showDialog.value = true;
    }
</script>

<style lang="scss" scoped>
.card-effect {
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.05) translateY(-5px) !important;
    }
}
</style>
