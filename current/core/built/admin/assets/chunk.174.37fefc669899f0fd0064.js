"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[174],{38285:(t,e,i)=>{i.d(e,{ro:()=>g,lb:()=>m})
var n=i(33867),a=i(88521),s=i(16140),r=i(30180),o=i(8142),c=i(48206)
function _(){var t=(0,c.x1)()
if(t){var e="internal_error";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),t.setStatus(e)}}var d=i(27448),p=i(21535)
function l(){var t=this.getScope()
if(t){var e=t.getSpan()
if(e)return{"sentry-trace":e.toTraceparent()}}return{}}function u(t,e,i){if(!(0,c.zu)(e))return t.sampled=!1,t
if(void 0!==t.sampled)return t.setMetadata({sampleRate:Number(t.sampled)}),t
let n
return"function"==typeof e.tracesSampler?(n=e.tracesSampler(i),t.setMetadata({sampleRate:Number(n)})):void 0!==i.parentSampled?n=i.parentSampled:(n=e.tracesSampleRate,t.setMetadata({sampleRate:Number(n)})),r=n,((0,s.i2)(r)||"number"!=typeof r&&"boolean"!=typeof r?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`),0):!(r<0||r>1)||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${r}.`),0))?n?(t.sampled=Math.random()<n,t.sampled?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),t)):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] Discarding transaction because "+("function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)
var r}function h(t,e){var i=this.getClient(),n=i&&i.getOptions()||{}
let a=new p.Y(t,this)
return a=u(a,n,{parentSampled:t.parentSampled,transactionContext:t,...e}),a.sampled&&a.initSpanRecorder(n._experiments&&n._experiments.maxSpans),a}function m(t,e,i,n,a,s){var r=t.getClient(),o=r&&r.getOptions()||{}
let c=new d.io(e,t,i,n,a)
return c=u(c,o,{parentSampled:e.parentSampled,transactionContext:e,...s}),c.sampled&&c.initSpanRecorder(o._experiments&&o._experiments.maxSpans),c}function g(){var e;(e=(0,n.cu)()).__SENTRY__&&(e.__SENTRY__.extensions=e.__SENTRY__.extensions||{},e.__SENTRY__.extensions.startTransaction||(e.__SENTRY__.extensions.startTransaction=h),e.__SENTRY__.extensions.traceHeaders||(e.__SENTRY__.extensions.traceHeaders=l)),(0,r.KV)()&&function(){var e=(0,n.cu)()
if(e.__SENTRY__){var i={mongodb:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo),mongoose:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo)({mongoose:!0}),mysql:()=>new((0,r.l$)(t,"./integrations/node/mysql").Mysql),pg:()=>new((0,r.l$)(t,"./integrations/node/postgres").Postgres)},a=Object.keys(i).filter((t=>!!(0,r.$y)(t))).map((t=>{try{return i[t]()}catch(t){return}})).filter((t=>t))
a.length>0&&(e.__SENTRY__.integrations=[...e.__SENTRY__.integrations||[],...a])}}(),(0,o.o)("error",_),(0,o.o)("unhandledrejection",_)}t=i.hmd(t)},27448:(t,e,i)=>{i.d(e,{io:()=>d,mg:()=>c,nT:()=>o})
var n=i(88468),a=i(88521),s=i(20484),r=i(21535),o=1e3,c=3e4
class _ extends s.gB{constructor(t,e,i,n){super(n),this._pushActivity=t,this._popActivity=e,this.transactionSpanId=i}add(t){t.spanId!==this.transactionSpanId&&(t.finish=e=>{t.endTimestamp="number"==typeof e?e:(0,n._I)(),this._popActivity(t.spanId)},void 0===t.endTimestamp&&this._pushActivity(t.spanId)),super.add(t)}}class d extends r.Y{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._beforeFinishCallbacks=[]}constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
super(t,e),this._idleHub=e,this._idleTimeout=i,this._finalTimeout=n,this._onScope=s,d.prototype.__init.call(this),d.prototype.__init2.call(this),d.prototype.__init3.call(this),d.prototype.__init4.call(this),s&&(p(e),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),e.configureScope((t=>t.setSpan(this)))),this._startIdleTimeout(),setTimeout((()=>{this._finished||(this.setStatus("deadline_exceeded"),this.finish())}),this._finalTimeout)}finish(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,n._I)()
if(this._finished=!0,this.activities={},this.spanRecorder){for(var e of(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] finishing IdleTransaction",new Date(1e3*t).toISOString(),this.op),this._beforeFinishCallbacks))e(this,t)
this.spanRecorder.spans=this.spanRecorder.spans.filter((e=>{if(e.spanId===this.spanId)return!0
e.endTimestamp||(e.endTimestamp=t,e.setStatus("cancelled"),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(e,void 0,2)))
var i=e.startTimestamp<t
return i||("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(e,void 0,2)),i})),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] flushing IdleTransaction")}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] No active IdleTransaction")
return this._onScope&&p(this._idleHub),super.finish(t)}registerBeforeFinishCallback(t){this._beforeFinishCallbacks.push(t)}initSpanRecorder(t){this.spanRecorder||(this.spanRecorder=new _((t=>{this._finished||this._pushActivity(t)}),(t=>{this._finished||this._popActivity(t)}),this.spanId,t),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("Starting heartbeat"),this._pingHeartbeat()),this.spanRecorder.add(this)}_cancelIdleTimeout(){this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0)}_startIdleTimeout(t){this._cancelIdleTimeout(),this._idleTimeoutID=setTimeout((()=>{this._finished||0!==Object.keys(this.activities).length||this.finish(t)}),this._idleTimeout)}_pushActivity(t){this._cancelIdleTimeout(),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] pushActivity: ${t}`),this.activities[t]=!0,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(t){if(this.activities[t]&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] popActivity ${t}`),delete this.activities[t],("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){var e=(0,n._I)()+this._idleTimeout/1e3
this._startIdleTimeout(e)}}_beat(){if(!this._finished){var t=Object.keys(this.activities).join("")
t===this._prevHeartbeatString?this._heartbeatCounter+=1:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this.finish()):this._pingHeartbeat()}}_pingHeartbeat(){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout((()=>{this._beat()}),5e3)}}function p(t){var e=t.getScope()
e&&e.getTransaction()&&e.setSpan(void 0)}},43174:(t,e,i)=>{i.r(e),i.d(e,{BROWSER_TRACING_INTEGRATION_ID:()=>st,BrowserTracing:()=>ot,IdleTransaction:()=>G.io,Integrations:()=>n,Span:()=>dt.Dr,SpanStatus:()=>_t,TRACEPARENT_REGEXP:()=>D.K,Transaction:()=>pt.Y,addExtensionMethods:()=>a.ro,defaultRequestInstrumentationOptions:()=>it,extractTraceparentData:()=>D.q,getActiveTransaction:()=>Y.x1,hasTracingEnabled:()=>Y.zu,instrumentOutgoingRequests:()=>nt,spanStatusfromHttpCode:()=>dt.Zd,startIdleTransaction:()=>a.lb,stripUrlQueryAndFragment:()=>o.rt})
var n={}
i.r(n),i.d(n,{Apollo:()=>x,BrowserTracing:()=>ot,Express:()=>d,GraphQL:()=>R,Mongo:()=>y,Mysql:()=>T,Postgres:()=>f,Prisma:()=>S})
var a=i(38285),s=i(2796),r=i(88521),o=i(72702),c=i(14205),_=i(16140)
class d{static __initStatic(){this.id="Express"}__init(){this.name=d.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
d.prototype.__init.call(this),this._router=t.router||t.app,this._methods=(Array.isArray(t.methods)?t.methods:[]).concat("use")}setupOnce(){this._router?(function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((e=>u(t,e)))}(this._router,this._methods),function(t){var e="settings"in t
e&&void 0===t._router&&t.lazyrouter&&t.lazyrouter()
var i=e?t._router:t
if(!i)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Routing instrumentation is currently only supported in Express 4."))
var n=Object.getPrototypeOf(i),a=n.process_params
n.process_params=function(t,e,i,n,r){i._reconstructedRoute||(i._reconstructedRoute="")
const{layerRoutePath:d,isRegex:p,isArray:l,numExtraSegments:u}=function(t){var e=(0,s.x)([t,"access",t=>t.route,"optionalAccess",t=>t.path]),i=(0,_.Kj)(e),n=Array.isArray(e)
if(!e)return{isRegex:i,isArray:n,numExtraSegments:0}
var a=n?Math.max(e.reduce(((t,e)=>t+(0,o.$A)(e.toString())),0)-(0,o.$A)(t.path||""),0):0
return{layerRoutePath:h(n,e),isRegex:i,isArray:n,numExtraSegments:a}}(t)
var m=(d||t.path||"").split("/").filter((t=>t.length>0&&(p||l||!t.includes("*")))).join("/")
if(m&&m.length>0&&(i._reconstructedRoute+=`/${m}${p?"/":""}`),(0,o.$A)(i.originalUrl||"")+u===(0,o.$A)(i._reconstructedRoute)){var g=n.__sentry_transaction
if(g&&"custom"!==g.metadata.source){var f=i._reconstructedRoute||"/"
g.setName(...(0,c.oA)(i,{path:!0,method:!0,customRoute:f}))}}return a.call(this,t,e,i,n,r)}}(this._router)):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("ExpressIntegration is missing an Express instance")}}function p(t,e){var i=t.length
switch(i){case 2:return function(i,n){var a=n.__sentry_transaction
if(a){var s=a.startChild({description:t.name,op:`express.middleware.${e}`})
n.once("finish",(()=>{s.finish()}))}return t.call(this,i,n)}
case 3:return function(i,n,a){var r=n.__sentry_transaction,o=(0,s.x)([r,"optionalAccess",t=>t.startChild,"call",i=>i({description:t.name,op:`express.middleware.${e}`})])
t.call(this,i,n,(function(){(0,s.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
a.call(this,...e)}))}
case 4:return function(i,n,a,r){var o=a.__sentry_transaction,c=(0,s.x)([o,"optionalAccess",t=>t.startChild,"call",i=>i({description:t.name,op:`express.middleware.${e}`})])
t.call(this,i,n,a,(function(){(0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
r.call(this,...e)}))}
default:throw new Error(`Express middleware takes 2-4 arguments. Got: ${i}`)}}function l(t,e){return t.map((t=>"function"==typeof t?p(t,e):Array.isArray(t)?t.map((t=>"function"==typeof t?p(t,e):t)):t))}function u(t,e){var i=t[e]
return t[e]=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return i.call(this,...l(n,e))},t}function h(t,e){return t?e.map((t=>t.toString())).join(","):e&&e.toString()}d.__initStatic()
var m=i(30180),g=i(15834)
class f{static __initStatic(){this.id="Postgres"}__init(){this.name=f.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
f.prototype.__init.call(this),this._usePgNative=!!t.usePgNative}setupOnce(t,e){var i=(0,m.$y)("pg")
if(!i)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to require `pg` package."))
if(this._usePgNative&&!(0,s.x)([i,"access",t=>t.native,"optionalAccess",t=>t.Client]))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to access 'pg-native' bindings."))
const{Client:n}=this._usePgNative?i.native:i;(0,g.hl)(n.prototype,"query",(function(t){return function(i,n,a){var r=e().getScope(),o=(0,s.x)([r,"optionalAccess",t=>t.getSpan,"call",t=>t()]),c=(0,s.x)([o,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof i?i:i.text,op:"db"})])
if("function"==typeof a)return t.call(this,i,n,(function(t,e){(0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),a(t,e)}))
if("function"==typeof n)return t.call(this,i,(function(t,e){(0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),n(t,e)}))
var d=void 0!==n?t.call(this,i,n):t.call(this,i)
return(0,_.J8)(d)?d.then((t=>((0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),d)}}))}}f.__initStatic()
class T{constructor(){T.prototype.__init.call(this)}static __initStatic(){this.id="Mysql"}__init(){this.name=T.id}setupOnce(t,e){var i=(0,m.$y)("mysql/lib/Connection.js")
i?(0,g.hl)(i,"createQuery",(function(t){return function(i,n,a){var r=e().getScope(),o=(0,s.x)([r,"optionalAccess",t=>t.getSpan,"call",t=>t()]),c=(0,s.x)([o,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof i?i:i.sql,op:"db"})])
return"function"==typeof a?t.call(this,i,n,(function(t,e,i){(0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),a(t,e,i)})):"function"==typeof n?t.call(this,i,(function(t,e,i){(0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),n(t,e,i)})):t.call(this,i,n,a)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Mysql Integration was unable to require `mysql` package.")}}T.__initStatic()
var v=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],E={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]}
class y{static __initStatic(){this.id="Mongo"}__init(){this.name=y.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
y.prototype.__init.call(this),this._operations=Array.isArray(t.operations)?t.operations:v,this._describeOperations=!("describeOperations"in t)||t.describeOperations,this._useMongoose=!!t.useMongoose}setupOnce(t,e){var i=this._useMongoose?"mongoose":"mongodb",n=(0,m.$y)(i)
n?this._instrumentOperations(n.Collection,this._operations,e):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error(`Mongo Integration was unable to require \`${i}\` package.`)}_instrumentOperations(t,e,i){e.forEach((e=>this._patchOperation(t,e,i)))}_patchOperation(t,e,i){if(e in t.prototype){var n=this._getSpanContextFromOperationArguments.bind(this);(0,g.hl)(t.prototype,e,(function(t){return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
var c=r[r.length-1],d=i().getScope(),p=(0,s.x)([d,"optionalAccess",t=>t.getSpan,"call",t=>t()])
if("function"!=typeof c||"mapReduce"===e&&2===r.length){var l=(0,s.x)([p,"optionalAccess",t=>t.startChild,"call",t=>t(n(this,e,r))]),u=t.call(this,...r)
return(0,_.J8)(u)?u.then((t=>((0,s.x)([l,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,s.x)([l,"optionalAccess",t=>t.finish,"call",t=>t()]),u)}return l=(0,s.x)([p,"optionalAccess",t=>t.startChild,"call",t=>t(n(this,e,r.slice(0,-1)))]),t.call(this,...r.slice(0,-1),(function(t,e){(0,s.x)([l,"optionalAccess",t=>t.finish,"call",t=>t()]),c(t,e)}))}}))}}_getSpanContextFromOperationArguments(t,e,i){var n={collectionName:t.collectionName,dbName:t.dbName,namespace:t.namespace},a={op:"db",description:e,data:n},s=E[e],r=Array.isArray(this._describeOperations)?this._describeOperations.includes(e):this._describeOperations
if(!s||!r)return a
try{if("mapReduce"===e){const[t,e]=i
n[s[0]]="string"==typeof t?t:t.name||"<anonymous>",n[s[1]]="string"==typeof e?e:e.name||"<anonymous>"}else for(let t=0;t<s.length;t++)n[s[t]]=JSON.stringify(i[t])}catch(t){}return a}}y.__initStatic()
class S{static __initStatic(){this.id="Prisma"}__init(){this.name=S.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var e
S.prototype.__init.call(this),(e=t.client)&&e.$use?this._client=t.client:("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)}setupOnce(t,e){this._client?this._client.$use(((t,i)=>{var n=e().getScope(),a=(0,s.x)([n,"optionalAccess",t=>t.getSpan,"call",t=>t()]),r=t.action,o=t.model,c=(0,s.x)([a,"optionalAccess",t=>t.startChild,"call",t=>t({description:o?`${o} ${r}`:r,op:"db.prisma"})]),d=i(t)
return(0,_.J8)(d)?d.then((t=>((0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,s.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),d)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("PrismaIntegration is missing a Prisma Client Instance")}}S.__initStatic()
class R{constructor(){R.prototype.__init.call(this)}static __initStatic(){this.id="GraphQL"}__init(){this.name=R.id}setupOnce(t,e){var i=(0,m.$y)("graphql/execution/execute.js")
i?(0,g.hl)(i,"execute",(function(t){return function(){var i=e().getScope(),n=(0,s.x)([i,"optionalAccess",t=>t.getSpan,"call",t=>t()]),a=(0,s.x)([n,"optionalAccess",t=>t.startChild,"call",t=>t({description:"execute",op:"db.graphql"})]);(0,s.x)([i,"optionalAccess",t=>t.setSpan,"call",t=>t(a)])
for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c]
var d=t.call(this,...o)
return(0,_.J8)(d)?d.then((t=>((0,s.x)([a,"optionalAccess",t=>t.finish,"call",t=>t()]),(0,s.x)([i,"optionalAccess",t=>t.setSpan,"call",t=>t(n)]),t))):((0,s.x)([a,"optionalAccess",t=>t.finish,"call",t=>t()]),(0,s.x)([i,"optionalAccess",t=>t.setSpan,"call",t=>t(n)]),d)}})):r.kg.error("GraphQL Integration was unable to require graphql/execution package.")}}R.__initStatic()
var b=i(7209)
class x{constructor(){x.prototype.__init.call(this)}static __initStatic(){this.id="Apollo"}__init(){this.name=x.id}setupOnce(t,e){var i=(0,m.$y)("apollo-server-core")
i?(0,g.hl)(i.ApolloServerBase.prototype,"constructSchema",(function(t){return function(){var i=(0,b.lE)(this.config.resolvers)
return this.config.resolvers=i.map((t=>(Object.keys(t).forEach((i=>{Object.keys(t[i]).forEach((n=>{"function"==typeof t[i][n]&&function(t,e,i,n){(0,g.hl)(t[e],i,(function(t){return function(){for(var a=n().getScope(),r=(0,s.x)([a,"optionalAccess",t=>t.getSpan,"call",t=>t()]),o=(0,s.x)([r,"optionalAccess",t=>t.startChild,"call",t=>t({description:`${e}.${i}`,op:"db.graphql.apollo"})]),c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p]
var l=t.call(this,...d)
return(0,_.J8)(l)?l.then((t=>((0,s.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,s.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()]),l)}}))}(t,i,n,e)}))})),t))),t.call(this)}})):r.kg.error("Apollo Integration was unable to require apollo-server-core package.")}}x.__initStatic()
var D=i(75492),N=i(22850),B=i(66627),k=i(68256),G=i(27448),Y=i(48206),U=(0,B.R)(),A=i(4549),I=i(88468),C=(t,e,i)=>{let n
return a=>{e.value>=0&&(a||i)&&(e.delta=e.value-(n||0),(e.delta||void 0===n)&&(n=e.value,t(e)))}},O=(t,e)=>({name:t,value:(0,A.h)(e,(()=>-1)),delta:0,entries:[],id:`v2-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`}),w=(t,e)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return
var i=new PerformanceObserver((t=>t.getEntries().map(e)))
return i.observe({type:t,buffered:!0}),i}}catch(t){}},$=(t,e)=>{var i=n=>{"pagehide"!==n.type&&"hidden"!==(0,B.R)().document.visibilityState||(t(n),e&&(removeEventListener("visibilitychange",i,!0),removeEventListener("pagehide",i,!0)))}
addEventListener("visibilitychange",i,!0),addEventListener("pagehide",i,!0)}
let M=-1
var L=()=>(M<0&&(M="hidden"===(0,B.R)().document.visibilityState?0:1/0,$((t=>{let{timeStamp:e}=t
M=e}),!0)),{get firstHiddenTime(){return M}}),q={}
function P(t){return"number"==typeof t&&isFinite(t)}function H(t,e){let{startTimestamp:i,...n}=e
return i&&t.startTimestamp>i&&(t.startTimestamp=i),t.startChild({startTimestamp:i,...n})}var z=(0,B.R)()
function F(){return z&&z.addEventListener&&z.performance}let j,X,J=0,W={}
function Q(){((t,e)=>{var i=O("CLS",0)
let n,a=0,s=[]
var o=t=>{if(t&&!t.hadRecentInput){var e=s[0],r=s[s.length-1]
a&&0!==s.length&&t.startTime-r.startTime<1e3&&t.startTime-e.startTime<5e3?(a+=t.value,s.push(t)):(a=t.value,s=[t]),a>i.value&&(i.value=a,i.entries=s,n&&n())}},c=w("layout-shift",o)
c&&(n=C((t=>{var e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS"),W.cls={value:t.value,unit:""},X=e)}),i,void 0),$((()=>{c.takeRecords().map(o),n(!0)})))})()}function Z(t){((t,e)=>{var i=L(),n=O("LCP")
let a
var s=t=>{var e=t.startTime
e<i.firstHiddenTime&&(n.value=e,n.entries.push(t)),a&&a()},o=w("largest-contentful-paint",s)
if(o){a=C((t=>{var e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP"),W.lcp={value:t.value,unit:"millisecond"},j=e)}),n,e)
var c=()=>{q[n.id]||(o.takeRecords().map(s),o.disconnect(),q[n.id]=!0,a(!0))};["keydown","click"].forEach((t=>{addEventListener(t,c,{once:!0,capture:!0})})),$(c,!0)}})(0,t)}function K(){((t,e)=>{var i=L(),n=O("FID")
let a
var s=t=>{a&&t.startTime<i.firstHiddenTime&&(n.value=t.processingStart-t.startTime,n.entries.push(t),a(!0))},o=w("first-input",s)
o&&(a=C((t=>{var e=t.entries.pop()
if(e){var i=(0,Y.XL)(I.Z1),n=(0,Y.XL)(e.startTime);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FID"),W.fid={value:t.value,unit:"millisecond"},W["mark.fid"]={value:i+n,unit:"second"}}}),n,void 0),$((()=>{o.takeRecords().map(s),o.disconnect()}),!0))})()}function V(t,e,i,n,a,s){var r=s?e[s]:e[`${i}End`],o=e[`${i}Start`]
o&&r&&H(t,{op:"browser",description:(0,A.h)(a,(()=>i)),startTimestamp:n+(0,Y.XL)(o),endTimestamp:n+(0,Y.XL)(r)})}var tt=i(98902),et=i(8142),it={traceFetch:!0,traceXHR:!0,tracingOrigins:["localhost",/^\//]}
function nt(t){const{traceFetch:e,traceXHR:i,tracingOrigins:n,shouldCreateSpanForRequest:a}={...it,...t}
var s={},r=t=>{if(s[t])return s[t]
var e=n
return s[t]=e.some((e=>(0,tt.zC)(t,e)))&&!(0,tt.zC)(t,"sentry_key"),s[t]}
let o=r
"function"==typeof a&&(o=t=>r(t)&&a(t))
var c={}
e&&(0,et.o)("fetch",(t=>{!function(t,e,i){if((0,Y.zu)()&&t.fetchData&&e(t.fetchData.url))if(t.endTimestamp){var n=t.fetchData.__span
if(!n)return;(s=i[n])&&(t.response?s.setHttpStatus(t.response.status):t.error&&s.setStatus("internal_error"),s.finish(),delete i[n])}else{var a=(0,Y.x1)()
if(a){var s=a.startChild({data:{...t.fetchData,type:"fetch"},description:`${t.fetchData.method} ${t.fetchData.url}`,op:"http.client"})
t.fetchData.__span=s.spanId,i[s.spanId]=s
var r=t.args[0]
t.args[1]=t.args[1]||{}
var o=t.args[1]
o.headers=function(t,e,i,n){var a=(0,N.IQ)(e),s=i.toTraceparent(),r="undefined"!=typeof Request&&(0,_.V9)(t,Request)?t.headers:n.headers
if(r){if("undefined"!=typeof Headers&&(0,_.V9)(r,Headers))return(o=new Headers(r)).append("sentry-trace",s),a&&o.append(N.bU,a),o
if(Array.isArray(r)){var o=[...r,["sentry-trace",s]]
return a&&o.push([N.bU,a]),o}var c="baggage"in r?r.baggage:void 0,d=[]
return Array.isArray(c)?d.push(...c):c&&d.push(c),a&&d.push(a),{...r,"sentry-trace":s,baggage:d.length>0?d.join(","):void 0}}return{"sentry-trace":s,baggage:a}}(r,a.getDynamicSamplingContext(),s,o),a.metadata.propagations+=1}}}(t,o,c)})),i&&(0,et.o)("xhr",(t=>{!function(t,e,i){if(!(!(0,Y.zu)()||t.xhr&&t.xhr.__sentry_own_request__)&&t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url)){var n=t.xhr.__sentry_xhr__
if(t.endTimestamp){var a=t.xhr.__sentry_xhr_span_id__
if(!a)return;(r=i[a])&&(r.setHttpStatus(n.status_code),r.finish(),delete i[a])}else{var s=(0,Y.x1)()
if(s){var r=s.startChild({data:{...n.data,type:"xhr",method:n.method,url:n.url},description:`${n.method} ${n.url}`,op:"http.client"})
if(t.xhr.__sentry_xhr_span_id__=r.spanId,i[t.xhr.__sentry_xhr_span_id__]=r,t.xhr.setRequestHeader)try{t.xhr.setRequestHeader("sentry-trace",r.toTraceparent())
var o=s.getDynamicSamplingContext(),c=(0,N.IQ)(o)
c&&t.xhr.setRequestHeader(N.bU,c),s.metadata.propagations+=1}catch(t){}}}}}(t,o,c)}))}var at=(0,B.R)(),st="BrowserTracing",rt={idleTimeout:G.nT,finalTimeout:G.mg,markBackgroundTransactions:!0,routingInstrumentation:function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
if(!at||!at.location)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Could not initialize routing instrumentation due to invalid location"))
let n,a=at.location.href
e&&(n=t({name:at.location.pathname,op:"pageload",metadata:{source:"url"}})),i&&(0,et.o)("history",(e=>{let{to:i,from:s}=e
void 0===s&&a&&-1!==a.indexOf(i)?a=void 0:s!==i&&(a=void 0,n&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Finishing current transaction with op: ${n.op}`),n.finish()),n=t({name:at.location.pathname,op:"navigation",metadata:{source:"url"}}))}))},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,_experiments:{enableLongTask:!0},...it}
class ot{__init(){this.name=st}constructor(t){ot.prototype.__init.call(this)
let e=it.tracingOrigins
t&&(t.tracingOrigins&&Array.isArray(t.tracingOrigins)?e=t.tracingOrigins:("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&(this._emitOptionsWarning=!0)),this.options={...rt,...t,tracingOrigins:e}
const{_metricOptions:i}=this.options
!function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var e=F()
e&&I.Z1&&(e.mark&&z.performance.mark("sentry-tracing-init"),Q(),Z(t),K())}(i&&i._reportAllChanges),(0,s.x)([this,"access",t=>t.options,"access",t=>t._experiments,"optionalAccess",t=>t.enableLongTask])&&w("longtask",(t=>{var e=(0,Y.x1)()
if(e){var i=(0,Y.XL)(I.Z1+t.startTime),n=(0,Y.XL)(t.duration)
e.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:i,endTimestamp:i+n})}}))}setupOnce(t,e){this._getCurrentHub=e,this._emitOptionsWarning&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] We added a reasonable default for you: ${it.tracingOrigins}`))
const{routingInstrumentation:i,startTransactionOnLocationChange:n,startTransactionOnPageLoad:a,markBackgroundTransactions:s,traceFetch:o,traceXHR:c,tracingOrigins:_,shouldCreateSpanForRequest:d}=this.options
i((t=>this._createRouteTransaction(t)),a,n),s&&(U&&U.document?U.document.addEventListener("visibilitychange",(()=>{var t=(0,Y.x1)()
U.document.hidden&&t&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Transaction: cancelled -> since tab moved to the background, op: ${t.op}`),t.status||t.setStatus("cancelled"),t.setTag("visibilitychange","document.hidden"),t.finish())})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),nt({traceFetch:o,traceXHR:c,tracingOrigins:_,shouldCreateSpanForRequest:d})}_createRouteTransaction(t){if(!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`))
const{beforeNavigate:e,idleTimeout:i,finalTimeout:n}=this.options
var s="pageload"===t.op,o=s?ct("sentry-trace"):null,c=s?ct("baggage"):null,_=o?(0,D.q)(o):void 0,d=c?(0,N.EN)(c):void 0,p={...t,..._,metadata:{...t.metadata,dynamicSamplingContext:_&&!d?{}:d},trimEnd:!0},l="function"==typeof e?e(p):p,u=void 0===l?{...p,sampled:!1}:l
u.metadata=u.name!==p.name?{...u.metadata,source:"custom"}:u.metadata,!1===u.sampled&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Will not send ${u.op} transaction because of beforeNavigate.`),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Starting ${u.op} transaction on scope`)
var h=this._getCurrentHub()
const{location:m}=(0,B.R)()
var g=(0,a.lb)(h,u,i,n,!0,{location:m})
return g.registerBeforeFinishCallback((t=>{(function(t){var e=F()
if(!e||!z.performance.getEntries||!I.Z1)return;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Tracing] Adding & adjusting spans using Performance API")
var i=(0,Y.XL)(I.Z1),n=e.getEntries()
let a,s
if(n.slice(J).forEach((e=>{var n=(0,Y.XL)(e.startTime),o=(0,Y.XL)(e.duration)
if(!("navigation"===t.op&&i+n<t.startTimestamp))switch(e.entryType){case"navigation":!function(t,e,i){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((n=>{V(t,e,n,i)})),V(t,e,"secureConnection",i,"TLS/SSL","connectEnd"),V(t,e,"fetch",i,"cache","domainLookupStart"),V(t,e,"domainLookup",i,"DNS"),function(t,e,i){H(t,{op:"browser",description:"request",startTimestamp:i+(0,Y.XL)(e.requestStart),endTimestamp:i+(0,Y.XL)(e.responseEnd)}),H(t,{op:"browser",description:"response",startTimestamp:i+(0,Y.XL)(e.responseStart),endTimestamp:i+(0,Y.XL)(e.responseEnd)})}(t,e,i)}(t,e,i),a=i+(0,Y.XL)(e.responseStart),s=i+(0,Y.XL)(e.requestStart)
break
case"mark":case"paint":case"measure":!function(t,e,i,n,a){var s=a+i,r=s+n
H(t,{description:e.name,endTimestamp:r,op:e.entryType,startTimestamp:s})}(t,e,n,o,i)
var c=L(),_=e.startTime<c.firstHiddenTime
"first-paint"===e.name&&_&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FP"),W.fp={value:e.startTime,unit:"millisecond"}),"first-contentful-paint"===e.name&&_&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FCP"),W.fcp={value:e.startTime,unit:"millisecond"})
break
case"resource":var d=e.name.replace(z.location.origin,"")
!function(t,e,i,n,a,s){if("xmlhttprequest"!==e.initiatorType&&"fetch"!==e.initiatorType){var r={}
"transferSize"in e&&(r["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(r["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(r["Decoded Body Size"]=e.decodedBodySize)
var o=s+n
H(t,{description:i,endTimestamp:o+a,op:e.initiatorType?`resource.${e.initiatorType}`:"resource",startTimestamp:o,data:r})}}(t,e,d,n,o,i)}})),J=Math.max(n.length-1,0),function(t){var e=z.navigator
if(e){var i=e.connection
i&&(i.effectiveType&&t.setTag("effectiveConnectionType",i.effectiveType),i.type&&t.setTag("connectionType",i.type),P(i.rtt)&&(W["connection.rtt"]={value:i.rtt,unit:"millisecond"})),P(e.deviceMemory)&&t.setTag("deviceMemory",`${e.deviceMemory} GB`),P(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}}(t),"pageload"===t.op){"number"==typeof a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding TTFB"),W.ttfb={value:1e3*(a-t.startTimestamp),unit:"millisecond"},"number"==typeof s&&s<=a&&(W["ttfb.requestTime"]={value:1e3*(a-s),unit:"millisecond"})),["fcp","fp","lcp"].forEach((e=>{if(W[e]&&!(i>=t.startTimestamp)){var n=W[e].value,a=i+(0,Y.XL)(n),s=Math.abs(1e3*(a-t.startTimestamp)),o=s-n;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Measurements] Normalized ${e} from ${n} to ${s} (${o})`),W[e].value=s}}))
var o=W["mark.fid"]
o&&W.fid&&(H(t,{description:"first input delay",endTimestamp:o.value+(0,Y.XL)(W.fid.value),op:"web.vitals",startTimestamp:o.value}),delete W["mark.fid"]),"fcp"in W||delete W.cls,Object.keys(W).forEach((e=>{t.setMeasurement(e,W[e].value,W[e].unit)})),function(t){j&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP Data"),j.element&&t.setTag("lcp.element",(0,k.Rt)(j.element)),j.id&&t.setTag("lcp.id",j.id),j.url&&t.setTag("lcp.url",j.url.trim().slice(0,200)),t.setTag("lcp.size",j.size)),X&&X.sources&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS Data"),X.sources.forEach(((e,i)=>t.setTag(`cls.source.${i+1}`,(0,k.Rt)(e.node)))))}(t)}j=void 0,X=void 0,W={}})(t),t.setTag("sentry_reportAllChanges",Boolean(this.options._metricOptions&&this.options._metricOptions._reportAllChanges))})),g}}function ct(t){var e=(0,k.qT)(`meta[name=${t}]`)
return e?e.getAttribute("content"):null}var _t,dt=i(20484)
!function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(_t||(_t={}))
var pt=i(21535);("undefined"==typeof __SENTRY_TRACING__||__SENTRY_TRACING__)&&(0,a.ro)()},20484:(t,e,i)=>{i.d(e,{Dr:()=>_,Zd:()=>d,gB:()=>c})
var n=i(4549),a=i(7209),s=i(88468),r=i(88521),o=i(15834)
class c{__init(){this.spans=[]}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
c.prototype.__init.call(this),this._maxlen=t}add(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)}}class _{__init2(){this.traceId=(0,a.DM)()}__init3(){this.spanId=(0,a.DM)().substring(16)}__init4(){this.startTimestamp=(0,s._I)()}__init5(){this.tags={}}__init6(){this.data={}}constructor(t){if(_.prototype.__init2.call(this),_.prototype.__init3.call(this),_.prototype.__init4.call(this),_.prototype.__init5.call(this),_.prototype.__init6.call(this),!t)return this
t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp)}startChild(t){var e=new _({...t,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId})
if(e.spanRecorder=this.spanRecorder,e.spanRecorder&&e.spanRecorder.add(e),e.transaction=this.transaction,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&e.transaction){var i=`[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`
e.transaction.metadata.spanMetadata[e.spanId]={logMessage:i},r.kg.log(i)}return e}setTag(t,e){return this.tags={...this.tags,[t]:e},this}setData(t,e){return this.data={...this.data,[t]:e},this}setStatus(t){return this.status=t,this}setHttpStatus(t){this.setTag("http.status_code",String(t))
var e=d(t)
return"unknown_error"!==e&&this.setStatus(e),this}isSuccess(){return"ok"===this.status}finish(t){if(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:t}=this.transaction.metadata.spanMetadata[this.spanId]
t&&r.kg.log(t.replace("Starting","Finishing"))}this.endTimestamp="number"==typeof t?t:(0,s._I)()}toTraceparent(){let t=""
return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${t}`}toContext(){return(0,o.Jr)({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(t){return this.data=(0,n.h)(t.data,(()=>({}))),this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=(0,n.h)(t.spanId,(()=>this.spanId)),this.startTimestamp=(0,n.h)(t.startTimestamp,(()=>this.startTimestamp)),this.status=t.status,this.tags=(0,n.h)(t.tags,(()=>({}))),this.traceId=(0,n.h)(t.traceId,(()=>this.traceId)),this}getTraceContext(){return(0,o.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return(0,o.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function d(t){if(t<400&&t>=100)return"ok"
if(t>=400&&t<500)switch(t){case 401:return"unauthenticated"
case 403:return"permission_denied"
case 404:return"not_found"
case 409:return"already_exists"
case 413:return"failed_precondition"
case 429:return"resource_exhausted"
default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline_exceeded"
default:return"internal_error"}return"unknown_error"}},21535:(t,e,i)=>{i.d(e,{Y:()=>_})
var n=i(4549),a=i(33867),s=i(88468),r=i(88521),o=i(15834),c=i(20484)
class _ extends c.Dr{__init(){this._measurements={}}__init2(){this._frozenDynamicSamplingContext=void 0}constructor(t,e){super(t),_.prototype.__init.call(this),_.prototype.__init2.call(this),this._hub=e||(0,a.Gd)(),this._name=t.name||"",this.metadata={source:"custom",...t.metadata,spanMetadata:{},changes:[],propagations:0},this._trimEnd=t.trimEnd,this.transaction=this
var i=this.metadata.dynamicSamplingContext
i&&(this._frozenDynamicSamplingContext={...i})}get name(){return this._name}set name(t){this.setName(t)}setName(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom"
t===this.name&&e===this.metadata.source||this.metadata.changes.push({source:this.metadata.source,timestamp:(0,s.ph)(),propagations:this.metadata.propagations}),this._name=t,this.metadata.source=e}initSpanRecorder(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
this.spanRecorder||(this.spanRecorder=new c.gB(t)),this.spanRecorder.add(this)}setMeasurement(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
this._measurements[t]={value:e,unit:i}}setMetadata(t){this.metadata={...this.metadata,...t}}finish(t){if(void 0===this.endTimestamp){if(this.name||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(t),!0===this.sampled){var e=this.spanRecorder?this.spanRecorder.spans.filter((t=>t!==this&&t.endTimestamp)):[]
this._trimEnd&&e.length>0&&(this.endTimestamp=e.reduce(((t,e)=>t.endTimestamp&&e.endTimestamp?t.endTimestamp>e.endTimestamp?t:e:t)).endTimestamp)
var i=this.metadata,n={contexts:{trace:this.getTraceContext()},spans:e,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...i,dynamicSamplingContext:this.getDynamicSamplingContext()},...i.source&&{transaction_info:{source:i.source,changes:i.changes,propagations:i.propagations}}}
return Object.keys(this._measurements).length>0&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),n.measurements=this._measurements),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(n)}("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
var a=this._hub.getClient()
a&&a.recordDroppedEvent("sample_rate","transaction")}}toContext(){var t=super.toContext()
return(0,o.Jr)({...t,name:this.name,trimEnd:this._trimEnd})}updateWithContext(t){return super.updateWithContext(t),this.name=(0,n.h)(t.name,(()=>"")),this._trimEnd=t.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext
var t=this._hub||(0,a.Gd)(),e=t&&t.getClient()
if(!e)return{}
const{environment:i,release:n}=e.getOptions()||{},{publicKey:s}=e.getDsn()||{}
var r=this.metadata.sampleRate,c=void 0!==r?r.toString():void 0,_=t.getScope()
const{segment:d}=_&&_.getUser()||{}
var p=this.metadata.source,l=p&&"url"!==p?this.name:void 0
return(0,o.Jr)({environment:i,release:n,transaction:l,user_segment:d,public_key:s,trace_id:this.traceId,sample_rate:c})}}},48206:(t,e,i)=>{i.d(e,{XL:()=>r,x1:()=>s,zu:()=>a})
var n=i(33867)
function a(t){var e=(0,n.Gd)().getClient(),i=t||e&&e.getOptions()
return!!i&&("tracesSampleRate"in i||"tracesSampler"in i)}function s(t){var e=(t||(0,n.Gd)()).getScope()
return e&&e.getTransaction()}function r(t){return t/1e3}},4549:(t,e,i)=>{function n(t,e){return null!=t?t:e()}i.d(e,{h:()=>n})}}])

//# sourceMappingURL=chunk.174.37fefc669899f0fd0064.map