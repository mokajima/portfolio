(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header.c6b29b49.jpg"},,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(15),a(2)),l=a(4),s=a(9),m=(a(18),function(e){var t=e.work,a=t.border?"work__img work__img--border":"work__img";return r.a.createElement("div",{className:"work"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("figure",{className:a},r.a.createElement("img",{src:"images/".concat(t.id,".jpg"),alt:t.title}))),r.a.createElement("h3",{className:"work__title"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title)),r.a.createElement("p",{className:"work__summary"},t.summary))}),f=(a(19),function(e){var t=e.works;return r.a.createElement("section",{className:"section"},r.a.createElement("h2",{className:"headline"},"Featured Work"),r.a.createElement("ul",{className:"featured-work"},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{work:e}))})))}),u=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){fetch("works.json").then(function(e){return e.json()}).then(function(e){o(e)})},[]),r.a.createElement(f,{works:a})},d=(a(20),a(8)),h=a.n(d),g=function(){var e=(new Date).getFullYear();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},"Misaki's Portfolio Website")),r.a.createElement("main",{className:"main"},r.a.createElement("header",{className:"hero"},r.a.createElement("h2",{className:"hero__title"},"Hello, I'm Misaki!"),r.a.createElement("img",{className:"hero__img",src:h.a,alt:""})),r.a.createElement(u,null)),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__inner profile"},r.a.createElement("h2",{className:"headline"},"About Me"),r.a.createElement("p",{className:"profile__bio"},"Hello, I'm Misaki, a front end developer, based in Japan."),r.a.createElement("ul",{className:"footer__nav"},r.a.createElement("li",{className:"footer__nav-item"},r.a.createElement("a",{href:"https://github.com/mokajima/"},r.a.createElement(c.a,{icon:l.a,size:"2x"}))),r.a.createElement("li",{className:"footer__nav-item"},r.a.createElement("a",{href:"https://twitter.com/mokajima85z"},r.a.createElement(c.a,{icon:l.b,size:"2x"}))))),r.a.createElement("p",{className:"copyright"},r.a.createElement("small",null,"\xa9 ",e," Misaki's Portfolio Website"))))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/portfolio","/service-worker.js");w?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):E(e)})}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.88276f4e.chunk.js.map