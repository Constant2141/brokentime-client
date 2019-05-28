const baseurl = 'http://localhost:3333/'
// const baseurl = 'http://broken.zqyy.site:3333/'



let  api = {};

api.login = baseurl + 'login'; //登录
api.createPeriod = baseurl + 'api/createPeriod';  //创建周期
api.createTable = baseurl + 'api/createTable';   //创建大的时间
api.createBTable = baseurl + 'api/createBTable'; //创建破碎时间

module.exports = {
   api
}
