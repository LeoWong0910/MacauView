<template>
    <div>
        <h1>Total number of bars: {{data.length + 1}}</h1>
        <el-card v-for="bar in data" :key="bar.com_tel" :header="'Bars - ' + bar.com_name_cn">
            <h3 class="barName">{{bar.com_name_cn}}</h3>
            <div class="barInfo">
                <div class="barInfoItem">
                    <span class="barInfoItemTitle">地址：</span>
                    <span class="barInfoItemContent">{{bar.com_ads_cn}}</span>
                </div>
                <div class="barInfoItem">
                    <span class="barInfoItemTitle">電話：</span>
                    <span class="barInfoItemContent">{{bar.com_tel}}</span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import X2JS from 'x2js';

    const data = ref([]);
    const x2js = new X2JS();
    onMounted( async () => {
        try {
            const response = await axios.get('/dst_bars', {
                headers: {
                    Authorization : 'APPCODE 09d43a591fba407fb862412970667de4',
                }
            });
            //convert xml to json object
            const jsonObj = x2js.xml2js(response.data);
            // console.log(jsonObj.mgto.bars);
            data.value = jsonObj.mgto.bars;
        } catch (err) {
            console.error("Error fetching or parsing XML:", err);
        }
    });

</script>

<style lang="scss" scoped>


</style>