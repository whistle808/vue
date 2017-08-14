<template>
    <section class="list">
        <v-title :title="title"></v-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
              <router-link :to="'/news/details/' + item.id">   
                    <img :src="item.img_url" class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis">{{item.title}}</p>
                        <div class="list_item">
                            <p>创建时间：{{item.add_time | "formatDate"}}</p>
                            <p>点击量：{{ item.click }}</p>
                        </div>
                    </div>
               </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import newsConfig from "../../js/config.js";
import Ctitle from "../common/title.vue";
export default {
    data(){
        return {
            title: "新闻列表",
            list : []
        }
    },
    methods :{
        getNewList(){
            let url = newsConfig.getNewList;
            this.$http.get(url).then((req)=>{
                // cosole.log(req);
                req.body.status == 0 && (this.list = req.body.message);
            });
        }
    },
    created(){
        this.getNewList();
    },
    components:{
        "v-title":Ctitle
    }


}
</script>

<style lang="less">
 .list {
        &_item p{
            display: inline-block;
        }
    }
</style>

