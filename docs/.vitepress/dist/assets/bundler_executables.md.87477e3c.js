import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.33544f09.js";const h=JSON.parse('{"title":"Executables","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"bundler/executables.md","filePath":"bundler/executables.md"}'),o={name:"bundler/executables.md"},p=l(`<h1 id="executables" tabindex="-1">Executables <a class="header-anchor" href="#executables" aria-label="Permalink to &quot;Executables&quot;">​</a></h1><p>Bun 的打包工具实现了<code>--compile</code>标志，用于从 TypeScript 或 JavaScript 文件生成独立的二进制文件。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./cli.ts</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--compile</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--outfile</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mycli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./cli.ts</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--compile</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--outfile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mycli</span></span></code></pre></div><p>这将把<code>cli.ts</code>打包成一个可直接执行的可执行文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ ./mycli</span></span>
<span class="line"><span style="color:#e1e4e8;">Hello world!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ ./mycli</span></span>
<span class="line"><span style="color:#24292e;">Hello world!</span></span></code></pre></div><p>所有导入的文件和包都被打包到可执行文件中，同时还包括 Bun 运行时的副本。支持所有内置的 Bun 和 Node.js API。</p><p><strong>注意</strong> — 目前，<code>--compile</code>标志一次只能接受一个入口点，并且不支持以下标志：</p><ul><li><code>--outdir</code> — 请改用<code>outfile</code>。</li><li><code>--external</code></li><li><code>--splitting</code></li><li><code>--public-path</code></li></ul><h2 id="嵌入文件" tabindex="-1">嵌入文件 <a class="header-anchor" href="#嵌入文件" aria-label="Permalink to &quot;嵌入文件&quot;">​</a></h2><p>独立可执行文件支持嵌入文件。</p><p>要使用<code>bun build --compile</code>将文件嵌入到可执行文件中，请在代码中导入该文件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 这将成为一个内部文件路径</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> icon </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./icon.png&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { file } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Response</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">file</span><span style="color:#E1E4E8;">(icon));</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 这将成为一个内部文件路径</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> icon </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./icon.png&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { file } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">req</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Response</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">file</span><span style="color:#24292E;">(icon));</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>您可能需要为其指定一个<code>--loader</code>，以使其被视为“file”加载程序（以便您获取一个文件路径）。</p><p>可以使用<code>Bun.file</code>的函数或 Node.js 的<code>fs.readFile</code>函数（在“node:fs”中）读取嵌入的文件。</p><h2 id="最小化" tabindex="-1">最小化 <a class="header-anchor" href="#最小化" aria-label="Permalink to &quot;最小化&quot;">​</a></h2><p>要稍微减小可执行文件的大小，请将<code>--minify</code>传递给<code>bun build --compile</code>。这将使用 Bun 的缩小工具来减小代码大小。总的来说，Bun 的二进制文件仍然太大，我们需要使它更小。</p>`,16),e=[p];function c(t,r,i,y,E,d){return a(),n("div",null,e)}const b=s(o,[["render",c]]);export{h as __pageData,b as default};
