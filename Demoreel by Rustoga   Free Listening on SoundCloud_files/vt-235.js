!function(a){var b,c,d,e,f,g,h;f={parseUri:function(a){for(var b={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},c=b.parser[b.strictMode?"strict":"loose"].exec(a),d={},e=14;e--;)d[b.key[e]]=c[e]||"";return d[b.q.name]={},d[b.key[12]].replace(b.q.parser,function(a,c,e){c&&(d[b.q.name][c]=e)}),d},runop:function(a){return 0==a.o.indexOf("!")?!d[a.o.substring(1)].f(a):d[a.o].f(a)},andorLOP:function(a,b){for(var d,e=0;e<a.length;e++){var f=a[e],g="o"in f?this.runop(f):c.rtl(f);d=void 0===d?g:"AND"==b?d&&g:d||g}return void 0===d?!1:d},tcexec:function(a,c){var d=a.match(/{{\s*[\w\.]+\s*}}/g);if(d)for(var e=d.length;e--;){var f=d[e].match(/[\w\.]+/)[0],g="";"object"==typeof c[f]?(g=b[c[f].ds].f(c,f),"factory"in c[f]&&(g=window[c[f].factory](g))):g=c[f],g=void 0==g?"":g,a=a.split(d[e]).join(g)}return a},tc:function(a,b){if(this.isArray(a)){for(var c=[],d=0;d<a.length;d++)c.push(this.tcexec(a[d],b));return c}return this.tcexec(a,b)},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)}},b={URI:{f:function(a,b,c){var d=b;if("p"in a){if(1!=c&&(d=f.parseUri(b)),"queryKey"in d)for(var e in d.queryKey)e.toLowerCase()in d.queryKey||"ck"in a&&1==a.ck||(d.queryKey[e.toLowerCase()]=d.queryKey[e]);for(var g=0;g<a.p.length;g++)d=g==a.p.length-1?"ck"in a&&1==a.ck?d[a.p[g]]:d[a.p[g].toLowerCase()]:d[a.p[g]]}if("cv"in a&&1==a.cv||(d="string"==typeof d?d.toLowerCase():d),"e"in a&&!isNaN(Number(a.e)))for(var h=0;h<a.e;h++)d=encodeURIComponent(d);return d}},RU:{f:function(a,c){var d=a[c];return b.URI.f(d,document.referrer)}},LP:{f:function(a,c){var d=a[c];return b.URI.f(d,document.URL)}},C:{f:function(a,c){var d=document.cookie,e=a[c],f={queryKey:{}};d=d.split("; ");for(var g=0;g<d.length;g++){var h=d[g].split("=");2==h.length?f.queryKey[h[0]]=h[1]:""}return b.URI.f(e,f,!0)}},JS:{f:function(a,b){var c=a[b];if("p"in c){var d=c.p[0];if("r"==d){var e=Math.random();return~~(1e7*(.1>e?e+.1:e))}if("ep"==d)return(new Date).getTime()}return""}},S:{f:function(a,b){var c=a[b],d="";if("v"in c&&(d=f.tc(c.v,a)),"e"in c&&!isNaN(Number(c.e)))for(var e=0;e<c.e;e++)d=encodeURIComponent(d);return d}},D:{f:function(a,b){var c=a[b],d=window;if("p"in c&&c.p.length>0)for(var e=c.p[0].split("."),f=0;f<e.length;f++){var g=e[f];if(!(g in d)){d=window;break}d=d[g]}return d===window?void 0:d}}},d={"==":{f:function(a){return a.cval==a.k?!0:!1}},"in":{f:function(a){if(void 0==a.cval)return!1;var b=a.k;f.isArray(b)||(b=[b]);for(var c=!1,d=0;d<b.length;d++)if(-1!=a.cval.indexOf(b[d])){c=!0;break}return c}},inN:{f:function(a){if(void 0==a.cval)return!1;for(var b=a.k,c=!1,d=0;d<b.length;d++)if(-1!=a.cval.indexOf(b[d])){c=!0;break}return c}},Ain:{f:function(a){if(void 0==a.cval)return!1;for(var b=a.k,c=!0,d=0;d<b.length;d++)if(-1==a.cval.indexOf(b[d])){c=!1;break}return c}},ex:{f:function(a){return void 0===a.cval?!1:!0}}},e={E:{f:function(a){return a.length>0?f.runop(a[0]):!1}},AND:{f:function(a){return f.andorLOP(a,"AND")}},OR:{f:function(a){return f.andorLOP(a,"OR")}}},g={url:function(a,b){var c=f.tc(b.tasks.url[a],b.dp);h.resq.push({url:c});var d=new Image;return d.src=c,d.onload=d.onerror=function(){h.asyncprogress()},!0},logics:function(a,b){return c.execLogicTask(b.tasks.logics[a],b)},c:function(a,b){var c=b.tasks.c[a].split(":",4);if(c.length>=3){var d=f.tc(c[2],b.dp);c[1]=""==c[1]?20:c[1],(4!=c.length||"t"!=c[3]||-1===document.cookie.indexOf(c[0]))&&(document.cookie=c[0]+"="+d+"; path=/; expires="+new Date((new Date).getTime()+24*c[1]*60*60*1e3).toUTCString())}}},c={apc:function(a){"k"in a?a.k=f.tc(a.k,h.dp):"kdp"in a&&(a.k=b[a.kdp.ds].f(a,"kdp")),"cval"in a||"dp"in a&&(a.cval=b[a.dp.ds].f(a,"dp"))},rtl:function(a){for(var b in a){for(var d=a[b],f=0;f<d.length;f++)c.apc(d[f]);return e[b].f(d)}return!1},execLogicTask:function(a,b){var d=!1;return"logic"in a&&(c.rtl(a.logic)?("try"in a&&c.taskrunner(a.try,b),d=!0):"catch"in a&&c.taskrunner(a.catch,b)),d},taskrunner:function(a,b){if(f.isArray(a))for(var d=0;d<a.length;d++)c.taskrunner(a[d],b);else if("task"in a&&"string"==typeof a.task){var e=a.task.split(":");g[e[0]](e[1],b)}}},h={asyncf:0,asyncprogress:function(){h.asyncf+=1,h.asynccomplete()},asynccomplete:function(){h.asyncf==h.resq.length&&"function"==typeof h.onComplete&&h.onComplete()},run:function(a){h.resq=[],h.asyncf=0,h.dp=(a.config||{}).dp||{},c.taskrunner(a.boot,a.config),h.asynccomplete()}},a.visualiqtag?h=a.visualiqtag:a.visualiqtag=h}(window);
var viqjson={"boot":[{"task":"logics:d2"},{"task":"logics:d8"},{"task":"logics:d11"}],"config":{"tasks":{"logics":{"d2":{"logic":{"AND":[{"E":[{"o":"!in","k":"test","dp":{"p":["host"],"ds":"RU"}}]},{"E":[{"o":"!ex","dp":{"p":["queryKey","tid"],"ds":"C"}}]}]},"try":[{"task":"url:d3"},{"task":"url:d4"},{"task":"url:d5"},{"task":"url:d6"},{"task":"url:d7"}]},"d8":{"logic":{"E":[{"o":"!==","dp":{"p":["host"],"ds":"RU"},"kdp":{"p":["host"],"ds":"LP"}}]},"try":[{"task":"url:d9"}]},"d11":{"logic":{"E":[{"o":"==","dp":{"p":["host"],"ds":"RU"},"kdp":{"p":["host"],"ds":"LP"}}]},"catch":[{"task":"logics:d12"}]},"d12":{"logic":{"OR":[{"E":[{"o":"in","dp":{"p":["query"],"ds":"LP"},"k":"ref=pd"}]},{"E":[{"o":"in","dp":{"p":["query"],"ds":"LP"},"k":"ref=pv"}]},{"E":[{"o":"in","dp":{"p":["query"],"ds":"LP"},"k":"ref=email"}]}]},"catch":[{"task":"logics:d13"}]},"d13":{"logic":{"AND":[{"AND":[{"E":[{"o":"!in","dp":{"p":["host"],"ds":"RU"},"k":"facebook"}]},{"E":[{"o":"!in","dp":{"p":["host"],"ds":"RU"},"k":"instagram"}]}]},{"OR":[{"E":[{"o":"in","dp":{"p":["query"],"ds":"LP"},"k":"ref=ps"}]},{"E":[{"o":"in","dp":{"p":["query"],"ds":"LP"},"k":"ref=ps&twitter"}]}]}]},"try":[{"task":"url:d14"}],"catch":[{"task":"logics:d20"}]},"d20":{"logic":{"E":[{"o":"in","dp":{"p":["query"],"ds":"LP"},"k":"ref=affiliate"}]},"try":[{"task":"url:d21"}],"catch":[{"task":"logics:d26"}]},"d26":{"logic":{"AND":[{"AND":[{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=pd"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=pv"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=sem"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=email"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=ps"}]}]},{"OR":[{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"facebook"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"instagram"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"linkedin"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"twitter"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"pinterest"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"snapchat"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"plus.google.com"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"plus.url.google.com"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"tumblr"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"reddit"}]}]}]},"try":[{"task":"url:d27"}],"catch":[{"task":"logics:d32"}]},"d32":{"logic":{"AND":[{"AND":[{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=pd"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=pv"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=sem"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=email"}]},{"E":[{"o":"!in","dp":{"p":["query"],"ds":"LP"},"k":"ref=ps"}]}]},{"OR":[{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"google"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"bing"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"yahoo"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"aol"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"ask"}]},{"E":[{"o":"in","dp":{"p":["host"],"ds":"RU"},"k":"duckduckgo"}]}]}]},"try":[{"task":"url:d33"}],"catch":[{"task":"logics:d38"}]},"d38":{"logic":{"AND":[{"E":[{"o":"==","dp":{"p":["host"],"ds":"RU"},"k":""}]},{"E":[{"o":"!==","dp":{"p":["query"],"ds":"LP"},"k":""}]}]},"catch":[{"task":"logics:d39"}]},"d39":{"logic":{"AND":[{"E":[{"o":"==","dp":{"p":["host"],"ds":"RU"},"k":""}]},{"E":[{"o":"==","dp":{"p":["query"],"ds":"LP"},"k":""}]}]},"try":[{"task":"url:d40"}]}},"url":{"d3":"https://tapestry.tapad.com/tapestry/1?ta_partner_id=950&ta_redirect=https%3A%2F%2Ft.myvisualiq.net%2Fsync%3Fprid%3D1001%26ao%3D0%26pruuid%3DTAPAD_%24%7BIDS%3Akey%7D","d4":"https://t.myvisualiq.net/sync?prid=1002&ao=0&red=https://idsync.rlcdn.com/420356.gif?partner_uid=${UUID}","d5":"https://t.myvisualiq.net/sync?prid=BUKIPNR1&red=https://tags.bluekai.com/site/21398?id=$%7BUUID%7D","d6":"https://t.myvisualiq.net/sync?prid=AOEPNR1&ao=0&red=https%3A%2F%2Fdpm.demdex.net%2Fibs%3Adpid%3D125310%26dpuuid%3D%24%7BUUID%7D%26redir%3Dhttps%253A%252F%252Ft.myvisualiq.net%252Fsync%253Fprid%253DAOEPNR1%2526ao%253D0%2526pruuid%253D%2524%257BDD_UUID%257D%250A","d7":"https://t.myvisualiq.net/sync?prid=EEAEPNR1&red=https%3A%2F%2Floadus.exelator.com%2Fload%2F%3Fp%3D204%26g%3D1260%26buid%3D%24%7BUUID%7D","d9":"https://t.myvisualiq.net/sync?prid=123&ao=0&red={{d10}}","d14":"https://t.myvisualiq.net/impression_pixel?r={{d15}}&et=i&ago=212&ao=855&aca=-6&si=-6&ci=-6&pi=-6&ad=-6&advt=-6&chnl=-6&vndr=1525&sz=6296&u={{d17}}|{{d18}}|{{d19}}&pt=i","d21":"https://t.myvisualiq.net/impression_pixel?r={{d22}}&et=i&ago=212&ao=855&aca=-4&si=-4&ci=-4&pi=-4&ad=-4&advt=-4&chnl=-4&vndr=1525&sz=6297&u={{d23}}|{{d24}}|{{d25}}&pt=i","d27":"https://t.myvisualiq.net/impression_pixel?r={{d28}}&et=i&ago=212&ao=855&aca=-12&si=-12&ci=-12&pi=-12&ad=-12&advt=-12&chnl=-12&vndr=1525&sz=6299&u={{d29}}|{{d30}}|{{d31}}&pt=i","d33":"https://t.myvisualiq.net/impression_pixel?r={{d34}}&et=i&ago=212&ao=855&aca=-13&si=-13&ci=-13&pi=-13&ad=-13&advt=-13&chnl=-13&vndr=1525&sz=6298&u={{d35}}|{{d36}}|{{d37}}&pt=i","d40":"https://t.myvisualiq.net/impression_pixel?r={{d41}}&et=i&ago=212&ao=855&aca=-10&si=-10&ci=-10&pi=-10&ad=-10&advt=-10&chnl=-10&vndr=1525&sz=6300&u={{d42}}&pt=i"}},"dp":{"d10":{"ds":"S","v":"https://www.facebook.com/tr?id=364875044029074&ev=PageView&cd[order_id]=${UUID}","e":1,"cv":1},"d15":{"p":["r"],"ds":"JS","cv":1},"d17":{"p":["query"],"e":1,"ds":"LP","cv":1},"d18":{"p":["host"],"e":1,"ds":"RU","cv":1},"d19":{"p":["source"],"e":1,"ds":"LP","cv":1},"d22":{"p":["r"],"ds":"JS","cv":1},"d23":{"p":["query"],"e":1,"ds":"LP","cv":1},"d24":{"p":["host"],"e":1,"ds":"RU","cv":1},"d25":{"p":["source"],"e":1,"ds":"LP","cv":1},"d28":{"p":["r"],"ds":"JS","cv":1},"d29":{"p":["query"],"e":1,"ds":"LP","cv":1},"d30":{"p":["host"],"e":1,"ds":"RU","cv":1},"d31":{"p":["source"],"e":1,"ds":"LP","cv":1},"d34":{"p":["r"],"ds":"JS","cv":1},"d35":{"p":["query"],"e":1,"ds":"LP","cv":1},"d36":{"p":["host"],"e":1,"ds":"RU","cv":1},"d37":{"p":["source"],"e":1,"ds":"LP","cv":1},"d41":{"p":["r"],"ds":"JS","cv":1},"d42":{"p":["source"],"e":1,"ds":"LP","cv":1}}}}
visualiqtag.run(viqjson);

