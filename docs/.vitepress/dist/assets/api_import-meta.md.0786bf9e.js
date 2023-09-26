import{_ as o,o as s,c as t,Q as e}from"./chunks/framework.33544f09.js";const E=JSON.parse('{"title":"i​mport.meta","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api/import-meta.md","filePath":"api/import-meta.md"}'),a={name:"api/import-meta.md"},p=e(`<h1 id="import-meta" tabindex="-1">i<wbr>mport.meta <a class="header-anchor" href="#import-meta" aria-label="Permalink to &quot;i&lt;wbr&gt;mport.meta&quot;">​</a></h1><p><code>i<wbr>mport.meta</code> 对象是一个模块用来访问有关自身信息的方式。它是 JavaScript 语言的一部分，但它的内容并没有标准化。每个 &quot;主机&quot;（浏览器、运行时等）都可以在 <code>i<wbr>mport.meta</code> 对象上实现任何属性。</p><p>Bun 实现了以下属性：</p><ul><li><p><code>i<wbr>mport.meta.dir</code>：该属性提供了包含当前文件的目录的绝对路径，例如可能返回 &quot;/path/to/project&quot;。与 CommonJS 模块（和 Node.js）中的 <code>__dirname</code> 等效。</p></li><li><p><code>i<wbr>mport.meta.file</code>：该属性返回当前文件的名称，例如可能返回 &quot;file.ts&quot;。</p></li><li><p><code>i<wbr>mport.meta.path</code>：该属性提供了当前文件的绝对路径，例如可能返回 &quot;/path/to/project/file.ts&quot;。与 CommonJS 模块（和 Node.js）中的 <code>__filename</code> 等效。</p></li><li><p><code>i<wbr>mport.meta.main</code>：这是一个布尔值属性，指示当前文件是否是当前 <code>bun</code> 进程的入口点。如果文件是直接由 <code>bun run</code> 执行的，则为 <code>true</code>，否则为 <code>false</code>。</p></li><li><p><code>i<wbr>mport.meta.resolve{Sync}</code>：这些方法用于将模块导入符号（例如 <code>&quot;zod&quot;</code> 或 <code>&quot;./file.tsx&quot;</code>）解析为绝对路径。它们确定了如果导入这些符号是否将导入哪个文件。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolveSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;zod&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// =&gt; &quot;/path/to/project/node_modules/zod/index.ts&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolveSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./file.tsx&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// =&gt; &quot;/path/to/project/file.tsx&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolveSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;zod&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// =&gt; &quot;/path/to/project/node_modules/zod/index.ts&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolveSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./file.tsx&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// =&gt; &quot;/path/to/project/file.tsx&quot;</span></span></code></pre></div></li></ul><p>这些属性和方法使您能够方便地获取当前模块的信息和解析导入符号的路径。</p>`,5),n=[p];function l(c,r,i,d,m,u){return s(),t("div",null,n)}const _=o(a,[["render",l]]);export{E as __pageData,_ as default};
