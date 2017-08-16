<template>
    <section class="photoList">
        <!--图片导航  -->
        <div id="wrapper">
            <ul class="photoNav">
                <li>
                    <router-link :to="{name:'photoL', params:{id: 0 }}">
                        全部
                    </router-link>
                </li>
                <li v-for="item in categoryList" :key="item.id">
                    <router-link :to="{name:'photoL',params:{id: item.id} }">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
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
import IScroll from 'iscroll';
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
                    this.$el.querySelector("#wrapper ul").style.width = 100 * this.categoryList.length + "px";
                    var myScroll = new IScroll('#wrapper',{
                        scrollY:false,
                        scrollX:true
                    });
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
#wrapper {
    position: relative;
    overflow: hidden;
    .photoNav {
        // overflow: hidden;   
        list-style: none; // width: 200%;
        width: 1200px;
        height: 40px;
        padding: 2px;
        line-height: 40px;
        text-align: center;
        margin: 5px 0 0 0 !important;
        li {
            box-sizing: border-box;
            height: 40px;
            width:88px;
            line-height: 40px;
             border-radius: 10px;
            float: left;
            margin-right: 2px;
            color: #26a2ff;
            background-color: snow;        
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



