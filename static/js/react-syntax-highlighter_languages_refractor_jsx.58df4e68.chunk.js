"use strict";(self.webpackChunknewpf=self.webpackChunknewpf||[]).push([[1695],{5894:e=>{function t(e){!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function g(e,t){return e=e.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(e,t)}s=g(s).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=g(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:g(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:g(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var o=function(e){return e?"string"===typeof e?e:"string"===typeof e.content?e.content:e.content.map(o).join(""):""},c=function(t){for(var n=[],a=0;a<t.length;a++){var s=t[a],g=!1;if("string"!==typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===o(s.content[0].content[1])&&n.pop():"/>"===s.content[s.content.length-1].content||n.push({tagName:o(s.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===s.type&&"{"===s.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===s.type&&"}"===s.content?n[n.length-1].openedBraces--:g=!0),(g||"string"===typeof s)&&n.length>0&&0===n[n.length-1].openedBraces){var r=o(s);a<t.length-1&&("string"===typeof t[a+1]||"plain-text"===t[a+1].type)&&(r+=o(t[a+1]),t.splice(a+1,1)),a>0&&("string"===typeof t[a-1]||"plain-text"===t[a-1].type)&&(r=o(t[a-1])+r,t.splice(a-1,1),a--),t[a]=new e.Token("plain-text",r,null,r)}s.content&&"string"!==typeof s.content&&c(s.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||c(e.tokens)}))}(e)}e.exports=t,t.displayName="jsx",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsx.58df4e68.chunk.js.map