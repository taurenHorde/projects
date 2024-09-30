"use strict";(self.webpackChunknewpf=self.webpackChunknewpf||[]).push([[2331],{3154:e=>{function t(e){!function(e){var t=/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))/.source,a=/\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,n={pattern:RegExp(t+"[bx]"),alias:"number"},i={pattern:/&[a-z_]\w*/i},s={pattern:/((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMEXIST|SYMGLOBL|SYMLOCAL|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,lookbehind:!0,alias:"keyword"},r={pattern:/(^|\s)(?:proc\s+\w+|data(?!=)|quit|run)\b/i,alias:"keyword",lookbehind:!0},o=[/\/\*[\s\S]*?\*\//,{pattern:/(^[ \t]*|;\s*)\*[^;]*;/m,lookbehind:!0}],l={pattern:RegExp(t),greedy:!0},c=/[$%@.(){}\[\];,\\]/,u={pattern:/%?\b\w+(?=\()/,alias:"keyword"},d={function:u,"arg-value":{pattern:/(=\s*)[A-Z\.]+/i,lookbehind:!0},operator:/=/,"macro-variable":i,arg:{pattern:/[A-Z]+/i,alias:"keyword"},number:a,"numeric-constant":n,punctuation:c,string:l},p={pattern:/\b(?:format|put)\b=?[\w'$.]+/i,inside:{keyword:/^(?:format|put)(?==)/i,equals:/=/,format:{pattern:/(?:\w|\$\d)+\.\d?/,alias:"number"}}},m={pattern:/\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,inside:{keyword:/^(?:format|put)/i,format:{pattern:/[\w$]+\.\d?/,alias:"number"}}},b={pattern:/((?:^|\s)=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,lookbehind:!0,alias:"keyword"},g={pattern:/(^|\s)(?:submit(?:\s+(?:load|norun|parseonly))?|endsubmit)\b/i,lookbehind:!0,alias:"keyword"},k=/aStore|accessControl|aggregation|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|cdm|clustering|conditionalRandomFields|configuration|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deduplication|deepLearn|deepNeural|deepRnn|ds2|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gVarCluster|gam|gleam|graphSemiSupLearn|hiddenMarkovModel|hyperGroup|ica|image|iml|kernalPca|langModel|ldaTopic|loadStreams|mbc|mixed|mlTools|modelPublishing|network|neuralNet|nmf|nonParametricBayes|nonlinear|optNetwork|optimization|panel|pca|percentile|phreg|pls|qkb|qlim|quantreg|recommend|regression|reinforcementLearn|robustPca|ruleMining|sampling|sandwich|sccasl|search(?:Analytics)?|sentimentAnalysis|sequence|session(?:Prop)?|severity|simSystem|simple|smartData|sparkEmbeddedProcess|sparseML|spatialreg|spc|stabilityMonitoring|svDataDescription|svm|table|text(?:Filters|Frequency|Mining|Parse|Rule(?:Develop|Score)|Topic|Util)|timeData|transpose|tsInfo|tsReconcile|uniTimeSeries|varReduce/.source,w={pattern:RegExp(/(^|\s)(?:action\s+)?(?:<act>)\.[a-z]+\b[^;]+/.source.replace(/<act>/g,(function(){return k})),"i"),lookbehind:!0,inside:{keyword:RegExp(/(?:<act>)\.[a-z]+\b/.source.replace(/<act>/g,(function(){return k})),"i"),action:{pattern:/(?:action)/i,alias:"keyword"},comment:o,function:u,"arg-value":d["arg-value"],operator:d.operator,argument:d.arg,number:a,"numeric-constant":n,punctuation:c,string:l}},y={pattern:/((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?==)|define|delete|describe|document|do\s+over|do|dol|drop|dul|else|end(?:comp|source)?|entryTitle|eval(?:uate)?|exec(?:ute)?|exit|file(?:name)?|fill(?:attrs)?|flist|fnc|function(?:list)?|global|goto|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|_?null_|name|noobs|nowd|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|print|put|raise|ranexp|rannor|rbreak|retain|return|select|session|sessref|set|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|y2axisopts|yaxisopts)\b/i,lookbehind:!0};e.languages.sas={datalines:{pattern:/^([ \t]*)(?:cards|(?:data)?lines);[\s\S]+?^[ \t]*;/im,lookbehind:!0,alias:"string",inside:{keyword:{pattern:/^(?:cards|(?:data)?lines)/i},punctuation:/;/}},"proc-sql":{pattern:/(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{sql:{pattern:RegExp(/^[ \t]*(?:select|alter\s+table|(?:create|describe|drop)\s+(?:index|table(?:\s+constraints)?|view)|create\s+unique\s+index|insert\s+into|update)(?:<str>|[^;"'])+;/.source.replace(/<str>/g,(function(){return t})),"im"),alias:"language-sql",inside:e.languages.sql},"global-statements":b,"sql-statements":{pattern:/(^|\s)(?:disconnect\s+from|begin|commit|exec(?:ute)?|reset|rollback|validate)\b/i,lookbehind:!0,alias:"keyword"},number:a,"numeric-constant":n,punctuation:c,string:l}},"proc-groovy":{pattern:/(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:o,groovy:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,(function(){return t})),"im"),lookbehind:!0,alias:"language-groovy",inside:e.languages.groovy},keyword:y,"submit-statement":g,"global-statements":b,number:a,"numeric-constant":n,punctuation:c,string:l}},"proc-lua":{pattern:/(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:o,lua:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,(function(){return t})),"im"),lookbehind:!0,alias:"language-lua",inside:e.languages.lua},keyword:y,"submit-statement":g,"global-statements":b,number:a,"numeric-constant":n,punctuation:c,string:l}},"proc-cas":{pattern:/(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:o,"statement-var":{pattern:/((?:^|\s)=?)saveresult\s[^;]+/im,lookbehind:!0,inside:{statement:{pattern:/^saveresult\s+\S+/i,inside:{keyword:/^(?:saveresult)/i}},rest:d}},"cas-actions":w,statement:{pattern:/((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,lookbehind:!0,inside:d},step:r,keyword:y,function:u,format:p,altformat:m,"global-statements":b,number:a,"numeric-constant":n,punctuation:c,string:l}},"proc-args":{pattern:RegExp(/(^proc\s+\w+\s+)(?!\s)(?:[^;"']|<str>)+;/.source.replace(/<str>/g,(function(){return t})),"im"),lookbehind:!0,inside:d},"macro-keyword":s,"macro-variable":i,"macro-string-functions":{pattern:/((?:^|\s|=))%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)\(.*?(?:[^%]\))/i,lookbehind:!0,inside:{function:{pattern:/%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)/i,alias:"keyword"},"macro-keyword":s,"macro-variable":i,"escaped-char":{pattern:/%['"()<>=\xac^~;,#]/},punctuation:c}},"macro-declaration":{pattern:/^%macro[^;]+(?=;)/im,inside:{keyword:/%macro/i}},"macro-end":{pattern:/^%mend[^;]+(?=;)/im,inside:{keyword:/%mend/i}},macro:{pattern:/%_\w+(?=\()/,alias:"keyword"},input:{pattern:/\binput\s[-\w\s/*.$&]+;/i,inside:{input:{alias:"keyword",pattern:/^input/i},comment:o,number:a,"numeric-constant":n}},"options-args":{pattern:/(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,lookbehind:!0,inside:d},"cas-actions":w,comment:o,function:u,format:p,altformat:m,"numeric-constant":n,datetime:{pattern:RegExp(t+"(?:dt?|t)"),alias:"number"},string:l,step:r,keyword:y,"operator-keyword":{pattern:/\b(?:eq|ge|gt|in|le|lt|ne|not)\b/i,alias:"operator"},number:a,operator:/\*\*?|\|\|?|!!?|\xa6\xa6?|<[>=]?|>[<=]?|[-+\/=&]|[~\xac^]=?/,punctuation:c}}(e)}e.exports=t,t.displayName="sas",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_sas.8010a11b.chunk.js.map