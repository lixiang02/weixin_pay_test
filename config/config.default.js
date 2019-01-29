'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548058372980_8846';

  // add your config here
  config.middleware = [];

  config.wechatPay = {
    appId: 'wxdb71d271976cef77',
    key: 'Px9LoEXlomnzsU9axadwN50M4FLup5nx',
    mchId: '1524943161',
    pfx: '', // 允许传Buffer或者证书的本地路径
    litePay: true,
  };

  config.test = {
    password: 'b536e84db36a014984afd6c7fe86092d',
  };

  config.test1 = {
    object1: {
      password: '5f8ba3946c255b51596c7a4d0041c704',
    },
    array1: [ 1, 2, 3, 4 ],
    number1: 123,
    nil1: null,
    undef1: undefined,
    nilString: '',
    func1: () => { },
  };

  config.test2 = {
    test2_1: {
      test2_2: {
        test2_3: {
          test2_4: {
            test2_5: {
              password: '804e5fa7728309541d6c97be8c7c6d31',
              password_5: '555555',
            },
            password_4: '444444',
          },
          password_3: '333333',
        },
        password_2: '222222',
      },
      password_1: '111111',
    },
  };

  config.dump = {
    ignore: new Set([ 'password' ]),
  };

  return config;
};
