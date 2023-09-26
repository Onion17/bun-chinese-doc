import{_ as e,o as a,c as s,Q as t}from"./chunks/framework.33544f09.js";const m=JSON.parse('{"title":"Bun APIs","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"runtime/bun-apis.md","filePath":"runtime/bun-apis.md"}'),n={name:"runtime/bun-apis.md"},o=t(`<h1 id="bun-apis" tabindex="-1">Bun APIs <a class="header-anchor" href="#bun-apis" aria-label="Permalink to &quot;Bun APIs&quot;">​</a></h1><p>Bun 实现了一组本地 API，这些 API 可以通过<code>Bun</code>全局对象和一些内置模块来访问。这些 API 经过了大量优化，代表了实现一些常见功能的规范的“Bun-native”方式。</p><p>Bun 在尽可能的情况下努力实现标准 Web API。Bun 主要引入新的 API，主要用于服务器端任务，这些任务在标准中不存在，例如文件 I/O 和启动 HTTP 服务器。在这些情况下，Bun 的方法仍然建立在标准 API（如<code>Blob</code>、<code>URL</code>和<code>Request</code>）之上。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Bun.</span><span style="color:#B392F0;">serve</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Request</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Response</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Success!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Bun.</span><span style="color:#6F42C1;">serve</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">req</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Request</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Response</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Success!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>点击右列中的链接跳转到相关文档。</p><table><thead><tr><th>主题</th><th>API</th></tr></thead><tbody><tr><td>HTTP 服务器</td><td><a href="/api/http.md#Bun.serve"><code>Bun.serve</code></a></td></tr><tr><td>打包工具</td><td><a href="/bundler/"><code>Bun.build</code></a></td></tr><tr><td>文件 I/O</td><td><a href="/api/file-io.html#读取文件"><code>Bun.file</code></a> <a href="/api/file-io.html#写入文件"><code>Bun.write</code></a></td></tr><tr><td>子进程</td><td><a href="/api/spawn.html#生成进程"><code>Bun.spawn</code></a> <a href="/api/spawn.html#阻塞式"><code>Bun.spawnSync</code></a></td></tr><tr><td>TCP</td><td><a href="/api/tcp.html#启动服务器"><code>Bun.listen</code></a> <a href="/api/tcp.html#创建连接"><code>Bun.connect</code></a></td></tr><tr><td>转译器</td><td><a href="/api/transpiler.html"><code>Bun.Transpiler</code></a></td></tr><tr><td>路由</td><td><a href="/api/file-system-router.html"><code>Bun.FileSystemRouter</code></a></td></tr><tr><td>HTML 重写</td><td><a href="/api/html-rewriter.html"><code>HTMLRewriter</code></a></td></tr><tr><td>哈希</td><td><a href="/api/hashing.md#Bun.hash"><code>Bun.hash</code></a> <a href="/api/hashing.md#Bun.CryptoHasher"><code>Bun.CryptoHasher</code></a></td></tr><tr><td><code>i<wbr>mport.meta</code></td><td><a href="/api/import-meta.html"><code>i<wbr>mport.meta</code></a></td></tr><tr><td>SQLite</td><td><a href="/api/sqlite.html"><code>bun:sqlite</code></a></td></tr><tr><td>FFI（外部函数接口）</td><td><a href="/api/ffi.html"><code>bun:ffi</code></a></td></tr><tr><td>测试</td><td><a href="/cli/test.html"><code>bun:test</code></a></td></tr><tr><td>Node-API</td><td><a href="/api/node-api.html"><code>Node-API</code></a></td></tr><tr><td>实用工具</td><td><a href="/api/utils.md#Bun.version"><code>Bun.version</code></a> <a href="/api/utils.md#Bun.revision"><code>Bun.revision</code></a> <a href="/api/utils.md#Bun.env"><code>Bun.env</code></a> <a href="/api/utils.md#Bun.main"><code>Bun.main</code></a> <a href="/api/utils.md#Bun.sleep"><code>Bun.sleep()</code></a> <a href="/api/utils.md#Bun.sleepsync"><code>Bun.sleepSync()</code></a> <a href="/api/utils.md#Bun.which"><code>Bun.which()</code></a> <a href="/api/utils.md#Bun.peek"><code>Bun.peek()</code></a> <a href="/api/utils.md#Bun.openineditor"><code>Bun.openInEditor()</code></a> <a href="/api/utils.md#Bun.deepequals"><code>Bun.deepEquals()</code></a> <a href="/api/utils.md#Bun.escapehtml"><code>Bun.escapeHTML()</code></a> <a href="/api/utils.md#Bun.fileurltopath"><code>Bun.fileURLToPath()</code></a> <a href="/api/utils.md#Bun.pathtofileurl"><code>Bun.pathToFileURL()</code></a> <a href="/api/utils.md#Bun.gzipsync"><code>Bun.gzipSync()</code></a> <a href="/api/utils.md#Bun.gunzipsync"><code>Bun.gunzipSync()</code></a> <a href="/api/utils.md#Bun.deflatesync"><code>Bun.deflateSync()</code></a> <a href="/api/utils.md#Bun.inflatesync"><code>Bun.inflateSync()</code></a> <a href="/api/utils.md#Bun.inspect"><code>Bun.inspect()</code></a> <a href="/api/utils.md#Bun.nanoseconds"><code>Bun.nanoseconds()</code></a> <a href="/api/utils.md#Bun.readablestreamto"><code>Bun.readableStreamTo*()</code></a> <a href="/api/utils.md#Bun.resolvesync"><code>Bun.resolveSync()</code></a></td></tr></tbody></table>`,6),d=[o];function p(c,l,r,i,u,h){return a(),s("div",null,d)}const f=e(n,[["render",p]]);export{m as __pageData,f as default};