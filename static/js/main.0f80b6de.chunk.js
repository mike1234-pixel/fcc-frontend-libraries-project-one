(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"quote":"Word has reached my ears of this Aragorn, son of Arathorn, and I tell you now, I will not BOW to this Ranger from the North, last of a ragged house long bereft of lordship!","author":"Denethor Son of Ecthelion","img":"Denethor.jpg","class":"denethor"},{"quote":" Is there a captain here who still has the courage to do his lord\'s will?","author":"Denethor Son of Ecthelion","img":"Denethor.jpg","class":"denethor"},{"quote":"My sons are spent. My line has ended. Rohan has deserted us. Theoden\'s betrayed me. ABANDON YOUR POSTS! FLEEEEE, FLEE FOR YOUR LIVES!","author":"Denethor Son of Ecthelion","img":"Denethor.jpg","class":"denethor"},{"quote":"A new POWER is rising. Its victory is at HAND. This night the land will be stained with the blood of ROHAN. MARCH to Helm\'s Deep. Leave NONE alive. To WAR!","author":"Saruman the White (Curun\xedr)","img":"Saruman.jpg","class":"saruman"},{"quote":"Whom do you serve?","author":"Saruman the White (Curun\xedr)","img":"Saruman.jpg","class":"saruman"},{"quote":"I gave you the chance of aiding me willingly, but you have elected the way of PAIN!","author":"Saruman the White (Curun\xedr)","img":"Saruman.jpg","class":"saruman"},{"quote":"So GANDALF, you try to lead them over Caradhras. And if that fails, where then will you go? If the mountain defeats you, will you risk a more dangerous road?","author":"Saruman the White (Curun\xedr)","img":"Saruman.jpg","class":"saruman"},{"quote":"Cuiva nwalca Carnirasse! Nai Yarvaxea Rasselya! Taltuva Notto Carinnar!","author":"Saruman the White (Curun\xedr)","img":"Saruman.jpg","class":"saruman"},{"quote":"Who knows what you have spoken to the darkness, alone, in the bitter watches of the night, when all your life seems to shrink, the walls of your BOWER closing in about you, a hutch to trammel some... WILD THING.","author":"Grima Wormtongue","img":"Grima.jpg","class":"grima"},{"quote":"The staff! I TOLD YOU TO TAKE THE WIZARD\'S STAFF!","author":"Grima Wormtongue","img":"Grima.jpg","class":"grima"},{"quote":"A just question my liege. Late is the hour in which this conjurer chooses to appear! Lathspell I name you. Ill news is an ill guest.","author":"Grima Wormtongue","img":"Grima.jpg","class":"grima"},{"quote":"Let the laird of the Black land cam forth!","author":"Aragorn (Strider)","img":"Aragorn.jpg","class":"aragorn"},{"quote":"We must get off the mountain! Make for the gap of Rohan! Or take the west road to MY CITY!","author":"Boromir, son of Denethor","img":"Boromir.jpg","class":"boromir"},{"quote":"Your leechcraft would have had me crawling on all fours like a beast!","author":"Theoden, son of Thengel","img":"Theoden.jpg","class":"theoden"},{"quote":"Be silent! Keep your forked tongue behind your teeth! I have not passed through fire and death to bandy crooked words with a witless worm.","author":"Gandalf the White (Mithrandir)","img":"GandalfWhite.jpg","class":"gandalf"},{"quote":"Salted pork?","author":"Gimli, Son of Gloin","img":"Gimli.jpg","class":"gimli"},{"quote":"Let us go through the mines of Moria. My cousin Balin will give us a ROYAL WELCOME.","author":"Gimli, Son of Gloin","img":"Gimli.jpg","class":"gimli"},{"quote":"Lovely big GOLDEN chips with a nice piece of fried fish.","author":"Samwise Gamgee, son of Hamfast (the \\"Gaffer\\")","img":"Sam.jpg","class":"sam"},{"quote":"PO-TA-TOES!? Mash \'em, boil \'em, stick \'em in a stew? ... You\'re \'opeless.","author":"Samwise Gamgee, son of Hamfast (the \\"Gaffer\\")","img":"Sam.jpg","class":"sam"}]')},15:function(e,t,a){e.exports=a(24)},20:function(e,t,a){},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(3),r=a.n(i),s=(a(20),a(9)),h=a(10),l=a(5),u=a(13),c=a(12),m=(a(21),a(11)),g=a(27),d=a(26),f=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={quote:"",author:"",img:"",class:"",appear:!0},e.handleClick=e.handleClick.bind(Object(l.a)(e)),e}return Object(h.a)(a,[{key:"handleClick",value:function(){var e=Math.floor(19*Math.random()),t=m;this.setState((function(a){return{quote:t[e].quote,author:t[e].author,img:t[e].img,class:t[e].class}}))}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleClick)}},{key:"render",value:function(){return n.a.createElement("div",{id:"quote-box",className:this.state.class},n.a.createElement("a",{id:"new-quote",className:"btn btn--white",onClick:this.handleClick},"New Quote"),n.a.createElement(g.a,{className:"img-container"},n.a.createElement(d.a,{key:this.state.quote,in:this.state.appear,appear:!0,timeout:1e3,classNames:"fade"},n.a.createElement("img",{src:"../Images/"+this.state.img,id:"img",className:"img",alt:this.state.img}))),n.a.createElement("p",{id:"text",className:"top-margin"},this.state.quote),n.a.createElement("p",{id:"author"},this.state.author),n.a.createElement("a",{id:"tweet-quote",className:"btn btn--primary btn--white",href:"twitter.com/intent/tweet"},"Tweet Quote"))}}]),a}(n.a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/LOTRQuote",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/LOTRQuote","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var o=a.headers.get("content-type");404===a.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.0f80b6de.chunk.js.map