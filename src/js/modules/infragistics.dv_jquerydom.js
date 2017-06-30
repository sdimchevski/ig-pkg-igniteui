﻿/*!@license
* Infragistics.Web.ClientUI infragistics.dv_jquerydom.js 17.1.20171.1019
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$ag=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$1=$.ig.globalDefs.$$1;$$w=$.ig.globalDefs.$$w;$$6=$.ig.globalDefs.$$6;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["JQueryDomRenderer:a","JQueryDomWrapper:b"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t;$c("JQueryDomRenderer:a","Object",{init:function(a){this.b=new $$4.z($$1.$b.$type);$.ig.$op.init.call(this);this.c=a;this.htmlTest(/^[^<]*(<[\w\W]+>)[^>]*$/);$$t.$a.a=document.createElement("div").textContent!==undefined},c:null,rootWrapper:function(){return this.c},append:function(a){this.c.append(a);return this},appendToBody:function(a){$(document.body).append($(a.getNativeElement()))},createElement:function(a){var b=document.createElement(a);var c=$(b);var d=new $$t.b(b,c);return d},b:null,endCSSQuery:function(){if(this.b.count()>0){var a=this.b.pop();a.remove()}},_htmlTest:null,htmlTest:function(a){if(arguments.length===1){this._htmlTest=a;return a}else{return this._htmlTest}},expandTemplate:function(template_,args_){var expanded_=$.ig.tmpl(template_,args_).toString();if(!this.htmlTest().test(expanded_)){expanded_="<span>"+expanded_+"</span>"}var a=$(expanded_);var b=new $$t.b(a[0],a);return b},get2DCanvasContext:function(a){var b=a.getNativeElement();return b.getContext("2d")},getCssDefaultPropertyValue:function(a,b){return $.ig.CssHelper.prototype.getPropertyValue1(this.b.peek(),a,b)},getCssDefaultValuesForClassCollection:function(a,b){var c=new $$4.w(String,0);for(var d=0;d<b.length;d++){c.add(b[d])}var e=$.ig.CssHelper.prototype.getValuesForClassCollection(this.b.peek(),a,c);var f=new Array(e.count());for(var g=0;g<e.count();g++){f[g]=new Array(e.__inner[g].count());for(var h=0;h<e.__inner[g].count();h++){f[g][h]=e.__inner[g].__inner[h]}}return f},getHeightForFontString:function(a,b,c){this.startCSSQuery();this.b.peek().setStyleProperty("font",a);var span_=$("<span></span>");var d=new $$t.b(span_[0],span_);this.b.peek().append(d);d.setText(b);var e;if(c){var f=span_[0].offsetHeight;e=f}else{e=span_.height()}this.endCSSQuery();return Math.round(e)},getSubRenderer:function(a){return new $$t.a(a)},globalListen:function(a,b,c){var d=null;if(a=="window"){d=$(window)}if(d!=null){var e=function(f){c(f)};d.bind(b,e);var f=null;f=function(){d.unbind(b,e);e=null};return f}return function(){}},hasBody:function(){return true},hasWindow:function(){return true},setCssQueryFontString:function(a){this.b.peek().setStyleProperty("font",a)},startCSSQuery:function(){this.b.push($.ig.CssHelper.prototype.getDisoveryElement(this));this.c.append(this.b.peek())},supportsDOMEvents:function(){return true},$type:new $.ig.Type("JQueryDomRenderer",$.ig.$ot,[$$1.$a.$type])},true);$c("JQueryDomWrapper:b","Object",{c:null,e:null,init:function(a,b){this.b=new $$4.w($$0.$c.$type,0);$.ig.$op.init.call(this);this.a=$$t.$a.a;this.c=a;this.e=b},addClass:function(a){this.e.addClass(a);return this},d:function(child_){if(child_.getNativeElement===undefined){return $(child_)[0]}return child_.getNativeElement()},append:function(a){this.e.append($(this.d(a)));return this},getAttribute:function(a){return this.e.attr(a)},setAttribute:function(a,b){this.e.attr(a,b);return this},before:function(a){this.e.before($(this.d(a)));return this},clone:function(){var a=this.e.clone();var b=new $$t.b(a[0],a);return b},getStyleProperty:function(a){return this.e.css(a)},setStyleProperty:function(a,b){this.e.css(a,b);return this},findByClass:function(a){var b=this.e.find(a);var c=new Array(b.length);for(var d=0;d<b.length;d++){var e=b[d];var f=$(e);c[d]=new $$t.b(e,f)}return c},focus:function(){this.e.focus()},getChildAt:function(a){var b=this.e.children().eq(a);var c=new $$t.b(b[0],b);return c},getChildCount:function(){return this.e.children().length},getNativeElement:function(){return this.c},height:function(){return this.e.height()},hide:function(){this.e.hide();return this},b:null,a:false,listen:function(a,b){var $self=this;var c=function(d){b(d)};this.e.bind(a,c);var d=null;d=function(){if($self.b.contains(d)){$self.b.remove(d)}$self.e.unbind(a,c);c=null};this.b.add(d);return d},getOffset:function(){return this.e.offset()},setOffset:function(x_,y_){var native_=this.e;var a=native_.offset!==undefined;if(a){native_.offset({top:y_,left:x_})}return this},outerHeight:function(){return this.e.outerHeight()},outerHeightWithMargin:function(){return this.e.outerHeight(true)},outerWidth:function(){return this.e.outerWidth()},outerWidthWithMargin:function(){return this.e.outerWidth(true)},getProperty:function(a){return this.e.prop(a)},setProperty:function(a,b){this.e.prop(a,b);return this},remove:function(){this.e.remove();return this},removeChild:function(a){$(a.getNativeElement()).remove();return this},removeChildren:function(){this.e.children().remove()},removeClass:function(a){this.e.removeClass(a);return this},setRawStyleProperty:function(propertyName_,value_){var ele_=this.c;ele_.style[propertyName_]=value_;return this},setRawXPosition:function(a){var ele_=this.c;ele_.style.left=a+"px";return this},setRawYPosition:function(a){var ele_=this.c;ele_.style.top=a+"px";return this},setRawPosition:function(a,b){var ele_=this.c;ele_.style.left=a+"px";ele_.style.top=b+"px";return this},setRawSize:function(a,b){var ele_=this.c;ele_.style.width=a+"px";ele_.style.height=b+"px";return this},show:function(){this.e.show();return this},getText:function(){return this.e.text()},setText:function(value_){if(this.a){var ele_=this.c;ele_.textContent=value_}else{this.e.text(value_)}return this},unlistenAll:function(){var a=new $$4.w($$0.$c.$type,1,this.b);for(var b=0;b<a.count();b++){a.__inner[b]()}this.b.clear();return},width:function(){return this.e.width()},$type:new $.ig.Type("JQueryDomWrapper",$.ig.$ot,[$$1.$b.$type])},true);$$t.$a.a=false});