// import path from "path";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
const vitePluginVue = {
  name: "preview",
  transform(code, id) {
    if (
      !/\/src\/views\/docs\/.*\.preview\.vue/.test(id) ||
      !/vue&type=preview/.test(id)
    ) {
      return;
    }

    let path = `.${id.match(/\/src\/views\/docs\/.*\.preview\.vue/)[0]}`;
    const file = fs.readFileSync(path).toString();
    // console.log(baseParse(file),'baseParse(file)');
    const parsed: any = baseParse(file).children.find((n: any) => n.tag === "preview");
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join("").trim();
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  },
};

export default vitePluginVue;