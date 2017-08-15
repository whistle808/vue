<template>
    <section class="photoList">
        <!--图片导航  -->
        <ul class="photoNav">
            <li>
                <router-link to="/photo/list/0">
                    全部
                </router-link>
            </li>
            <li v-for="item in categoryList" :key="item.id">
                <router-link :to="'/photo/list/'+item.id">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
        <!--图片列表  -->
        <div class="mui-card" v-for="item in photoList" :key="item.id">
            <router-link :to="'/api/getimageInfo/'+item.id">
                <div class="mui-card-header mui-card-media" :style="getStyle(item)"></div>
    
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>{{item.title}}</p>
                        <p style="color: #333;">{{item.zhaiyao}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
import newsConfig from "../../js/config.js";
export default {
    data() {
        return {
            categoryList: [],
            photoList: []
        }
    },
    watch: {
        $route() {
            this.getPhoto(this.$route.params.id);
        }
    },
    methods: {
        getCategory() {
            let url = newsConfig.getPNav;
            this.$http.get(url).then(req => {
                // console.log("43");
                let body = req.body;
                if (body.status == 0) {
                    // console.log("43");   
                    this.categoryList = body.message;
                }
            })
        },
        getPhoto(id) {
            let url = newsConfig.getPhoto + "/" + id;
            console.log(url);
            this.$http.get(url).then(req => {
                let body = req.body;
                if (body.status == 0) {
                    // console.log(body.message);
                    this.photoList =
                        this.photoList = body.message.map(function (photo, i) {
                            photo.img_url = newsConfig.imgDomain + photo.img_url;
                            return photo;
                        });
                    // console.log(this.photoList);

                }
            })
        },
        getStyle(item) {
            return "height:40vw;background-image:url(" + item.img_url + ")"
        }
    },
    created() {
        this.getCategory();
        this.getPhoto(this.$route.params.id);
    }
}
</script>

<style scoped lang="less">
.photoList {
    // width:100%;
    .photoNav {
        // overflow: hidden;   
        list-style: none; // width: 200%;
        height: 28px;
        margin: 0;
        padding: 0;
        padding: 2px;
        li {
            box-sizing: border-box;
            height: 28px;
            line-height: 28px;
            float: left;
            margin-right: 5px;
            color: #26a2ff;
            &:hover {
                border-bottom: 2px solid #26a2ff;
            }
        }
    }
    .mui-card {
        clear: both;
    }
}
</style>



