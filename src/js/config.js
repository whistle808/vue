let domain = "http://139.199.192.48:8888";

export default {
    domain : domain,
    getNewList : domain + '/api/getnewslist',
    newsDetails : domain + '/api/getnew/',
    sendcomments: domain + "/api/postcomment/",
    getcomments: domain + "/api/getcomments/"
}