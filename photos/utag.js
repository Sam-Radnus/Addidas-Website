//tealium universal tag - utag.416 ut4.0.202108230852, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(typeof window[window.gtagRename]==="function"){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0){return true;}}
window.dataLayer=window.dataLayer||[];window[window.gtagRename]=function(){dataLayer.push(arguments);};var cross_track_domains="sgiftcard.com,sgiftcard.eu,adidasrunners.adidas.com,cfg.adidas.com,aura-eu.adidas.com,dev-adidasrunners.adidas.com,m.adidas.com,preview.adidas.com,qa-adidasrunners.adidas.com,signup.adidas.com,staging.adidas.com,update.adidas.com,development.adidas.com,mena.adidas.com,www.adidas.com";if(cross_track_domains!==""){window[window.gtagRename]("set","linker",{domains:cross_track_domains.split(","),accept_incoming:true});}
window[window.gtagRename]("js",new Date());};u.initialized=u.hasgtagjs();u.scriptrequested=false;u.queue=[];u.o=window[window.gtagRename];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}return true;};u.map={"analytics_pagename":"custom.u1","product_quantity":"custom.u2","product_gender":"custom.u3","product_sport":"custom.u4","_cpromo":"custom.u5","product_color":"custom.u6","product_model_id_first":"custom.u7","product_group":"custom.u8","product_brand":"custom.u9","product_size":"custom.u10","mobile_transactions":"custom.u11","mobile_items_sold":"custom.u12","order_total":"custom.u13","is_customizable":"custom.u14","total_products":"custom.u15","product_category":"custom.u16","product_model_id":"custom.u17","product_price":"custom.u18","product_id":"custom.u19","euci":"custom.u20","product_price_type":"custom.u21","customer_order_history_status":"custom.u22","product_line_style":"custom.u23","cp.utag_main_ab_dc":"custom.u25","product_original_price":"custom.u26","product_campaign_ids":"custom.u27","product_name":"custom.u28","new_existing_purchaser":"custom.u29","geo_country":"custom.u30","new_repeat":"custom.u31","product_prorated_discount":"custom.u32","cp.criteo_segment":"custom.u99","dfa_cat":"activity","dfa_type":"activity_group","dfa_src":"advertiser_id","dfa_event:conversion":"conversion","dfa_event:purchase":"purchase","dfa_counting_method":"counting_method","partnerize_clickref":"custom.u33","gift_card_order_total":"custom.u34","membership_tier":"custom.u35","membership_points":"custom.u36","order_id":"custom.u37"};u.extend=[function(a,b,c,d,e,f,g){if(1){d=b['country'];if(typeof d=='undefined')return;c=[{'AR':'4199805'},{'AT':'3644951'},{'AU':'5567407'},{'BE':'3645490'},{'BR':'5416712'},{'CA':'4113179'},{'CH':'4599597'},{'CL':'4113246'},{'CO':'4173866'},{'CZ':'4025150'},{'DE':'3468464'},{'DK':'3654592'},{'ES':'3463728'},{'FI':'3654593'},{'FR':'2893248'},{'GR':'4924007'},{'IE':'3644952'},{'ID':'4945219'},{'IT':'3463777'},{'JP':'5922966'},{'MX':'4199810'},{'MY':'4943821'},{'NL':'3468466'},{'NO':'5995658'},{'NZ':'5570603'},{'PE':'4199792'},{'PH':'4944620'},{'PL':'4025149'},{'PT':'4942451'},{'RU':'4311550'},{'SE':'3654590'},{'SG':'4944619'},{'SK':'4025151'},{'TH':'4943873'},{'TR':'4380488'},{'UK':'3226898'},{'US':'4599367'},{'ZA':'5256560'},{'KR':'6900637'},{'HK':'2773506'},{'VN':'4944769'},{'IN':'11132604'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['dfa_src']=c[e][f];m=true};};if(m)break};if(!m)b['dfa_src']='';}},function(a,b,c,d,e,f,g){if(1){d=b['page_type'];if(typeof d=='undefined')return;c=[{'HOME':'landing'},{'CLP':'landing'},{'SLP':'landing'},{'PLP':'products'},{'PDP':'products'},{'CART':'sales'},{'CHECKOUT':'trnsctn'},{'CUSTOMER SERVICE':'signup'},{'RELEASE CALENDAR':'landing'},{'MICROSITE':'landing'},{'GIFT CARD':'trnsctn'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['dfa_type']=c[e][f];m=true};};if(m)break};if(!m)b['dfa_type']='';}},function(a,b,c,d,e,f,g){if(1){d=b['page_type'];if(typeof d=='undefined')return;c=[{'HOME':'home'},{'CLP':'catgry'},{'SLP':'catgry'},{'PLP':'prdlst'},{'PDP':'prddtl'},{'CART':'basket'},{'CHECKOUT':'sale'},{'RELEASE CALENDAR':'catgry'},{'MICROSITE':'catgry'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['dfa_cat']=c[e][f];m=true};};if(m)break};if(!m)b['dfa_cat']='';}},function(a,b){try{if(b['page_owner'].toString().toLowerCase()=='BRAND'.toLowerCase()||b['is_new_landing_page']=='true'){b['dfa_cat']='camplp';b['dfa_type']='landing'}}catch(e){utag.DB(e);}},function(a,b){try{if((b['page_name'].toString().toLowerCase()=='EMAIL SIGNUP'.toLowerCase()&&b['signup_step'].toString().toLowerCase()=='START'.toLowerCase())){b['dfa_cat']='newslett'}}catch(e){utag.DB(e);}},function(a,b){try{if((b['page_name'].toString().toLowerCase()=='EMAIL SIGNUP'.toLowerCase()&&b['signup_step'].toString().toLowerCase()=='SUCCESS'.toLowerCase())){b['dfa_cat']='newscomp'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['is_customizable']!='undefined'&&b['is_customizable'].toString().toLowerCase()=='TRUE'.toLowerCase())){b['is_customizable']='1'}}catch(e){utag.DB(e);}},function(a,b){if(!(b.page_type=='SHOPPING CART'||b.page_type=='PDP'||b.order_id||(b.event_category=='PLC'&&b.signup_step))){b.product_id=b.product_model_id=[];}
if(!b.product_gender||(Array.isArray(b.product_gender)&&b.product_gender.length==0)){b.product_gender=[b.filter_gender||''];}else{b.filter_gender=b.product_gender[0];}
if(!b.product_category||(Array.isArray(b.product_category)&&b.product_category.length==0)){b.product_category=[b.filter_category||''];}else{b.filter_category=b.product_category[0];}
if(!b.product_sport||(Array.isArray(b.product_sport)&&b.product_sport.length==0)){b.product_sport=[b.filter_sport||''];}else{b.filter_sport=b.product_sport[0];}
if(!b.product_brand||(Array.isArray(b.product_brand)&&b.product_brand.length==0)){b.product_brand=[b.filter_brand||''];}else{b.filter_brand=b.product_brand[0];}
if(Array.isArray(b.product_model_id)){b.product_model_id_first=b.product_model_id[0];}
if(!b.product_line_style||(Array.isArray(b.product_line_style)&&b.product_line_style.length==0)){b.product_line_style=[b.filter_product_line_style||''];}},function(a,b){u.ev.link=1;if((b.campaign_name||a=='link')&&(b.event_category||b.event_name)){b.dfa_type=b.dfa_cat='';if((b.event_name=='EMAIL SIGNUP'||b.event_category=='EMAIL SIGNUP'||(b.event_name&&b.event_name.indexOf('SET REMINDER EMAIL')>-1))&&b.signup_step&&(b.signup_step=='SUCCESS'||b.signup_step=='REPEAT')){b.dfa_type='leadgen';b.dfa_cat='ldsignup';b.is_customizable=(b.signup_step=='REPEAT'?'1':'0');}else if((b.event_name=='EMAIL SIGNUP'||b.event_category=='EMAIL SIGNUP'||(b.event_name&&b.event_name.indexOf('SET REMINDER EMAIL')>-1))&&b.signup_step&&b.signup_step=='START'){b.dfa_type='landing';b.dfa_cat='ldsignup';}else if(b['event_category']=='ACCOUNT CREATION'){b.dfa_type='membe0';b.dfa_cat=b.event_name=='START'?'perfo00':'perfo0';}
if(!(b.dfa_src&&b.dfa_type&&b.dfa_cat)){return false;}}else if(b.event||b.current_filter||b.clicked_element||b.page_name=='MINICART'){return false;}},function(a,b){try{if(1){if(b.page_type&&b.page_type=='GIFT CARD'){if(b.region&&b.region=='eu'){b.dfa_cat='perfo0';}else if(b.region){b.dfa_cat='giftca';}
if(b.page_name&&b.page_name=='GIFT CARD CHECKOUT COMPLETE'&&b.gift_card_order_id){b.dfa_type='trnsctn';b.order_id=b._corder=b.gift_card_order_id;b.order_total=b._ctotal=b.gift_card_order_total;b.order_subtotal=b.gift_card_order_total;var quantity=[b.gift_card_order_quantity];b.product_quantity=b._cquan=quantity;b.total_products=quantity;if(b.is_mobile=="TRUE"){b.mobile_transactions="1";b.mobile_items_sold=quantity;}}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['dfa_src']='DC-'+b.dfa_src}catch(e){};try{b['dfa_event']=b.order_id?'purchase':'conversion'}catch(e){};try{b['dfa_counting_method']=b.order_id?'transactions':'unique'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(a=='link'&&b.bv_event){return false;}}}catch(e){utag.DB(e)}}];u.loader_cb=function(a,b){utag.DB("send:416:CALLBACK");u.initialized=true;var i,j,_event,p,key;for(i=0;i<u.data.advertiser_id.length;i++){u.o("config",u.data.advertiser_id[i]);}
if(u.data.order_id){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="purchase"){p=true;}}
if(!p){u.data.event.push("purchase");}}
var total_qty=0;if(typeof(u.data.product_quantity)==="number"){total_qty=u.data.product_quantity;}else if(u.data.product_quantity.length===1){total_qty=u.data.product_quantity[0];}else if(u.data.product_quantity.length>1){for(i=0;i<u.data.product_quantity.length;i++){total_qty+=parseInt(u.data.product_quantity[i],10);}}else if(total_qty==0){total_qty=1;}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];for(j=0;j<u.data.advertiser_id.length;j++){var eventIdData={};if(u.data.custom_scripts==="true"||u.data.custom_scripts){eventIdData.allow_custom_scripts=true;}else if(u.data.custom_scripts==="false"||!u.data.custom_scripts){eventIdData.allow_custom_scripts=false;}
if(u.data.session_id.length===1&&u.data.session_id[0]!==""){eventIdData.session_id=u.data.session_id[0];}else if(u.data.session_id[j]!==""){eventIdData.session_id=u.data.session_id[j];}
if(u.data.order_total){eventIdData.value=u.data.order_total;eventIdData.transaction_id=u.data.order_id;eventIdData.language=(b.language||'').toLowerCase();eventIdData.country=(b.country||'').toLowerCase();eventIdData.items=[];for(var i=0;i<u.data.product_id.length;i++){var cur_item={};cur_item.id=u.data.product_id[i];cur_item.price=u.data.product_price[i];cur_item.quantity=u.data.product_quantity[i];eventIdData.items.push(cur_item);}}
if(u.data.product_quantity){eventIdData.quantity=total_qty;}
for(key in u.data.custom){eventIdData[key]=u.data.custom[key];}
if(!u.isEmptyObject(u.data.dc_custom_params)){eventIdData.dc_custom_params={};for(key in u.data.dc_custom_params){eventIdData.dc_custom_params[key]=u.data.dc_custom_params[key];}}
eventIdData.send_to=u.data.advertiser_id[j]+"/"+u.data.activity_group[j]+"/"+u.data.activity[j]+"+"+u.data.counting_method[j];if(_event==="purchase"){u.o("event","purchase",eventIdData);}
if(_event==="conversion"){u.o("event","conversion",eventIdData);}}}
utag.DB("send:416:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b);}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:416");utag.DB(b);var d,e,f,h;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js","advertiser_id":"","activity_group":"","activity":"","counting_method":"","custom_scripts":"true","session_id":"","product_quantity":[],"dc_custom_params":{},"event_name":"","event":[],"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};utag.DB("send:416:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:416:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.product_id=u.data.product_id||b._cprod||"";u.data.product_price=u.data.product_price||b._cprice||"";if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof(u.data.advertiser_id)==="string"){u.data.advertiser_id=u.data.advertiser_id.split(",");}
if(typeof(u.data.activity_group)==="string"){u.data.activity_group=u.data.activity_group.split(",");}
if(typeof(u.data.activity)==="string"){u.data.activity=u.data.activity.split(",");}
if(typeof(u.data.counting_method)==="string"){u.data.counting_method=u.data.counting_method.split(",");}
if(typeof(u.data.session_id)==="string"){u.data.session_id=u.data.session_id.split(",");}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.data.base_url+="?id="+(u.data.advertiser_id[0]);if(u.initialized){u.loader_cb(a,b);}else{u.queue.push({"data":u.data,"a":a,"b":b});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_416","attrs":{}});}}
utag.DB("send:416:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("416","adidas.adidasglobal"));}catch(error){utag.DB(error);}
