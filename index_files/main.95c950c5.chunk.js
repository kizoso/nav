(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a(42),i=a.n(o),s=a(3),u=a.n(s),l=a(7),d=a(4),p=a(8),m=a.n(p),f=a(23),b=a.n(f),v=a(26),h=(a(55),a(56),a(39));a(41);Object(f.registerLocale)("ru-RU",v.a);var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.includes(t)?t:e[0]},y=function(e,t){return e.filter(function(e){return h(h.tz(e,0).format("YYYY-MM-DD HH:mm:ss")).toDate()>=t}).sort().map(function(e){return h(h.tz(e,0).format("YYYY-MM-DD HH:mm:ss")).toDate()})},O=function(e){var t=e.cartKey,a=e.productId,c=m()("direction","order"),o=c.dispatch,i=c.direction,s=c.order,u=Object(d.a)(s[t].options,1)[0],l=u.direction,p=u.date,f=u.isOpenTime,v=i["".concat(a,".").concat(l)],O=v.dates,k=void 0===O?[]:O,w=v.datesOpenTime,g=void 0===w?[]:w,j=v.buyTimeOffset,_=void 0===j?0:j;Object(n.useEffect)(function(){s[t].options[0].isOpenTime=!(k.length||!g.length)||f,o("order/update",s)},[]);var N=h(h().utc().tz("Europe/Moscow").format("YYYY-MM-DD HH:mm:ss")).toDate();N.setMinutes(N.getMinutes()+_);var D=Object(n.useState)(y(f?g:k,N)),x=Object(d.a)(D,2),M=x[0],P=x[1],C=Object(n.useState)(E(M,p)),S=Object(d.a)(C,2),T=S[0],I=S[1];return Object(n.useEffect)(function(){P(y(f?g:k,N))},[f]),Object(n.useEffect)(function(){I(E(M,T))},[M]),Object(n.useEffect)(function(){s[t].options[0].date=T,o("order/update",s)},[T]),r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("span",{className:"caption"},"\u0414\u0430\u0442\u0430 \u043f\u043e\u0435\u0437\u0434\u043a\u0438"),r.a.createElement("input",{readOnly:!0,type:"text",value:h(T).format("LL"),className:"input input_calendar"})),r.a.createElement("div",{className:"calendarWrapper"},r.a.createElement(b.a,{inline:!0,calendarClassName:"calendar",dateFormat:"dd MMMM yyyy",includeDates:M,locale:"ru-RU",selected:T,onChange:function(e){return I(e)}})))},k=function(e){var t=e.cartKey,a=e.productId,c=m()("product","direction","order"),o=c.dispatch,i=c.product,s=c.direction,u=c.order,l=i[a].directions,p=((u[t]||{}).options||[{}])[0].direction||s[l[0]]._key,f=Object(n.useState)(p),b=Object(d.a)(f,2),v=b[0],h=b[1];Object(n.useEffect)(function(){u[t].options=u[t].options||[{}],u[t].options[0].direction=v,o("order/update",u)},[v]);var E=l.map(function(e){var t=s[e],a=t._key,n=t.title;return r.a.createElement("option",{key:a,value:a},n)});return E.length>1?r.a.createElement("label",null,r.a.createElement("span",{className:"caption"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),r.a.createElement("select",{value:v,onChange:function(e){return h(e.target.value)},className:"input"},E)):null},w=a(50),g="https://api.nevatrip.ru",j={"Content-Type":"application/json"},_={cart:{newCart:function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/shoppingCarts/").concat(t),{method:"GET",headers:j});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteItem:function(){var e=Object(l.a)(u.a.mark(function e(t,a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/shoppingCarts/").concat(t,"/products/").concat(a),{method:"DELETE",headers:j});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),updateCart:function(){var e=Object(l.a)(u.a.mark(function e(t,a,n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/shoppingCarts/").concat(t),{method:"PUT",headers:j,body:JSON.stringify({sessionId:t,products:a,promocode:n})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()},product:{getProductData:function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/product/").concat(t,"/cart"),{method:"GET",headers:j});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),productDates:function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/product/").concat(t,"/dates"),{method:"GET",headers:j});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getProductTime:function(){var e=Object(l.a)(u.a.mark(function e(t,a,n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/product/").concat(t,"/schedule/").concat(a,"/").concat(n),{method:"GET",headers:j});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()},order:{newOrder:function(){var e=Object(l.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/orders/"),{method:"POST",headers:j,body:JSON.stringify(t)});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),promocode:function(){var e=Object(l.a)(u.a.mark(function e(t,a){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!a){e.next=8;break}return(n=new URL("https://nevatrip.ru/api/promo")).searchParams.append("id",t),n.searchParams.append("code",a),e.next=6,fetch(n);case 6:return r=e.sent,e.abrupt("return",r.text());case 8:return e.abrupt("return",0);case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),getMail:function(){var e=Object(l.a)(u.a.mark(function e(t,a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/orders/").concat(t,"/preview?hash=").concat(a));case 2:return n=e.sent,e.abrupt("return",n.text());case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}},N=a(39);a(41);function D(e){return e<10?"0"+e:e}function x(e){var t=e>0?"-":"+",a=Math.abs(e);return t+D(Math.floor(a/60))+":"+D(a%60)}var M=function(e){var t=e.cartKey,a=e.productId,c=m()("product","event","order","direction"),o=c.dispatch,i=c.order,s=c.direction,p=Object(d.a)(i[t].options,1)[0],f=p.direction,b=p.date,v=p.event,h=p.isOpenTime,E=void 0!==h&&h,y=Object(n.useState)(v),O=Object(d.a)(y,2),k=O[0],g=O[1],j=Object(n.useState)([]),D=Object(d.a)(j,2),M=D[0],P=void 0===M?[]:M,C=D[1],S=Object(n.useState)(E),T=Object(d.a)(S,2),I=T[0],L=T[1],U=s["".concat(a,".").concat(f)],Y=U.timeOffset,R=void 0===Y?-180:Y,F=U.buyTimeOffset,A=void 0===F?0:F,K=U.dates,W=U.datesOpenTime,B=(new Date).getTimezoneOffset(),z=Object(w.default)(new Date(b),"yyyy-MM-dd");return Object(n.useEffect)(function(){(function(){var e=Object(l.a)(u.a.mark(function e(t,n){var r,c,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date(n),c=Object(w.default)(r,"yyyy-MM-dd"),e.next=4,_.product.getProductTime(a,t,c);case 4:o=e.sent,C(o.filter(function(e){return e.allDay===I}));case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}})()(f,b)},[f,b]),Object(n.useEffect)(function(){P.length&&g(P[0]._key)},[P]),Object(n.useEffect)(function(){var e=P.find(function(e){return e._key===k});i[t].options[0].event=e,o("order/update",i)},[k]),Object(n.useEffect)(function(){i[t].options[0].isOpenTime=I,I?i[t].options[0].schedule=P:delete i[t].options[0].schedule,o("order/update",i)},[I,P]),r.a.createElement("div",null,B!==R?r.a.createElement("div",{className:"caption",style:{padding:"8px",borderRadius:"4px",backgroundColor:"#e8b0c5"}},"\u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u044d\u043a\u0441\u043a\u0443\u0440\u0441\u0438\u0438 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0432\u0430\u0448\u0435\u0433\u043e\xa0(UTC",x(B),"). \u0423\u043a\u0430\u0437\u0430\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u043c\u0435\u0441\u0442\u043d\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438\xa0(UTC",x(R),")."):null,K.length&&W.length?r.a.createElement("div",{className:"checkboxScroll"},r.a.createElement("input",{className:"checkboxScrollInput",type:"checkbox",checked:I,id:"datesOpenTime",onChange:function(e){return L(!I)}}),r.a.createElement("label",{className:"checkboxScrollLabel",htmlFor:"datesOpenTime"},I?"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c":"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c"," \u0431\u0438\u043b\u0435\u0442 \u0441 \xab\u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c\xbb ",r.a.createElement("span",{className:"checkboxScrollDisabled"},"(\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u043d\u044f \u043f\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044e)"))):null,r.a.createElement("div",{className:"caption"},I?"\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),r.a.createElement("ul",{className:"grid-list"},P.map(function(e,t){var n=new Date(e.start);n.setMinutes(n.getMinutes()-A);var c=new Date>n,o=N(e.start).tz("Europe/Moscow").format("LT");return r.a.createElement("li",{key:e._key,title:c?"\u042d\u0442\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0436\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e":"".concat(z," \u0432 ").concat(o),className:"grid-list__item"},r.a.createElement("input",{type:"radio",className:"btn-radio",name:"".concat(a,".").concat(f,".").concat(z),value:e._key,checked:!c&&(k?k===e._key:!t),onChange:function(e){return g(e.target.value)},id:e._key,disabled:c||I}),r.a.createElement("label",{className:c||I?"btn-radio__label btn-radio__label_disabled":"btn-radio__label",htmlFor:e._key},o))})))},P=a(17);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var S=function(e){var t=e._key,a=e.tickets,c=e.setTickets,o=e.defaultValue,i=e.price,s=Object(n.useState)(o||0),u=Object(d.a)(s,2),l=u[0],p=u[1];return Object(n.useEffect)(function(){c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(P.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a,Object(P.a)({},t,l)))},[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"counterBtn",disabled:l<=0,onClick:function(){return p(l-1)}},"\u2013"),r.a.createElement("input",{type:"number",className:"counterInput",min:0,value:l,onChange:function(e){return p(parseInt(e.target.value))}}),r.a.createElement("button",{type:"button",className:"counterBtn",disabled:l>=3&&l*i<=0,onClick:function(){return p(l+1)}},"+"))},T=(a(115),function(e){var t=e.cartKey,a=e.productId,c=m()("direction","order","ticket"),o=c.dispatch,i=c.direction,s=c.order,u=c.ticket,l=Object(d.a)(s[t].options,1)[0].direction,p=i["".concat(a,".").concat(l)].tickets,f=p.reduce(function(e,t){var a=u[t],n=a._key,r=a.count;return e[n]=r,e},{}),b=Object(n.useState)(f),v=Object(d.a)(b,2),h=v[0],E=v[1];Object(n.useEffect)(function(){s[t].options[0].tickets=h,o("order/update",s)},[h]);var y=p.map(function(e){var t=u[e],a=t._key,n=t.count,c=t.name,o=t.price;return r.a.createElement("div",{key:a,className:"ticketsItem","data-name":c},r.a.createElement("dt",{className:"ticketsItemText"},c||"???",",",r.a.createElement("span",{className:"ticketsItemPrice"},"\xa0",o,"\xa0\u20bd")),r.a.createElement("dd",{className:"ticketsItemControls"},r.a.createElement(S,{_key:a,defaultValue:n,tickets:h,setTickets:E,price:o})))});return r.a.createElement("div",{className:"ticketsWrapper"},r.a.createElement("span",{className:"caption"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0431\u0438\u043b\u0435\u0442\u043e\u0432"),r.a.createElement("dl",{className:"ticketsDl"},y))}),I=(a(116),function(e){var t=e.cartKey,a=e.productId,n=m()("product","order"),c=n.product,o=n.order,i=c[a].title.ru.name,s=o[t].options||[{}],u=Object(d.a)(s,1)[0],l=u.direction,p=u.date,f=c[a].oldId?"//nevatrip.ru/index.php?id=".concat(c[a].oldId):"";return r.a.createElement("fieldset",{className:"product product_view_form"},r.a.createElement("legend",{className:"product__legend"},f?r.a.createElement("a",{href:f,style:{color:"inherit",textDecoration:"none"}},i):i),r.a.createElement("div",{className:"product__inner"},r.a.createElement("div",{className:"colDesktop"},l&&r.a.createElement(O,e)),r.a.createElement("div",{className:"colDesktop"},r.a.createElement(k,e),p&&r.a.createElement(M,e),l&&r.a.createElement(T,e))))}),L=a(39);a(41);var U=function(e){var t=e.cartKey,a=e.productId,c=m()("product","order","direction","ticket"),o=c.product,i=c.order,s=c.direction,u=c.ticket,l=o[a].title.ru.name,p=i[t].options||[{}],f=Object(d.a)(p,1)[0],b=f.direction,v=f.date,h=f.event,E=f.tickets,y=f.isOpenTime,O=f.schedule,k=void 0===O?[]:O,w=Object(n.useState)(),g=Object(d.a)(w,2),j=g[0],_=g[1],N="".concat(a,".").concat(b),D=h&&h.start;if(Object(n.useEffect)(function(){_(y?k.filter(function(e){return!0===e.allDay}).map(function(e){return L(e.start).tz("Europe/Moscow").format("LT")}).join(", "):D?L(D).tz("Europe/Moscow").format("LT"):"")},[h]),!b)return null;return r.a.createElement("fieldset",{className:"listPreviewFieldset"},r.a.createElement("legend",{className:"listPreviewLegend"},l),r.a.createElement("ul",{className:"listPreviewData"},v&&r.a.createElement("li",{className:"listPreviewDataLi"},r.a.createElement("div",{className:"listPreviewDataLi__h"},r.a.createElement("b",null,"\u0434\u0430\u0442\u0430"),"\xa0/\xa0",r.a.createElement("span",{className:"text_en"},"date")),r.a.createElement("div",{className:"listPreviewDataLi__p"},function(){if(h&&h.start){var e=L(L(h.start).tz("Europe/Moscow").format("YYYY-MM-DD LT:ss")).toDate(),t=L(e).format("LT").substr(0,2);return t>21?"\u0412 \u043d\u043e\u0447\u044c \u0441 ".concat(L(e).format("D MMMM")," \u043d\u0430 ").concat(L(e.setDate(e.getDate())+864e5).format("D MMMM")):t<4||"0:"===t?"\u0412 \u043d\u043e\u0447\u044c \u0441 ".concat(L(e.setDate(e.getDate())-864e5).format("D MMMM"),"  \u043d\u0430 ").concat(L(e).format("D MMMM")):L(e).format("D MMMM")}}())),h&&r.a.createElement("li",{className:"listPreviewDataLi"},r.a.createElement("div",{className:"listPreviewDataLi__h"},r.a.createElement("b",null,"\u0432\u0440\u0435\u043c\u044f"),"\xa0/\xa0",r.a.createElement("span",{className:"text_en"},"time")),r.a.createElement("div",{className:"listPreviewDataLi__p"},j)),o[a].directions.length>1&&b&&s[N]&&r.a.createElement("li",{className:"listPreviewDataLi"},r.a.createElement("div",{className:"listPreviewDataLi__h"},r.a.createElement("b",null,"\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),"\xa0/\xa0",r.a.createElement("span",{className:"text_en"},"direction")),r.a.createElement("div",{className:"listPreviewDataLi__p"},s[N].title))),E&&r.a.createElement("div",{className:"listPreviewTickets"},r.a.createElement("div",{className:"listPreviewDataLi__h"},r.a.createElement("b",null,"\u0431\u0438\u043b\u0435\u0442\u044b"),"\xa0/\xa0",r.a.createElement("span",{className:"text_en"},"tickets")),r.a.createElement("div",{className:"listPreviewDataLi__p"},Object.keys(E).map(function(e){var t=E[e];if(!t||!u["".concat(a,".").concat(b,".").concat(e)])return null;var n=u["".concat(a,".").concat(b,".").concat(e)],c=n._key,o=n.name,i=n.price;return r.a.createElement("li",{key:c,className:"listPreviewTicketsLi"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:"".concat(o,": ").concat(i,"&nbsp;\u20bd \xd7 ").concat(t," = ").concat(t*i,"&nbsp;\u20bd")}}))}))))};a(117);Object(f.registerLocale)("ru-RU",v.a);var Y=function(e){var t=e.session,a=m()("cart","user","order","ticket","product"),c=a.dispatch,o=a.cart,i=a.user,s=a.order,p=a.ticket,f=a.product,h=i.fullName,E=i.email,y=i.phone,O=Object(n.useState)(!1),k=Object(d.a)(O,2),g=k[0],j=k[1],N=Object(n.useState)(0),D=Object(d.a)(N,2),x=D[0],M=D[1],P=Object(n.useState)(""),C=Object(d.a)(P,2),S=C[0],T=C[1],L=Object(n.useState)(!1),Y=Object(d.a)(L,2),R=Y[0],F=Y[1],A=Object(n.useState)(),K=Object(d.a)(A,2),W=K[0],B=K[1],z=Object(n.useState)(0),H=Object(d.a)(z,2),q=H[0],V=H[1],G=Object(n.useState)(!1),J=Object(d.a)(G,2),$=J[0],Q=J[1],X=Object(n.useRef)(function(e,t,a){var n,r,c,o=null,i=0;a||(a={});var s=function(){i=!1===a.leading?0:Date.now(),o=null,c=e.apply(n,r),o||(n=r=null)};return function(){var u=Date.now();i||!1!==a.leading||(i=u);var l=t-(u-i);return n=this,r=arguments,l<=0||l>t?(o&&(clearTimeout(o),o=null),i=u,c=e.apply(n,r),o||(n=r=null)):o||!1===a.trailing||(o=setTimeout(s,l)),c}}(function(){var e=Object(l.a)(u.a.mark(function e(t,a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,_.order.promocode(t,a);case 3:n=e.sent,M(n);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),700)),Z=function(e){i[e.target.name]=e.target.value,c("user/update",i)},ee=Object.values(s).reduce(function(e,t){if(!t.options||!t.options.length)return 0;var a=t.productId,n=Object(d.a)(t.options,1)[0],r=n.direction,c=n.tickets;return r&&c?(Object.keys(c).forEach(function(t){var n=c[t]||0,o="".concat(a,".").concat(r,".").concat(t);if(p.hasOwnProperty(o)){var i=p[o].price,s=Math.ceil(i-i*(x/100));e+=n*s}}),e):0},0),te=function(){var e=Object(l.a)(u.a.mark(function e(a){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),Q(!0),e.next=4,_.cart.updateCart(t,Object.values(s),S);case 4:return e.next=6,_.order.newOrder({sessionId:t,user:i});case 6:n=e.sent,0!==ee&&x<100&&n.payment.Model.Number?(r=n.payment.Model.Number,function(){(new window.cp.CloudPayments).charge({publicId:"pk_9571506275254507c34463787fa0b",description:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 NevaTrip.ru",amount:ee,currency:"RUB",invoiceId:r,accountId:i.email,skin:"mini"},function(e){console.log("success",e),F(n)},function(e,t){console.log("reason",e),console.log("fail",t),alert("\u041e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430")})}()):F(n),Q(!1);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){f&&s&&o&&o[0]&&s[o[0]]&&(V(f[s[o[0]].productId].oldId),X.current(q,S))},[S,q]),Object(n.useEffect)(function(){c("cart/get",t)},[t]),Object(n.useEffect)(function(){R.id&&R.hash&&setTimeout(Object(l.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.order.getMail(R.id,R.hash);case 2:t=e.sent,B(t),(a=document.createElement("link")).rel="stylesheet",a.href="//api.nevatrip.ru/assets/css/web-desktop.min.css",a.type="text/css",document.head.appendChild(a);case 9:case"end":return e.stop()}},e)})),1e3)},[R]),R?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:W}}):!o||o.loading||o.error?r.a.createElement("div",{className:"cart"},r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"cart__item cart__item_view_product"},r.a.createElement("div",{className:"product product_view_form"},r.a.createElement("legend",{className:"product__legend",style:{color:"transparent",textShadow:"0 0 5px rgba(0,0,0,0.5)"}},"\u0418\u0449\u0435\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0442\u0435\u043f\u043b\u043e\u0445\u043e\u0434 \u043f\u043e \u0440\u0435\u043a\u0430\u043c \u0438 \u043a\u0430\u043d\u0430\u043b\u0430\u043c \u043d\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0443\u044e \u0434\u0430\u0442\u0443\u2026"),r.a.createElement("div",{className:"product__inner"},r.a.createElement("div",{className:"colDesktop"},r.a.createElement("label",null,r.a.createElement("span",{className:"caption"},"\u0414\u0430\u0442\u0430 \u043f\u043e\u0435\u0437\u0434\u043a\u0438"),r.a.createElement("input",{readOnly:!0,type:"text",value:Object(w.default)(new Date,"dd MMMM yyyy",{locale:v.a}),className:"input input_calendar"})),r.a.createElement("div",{className:"calendarWrapper"},r.a.createElement(b.a,{inline:!0,calendarClassName:"calendar",dateFormat:"dd MMMM yyyy",locale:"ru-RU",selected:new Date}))),r.a.createElement("div",{className:"colDesktop"}))))),r.a.createElement("div",{className:"aside"},r.a.createElement("div",{className:"aside__blank"},r.a.createElement("span",{className:"caption caption_l"},"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437")),r.a.createElement("div",{className:"asideSeparator"},r.a.createElement("div",{className:"asideSeparator__line"})),r.a.createElement("div",{className:"aside__blank"},r.a.createElement("div",{className:"cart__user"},[{name:"fullName",type:"text",value:h,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0438 \u0438\u043c\u044f"},{name:"email",type:"email",value:E,label:"E-mail"},{name:"phone",type:"phone",value:y,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}].map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("label",{className:"form-label"},r.a.createElement("span",{className:"caption"},e.label),r.a.createElement("input",{className:"input",type:e.type,name:e.name,defaultValue:e.value,onBlur:Z,required:!0})))})),r.a.createElement("div",{className:"cart__promocode"},g?r.a.createElement("label",{className:"form-label"},r.a.createElement("span",{className:"caption"},"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434\xa0",x>0?"\xab".concat(S.toUpperCase(),"\xbb \u043d\u0430 ").concat(x,"% \ud83d\udc4d"):null),r.a.createElement("input",{className:"input",name:"promocode",defaultValue:S,onKeyUp:function(e){return T(e.target.value)},autoComplete:"off",autoFocus:g,onBlur:function(){return!S&&j(!1)}})):r.a.createElement("button",{className:"btn-radio__label",onClick:function(){return j(!0)}},"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434")),r.a.createElement("span",{className:"checkbox"},r.a.createElement("input",{className:"checkboxInput",type:"checkbox",required:"required",id:"ofertaCheck"}),r.a.createElement("label",{className:"caption checkboxCaption",htmlFor:"ofertaCheck"},"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d(-\u043d\u0430) \u0441\xa0",r.a.createElement("a",{href:"https://nevatrip.ru/oferta",target:"_blank",rel:"noopener noreferrer"},"\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"))),r.a.createElement("button",{className:"btn btn_block btn_primary"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",ee," \u20bd")))):r.a.createElement("form",{className:"cart",method:"post",onSubmit:te},r.a.createElement("ul",{className:"list"},o.map(function(e){var t=s[e].productId;return r.a.createElement("li",{className:"cart__item cart__item_view_product",key:e},r.a.createElement(I,{cartKey:e,productId:t}))})),r.a.createElement("div",{className:"aside"},r.a.createElement("div",{className:"aside__blank"},r.a.createElement("span",{className:"caption caption_l"},"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"),r.a.createElement("ul",{className:"listPreview"},o.map(function(e){var t=s[e].productId;return r.a.createElement("li",{className:"cart__item cart__item_view_product",key:e},r.a.createElement(U,{cartKey:e,productId:t}))}))),r.a.createElement("div",{className:"asideSeparator"},r.a.createElement("div",{className:"asideSeparator__line"})),r.a.createElement("div",{className:"aside__blank"},r.a.createElement("div",{className:"cart__user"},[{name:"fullName",type:"text",value:h,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0438 \u0438\u043c\u044f"},{name:"email",type:"email",value:E,label:"E-mail"},{name:"phone",type:"phone",value:y,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}].map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("label",{className:"form-label"},r.a.createElement("span",{className:"caption"},e.label),r.a.createElement("input",{className:"input",type:e.type,name:e.name,defaultValue:e.value,onBlur:Z,required:!0})))})),r.a.createElement("div",{className:"cart__promocode"},g?r.a.createElement("label",{className:"form-label"},r.a.createElement("span",{className:"caption"},"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434\xa0",x>0?"\xab".concat(S.toUpperCase(),"\xbb \u043d\u0430 ").concat(x,"% \ud83d\udc4d"):null),r.a.createElement("input",{className:"input",name:"promocode",defaultValue:S,onKeyUp:function(e){return T(e.target.value)},autoComplete:"off",autoFocus:g,onBlur:function(){return!S&&j(!1)}})):r.a.createElement("button",{className:"btn-radio__label",onClick:function(){return j(!0)}},"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434")),r.a.createElement("span",{className:"checkbox"},r.a.createElement("input",{className:"checkboxInput",type:"checkbox",required:"required",id:"ofertaCheck"}),r.a.createElement("label",{className:"caption checkboxCaption",htmlFor:"ofertaCheck"},"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d(-\u043d\u0430) \u0441\xa0",r.a.createElement("a",{href:"https://nevatrip.ru/oferta",target:"_blank",rel:"noopener noreferrer"},"\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"))),r.a.createElement("button",{className:"btn btn_block btn_primary",disabled:$},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",ee," \u20bd"))))},R=a(58),F=a.n(R),A=a(59),K=a(19);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach(function(t){Object(P.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach(function(t){Object(P.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var q=F()([function(e){e.on("@init",function(){return{cart:null}}),e.on("cart/loading",function(e,t){var a=B({},e.cart,{loading:t});return B({},e,{cart:a})}),e.on("cart/get",function(){var t=Object(l.a)(u.a.mark(function t(a,n){var r,c,o,i,s,l,d,p,m;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.dispatch("cart/loading",!0),t.next=4,_.cart.newCart(n);case 4:return r=t.sent,c=r.products,t.next=8,Promise.all(Object(A.a)(new Set(c.map(function(e){return e.productId}))).map(function(e){return _.product.getProductData(e)}));case 8:o=t.sent,i=new K.b.Entity("cart",{},{idAttribute:"key"}),s=new K.b.Entity("ticketCategory",{},{idAttribute:"_id"}),l=new K.b.Entity("ticket",{category:s},{idAttribute:function(e,t){return"".concat(t.key,".").concat(e._key)},processStrategy:function(e,t){return B({},e,{key:"".concat(t.key,".").concat(e._key)})}}),d=new K.b.Entity("direction",{tickets:[l]},{idAttribute:function(e,t){return"".concat(t._id,".").concat(e._key)},processStrategy:function(e,t){return B({},e,{key:"".concat(t._id,".").concat(e._key)})}}),p=new K.b.Entity("product",{directions:[d]},{idAttribute:"_id"}),m=Object(K.a)({cart:c,products:o},{cart:[i],products:[p]}),e.dispatch("order/add",m.entities.cart),e.dispatch("direction/add",m.entities.direction),e.dispatch("product/add",m.entities.product),e.dispatch("ticket/add",m.entities.ticket),e.dispatch("ticketCategory/add",m.entities.ticketCategory),e.dispatch("cart/add",m.result.cart),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),e.dispatch("cart/error",{cart:null,error:t.t0,loading:!1});case 26:case"end":return t.stop()}},t,null,[[0,23]])}));return function(e,a){return t.apply(this,arguments)}}()),e.on("cart/error",function(e,t){return{cart:t}}),e.on("cart/add",function(e,t){return{cart:t}})},function(e){e.on("@init",function(){return{direction:{}}}),e.on("direction/add",function(e,t){return{direction:t}})},function(e){e.on("@init",function(){return{order:{}}}),e.on("order/add",function(e,t){return{order:t}}),e.on("order/update",function(e,t){return{order:t}})},function(e){e.on("@init",function(){return{product:null}}),e.on("product/add",function(e,t){return{product:t}})},function(e){e.on("@init",function(){return{event:{}}}),e.on("event/add",function(e,t){return{event:H({},e.event,{},t)}})},function(e){e.on("@init",function(){return{ticket:{}}}),e.on("ticket/add",function(e,t){return{ticket:t}})},function(e){e.on("@init",function(){return{ticketCategory:{}}}),e.on("ticketCategory/add",function(e,t){return{ticketCategory:t}})},function(e){e.on("@init",function(){return{user:{fullName:"",email:"",phone:""}}}),e.on("user/update",function(e,t){var a=e.user;a=a[t]})},!1]);a(118);var V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var J=new URL(window.location.href).searchParams.get("session")||"test-test-test";Object(c.render)(r.a.createElement(function(e){var t=e.session;return r.a.createElement(i.a.Provider,{value:q},r.a.createElement(Y,{session:t}))},{session:J}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/assets/cart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/assets/cart","/service-worker.js");V?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):G(t,e)})}}()},56:function(e,t,a){},60:function(e,t,a){e.exports=a(119)}},[[60,1,2]]]);
//# sourceMappingURL=main.95c950c5.chunk.js.map