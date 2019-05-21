/**
 * 自写插件 本插件不支持IE8以下浏览器
 */
(function($, window, document, undefined) {
  $.fn.extend({
    animateNums: function(opts) {
      function AnimateNums(ele) {
        this.opts = $.extend(true, {}, AnimateNums.DEFAULTS, opts);

        this.$ele = $(ele);
        this._init();
      }

      AnimateNums.DEFAULTS = {
        html:
          '<i><div>0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></div></i>'
      };

      /**
       * 初始化入口
       * @private
       */
      AnimateNums.prototype._init = function() {
        var $ele = this.$ele;
        var amount = $ele
          .attr('data-num')
          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
          .split(',');
        var amountStr = amount
          .map(function(val) {
            return '<span class="amount-span" data-title="' + val + '"></span>';
          })
          .join(',');
        if ($ele.find('i').length != $ele.attr('data-num').length) {
          $ele.html(amountStr);
        } else {
          var $span = $ele.children('span');
          for (var i = 0, len = $span.length; i < len; i++) {
            $span.eq(i).attr('data-title', amount[i]);
          }
        }

        this.scrollNum($ele.children('.amount-span'), $ele.attr('data-height'));
      };

      AnimateNums.prototype.scrollNum = function(ele, lineHeight) {
        var opts = this.opts;

        ele.each(function() {
          var $me = $(this);
          var num = $me.attr('data-title');

          $me.find('div').stop();

          var it = $me.children('i'); //i
          var len = String(num).length;

          for (var i = 0; i < len; i++) {
            if (it.length <= i) {
              $me.append(opts['html']);
            }

            var number = String(num).charAt(i);
            var y;
            try {
              y = -parseInt(number) * lineHeight;
            } catch (err) {
              console.log('"data-height"只能是数字');
            }

            $me
              .children('i')
              .eq(i)
              .children('div')
              .animate({ top: y + 'px' }, 2000);
          }
        });
      };

      return this.each(function() {
        new AnimateNums(this);
      });
    },
    rotateTabs: function(opts) {
      function RotateTabs(ele) {
        this.opts = $.extend(true, {}, RotateTabs.DEFAULTS, opts);
        this.$ele = $(ele);
        this._init();
      }

      RotateTabs.DEFAULTS = {
        stop: false,
        timer: null,
        interval: 3000,
        classArr: ['li-01', 'li-02'],
        currentIndex: 0
      };

      RotateTabs.prototype._init = function() {
        var that = this;
        var $items = that.$ele.find('li');
        that.opts.timer = setInterval(function() {
          that._move($items);

          //   clearInterval( that.opts.timer)
        }, that.opts.interval);
      };

      RotateTabs.prototype._move = function($items) {
        var opts = this.opts;
        var temp = opts.classArr.pop();
        opts.classArr.unshift(temp);
        $items.each(function(index) {
          $(this)
            .removeClass()
            .addClass(opts.classArr[index]);
        });
      };

      return this.each(function() {
        new RotateTabs(this);
      });
    },
    eddy: function(opts) {
      return this.each(function() {
        var $me = $(this);
        $me.find('li').each(function(i) {
          var $li = $(this);
          if (i < 4) {
            setTimeout(function() {
              $li.removeClass('eddy-pre').addClass('eddy');
            }, i * 1000);
          } else if (i >= 4 && i < 8) {
            setTimeout(function() {
              $li.addClass('eddy-pre');
            }, i * 1000 + 1000);
          }
        });
      });
    },
    'eddyFresh': function(opts){
        function EddyFresh(ele){
            this.opts = $.extend(true, {}, EddyFresh.DEFAULTS, opts);

            this.$ele = $(ele);
            this._init();
        }

        EddyFresh.DEFAULTS = {
            arr: null
        };

        EddyFresh.prototype._init = function(){
            this.$ele.find('li:lt(3)').remove();
            var str = '';
            this.opts.arr.forEach(function(val, i){
                var addr = val[3];
                if(addr === undefined){
                    addr = '';
                }
                str += '<li> <div class="title"><span>'+ addr +'</span>'+ val[2] +'</div> <div class="body"><span>'+ val[0] +' : </span><b>'+ val[1] +'</b></div> </li>'
            });
            this.$ele.children('ul').append($(str));
            this.$ele.eddy();
        };

        return this.each(function(){
            new EddyFresh(this);
        })
    },
    bidScrollLeft: function(opts) {
      function BidScrollLeft(ele) {
        this.opts = $.extend(true, {}, BidScrollLeft.DEFAULTS, opts);

        this.$ele = $(ele);
        this._init();
      }

      BidScrollLeft.DEFAULTS = {
        timer: null
      };

      BidScrollLeft.prototype._init = function() {
        var $wrapContainer = this.$ele.find('.wrap-container'),
          $wrap = $wrapContainer.children('.wrap').eq(0),
          $li = $wrap.children(),
          liLen = $li.length,
          liW = $li.outerWidth(),
          wrapW = liW * liLen,
          wrapConW = wrapW * 2,
          scrollIndex = 0;

        $wrap.width(wrapW);
        $wrapContainer.append($wrap.clone()).width(wrapConW);

        this.opts.timer = setInterval(function() {
          if (scrollIndex < liLen + 1) {
            $wrapContainer.animate(
              {
                'margin-left': -liW * scrollIndex
              },
              1000,
              function() {
                if (scrollIndex == liLen) {
                  scrollIndex = 0;
                  $wrapContainer.css({
                    'margin-left': 0
                    
                  });
                }
                scrollIndex++;
              }
            );
          }
        }, 3000);
      };

      return this.each(function() {
        new BidScrollLeft(this);
      });
    }
  });
})(jQuery, window, document);
