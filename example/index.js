/*
 * @Author: your name
 * @Date: 2020-07-28 17:34:33
 * @LastEditTime: 2020-08-25 15:08:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/example/index.js
 */
// const Linkv = require('../src/index');
const Linkv = require('linkv');

const appID = 'rbaiHjNHQyVprPCBSHevvVvuNynNeTvp';
const appSecret =
	'87EA975D424238D0A08F772321169816DD016667D5BB577EBAEB820516698416E4F94C28CB55E9FD8E010260E6C8A177C0B078FC098BCF2E9E7D4A9A71BF1EF8FBE49E05E5FC5A6A35C6550592C1DB96DF83F758EAFBC5B342D5D04C9D92B1A82A76E3756E83A4466DA22635A8A9F88901631B5BBBABC8A94577D66E8B000F4B179DA99BAA5E674E4F793D9E60EEF1C3B757006459ABB5E6315E370461EBC8E6B0A7523CA0032D33B5C0CF83264C9D83517C1C94CAB3F48B8D5062F5569D9793982455277C16F183DAE7B6C271F930A160A6CF07139712A9D3ABF85E05F8721B8BB6CAC1C23980227A1D5F31D23FA6567578AEEB6B124AF8FF76040F9598DDC9DE0DA44EF34BBB01B53E2B4713D2D701A9F913BE56F9F5B9B7D8D2006CA910D8BFA0C34C619AB0EEBDAA474E67115532511686992E88C4E32E86D82736B2FE141E9037381757ED02C7D82CA8FC9245700040D7E1E200029416295D891D388D69AC5197A65121B60D42040393FB42BC2769B1E2F649A7A17083F6AB2B1BE6E993';

const res = new Linkv(appID, appSecret);

const { im, rtc, live } = res;

//  rtc
const rtcController = rtc();
// 获取认证信息
const authData = rtcController.getAuth();
console.log(authData);

//  live
const liveController = live();

const userId = 'test-dart-tob';
const aid = 'test';

// 获取token
liveController.thgetToken({
	userId,
	aid
}).then(function (res) {
	console.log(res)
});

const liveOpenID = '1291371456374120449';
const orderType = 1; // 1 订单增加金币 2 订单删除金币
const gold = 100;
const expr = 3;
const money = 1;
const platformType = 'ios'; // ios android h5
const orderID = '';

// 完成订单
liveController.orderSuccess({
	liveOpenID,
	orderType,
	gold,
	expr,
	money,
	platformType,
	orderID
}).then(function (res) {
	console.log(res)
});

// 修改金币
liveController.changeGold({
	liveOpenID,
	orderType,
	gold,
	expr
}).then(function (res) {
	console.log(res)
});

// 查询金币余额
liveController.getUserTokens({
	liveOpenID
}).then(function (res) {
	console.log(res)
});