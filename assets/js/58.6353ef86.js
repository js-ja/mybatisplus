(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{250:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"乐观锁插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 乐观锁插件")]),t._v(" "),a("h2",{attrs:{id:"主要适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要适用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 主要适用场景")]),t._v(" "),a("p",[t._v("意图：")]),t._v(" "),a("p",[t._v("当要更新一条记录的时候，希望这条记录没有被别人更新")]),t._v(" "),a("p",[t._v("乐观锁实现方式：")]),t._v(" "),a("ul",[a("li",[t._v("取出记录时，获取当前version")]),t._v(" "),a("li",[t._v("更新时，带上这个version")]),t._v(" "),a("li",[t._v("执行更新时， set version = newVersion where version = oldVersion")]),t._v(" "),a("li",[t._v("如果version不对，就更新失败")])]),t._v(" "),a("p",[a("strong",[t._v("乐观锁配置需要2步 记得两步")])]),t._v(" "),a("h2",{attrs:{id:"_1-插件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-插件配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.插件配置")]),t._v(" "),a("p",[t._v("spring xml:")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.baomidou.mybatisplus.extension.plugins.OptimisticLockerInterceptor"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("spring boot:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" OptimisticLockerInterceptor "),a("span",{attrs:{class:"token function"}},[t._v("optimisticLockerInterceptor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("OptimisticLockerInterceptor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-注解实体字段-version-必须要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注解实体字段-version-必须要","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.注解实体字段 "),a("code",[t._v("@Version")]),t._v(" 必须要!")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Version")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Integer version"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("特别说明:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("支持的数据类型只有:int,Integer,long,Long,Date,Timestamp,LocalDateTime")])]),t._v(" "),a("li",[t._v("整数类型下 "),a("code",[t._v("newVersion = oldVersion + 1")])]),t._v(" "),a("li",[a("code",[t._v("newVersion")]),t._v(" 会回写到 "),a("code",[t._v("entity")]),t._v(" 中")]),t._v(" "),a("li",[t._v("仅支持 "),a("code",[t._v("updateById(id)")]),t._v(" 与 "),a("code",[t._v("update(entity, wrapper)")]),t._v(" 方法")]),t._v(" "),a("li",[a("strong",[t._v("在 "),a("code",[t._v("update(entity, wrapper)")]),t._v(" 方法下, "),a("code",[t._v("wrapper")]),t._v(" 不能复用!!!")])])])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("示例Java代码（参考"),a("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-optimistic-locker",target:"_blank",rel:"noopener noreferrer"}},[t._v("test case"),a("OutboundLink")],1),t._v("代码）")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" version "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nUser u "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("User")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setId")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setVersion")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("version"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setXXX")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userService"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Update successfully"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Update failed due to modified by others"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("示例SQL原理")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("update")]),t._v(" tbl_user "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'update'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("version "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" version "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])])},[],!1,null,null,null);e.options.__file="optimistic-locker-plugin.md";s.default=e.exports}}]);