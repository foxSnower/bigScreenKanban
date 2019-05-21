var Json = {
  cumulativeFixedAmount:'136572344341',
  cmulativeFixSingular:'1365743412',
  cumulativeService:'13657432341',
  businessBalance:'13657234341',
  //各月撮合金额趋势
  amountTrend: [
    {
      date: '2018/01',//日期
      smallMicro: 100,//小微
      carLoan: 80,//车贷
      housingLoan: 70,//房贷
      total: 250//整体贷款总额
    },
    {
      date: '2018/02',
      smallMicro: 150,
      carLoan: 80,
      housingLoan: 120,
      total: 350
    },
    {
      date: '2018/03',
      smallMicro: 90,
      carLoan: 120,
      housingLoan: 75,
      total: 285
    },
    {
      date: '2018/04',
      smallMicro: 110,
      carLoan: 100,
      housingLoan: 100,
      total: 310
    },
    {
      date: '2018/05',
      smallMicro: 180,
      carLoan: 160,
      housingLoan: 140,
      total: 480
    }
  ],
  //客户撮合情况
  singular: [
    {
      date: '2018/01',//日期
      apply: 100,//申请
      rate: '80%',//撮合
      matchmaking: 80//撮合率
    },
    {
      date: '2018/02',
      apply: 130,
      rate: '70%',
      matchmaking: 53
    },
    {
      date: '2018/03',
      apply: 100,
      rate: '30%',
      matchmaking: 30
    },
    {
      date: '2018/04',
      apply: 90,
      rate: '80%',
      matchmaking: 88
    },
    {
      date: '2018/05',
      apply: 100,
      rate: '80%',
      matchmaking: 80
    }
  ],
  //借款期限占比分布
  term: [
    {
      name: '1期',
      value: '15%'
    },
    {
      name: '3期',
      value: '15%'
    },
    {
      name: '6期',
      value:  '15%'
    },
    {
      name: '12期',
      value: '17%'
    },
    {
      name: '18期',
      value: '20%'
    },
    {
      name: '24期',
      value:  '15%'
    },
    {
      name: '36期',
      value:  '15%'
    },
    {
      name: '46期',
      value:  '15%'
    }
  ],
  //客户地区分布
  region: [
    {
      name: '广西',
      value: '15%'
    },
    {
      name: '广东',
      value: '10%'
    },
    {
      name: '黑龙江',
      value: '15%'
    },
    {
      name: '北京',
      value: '17%'
    },
    {
      name: '福建',
      value: '20%'
    },
    {
      name: '湖南',
      value: '5%'
    },
    {
      name: '成都',
      value: '35%'
    },
    {
      name: '湖北',
      value: '15%'
    },
    {
      name: '上海',
      value: '25%'
    },
    {
      name: '其他',
      value: '10%'
    }
  ],
  //当月分公司撮合金额排名top10--房贷
  houseRanking:[
    {
      top: '1',//排名
      companyName: '呼噜浩特分公司',//公司名称
      percent: '100%',//比例
      money:'600'//金额
    },
    {
      top: '2',
      companyName: '呼噜浩特分公司',
      percent: '80%',
      money:'600'
    },
    {
      top: '3',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '4',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '5',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '6',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '7',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '8',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '9',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '10',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    }
  ],
  houseRanking2:[
    {
      top: '1',//排名
      companyName: '呼噜浩特分公司',//公司名称
      percent: '100%',//比例
      money:'600'//金额
    },
    {
      top: '2',
      companyName: '呼噜浩特分公司',
      percent: '10%',
      money:'6003'
    },
    {
      top: '3',
      companyName: '呼噜浩特分公司',
      percent: '11%',
      money:'600'
    },
    {
      top: '4',
      companyName: '呼噜浩特分公司',
      percent: '75%',
      money:'600'
    },
    {
      top: '5',
      companyName: '呼噜浩特分公司',
      percent: '75%',
      money:'600'
    },
    {
      top: '6',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'60320'
    },
    {
      top: '7',
      companyName: '呼噜浩特分公司',
      percent: '79%',
      money:'600'
    },
    {
      top: '8',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '9',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '10',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    }
  ],
  //当月分公司撮合金额排名top10--车贷
  carRanking:[
    {
      top: '1',//排名
      companyName: '呼噜浩特分公司',//公司名称
      percent: '100%',//比例
      money:'600'//金额
    },
    {
      top: '2',
      companyName: '呼噜浩特分公司',
      percent: '80%',
      money:'600'
    },
    {
      top: '3',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '4',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '5',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '6',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '7',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '8',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '9',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '10',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    }
  ],
  //当月分公司撮合金额排名top10--小微贷
  smallRanking:[
    {
      top: '1',//排名
      companyName: '呼噜浩特分公司',//公司名称
      percent: '100%',//比例
      money:'600'//金额
    },
    {
      top: '2',
      companyName: '呼噜浩特分公司',
      percent: '80%',
      money:'600'
    },
    {
      top: '3',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '4',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '5',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '6',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '7',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '8',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '9',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    },
    {
      top: '10',
      companyName: '呼噜浩特分公司',
      percent: '71%',
      money:'600'
    }
  ],
};
//中心地图金额的分布
var mapJson = [
  {
    name: '北京',//省份
    value: Math.round(Math.random() * 1000000000)//金额
  },
  {
    name: '天津',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '上海',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '重庆',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '河北',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '河南',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '云南',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '辽宁',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '黑龙江',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '湖南',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '安徽',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '山东',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '新疆',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '江苏',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '浙江',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '江西',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '湖北',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '广西',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '甘肃',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '山西',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '内蒙古',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '陕西',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '吉林',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '福建',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '贵州',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '广东',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '青海',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '西藏',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '四川',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '宁夏',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '海南',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '台湾',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '香港',
    value: Math.round(Math.random() * 1000000000)
  },
  {
    name: '澳门',
    value: Math.round(Math.random() * 1000000000)
  }
];
//近一段时间的金额增长
var tipsJson = [
  {
    name: '广西',//省份
    companyName: '广西分公司',//借款公司名称
    time: '09:00:12',//借款时间
    loaner: '王先生',//借款人姓名
    loanAmounts: '800,900'//借款金额
  },
  {
    name: '河南',
    companyName: '河南分公司',
    time: '09:00:12',
    loaner: '许先生',
    loanAmounts: '830,900'
  },
  {
    name: '广东',
    companyName: '广东分公司',
    time: '09:12:12',
    loaner: '许先生',
    loanAmounts: '1800,900'
  },
  {
    name: '四川',
    companyName: '四川',
    time: '09:23:12',
    loaner: '许先生',
    loanAmounts: '840,900'
  },
  {
    name: '湖北',
    companyName: '湖北分公司',
    time: '09:00:12',
    loaner: '许先生',
    loanAmounts: '87,900'
  }
];

var tipsJson2 = [
  {
    name: '北京',//省份
    companyName: '北京',//借款公司名称
    time: '09:00:12',//借款时间
    loaner: '王先生',//借款人姓名
    loanAmounts: '800,900'//借款金额
  },
  {
    name: '山西',
    companyName: '山西',
    time: '09:00:12',
    loaner: '许先生',
    loanAmounts: '830,900'
  }
];
//客户行业分布
var industryJson = [
  {
    percent: '1%',//所占比例
    describe: '信息傳输'//行业名称
  },
  {
    percent: '2%',
    describe: '软件和信息技服务业'
  },
  {
    percent: '3%',
    describe: '信信息技服务业'
  },
  {
    percent: '4%',
    describe: '信息傳输、软件'
  },
  {
    percent: '5%',
    describe: '信息傳输息技服务业'
  },
  {
    percent: '6%',
    describe: '信息傳输信息技服务业'
  },
  {
    percent: '7%',
    describe: '信息傳输件和信息技服务业'
  },
  {
    percent: '8%',
    describe: '信息傳和信息技服务业'
  },
  {
    percent: '9%',
    describe: '信息傳息技服务业'
  },

];
