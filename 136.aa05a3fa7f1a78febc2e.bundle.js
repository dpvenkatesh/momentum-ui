(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{774:function(module,exports){module.exports=function properties(hljs){var WS0="[ \\t\\f]*",DELIM="([ \\t\\f]*[:=][ \\t\\f]*|[ \\t\\f]+)",KEY_OTHER="([^\\\\:= \\t\\f\\n]|\\\\.)+",DELIM_AND_VALUE={end:DELIM,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,contains:[hljs.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+[ \\t\\f]*[:=][ \\t\\f]*",relevance:1},{begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+[ \\t\\f]+",relevance:0}],contains:[{className:"attr",begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",endsParent:!0,relevance:0}],starts:DELIM_AND_VALUE},{begin:KEY_OTHER+DELIM,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:KEY_OTHER,endsParent:!0,relevance:0}],starts:DELIM_AND_VALUE},{className:"attr",relevance:0,begin:KEY_OTHER+WS0+"$"}]}}}}]);
//# sourceMappingURL=136.aa05a3fa7f1a78febc2e.bundle.js.map