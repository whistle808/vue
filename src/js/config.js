let domain = "http://139.199.192.48:8888";

export default {
    domain : domain,
    imgDomain: 'http://ofv795nmp.bkt.clouddn.com/',
    // 新闻接口的url
    getNewList : domain + '/api/getnewslist',
    newsDetails : domain + '/api/getnew/',

    // 评论接口的url
    sendcomments: domain + "/api/postcomment/",
    getcomments: domain + "/api/getcomments/",

    // 图片接口的url
    getPNav: domain + '/api/getimgcategory',
    getPhoto: domain + "/api/getimages"
}