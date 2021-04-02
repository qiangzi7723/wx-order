// 首页的SDK方法
class SDK {
	constructor() {
		console.log("初始化SDK");
	}

	jumpIndex() {
		console.log("调用了SDK方法");
		wx.navigateTo({
			url: "../index/index",
			success: (result) => {},
			fail: () => {},
			complete: () => {},
		});
	}
}

export default new SDK();
