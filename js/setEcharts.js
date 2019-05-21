var ech = {
  //各月撮合金额趋势
  setEcharts1: {
    color: ['#70c1ff', 'red', '#febb00', '#55f3b6'],
    tooltip: {
      trigger: 'axis',
      formatter:'{a0}: {c0}万<br />{a1}: {c1}万<br />{a2}: {c2}万'
    },
    grid: {
      left: '15px',
      right: '10px',
      top: '70px',
      bottom: '5px',
      containLabel: true
    },
    textStyle: {
      color: '#70c1ff' //字体颜色
    },
    legend: {
      top: -5,
      right: '10px',
      textStyle: {
        color: '#70c1ff',
        fontSize: '14'
      },
      itemWidth: 15,
      itemHeight: 10,
      data: [] //['邮件营销sh', '搜索引擎'],
    },
    xAxis: {
      type: 'category',
      axisTick: {
        //刻度线不显示
        show: false
      },
      axisLabel: {
        // rotate: 35
      },
      axisLine: {
        lineStyle: {
          color: '#70c1ff'
        }
      },
      data: [] //'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
    },
    yAxis: [{
        type: 'value',
        name: '', //GDP（亿元）
        nameGap: 15,
        nameTextStyle: {
          color: '#fff'
        },
        axisTick: {
          //刻度线不显示
          show: false,
          // minInterval:80000,
        },
        axisLabel: {
          formatter: '{value}'
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#70c1ff'
          }
        }
      }

    ],
    series: []
  },
  //客户撮合情况
  setEcharts: {
    color: ['#70c1ff', '#febb00', '#55f3b6', '#d5556d'],
    tooltip: {
      trigger: 'axis',
      formatter:'{a0}: {c0}笔<br />{a1}: {c1}笔<br />{a2}: {c2}%'
      // formatter: '{b0}: {c0}<br />{b1}: {c1}'
    },
    grid: {
      left: '5px',
      right: '5px',
      top: '70px',
      bottom: '5px',
      containLabel: true
    },
    textStyle: {
      color: '#70c1ff' //字体颜色
    },
    legend: {
      top: -5,
      right: '10px',
      textStyle: {
        color: '#70c1ff',
        fontSize: '14'
      },
      itemWidth: 15,
      itemHeight: 10,
      data: [] //['邮件营销sh', '搜索引擎'],
    },
    xAxis: {
      type: 'category',
      axisTick: {
        //刻度线不显示
        show: false
      },
      axisLabel: {
        // rotate: 35
      },
      axisLine: {
        lineStyle: {
          color: '#70c1ff'
        }
      },
      data: [] //'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
    },
    yAxis: [{
        type: 'value',
        name: '', //GDP（亿元）
        nameGap: 15,
        nameTextStyle: {
          color: '#fff'
        },
        axisTick: {
          //刻度线不显示
          show: false
        },
        axisLabel: {
          formatter: '{value}'
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#70c1ff'
          }
        }
      },
      {
        type: 'value',
        name: '', //GDP（亿元）
        nameGap: 15,
        nameTextStyle: {
          color: '#fff'
        },
        axisTick: {
          //刻度线不显示
          show: false
        },
        axisLabel: {
          formatter: '{value}'
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#70c1ff'
          }
        }
      }
    ],
    series: []
  },
  //借款期限占比分布
  setEchartsPie: {
    color: [
      '#70c1ff',
      '#f8d348',
      '#55f3b6',
      '#5955f3',
      '#a233f0',
      '#f3557e',
      '#abff7d',
      '#fb84fd'
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
    },
    legend: {
      right: 5,
      top: 35,
      textStyle: {
        fontSize: '12',
        color: '#70c1ff'
      },
      width: 200,
      height: 150,
      icon: 'stack',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 15,
      orient: 'vertical',
      data: [] //'rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8'
    },
    series: {
      name: '期限占比分布',
      type: 'pie',
      radius: [20, 70],
      center: ['25%', '55%'],
      roseType: 'area',
      label: {
        normal: {
          show: false,
          // formatter: '{b}'
          formatter: function (params) {
            // console.log(params);
            var name =
              params.name.substring(0, params.name.indexOf(' ')) +
              '\n' +
              params.value;
            return name;
          },
          length: 3
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        borderWidth: 0,
        borderColor: '#fff'
      },
      data: []
    }
  },
  //客户地区分布
  setEchartsPie2: {
    color: [
      '#70c1ff',
      '#f8d348',
      '#55f3b6',
      '#5955f3',
      '#a233f0',
      '#f3557e',
      '#abff7d',
      '#fb84fd',
      '#62ec79',
      '#abff7d'
    ],
    tooltip: {
      trigger: 'item',
      // backgroundColor: 'transparent',
      formatter: '{b}'
    },
    legend: {
      right: 5,
      top: 30,
      textStyle: {
        fontSize: '12',
        color: '#70c1ff'
      },
      width: 200,
      height: 150,
      icon: 'stack',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 6,
      orient: 'vertical',
      formatter: function (name) {
        return name;
      },
      data: [] //'rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8'
    },
    series: {
      name: '客户地区分布',
      type: 'pie',
      radius: [30, 50],
      center: ['25%', '55%'],
      // roseType: 'radius',
      z: 2,
      hoverOffset: 15,
      label: {
        normal: {
          show: false,
          // formatter: '{b}'
          formatter: function (params) {
            var name =
              params.name.substring(0, params.name.indexOf(' ')) +
              '\n' +
              params.value;
            return name;
          },
          length: 3
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        borderWidth: 0,
        borderColor: '#fff'
      },
      data: []
    }
  },
  //中心地图图示
  setMap: {
    visualMap: {
      type: 'piecewise', //不连续的
      splitNumber: 6,
      pieces: [{
          min: 1000000000,
          color: '#2543c3',
          symbol: 'stack'
        },
        {
          min: 500000000,
          max: 1000000000,
          color: '#2d6cd5',
          symbol: 'stack'
        },
        {
          min: 200000000,
          max: 500000000,
          color: '#5190de',
          symbol: 'stack'
        },
        {
          min: 100000000,
          max: 200000000,
          color: '#80b4e9',
          symbol: 'stack'
        },
        {
          max: 100000000,
          color: '#b2d9f3',
          symbol: 'stack'
        }
      ],
      left: '15%',
      bottom: 80,
      textStyle: {
        color: '#70c1ff'
      },
      seriesIndex: [0],
      formatter: function (value, value2) {
        var text = '';
        // debugger
        if (value == '1000000000') {
          text = '10亿以上';
        } else if (value2 == '100000000') {
          text = '1亿以下';
        } else {
          text = value / 100000000 + '亿~' + value2 / 100000000 + '亿';
        }
        return text; // 范围标签显示内容。
      },
      orient: 'vertical'
    },
    tooltip: {
      padding: 0,
      enterable: true,
      seriesIndex: 1,
      // alwaysShowContent:true,
      trigger: 'item',
      triggerOn: 'none', //提示框触发的条件
      transitionDuration: 1,
      textStyle: {
        color: '#000',
        decoration: 'none'
      },
      // transitionDuration:2,
      showDelay:1000,                                  //浮层显示的延迟，单位为 ms
      hideDelay:1000,                                //浮层隐藏的延迟，单位为 ms
      position: 'right',
      backgroundColor: 'transparent',
      formatter: function (params) {
        // console.log(params)
        var info = params.data;
        var time = info.time.substring(11, 19);
        var tipHtml = '';
        var companyName = info.companyName;
        //过滤公司名称
        var fileterName = '广东鸿特信息咨询有限公司';
        if (companyName && companyName.indexOf(fileterName) > -1 && companyName.length > fileterName.length) {
          companyName = companyName.split(fileterName)[1];
        }
        tipHtml =
          '<div style="height:88px;position: relative;background: url(./img/bg_tips02.png) no-repeat;background-size:100% 100%;transition:all 2s;">' +
          '<div style="position:absolute;left:-35px;top:-50px;">' +
          '<img src="./img/gif.gif" width="80px">' +
          '</div>' +
          '<div style="height:26px;line-height: 26px;color:#70c1ff;">' +
          '<p style="overflow: hidden;text-indent: 15px;">' +
          '<span style="float: left;">' + companyName + '</span>' +
          '<span style="float: right;padding-right:15px;color:#f7cd55;">' + time + '</span>' +
          '</p>' +
          '<p style="overflow: hidden;text-indent: 15px;">' +
          '<span style="float: left;">借款人：</span>' +
          '<span style="float: right;padding-right:15px;color:#f7cd55;">' + info.loaner + '</span>' +
          '</p>' +
          '<p style="overflow: hidden;text-indent: 15px;">' +
          '<span style="float: left;">借款金额：</span>' +
          '<span style="float: right;padding-right:15px;color:#f7cd55;">' + info.loanAmounts + '</span>' +
          '</p>' +
          '</div>' +
          '</div>';
        return tipHtml;
      }
    },
    geo: {
      show: false,
      map: 'china',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: false,
        }
      },
      roam: true,
    },
    series: [{
        name: 'China',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: {
            label: {
              show: false,

            }
          },
          emphasis: {
            label: {
              show: false,
            },
            areaColor: '',
          }
        },
        data: [],

      },
      {
        name: '实时数据',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        // symbol: 'image:/../../img/gif.gif',
        symbolSize: 5,
        // showEffectOn: 'render',
        // rippleEffect: {
        //   period: 8,
        //   scale: 4,
        //   // brushType: 'stroke'
        // },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            show: false,
            label: {
              show: false,
            },
            color: 'transparent',
            shadowBlur: 20,
            shadowColor: 'transparent',
            opacity: 0
          },
          emphasis: {
            label: {
              show: true,
              formatter: '{b}',
              color: 'transparent',
              position: 'top'
            },
            color: 'transparent',
            shadowBlur: 20,
            shadowColor: 'transparent',
            opacity: 1
          }
        },
        data: [],
        zlevel: 1,
        dataZoom: {
          disabled: false
        }
      }
    ]
  }
};

