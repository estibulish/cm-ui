import path from 'path';
import fs from 'fs';
import marked from 'marked';

const mdToJs = str => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export function md() {
  return {
    configureServer: [ // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => {
          // 获取后缀为 .md 的文件，将他变为 js 文件
          if (ctx.path.endsWith('.md')) {             
            ctx.type = 'js';
            const filePath = path.join(process.cwd(), ctx.path);
            ctx.body = mdToJs(fs.readFileSync(filePath).toString());
          } else {
            await next();
          }
        });
      },
    ],
    transforms: [{  // 用于 rollup
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code)
    }]
  };
}