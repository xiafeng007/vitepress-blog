import{_ as s,o as n,c as a,a as l}from"./app.930700d9.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-05-11-linux.md","lastUpdated":1661654014000}'),p={name:"javascript/2022-05-11-linux.md"},o=l(`<ul><li><p>1\u3001window \u7248 nginx \u7248\u672C\u4E0B\u8F7D\u5730\u5740</p><ul><li><a href="http://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/download.html</a></li></ul></li><li><p>2\u3001nginx \u5B66\u4E60\u89C6\u9891</p><ul><li><a href="https://juejin.cn/post/6844903701459501070#heading-12" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903701459501070#heading-12</a></li></ul></li><li><p>3\u3001centos \u4E0B\u5B89\u88C5 nginx||\u53C2\u8003\u94FE\u63A5 <a href="https://juejin.cn/post/6844903701459501070" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903701459501070</a></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u68C0\u67E5yum\u6E90\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">  yum list </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6211\u7528\u7684\u817E\u8BAF\u4E91\u7684centos\uFF0Cyum\u6E90\u662F\u5B58\u5728\u7684\uFF0C\u76F4\u63A5\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">  yum install nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6267\u884C\u5B8C\u6210\u540E\uFF0C\u9A8C\u8BC1\u7248\u672C\u53F7\uFF0C\u786E\u8BA4\u5B89\u88C5\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">  nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u67E5\u770Bnginx\u7684\u5B89\u88C5\u76EE\u5F55\uFF0C\u67E5\u770B\u5230\u6240\u6709\u5B89\u88C5\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  rpm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ql nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5F00\u542Fnginx\u670D\u52A1\uFF0C\u4E00\u4E2A\u5355\u8BCD\u5373\u53EF</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// (\u5982\u679C\u4E00\u5207\u5C31\u7EEA\uFF0C\u9ED8\u8BA480\u7AEF\u53E3\u53EF\u4EE5\u6D4F\u89C8\u5668\u8BBF\u95EE\u51FA\u73B0\u521D\u59CB\u9875\u9762)</span></span>
<span class="line"><span style="color:#A6ACCD;">  nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u505C\u6B62nginx \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">  nginx  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// systemctl\u5F00\u542F\u3001\u5173\u95ED\u3001\u91CD\u542F\uFF08\u5E38\u7528\u65B9\u5F0F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  systemctl start nginx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"><span style="color:#A6ACCD;">  systemctl stop nginx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"><span style="color:#A6ACCD;">  systemctl restart nginx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6\u7B49\uFF0C\u91CD\u65B0\u8F7D\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">  nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s reload</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B nginx \u603B\u914D\u7F6E\u6587\u4EF6</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5B9A\u4F4D\u5230\u6307\u5B9A\u76EE\u5F55\uFF0C\u7136\u540E\u6253\u5F00nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">  cd </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">  vim nginx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  #\u8FD0\u884C\u7528\u6237\uFF0C\u9ED8\u8BA4\u5373\u662Fnginx\uFF0C\u53EF\u4EE5\u4E0D\u8FDB\u884C\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  user  nginx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #Nginx\u8FDB\u7A0B\uFF0C\u4E00\u822C\u8BBE\u7F6E\u4E3A\u548CCPU\u6838\u6570\u4E00\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;">  worker_processes  auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #\u9519\u8BEF\u65E5\u5FD7\u5B58\u653E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">  error_log  </span><span style="color:#89DDFF;">/</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;">/log/nginx/error.log warn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #\u8FDB\u7A0Bpid\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  pid        </span><span style="color:#89DDFF;">/</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;">/run/nginx.pid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  events </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">worker_connections</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> # </span><span style="color:#A6ACCD;">\u5355\u4E2A\u540E\u53F0\u8FDB\u7A0B\u7684\u6700\u5927\u5E76\u53D1\u6570</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">include</span><span style="color:#F07178;">       </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mime</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">types</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   #</span><span style="color:#A6ACCD;">\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u7C7B\u578B\u6620\u5C04\u8868</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">default_type</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">application</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">octet</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">stream</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">\u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B</span></span>
<span class="line"><span style="color:#F07178;">      #</span><span style="color:#A6ACCD;">\u8BBE\u7F6E\u65E5\u5FD7\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">log_format</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">main</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$status $body_bytes_sent &quot;$http_referer&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">access_log</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">/</span><span style="color:#C792EA;">var</span><span style="color:#F07178;">/</span><span style="color:#A6ACCD;">log</span><span style="color:#F07178;">/nginx/access.log  main</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   #</span><span style="color:#A6ACCD;">nginx\u8BBF\u95EE\u65E5\u5FD7\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">sendfile</span><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   #</span><span style="color:#A6ACCD;">\u5F00\u542F\u9AD8\u6548\u4F20\u8F93\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#F07178;">      #</span><span style="color:#A6ACCD;">tcp_nopush</span><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">    #</span><span style="color:#A6ACCD;">\u51CF\u5C11\u7F51\u7EDC\u62A5\u6587\u6BB5\u7684\u6570\u91CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">keepalive_timeout</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">\u4FDD\u6301\u8FDE\u63A5\u7684\u65F6\u95F4</span><span style="color:#F07178;">\uFF0C</span><span style="color:#A6ACCD;">\u4E5F\u53EB\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      #</span><span style="color:#A6ACCD;">gzip</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">\u5F00\u542Fgzip\u538B\u7F29</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">conf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#676E95;font-style:italic;">/*.conf; #\u5305\u542B\u7684\u5B50\u914D\u7F6E\u9879\u4F4D\u7F6E\u548C\u6587\u4EF6</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></li><li><p>4\u3001centos \u4E0B\u914D\u7F6E xftp|| \u53C2\u8003\u94FE\u63A5 <a href="https://www.jb51.net/article/127411.htm" target="_blank" rel="noopener noreferrer">https://www.jb51.net/article/127411.htm</a></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u67E5\u770B\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5ftp\u8F6F\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  which vsftpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5B89\u88C5ftp\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">  yum </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">y install vsftpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5F00\u542F\u3001\u5173\u95ED\u3001\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">  systemctl start vsftpd</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"><span style="color:#A6ACCD;">  systemctl stop vsftpd</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"><span style="color:#A6ACCD;">  systemctl restart vsftpd</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u9ED8\u8BA4\u4E3A21\u7AEF\u53E3\uFF0C\u5982\u679C\u5F00\u542F\u4F1A\u670921\u7AEF\u53E3\u7684\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">  netstat </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">an </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#F78C6C;">21</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u9700\u8981\u5F00\u542Froot\u7528\u6237\u7684ftp\u6743\u9650\u8981\u4FEE\u6539\u4EE5\u4E0B\u4E24\u4E2A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5148\u5B9A\u4F4D\u5230\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">  cd </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">vsftpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5C06ftpusers\u548Cuser_list\u4E2D\u7684root\u7528\u6237\u8FDB\u884C\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u7136\u540E\u91CD\u542Fvsftpd\u670D\u52A1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6700\u540E\u4F7F\u7528Xftp\u5BA2\u6237\u7AEF\u8FDB\u884C\u94FE\u63A5\uFF0C\u53D1\u73B0\u53EF\u4EE5\u767B\u5F55\u67E5\u770B\u6587\u4EF6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// TODO \u540E\u671F\u5C06\u5355\u72EC\u5EFA\u7ACB\u7528\u6237\u4EE5\u53CA\u63A7\u5236\u6307\u5B9A\u6587\u4EF6\u5939\u4E0A\u4F20\u6743\u9650</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></li><li><p>5\u3001\u6587\u4EF6\u5939\u5904\u7406</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u521B\u5EFA\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  touch zx</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">  mkdir zx</span></span>
<span class="line"></span></code></pre></div></li><li><p>6\u3001\u67E5\u770B\u78C1\u76D8\u3001CPU\u3001\u5185\u5B58\u547D\u4EE4</p></li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// \u78C1\u76D8</span></span>
<span class="line"><span style="color:#A6ACCD;"> df </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> hl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// CPU</span></span>
<span class="line"><span style="color:#A6ACCD;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cpuinfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// \u7269\u7406CPU\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cpuinfo </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">physical id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sort </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> uniq </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> wc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// \u6BCF\u4E2A\u7269\u7406CPU\u6838\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cpuinfo </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cpu cores</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> uniq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// \u903B\u8F91 CPU = \u7269\u7406 CPU \u4E2A\u6570 \xD7 \u6BCF\u9897\u6838\u6570,\u5982\u679C\u4E0E\u4E0A\u9762\u8BA1\u7B97\u4E0D\u4E00\u81F4\u7684\u8BDD\uFF0C\u5219\u8868\u793A\u670D\u52A1\u5668\u7684CPU\u652F\u6301\u8D85\u7EBF\u7A0B\u6280\u672F\u3002\u7B80\u5355\u6765\u8BF4\uFF0C\u5B83\u53EF\u4F7F\u5904\u7406\u5668\u4E2D\u7684 1 \u9897\u5185\u6838\u5982 2 \u9897\u5185\u6838\u90A3\u6837\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u53D1\u6325\u4F5C\u7528\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u4F7F\u7528\u7684\u6267\u884C\u8D44\u6E90\u6269\u5927\u4E86\u4E00\u500D\uFF0C\u5927\u5E45\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u6574\u4F53\u6027\u80FD\uFF0C\u6B64\u65F6\u903B\u8F91 CPU = \u7269\u7406 CPU \u4E2A\u6570 \xD7 \u6BCF\u9897\u6838\u6570 \xD7 2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cpuinfo </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">processor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> wc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//\u67E5\u770B\u5185\u5B58\u4FE1\u606F</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 1. \u67E5\u770B\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\u4EE5\u53CA\u8BE6\u7EC6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">meminfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 2. \u67E5\u770B\u5185\u5B58\u603B\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"> grep MemTotal </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">meminfo   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 3. \u67E5\u770B\u7A7A\u95F2\u5185\u5B58\u603B\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"> grep MemFree </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">meminfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//4. \u67E5\u770B\u5185\u5B58\u69FD\u53CA\u5185\u5B58\u6761</span></span>
<span class="line"><span style="color:#A6ACCD;"> sudo dmidecode </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t memory</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//5. \u67E5\u770B\u5185\u5B58\u7684\u63D2\u69FD\u6570,\u5DF2\u7ECF\u4F7F\u7528\u591A\u5C11\u63D2\u69FD.\u6BCF\u6761\u5185\u5B58\u591A\u5927</span></span>
<span class="line"><span style="color:#A6ACCD;"> sudo dmidecode </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t memory </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep Size</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,y,D,i,C){return n(),a("div",null,e)}var f=s(p,[["render",t]]);export{A as __pageData,f as default};
