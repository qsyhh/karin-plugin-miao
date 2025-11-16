import {
  config
} from "../chunk-DNLF7E5C.js";
import "../chunk-NF24Q4FD.js";

// src/apps/sendMsg.ts
import { karin, segment, common } from "node-karin";
var yiyanApi = karin.command(/^#一言$/, async (e) => {
  const { yiyanApi: yiyanApi2 } = config();
  await e.reply(segment.image(yiyanApi2));
}, {
  name: "\u4E00\u8A00api"
});
var sendMsg = karin.command(/^#测试主动消息$/, async (e) => {
  const selfId = e.selfId;
  const contact = e.contact;
  const messages = [
    "\u2728 \u54C7\uFF01\u8FD9\u662F\u4E00\u6761\u8D85\u53EF\u7231\u7684\u4E3B\u52A8\u6D88\u606F\uFF0C10\u79D2\u540E\u5C31\u4F1A\u795E\u79D8\u6D88\u5931\u54E6~ \u2728",
    "\u{1F338} \u53EE\u549A\uFF01\u6211\u4E3B\u52A8\u627E\u4F60\u804A\u5929\u5566\uFF0C\u53EF\u60DC10\u79D2\u540E\u6211\u5C31\u8981\u6E9C\u8D70\u5566~ \u{1F338}",
    "\u{1F380} \u4F60\u597D\u5440\uFF01\u8FD9\u662F\u4E00\u6761\u4F1A\u81EA\u5DF1\u8DD1\u6389\u7684\u6D88\u606F\uFF0C\u5012\u8BA1\u65F610\u79D2\u5F00\u59CB\uFF01\u{1F380}",
    "\u{1F36D} \u7A81\u7136\u51FA\u73B0\u7684\u751C\u751C\u6D88\u606F\uFF01\u522B\u6025\u7740\u56DE\u590D\uFF0C10\u79D2\u540E\u6211\u5C31\u6D88\u5931\u5566~ \u{1F36D}"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  const text = `
${randomMsg}`;
  const { messageId } = await karin.sendMsg(selfId, contact, text, { recallMsg: 10 });
  console.log(`\u2705 \u6D88\u606F\u5DF2\u9001\u8FBE\uFF0C\u6D88\u606FID\uFF1A${messageId}`);
  return true;
}, {
  /** 插件优先级 */
  priority: 9999,
  /** 插件触发是否打印触发日志 */
  log: true,
  /** 插件名称 */
  name: "\u53EF\u7231\u4E3B\u52A8\u6D88\u606Fdemo",
  /** 谁可以触发这个插件 'all' | 'master' | 'admin' | 'group.owner' | 'group.admin' */
  permission: "all"
});
var forwardMessage = karin.command(/^#测试转发$/, async (e) => {
  const message = [
    segment.text("\u{1F31F} \u8FD9\u662F\u8F6C\u53D1\u7684\u7B2C\u4E00\u6761\u6D88\u606F \u{1F31F}"),
    segment.text("\u2728 \u8FD9\u662F\u8F6C\u53D1\u7684\u7B2C\u4E8C\u6761\u6D88\u606F \u2728"),
    segment.text("\u{1F496} \u8FD9\u662F\u8F6C\u53D1\u7684\u6700\u540E\u4E00\u6761\u6D88\u606F \u{1F496}")
  ];
  const content = common.makeForward(message, e.selfId, e.bot.account.name);
  await e.bot.sendForwardMsg(e.contact, content);
  return true;
}, {
  /** 插件优先级 */
  priority: 9999,
  /** 插件触发是否打印触发日志 */
  log: true,
  /** 插件名称 */
  name: "\u53EF\u7231\u8F6C\u53D1demo",
  /** 谁可以触发这个插件 'all' | 'master' | 'admin' | 'group.owner' | 'group.admin' */
  permission: "all"
});
var randomEmoji = karin.command(/^#随机表情$/, async (e) => {
  const emojiUrls = [
    "https://i.imgur.com/XaUdU2C.gif",
    "https://i.imgur.com/wF2RkHB.gif",
    "https://i.imgur.com/7voHalT.jpg",
    "https://i.imgur.com/QMlZUdZ.gif",
    "https://i.imgur.com/o2JQjAn.gif"
  ];
  const randomUrl = emojiUrls[Math.floor(Math.random() * emojiUrls.length)];
  const message = [
    segment.text("\u{1F389} \u968F\u673A\u8868\u60C5\u5305\u6765\u5566\uFF01"),
    segment.image(randomUrl)
  ];
  await e.reply(message);
  return true;
}, {
  priority: 9999,
  log: true,
  name: "\u968F\u673A\u8868\u60C5\u5305demo",
  permission: "all"
});
var dailyQuote = karin.command(/^#每日一言$/, async (e) => {
  const quotes = [
    "\u4ECA\u5929\u4E5F\u662F\u5145\u6EE1\u5E0C\u671B\u7684\u4E00\u5929\uFF01\u52A0\u6CB9\uFF01\u2728",
    "\u4EBA\u751F\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\uFF0C\u4F60\u6C38\u8FDC\u4E0D\u77E5\u9053\u4E0B\u4E00\u5757\u662F\u4EC0\u4E48\u5473\u9053\u3002\u{1F36B}",
    "\u5FAE\u7B11\u662F\u4E16\u754C\u4E0A\u6700\u7F8E\u4E3D\u7684\u8BED\u8A00\u3002\u{1F60A}",
    "\u6210\u529F\u4E0D\u662F\u7EC8\u70B9\uFF0C\u5931\u8D25\u4E5F\u4E0D\u662F\u7EC8\u7ED3\uFF0C\u91CD\u8981\u7684\u662F\u7EE7\u7EED\u524D\u8FDB\u7684\u52C7\u6C14\u3002\u{1F680}",
    "\u505A\u81EA\u5DF1\u7684\u592A\u9633\uFF0C\u4E0D\u5FC5\u4EF0\u671B\u522B\u4EBA\uFF01\u{1F4AB}",
    "\u751F\u6D3B\u5C31\u50CF\u9A91\u81EA\u884C\u8F66\uFF0C\u60F3\u4FDD\u6301\u5E73\u8861\u5C31\u5F97\u524D\u8FDB\u3002\u{1F6B2}",
    "\u6700\u91CD\u8981\u7684\u662F\u7231\u81EA\u5DF1\uFF0C\u56E0\u4E3A\u8FD9\u6837\u4F60\u7684\u7075\u9B42\u624D\u4F1A\u53D1\u5149\u3002\u{1F496}"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const message = [
    segment.text(`\u{1F4AD} \u6BCF\u65E5\u4E00\u8A00\uFF1A${randomQuote}`)
  ];
  await e.reply(message);
  return true;
}, {
  priority: 9999,
  log: true,
  name: "\u6BCF\u65E5\u4E00\u8A00demo",
  permission: "all"
});
var weatherForecast = karin.command(/^#今日天气$/, async (e) => {
  const weathers = [
    "\u2600\uFE0F \u6674\u5929\uFF0C\u6E29\u5EA625\xB0C\uFF0C\u9002\u5408\u51FA\u95E8\u73A9\u800D~",
    "\u{1F327}\uFE0F \u5C0F\u96E8\uFF0C\u6E29\u5EA618\xB0C\uFF0C\u8BB0\u5F97\u5E26\u4F1E\u54E6\uFF01",
    "\u26C5 \u591A\u4E91\uFF0C\u6E29\u5EA622\xB0C\uFF0C\u9634\u6674\u4E0D\u5B9A\u7684\u4E00\u5929~",
    "\u{1F32B}\uFE0F \u96FE\u5929\uFF0C\u6E29\u5EA615\xB0C\uFF0C\u80FD\u89C1\u5EA6\u8F83\u4F4E\uFF0C\u51FA\u884C\u6CE8\u610F\u5B89\u5168\uFF01",
    "\u{1F324}\uFE0F \u5C40\u90E8\u6674\u6717\uFF0C\u6E29\u5EA620\xB0C\uFF0C\u5076\u6709\u5C0F\u4E91\u6735\u906E\u6321\u9633\u5149~"
  ];
  const randomWeather = weathers[Math.floor(Math.random() * weathers.length)];
  const message = [
    segment.text(`\u{1F308} \u4ECA\u65E5\u5929\u6C14\u9884\u62A5\uFF1A${randomWeather}`)
  ];
  await e.reply(message);
  return true;
}, {
  priority: 9999,
  log: true,
  name: "\u5929\u6C14\u9884\u62A5demo",
  permission: "all"
});
export {
  dailyQuote,
  forwardMessage,
  randomEmoji,
  sendMsg,
  weatherForecast,
  yiyanApi
};
