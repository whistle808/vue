<template>
    <section class="comment">
        <div class="mui-card">
            <div class="mui-card-header"><h4>发表评论</h4></div>
            <div class="mui-card-content">
                <textarea v-model="comments" id="textarea" rows="5" placeholder="请发表你的看法"></textarea>
                <button @click="sendComment" type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">提交</button>
            </div>
        </div>
    
        <div class="mui-card">
            <div class="mui-card-header"><h4>评论列表</h4></div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
                    <li v-for="(item,i) in commentList" :key ="i" class="mui-table-view-cell">
                        <div>
                            <span>用户: {{item.user_name}}</span>
                            <span class="mui-pull-right">评论时间: {{item.add_time | formatDate}}</span>
                        </div>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
                <button @click="getComment" type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">{{moreLine}}</button>
            </div>
        </div>
    
    </section>
</template>

<script>
import newsConfig from "../../js/config.js";
import { Toast } from 'mint-ui';
export default {
    props: ["id"],
    data() {
        return {
            comments: "",
            commentList:[],
            pageIndex : 1,
            moreLine :"加载更多"

        }
    },
    methods: {
        sendComment() {

            let url = newsConfig.sendcomments + this.id;
            let data = {content: this.comments};

            this.$http.post(url,data,{emulateJSON: "true"}).then(req =>{
                if(req.body.status == 0){
                    this.commentList.unshift({
                        user_name:"齐天大圣",
                        add_time: new Date(),
                        content: this.comments
                    });
                };
                this.comments = "",
                Toast({
                    message: "操作成功",
                    iconClass: 'icon icon-success'
                })
            })
        },
        getComment(){
            let url = newsConfig.getcomments + this.id+"?pageindex=" + this.pageIndex;
            this.$http.get(url).then(req=>{
                 if (req.body.status == 0) {
                     if(req.body.message.length >0){
                         this.commentList.push(...req.body.message);
                         console.log(this.commentList);
                         this.pageIndex++;
                     }else{
                        this.moreLine="没有更多了"
                     }
                 }
            })
        }
    },
    created(){
        this.getComment();
    }
}
</script>

<style lang="less">

</style>