var s = {
  //各月撮合金额趋势
  amountTrend: function (obj) {
    //解析数据
    var d = {};
    d.seriesName = [];
    d.seriesData1 = [];
    d.seriesData2 = [];
    d.seriesData3 = [];
    d.seriesData4 = [];
    obj.forEach(function (x, index) {
      d.seriesName.push(x.date); //日期
      d.seriesData1.push((x.smallMicro / 10000).toFixed(2)); //小微
      d.seriesData2.push((x.carLoan / 10000).toFixed(2)); //车贷
      d.seriesData3.push((x.housingLoan / 10000).toFixed(2)); //房贷
      d.seriesData4.push((x.total / 10000).toFixed(2)); //整体贷款总额
    });
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('amountTrend'));
    var option = ech.setEcharts1; // 指定图表的类型
    option.series.length = 0;
    option.legend.data.length = 0;
    // 插入数值
    option.xAxis.data = d.seriesName; //x轴数值
    //y轴数值
    option.series.push({
      data:d.seriesData3,
      name: '房贷',
      stack: 'loan',
      barWidth: 15,
      type: 'bar'
    });
    option.series.push({
      data: d.seriesData1,
      name: '小微',
      stack: 'loan',
      // yAxisIndex: 1,
      barWidth: 15,
      type: 'bar'
    });
    option.series.push({
      data: d.seriesData2,
      name: '车贷',
      stack: 'loan',
      barWidth: 15,
      type: 'bar'
    });
    option.series.push({
      data: d.seriesData4,
      name: '整体贷款总额',
      symbol: 'circle',
      symbolSize: 10,
      type: 'line'
    });
    //y轴单位
    option.yAxis[0].name = '单位：万';
    // option.yAxis[1].name = '单位：万';
    //图例数值
    option.series.forEach(function (x, index) {
      option.legend.data.push(x.name);
    });
    //生成实例
    myChart.setOption(option);
    var index = 0; //播放所在下标
    setInterval(function () {
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index - 1
      });
      index++;
      if (index > 5) {
        index = 0;
      }
    }, 2000);
  },
  //客户撮合情况
  singular: function (obj) {
    //解析数据
    var d = {};
    d.seriesName = [];
    d.seriesData1 = [];
    d.seriesData2 = [];
    d.seriesData3 = [];
    obj.forEach(function (x, index) {
      d.seriesName.push(x.date); //日期
      d.seriesData1.push(x.apply); //申请
      d.seriesData2.push(x.matchmaking); //撮合
      d.seriesData3.push(parseFloat(x.rate)); //撮合率
    });
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('singular'));
    var option = ech.setEcharts; // 指定图表的类型
    option.series.length = 0;
    option.legend.data.length = 0;
    // 插入数值
    option.xAxis.data = d.seriesName; //x轴数值
    //y轴数值
    option.series.push({
      data: d.seriesData1,
      name: '申请',
      barWidth: 15,
      type: 'bar'
    });
    option.series.push({
      data: d.seriesData2,
      name: '撮合',
      barWidth: 15,
      type: 'bar'
    });
    option.series.push({
      data: d.seriesData3,
      name: '撮合率',
      yAxisIndex: 1,
      symbol: 'circle',
      symbolSize: 10,
      type: 'line'
    });
    //y轴单位
    option.yAxis[0].name = '单位：笔';
    option.yAxis[1].name = '单位：%';
    //图例数值
    option.series.forEach(function (x, index) {
      option.legend.data.push(x.name);
    });
    //生成实例
    myChart.setOption(option);
    var index = 0; //播放所在下标
    setInterval(function () {
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index - 1
      });
      index++;
      if (index > 5) {
        index = 0;
      }
    }, 2000);
  },
  //借款期限占比分布
  term: function (obj) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('term'));
    var option = ech.setEchartsPie; // 指定图表的类型
    // 插入数值

    option.series.data = obj;
    //图例数值
    obj.forEach(function (x, index) {
      x.name = x.name + ' ' + x.value;
      option.legend.data.push(x.name);
      x.value = parseInt(x.value)
    });
    // console.log(obj);
    //生成实例
    myChart.setOption(option);
    var index = 0; //播放所在下标
    setInterval(function () {
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index - 1
      });
      index++;
      if (index > option.series.data.length) {
        index = 0;
      }
    }, 2000);
  },
  //客户地区分布
  region: function (obj) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('region'));
    var option = ech.setEchartsPie2; // 指定图表的类型
    // 插入数值
    option.series.data = obj;
    //图例数值
    obj.forEach(function (x, index) {
      x.name = x.name + ' ' + x.value;
      console.log(name);
      option.legend.data.push(x.name);
      x.value = parseInt(x.value)
    });
    //生成实例
    myChart.setOption(option);
    var index = 0; //播放所在下标
    setInterval(function () {
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
      });
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index - 1
      });
      index++;
      if (index > option.series.data.length) {
        index = 0;
      }
    }, 2000);
  },
  //中心地图图示
  count: 0,
  map: function (mapJson, tipsJson) {
    s.count++;
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('map'));
    var option = ech.setMap; // 指定图表的类型
    var geoCoordMap = {};
    var mapFeatures = echarts.getMap('china').geoJson.features;
    // console.log(mapFeatures);
    mapFeatures.forEach(function (v) {
      // 地区名称
      var name = v.properties.name;
      // 地区经纬度
      geoCoordMap[name] = v.properties.cp;
    })

    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
            companyName: data[i].companyName,
            time: data[i].time,
            loaner: data[i].loaner,
            loanAmounts: data[i].loanAmounts
          });
        }
      }
      return res;
    };
    // 插入数值
    option.series[0].data = mapJson;
    option.series[1].data = convertData(tipsJson);

    // var index = randomNum(0, option.series[1].data.length); //产生0~4的随机数
    var index = 0; //播放所在下标
    //思路：把原数组打散，然后再依次输出， 这样也可以做到随机永不重复，且效率更高。 
    var randomNumLength = tipsJson.length;
    var originalArray = new Array; //原数组 
    for (var i = 0; i < randomNumLength; i++) {
      originalArray[i] = i + 1;
    }
    //打散
    originalArray.sort(function () {
      return 0.5 - Math.random();
    });
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 1,
      dataIndex: originalArray[0]
    });
    if (s.count == 1) {
      var mTime = setInterval(function () {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 1,
          dataIndex: originalArray[index]
        });
        // clearInterval(mTime);
        setTimeout(() => {
          myChart.dispatchAction({
            type: 'hideTip'
          })
        }, 4500);
        index++;
       
        if (index >= randomNumLength) {
          clearInterval(mTime)
          s.count = 0;
          tipsJson = [];
          g.map();
        }
      }, 5000);
    }
    myChart.setOption(option);
  }
};



















