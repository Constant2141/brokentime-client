const baseurl = 'http://192.168.1.106:3333/'
// const baseurl = s'http://broken.zqyy.site:3333/'



let  api = {};

api.login = baseurl + 'login'; //登录
api.createPeriod = baseurl + 'api/createPeriod';  //创建周期
api.createTable = baseurl + 'api/createTable';   //创建大的时间
api.getTable = baseurl + 'api/getTable';   //展示大的时间
api.createBTable = baseurl + 'api/createBTable'; //创建破碎时间

module.exports = {
   api
}
