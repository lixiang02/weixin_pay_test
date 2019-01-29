# egg-plugin-wechat-pay

egg.js plugin for wechat pay

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### 使用方式

- 在config/config.default.js中增加配置

```js
{
    "wechatPay": {
        'appId': '',
        'key': '',
        'mchId': '',
        'pfx': '', // 允许传Buffer或者证书的本地路径

        // 是否实例化支付业务类 默认false, 只有为true，该实例才能出现在应用类中
        'appPay': false, // APP 支付
        'litePay': false, // 小程序支付
        'pubPay': false, // 公众号支付
        'pubQrPay': false, // 扫码支付
        'pubScanPay': false, // 刷卡支付
        'wapPay': false, // H5 支付
    }
}
```

- 在config/plugin.js中引用插件

```js
{
    exports.eggPluginWechatPay = {
        enable: true,
        package: 'egg-plugin-wechat-pay'
    };
}
```

- 就可以使用 类似 app.appPay 调用实例


[egg]: https://eggjs.org