define(function(require,exports,module){var f=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js");var e=function(h){return h instanceof f?h:f(h)};var b=function(i){var h;this.op=h=f.extend({forImgBoxEle:".wm_forimg_box",forImgBoxListEle:".wm_forimg_list",forImgItemEle:".for_img_item",forImgIndexsEle:".index_item",interval:3000},i);this.forImgBox=e(h.forImgBoxEle);this.forImgItem=this.forImgBox.find(h.forImgItemEle);this.forImgBoxList=this.forImgBox.find(h.forImgBoxListEle);this.indexs=this.forImgBox.find(h.forImgIndexsEle);this.prev=function(){};this.next=function(){};this.stop=function(){};this.automatic=function(){};this.setIndex=function(){}};var d=function(k){var i=this,o;b.apply(this,arguments);var n=false,h=false,m=k.direction;var l,j;l=function(p){var q=i.forImgBox.find(".curr");var r=q.index();q.removeClass("curr");if(p){r++;if(r>=i.indexs.length){r=0}}else{r--;if(r<0){r=i.indexs.length-1}}i.indexs.eq(r).addClass("curr")};j=function(){var p=f(this);i.forImgBoxList.append(p);if(m){p.css({height:i.Step})}else{p.css({width:i.Step})}i.forImgItem=i.forImgBox.find(i.op.forImgItemEle)};this.Step=k.Step||(m?this.forImgItem.eq(0).outerHeight():this.forImgItem.eq(0).outerWidth());this.forImgBox.css({position:"relative"});!m&&this.forImgBoxList.css({position:"absolute",width:i.Step*i.forImgItem.length});this.prev=function(q,r){var p;if(n){return}n=true;q=q||1;if(typeof q==="function"){r=q;q=1}while(q--){l(false);i.forImgItem=i.forImgBox.find(i.op.forImgItemEle);p=i.forImgItem.eq(i.forImgItem.length-1).css((m?"height":"width"),0);i.forImgBoxList.prepend(p);if(m){p.animate({height:i.Step},1000,function(){i.forImgItem=i.forImgBox.find(i.op.forImgItemEle);n=false;typeof r==="function"&&r.call(i)})}else{p.animate({width:i.Step},1000,function(){i.forImgItem=i.forImgBox.find(i.op.forImgItemEle);n=false;typeof r==="function"&&r.call(i)})}}};this.next=function(p,r){if(n){return}n=true;p=p||1;if(typeof p==="function"){r=p;p=1}for(var q=0;q<p;q++){l(true);if(m){i.forImgItem.eq(q).animate({height:0},1000,function(){j.call(this);n=false;typeof r==="function"&&r.call(i)})}else{i.forImgItem.eq(q).animate({width:0},1000,function(){j.call(this);n=false;typeof r==="function"&&r.call(i)})}}};this.stop=function(p){clearInterval(p||o)};this.automatic=function(p,q){if(h){return}h=true;i.forImgBox.hover(function(){i.stop(o)},function(){i.stop(o);o=setInterval(function(){p?i.next(q):i.prev(q)},i.op.interval)});o=setInterval(function(){p?i.next(q):i.prev(q)},i.op.interval)};this.setIndex=function(q){var r=e(q),s=i.forImgBox.find(".curr").index(),p;if(r.hasClass("curr")){return}p=s-r.index();if(p<0){i.next(Math.abs(p))}else{i.prev(p)}};typeof k.callback==="function"&&k.callback.call(this)};var c=function(k){var i=this,o;b.apply(this,arguments);var n=false,h=false,m=k.direction;var l,j;l=function(p){var q=i.forImgBox.find(".curr");var r=q.index();q.removeClass("curr");if(p){r++;if(r>=i.indexs.length){r=0}}else{r--;if(r<0){r=i.indexs.length-1}}i.indexs.eq(r).addClass("curr")};j=function(){var p=f(this);i.forImgBoxList.append(p);if(m){p.css({marginTop:0})}else{p.css({marginLeft:0})}i.forImgItem=i.forImgBox.find(i.op.forImgItemEle)};this.Step=k.Step||(m?this.forImgItem.eq(0).outerHeight():this.forImgItem.eq(0).outerWidth());this.forImgBox.css({position:"relative"});!m&&this.forImgBoxList.css({position:"absolute",width:i.Step*i.forImgItem.length});this.prev=function(q,r){var p;if(n){return}n=true;q=q||1;if(typeof q==="function"){r=q;q=1}while(q--){l(false);i.forImgItem=i.forImgBox.find(i.op.forImgItemEle);p=i.forImgItem.eq(i.forImgItem.length-1).css((m?"marginTop":"marginLeft"),-this.Step);i.forImgBoxList.prepend(p);if(m){p.animate({marginTop:0},1000,function(){i.forImgItem=i.forImgBox.find(i.op.forImgItemEle);n=false;typeof r==="function"&&r.call(i)})}else{p.animate({marginLeft:0},1000,function(){i.forImgItem=i.forImgBox.find(i.op.forImgItemEle);n=false;typeof r==="function"&&r.call(i)})}}};this.next=function(p,r){if(n){return}n=true;p=p||1;if(typeof p==="function"){r=p;p=1}for(var q=0;q<p;q++){l(true);if(m){i.forImgItem.eq(q).animate({marginTop:-i.Step},1000,function(){j.call(this);n=false;typeof r==="function"&&r.call(i)})}else{i.forImgItem.eq(q).animate({marginLeft:-i.Step},1000,function(){j.call(this);n=false;typeof r==="function"&&r.call(i)})}}};this.stop=function(p){clearInterval(p||o)};this.automatic=function(p,q){if(h){return}h=true;i.forImgBox.hover(function(){i.stop(o)},function(){i.stop(o);o=setInterval(function(){p?i.next(q):i.prev(q)},i.op.interval)});o=setInterval(function(){p?i.next(q):i.prev(q)},i.op.interval)};this.setIndex=function(q){var r=e(q),s=i.forImgBox.find(".curr").index(),p;if(r.hasClass("curr")){return}p=s-r.index();if(p<0){i.next(Math.abs(p))}else{i.prev(p)}};typeof k.callback==="function"&&k.callback.call(this)};var g=function(j){var i=this,l;b.apply(this,arguments);var k=false,h=false;this.forImgBox.css({position:"relative"});this.forImgBoxList.css({position:"relative"});this.forImgItem.css({position:"absolute",display:"none"});this.forImgItem.eq(0).css({display:"block"});this.prev=function(o){var n=this.forImgBox.find(i.op.forImgItemEle+":visible"),m;m=n.prev();i.setIndex(m.length?m:i.forImgItem.last(),o)};this.next=function(o){var n=this.forImgBox.find(i.op.forImgItemEle+":visible"),m;m=n.next();i.setIndex(m.length?m:i.forImgItem.first(),o)};this.stop=function(m){clearInterval(m||l)};this.automatic=function(m,n){if(h){return}h=true;i.forImgBox.hover(function(){i.stop(l)},function(){i.stop(l);l=setInterval(function(){m?i.next(n):i.prev(n)},i.op.interval)});l=setInterval(function(){m?i.next(n):i.prev(n)},i.op.interval)};this.setIndex=function(n,o){if(k){return}k=true;if(typeof n==="number"){n=this.forImgItem.eq(n)}var p=e(n),q=p.index();var m=this.forImgBox.find(this.op.forImgItemEle+":visible");this.indexs.removeClass("curr");this.indexs.eq(q).addClass("curr");m.fadeOut(500);i.forImgItem.eq(q).fadeIn(1000,function(){k=false;typeof o==="function"&&o.call(i,f(this))})};typeof j.callback==="function"&&j.callback.call(this)};var a=function(i){var r=this,o;if(!i.forData||i.forData.constructor!=Array||!i.forData.length){throw"forImg module interface parameters forData abnormal ChangeSise！"}var h=i.forData;b.apply(this,arguments);var m=false,l=false;this.forImgBox.css({position:"relative"});this.forImgBoxList.css({position:"relative"});var p=function(){q()};var n=this.forImgItem.length;var j=h.length;var k=parseInt(n/j)+(n%2?1:0);var q=function(s){if(m){return}m=true;r.forImgItem.each(function(){var u=f(this);var w=u.index()+1;var v=w;var t=h[w-1]||h[j-1];if(w>k){v=k-(w-k)}if(h[w-1]){v++}u.css({"z-index":v<=0?1:v,position:"absolute"});if(t.addClass){typeof t.addClass==="function"&&t.addClass.call(u);typeof t.addClass==="string"&&u.addClass(t.addClass)}u.stop().animate(f.extend({top:"50%",left:"50%"},t.style),r.animateOutTime||1000,function(){if(t.removeClass){typeof t.removeClass==="function"&&t.removeClass.call(u);typeof t.removeClass==="string"&&u.removeClass(t.removeClass)}typeof s==="function"&&s.call(r);m=false})})};this.prev=function(t){if(m){return}var s=h[j-1];r.forImgBoxList.append(r.forImgItem.eq(0));r.forImgItem=r.forImgBox.find(r.op.forImgItemEle);q(t)};this.next=function(t){if(m){return}var s=h[0];r.forImgBoxList.prepend(r.forImgItem.last());r.forImgItem=r.forImgBox.find(r.op.forImgItemEle);q(t)};this.stop=function(s){clearInterval(s||o)};this.automatic=function(s,t){if(l){return}l=true;r.forImgBox.hover(function(){r.stop(o)},function(){r.stop(o);o=setInterval(function(){s?r.next(t):r.prev(t)},r.op.interval)});o=setInterval(function(){s?r.next(t):r.prev(t)},r.op.interval)};typeof i.callback==="function"&&i.callback.call(this);p()};exports.Shuffle=d;exports.Slide=c;exports.Fade=g;exports.ChangeSise=a});