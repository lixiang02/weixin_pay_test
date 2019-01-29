'use strict';

const Controller = require('egg').Controller;

const out_trade_no = '1217752501201407033233368028';

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
    try {
      await this.ctx.app.litePay.setDebug(true);

      const res = await this.ctx.app.litePay.unifiedOrder({
        body: '腾讯充值中心-QQ会员充值',
        out_trade_no,
        total_fee: 101,
        spbill_create_ip: '8.8.8.8',
        notify_url: 'https://example.com/wechatpay/notify',
      });
      console.log('--order --res---success---', res);

      // const res1 = await this.ctx.app.litePay.orderQuery({
      //   out_trade_no,
      // });
      // console.log('--order--query--res---success---', res1);

      // const res2 = await this.ctx.app.litePay.closeOrder({
      //   out_trade_no,
      // });
      // console.log('--close--order---res---success---', res2);


      // const res3 = await this.ctx.app.litePay.orderQuery({
      //   out_trade_no,
      // });
      // console.log('--order--query-3-res---success---', res3);

    } catch (error) {
      console.log('-----error---', error.stack);
    }
    console.log('----end--->');
    // console.log('-------', JSON.stringify(this.ctx.app.config, 0, 2));
  }
}

module.exports = HomeController;
