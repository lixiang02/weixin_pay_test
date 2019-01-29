// 'use strict';

// const fs = require('fs');
// const crypto = require('crypto');

// const SECRET_KEY_PATH = '/Users/apple/Node/secret_key.txt';

// class AppBootHook {

//   constructor(app) {
//     this.app = app;
//   }

//   configWillLoad() {
//     console.log('------', this.app.config.test, this.app.config.dump.ignore);
//     const ignoreKeySets = (this.app.config.dump || {}).ignore || new Set();

//     // 验证
//     // if (process.env.NODE_ENV !== 'production' || !fs.existsSync(SECRET_KEY_PATH) || !ignoreKeySets.size) { return; }
//     console.log('----可以解密---');

//     const secretKey = fs.readFileSync(SECRET_KEY_PATH, 'utf-8');
//     const key = crypto.scryptSync(secretKey, 'salt', 24);
//     const iv = Buffer.alloc(16, 0);
//     this.app.config.test.password = aesDecrypt(this.app.config.test.password, key, iv);
//   }
// }

// // 解密
// const aesDecrypt = function(encrypted, key, iv) {
//   try {
//     const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
//     let decrypted = decipher.update(encrypted, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
//   } catch (error) {
//     console.log('decipher fail', error.stack || error);
//     return '';
//   }
// };

// module.exports = AppBootHook;
