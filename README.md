# Pull

> 移动端 下拉刷新 & 上拉加载 组件

没找到满足需求，又适应大部分场景的下拉刷新&上拉加载组件。于是造了个轮子。

- 组件依赖 `Zepto` 或 `jQuery`
- 支持 `amd` 方式
- 下拉刷新和上拉加载，不支持同时触发

*使用过程如有遇到什么问题，欢迎提交 [`issue`](https://github.com/caijf/pull/issues)，感谢支持*


## 示例

[点击查看Demo](http://www.caijinfeng.com/temp/pull/examples/index.html)


- 下拉刷新
- 上拉加载
- 上拉加载 底部点击加载
- 下拉刷新+上拉加载
- 下拉刷新+上拉加载 使用requirejs
- 下拉刷新+上拉加载 自定义dom
- 下拉刷新+上拉加载 固定头部
- 下拉刷新+上拉加载 tab一个实例
- 下拉刷新+上拉加载 tab多个实例

## 使用方式

#### 引入js

	<script src="pull.min.js"></script>

这样使用会把 `Pull` 放到全局变量

or `amd`

以模块的方式导出

	require(['Pull'], function(Pull){
		// ...
	});

or `npm`

	npm install pull-pro

#### 配置项
	
	// 实例化
	var pullInstance = new Pull($element, options);

	// 配置项
	options: {
		scrollArea: string | object, // 滚动区域的dom对象或选择器。默认 window
		lock: boolean, // 锁定操作，锁定后隐藏下拉刷新和上拉加载dom，解锁需调用实例的unlock方法。默认 false
		distance: number, // 下拉多少距离触发onPullDown。默认 50，单位px
		onPullDown: function, // 下拉刷新回调方法，如果不存在该方法，则不加载下拉dom

		// 使用默认模板，只需配置text即可，如果同时配置了pullDownDom，以pullDownDom为主
		pullDownText: {
			start: string, // 下拉刷新前的文本。默认 下拉刷新
			drop: string, // 下拉刷新触发提示文本。默认 释放刷新
			loading: string, // 下拉刷新中文本。默认 刷新中...
			success: string, // 下拉刷新成功文本。默认 刷新成功
			failed: string // 下拉刷新失败文本。默认 刷新失败
		},
		
		autoLoad: boolean, // 自动加载，加载完成立即判断是否触发加载 默认 true
		threshold: number, // 滚动至底部多少距离触发onPullUp。默认 100，单位px
		onPullUp: function, // 上拉加载回调方法，如果不存在该方法，则不加载上拉dom
		// 使用默认模板，只需配置text即可，如果同时配置了pullUpDom，以pullUpDom为主
		pullUpText: {
			start: string, // 上拉加载前的文本。默认 上拉加载更多
			loading: string, // 上拉加载中文本。默认 正在加载
			failed: string, // 上拉加载失败文本，加载失败时，点击触发onPullUp重新加载。默认 加载失败，点击重试
			done: string // 加载完成文本。默认 已全部加载
		},

		// 自定义下拉刷新dom，支持与默认模板混用，如果只配置某一项，其余则使用默认模板
		pullDownDom: {
			start: string, // 下拉刷新前的html
			drop: string, // 下拉刷新触发提示的html
			loading: string, // 下拉刷新中的html
			success: string, // 下拉刷新成功的html
			failed: string, // 下拉刷新失败的html
		},

		// 自定义上拉加载dom，支持与默认模板混用，如果只配置某一项，其余则使用默认模板
		pullUpDom: {
			start: string, // 上拉加载前的html
			loading: string, // 上拉加载中的html
			failed: string, // 上拉加载失败的html
			done: string, // 加载完成的html
		},
	}

### 实例方法

#### pullDownFailed()

显示下拉刷新失败状态

#### pullDownSuccess()

显示下拉刷新成功状态

#### triggerPullDown()

手动触发下拉刷新，从而触发 `onPullDown` 回调方法

#### pullUpFailed()

显示上拉加载失败状态

#### pullUpSuccess()

上拉加载成功，重置为上拉加载前的状态

#### pullUpDone()

上拉加载完成，显示完成状态。后面不在触发上拉加载

#### resetPullUpDone()

重置上拉加载完成状态

#### triggerPullUp()

手动触发上拉加载，从而触发 `onPullUp` 回调方法

#### updateScrollAreaHeight()

更新滚动区域高度

#### lock(direction)

direction 可选参数 'up' or 'down'，锁定方向，如不传默认全部锁定

锁定操作。锁定后，隐藏dom不触发相应事件，需通过unlock解锁

#### unlock(direction)

direction 可选参数 'up' or 'down'，解锁方向，如不传默认全部解锁

解锁操作。


## 更新日志

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

