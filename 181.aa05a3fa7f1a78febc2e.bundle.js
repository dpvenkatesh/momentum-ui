(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{819:function(module,exports){function source(re){return re?"string"==typeof re?re:re.source:null}function concat(...args){return args.map(x=>source(x)).join("")}function either(...args){return"("+args.map(x=>source(x)).join("|")+")"}module.exports=function vbscript(hljs){const BUILT_IN_FUNCTIONS="lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" "),BUILT_IN_CALL={begin:concat(either(...BUILT_IN_FUNCTIONS),"\\s*\\("),relevance:0,keywords:{built_in:BUILT_IN_FUNCTIONS.join(" ")}};return{name:"VBScript",aliases:["vbs"],case_insensitive:!0,keywords:{keyword:"call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",built_in:["server","response","request","scriptengine","scriptenginebuildversion","scriptengineminorversion","scriptenginemajorversion"].join(" "),literal:"true false null nothing empty"},illegal:"//",contains:[BUILT_IN_CALL,hljs.inherit(hljs.QUOTE_STRING_MODE,{contains:[{begin:'""'}]}),hljs.COMMENT(/'/,/$/,{relevance:0}),hljs.C_NUMBER_MODE]}}}}]);
//# sourceMappingURL=181.aa05a3fa7f1a78febc2e.bundle.js.map