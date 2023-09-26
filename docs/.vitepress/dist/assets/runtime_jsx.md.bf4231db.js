import{_ as s,o,c as a,Q as t}from"./chunks/framework.33544f09.js";const q=JSON.parse('{"title":"JSX","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"runtime/jsx.md","filePath":"runtime/jsx.md"}'),n={name:"runtime/jsx.md"},e=t(`<h1 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-label="Permalink to &quot;JSX&quot;">​</a></h1><p>Bun 支持 <code>.jsx</code> 和 <code>.tsx</code> 文件。Bun 的内部转译器会在执行之前将 JSX 语法转换为普通的 JavaScript。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">message</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ color: </span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;"> }}&gt;{props.message}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">Component</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">message</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Hello world!&quot;</span><span style="color:#E1E4E8;"> /&gt;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">message</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{{ color: </span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;"> }}&gt;{props.message}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(&lt;</span><span style="color:#005CC5;">Component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">message</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Hello world!&quot;</span><span style="color:#24292E;"> /&gt;);</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>Bun 会读取您的 <code>tsconfig.json</code> 或 <code>jsconfig.json</code> 配置文件，以确定如何在内部执行 JSX 转换。为了避免使用这两者之一，以下选项也可以在 <a href="/runtime/configuration.html"><code>bunfig.toml</code></a> 中定义。</p><p>以下编译器选项受到尊重。</p><h3 id="jsx-1" tabindex="-1"><a href="https://www.typescriptlang.org/tsconfig#jsx" target="_blank" rel="noreferrer"><code>jsx</code></a> <a class="header-anchor" href="#jsx-1" aria-label="Permalink to &quot;[\`jsx\`](https://www.typescriptlang.org/tsconfig#jsx)&quot;">​</a></h3><p>JSX 构造如何在内部转换为普通 JavaScript。下表列出了 <code>jsx</code> 的可能值，以及以下简单 JSX 组件的转译：</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Box</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">}&gt;Hello&lt;/</span><span style="color:#79B8FF;">Box</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Box</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">}&gt;Hello&lt;/</span><span style="color:#005CC5;">Box</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><table><thead><tr><th>编译器选项</th><th>转译输出</th></tr></thead><tbody><tr><td><code>json { &quot;jsx&quot;: &quot;react&quot; } </code></td><td><code>tsx import { createElement } from &quot;react&quot;; createElement(&quot;Box&quot;, { width: 5 }, &quot;Hello&quot;); </code></td></tr><tr><td><code>json { &quot;jsx&quot;: &quot;react-jsx&quot; } </code></td><td><code>tsx import { jsx } from &quot;react/jsx-runtime&quot;; jsx(&quot;Box&quot;, { width: 5 }, &quot;Hello&quot;); </code></td></tr><tr><td><code>json { &quot;jsx&quot;: &quot;react-jsxdev&quot; } </code></td><td><code>tsx import { jsxDEV } from &quot;react/jsx-dev-runtime&quot;; jsxDEV(&quot;Box&quot;, { width: 5, children: &quot;Hello&quot; }, undefined, false, undefined, this); </code> <code>jsxDEV</code> 变量名是 React 使用的约定。 <code>DEV</code> 后缀是一种可见的方式，表示该代码用于开发中使用。开发版本的 React 速度较慢，包括额外的有效性检查和调试工具。</td></tr><tr><td><code>json { &quot;jsx&quot;: &quot;preserve&quot; } </code></td><td><code>tsx // JSX不会转译 // Bun当前不支持 &quot;preserve&quot; &lt;Box width={5}&gt;Hello&lt;/Box&gt; </code></td></tr></tbody></table><h3 id="jsxfactory" tabindex="-1"><a href="https://www.typescriptlang.org/tsconfig#jsxFactory" target="_blank" rel="noreferrer"><code>jsxFactory</code></a> <a class="header-anchor" href="#jsxfactory" aria-label="Permalink to &quot;[\`jsxFactory\`](https://www.typescriptlang.org/tsconfig#jsxFactory)&quot;">​</a></h3><blockquote><p><strong>注意</strong> — 仅当 <code>jsx</code> 为 <code>react</code> 时适用。</p></blockquote><p>用于表示 JSX 构造的函数名称。默认值为 <code>&quot;createElement&quot;</code>。对于使用不同函数名称（如 <code>&quot;h&quot;</code>）的库（例如 <a href="https://preactjs.com/" target="_blank" rel="noreferrer">Preact</a>）很有用。</p><table><thead><tr><th>编译器选项</th><th>转译输出</th></tr></thead><tbody><tr><td><code>json { &quot;jsx&quot;: &quot;react&quot;, &quot;jsxFactory&quot;: &quot;h&quot; } </code></td><td><code>tsx import { h } from &quot;react&quot;; h(&quot;Box&quot;, { width: 5 }, &quot;Hello&quot;); </code></td></tr></tbody></table><h3 id="jsxfragmentfactory" tabindex="-1"><a href="https://www.typescriptlang.org/tsconfig#jsxFragmentFactory" target="_blank" rel="noreferrer"><code>jsxFragmentFactory</code></a> <a class="header-anchor" href="#jsxfragmentfactory" aria-label="Permalink to &quot;[\`jsxFragmentFactory\`](https://www.typescriptlang.org/tsconfig#jsxFragmentFactory)&quot;">​</a></h3><blockquote><p><strong>注意</strong> — 仅当 <code>jsx</code> 为 <code>react</code> 时适用。</p></blockquote><p>用于表示 <a href="https://react.dev/reference/react/Fragment" target="_blank" rel="noreferrer">JSX fragments</a>（例如 <code>&lt;&gt;Hello&lt;/&gt;</code>）的函数名称；仅当 <code>jsx</code> 为 <code>react</code> 时适用。默认值为 <code>&quot;Fragment&quot;</code>。</p><table><thead><tr><th>编译器选项</th><th>转译输出</th></tr></thead><tbody><tr><td><code>json { &quot;jsx&quot;: &quot;react&quot;, &quot;jsxFactory&quot;: &quot;myjsx&quot;, &quot;jsxFragmentFactory&quot;: &quot;MyFragment&quot; } </code></td><td><code>tsx // 输入 &lt;&gt;Hello&lt;/&gt;; // 输出 import { myjsx, MyFragment } from &quot;react&quot;; myjsx(MyFragment, null, &quot;Hello&quot;); </code></td></tr></tbody></table><h3 id="jsximportsource" tabindex="-1"><a href="https://www.typescriptlang.org/tsconfig#jsxImportSource" target="_blank" rel="noreferrer"><code>jsxImportSource</code></a> <a class="header-anchor" href="#jsximportsource" aria-label="Permalink to &quot;[\`jsxImportSource\`](https://www.typescriptlang.org/tsconfig#jsxImportSource)&quot;">​</a></h3><blockquote><p><strong>注意</strong> — 仅当 <code>jsx</code> 为 <code>react-jsx</code> 或 <code>react-jsxdev</code> 时适用。</p></blockquote><p>用于导入组件工厂函数（<code>createElement</code>、<code>jsx</code>、<code>jsxDEV</code> 等）的模块。默认值为 <code>&quot;react&quot;</code>。通常在使用类似 Preact 的组件库时需要指定此值。</p><table><thead><tr><th>编译器选项</th><th>转译输出</th></tr></thead><tbody><tr><td><code>jsonc { &quot;jsx&quot;: &quot;react&quot; /* jsxImportSource 未定义，默认为 &quot;react&quot; */ } </code></td><td><code>tsx import { jsx } from &quot;react/jsx-runtime&quot;; jsx(&quot;Box&quot;, { width: 5, children: &quot;Hello&quot; }); </code></td></tr><tr><td><code>jsonc { &quot;jsx&quot;: &quot;react-jsx&quot;, &quot;jsxImportSource&quot;: &quot;preact&quot; } </code></td><td><code>tsx import { jsx } from &quot;preact/jsx-runtime&quot;; jsx(&quot;Box&quot;, { width: 5, children: &quot;Hello&quot; }); </code></td></tr><tr><td><code>jsonc { &quot;jsx&quot;: &quot;react-jsxdev&quot;, &quot;jsxImportSource&quot;: &quot;preact&quot; } </code></td><td><code>tsx // /jsx-runtime 自动附加 import { jsxDEV } from &quot;preact/jsx-dev-runtime&quot;; jsxDEV( &quot;Box&quot;, { width: 5, children: &quot;Hello&quot; }, undefined, false, undefined, this ); </code></td></tr></tbody></table><h3 id="jsx-pragma" tabindex="-1">JSX pragma <a class="header-anchor" href="#jsx-pragma" aria-label="Permalink to &quot;JSX pragma&quot;">​</a></h3><p>所有这些值都可以在每个文件的基础上使用 <em>pragmas</em> 设置。Pragma 是一个特殊的注释，用于在特定文件中设置编译器选项。</p><table><thead><tr><th>Pragma</th><th>等效配置</th></tr></thead><tbody><tr><td><code>ts // @jsx h </code></td><td><code>jsonc { &quot;jsxFactory&quot;: &quot;h&quot; } </code></td></tr><tr><td><code>ts // @jsxFrag MyFragment </code></td><td><code>jsonc { &quot;jsxFragmentFactory&quot;: &quot;MyFragment&quot; } </code></td></tr><tr><td><code>ts // @jsxImportSource preact </code></td><td><code>jsonc { &quot;jsxImportSource&quot;: &quot;preact&quot; } </code></td></tr></tbody></table><h2 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to &quot;日志&quot;">​</a></h2><p>Bun 为 JSX 实现了特殊的日志记录，以便更容易进行调试。给定以下文件：</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Stack, UserCard } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">Stack</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">UserCard</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Dom&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bio</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Street racer and Corona lover&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">UserCard</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Jakob&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bio</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Super spy and Dom&#39;s secret brother&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#79B8FF;">Stack</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Stack, UserCard } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">Stack</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">UserCard</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Dom&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bio</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Street racer and Corona lover&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">UserCard</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Jakob&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bio</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Super spy and Dom&#39;s secret brother&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#005CC5;">Stack</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>当日志记录时，Bun 会美化打印组件树：</p><image src="https://github.com/oven-sh/bun/assets/3084745/d29db51d-6837-44e2-b8be-84fc1b9e9d97"></image><h2 id="prop-punning" tabindex="-1">Prop punning <a class="header-anchor" href="#prop-punning" aria-label="Permalink to &quot;Prop punning&quot;">​</a></h2><p>Bun 运行时还支持 JSX 的 &quot;prop punning&quot;。这是一种为具有相同名称的属性分配变量的简写语法。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Div</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">className</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">className</span><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> props;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// without punning</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{className} /&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// with punning</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {className} /&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Div</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">className</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;}) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">className</span><span style="color:#24292E;">} </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> props;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// without punning</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{className} /&gt;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// with punning</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {className} /&gt;;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,33),l=[e];function p(r,c,d,y,E,u){return o(),a("div",null,l)}const h=s(n,[["render",p]]);export{q as __pageData,h as default};