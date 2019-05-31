const baseurl = 'http://192.168.1.108:3333/'
// const baseurl = s'http://broken.zqyy.site:3333/'



let  api = {};

api.login = baseurl + 'login'; //登录
api.createPeriod = baseurl + 'api/createPeriod';  //创建周期
api.createTable = baseurl + 'api/createTable';   //创建大的时间
api.getTable = baseurl + 'api/getTable';   //展示大的时间
api.createBTable = baseurl + 'api/createBTable'; //创建破碎时间
api.calc = baseurl + 'api/calc';
api.comment = baseurl + 'api/comment';
api.history = baseurl + 'api/history';

module.exports = {
   api
}
