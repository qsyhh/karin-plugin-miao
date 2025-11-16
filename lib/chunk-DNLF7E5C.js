import {
  dir
} from "./chunk-NF24Q4FD.js";

// src/utils/config.ts
import {
  watch,
  logger,
  filesByExt,
  copyConfigSync,
  requireFileSync
} from "node-karin";
copyConfigSync(dir.defConfigDir, dir.ConfigDir, [".json"]);
var config = () => {
  const cfg = requireFileSync(`${dir.ConfigDir}/config.json`);
  const def = requireFileSync(`${dir.defConfigDir}/config.json`);
  return { ...def, ...cfg };
};
setTimeout(() => {
  const list = filesByExt(dir.ConfigDir, ".json", "abs");
  list.forEach((file) => watch(file, (old, now) => {
    logger.info([
      "QAQ: \u68C0\u6D4B\u5230\u914D\u7F6E\u6587\u4EF6\u66F4\u65B0",
      `\u8FD9\u662F\u65E7\u6570\u636E: ${old}`,
      `\u8FD9\u662F\u65B0\u6570\u636E: ${now}`
    ].join("\n"));
  }));
}, 2e3);

// src/utils/common.ts
import lodash from "node-karin/lodash";
import moment from "node-karin/moment";

export {
  config
};
