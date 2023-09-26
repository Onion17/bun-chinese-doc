import{_ as s,o as e,c as o,Q as a}from"./chunks/framework.33544f09.js";const h=JSON.parse('{"title":"Node-API","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api/node-api.md","filePath":"api/node-api.md"}'),n={name:"api/node-api.md"},p=a(`<h1 id="node-api" tabindex="-1">Node-API <a class="header-anchor" href="#node-api" aria-label="Permalink to &quot;Node-API&quot;">​</a></h1><p>Node-API 是用于构建 Node.js 本地附加组件的接口。Bun 从头开始实现了 Node-API 接口的 95%，因此大多数现有的 Node-API 扩展都可以在 Bun 中直接使用。您可以在 <a href="https://github.com/oven-sh/bun/issues/158" target="_blank" rel="noreferrer">此问题</a> 中跟踪其完成状态。</p><p>与 Node.js 类似，<code>.node</code> 文件（Node-API 模块）可以直接在 Bun 中被 <code>require</code>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">napi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./my-node-module.node&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">napi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./my-node-module.node&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>或者，您可以使用 <code>process.dlopen</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> mod </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { exports: {} };</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">dlopen</span><span style="color:#E1E4E8;">(mod, </span><span style="color:#9ECBFF;">&quot;./my-node-module.node&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> mod </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { exports: {} };</span></span>
<span class="line"><span style="color:#24292E;">process.</span><span style="color:#6F42C1;">dlopen</span><span style="color:#24292E;">(mod, </span><span style="color:#032F62;">&quot;./my-node-module.node&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>Bun 还提供了对 <a href="https://npmjs.com/package/detect-libc" target="_blank" rel="noreferrer"><code>detect-libc</code></a> 包的支持，该包被许多 Node-API 模块用于检测应该 <code>require</code> 哪个 <code>.node</code> 绑定。</p>`,7),l=[p];function t(c,r,d,i,y,E){return e(),o("div",null,l)}const _=s(n,[["render",t]]);export{h as __pageData,_ as default};
