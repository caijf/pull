# Pull

下拉刷新、上拉加载组件

支持 `原生js页面` `amd` `es6` 等应用场景，自定义文字、dom。

- [快速使用](#快速使用)
- [配置项](#配置项)
- [实例方法](#实例方法)
- [示例](#示例)

*使用过程如有遇到什么问题，欢迎提交 [`issue`](https://github.com/caijf/pull/issues)，感谢支持*

## 快速使用

#### 引入js
原生js页面

	<script src="pull.min.js"></script>

require

	require.config({
        baseUrl: '../dist/',
        paths: {
            'Pull': 'pull.min'
        }
    });
	require(['Pull'], function(Pull){
		// ...
	});

es6

	# 通过npm安装包
	npm install pull-pro
.

	import Pull from 'pull-pro'


#### 使用
	
	var pullConfig = {
		// 下拉刷新
		onPullUp: function () {
				// do something
		    // 处理完成后一定要调用 pullDownSuccess 或 pullDownFailed
		},
		// 上拉加载
		onPullDown: function () {
		    // do something
		    // 处理完成后一定要调用 pullUpSuccess 或 pullUpDone
		}
	}

	// elementId 必填 触发上拉和下拉的元素
	var pullInstance = new Pull(elementId, pullConfig);

**注意：如果`onPullUp`和`onPullDown`都不设置，则组件不进行任何操作。该情况下调用实例方法可能报错**

## 配置项

属性 | 数据类型 | 必填 | 默认值 | 描述
------------- | ------------- | ------------- | ------------- | -------------
scrollAreaId  | string | -  | document.documentElement  | 滚动区域的id
autoLoad | boolean | - | true | 自动加载，加载完成立即判断是否触发加载
threshold | number | - | 100 | 滚动至底部多少距离触发onPullUp。
distance | number | - | 50 | 下拉多少距离触发onPullDown
lock | boolean | - | false | 锁定操作，锁定后隐藏下拉刷新和上拉加载dom，解锁需调用实例的unlock方法。
onPullDown | function | - | - | 下拉刷新回调方法，如果不存在该方法，则不加载下拉dom
pullDownText | object | - | {start: '下拉刷新', drop: '释放刷新', loading: '刷新中...', success: '刷新成功', failed: '刷新失败'} | 使用默认模板，只需配置pullDownText即可，如果同时配置了pullDownDom，以pullDownDom为主
pullDownDom | object | - | {} | 自定义下拉刷新dom，支持与默认模板混用，如果只配置某一项，其余则使用默认模板（start, drop, loading, success, failed有效）
onPullUp | function | - | - | 上拉加载回调方法，如果不存在该方法，则不加载上拉dom
pullUpText | object | - | {start: '上拉加载更多', loading: '正在加载', failed: '加载失败，点击重试', done: '已全部加载'} | 使用默认模板，只需配置text即可，如果同时配置了pullUpDom，以pullUpDom为主
pullUpDom | object | - | - | 自定义上拉加载dom，支持与默认模板混用，如果只配置某一项，其余则使用默认模板

## 实例方法

实例方法 | 描述 
------------- | ------------- 
instance.pullDownFailed() | 显示下拉刷新失败状态
instance.pullDownSuccess() | 显示下拉刷新成功状态
instance.triggerPullDown() | 手动触发下拉刷新，从而触发 `onPullDown` 回调方法
instance.pullUpFailed() | 显示上拉加载失败状态
instance.pullUpSuccess() | 显示上拉加载成功，重置为上拉加载前的状态
instance.pullUpDone() | 显示上拉加载完成状态。后面不在触发上拉加载。可通过resetPullUpDone方法重置
instance.resetPullUpDone() | 重置上拉加载完成状态，重置为上拉加载前的状态
instance.triggerPullUp() | 手动触发上拉加载，从而触发 `onPullUp` 回调方法
instance.updateScrollAreaHeight() | 更新滚动区域高度
instance.lock(direction) | direction 可选参数 'up' or 'down'，锁定方向，如不传默认全部锁定。锁定操作。锁定后，隐藏dom不触发相应事件，需通过unlock解锁
instance.unlock(direction) | direction 可选参数 'up' or 'down'，解锁方向，如不传默认全部解锁。解锁操作。


## 示例

[点击查看Demo](http://www.caijinfeng.com/temp/pull/examples/index.html)

## 更新日志

- 20180419 2.0.0版本
	- 去掉`scrollArea`配置项
	- 去掉`zepto`依赖
- 20170714
	- Fix 修复滚动置底，上拉加载失败无限触发的问题
	- New 新增`updateScrollContentHeight`方法，手动更新滚动内容高度
- 20170613
	- Fix 修复配置项 `autoLoad` 无效问题
	- Change 如果配置`autoLoad: false`，上拉加载仅支持点击加载。注意配置 `pullUpText`
- 20170526
	- New 新增`resetPullUpDone`方法，重置上拉加载完成状态。考虑到页面如有筛选功能，重置数据后仍需支持上拉加载
	- New 新增`updateScrollAreaHeight`方法，滚动区域如有延迟加载的内容，可在加载后更新滚动区域高度
	- New 新增`triggerPullDown`、`triggerPullUp`方法，支持手动触发刷新和加载显示状态，从而触发 `onPullDown`、`onPullUp`回调方法
	- Update 优化默认模板字体
- 20170525
	- Update 支持配置 `lock`
	- Update 支持自定义`pullDownDom`、`pullUpDom`
	- Update 默认模板优化，文字颜色变淡，上拉加载dom增加补白
	- Update 修复不设置onPullUp，下拉报错的问题
- 20170524
	- First Commit

