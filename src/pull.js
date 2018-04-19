/*!
 * Pull Plugin v2.0.0
 * by caijf
 * @date 20180419
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

    // --- log debug

    // var logEl = document.createElement('div');
    // logEl.style.width='100%';
    // logEl.style.height = '150px';
    // logEl.style.background = 'rgba(255,255,255,0.5)';
    // logEl.style.border = '1px solid red';
    // logEl.style.position = 'fixed';
    // logEl.style.left = '0';
    // logEl.style.bottom = '0';
    // logEl.style.zIndex = '100000';
    // logEl.style.overflow = 'auto';

    // document.body.appendChild(logEl);

    // function log(str){
    //     var p = document.createElement('p');

    //     p.innerHTML = str;

    //     logEl.appendChild(p);
    // }

    // --- log end

    // 样式
    var styles = {
        // 样式
        text: '@-webkit-keyframes bb_animate-rotate{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes bb_animate-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes bb_animate-load{0%{opacity:.2}100%{opacity:1}}@keyframes bb_animate-load{0%{opacity:.2}100%{opacity:1}}.bb_pull{text-align:center;display:box;display:-webkit-box;display:-moz-box;-webkit-box-pack:center;-moz-box-pack:center;-webkit-box-align:center;-moz-box-align:center}.bb_pull-inner *{margin:0;padding:0;-webkit-box-sizing:content-box;box-sizing:content-box}.bb_pull-inner{font:14px/1.42857143 "Lucida Grande",Verdana,"Microsoft YaHei",hei;-webkit-font-smoothing:antialiased;color:#333}.bb_pull-icon{display:inline-block;vertical-align:middle}.bb_pull-icon_loading{position:relative;width:10px;height:10px;border:2px solid #009def;border-right-color:transparent;border-radius:50%}.bb_pull-icon_loadFailed{position:relative;width:14px;height:14px}.bb_pull-icon_loadFailed:after,.bb_pull-icon_loadFailed:before{content:"";position:absolute;left:6px;top:0;width:2px;height:14px;background:#ee693b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.bb_pull-icon_loadFailed:after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.bb_pull-icon_loadSuccess{display:inline-block;width:12px;height:6px;vertical-align:-3px;border:2px solid #13b418;border-width:0 0 2px 2px;-webkit-transform:translate(0,-5px) rotate(-45deg);transform:translate(0,-5px) rotate(-45deg)}.bb_pull-animate_rotate{-webkit-animation:bb_animate-rotate 1s linear 0s infinite;animation:bb_animate-rotate 1s linear 0s infinite}.bb_pull-icon_loading_ios{position:relative;width:24px;height:24px}.bb_pull-icon_loading_ios-line div{position:absolute;left:11px;top:0;width:2px;height:24px}.bb_pull-icon_loading_ios-line div:after,.bb_pull-icon_loading_ios-line div:before{content:"";display:block;height:30%;background:#777;border-radius:5px}.bb_pull-icon_loading_ios-line div:after{margin-top:10px}.bb_pull-icon_loading_ios-line div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.bb_pull-icon_loading_ios-line div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.bb_pull-icon_loading_ios-line div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.bb_pull-icon_loading_ios-line div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.bb_pull-icon_loading_ios-line div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.bb_pull-icon_loading_ios-line div:nth-child(1):before{-webkit-animation:bb_animate-load 1.2s linear 0s infinite;animation:bb_animate-load 1.2s linear 0s infinite}.bb_pull-icon_loading_ios-line div:nth-child(2):before{-webkit-animation:bb_animate-load 1.2s linear .1s infinite;animation:bb_animate-load 1.2s linear .1s infinite}.bb_pull-icon_loading_ios-line div:nth-child(3):before{-webkit-animation:bb_animate-load 1.2s linear .2s infinite;animation:bb_animate-load 1.2s linear .2s infinite}.bb_pull-icon_loading_ios-line div:nth-child(4):before{-webkit-animation:bb_animate-load 1.2s linear .3s infinite;animation:bb_animate-load 1.2s linear .3s infinite}.bb_pull-icon_loading_ios-line div:nth-child(5):before{-webkit-animation:bb_animate-load 1.2s linear .4s infinite;animation:bb_animate-load 1.2s linear .4s infinite}.bb_pull-icon_loading_ios-line div:nth-child(6):before{-webkit-animation:bb_animate-load 1.2s linear .5s infinite;animation:bb_animate-load 1.2s linear .5s infinite}.bb_pull-icon_loading_ios-line div:nth-child(1):after{-webkit-animation:bb_animate-load 1.2s linear .6s infinite;animation:bb_animate-load 1.2s linear .6s infinite}.bb_pull-icon_loading_ios-line div:nth-child(2):after{-webkit-animation:bb_animate-load 1.2s linear .7s infinite;animation:bb_animate-load 1.2s linear .7s infinite}.bb_pull-icon_loading_ios-line div:nth-child(3):after{-webkit-animation:bb_animate-load 1.2s linear .8s infinite;animation:bb_animate-load 1.2s linear .8s infinite}.bb_pull-icon_loading_ios-line div:nth-child(4):after{-webkit-animation:bb_animate-load 1.2s linear .9s infinite;animation:bb_animate-load 1.2s linear .9s infinite}.bb_pull-icon_loading_ios-line div:nth-child(5):after{-webkit-animation:bb_animate-load 1.2s linear 1s infinite;animation:bb_animate-load 1.2s linear 1s infinite}.bb_pull-icon_loading_ios-line div:nth-child(6):after{-webkit-animation:bb_animate-load 1.2s linear 1.1s infinite;animation:bb_animate-load 1.2s linear 1.1s infinite}.bb_pull-inner{padding:5px}.bb_pull-up .bb_pull-inner{padding:10px}.bb_pull-icon_loading_ios{display:inline-block;vertical-align:middle;margin-right:-6px;-webkit-transform:scale(.75);transform:scale(.75)}.bb_pull-text{margin:0 5px;line-height:24px;vertical-align:middle;color:#777}',

        // 样式标签id
        id: '_bb_pull_style',

        // 标识是否加载过
        isLoad: false,

        _dom: null,

        /**
         * 加载样式
         * @return {[type]} [description]
         */
        load: function () {
            if(!this.isLoad){
                this._dom = document.createElement('style');

                this._dom.innerHTML = this.text;
                this._dom.setAttribute('id', this.id);

                document.head.appendChild(this._dom);
                this.isLoad = true;
            }
        },

        /**
         * 删除样式
         * @return {[type]} [description]
         */
        remove: function () {
            if(this.isLoad){
                document.head.removeChild(this._dom);
                this.isLoad = false;
            }
        }
    };

    // 工具
    var utils = {

        // 是否支持Touch事件
        isSupportTouch: ('ontouchstart' in window),

        getScrollTop: function (el) {
            var top = 0;

            if(el === document.body || el === document.documentElement || el === window){
                top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            }else{
                top = el.scrollTop;
            }

            return top;
        },

        extend: function() {  
            var copyIsArray,  
                toString = Object.prototype.toString,  
                hasOwn = Object.prototype.hasOwnProperty,
                class2type = {  
                    '[object Boolean]' : 'boolean',  
                    '[object Number]' : 'number',  
                    '[object String]' : 'string',  
                    '[object Function]' : 'function',  
                    '[object Array]' : 'array',  
                    '[object Date]' : 'date',  
                    '[object RegExp]' : 'regExp',  
                    '[object Object]' : 'object'  
                },
                type = function(obj) {  
                    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";  
                },
                isWindow = function(obj) {  
                    return obj && typeof obj === "object" && "setInterval" in obj;  
                },
                isArray = Array.isArray || function(obj) {  
                    return type(obj) === "array";  
                },
                isPlainObject = function(obj) {  
                    if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {  
                        return false;  
                    }
                    if (obj.constructor && !hasOwn.call(obj, "constructor")  
                            && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {  
                        return false;  
                    }
                    var key;  
                    for (key in obj) {  
                    }
                    return key === undefined || hasOwn.call(obj, key);  
                },
                extend = function(deep, target, options) {  
                    for (name in options) {  
                        src = target[name];  
                        copy = options[name];  
              
                        if (target === copy) { continue; }  
              
                        if (deep && copy  
                                && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {  
                            if (copyIsArray) {  
                                copyIsArray = false;  
                                clone = src && isArray(src) ? src : [];  
              
                            } else {  
                                clone = src && isPlainObject(src) ? src : {};  
                            }
                            target[name] = extend(deep, clone, copy);  
                        } else if (copy !== undefined) {  
                            target[name] = copy;  
                        }  
                    }  
              
                    return target;  
                };
          
            return extend;
        }()
    };

    // 事件名称
    var Events = {
        start: utils.isSupportTouch ? 'touchstart' : 'mousedown',
        move: utils.isSupportTouch ? 'touchmove' : 'mousemove',
        end: utils.isSupportTouch ? 'touchend' : 'mouseup',
        cancel: 'touchcancel'
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

    /**
     * 下拉刷新视图
     * @param {[type]} options [description]
     */
    function RefreshView(options) {
        // 允许的状态
        this.allowState = ['start', 'drop', 'loading', 'success', 'failed'];

        // 标识不同状态的dom
        this.state = this.allowState[0];

        this.init(options);
    }
    RefreshView.prototype.init = function (options) {
        var defaultOptions = {
            // 滚动视图，必填
            scrollView: '',

            // 样式名
            classname: 'bb_pull bb_pull-down',

            // 使用默认模板才使用 text
            text: {
                start: '下拉刷新',
                drop: '释放刷新',
                loading: '刷新中...',
                success: '刷新成功',
                failed: '刷新失败'
            },

            // 自定义dom
            dom: {
                // start: '下拉刷新',
                // drop: '释放刷新',
                // loading: '刷新中...',
                // success: '刷新成功',
                // failed: '刷新失败'
            }
        };

        this.options = utils.extend(true, defaultOptions, options);

        if(!this.options.scrollView){
            throw 'scrollView undefined';
        }

        this.scrollView = this.options.scrollView;
        this.wrapperView = this.scrollView.parentNode;

        this.initTpls();
        this.create();
        this.render();
    }
    RefreshView.prototype.initTpls = function () {
        var regReplaceText = '<%=text%>';

        var doms = utils.extend({}, defaultPullDownDom, this.options.dom);

        var texts = this.options.text;

        this.tpls = {
            start: doms.start.replace(regReplaceText, texts.start),
            drop: doms.drop.replace(regReplaceText, texts.drop),
            loading: doms.loading.replace(regReplaceText, texts.loading),
            success: doms.success.replace(regReplaceText, texts.success),
            failed: doms.failed.replace(regReplaceText, texts.failed)
        };
    }
    RefreshView.prototype.create = function () {
        this.element = document.createElement('div');
        this.element.className = this.options.classname;
        this.element.style.height = '0px';
        this.element.style.overflow = 'hidden';
        this.element.innerHTML = this.tpls[this.state];
    }
    RefreshView.prototype.render = function () {
        this.wrapperView.insertBefore(this.element, this.scrollView);
    }
    RefreshView.prototype.setState = function (state) {
        if(this.state === state){return;}
        if(this.allowState.indexOf(state) === -1){throw 'RefreshView 不支持 '+ state +' 状态';}

        this.state = state;
        this.element.innerHTML = this.tpls[this.state];
    }
    RefreshView.prototype.enabledAnimate = function (enabledAnimate) {
        this.element.style.webkitTransition = enabledAnimate ? 'all 300ms' : '';
        this.element.style.transition = enabledAnimate ? 'all 300ms' : '';
    }
    RefreshView.prototype.height = function (num) {
        if(typeof num === 'number'){
            this.element.style.height = num + 'px';
        }else{
            return this.element.clientHeight;
        }
    }
    RefreshView.prototype.show = function (num) {
        this.element.style.display = 'block';
    }
    RefreshView.prototype.hide = function (num) {
        this.element.style.display = 'none';
    }
    RefreshView.prototype.destroy = function () {
        this.wrapperView.removeChild(this.element);
    }

    /**
     * 滚动底部加载视图
     * @param {[type]} options [description]
     */
    function ScrollBottomLoadView(options) {
        // 允许的状态
        this.allowState = ['start', 'loading', 'failed', 'done'];

        // 标识不同状态的dom
        this.state = this.allowState[0];

        this.init(options);
    }

    ScrollBottomLoadView.prototype.init = function (options) {
        var defaultOptions = {
            // 滚动视图，必填
            scrollView: '',

            // 样式名
            classname: 'bb_pull bb_pull-up',

            // 使用默认模板才使用 text
            text: {
                start: '上拉加载更多',
                loading: '正在加载',
                failed: '加载失败，点击重试',
                done: '已全部加载'
            },

            // 自定义dom
            dom: {
                // start: '上拉加载',
                // loading: '加载中...',
                // failed: '加载失败，点击重试',
                // done: '已全部加载'
            },

            onClick: null
        };

        this.options = utils.extend(true, defaultOptions, options);

        if(!this.options.scrollView){
            throw 'scrollView undefined';
        }

        this.scrollView = this.options.scrollView;
        this.wrapperView = this.scrollView.parentNode;

        this.initTpls();
        this.create();
        this.bind();
        this.render();
    }
    ScrollBottomLoadView.prototype.initTpls = function () {
        var regReplaceText = '<%=text%>';

        var doms = utils.extend({}, defaultPullUpDom, this.options.dom);

        var texts = this.options.text;

        this.tpls = {
            start: doms.start.replace(regReplaceText, texts.start),
            loading: doms.loading.replace(regReplaceText, texts.loading),
            failed: doms.failed.replace(regReplaceText, texts.failed),
            done: doms.done.replace(regReplaceText, texts.done)
        };
    }
    ScrollBottomLoadView.prototype.create = function () {
        this.element = document.createElement('div');
        this.element.className = this.options.classname;
        this.element.innerHTML = this.tpls[this.state];
    }
    ScrollBottomLoadView.prototype.bind = function () {
        var onClick = this.options.onClick;

        this.element.addEventListener('click', function (e) {
            if(typeof onClick === 'function'){
                onClick(e);
            }
        })
    }
    ScrollBottomLoadView.prototype.render = function () {
        this.wrapperView.appendChild(this.element);
    }
    ScrollBottomLoadView.prototype.setState = function (state) {
        if(this.state === state){return;}
        if(this.allowState.indexOf(state) === -1){throw 'ScrollBottomLoadView 不支持 '+ state +' 状态';}

        this.state = state;
        this.element.innerHTML = this.tpls[this.state];
    }
    ScrollBottomLoadView.prototype.height = function (num) {
        if(typeof num === 'number'){
            this.element.style.height = num + 'px';
        }else{
            return this.element.clientHeight;
        }
    }
    ScrollBottomLoadView.prototype.show = function (num) {
        this.element.style.display = 'block';
    }
    ScrollBottomLoadView.prototype.hide = function (num) {
        this.element.style.display = 'none';
    }
    ScrollBottomLoadView.prototype.destroy = function () {
        this.wrapperView.removeChild(this.element);
    }


    // 实例数，支持多个实例
    var instances = 0;

    function Pull(elementID, options) {

        // 如果不支持touch事件，不进行任何操作
        // if(!utils.isSupportTouch){throw '设备不支持touch事件，无法进行操作';}

        var self = this;

        self.element = document.getElementById(elementID); // 当前元素
        self.touchesStart = {}; // 开始坐标
        self.touchesDiff = 0; // 滑动距离
        self.isHorizontalScrolling = undefined; // 标识横向滚动
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

        self.opts = utils.extend(true, {
            scrollArea: '', // 滚动区域
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

        if(self.opts.scrollAreaId && (typeof self.opts.scrollAreaId === 'string')){
            self.scrollArea = document.getElementById(self.opts.scrollAreaId);
        }else{
            self.scrollArea = document.documentElement;
        }

        // 如没有设置下拉回调 或 上拉回调，不做任何处理
        if(!self.opts.onPullDown && !self.opts.onPullUp){
            // throw '请设置 onPullDown 或 onPullUp 回调方法';
            return;
        }

        if(!self.opts.autoLoad && self.opts.pullUpText.start === '上拉加载更多'){
            self.opts.pullUpText.start = '点击加载更多';
        }

        // 加载样式
        styles.load();

        // 默认锁定
        if(self.opts.lock){
            self.lock();
        }

        // 内容高度
        self._scrollContentHeight = self.element.scrollHeight;

        // 滚动窗口高度
        self._scrollAreaHeight = self.scrollArea.clientHeight;

        // 加载下拉刷新dom
        if(self.opts.onPullDown){

            self.refreshView = new RefreshView({
                scrollView: self.element,
                text: self.opts.pullDownText,
                dom: self.opts.pullDownDom
            });

            // 绑定事件
            self.element.addEventListener(Events.start, function (e) {
                fnTouches(e);
                fnTouchstart(e, self);
            });
            self.element.addEventListener(Events.move, function (e) {
                fnTouches(e);
                fnTouchmove(e, self);
            });
            self.element.addEventListener(Events.end, function (e) {
                fnTouchend(e, self);
            });
            self.element.addEventListener(Events.cancel, function (e) {
                fnTouchcancel(self);
            });
        }

        // 加载上拉加载dom
        if(self.opts.onPullUp){
            self.scrollBottomLoadView = new ScrollBottomLoadView({
                scrollView: self.element,
                text: self.opts.pullUpText,
                dom: self.opts.pullUpDom,
                onClick: function (e) {
                    var scrollBottomLoadViewState = self.scrollBottomLoadView.state;

                    // 加载完成或加载中，无点击行为
                    if(scrollBottomLoadViewState === 'done' || scrollBottomLoadViewState === 'loading'){
                        return;
                    }else if(scrollBottomLoadViewState === 'failed' || !self.opts.autoLoad){ // 加载失败或不自动加载，点击触发加载行为
                        self.triggerPullUp();
                    }
                }
            });

            // 自动加载
            fnAutoLoad(self);

            var timer = null;

            // 窗口调整
            window.addEventListener('resize', function (e) {
                clearTimeout(timer);
                timer = setTimeout(function(){
                    self.updateScrollAreaHeight();
                },300);
            });

            // 监听滚动事件
            if(self.scrollArea === document || self.scrollArea === document.body || self.scrollArea === document.documentElement){
                window.addEventListener('scroll', handleScroll);
            }else{
                self.scrollArea.addEventListener('scroll', handleScroll);
            }

            function handleScroll() {
                if(self.isLoading || self.isLockDown || self.isDone){return;}

                var scrollTop = utils.getScrollTop(self.scrollArea);
                var scrollBottomLoadViewState = self.scrollBottomLoadView.state;

                // 滚动页面触发加载数据
                if((self._scrollContentHeight - self.opts.threshold) <= (self._scrollAreaHeight + scrollTop) && self.opts.autoLoad && scrollBottomLoadViewState !== 'failed'){
                    self.triggerPullUp();
                }
            }
        }
    }

    // 更新滚动内容高度
    Pull.prototype.updateScrollContentHeight = function() {
        var self = this;
        self._scrollContentHeight = self.element.scrollHeight;
        fnAutoLoad(self);
    }

    // 更新滚动区域高度，如果页面有延迟加载的内容，可以手动更新
    Pull.prototype.updateScrollAreaHeight = function() {
        var self = this;
        self._scrollAreaHeight = self.scrollArea.clientHeight;
        fnAutoLoad(self);
    }

    // 如果文档高度不大于窗口高度，数据较少，自动加载下方数据
    function fnAutoLoad(self){
        if(self.opts.autoLoad && self.opts.onPullUp){
            var scrollTop = utils.getScrollTop(self.scrollArea);

            if((self._scrollContentHeight - self.opts.threshold) <= (self._scrollAreaHeight + scrollTop)){
                self.triggerPullUp();
            }
        }
    }

    // touches
    function fnTouches(e) {
        if(!e.touches){
            try{
                e.touches = e.originalEvent.touches;
            }catch(err){
                e.touches = [{pageX: e.pageX, pageY: e.pageY}];
            }
        }
    }

    // 开始触摸
    function fnTouchstart(e, self) {
        var self = self || this;

        if(self.isLoading){ return;}

        var scrollTop = utils.getScrollTop(self.scrollArea);

        // 滚动区域需置顶
        if(scrollTop > 0 || self.isLoading || self.isLockUp){
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
            fnTouchend(e, self);
        }, 1000);

        if(self.touchesDiff < 0){
            self.isMove = false;
            return;
        }else{
            self.isMove = true;
            e.preventDefault();
        }

        self.refreshView.enabledAnimate(false)

        // 下拉dom的偏移高度
        var offsetY = 0;

        // 下拉
        if(self.touchesDiff <= self.opts.distance){
            offsetY = self.touchesDiff;
            self.refreshView.setState('start');
        // 指定距离 < 下拉距离 < 指定距离*2
        }else if(self.touchesDiff > self.opts.distance && self.touchesDiff <= self.opts.distance*2){
            offsetY = self.opts.distance+(self.touchesDiff-self.opts.distance)*0.5;
            self.refreshView.setState('drop');
        // 下拉距离 > 指定距离*2
        }else{
            offsetY = self.opts.distance+self.opts.distance*0.5+(self.touchesDiff-self.opts.distance*2)*0.2;
        }

        self.refreshView.height(offsetY);
    }

    // 触摸结束
    function fnTouchend(e, self) {
        var self = self || this;

        clearTimeout(self.__timerFixSlideOutScreen);

        if(!self.isTouch || !self.isMove){
            self.isTouch = false;
            self.isMove = false;

            if(!self.isLoading && self.refreshView.height() !== 0){
                self.refreshView.enabledAnimate(false)
                self.refreshView.height(0)
            }

            return;
        }

        self.isTouch = false;
        self.isMove = false;

        self.refreshView.enabledAnimate(true);

        if(self.touchesDiff > self.opts.distance){
            self.triggerPullDown();
        }else{
            self.refreshView.height(0)
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

        self.refreshView.setState('failed');
        fnPullDownReset(self);
    }

    // 下拉刷新成功
    Pull.prototype.pullDownSuccess = function () {
        var self = this;

        self.refreshView.setState('success');
        fnPullDownReset(self);
    }

    // 触发下拉刷新
    Pull.prototype.triggerPullDown = function () {
        var self = this;
        self.isLoading = true;
        self.refreshView.setState('loading');
        self.refreshView.height(self.opts.distance);
        self.opts.onPullDown();
    }

    // 下拉刷新重置状态
    function fnPullDownReset(self) {
        var self = self || this;

        setTimeout(function () {
            self.refreshView.enabledAnimate(true);
            self.refreshView.height(0)

            setTimeout(function () {
                self.isLoading = false;
                self.updateScrollContentHeight();
                self.refreshView.setState('start');
            }, 300);
        }, 500);
    }

    // 快速重置下拉刷新状态，不更新scrollContentHeight
    function fnPullDownQuickReset(self) {
        var self = self || this;
        if(self.refreshView.height() !== 0){
            self.refreshView.enabledAnimate(false)
            self.refreshView.height(0);
            self.refreshView.setState('start');
        }
    }

    // 上拉加载失败
    Pull.prototype.pullUpFailed = function () {
        var self = this;
        self.scrollBottomLoadView.setState('failed');
        self.isLoading = false;
    }

    // 上拉加载成功
    Pull.prototype.pullUpSuccess = function () {
        var self = this;
        self.isLoading = false;
        self.scrollBottomLoadView.setState('start');
        self.updateScrollContentHeight();
    }

    // 上拉加载完成
    Pull.prototype.pullUpDone = function () {
        var self = this;
        self.isLoading = false;
        self.isDone = true;
        self.scrollBottomLoadView.setState('done');
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

        self.scrollBottomLoadView.setState('loading');
        self.opts.onPullUp();
    }

    // 锁定操作，重置上拉和下拉状态
    Pull.prototype.lock = function (direction) {
        var self = this;
        if(direction && (direction === 'up' || direction === 'down')){
            if(direction === 'up'){
                self.isLockUp = true;
                fnPullDownQuickReset(self);
                self.refreshView.hide();

            }else{
                self.isLockDown = true;
                self.scrollBottomLoadView.setState('start');
                self.scrollBottomLoadView.hide();
            }
        }else{
            self.isLockDown = true;
            self.isLockUp = true;
            self.scrollBottomLoadView.setState('start');
            fnPullDownQuickReset(self);
            self.refreshView.hide();
            self.scrollBottomLoadView.hide();
        }
    }

    // 解锁操作
    Pull.prototype.unlock = function (direction) {
        var self = this;
        if(direction && (direction === 'up' || direction === 'down')){
            if(direction === 'up'){
                self.isLockUp = false;
                self.refreshView.show();
            }else{
                self.isLockDown = false;
                self.scrollBottomLoadView.show();
                self.updateScrollContentHeight();
            }
        }else{
            self.isLockDown = false;
            self.isLockUp = false;
            self.refreshView.show();
            self.scrollBottomLoadView.show();
            self.updateScrollContentHeight();
        }
    }

    // 销毁组件
    Pull.prototype.destroy = function () {
        var self = this;

        instances--;
        if(instances <= 0){
            styles.remove();
        }
        self.lock();
        self.refreshView && self.refreshView.destroy();
        self.scrollBottomLoadView && self.scrollBottomLoadView.destroy();
    }

    return Pull;

}));