/*!
 * Pull Plugin v1.0.0
 * by caijf
 * @date 20170519
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        root.Pull = factory();
    }
}(this, function () {

    // 把$作为内部变量，防止多类库冲突
    var $ = window.Zepto || window.jQuery || $;

    // 缓存dom
    var eles = {
        $head: $('head'),
        $body: $('body'),
        $win: $(window)
    };

    // 样式
    var styles = {
        // 样式
        text: '@-webkit-keyframes bb_animate-rotate{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes bb_animate-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes bb_animate-load{0%{opacity:.2}100%{opacity:1}}@keyframes bb_animate-load{0%{opacity:.2}100%{opacity:1}}.bb_pull{text-align:center;display:box;display:-webkit-box;display:-moz-box;-webkit-box-pack:center;-moz-box-pack:center;-webkit-box-align:center;-moz-box-align:center}.bb_pull-inner *{margin:0;padding:0;-webkit-box-sizing:content-box;box-sizing:content-box}.bb_pull-inner{font:14px/1.42857143 "Lucida Grande",Verdana,"Microsoft YaHei",hei;-webkit-font-smoothing:antialiased;color:#333}.bb_pull-icon{display:inline-block;vertical-align:middle}.bb_pull-icon_loading{position:relative;width:10px;height:10px;border:2px solid #009def;border-right-color:transparent;border-radius:50%}.bb_pull-icon_loadFailed{position:relative;width:14px;height:14px}.bb_pull-icon_loadFailed:after,.bb_pull-icon_loadFailed:before{content:"";position:absolute;left:6px;top:0;width:2px;height:14px;background:#ee693b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.bb_pull-icon_loadFailed:after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.bb_pull-icon_loadSuccess{display:inline-block;width:12px;height:6px;vertical-align:-3px;border:2px solid #13b418;border-width:0 0 2px 2px;-webkit-transform:translate(0,-5px) rotate(-45deg);transform:translate(0,-5px) rotate(-45deg)}.bb_pull-animate_rotate{-webkit-animation:bb_animate-rotate 1s linear 0s infinite;animation:bb_animate-rotate 1s linear 0s infinite}.bb_pull-icon_loading_ios{position:relative;width:24px;height:24px}.bb_pull-icon_loading_ios-line div{position:absolute;left:11px;top:0;width:2px;height:24px}.bb_pull-icon_loading_ios-line div:after,.bb_pull-icon_loading_ios-line div:before{content:"";display:block;height:30%;background:#777;border-radius:5px}.bb_pull-icon_loading_ios-line div:after{margin-top:10px}.bb_pull-icon_loading_ios-line div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.bb_pull-icon_loading_ios-line div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.bb_pull-icon_loading_ios-line div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.bb_pull-icon_loading_ios-line div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.bb_pull-icon_loading_ios-line div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.bb_pull-icon_loading_ios-line div:nth-child(1):before{-webkit-animation:bb_animate-load 1.2s linear 0s infinite;animation:bb_animate-load 1.2s linear 0s infinite}.bb_pull-icon_loading_ios-line div:nth-child(2):before{-webkit-animation:bb_animate-load 1.2s linear .1s infinite;animation:bb_animate-load 1.2s linear .1s infinite}.bb_pull-icon_loading_ios-line div:nth-child(3):before{-webkit-animation:bb_animate-load 1.2s linear .2s infinite;animation:bb_animate-load 1.2s linear .2s infinite}.bb_pull-icon_loading_ios-line div:nth-child(4):before{-webkit-animation:bb_animate-load 1.2s linear .3s infinite;animation:bb_animate-load 1.2s linear .3s infinite}.bb_pull-icon_loading_ios-line div:nth-child(5):before{-webkit-animation:bb_animate-load 1.2s linear .4s infinite;animation:bb_animate-load 1.2s linear .4s infinite}.bb_pull-icon_loading_ios-line div:nth-child(6):before{-webkit-animation:bb_animate-load 1.2s linear .5s infinite;animation:bb_animate-load 1.2s linear .5s infinite}.bb_pull-icon_loading_ios-line div:nth-child(1):after{-webkit-animation:bb_animate-load 1.2s linear .6s infinite;animation:bb_animate-load 1.2s linear .6s infinite}.bb_pull-icon_loading_ios-line div:nth-child(2):after{-webkit-animation:bb_animate-load 1.2s linear .7s infinite;animation:bb_animate-load 1.2s linear .7s infinite}.bb_pull-icon_loading_ios-line div:nth-child(3):after{-webkit-animation:bb_animate-load 1.2s linear .8s infinite;animation:bb_animate-load 1.2s linear .8s infinite}.bb_pull-icon_loading_ios-line div:nth-child(4):after{-webkit-animation:bb_animate-load 1.2s linear .9s infinite;animation:bb_animate-load 1.2s linear .9s infinite}.bb_pull-icon_loading_ios-line div:nth-child(5):after{-webkit-animation:bb_animate-load 1.2s linear 1s infinite;animation:bb_animate-load 1.2s linear 1s infinite}.bb_pull-icon_loading_ios-line div:nth-child(6):after{-webkit-animation:bb_animate-load 1.2s linear 1.1s infinite;animation:bb_animate-load 1.2s linear 1.1s infinite}.bb_pull-inner{padding:5px}.bb_pull-up .bb_pull-inner{padding:10px}.bb_pull-icon_loading_ios{display:inline-block;vertical-align:middle;margin-right:-6px;-webkit-transform:scale(.75);transform:scale(.75)}.bb_pull-text{margin:0 5px;vertical-align:middle;color:#777}',

        // 样式标签id
        id: '_bb_pull_style',

        // 标识是否加载过
        isLoad: false,

        /**
         * 加载样式
         * @return {[type]} [description]
         */
        load: function () {
            if(!this.isLoad){
                var $style = $('<style id="' + this.id + '">' + this.text + '</style>');
                eles.$head.append($style);
                this.isLoad = true;
            }
        },

        /**
         * 删除样式
         * @return {[type]} [description]
         */
        remove: function () {
            if(this.isLoad){
                $('#' + this.id).remove();
                this.isLoad = false;
            }
        }
    };

    // 工具
    var utils = {

        // 是否支持Touch事件
        isSupportTouch: ('ontouchstart' in window)
    };

    // 缓存模板
    var tpls = {
        pullDownWrapper: '<div class="bb_pull bb_pull-down" style="height:0; overflow: hidden;"></div>',
        pullUpWrapper: '<div class="bb_pull bb_pull-up"></div>'
    };

    // 默认dom
    var defaultPullDownDom = {
        start: '<div class="bb_pull-inner"><i class="bb_pull-icon bb_pull-icon_loading"></i><span class="bb_pull-text"><%=text%></span></div>',
        drop: '<div class="bb_pull-inner"><i class="bb_pull-icon bb_pull-icon_loading"></i><span class="bb_pull-text"><%=text%></span></div>',
        loading: '<div class="bb_pull-inner"><i class="bb_pull-icon bb_pull-icon_loading bb_pull-animate_rotate"></i><span class="bb_pull-text"><%=text%></span></div>',
        success: '<div class="bb_pull-inner"><i class="bb_pull-icon bb_pull-icon_loadSuccess"></i><span class="bb_pull-text"><%=text%></span></div>',
        failed: '<div class="bb_pull-inner"><i class="bb_pull-icon bb_pull-icon_loadFailed"></i><span class="bb_pull-text"><%=text%></span></div>'
    };
    var defaultPullUpDom = {
        start: '<div class="bb_pull-inner"><span class="bb_pull-text"><%=text%></span></div>',
        loading: '<div class="bb_pull-inner"><div class="bb_pull-icon"><div class="bb_pull-icon_loading_ios"><div class="bb_pull-icon_loading_ios-line"><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div><span class="bb_pull-text"><%=text%></span></div>',
        failed: '<div class="bb_pull-inner"><span class="bb_pull-text"><%=text%></span></div>',
        done: '<div class="bb_pull-inner"><span class="bb_pull-text"><%=text%></span></div>'
    };

    // 实例数，支持多个实例
    var instances = 0;

    function Pull(element, options) {

        // 如果不支持touch事件，不进行任何操作
        // if(!utils.isSupportTouch){throw '设备不支持touch事件，无法进行操作';}

        var self = this;

        self.$element = $(element); // 当前元素
        self.touchesStart = {}; // 开始坐标
        self.touchesDiff = 0; // 滑动距离
        self.isHorizontalScrolling  = undefined; // 标识横向滚动
        self.isTouch = false; // 标识触摸开始
        self.isMove = false; // 标识触摸滑动
        self.isLoading = false; // 标识加载中
        self.isLockUp = false; // 标识锁定下拉
        self.isLockDown = false; // 标识锁定上拉
        self.isDone = false; // 标识上拉加载完成，不再触发事件

        self.__timerFixSlideOutScreen = null; // 定时器，修复滑出屏幕导致下拉刷新显示错误问题

        // 初始化
        self.init(options);
    }

    Pull.prototype.init = function (options) {
        var self = this;

        if(self.__isInit){ return self;}

        instances++;

        // 内部标识当前实例是否初始化
        self.__isInit = true;

        self.opts = $.extend(true, {
            scrollArea: eles.$win, // 滚动区域
            lock: false, // 锁定操作，锁定后默认隐藏下拉刷新和上拉加载dom，解锁需调用实例的unlock方法
            distance: 50, // 下拉距离多少触发刷新
            onPullDown: null, // 下拉刷新回调方法
            pullDownText: { // 使用默认模板才使用 text
                start: '下拉刷新',
                drop: '释放刷新',
                loading: '刷新中...',
                success: '刷新成功',
                failed: '刷新失败'
            },
            onPullUp: null, // 上拉刷新回调方法
            autoLoad: true, // 自动加载
            threshold: 100, // 上拉多少触发底部加载
            pullUpText: { // 使用默认模板才使用 text
                start: '上拉加载更多',
                loading: '正在加载',
                failed: '加载失败，点击重试',
                done: '已全部加载'
            },
            pullDownDom: { // 自定义dom
                // start: '下拉刷新',
                // drop: '释放刷新',
                // loading: '刷新中...',
                // success: '刷新成功',
                // failed: '刷新失败'
            },
            pullUpDom: { // 自定义dom
                // start: '上拉加载',
                // loading: '加载中...',
                // failed: '加载失败，点击重试',
                // done: '已全部加载'
            }
        }, options);

        self.opts.scrollArea = $(self.opts.scrollArea);

        // 如没有设置下拉回调 或 上拉回调，不做任何处理
        if(!self.opts.onPullDown && !self.opts.onPullUp){
            throw '请设置 onPullDown 或 onPullUp 回调方法';
        }

        // 加载样式
        styles.load();

        // 生成模板
        self.pullDownTpls = $.extend({}, genDefaultPullDownDom(self), self.opts.pullDownDom);
        self.pullUpTpls = $.extend({}, genDefaultPullUpDom(self), self.opts.pullUpDom);

        // 下拉刷新dom
        self.pullDownDom = $(tpls.pullDownWrapper);
        // 上拉加载dom
        self.pullUpDom = $(tpls.pullUpWrapper);

        // 默认锁定
        if(self.opts.lock){
            self.lock();
        }

        // 内容高度
        self._scrollContentHeight = self.$element[0].scrollHeight;

        // 滚动窗口高度
        self._scrollAreaHeight = self.opts.scrollArea.height();

        // 加载下拉刷新dom
        if(self.opts.onPullDown){
            updatePullDownDom(self, 'start');
            self.$element.before(self.pullDownDom);

            // 绑定事件
            self.$element.on('touchstart', function (e) {
                fnTouches(e);
                fnTouchstart(e, self);
            }).on('touchmove', function (e) {
                fnTouches(e);
                fnTouchmove(e, self);
            }).on('touchend', function (e) {
                fnTouchend(self);
            }).on('touchcancel', function (e) {
                fnTouchcancel(self);
            });
        }

        // 加载上拉加载dom
        if(self.opts.onPullUp){
            updatePullUpDom(self, 'start');
            self.$element.after(self.pullUpDom);

            // 自动加载
            fnAutoLoad(self);

            var timer = null;

            // 窗口调整
            eles.$win.on('resize', function (e) {
                clearTimeout(timer);
                timer = setTimeout(function(){
                    self.updateScrollAreaHeight();
                },150);
            });

            // 监听滚动事件
            self.opts.scrollArea.on('scroll', function (e) {
                if(self.isLoading || self.isLockDown || self.isDone){return;}

                var scrollTop = self.opts.scrollArea.scrollTop();
                var pullUpState = self.pullUpDom.attr('data-state');

                // 滚动页面触发加载数据
                if((self._scrollContentHeight - self.opts.threshold) <= (self._scrollAreaHeight + scrollTop) && self.opts.autoLoad && pullUpState !== 'failed'){
                    self.triggerPullUp();
                }
            });

            // 底部加载点击事件
            self.pullUpDom.on('click', function () {
                var state = self.pullUpDom.attr('data-state');

                // 加载完成或加载中，无点击行为
                if(state === 'done' || state === 'loading'){
                    return;
                }else if(state === 'failed' || !self.opts.autoLoad){ // 加载失败 或 不自动加载，点击触发加载行为
                    self.triggerPullUp();
                }
            })
        }
    }

    // 生成默认下拉刷新dom
    function genDefaultPullDownDom(self) {
        var ret = {},
            regReplaceText = '<%=text%>';

            ret.start = defaultPullDownDom.start.replace(regReplaceText, self.opts.pullDownText.start);
            ret.drop = defaultPullDownDom.drop.replace(regReplaceText, self.opts.pullDownText.drop);
            ret.loading = defaultPullDownDom.loading.replace(regReplaceText, self.opts.pullDownText.loading);
            ret.success = defaultPullDownDom.success.replace(regReplaceText, self.opts.pullDownText.success);
            ret.failed = defaultPullDownDom.failed.replace(regReplaceText, self.opts.pullDownText.failed);

        return ret;
    }

    // 生成默认上拉加载dom
    function genDefaultPullUpDom(self) {
        var ret = {},
            regReplaceText = '<%=text%>';

            ret.start = defaultPullUpDom.start.replace(regReplaceText, self.opts.pullUpText.start);
            ret.loading = defaultPullUpDom.loading.replace(regReplaceText, self.opts.pullUpText.loading);
            ret.failed = defaultPullUpDom.failed.replace(regReplaceText, self.opts.pullUpText.failed);
            ret.done = defaultPullUpDom.done.replace(regReplaceText, self.opts.pullUpText.done);

        return ret;
    }

    // 更新底部加载dom
    function updatePullUpDom(self, state) {

        var state = self.pullUpTpls[state] ? state : 'start';

        // 防止dom一直渲染
        if(state === self.pullUpDom.attr('data-state')){return;}

        self.pullUpDom.attr('data-state', state).html(self.pullUpTpls[state]);
    }

    // 更新下拉刷新dom
    function updatePullDownDom(self, state) {

        var state = self.pullDownTpls[state] ? state : 'start';

        // 防止dom一直渲染
        if(state === self.pullDownDom.attr('data-state')){return;}

        self.pullDownDom.attr('data-state', state).html(self.pullDownTpls[state]);
    }

    // 更新滚动内容高度
    Pull.prototype.updateScrollContentHeight = function() {
        var self = this;
        self._scrollContentHeight = self.$element[0].scrollHeight;
        fnAutoLoad(self);
    }

    // 更新滚动区域高度，如果页面有延迟加载的内容，可以手动更新
    Pull.prototype.updateScrollAreaHeight = function() {
        var self = this;
        self._scrollAreaHeight = self.opts.scrollArea.height();
        fnAutoLoad(self);
    }

    // 如果文档高度不大于窗口高度，数据较少，自动加载下方数据
    function fnAutoLoad(self){
        if(self.opts.autoLoad && self.opts.onPullUp){
            var scrollTop = self.opts.scrollArea.scrollTop();

            if((self._scrollContentHeight - self.opts.threshold) <= (self._scrollAreaHeight + scrollTop)){
                self.triggerPullUp();
            }
        }
    }

    // touches
    function fnTouches(e) {
        if(!e.touches){
            e.touches = e.originalEvent.touches;
        }
    }

    // 开始触摸
    function fnTouchstart(e, self) {
        var self = self || this;

        if(self.isLoading){ return;}

        // 滚动区域需置顶
        if(self.opts.scrollArea.scrollTop() > 0 || self.isLoading || self.isLockUp){
            self.isTouch = false;
            return;
        }

        self.isTouch = true;
        self.isMove = false;
        self.isHorizontalScrolling = undefined;
        self.touchesStart.x = e.touches[0].pageX;
        self.touchesStart.y = e.touches[0].pageY;
    }

    // 触摸移动
    function fnTouchmove(e, self) {
        var self = self || this;

        if(!self.isTouch){ return;}

        var pageX = e.touches[0].pageX,
            pageY = e.touches[0].pageY;

        // 取点判断方向
        if (typeof self.isHorizontalScrolling === 'undefined') {
            self.isHorizontalScrolling = !!(self.isHorizontalScrolling || Math.abs(pageY - self.touchesStart.y) <= Math.abs(pageX - self.touchesStart.x));
        }
        if (self.isHorizontalScrolling || self.isLockUp) {
            self.isTouch = false;
            return;
        }

        self.touchesDiff = pageY - self.touchesStart.y;

        // 触摸停留1s后，执行touchend事件
        clearTimeout(self.__timerFixSlideOutScreen);
        self.__timerFixSlideOutScreen = setTimeout(function () {
            self.$element.trigger('touchend').bind(self);
        }, 1000);

        if(self.touchesDiff < 0){
            self.isMove = false;
            return;
        }else{
            self.isMove = true;
            e.preventDefault();
        }

        fnTransition(self.pullDownDom, 0);

        // 下拉dom的偏移高度
        var offsetY = 0;

        // 下拉
        if(self.touchesDiff <= self.opts.distance){
            offsetY = self.touchesDiff;
            updatePullDownDom(self, 'start');
        // 指定距离 < 下拉距离 < 指定距离*2
        }else if(self.touchesDiff > self.opts.distance && self.touchesDiff <= self.opts.distance*2){
            offsetY = self.opts.distance+(self.touchesDiff-self.opts.distance)*0.5;
            updatePullDownDom(self, 'drop');
        // 下拉距离 > 指定距离*2
        }else{
            offsetY = self.opts.distance+self.opts.distance*0.5+(self.touchesDiff-self.opts.distance*2)*0.2;
        }

        self.pullDownDom.height(offsetY);
    }

    // 触摸结束
    function fnTouchend(self) {
        var self = self || this;

        clearTimeout(self.__timerFixSlideOutScreen);

        if(!self.isTouch || !self.isMove){
            self.isTouch = false;
            self.isMove = false;

            if(!self.isLoading && self.pullDownDom.height() !== 0){
                fnTransition(self.pullDownDom, 0);
                self.pullDownDom.height(0);
            }

            return;
        }

        self.isTouch = false;
        self.isMove = false;

        fnTransition(self.pullDownDom, 300);

        if(self.touchesDiff > self.opts.distance){
            self.triggerPullDown();
        }else{
            self.pullDownDom.height(0);
        }
    }

    // 触摸取消
    function fnTouchcancel(self) {
        fnTouchend(self);
    }

    // css过渡
    function fnTransition(dom,num){
        dom.css({
            '-webkit-transition':'all ' + num + 'ms',
            'transition':'all ' + num + 'ms'
        });
    }

    // 下拉刷新失败
    Pull.prototype.pullDownFailed = function () {
        var self = this;

        updatePullDownDom(self, 'failed');
        fnPullDownReset(self);
    }

    // 下拉刷新成功
    Pull.prototype.pullDownSuccess = function () {
        var self = this;

        updatePullDownDom(self, 'success');
        fnPullDownReset(self);
    }

    // 触发下拉刷新
    Pull.prototype.triggerPullDown = function () {
        var self = this;
        self.isLoading = true;
        updatePullDownDom(self, 'loading');
        self.pullDownDom.height(self.opts.distance);
        self.opts.onPullDown();
    }

    // 下拉刷新重置状态
    function fnPullDownReset(self) {
        var self = self || this;

        setTimeout(function () {
            fnTransition(self.pullDownDom, 300);
            self.pullDownDom.height(0);

            setTimeout(function () {
                self.isLoading = false;
                self.updateScrollContentHeight();
                updatePullDownDom(self, 'start');
            }, 300);
        }, 500);
    }

    // 快速重置下拉刷新状态，不更新scrollContentHeight
    function fnPullDownQuickReset(self) {
        var self = self || this;
        if(self.pullDownDom.height() !== 0){
            fnTransition(self.pullDownDom, 0);
            self.pullDownDom.height(0);
            updatePullDownDom(self, 'start');
        }
    }

    // 上拉加载失败
    Pull.prototype.pullUpFailed = function () {
        var self = this;
        updatePullUpDom(self, 'failed');
        self.isLoading = false;
    }

    // 上拉加载成功
    Pull.prototype.pullUpSuccess = function () {
        var self = this;
        self.isLoading = false;
        updatePullUpDom(self, 'start');
        self.updateScrollContentHeight();
    }

    // 上拉加载完成
    Pull.prototype.pullUpDone = function () {
        var self = this;
        self.isLoading = false;
        self.isDone = true;
        updatePullUpDom(self, 'done');
        self.updateScrollContentHeight();
    }

    // 重置上拉加载完成状态
    Pull.prototype.resetPullUpDone = function () {
        this.isDone = false;
    }

    // 触发上拉加载
    Pull.prototype.triggerPullUp = function () {
        var self = this;
        // 加载完成 或 上拉操作被锁定 不再处理
        if(self.isDone || self.isLockDown || self.isLoading){return;}

        self.isLoading = true;

        updatePullUpDom(self, 'loading');
        self.opts.onPullUp();
    }

    // 锁定操作，重置上拉和下拉状态
    Pull.prototype.lock = function (direction) {
        var self = this;
        if(direction && (direction === 'up' || direction === 'down')){
            if(direction === 'up'){
                self.isLockUp = true;
                fnPullDownQuickReset(self);
                self.pullDownDom.hide();

            }else{
                self.isLockDown = true;
                updatePullUpDom(self, 'start');
                self.pullUpDom.hide();
            }
        }else{
            self.isLockDown = true;
            self.isLockUp = true;
            updatePullUpDom(self, 'start');
            fnPullDownQuickReset(self);
            self.pullDownDom.hide();
            self.pullUpDom.hide();
        }
    }

    // 解锁操作
    Pull.prototype.unlock = function (direction) {
        var self = this;
        if(direction && (direction === 'up' || direction === 'down')){
            if(direction === 'up'){
                self.isLockUp = false;
                self.pullDownDom.show();
            }else{
                self.isLockDown = false;
                self.pullUpDom.show();
                self.updateScrollContentHeight();
            }
        }else{
            self.isLockDown = false;
            self.isLockUp = false;
            self.pullDownDom.show();
            self.pullUpDom.show();
            self.updateScrollContentHeight();
        }
    }

    // 销毁组件
    Pull.prototype.destroy = function () {
        instances--;
        if(instances <= 0){
            styles.remove();
        }
        self.lock();
        self.pullDownDom && self.pullDownDom.remove();
        self.pullUpDom && self.pullUpDom.remove();
    }

    return Pull;

}));