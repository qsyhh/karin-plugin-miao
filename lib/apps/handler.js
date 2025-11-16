// src/apps/handler.ts
import { karin, handler } from "node-karin";
var test = karin.handler("test.image", (args, reject) => {
  return "Handler\u5904\u7406\u5B8C\u6210";
});
var testHandler = karin.command(/^#?测试handler$/, async (e) => {
  const msg = "\u6D4B\u8BD5handler";
  const res = await handler.call("test.image", { e, msg });
  await e.reply(res);
  return true;
}, {
  /** 插件优先级 */
  priority: 9999,
  /** 插件触发是否打印触发日志 */
  log: true,
  /** 插件名称 */
  name: "\u6D4B\u8BD5handler",
  /** 谁可以触发这个插件 'all' | 'master' | 'admin' | 'group.owner' | 'group.admin' */
  permission: "all"
});
export {
  test,
  testHandler
};
