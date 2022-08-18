(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{202:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"字段类型处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字段类型处理器","aria-hidden":"true"}},[t._v("#")]),t._v(" 字段类型处理器")]),t._v(" "),s("blockquote",[s("p",[t._v("类型处理器，用于 JavaType 与 JdbcType 之间的转换，用于 PreparedStatement 设置参数值和从 ResultSet 或 CallableStatement 中取出一个值，本文讲解 "),s("code",[t._v("mybaits-plus")]),t._v(" 内置常用类型处理器如何通过"),s("code",[t._v("TableField")]),t._v("注解快速注入到 "),s("code",[t._v("mybatis")]),t._v(" 容器中。")])]),t._v(" "),s("p",[t._v("示例工程：")]),t._v(" "),s("p",[t._v("👉 "),s("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-typehandler",target:"_blank",rel:"noopener noreferrer"}},[t._v("mybatis-plus-sample-typehandler"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("JSON 字段类型")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Accessors")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chain "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@TableName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("autoResultMap "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Long id"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * 注意！！ 必须开启映射注解\n     *\n     * @TableName(autoResultMap = true)\n     *\n     * 以下两种类型处理器，二选一 也可以同时存在\n     *\n     * 注意！！选择对应的 JSON 处理器也必须存在对应 JSON 解析依赖包\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@TableField")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("typeHandler "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" JacksonTypeHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// @TableField(typeHandler = FastjsonTypeHandler.class)")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" OtherInfo otherInfo"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("该注解对应了 XML 中写法为")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("result")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("other_info"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("jdbcType")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("VARCHAR"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("otherInfo"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("typeHandler")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.baomidou.mybatisplus.extension.handlers.JacksonTypeHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n")])])])])},[],!1,null,null,null);e.options.__file="typehandler.md";a.default=e.exports}}]);