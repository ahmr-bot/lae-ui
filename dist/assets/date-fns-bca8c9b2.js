var Ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}},S=function(t,a,n){var r,i=M[t];return typeof i=="string"?r=i:a===1?r=i.one:r=i.other.replace("{{count}}",String(a)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?r+"内":r+"前":r};const k=S;function f(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}var $={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},D={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},C={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},T={date:f({formats:$,defaultWidth:"full"}),time:f({formats:D,defaultWidth:"full"}),dateTime:f({formats:C,defaultWidth:"full"})};const O=T;function b(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function g(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?g=function(a){return typeof a}:g=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g(e)}function N(e){b(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||g(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function F(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var x={};function z(){return x}function w(e,t){var a,n,r,i,o,u,m,d;b(1,arguments);var v=z(),h=F((a=(n=(r=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&r!==void 0?r:v.weekStartsOn)!==null&&n!==void 0?n:(m=v.locale)===null||m===void 0||(d=m.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=N(e),y=c.getUTCDay(),W=(y<h?7:0)+y-h;return c.setUTCDate(c.getUTCDate()-W),c.setUTCHours(0,0,0,0),c}function V(e,t,a){b(2,arguments);var n=w(e,a),r=w(t,a);return n.getTime()===r.getTime()}function p(e,t,a){var n="eeee p";return V(e,t,a)?n:e.getTime()>t.getTime()?"'下个'"+n:"'上个'"+n}var A={lastWeek:p,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:p,other:"PP p"},_=function(t,a,n,r){var i=A[t];return typeof i=="function"?i(a,n,r):i};const j=_;function l(e){return function(t,a){var n=a!=null&&a.context?String(a.context):"standalone",r;if(n==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a!=null&&a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,m=a!=null&&a.width?String(a.width):e.defaultWidth;r=e.values[m]||e.values[u]}var d=e.argumentCallback?e.argumentCallback(t):t;return r[d]}}var E={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},X={narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},R={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},L={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},q={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},J={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Q=function(t,a){var n=Number(t);switch(a==null?void 0:a.unit){case"date":return n.toString()+"日";case"hour":return n.toString()+"时";case"minute":return n.toString()+"分";case"second":return n.toString()+"秒";default:return"第 "+n.toString()}},Y={ordinalNumber:Q,era:l({values:E,defaultWidth:"wide"}),quarter:l({values:X,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:l({values:R,defaultWidth:"wide"}),day:l({values:L,defaultWidth:"wide"}),dayPeriod:l({values:q,defaultWidth:"wide",formattingValues:J,defaultFormattingWidth:"wide"})};const U=Y;function s(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var o=i[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(u)?I(u,function(h){return h.test(o)}):H(u,function(h){return h.test(o)}),d;d=e.valueCallback?e.valueCallback(m):m,d=a.valueCallback?a.valueCallback(d):d;var v=t.slice(o.length);return{value:d,rest:v}}}function H(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function I(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function P(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var u=t.slice(r.length);return{value:o,rest:u}}}var B=/^(第\s*)?\d+(日|时|分|秒)?/i,G=/\d+/i,K={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},Z={any:[/^(前)/i,/^(公元)/i]},ee={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},te={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},ae={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},ne={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},re={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},ie={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},oe={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},ue={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},de={ordinalNumber:P({matchPattern:B,parsePattern:G,valueCallback:function(t){return parseInt(t,10)}}),era:s({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:Z,defaultParseWidth:"any"}),quarter:s({matchPatterns:ee,defaultMatchWidth:"wide",parsePatterns:te,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:ae,defaultMatchWidth:"wide",parsePatterns:ne,defaultParseWidth:"any"}),day:s({matchPatterns:re,defaultMatchWidth:"wide",parsePatterns:ie,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:oe,defaultMatchWidth:"any",parsePatterns:ue,defaultParseWidth:"any"})};const le=de;var se={code:"zh-CN",formatDistance:k,formatLong:O,formatRelative:j,localize:U,match:le,options:{weekStartsOn:1,firstWeekContainsDate:4}};const He=se;var me={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},he=function(t,a,n){var r,i=me[t];return typeof i=="string"?r=i:a===1?r=i.one:r=i.other.replace("{{count}}",a.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const fe=he;var ce={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ve={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ge={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},be={date:f({formats:ce,defaultWidth:"full"}),time:f({formats:ve,defaultWidth:"full"}),dateTime:f({formats:ge,defaultWidth:"full"})};const ye=be;var we={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},pe=function(t,a,n,r){return we[t]};const Pe=pe;var We={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Me={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Se={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ke={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$e={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},De={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ce=function(t,a){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Te={ordinalNumber:Ce,era:l({values:We,defaultWidth:"wide"}),quarter:l({values:Me,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:l({values:Se,defaultWidth:"wide"}),day:l({values:ke,defaultWidth:"wide"}),dayPeriod:l({values:$e,defaultWidth:"wide",formattingValues:De,defaultFormattingWidth:"wide"})};const Oe=Te;var Ne=/^(\d+)(th|st|nd|rd)?/i,Fe=/\d+/i,xe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ze={any:[/^b/i,/^(a|c)/i]},Ve={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ae={any:[/1/i,/2/i,/3/i,/4/i]},_e={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},je={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ee={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Xe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Re={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Le={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qe={ordinalNumber:P({matchPattern:Ne,parsePattern:Fe,valueCallback:function(t){return parseInt(t,10)}}),era:s({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any"}),quarter:s({matchPatterns:Ve,defaultMatchWidth:"wide",parsePatterns:Ae,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:_e,defaultMatchWidth:"wide",parsePatterns:je,defaultParseWidth:"any"}),day:s({matchPatterns:Ee,defaultMatchWidth:"wide",parsePatterns:Xe,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:Re,defaultMatchWidth:"any",parsePatterns:Le,defaultParseWidth:"any"})};const Je=qe;var Qe={code:"en-US",formatDistance:fe,formatLong:ye,formatRelative:Pe,localize:Oe,match:Je,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ie=Qe;export{Ye as c,Ie as d,Ue as g,He as z};
