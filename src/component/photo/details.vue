<template>
    <section class="photoDetails">
        <v-title></v-title>
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>{{info.title}}</h4>
                <div>
                    <span>添加时间：{{info.add_time | formatDate}}</span>
                    <span>点击量：{{info.click}}</span>
                </div>
            </div>
            <div class="mui-card-content">
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in hums" :key="item.src">
                        <img v-preview="item.src" :src="item.src" />
                    </li>
                </ul>
            </div>
            <div class="mui-card-footer" v-html='info.content'></div>
        </div>
        <v-comment></v-comment>
    </section>
</template>
<script>
import newsConfig from "../../js/config.js";
import Ctitle from '../common/title.vue';
import Ccomment from '../common/comment.vue';

export default {
    data() {
        return {
            info: {},
            hums: []
        }
    },
    methods: {
        // 获取图片信息
        getPhotoDeteils() {
            let url = newsConfig.getPhotoInfo + "/" + this.$route.params.id;
            // console.log(url);
            this.$http.get(url).then(req => {
                let body = req.body;
                if (body.status == 0) {
                    this.info = body.message[0];
                }
                // console.log(this.info);
            })
        },
        // 获取缩略图
        getHums() {
            let url = newsConfig.getHums + "/" + this.$route.params.id;
            this.$http.get(url).then(req => {
                let body = req.body;
                if (body.status == 0) {
                    // console.log(body.message);
                    this.hums = body.message.map(function (photo, i) {
                        photo.src = newsConfig.imgDomain + photo.src;

                        return photo;
                    });
                    console.log(this.hums);
                }
            })
        }
    },
    components: {
        "v-title": Ctitle,
        "v-comment": Ccomment
    },
    created() {
        this.getPhotoDeteils();
        this.getHums();
    }

}
</script>

<style lang="less">
.photoDetails {
    .mui-card .mui-card-header {
        display: block;
        div {
            height: 15px;
            span {
                font-size: 12px;
            }
            span:nth-of-type(1) {
                float: left;
            }
            span:nth-of-type(2) {
                float: right;
            }
        }
    }
    .mui-card .mui-card-footer {
        display: block;
    }
    .mui-card .mui-card-content{
        img{
            width:100%;
        }
    }
}
</style>

