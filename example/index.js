/*
 * @Author: your name
 * @Date: 2020-07-28 17:34:33
 * @LastEditTime: 2021-06-16 16:26:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/example/index.js
 */
const Linkv = require('linkv');

const appID = 'XYWAhtXcWoApAUCXeTZjbcSvdrrunAhj';
const appSecret =
	'06AFDAEA142A96BA62280A6BEFF439B75C5F76F6368A2E2BFB8054CDF7EB90AA950540CCC73A02761E26F0C0090E21B811D76D93959D10804849BB8EEF3A0B0804F6D3F6DE9E36C9C5D1551693E9AFD725A6F1DED6EA8DD60C680F298DF50BB2218440FE0E77773682156939098AE415F66EF3AAD085893A21B7AF40818EC2323C5273CABB44C6945D1B8F14784226BA0AB8E4B6E0003E5B8478691ACE5883CAEC6A377E18B92E6F01573958F477310E94668FBC258A5C9B193F971FEBCB8FD8E96B42157FFA08B0667E65C68998C2587D4D4372DD6CC3C1543A079C07DEA1CCAA484F621092FED617F7E7DA3E3D9CAC9A66C7701B16F2B05AE320BFCF028BB3A98539115BFDFDC5362932C393BDF4A89391A4F13B9E778AE7C7B85E56CECF0334BAB945F60AB849B722FCD76E89D47EBD4AE88E589C838B558929726C604332BE2C7C91B9AA9F0B7E0D30D6435484EA4CAA6BBCB4088B665D1F10A24865E77142C61E92F48BF8D6AB2D33EF38673060E493EF79EDE7034FBC4E754F354B3B73';

const res = new Linkv(appID, appSecret);

const {
	im,
	rtc,
	live
} = res;

// //************ im *************
// const imController = im();
// // 获取token
// const userid = '738131192624578560';
// imController.getToken(userid).then(function(token) {
// 	console.log(token);
// });
//
// // 单聊消息发送
// const params = {
// 	fromUserId: 'nodejs',
// 	toUserId: '123456',
// 	objectName: 'RC:textMsg',
// 	content: 'I\'m nodejs'
// };
// imController.pushConverseData(params).then(function(res) {
// 	console.log(res);
// });
//
// //************ rtc *************
// const rtcController = rtc();
// // 获取认证信息
// const authData = rtcController.getAuth();
// console.log(authData);

//************ live *************
const liveController = live();

const userId = 'test-dart-tob';
const aid = 'test';

// 获取token
liveController.thgetToken({
	userId,
	aid
}).then(function(res) {
	console.log(res)

	var waitUntil = new Date(new Date().getTime() + 30 * 1000);
	while(waitUntil > new Date()){}

	// 获取token
	liveController.thgetToken({
		userId,
		aid
	}).then(function(res) {
		console.log(res)
	});
});

// const liveOpenID = '1291371456374120449';
// const orderType = 1; // 1 订单增加金币 2 订单删除金币
// const gold = 100;
// const expr = 3;
// const money = 1;
// const platformType = 'ios'; // ios android h5
// const orderID = '';
//
// // 完成订单
// liveController.orderSuccess({
// 	liveOpenID,
// 	orderType,
// 	gold,
// 	expr,
// 	money,
// 	platformType,
// 	orderID
// }).then(function(res) {
// 	console.log(res)
// });
//
// // 修改金币
// liveController.changeGold({
// 	liveOpenID,
// 	orderType,
// 	gold,
// 	expr
// }).then(function(res) {
// 	console.log(res)
// });
//
// // 查询金币余额
// liveController.getUserTokens({
// 	liveOpenID
// }).then(function(res) {
// 	console.log(res)
// });
