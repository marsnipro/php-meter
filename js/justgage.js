/**
 * JustGage - animated gauges using RaphaelJS
 * Check http://www.justgage.com for official releases
 * Licensed under MIT.
 * @author Bojan Djuricic (@Toorshia)
 **/
function kvLookup(a,b,c,d,e,f){var g=d,h=!1;if(null!==a&&void 0!==a&&(null!==c&&void 0!==c&&"object"==typeof c&&a in c?(g=c[a],h=!0):null!==b&&void 0!==b&&"object"==typeof b&&a in b?(g=b[a],h=!0):g=d,h===!0&&null!==e&&void 0!==e))switch(e){case"int":g=parseInt(g,10);break;case"float":g=parseFloat(g)}return g}function getColor(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,d=d||e.length>0;if(e.length>0)for(var t=0;t<e.length;t++)if(a>e[t].lo&&a<=e[t].hi)return e[t].color;if(f=c.length,1===f)return c[0];for(g=d?1/f:1/(f-1),h=[],t=0;t<c.length;t++)i=d?g*(t+1):g*t,j=parseInt(cutHex(c[t]).substring(0,2),16),k=parseInt(cutHex(c[t]).substring(2,4),16),l=parseInt(cutHex(c[t]).substring(4,6),16),h[t]={pct:i,color:{r:j,g:k,b:l}};if(0===b)return"rgb("+[h[0].color.r,h[0].color.g,h[0].color.b].join(",")+")";for(var u=0;u<h.length;u++)if(b<=h[u].pct)return d?"rgb("+[h[u].color.r,h[u].color.g,h[u].color.b].join(",")+")":(m=h[u-1],n=h[u],o=n.pct-m.pct,p=(b-m.pct)/o,q=1-p,r=p,s={r:Math.floor(m.color.r*q+n.color.r*r),g:Math.floor(m.color.g*q+n.color.g*r),b:Math.floor(m.color.b*q+n.color.b*r)},"rgb("+[s.r,s.g,s.b].join(",")+")")}function setDy(a,b,c){(!ie||ie>9)&&a.node.firstChild.attributes.dy&&(a.node.firstChild.attributes.dy.value=0)}function getRandomInt(a,b){return Math.floor(Math.random()*(b-a+1))+a}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}function humanFriendlyNumber(a,b){var c,d,e,f;for(c=Math.pow,d=c(10,b),e=7;e;)f=c(10,3*e--),f<=a&&(a=Math.round(a*d/f)/d+"KMGTPE"[e]);return a}function formatNumber(a){var b=a.toString().split(".");return b[0]=b[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),b.join(".")}function getStyle(a,b){var c="";return document.defaultView&&document.defaultView.getComputedStyle?c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]),c}function onCreateElementNsReady(a){void 0!==document.createElementNS?a():setTimeout(function(){onCreateElementNsReady(a)},100)}function extend(a){a=a||{};for(var b=1;b<arguments.length;b++)if(arguments[b])for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a}JustGage=function(a){var b=this;if(null===a||void 0===a)return console.log("* justgage: Make sure to pass options to the constructor!"),!1;var c;if(null!==a.id&&void 0!==a.id){if(c=document.getElementById(a.id),!c)return console.log("* justgage: No element with id : %s found",a.id),!1}else{if(null===a.parentNode||void 0===a.parentNode)return console.log("* justgage: Make sure to pass the existing element id or parentNode to the constructor."),!1;c=a.parentNode}var d=c.dataset?c.dataset:{},e=null!==a.defaults&&void 0!==a.defaults&&a.defaults;e!==!1&&(a=extend({},a,e),delete a.defaults),b.config={id:a.id,value:kvLookup("value",a,d,0,"float"),defaults:kvLookup("defaults",a,d,0,!1),parentNode:kvLookup("parentNode",a,d,null),width:kvLookup("width",a,d,null),height:kvLookup("height",a,d,null),title:kvLookup("title",a,d,""),titleFontColor:kvLookup("titleFontColor",a,d,"#999999"),titleFontFamily:kvLookup("titleFontFamily",a,d,"sans-serif"),titlePosition:kvLookup("titlePosition",a,d,"above"),valueFontColor:kvLookup("valueFontColor",a,d,"#010101"),valueFontFamily:kvLookup("valueFontFamily",a,d,"Arial"),symbol:kvLookup("symbol",a,d,""),min:kvLookup("min",a,d,0,"float"),max:kvLookup("max",a,d,100,"float"),reverse:kvLookup("reverse",a,d,!1),humanFriendlyDecimal:kvLookup("humanFriendlyDecimal",a,d,0),textRenderer:kvLookup("textRenderer",a,d,null),gaugeWidthScale:kvLookup("gaugeWidthScale",a,d,1),gaugeColor:kvLookup("gaugeColor",a,d,"#edebeb"),label:kvLookup("label",a,d,""),labelFontColor:kvLookup("labelFontColor",a,d,"#b3b3b3"),shadowOpacity:kvLookup("shadowOpacity",a,d,.2),shadowSize:kvLookup("shadowSize",a,d,5),shadowVerticalOffset:kvLookup("shadowVerticalOffset",a,d,3),levelColors:kvLookup("levelColors",a,d,["#a9d70b","#f9c802","#ff0000"],"array",","),startAnimationTime:kvLookup("startAnimationTime",a,d,700),startAnimationType:kvLookup("startAnimationType",a,d,">"),refreshAnimationTime:kvLookup("refreshAnimationTime",a,d,700),refreshAnimationType:kvLookup("refreshAnimationType",a,d,">"),donutStartAngle:kvLookup("donutStartAngle",a,d,90),valueMinFontSize:kvLookup("valueMinFontSize",a,d,16),titleMinFontSize:kvLookup("titleMinFontSize",a,d,10),labelMinFontSize:kvLookup("labelMinFontSize",a,d,10),minLabelMinFontSize:kvLookup("minLabelMinFontSize",a,d,10),maxLabelMinFontSize:kvLookup("maxLabelMinFontSize",a,d,10),hideValue:kvLookup("hideValue",a,d,!1),hideMinMax:kvLookup("hideMinMax",a,d,!1),hideInnerShadow:kvLookup("hideInnerShadow",a,d,!1),humanFriendly:kvLookup("humanFriendly",a,d,!1),noGradient:kvLookup("noGradient",a,d,!1),donut:kvLookup("donut",a,d,!1),relativeGaugeSize:kvLookup("relativeGaugeSize",a,d,!1),counter:kvLookup("counter",a,d,!1),decimals:kvLookup("decimals",a,d,0),customSectors:kvLookup("customSectors",a,d,[]),formatNumber:kvLookup("formatNumber",a,d,!1),pointer:kvLookup("pointer",a,d,!1),pointerOptions:kvLookup("pointerOptions",a,d,[])};var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A;b.config.value>b.config.max&&(b.config.value=b.config.max),b.config.value<b.config.min&&(b.config.value=b.config.min),b.originalValue=kvLookup("value",a,d,-1,"float"),null!==b.config.id&&null!==document.getElementById(b.config.id)?b.canvas=Raphael(b.config.id,"100%","100%"):null!==b.config.parentNode&&(b.canvas=Raphael(b.config.parentNode,"100%","100%")),b.config.relativeGaugeSize===!0&&b.canvas.setViewBox(0,0,200,150,!0),b.config.relativeGaugeSize===!0?(f=200,g=150):null!==b.config.width&&null!==b.config.height?(f=b.config.width,g=b.config.height):null!==b.config.parentNode?(b.canvas.setViewBox(0,0,200,150,!0),f=200,g=150):(f=1*getStyle(document.getElementById(b.config.id),"width").slice(0,-2),g=1*getStyle(document.getElementById(b.config.id),"height").slice(0,-2)),b.config.donut===!0?(f>g?(i=g,h=i):f<g?(h=f,i=h,i>g&&(j=i/g,i/=j,h=i/j)):(h=f,i=h),k=(f-h)/2,l=(g-i)/2,m=i/8>10?i/10:10,n=k+h/2,o=l+i/11,p=i/6.4>16?i/5.4:18,q=k+h/2,r=""!==b.config.label?l+i/1.85:l+i/1.7,s=i/16>10?i/16:10,t=k+h/2,u=r+s,v=i/16>10?i/16:10,w=k+h/10+h/6.666666666666667*b.config.gaugeWidthScale/2,x=u,y=i/16>10?i/16:10,z=k+h-h/10-h/6.666666666666667*b.config.gaugeWidthScale/2,A=u):(f>g?(i=g,h=1.25*i,h>f&&(j=h/f,h/=j,i/=j)):f<g?(h=f,i=h/1.25,i>g&&(j=i/g,i/=j,h=i/j)):(h=f,i=.75*h),k=(f-h)/2,l=(g-i)/2,"below"===b.config.titlePosition&&(l-=i/6.4),m=i/8>b.config.titleMinFontSize?i/10:b.config.titleMinFontSize,n=k+h/2,o=l+("below"===b.config.titlePosition?1.07*i:i/6.4),p=i/6.5>b.config.valueMinFontSize?i/6.5:b.config.valueMinFontSize,q=k+h/2,r=l+i/1.275,s=i/16>b.config.labelMinFontSize?i/16:b.config.labelMinFontSize,t=k+h/2,u=r+p/2+5,v=i/16>b.config.minLabelMinFontSize?i/16:b.config.minLabelMinFontSize,w=k+h/10+h/6.666666666666667*b.config.gaugeWidthScale/2,x=u,y=i/16>b.config.maxLabelMinFontSize?i/16:b.config.maxLabelMinFontSize,z=k+h-h/10-h/6.666666666666667*b.config.gaugeWidthScale/2,A=u),b.params={canvasW:f,canvasH:g,widgetW:h,widgetH:i,dx:k,dy:l,titleFontSize:m,titleX:n,titleY:o,valueFontSize:p,valueX:q,valueY:r,labelFontSize:s,labelX:t,labelY:u,minFontSize:v,minX:w,minY:x,maxFontSize:y,maxX:z,maxY:A},A=null,b.canvas.customAttributes.pki=function(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t;return i?(k=(1-2*(a-b)/(c-b))*Math.PI,l=d/2-d/7,m=l-d/6.666666666666667*h,n=d/2+f,o=e/1.95+g,p=d/2+f+l*Math.cos(k),q=e-(e-o)-l*Math.sin(k),r=d/2+f+m*Math.cos(k),s=e-(e-o)-m*Math.sin(k),t="M"+(n-m)+","+o+" ",t+="L"+(n-l)+","+o+" ",a>(c-b)/2&&(t+="A"+l+","+l+" 0 0 1 "+(n+l)+","+o+" "),t+="A"+l+","+l+" 0 0 1 "+p+","+q+" ",t+="L"+r+","+s+" ",a>(c-b)/2&&(t+="A"+m+","+m+" 0 0 0 "+(n+m)+","+o+" "),t+="A"+m+","+m+" 0 0 0 "+(n-m)+","+o+" ",t+="Z ",{path:t}):(k=(1-(a-b)/(c-b))*Math.PI,l=d/2-d/10,m=l-d/6.666666666666667*h,n=d/2+f,o=e/1.25+g,p=d/2+f+l*Math.cos(k),q=e-(e-o)-l*Math.sin(k),r=d/2+f+m*Math.cos(k),s=e-(e-o)-m*Math.sin(k),t="M"+(n-m)+","+o+" ",t+="L"+(n-l)+","+o+" ",t+="A"+l+","+l+" 0 0 1 "+p+","+q+" ",t+="L"+r+","+s+" ",t+="A"+m+","+m+" 0 0 0 "+(n-m)+","+o+" ",t+="Z ",{path:t})},b.canvas.customAttributes.ndl=function(a,c,d,e,f,g,h,i,j){var k=3.5*e/100,l=e/15,m=e/100;null!=b.config.pointerOptions.toplength&&void 0!=b.config.pointerOptions.toplength&&(k=b.config.pointerOptions.toplength),null!=b.config.pointerOptions.bottomlength&&void 0!=b.config.pointerOptions.bottomlength&&(l=b.config.pointerOptions.bottomlength),null!=b.config.pointerOptions.bottomwidth&&void 0!=b.config.pointerOptions.bottomwidth&&(m=b.config.pointerOptions.bottomwidth);var n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;return j?(n=(1-2*(a-c)/(d-c))*Math.PI,o=e/2-e/7,p=o-e/6.666666666666667*i,q=e/2+g,r=f/1.95+h,s=e/2+g+o*Math.cos(n),t=f-(f-r)-o*Math.sin(n),u=e/2+g+p*Math.cos(n),v=f-(f-r)-p*Math.sin(n),w=s+k*Math.cos(n),x=t-k*Math.sin(n),y=u-l*Math.cos(n),z=v+l*Math.sin(n),A=y+m*Math.sin(n),B=z+m*Math.cos(n),C=y-m*Math.sin(n),D=z-m*Math.cos(n),E="M"+A+","+B+" ",E+="L"+C+","+D+" ",E+="L"+w+","+x+" ",E+="Z ",{path:E}):(n=(1-(a-c)/(d-c))*Math.PI,o=e/2-e/10,p=o-e/6.666666666666667*i,q=e/2+g,r=f/1.25+h,s=e/2+g+o*Math.cos(n),t=f-(f-r)-o*Math.sin(n),u=e/2+g+p*Math.cos(n),v=f-(f-r)-p*Math.sin(n),w=s+k*Math.cos(n),x=t-k*Math.sin(n),y=u-l*Math.cos(n),z=v+l*Math.sin(n),A=y+m*Math.sin(n),B=z+m*Math.cos(n),C=y-m*Math.sin(n),D=z-m*Math.cos(n),E="M"+A+","+B+" ",E+="L"+C+","+D+" ",E+="L"+w+","+x+" ",E+="Z ",{path:E})},b.gauge=b.canvas.path().attr({stroke:"none",fill:b.config.gaugeColor,pki:[b.config.max,b.config.min,b.config.max,b.params.widgetW,b.params.widgetH,b.params.dx,b.params.dy,b.config.gaugeWidthScale,b.config.donut,b.config.reverse]}),b.level=b.canvas.path().attr({stroke:"none",fill:getColor(b.config.value,(b.config.value-b.config.min)/(b.config.max-b.config.min),b.config.levelColors,b.config.noGradient,b.config.customSectors),pki:[b.config.min,b.config.min,b.config.max,b.params.widgetW,b.params.widgetH,b.params.dx,b.params.dy,b.config.gaugeWidthScale,b.config.donut,b.config.reverse]}),b.config.donut&&b.level.transform("r"+b.config.donutStartAngle+", "+(b.params.widgetW/2+b.params.dx)+", "+(b.params.widgetH/1.95+b.params.dy)),b.config.pointer&&(b.needle=b.canvas.path().attr({stroke:null!==b.config.pointerOptions.stroke&&void 0!==b.config.pointerOptions.stroke?b.config.pointerOptions.stroke:"none","stroke-width":null!==b.config.pointerOptions.stroke_width&&void 0!==b.config.pointerOptions.stroke_width?b.config.pointerOptions.stroke_width:0,"stroke-linecap":null!==b.config.pointerOptions.stroke_linecap&&void 0!==b.config.pointerOptions.stroke_linecap?b.config.pointerOptions.stroke_linecap:"square",fill:null!==b.config.pointerOptions.color&&void 0!==b.config.pointerOptions.color?b.config.pointerOptions.color:"#000000",ndl:[b.config.min,b.config.min,b.config.max,b.params.widgetW,b.params.widgetH,b.params.dx,b.params.dy,b.config.gaugeWidthScale,b.config.donut]}),b.config.donut&&b.needle.transform("r"+b.config.donutStartAngle+", "+(b.params.widgetW/2+b.params.dx)+", "+(b.params.widgetH/1.95+b.params.dy))),b.txtTitle=b.canvas.text(b.params.titleX,b.params.titleY,b.config.title),b.txtTitle.attr({"font-size":b.params.titleFontSize,"font-weight":"bold","font-family":b.config.titleFontFamily,fill:b.config.titleFontColor,"fill-opacity":"1"}),setDy(b.txtTitle,b.params.titleFontSize,b.params.titleY),b.txtValue=b.canvas.text(b.params.valueX,b.params.valueY,0),b.txtValue.attr({"font-size":b.params.valueFontSize,"font-weight":"bold","font-family":b.config.valueFontFamily,fill:b.config.valueFontColor,"fill-opacity":"0"}),setDy(b.txtValue,b.params.valueFontSize,b.params.valueY),b.txtLabel=b.canvas.text(b.params.labelX,b.params.labelY,b.config.label),b.txtLabel.attr({"font-size":b.params.labelFontSize,"font-weight":"normal","font-family":"Arial",fill:b.config.labelFontColor,"fill-opacity":"0"}),setDy(b.txtLabel,b.params.labelFontSize,b.params.labelY);var B=b.config.min;b.config.reverse&&(B=b.config.max),b.txtMinimum=B,b.config.humanFriendly?b.txtMinimum=humanFriendlyNumber(B,b.config.humanFriendlyDecimal):b.config.formatNumber&&(b.txtMinimum=formatNumber(B)),b.txtMin=b.canvas.text(b.params.minX,b.params.minY,b.txtMinimum),b.txtMin.attr({"font-size":b.params.minFontSize,"font-weight":"normal","font-family":"Arial",fill:b.config.labelFontColor,"fill-opacity":b.config.hideMinMax||b.config.donut?"0":"1"}),setDy(b.txtMin,b.params.minFontSize,b.params.minY);var C=b.config.max;b.config.reverse&&(C=b.config.min),b.txtMaximum=C,b.config.humanFriendly?b.txtMaximum=humanFriendlyNumber(C,b.config.humanFriendlyDecimal):b.config.formatNumber&&(b.txtMaximum=formatNumber(C)),b.txtMax=b.canvas.text(b.params.maxX,b.params.maxY,b.txtMaximum),b.txtMax.attr({"font-size":b.params.maxFontSize,"font-weight":"normal","font-family":"Arial",fill:b.config.labelFontColor,"fill-opacity":b.config.hideMinMax||b.config.donut?"0":"1"}),setDy(b.txtMax,b.params.maxFontSize,b.params.maxY);var D=b.canvas.canvas.childNodes[1],E="http://www.w3.org/2000/svg";"undefined"!==ie&&ie<9||("undefined"!==ie?onCreateElementNsReady(function(){b.generateShadow(E,D)}):b.generateShadow(E,D)),E=null,b.config.textRenderer?b.originalValue=b.config.textRenderer(b.originalValue):b.config.humanFriendly?b.originalValue=humanFriendlyNumber(b.originalValue,b.config.humanFriendlyDecimal)+b.config.symbol:b.config.formatNumber?b.originalValue=formatNumber(b.originalValue)+b.config.symbol:b.originalValue=(1*b.originalValue).toFixed(b.config.decimals)+b.config.symbol,b.config.counter===!0?(eve.on("raphael.anim.frame."+b.level.id,function(){var a=b.level.attr("pki")[0];b.config.reverse&&(a=1*b.config.max+1*b.config.min-1*b.level.attr("pki")[0]),b.config.textRenderer?b.txtValue.attr("text",b.config.textRenderer(Math.floor(a))):b.config.humanFriendly?b.txtValue.attr("text",humanFriendlyNumber(Math.floor(a),b.config.humanFriendlyDecimal)+b.config.symbol):b.config.formatNumber?b.txtValue.attr("text",formatNumber(Math.floor(a))+b.config.symbol):b.txtValue.attr("text",(1*a).toFixed(b.config.decimals)+b.config.symbol),setDy(b.txtValue,b.params.valueFontSize,b.params.valueY),a=null}),eve.on("raphael.anim.finish."+b.level.id,function(){b.txtValue.attr({text:b.originalValue}),setDy(b.txtValue,b.params.valueFontSize,b.params.valueY)})):eve.on("raphael.anim.start."+b.level.id,function(){b.txtValue.attr({text:b.originalValue}),setDy(b.txtValue,b.params.valueFontSize,b.params.valueY)});var F=b.config.value;b.config.reverse&&(F=1*b.config.max+1*b.config.min-1*b.config.value),b.level.animate({pki:[F,b.config.min,b.config.max,b.params.widgetW,b.params.widgetH,b.params.dx,b.params.dy,b.config.gaugeWidthScale,b.config.donut,b.config.reverse]},b.config.startAnimationTime,b.config.startAnimationType),b.config.pointer&&b.needle.animate({ndl:[F,b.config.min,b.config.max,b.params.widgetW,b.params.widgetH,b.params.dx,b.params.dy,b.config.gaugeWidthScale,b.config.donut]},b.config.startAnimationTime,b.config.startAnimationType),b.txtValue.animate({"fill-opacity":b.config.hideValue?"0":"1"},b.config.startAnimationTime,b.config.startAnimationType),b.txtLabel.animate({"fill-opacity":"1"},b.config.startAnimationTime,b.config.startAnimationType)},JustGage.prototype.refresh=function(a,b){var d,e,c=this,b=b||null;null!==b&&(c.config.max=b,c.txtMaximum=c.config.max,c.config.humanFriendly?c.txtMaximum=humanFriendlyNumber(c.config.max,c.config.humanFriendlyDecimal):c.config.formatNumber&&(c.txtMaximum=formatNumber(c.config.max)),c.config.reverse?(c.txtMin.attr({text:c.txtMaximum}),setDy(c.txtMin,c.params.minFontSize,c.params.minY)):(c.txtMax.attr({text:c.txtMaximum}),setDy(c.txtMax,c.params.maxFontSize,c.params.maxY))),d=a,1*a>1*c.config.max&&(a=1*c.config.max),1*a<1*c.config.min&&(a=1*c.config.min),e=getColor(a,(a-c.config.min)/(c.config.max-c.config.min),c.config.levelColors,c.config.noGradient,c.config.customSectors),d=c.config.textRenderer?c.config.textRenderer(d):c.config.humanFriendly?humanFriendlyNumber(d,c.config.humanFriendlyDecimal)+c.config.symbol:c.config.formatNumber?formatNumber((1*d).toFixed(c.config.decimals))+c.config.symbol:(1*d).toFixed(c.config.decimals)+c.config.symbol,c.originalValue=d,c.config.value=1*a,c.config.counter||(c.txtValue.attr({text:d}),setDy(c.txtValue,c.params.valueFontSize,c.params.valueY));var f=c.config.value;c.config.reverse&&(f=1*c.config.max+1*c.config.min-1*c.config.value),c.level.animate({pki:[f,c.config.min,c.config.max,c.params.widgetW,c.params.widgetH,c.params.dx,c.params.dy,c.config.gaugeWidthScale,c.config.donut,c.config.reverse],fill:e},c.config.refreshAnimationTime,c.config.refreshAnimationType),c.config.pointer&&c.needle.animate({ndl:[f,c.config.min,c.config.max,c.params.widgetW,c.params.widgetH,c.params.dx,c.params.dy,c.config.gaugeWidthScale,c.config.donut]},c.config.refreshAnimationTime,c.config.refreshAnimationType),b=null},JustGage.prototype.generateShadow=function(a,b){var e,f,g,h,i,j,k,c=this,d="inner-shadow-"+c.config.id;e=document.createElementNS(a,"filter"),e.setAttribute("id",d),b.appendChild(e),f=document.createElementNS(a,"feOffset"),f.setAttribute("dx",0),f.setAttribute("dy",c.config.shadowVerticalOffset),e.appendChild(f),g=document.createElementNS(a,"feGaussianBlur"),g.setAttribute("result","offset-blur"),g.setAttribute("stdDeviation",c.config.shadowSize),e.appendChild(g),h=document.createElementNS(a,"feComposite"),h.setAttribute("operator","out"),h.setAttribute("in","SourceGraphic"),h.setAttribute("in2","offset-blur"),h.setAttribute("result","inverse"),e.appendChild(h),i=document.createElementNS(a,"feFlood"),i.setAttribute("flood-color","black"),i.setAttribute("flood-opacity",c.config.shadowOpacity),i.setAttribute("result","color"),e.appendChild(i),j=document.createElementNS(a,"feComposite"),j.setAttribute("operator","in"),j.setAttribute("in","color"),j.setAttribute("in2","inverse"),j.setAttribute("result","shadow"),e.appendChild(j),k=document.createElementNS(a,"feComposite"),k.setAttribute("operator","over"),k.setAttribute("in","shadow"),k.setAttribute("in2","SourceGraphic"),e.appendChild(k),c.config.hideInnerShadow||(c.canvas.canvas.childNodes[2].setAttribute("filter","url(#"+d+")"),c.canvas.canvas.childNodes[3].setAttribute("filter","url(#"+d+")")),k=null};var ie=function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}();
