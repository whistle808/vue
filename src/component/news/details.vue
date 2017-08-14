<template>
    <section class="details">
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{news.title}}</div>
            <div class="mui-card-footer">
                <span>创建时间：{{ news.add_time | "formatDate"}}</span>
                <span>浏览量：{{ news.click }}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="news.content"></div>
            </div>
        </div>
    </section>
</template>

<script>
import newsConfig from "../../js/config.js";
import Ctitle from "../common/title.vue"
export default {
    data() {
        return {
            title: "新闻详情",
            news: {}
        }
    },
    methods: {
        getNDetails(){
            let url = newsConfig.newsDetails + this.$route.params.id;
            console.log(url);
            this.$http.get(url).then((req) => {
                req.body.status == 0 && (this.news = req.body.message[0]);
            });
        }
    },
    created() {
        this.getNDetails();
    },
    components: {
        "v-title": Ctitle
    }
}
</script>

<style lang="less">

</style>

