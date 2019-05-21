var DEV = "http://dv.hongte.info"
var getData = function (url, callback) {
  url = DEV + url;
  $.ajax({
    type: "GET",
    url: url,
    // data: {username:$("#username").val(), content:$("#content").val()},
    dataType: "json",
    success: function (res) {
      // console.log(res.data)
      callback(res);
    }
  });
}

//获取数据
var g = {
  //累计撮合金额
  cumulativeFixedAmount: function () {
    getData('/bu/rcdata/total_out_put_money', function (res) {
      $('#cumulativeFixedAmount').attr('data-num', parseInt(res.data));
      $('#cumulativeFixedAmount').animateNums();
    })
  },
  //累计撮合单数
  cmulativeFixSingular: function () {
    getData('/bu/rcdata/total_out_put_orders', function (res) {
      $('#cmulativeFixSingular').attr('data-num', parseInt(res.data));
      $('#cmulativeFixSingular').animateNums();
    })
  },
  //累计服务企业与个人
  cumulativeService: function () {
    getData('/bu/rcdata/total_service_company_personal_num', function (res) {
      $('#cumulativeService').attr('data-num', parseInt(res.data));
      $('#cumulativeService').animateNums();
    })
  },
  //撮合业务余额
  businessBalance: function () {
    getData('/bu/rcdata/total_business_balance', function (res) {
      $('#businessBalance').attr('data-num', parseInt(res.data));
      $('#businessBalance').animateNums();
    })
  },
  //各月撮合金额趋势
  amountTrend: function () {
    getData('/bu/rcdata/every_month_out_put_money_trend', function (res) {
      s.amountTrend(res.data);
    })
  },
  //当月分公司撮合金额排名top10--房贷
  ranking: function () {
    getData('/bu/rcdata/every_month_branch_out_put_money_trend', function (res) {
      // console.log(res.data);
      function ranking(_json) {
        var listHtml = '';
        _json.forEach(function (x, index) {
          if (x.companyName.length >= 8) {
            x.companyName = x.companyName.substring(0, 7) + '...';
          }
          if (parseFloat(x.percent) > 100) {
            x.percent = "100";
          }
          listHtml += '<li class="ranking">' +
            '<span class="num">' + x.top + '</span>' +
            '<span class="name">' + x.companyName + '</span>' +
            '<span class="progress-bar orange stripes">' +
            '<span style="width: ' + x.percent + '"></span>' +
            '</span>' +
            '<span class="money">' + (x.money / 10000).toFixed(2) + '</span>' +
            '</li>';
        });
        return listHtml
      }
      $('#houseRanking').html(ranking(res.data.houseRanking));
      $('#carRanking').html(ranking(res.data.carRanking));

      scrollTxt('#roll-wrap', wrap1);
      scrollTxt('#roll-wrap2', wrap2);
    })
  },
  //借款期限占比分布
  term: function () {
    getData('/bu/rcdata/borrow_limit_spread', function (res) {
      // console.log(res.data);
      s.term(res.data);
    })
  },
  //客户撮合情况
  singular: function () {
    getData('/bu/rcdata/apply_output_get_num', function (res) {
      // console.log(res.data);
      s.singular(res.data);
    })
  },
  //客户行业分布
  industry: function () {
    getData('/bu/rcdata/service_custorm_profession_spread', function (res) {
      function industry(industryJson) {
        var listHtml = '';
        industryJson.forEach(function (x, index) {
          listHtml += '<li>' +
            '<p class="li-left">' + x.percent + '</p>' +
            '<p class="li-right">' +
            '<span>' + x.describe + '</span>' +
            '</p>' +
            '</li>';
        });
        $('#industry').html(listHtml);
      }
      industry(res.data);
      randomPlay();
    })
  },
  //客户地区分布
  region: function () {
    getData('/bu/rcdata/service_custom_area_spread', function (res) {
      // console.log(res.data);
      s.region(res.data);
    })
  },
  //中心地图金额的分布
  map: function () {
    getData('/bu/rcdata/centre_map', function (res) {
      // res.data.tipsJson=[{
      //   name: '山西',//省份
      //   companyName: '山西1',//借款公司名称
      //   time: '2018-09-02 09:00:12',//借款时间
      //   loaner: '王先生',//借款人姓名
      //   loanAmounts: '800,900'//借款金额
      // },
      // {
      //   name: '河南',//省份
      //   companyName: '河南2',//借款公司名称
      //   time: '2018-09-02 09:00:12',//借款时间
      //   loaner: '王先生',//借款人姓名
      //   loanAmounts: '800,900'//借款金额
      // },
      // {
      //   name: '广西',//省份
      //   companyName: '广西3',//借款公司名称
      //   time: '2018-09-02 09:00:12',//借款时间
      //   loaner: '王先生',//借款人姓名
      //   loanAmounts: '800,900'//借款金额
      // },
      // {
      //   name: '台湾',//省份
      //   companyName: '台湾4',//借款公司名称
      //   time: '2018-09-02 09:00:12',//借款时间
      //   loaner: '王先生',//借款人姓名
      //   loanAmounts: '800,900'//借款金额
      // },
      // {
      //   name: '北京',//省份
      //   companyName: '北京5',//借款公司名称
      //   time: '2018-09-02 09:00:12',//借款时间
      //   loaner: '王先生',//借款人姓名
      //   loanAmounts: '800,900'//借款金额
      // }];
      // cosole.log(res.data);
      for (var i = 0; i < res.data.mapJson.length; i++) {
        var map = res.data.mapJson[i];
        if ('内蒙古自治区' == map.name)
          map.name = '内蒙古';
        if ('宁夏回族自治区' == map.name)
          map.name = '宁夏';
        if ('广西壮族自治区' == map.name)
          map.name = '广西';
        if ('新疆维吾尔自治区' == map.name)
          map.name = '新疆';
        if ('西藏自治区' == map.name)
          map.name = '西藏';
        if ('香港特别行政区' == map.name)
          map.name = '香港';
        if ('澳门特别行政区' == map.name)
          map.name = '澳门';
      }
      s.map(res.data.mapJson, res.data.tipsJson);
    })
  }
}





