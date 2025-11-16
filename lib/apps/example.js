// src/apps/example.ts
import { karin, segment } from "node-karin";
var hello = karin.command("^(#)?\u4F60\u597D$", async (e) => {
  await e.reply("\u4F60\u597D\u554A\uFF01\u6211\u662FKarin\uFF0C\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60~ (\u3002\u30FB\u2200\u30FB)\u30CE", { at: false, recallMsg: 0, reply: true });
  return true;
});
var test = karin.command("^(#)?\u6D4B\u8BD5$", "\u8BA9\u6211\u6765\u5C55\u793A\u4E00\u4E0B\u6211\u7684\u529F\u80FD\u5427\uFF01\u2728");
var text = karin.command("^(#)?\u6253\u62DB\u547C$", segment.text("\u5927\u5BB6\u597D\u5440\uFF01\u4ECA\u5929\u4E5F\u8981\u5143\u6C14\u6EE1\u6EE1\u54E6\uFF01\u2570(*\xB0\u25BD\xB0*)\u256F"), { name: "\u6253\u62DB\u547C" });
var test2 = karin.command("^(#)?\u83DC\u5355$", "\u6765\u770B\u770B\u6211\u90FD\u4F1A\u4E9B\u4EC0\u4E48\u5427~\n- #\u4F60\u597D\uFF1A\u6253\u4E2A\u62DB\u547C\n- #\u6D4B\u8BD5\uFF1A\u529F\u80FD\u5C55\u793A\n- #\u6253\u62DB\u547C\uFF1A\u5143\u6C14\u95EE\u5019\n(\uFF61\uFF65\u03C9\uFF65\uFF61)\uFF89\u2661", {
  event: "message",
  // 监听的事件
  name: "\u83DC\u5355",
  // 插件名称
  perm: "all",
  // 触发权限
  at: false,
  // 是否加上at 仅在群聊中有效
  reply: false,
  // 是否加上引用回复
  recallMsg: 0,
  // 发送是否撤回消息 单位秒
  log: true,
  // 是否启用日志
  rank: 1e4,
  // 优先级
  adapter: [],
  // 生效的适配器
  dsbAdapter: [],
  // 禁用的适配器
  delay: 0,
  // 延迟回复 单位毫秒 仅在第二个参数非函数时有效
  stop: false,
  // 是否停止执行后续插件 仅在第二个参数非函数时有效
  authFailMsg: "\u54CE\u5440\uFF0C\u8FD9\u4E2A\u529F\u80FD\u53EA\u6709\u4E3B\u4EBA\u624D\u80FD\u7528\u54E6\uFF01\u8981\u4E0D\u4F60\u5148\u8BB8\u4E2A\u613F\uFF1F(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727"
});
export {
  hello,
  test,
  test2,
  text
};
