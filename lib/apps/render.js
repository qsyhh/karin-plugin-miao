import {
  config
} from "../chunk-DNLF7E5C.js";
import {
  dir
} from "../chunk-NF24Q4FD.js";

// src/apps/render.ts
import { karin, render, segment, logger } from "node-karin";
var image = karin.command(/^#?测试渲染$/, async (e) => {
  try {
    const html = dir.defResourcesDir + "/template/test.html";
    const image2 = dir.defResourcesDir + "/image/\u542F\u7A0B\u5BA3\u53D1.png";
    const img = await render.render({
      name: "render",
      encoding: "base64",
      file: html,
      data: {
        file: image2,
        pluResPath: process.cwd()
      },
      pageGotoParams: {
        waitUntil: "networkidle2"
      }
    });
    await e.reply(segment.image(`base64://${img}`));
    return true;
  } catch (error) {
    logger.error(error);
    await e.reply(JSON.stringify(error));
    return true;
  }
}, {
  /** 插件优先级 */
  priority: 9999,
  /** 插件触发是否打印触发日志 */
  log: true,
  /** 插件名称 */
  name: "\u6D4B\u8BD5\u6E32\u67D3",
  /** 谁可以触发这个插件 'all' | 'master' | 'admin' | 'group.owner' | 'group.admin' */
  permission: "all"
});
var renderUrl = karin.command(/^#?渲染/, async (e) => {
  const file = e.msg.replace(/^#?渲染/, "").trim();
  try {
    const img = await render.render({
      name: "render",
      encoding: "base64",
      file: file || "https://whitechi73.github.io/OpenShamrock/",
      type: "png",
      pageGotoParams: {
        waitUntil: "networkidle2"
      },
      setViewport: {
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1
      }
    });
    await e.reply(segment.image(`base64://${img}`));
    return true;
  } catch (error) {
    logger.error(error);
    await e.reply(error.message);
    return true;
  }
}, {
  /** 插件优先级 */
  priority: 9999,
  /** 插件触发是否打印触发日志 */
  log: true,
  /** 插件名称 */
  name: "\u6E32\u67D3demo",
  /** 谁可以触发这个插件 'all' | 'master' | 'admin' | 'group.owner' | 'group.admin' */
  permission: "master"
});
var screenshot = karin.command("^#\u6D4B\u8BD5\u622A\u56FE$", async (e) => {
  const { screenshotUrl } = config();
  const img = await karin.render(screenshotUrl);
  await e.reply(segment.image(`base64://${img}`));
  return true;
}, {
  name: "\u6D4B\u8BD5\u622A\u56FE"
});
export {
  image,
  renderUrl,
  screenshot
};