//上滚内容与切换异步进行


var wrap = function () {
  this.obj = null;
  this.stop = false;
  this.timer = null;
  this.interval1 = 1000;
  this.interval2 = 3000;
  this.count = 0;
  this.rollWrapUl = null;
  this.rollWrapLIs = null;
  this.liNums = 0;
  this.liHeight = '';
  this.ulHeight = '';
  this.changeEchart = function () {
    $('.u-echart-animate')
      .find('li.li-01')
      .addClass('li-02')
      .removeClass('li-01')
      .siblings()
      .addClass('li-01')
      .removeClass('li-02');
  };
  this.autoPlay = function () {
    var _this = this;
    /*如果所有li标签的高度和大于.roll-wrap的高度则滚动*/
   
    if (
      this.liHeight * this.liNums > this.ulHeight && $(this.obj).parents('li')[0] == $('.li-01')[0]) {
      this.timer = setInterval(function () {
        _this.play();
      }, this.interval2);
    }else if( this.liHeight * this.liNums <= this.ulHeight ){
      setInterval(function () {
        _this.changeEchart();
      }, this.interval2*this.liNums);
    }
  };
  this.play = function () {
    var _this = this;
    if ((this.count + 5) % 10 == 0) {
      //清除动画--切换面板
      this.count = -1;
      clearInterval(this.timer);
      this.changeEchart();
      //重新排序-----都是重第一名再度开始
      var arr = $('#roll-wrap').find('li');
      var arr2 = $('#roll-wrap2').find('li');
      arr.sort(function (a, b) {
        var sort1 = parseFloat($(a).find('.num').text());
        var sort2 = parseFloat($(b).find('.num').text());
        return sort1 > sort2 ? 1 : -1
      })
      arr2.sort(function (a, b) {
        var sort1 = parseFloat($(a).find('.num').text());
        var sort2 = parseFloat($(b).find('.num').text());
        return sort1 > sort2 ? 1 : -1
      })
      $('#houseRanking').html(arr);
      $('#carRanking').html(arr2);

      //重施动画
      if ($(this.obj)[0] === $('#roll-wrap')[0]) {
        scrollTxt('#roll-wrap2', wrap2);
      } else {
        scrollTxt('#roll-wrap', wrap1);
      }
    }
    this.rollWrapUl.animate({
        'margin-top': '-' + this.liHeight
      },
      this.interval1,
      function () {
        _this.count++;
        // console.log( _this.count);
        $(this)
          .css('margin-top', '0')
          .children()
          .eq(0)
          .appendTo($(this));
      }
    );
  };
};

