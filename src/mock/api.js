import Mock from 'mockjs'

Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|10001-11000": 0,     // 生成10001-11000范围内随机ID
        // "username": "@name",  // 生成随机英文名
        "username": "@cname",    // 生成随机中文名
        "email": "admin@51hxj.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});