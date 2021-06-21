!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.plate=t.script=void 0,t.script="helirental",t.plate=9},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this._max=0,this._ids=[]}gen(){var e;return null!==(e=this._ids.pop())&&void 0!==e?e:this._max++}free(e){this._ids.push(e)}clear(){this._max=0,this._ids=[]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0),n(3),n(8)},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.vRPTunnelServer=t.vRPServer=void 0;const o=n(0),c=n(4),s=r(n(7));let i,l;t.vRPServer=i,t.vRPTunnelServer=l;const u=(e,t)=>{"config"===t?console.log(`^1ERROR(gmconfig/${o.script}.json): ${e}`):"none"===t?console.log("^1ERROR: "+e):console.log(`^1ERROR(${t}): ${e}`)};s.default.existsSync("./gmconfig/")||u('cant find folder "gmconfig" in '+process.cwd(),"none"),s.default.existsSync("./gmlocales/")||u('cant find folder "gmlocales" in '+process.cwd(),"none"),s.default.existsSync(`./gmconfig/${o.script}.json`)||u(`cant find file "${o.script}.json" in ${process.cwd()}\\gmconfig`,"none"),s.default.existsSync(`./gmlocales/${o.script}/`)||u(`cant find folder "${o.script}" in ${process.cwd()}\\gmlocales`,"none"),s.default.existsSync(`./gmconfig/${o.script}.json`)||s.default.existsSync(`./gmlocales/${o.script}/`)||u("please read the installation instructions of our scripts","none");const a=JSON.parse(s.default.readFileSync(`./gmconfig/${o.script}.json`).toString());s.default.existsSync(`./gmlocales/${o.script}/${a.lang}.json`)||u(`cant find file "${a.lang}.json" in ${process.cwd()}\\gmlocales\\${o.script}`,"none");const f=JSON.parse(s.default.readFileSync(`./gmlocales/${o.script}/${a.lang}.json`).toString());onNet(`gm_${o.script}:getConfig`,e=>{emitNet(`gm_${o.script}:callbackUtils`,source,a,e.CallbackID),"vrp"===a.framework&&(t.vRPServer=i=c.VrpProxy.getInterface("vRP"),t.vRPTunnelServer=l=c.VrpTunnel.getInterface("vRP"))}),onNet(`gm_${o.script}:getLocales`,e=>{emitNet(`gm_${o.script}:callbackUtils`,source,f,e.CallbackID)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VrpProxy=t.VrpTunnel=t.IdGenerator=void 0,t.IdGenerator=n(1),t.VrpTunnel=n(5),t.VrpProxy=n(6)},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function s(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.bindInterface=t.getInterface=void 0;const o=n(1);t.getInterface=function(e,t=GetCurrentResourceName()){const n=new o.default,r={};return onNet(`${e}:${t}:tunnel_res`,(e,t)=>{const o=r[e];o&&(delete r[e],n.free(e),o(t.length<=1?t[0]:t))}),new Proxy({},{get(o,c){const s=c.toString();return o[s]||(o[s]=function(o){return(c,...s)=>-1===c||o.startsWith("_")?emitNet(e+":tunnel_req",c,o.substring(1),s,t,-1):new Promise(i=>{const l=n.gen();r[l]=i,emitNet(e+":tunnel_req",c,o,s,t,l)})}(s)),o[s]},set(){throw new Error("set isn't supported on Tunnel access")}})},t.bindInterface=function(e,t){onNet(e+":tunnel_req",(n,o,c,s)=>r(this,void 0,void 0,(function*(){const r=global.source,i=t[n];let l;if(i)try{l=yield i(...o)}catch(e){console.error(e)}s>=0&&emitNet(`${e}:${c}:tunnel_res`,r,s,[l])})))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function s(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addInterface=t.getInterface=void 0;const o=n(1);t.getInterface=function(e,t=GetCurrentResourceName()){const n=new o.default,r={};return on(`${e}:${t}:proxy_res`,(e,t)=>{const o=r[e];o&&(delete r[e],n.free(e),o(t.length<=1?t[0]:t))}),new Proxy({},{get(o,c){const s=c.toString();return o[s]||(o[s]=function(o){return(...c)=>{if(o.startsWith("_"))return emit(e+":proxy",o.substring(1),c,t,-1);let s,i=!1;const l=new Promise(l=>{const u=n.gen();r[u]=e=>{i=!0,s=e,l(s)},emit(e+":proxy",o,c,t,u)});return i?s:l}}(s)),o[s]},set(){throw new Error("cannot set values on proxy access interface")}})},t.addInterface=function(e,t){on(e+":proxy",(n,o,c,s)=>r(this,void 0,void 0,(function*(){const r=t[n];let i;if(r)try{i=yield r(...o)}catch(e){console.error(e)}else console.log(`error: proxy call ${e}:${n} not found`);s>=0&&emit(`${e}:${c}:proxy_res`,s,[i])})))}},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);onNet(`gm_${r.script}:tryPayment_esx`,e=>{let t;emit("esx:getSharedObject",e=>t=e);const n=t.GetPlayerFromId(source);let o=!1;n.getMoney()>=e.payment&&(n.removeMoney(e.payment),o=!0),emitNet(`gm_${r.script}:callback`,source,o,e.CallbackID)}),onNet(`gm_${r.script}:forcePayment_esx`,e=>{let t;emit("esx:getSharedObject",e=>t=e);const n=t.GetPlayerFromId(source);let o=0;n.getMoney()>=e.payment?(n.removeMoney(e.payment),o=e.payment):(o=n.getMoney(),n.removeMoney(n.getMoney())),emitNet(`gm_${r.script}:callback`,source,o,e.CallbackID)})}]);