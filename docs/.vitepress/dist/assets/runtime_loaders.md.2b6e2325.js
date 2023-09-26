import{_ as o,C as p,o as e,c as t,H as c,w as r,Q as n,k as s,a}from"./chunks/framework.33544f09.js";const _=JSON.parse('{"title":"File types","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"runtime/loaders.md","filePath":"runtime/loaders.md"}'),y={name:"runtime/loaders.md"},E=n(`<h1 id="file-types" tabindex="-1">File types <a class="header-anchor" href="#file-types" aria-label="Permalink to &quot;File types&quot;">​</a></h1><h2 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h2><p>Bun 原生支持 TypeScript，无需任何额外设置。所有文件在执行之前都会被 Bun 的本地快速转译器即时转译。与其他构建工具类似，Bun 不执行类型检查，仅从文件中删除类型注释。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.js</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.jsx</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.ts</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.tsx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.js</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.jsx</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.ts</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.tsx</span></span></code></pre></div><p>Bun 的运行时行为的某些方面受到您的 <code>tsconfig.json</code> 文件的内容影响。有关详细信息，请参阅<a href="/runtime/typescript.html">运行时 &gt; TypeScript</a>页面。</p><h2 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-label="Permalink to &quot;JSX&quot;">​</a></h2><p>Bun 原生支持 <code>.jsx</code> 和 <code>.tsx</code> 文件，Bun 的内部转译器会在执行之前将 JSX 语法转换为普通的 JavaScript。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">#react.tsx</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">message</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">}}&gt;{props.message}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">Component</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">message</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Hello world!&quot;</span><span style="color:#E1E4E8;"> /&gt;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">#react.tsx</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">message</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">}) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{{color: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">}}&gt;{props.message}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(&lt;</span><span style="color:#005CC5;">Component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">message</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Hello world!&quot;</span><span style="color:#24292E;"> /&gt;);</span></span></code></pre></div><p>Bun 对 JSX 实现了特殊的日志记录，以便更容易进行调试。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react.tsx</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Component message=</span><span style="color:#9ECBFF;">&quot;Hello world!&quot;</span><span style="color:#E1E4E8;"> /</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react.tsx</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Component message=</span><span style="color:#032F62;">&quot;Hello world!&quot;</span><span style="color:#24292E;"> /</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="文本文件" tabindex="-1">文本文件 <a class="header-anchor" href="#文本文件" aria-label="Permalink to &quot;文本文件&quot;">​</a></h2><p>文本文件可以作为字符串导入。</p>`,12),i=s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"#index.ts")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," text "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'"./text.txt"'),s("span",{style:{color:"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(text);")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},'// => "Hello world!"')])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"#index.ts")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," text "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"./text.txt"'),s("span",{style:{color:"#24292E"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(text);")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},'// => "Hello world!"')])])])],-1),d=s("div",{class:"language-txt vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"txt"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#e1e4e8"}},"#text.txt")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#e1e4e8"}},"Hello world!")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292e"}},"#text.txt")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292e"}},"Hello world!")])])])],-1),u=n(`<h2 id="json-和-toml" tabindex="-1">JSON 和 TOML <a class="header-anchor" href="#json-和-toml" aria-label="Permalink to &quot;JSON 和 TOML&quot;">​</a></h2><p>JSON 和 TOML 文件可以直接从源文件导入。文件内容将加载并返回为 JavaScript 对象。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pkg </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./package.json&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./data.toml&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pkg </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./package.json&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./data.toml&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="wasm" tabindex="-1">WASM <a class="header-anchor" href="#wasm" aria-label="Permalink to &quot;WASM&quot;">​</a></h2><blockquote><p>🚧 <strong>实验性功能</strong></p></blockquote><p>Bun 对 WASI（WebAssembly System Interface）有实验性支持。要使用 Bun 运行 <code>.wasm</code> 二进制文件，请执行以下操作：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./my-wasm-app.wasm</span></span>
<span class="line"><span style="color:#6A737D;"># 如果文件名不以 &quot;.wasm&quot; 结尾</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./my-wasm-app.whatever</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./my-wasm-app.wasm</span></span>
<span class="line"><span style="color:#6A737D;"># 如果文件名不以 &quot;.wasm&quot; 结尾</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./my-wasm-app.whatever</span></span></code></pre></div><blockquote><p><strong>注意</strong> — WASI 支持基于 <a href="https://github.com/sagemathinc/cowasm/tree/main/core/wasi-js" target="_blank" rel="noreferrer">wasi-js</a>。目前，它仅支持使用 <code>wasi_snapshot_preview1</code> 或 <code>wasi_unstable</code> API 的 WASI 二进制文件。Bun 的实现尚未完全针对性能进行优化；随着 WASM 的普及，这将成为更重要的优化目标。</p></blockquote><h2 id="自定义加载器" tabindex="-1">自定义加载器 <a class="header-anchor" href="#自定义加载器" aria-label="Permalink to &quot;自定义加载器&quot;">​</a></h2><p>可以使用插件实现对附加文件类型的支持。有关完整文档，请参阅<a href="/bundler/plugins.html">运行时 &gt; 插件</a>。</p>`,10);function F(h,g,m,b,C,B){const l=p("codetabs");return e(),t("div",null,[E,c(l,null,{default:r(()=>[i,d]),_:1}),u])}const v=o(y,[["render",F]]);export{_ as __pageData,v as default};
