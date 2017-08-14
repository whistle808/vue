<template>
    <section class="details">
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{news.title}}</div>
            <div class="mui-card-footer">
                <span>创建时间：{{ news.add_time | formatDate("YYYY-MM-DD")}}</span>
                <span>浏览量：{{ news.click }}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="news.content"></div>
            </div>
        </div>
        <v-comment :id="id"></v-comment>
    </section>
</template>

<script>
import newsConfig from "../../js/config.js";
import Ctitle from "../common/title.vue";
import Ccomment from "../common/comment.vue";

export default {
    data() {
        return {
            title: "新闻详情",
            news: {},
            id: this.$route.params.id
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
        "v-title": Ctitle,
        "v-comment" : Ccomment
    }
}
</script>

<style lang="less">

</style>

