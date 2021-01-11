var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
  var url = decodeURIComponent(req.body.url);
  var data = req.body.params;
  var options = {
    url: url,
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Host': 'i.waimai.meituan.com',
      'Referer': 'https://h5.waimai.meituan.com/waimai/mindex/home',
      'Cookie': 'terminal=i; w_utmz="utm_campaign=(direct)&utm_source=5000&utm_medium=(none)&utm_content=(none)&utm_term=(none)"; w_visitid=2ebee6f1-a1df-43d2-892b-c76dc778c9ae; w_uuid=BM59GrDUGi9HbtgpX_Vj6CuWxMZrW1wrjtRhCydD13tvHun2quRbJrJCU_Y7LIGW; utm_source=0; wx_channel_id=0; webp=1; wm_order_channel=default; utm_source=; au_trace_key_net=default; _lx_utm=utm_source%3D60066; w_addr=; w_cid=610427; w_cpy=binxian; w_cpy_cn="%E5%BD%AC%E5%8E%BF"; JSESSIONID=hkr010dqnflltueqyxd0wk39; IJSESSIONID=yyoo0lrraf211wt65jpitil5b; iuuid=CB5395FBEA93B96B1E2D48229FC7A7DCD42F09C5A9539CEAA326B314D4F663BC; latlng=43.832703%2C-79.469604%2C1583812901609; ci=1; cityname=%E5%8C%97%E4%BA%AC; backurl=http://i.waimai.meituan.com/user/editaddr; mtcdn=K; i_extend=H__a100040__b1; __utma=74597006.1098193048.1583812902.1583812902.1583812902.1; __utmc=74597006; __utmz=74597006.1583812902.1.1.utmcsr=i.waimai.meituan.com|utmccn=(referral)|utmcmd=referral|utmcct=/searchAddress; __utmb=74597006.2.9.1583812903968; __mta=20692487.1583812703337.1583812906950.1583812910930.10; cssVersion=20271ddf; openh5_uuid=CB5395FBEA93B96B1E2D48229FC7A7DCD42F09C5A9539CEAA326B314D4F663BC; uuid=CB5395FBEA93B96B1E2D48229FC7A7DCD42F09C5A9539CEAA326B314D4F663BC; w_latlng=0,0; w_actual_lat=0; w_actual_lng=0; openh5_uuid=CB5395FBEA93B96B1E2D48229FC7A7DCD42F09C5A9539CEAA326B314D4F663BC; channelType={%22default%22:%220%22}'
    },
    form: data
  }

  request(options, function(error, response, body){
    console.log('body: ', body);
    try {
      res.json(JSON.parse(body));
    }catch(e){
      res.json({});
    }
  })
});

module.exports = router;