var scrollTxt = function (obj, wrap) {
  wrap.obj = $(obj);
  wrap.rollWrapUl = $(obj).children();
  wrap.rollWrapLIs = wrap.rollWrapUl.children();
  wrap.liNums = wrap.rollWrapLIs.length;
  wrap.liHeight = wrap.rollWrapLIs.eq(0).height();
  wrap.ulHeight = $(obj).height();
  wrap.autoPlay();
  // wrap.pausePlay();
};
var wrap1 = new wrap();
var wrap2 = new wrap();


//行业分布动画
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

function randomPlay() {
  var newNum = randomNum(2, 4); //产生2~4的随机数
  var layout = ''; //布局
  switch (newNum) {
    case 2:
      layout = 'two';
      break;
    case 3:
      layout = 'three';
      break;
    case 4:
      layout = 'fourth';
      break;
    default:
      break;
  }

  $('#industry').find('li').each(function (i) {
    var $li = $(this);
    // $li.removeClass().addClass('eddy-pre');
    if (i < newNum) {
      setTimeout(function () {
        $li.removeClass().addClass(layout);
      }, i * 1000);
    }
  })

  setTimeout(function () {
    // console.log($('#industry').children().length);

    for (var m = 0; m < newNum; m++) {
      $('#industry').children().eq(0).removeClass().appendTo($('#industry'));
    }
  }, 5000);

}

var Itimer = null;
Itimer = setInterval(function () {
  $('#industry').find('li').each(function (i) {
    var $li = $(this);
    $li.removeClass().removeClass();
  })
  randomPlay();
}, 5100);



// //星空特效
// $("#html5_3d_animation").html5_3d_animation({
//   window_width: '600',
//   window_height: '300',
//   window_background: '#00113F',
//   star_count: '50',
//   star_color: '#fff',
//   star_depth: '100'
// });