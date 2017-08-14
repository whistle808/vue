<template>
    <section class="mint-header   hahah">
        <div @click='rollback' class="mint-header-button is-left">
            <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
                </span>
                <label class="mint-button-text">返回</label>
            </button>
        </div>
        <h1 class="mint-header-title">{{title}}</h1>
        <div class="mint-header-button is-right"></div>
    </section>
</template>

<script>
export default {
    props: ["title"],
    methods: {
        rollback() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less">
.hahah{
    background-color: #fff;
    color: #26a2ff;
}
.list {
    background-color: #ccc;
    border-bottom: 1px solid #888;
}
</style>

