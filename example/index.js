/*
 * @Author: your name
 * @Date: 2020-07-28 17:34:33
 * @LastEditTime: 2021-06-16 16:26:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-sdk/example/index.js
 */
const Linkv = require('linkv');

const appID = 'utAKXPPVkdTVIJjzgOEcsqtURcVwHRRO';
const appSecret =
	'DE81D48F7EE583288A3127A500E67954ED2F3F692C5B1F3E90E35EC350CB76FB0F44FAC85BAD2847AB09446AD1AC5798A7EFB0C3824DD68D72E65243DFA091F6856E97C516FBD708A08A8DCFCA2AA50816F90F184505E7F95C8A6C4B0058E557D1D12AEA58ADA98FFCCC4DA023E2A58E9102AB4D4F4F051AC680BB83D684A868C534974958AA262A38CDF91244753377A74DC56303CFAF3146D511E8D94A09E73F85DCA354D4B41295C4FD2ECB1C088CD11B6047338AF8CFFF3320C0485C3AC847A8CCE239141E3E3AFBA8617F1574A0AC8CB14B673FF117883F85D7FB384609A226193710C4FD3E11FC5AEE19B2B63F584B6CFEC32AC6036E280F354D540B69F7A319CC4C93FEEF0BBF210CE4B3D5DCC994E1CC3B7F28AB1CA6D626D9FD412485761BA431A76CAAE99BE8351B7B856F1065126C8C13CDDDE1393D16B78F6CE503F85D0A3D25388F467D2FB29D530CAABB8F7580653432C7A06DF12E3EF7E7D78C00CA1CAF5CE850A9A88BE6AFB862063010D6AE650BBF1591BF6B193E3BEB70';

const res = new Linkv(appID, appSecret);

const {
	im,
	rtc,
	live
} = res;

//************ im *************
const imController = im();
// 获取token
const userid = '738131192624578560';
imController.getToken(userid).then(function(token) {
	console.log(token);
});

// 单聊消息发送
const params = {
	fromUserId: 'nodejs',
	toUserId: '123456',
	objectName: 'RC:textMsg',
	content: 'I\'m nodejs'
};
imController.pushConverseData(params).then(function(res) {
	console.log(res);
});

//************ rtc *************
const rtcController = rtc();
// 获取认证信息
const authData = rtcController.getAuth();
console.log(authData);

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
}).then(function(res) {
	console.log(res)
});

// 修改金币
liveController.changeGold({
	liveOpenID,
	orderType,
	gold,
	expr
}).then(function(res) {
	console.log(res)
});

// 查询金币余额
liveController.getUserTokens({
	liveOpenID
}).then(function(res) {
	console.log(res)
});