g.cumulativeFixedAmount(); //累计撮合金额
g.cmulativeFixSingular(); //累计撮合单数
g.cumulativeService(); //累计撮合单数
g.businessBalance(); //累计撮合单数
g.amountTrend(); //各月撮合金额趋势
g.ranking(); //当月分公司撮合金额排名top10
g.term(); //借款期限占比分布
g.singular(); //客户撮合情况
g.industry(); //客户行业分布
g.region(); //客户地区分布
g.map(); //中心地图金额的分布




var curTime = function () {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  if (h < 10) m = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  // add a zero in front of numbers<10
  return h + ":" + m + ":" + s;

};


var DTimer = null;
Dtimer = setInterval(function () {
  g.cumulativeFixedAmount(); //累计撮合金额
  g.cmulativeFixSingular(); //累计撮合单数
  g.cumulativeService(); //累计撮合单数
  g.businessBalance(); //累计撮合单数
  // g.amountTrend();//各月撮合金额趋势
  // g.ranking(); //当月分公司撮合金额排名top10
  // g.term(); //借款期限占比分布
  // g.singular(); //客户撮合情况
  // g.industry(); //客户行业分布
  // g.region(); //客户地区分布
  // g.map(); //中心地图金额的分布


  if (curTime == '08:00:00') {
    g.amountTrend(); //各月撮合金额趋势
    g.ranking(); //当月分公司撮合金额排名top10
    g.term(); //借款期限占比分布
    g.singular(); //客户撮合情况
    g.industry(); //客户行业分布
    g.region(); //客户地区分布
  }
}, 5000)