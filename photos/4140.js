(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4140],{37655:(d,A,s)=>{"use strict";s.d(A,{t1:()=>C,Ug:()=>e,S_:()=>h});var y=s(76449),i=s.n(y);const C=(u,l)=>l.CHECKOUT_PAGES_ENABLED?(0,y.getUrlWithPossibleSitePath)(u,u.cartUrl):u.showShoppingBagUrl,e=(u,l)=>l.CHECKOUT_PAGES_ENABLED?(0,y.getUrlWithPossibleSitePath)(u,u.deliveryUrl):u.checkoutUrl,h=u=>(0,y.getUrlWithPossibleSitePath)(u,u.onePageCheckoutUrl)},29879:(d,A,s)=>{"use strict";s.d(A,{Z:()=>f});var y=s(86493),i=s.n(y),C=s(276),e=s(39447),h=s(68435),u=s(72228);const f=({gdprConsentOptionsOpener:Z,itemStyles:b=""})=>{const T=(0,u.T_)(),O=(0,C.I0)(),{COOKIE_CONSENT_GEO_LOC_ENABLED:g,CCPA_COOKIE_CONSENT_ENABLED:D,GDPR_DATA_SETTINGS_ENABLED:L}=(0,u.hz)(),$=(0,C.oR)().getState(),F=g&&(0,h.wp)($),Y=g&&(0,h.W_)($),K=F||Y,H=(0,u.dG)();return i().createElement(i().Fragment,null,K&&i().createElement("li",{className:b},i().createElement("a",{"data-auto-id":"checkout-footer-gdpr-consent-options",onClick:()=>O((0,e.IU)(Z))},T("footer.links.cookieSettings"))),D&&i().createElement(i().Fragment,null,i().createElement("li",{className:b},i().createElement("a",{"data-auto-id":"checkout-footer-ccpa-data-settings",onClick:()=>O((0,e.rd)())},T("cookieconsent.ccpa.dataSettings"))),i().createElement("li",{className:b},i().createElement("a",{"data-auto-id":"checkout-footer-ccpa-do-not-sell-info",onClick:()=>O((0,e.rd)())},T("cookieconsent.ccpa.doNotSellInfo")))),L&&i().createElement("li",{className:b},i().createElement("a",{"data-auto-id":"checkout-footer-gdpr-data-settings",onClick:()=>{!H()&&O((0,e.Z6)())}},T("cookieconsent.ccpa.dataSettings"))))}},64140:(d,A,s)=>{"use strict";s.d(A,{Z:()=>Ut});var y=s(47166),i=s.n(y),C=s(86493),e=s.n(C),h=s(68435),u=s(93357),l=s(72228),f=s(22430),Z=s(95425),b=s(21232),T=s(14890),O=s(39447),g=s(276),D=s(84184),L=s(17574),$=s(501),F=s.n($);const K=()=>{const t=(0,l.T_)(),{open:o}=(0,g.v9)(D.FtS),n=(0,g.I0)(),{domain:r}=(0,l.ZR)(),{isMobile:a}=(0,l.Fy)(),c=a?"mobile":"desktop",_=()=>{n((0,O.bM)(h.Nj)),n((0,O.L$)())},m=()=>{n((0,O.IU)(h.uf.CONSENT_BAR))};return o?e().createElement("div",{className:`${F().cookie_consent_bar} ${F()[`theme-${r}`]} gl-label--l`},e().createElement("div",{className:"gl-flex-display gl-flex-row gl-flex-justify-content-center"},e().createElement("div",null,e().createElement("span",{className:F().set_cookie_preference_message},t(`cookieConsentBar.message.${c}`)),e().createElement(L.Z,{className:F().set_cookie_preference_button,variant:"tertiary",onClick:m,"data-auto-id":"glass-cookie-consent-more-button"},t(`cookieConsentBar.button.${c}`))),e().createElement(L.Z,{icon:"close",className:`gl-modal__close ${F().close_button}`,onClick:_,"data-auto-id":"glass-cookie-consent-close-button"}))):null};var H=s(79016),q=s(2103),Ne=s(93718),be=s(63258),Q=s.n(be);const ee=i().bind(Q()),Oe=()=>{const{content:{content:t}={}}=(0,l.XQ)("fetch-footer");return e().createElement("div",{dangerouslySetInnerHTML:{__html:t}})},Ce=()=>e().createElement("div",{className:ee("footer_content")},e().createElement(Oe,null)),ye=()=>{const{content:{copy:t}={}}=(0,l.XQ)("fetch-footer");return e().createElement("div",{id:"__glass-footer__dw_footer_content",className:ee("inline_link_list"),dangerouslySetInnerHTML:{__html:t}})};var te=s(29879),oe=s(49545),w=s(76449),Pe=s(75885),ne=s.n(Pe);const se=()=>{const t=(0,l.T_)(),{isMobile:o}=(0,l.Fy)(),n=(0,l.ZR)(),r=(0,w.getUrlWithPossibleSitePath)(n,`/location-selector${o?"-mobile":""}.html`),a=n.locale.substr(3).toLowerCase();return e().createElement("a",{className:ne()["country-selector-text"],href:r},e().createElement(oe.GlFlag,{countryCode:a,className:ne()["country-selector-flag"]}),e().createElement("span",null,t("languageselector.country")))};var Se=s(72718),j=s(89081),Te=s(73920),I=s(61826),Le=s(85331),B=s.n(Le);const Fe=i().bind(B());function re(t){typeof window!="undefined"&&window.document&&window.document.body&&(document.body.style.overflow=t)}function De({value:t,open:o,onClose:n,availableLanguages:r,appConfig:a}){const c=(0,l.T_)(),_=(0,l.hz)();if(!o||!r||!r.length)return re(""),null;const m=(0,j.Y9)(r),p=_.BROWSER_LANGUAGE_PREFERENCE_COOKIE_ENABLED,N=E=>{(0,Te.K2)(E),p&&(0,j.P1)(E),window.location.href=(0,w.sanitizeUrl)((0,j.qZ)({appConfig:a,selectedLang:E,location:window.location}))};return re("hidden"),e().createElement("div",{className:B().footer_overlay},e().createElement("div",{className:B().footer_language_selector},e().createElement("div",{className:B().footer_language_selector_top},c("pagecomponents.languageselector"),e().createElement("a",{onClick:n||(()=>null)},e().createElement(I.Z,{name:"close"}))),e().createElement("ul",null,(0,Se.keys)(m).map(E=>{var k;const x=(k=m[E])==null?void 0:k.label;return e().createElement("li",{key:E,className:Fe({active:t===E})},t===E?e().createElement(I.Z,{name:"tick",className:"gl-icon--size-communication"}):null,e().createElement("a",{onClick:()=>N(E)},x))}))))}const Ie=t=>({availableLanguages:(0,f.FC)(t).allLanguages}),Me=(0,b.$j)(Ie)(De),ae=({language:t,isMultiLanguage:o})=>{const n=(0,l.ZR)(),[r,a]=(0,C.useState)(!1);if(!t||!o)return null;const c=(0,j.$w)(t);return c?e().createElement(e().Fragment,null,e().createElement("a",{className:B().language_selector,onClick:()=>a(!0)},c,e().createElement(I.Z,{name:"arrow-down"})),e().createElement(Me,{open:r,onClose:()=>a(!1),value:t,appConfig:n})):null};var Re=s(17413),le=s.n(Re);const ke=()=>{const{content:t}=(0,l.XQ)("static-footer-mobile"),{content:o}=(0,l.XQ)("fetch-footer-mobile"),n=t?t.links:[];return e().createElement("div",{className:`container ${le().mobile_footer}`},o?e().createElement("div",{className:"row","data-auto-id":"mobile-footer-dynamic-content",dangerouslySetInnerHTML:{__html:o}}):e().createElement("div",{className:"row"},n.map((r,a)=>e().createElement("div",{key:a,className:"col-s-6"},e().createElement("a",{href:(0,w.sanitizeUrl)(r.href)},r.label)))))},Ae=()=>e().createElement("div",{className:`container ${le().mobile_footer}`},e().createElement(ke,null));var we=s(37655),Be=s(12010),Ue=s(56683),Ge=s(84868),U=s.n(Ge);const M=i().bind(U());class We extends e().Component{reload(){typeof QSI!="undefined"&&typeof QSI.API!="undefined"&&(QSI.API.unload(),QSI.API.load())}componentDidMount(){this.reload()}componentDidUpdate(){this.reload()}render(){return e().createElement("div",{className:"gl-link gl-vspace-bpall-small",id:"qualtrics-feedback-footer"})}}function xe({features:t,isLoggedIn:o,appConfig:n}){const r=(0,l.T_)(),a=(0,g.v9)(D.c0t),{headerLinkMyAccount:c,headerLinkMyAccountLegacy:_,headerLinkLogin:m,headerLinkLoginLegacy:p,sitePath:N}=n,E=(0,we.t1)(n,t),k=e().createElement(e().Fragment,null,e().createElement("div",{className:M("footer-link__icon")},e().createElement(I.Z,{name:"user"})),e().createElement("span",{onClick:()=>(0,Be.cE)(Ue.Kl.footer)},r("mobile.footer.loginregister"))),x=e().createElement("a",{href:t.ACCOUNT_LOGIN_LINKS_ENABLED?(0,w.getFullPathForSitePath)(m,N):p,className:M("footer-link")},k);return e().createElement("div",{className:U().footer_mobile_top_buttons},n.showFeedbackLink?e().createElement("div",{className:U().feedback},e().createElement("h5",{className:"gl-heading--s"},r("mobile.footer.feedback.title")),e().createElement("p",null,r("mobile.footer.feedback.body")),e().createElement(We,null)):null,e().createElement("button",{onClick:$e,className:U().back_to_top},e().createElement(I.Z,{name:"arrow-up",className:M("back_to_top_icon")}),r("mobile.footer.backtop")),e().createElement("div",{className:U().pre_mobile_footer_actions},o?e().createElement("a",{href:t.ACCOUNT_LANDING_LINKS_ENABLED?(0,w.getFullPathForSitePath)(c,N):_,className:M("footer-link")},r("mobile.footer.myaccount")):x,e().createElement("a",{href:E,className:M("footer-link"),"data-auto-id":"minicart-count"},e().createElement("div",{className:M("footer-link__icon")},e().createElement(I.Z,{name:"bag"})),`${r("mobile.global.minicart.checkout")} (${a})`)))}function Ze(t){return{features:(0,f.N$)(t),isLoggedIn:!!(0,D.Odi)(t),appConfig:(0,f.iE)(t),currentPath:(0,D.qCx)(t)}}const ce=(0,b.$j)(Ze)(xe);function $e(){window.scroll(0,0)}var Ke=s(21564),He=s(41116),ie=s(42186),je=s(95432),ze=s(58767),Xe=s(66433),Qe=s(68094),Ve=s(14033),Je=s(33187),v=s.n(Je),Ye=Object.defineProperty,me=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,V=(t,o,n)=>o in t?Ye(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,tt=(t,o)=>{for(var n in o||(o={}))qe.call(o,n)&&V(t,n,o[n]);if(me)for(var n of me(o))et.call(o,n)&&V(t,n,o[n]);return t},P=(t,o,n)=>(V(t,typeof o!="symbol"?o+"":o,n),n);class ot extends e().PureComponent{constructor(){super(...arguments);P(this,"state",{open:!1}),P(this,"render",()=>e().createElement(e().Fragment,null,e().createElement(L.Z,tt({"data-auto-id":"footer-newsletter-signup",onClick:()=>this.setState({open:!0})},this.props.isReebok&&{variant:"secondary",theme:"light"}),this.props.t("newsletter.signup.footer.cta")),this.props.features.NEWSLETTER_CSTUDIO_ENABLED&&!this.props.features.NEWSLETTER_CSTUDIO_NOT_IN_HEADER_FOOTER_ENABLED?e().createElement(Xe.Z,{open:this.state.open,onRequestClose:()=>this.setState({open:!1}),signupLocation:"FOOTER"}):e().createElement(Ve.Z,{open:this.state.open,onRequestClose:()=>this.setState({open:!1}),source:this.props.source,signupLocation:"FOOTER"})))}}class nt extends e().PureComponent{constructor(){super(...arguments);P(this,"state",{complete:!1,open:!1,whatDoesThisMeanOpen:!1}),P(this,"openDisclaimer",()=>{this.setState(({open:o})=>(o||(0,ie.MM)({event_category:"EMAIL SIGNUP",signup_location:"FOOTER",signup_step:"START"}),{open:!0}))}),P(this,"openWhatDoesThisMeanModal",()=>{this.setState({whatDoesThisMeanOpen:!0})}),P(this,"closeWhatDoesThisMeanModal",()=>{this.setState({whatDoesThisMeanOpen:!1})}),P(this,"saveFormState",o=>{this.setState({email:o})}),P(this,"sendForm",async()=>{const{registerLightUser:o,t:n,source:r,consentVersions:a}=this.props,c=this.state.email;if(c&&!c.error){(0,ie.MM)({event_category:"EMAIL SIGNUP",signup_location:"FOOTER",signup_step:"SUCCESS"});const _={email:c.value,minAgeConfirmation:!0,sourceId:r,consents:[{consentType:"AMF",consentValue:!0,consentVersion:a.newsletter}]},m=await o(_);if(m&&m.error){const p=m.error.serverError&&m.error.serverError.message||n("generic.unexpectederror");this.setState({email:{error:!0,validationErrorMessage:p}});return}this.setState({complete:!0})}})}renderComplete(){const{t:o}=this.props,n=this.state.email;return e().createElement("div",{className:`row ${v().complete_notification}`},e().createElement("div",{className:"col-l-24 col-s-12"},e().createElement("h4",null,o("newsletter.signupandsave.completetitle")),e().createElement("p",null,`${o("newsletter.signupandsave.complete.message")} ${n&&n.value}`)),e().createElement("div",{className:"col-l-12 col-s-12"}))}renderForm(){const{config:o,features:n,t:r,source:a}=this.props,{email:c,open:_}=this.state,m=c&&c.error,p=e().createElement("span",{className:v().discount_value},r("newsletter.discountvalue")),N=e().createElement(C.Fragment,null,r("newsletter.signupandsave.footermessage.ageconfirmation",o.newsletterSignup.requiredAge)," ",e().createElement(Qe.Z,{t:r,config:o,light:!0}));return e().createElement(C.Fragment,null,e().createElement("div",{className:"col-l-11 col-s-12"},e().createElement("div",{className:v().footer_newsletter_subscribe},e().createElement(oe.GlHeading,{as:"h4",fontSize:"m"},r.element("newsletter.signupandsave",p)))),e().createElement("div",{className:"col-l-12 offset-l-1 col-s-12"},n.NEWSLETTER_POPUP_FROM_HEADER_FOOTER?e().createElement("div",{className:"gl-vspace-bpall-small gl-vspace-bpl-null"},e().createElement(ot,{t:r,isReebok:o.domain==="reebok",source:a,features:n})):e().createElement("div",{className:`gl-vspace-bpall-small gl-vspace-bpl-null ${v().footer_newsletter_subscribe_input_wrapper}`},e().createElement(ze.Z,{noMargin:!0,placeholder:r("profile.footeremail"),name:"email",id:"footer-email",error:m,validationErrorMessage:c&&c.validationErrorMessage,onFocus:this.openDisclaimer,onBlur:this.saveFormState}),e().createElement(L.Z,{icon:"arrow-right-long",onClick:this.sendForm,className:v().footer_newsletter_subscribe_button,"aria-label":r("global.newslettersubmit")})),_?e().createElement("div",{className:`gl-hidden-l gl-body--s gl-fetched-content gl-no-margin-bottom
                ${v().disclaimer}
              `},N):null),e().createElement("div",{className:"col-s-12"},_?e().createElement("div",{className:`gl-hidden-s-m gl-body--s gl-fetched-content gl-no-margin-bottom
                  ${v().disclaimer}
                `},N):null))}render(){const{complete:o}=this.state;return e().createElement("div",{className:v().footer_newsletter},e().createElement("div",{className:`container ${v().wrapper}`},e().createElement("div",{className:"row no-gutters"},o?this.renderComplete():this.renderForm())))}}const st={registerLightUser:je.mT};function rt(t){return{config:(0,f.iE)(t),features:(0,f.N$)(t),source:(0,f.iE)(t).newsletterOverlaySourceID.headerAndFooter,whatDoesThisMeanContent:(0,f.YX)(t,"fetch-header-newsletter-what-does-that-mean-url")}}const at=(0,T.qC)((0,b.$j)(rt,st),(0,He.z)(),(0,Ke.Ii)(),(0,q.C)(["fetch-header-newsletter-what-does-that-mean-url"]))(nt);var lt=s(81929),ct=s(29063),it=Object.defineProperty,_e=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,de=(t,o,n)=>o in t?it(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,dt=(t,o)=>{for(var n in o||(o={}))mt.call(o,n)&&de(t,n,o[n]);if(_e)for(var n of _e(o))_t.call(o,n)&&de(t,n,o[n]);return t};const ut=()=>{const t=(0,l.T_)(),{isReebok:o}=(0,l.ay)(),n=o?{variant:"secondary",theme:"light"}:{};return e().createElement("div",{className:v().footer_newsletter},e().createElement("div",{className:`container ${v().wrapper} row`},e().createElement("div",{className:"col-l-12 col-s-12"},e().createElement("h4",null,t("account.footer.becomeMember",t("membership.discountvalue")))),e().createElement("div",{className:"col-l-12 col-s-12"},e().createElement(ct.Z,{allowSwitch:!1,location:"FOOTER",socialEnabled:!0,shouldOpenRegistrationFirst:!0},e().createElement(L.Z,dt({"aria-label":"Primary"},n),t("account.footer.becomeMember.cta"))))))},ft={setIsLoginRegisterOverlayOpen:lt.yX},gt=(0,b.$j)(null,ft)(ut);var Et=s(38073),z=s(28645),pt=s(89347),G=s.n(pt);const ue=i().bind(G()),J=({className:t,link:o,parentIds:n})=>{const r=n.concat([o.title]).filter(a=>!!a).map(a=>a.toLowerCase()).join("-_-");return e().createElement("li",{className:t},e().createElement("a",{href:o.external_link,manual_cm_sp:r},o.title))},fe=({disclaimer:t})=>(t==null?void 0:t.statement_text)?e().createElement("div",{className:ue("footer-disclaimer"),"data-auto-id":"cms-footer-disclaimer"},t.statement_text):null,ht=()=>{const t=(0,g.v9)(z.Zn);return(t==null?void 0:t.statement_text)?e().createElement("div",{className:ue("footer-copyright"),"data-auto-id":"cms-footer-copyright"},t.statement_text):null},X=i().bind(G()),vt=t=>{const o=t||{};return!!o.title&&!!o.external_link&&!!o.id},Nt=t=>{var o,n,r,a;return((a=(r=(n=(o=t==null?void 0:t.supporting_fields)==null?void 0:o.supporting_fields)==null?void 0:n.standard_metadata)==null?void 0:r.style_overrides)==null?void 0:a.display_styles)===Et.FooterIdentifiers.SEPARATOR},bt=t=>{const o=t||{};return!!o.items&&!!o.header_link},ge=({group:t,parentIds:o})=>{const{header_link:n,items:r}=t,a=e().createElement("li",{className:X("footer-headline")},e().createElement("h5",null,n.title)),c=o.concat([n.title]);return e().createElement(e().Fragment,null,a,r.map((_,m)=>vt(_)?e().createElement(J,{key:m,link:_,parentIds:c}):Nt(_)?e().createElement("li",{key:m,className:X("horizontal-separator")}):null))},Ot=({item:t,parentIds:o=["footer"]})=>bt(t)?e().createElement(ge,{group:t,parentIds:o}):e().createElement(e().Fragment,null,t.items.map((n,r)=>e().createElement(ge,{key:r,group:n,parentIds:o}))),Ct=({items:t})=>t.length>0?e().createElement("div",{className:X("footer-main-links"),"data-auto-id":"cms-footer-dt-main"},t.map((o,n)=>e().createElement("ul",{key:n,className:X("footer-group")},e().createElement(Ot,{item:o})))):null,yt=()=>{const{items:t,disclaimer:o}=(0,g.v9)(z.u);return e().createElement(e().Fragment,null,e().createElement(Ct,{items:t}),e().createElement(fe,{disclaimer:o}))},W=i().bind(G()),Pt=(t,o)=>{const n=t&&o;return e().createElement(e().Fragment,null,e().createElement("li",{className:W("footer-legal-item","country-selector",{"full-width":!n})},e().createElement(se,null)),n&&e().createElement("li",{className:W("footer-legal-item","language-selector")},e().createElement(ae,{language:t,isMultiLanguage:o})),e().createElement(te.Z,{gdprConsentOptionsOpener:h.uf.FOOTER,itemStyles:W("footer-legal-item")}))},St=({language:t,isMultiLanguage:o})=>{const n=(0,g.v9)(z.$b);return n.length>0?e().createElement("ol",{className:W("footer-legal"),"data-auto-id":"cms-footer-legal"},Pt(t,o),n.map((r,a)=>e().createElement(J,{key:a,className:W("footer-legal-item"),link:r,parentIds:["legal"]}))):null},Ee=i().bind(G()),Tt=()=>{const{items:t,disclaimer:o}=(0,g.v9)(z.m9);function n(r){return(r==null?void 0:r.length)?e().createElement("div",{className:Ee("footer-mobile"),"data-auto-id":"cms-footer-mb-main"},e().createElement("ul",{className:"row"},r.map((a,c)=>e().createElement(J,{key:c,className:Ee("footer-mobile-item"),link:a,parentIds:["footer"]})))):null}return e().createElement(e().Fragment,null,n(t),o&&e().createElement(fe,{disclaimer:o}))},R=i().bind(G()),pe=(t,o,n,r)=>!t&&!o&&!n?r?e().createElement(gt,null):e().createElement(at,null):null,Lt=(t,o)=>{const{isCrawlerRender:n=!1}=(0,l.ZR)(),r=(0,l.Av)(),a=n&&r;return{shouldRenderDtMenu:(a||!t)&&!o,shouldRenderMobileMenu:!a,shouldHideWithCssOnMobile:!a}},Ft=({isCompactView:t,shouldHideFooterSignup:o})=>{const n=(0,l.T_)(),{isMobile:r}=(0,l.Fy)(),a=(0,l.hz)(),{language:c,allLanguages:_}=(0,g.v9)(f.FC),{isLoading:m}=(0,l.RZ)(["cms-footer","cms-footer-mobile"]),{shouldRenderDtMenu:p,shouldRenderMobileMenu:N,shouldHideWithCssOnMobile:E}=Lt(r,t),k=(0,g.v9)(xt=>(0,Z.$l)(xt,u.AB.HIDE_NL_SIGNUP_BANNER,"true")),x=(0,g.v9)(h.W_),Gt=a.COOKIE_CONSENT_GEO_LOC_ENABLED&&x,Wt=_&&_.length>1;return m?null:e().createElement("footer",{className:R("footer"),"data-auto-id":"glass-footer",id:"glass-footer"},e().createElement("div",{className:"footer-interactive content-visibility-auto"},r&&e().createElement(ce,null),pe(t,k,o,a.MEMBERSHIP_REGISTRATION_IN_FOOTER)),e().createElement("div",{className:R("footer-top")},N&&e().createElement("div",{className:R("footer-container","hidden-on-desktop")},e().createElement(Tt,null)),p&&e().createElement("div",{className:R("footer-container",{"hidden-on-mobile":E})},e().createElement(yt,null))),e().createElement("div",{className:R("footer-bottom")},e().createElement("div",{className:R("footer-container")},e().createElement(St,{language:c,isMultiLanguage:Wt}),e().createElement(ht,null))),e().createElement("span",{className:"gl-screen-reader-only"},n("footer.accessibleNotice")),Gt&&e().createElement("div",{className:Q().cookie_consent_bar},e().createElement(K,null)))};var Dt=Object.defineProperty,he=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,ve=(t,o,n)=>o in t?Dt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,Rt=(t,o)=>{for(var n in o||(o={}))It.call(o,n)&&ve(t,n,o[n]);if(he)for(var n of he(o))Mt.call(o,n)&&ve(t,n,o[n]);return t};const S=i().bind(Q());function kt({isCompactView:t,footerContent:o,appConfig:n,language:r,isMultiLanguage:a,showCookieConsentBar:c,shouldHideNewsletter:_,shouldHideFooterSignup:m}){const p=(0,l.T_)(),N=(0,l.hz)();return o?e().createElement("footer",{className:S("footer"),"data-auto-id":"glass-footer",id:"glass-footer"},e().createElement(H.Z,{mobile:!0},e().createElement(ce,null)),pe(t,_,m,N.MEMBERSHIP_REGISTRATION_IN_FOOTER),e().createElement(H.Z,{mobile:!0},e().createElement(Ae,{t:p,appConfig:n})),e().createElement("div",{className:S("footer_bottom")},e().createElement("div",{className:"row"},e().createElement("div",{className:"col-l-24 col-s-12 no-gutters","data-component":"content/ExternalLinks","data-linkscontext":"footer"},t?null:e().createElement(Ce,null),e().createElement("div",{className:S("footer_copy")},e().createElement("div",{className:S("footer_copy_inner")},e().createElement("div",{className:S("footer_country_selector")},e().createElement(se,null)),r&&a?e().createElement("div",null,e().createElement(ae,{language:r,isMultiLanguage:a})):null,e().createElement("div",{className:S("footer_links")},e().createElement("ol",{className:S("cookie_settings")},e().createElement(te.Z,{gdprConsentOptionsOpener:h.uf.FOOTER})),e().createElement(ye,null))))))),e().createElement("span",{className:"gl-screen-reader-only"},p("footer.accessibleNotice")),c&&e().createElement("div",{className:S("cookie_consent_bar")},e().createElement(K,null))):null}const At={openGDPRConsentOptions:O.IU,openCCPAConsentModal:O.rd};function wt(t){const{language:o,allLanguages:n}=(0,f.FC)(t),{COOKIE_CONSENT_GEO_LOC_ENABLED:r}=(0,f.N$)(t),a=r&&(0,h.W_)(t),c=(0,f.YX)(t,"fetch-footer");return{language:o,isMultiLanguage:n&&n.length>1,appConfig:(0,f.iE)(t),showCookieConsentBar:a,footerContent:c,shouldHideNewsletter:(0,Z.$l)(t,u.AB.HIDE_NL_SIGNUP_BANNER,"true")}}const Bt=(0,T.qC)((0,b.$j)(wt,At),(0,q.C)(["fetch-footer"]))(kt);function Ut(t){const{TRIDION_FOOTER:o}=(0,l.hz)(),n=o?Ft:Bt;return e().createElement(Ne.Z,null,e().createElement(n,Rt({},t)))}},501:d=>{d.exports={cookie_consent_bar:"cookie_consent_bar___3gtra",close_button:"close_button___DAcOO",set_cookie_preference_message:"set_cookie_preference_message___RV91v",set_cookie_preference_button:"set_cookie_preference_button___8_O1q","theme-adidas":"theme-adidas___2aqxJ","theme-reebok":"theme-reebok___2d2EW","set-cookie-preference_button":"set-cookie-preference_button___3iDRJ"}},75885:d=>{d.exports={"country-selector-text":"country-selector-text___tgKZg","country-selector-flag":"country-selector-flag___1EBLE"}},85331:d=>{d.exports={footer_language_selector:"footer_language_selector___12ul4",footer_language_selector_top:"footer_language_selector_top___3FyAn",active:"active___QQmPr",footer_overlay:"footer_overlay___4nt4O"}},17413:d=>{d.exports={mobile_footer:"mobile_footer___3XOtn"}},84868:d=>{d.exports={footer_mobile_top_buttons:"footer_mobile_top_buttons___tue_B",feedback:"feedback___3PwjE",back_to_top:"back_to_top___I5pLx",back_to_top_icon:"back_to_top_icon___3pKoU",pre_mobile_footer_actions:"pre_mobile_footer_actions___1cvyO","footer-link":"footer-link___Vm0oN","footer-link__icon":"footer-link__icon___2kKJa"}},33187:d=>{d.exports={footer_newsletter:"footer_newsletter___33hsw",wrapper:"wrapper___hyNX4",footer_newsletter_subscribe_input_wrapper:"footer_newsletter_subscribe_input_wrapper___3Vmya",footer_newsletter_subscribe_button:"footer_newsletter_subscribe_button___28cai",footer_newsletter_subscribe:"footer_newsletter_subscribe___2CjSm",complete_notification:"complete_notification___1YIQj",disclaimer:"disclaimer___2IfCN"}},63258:d=>{d.exports={footer:"footer___CX2op",separator:"separator___Fq2WX",footer_content:"footer_content___19kq8",footer_bottom:"footer_bottom___3d8D8",footer_copy:"footer_copy___2MadW",footer_country_selector:"footer_country_selector___2tTta",footer_copy_inner:"footer_copy_inner___3hPSX",footer_links:"footer_links___2Ds45",inline_link_list:"inline_link_list___1Q5D-",cookie_settings:"cookie_settings___3gT2B",language_selector:"language_selector___3PngA",cookie_consent_bar:"cookie_consent_bar___2mhL0"}},89347:d=>{d.exports={footer:"footer___11P3h","hidden-on-mobile":"hidden-on-mobile___2Y6y3","hidden-on-desktop":"hidden-on-desktop___39pTd","footer-container":"footer-container___27CZh","footer-top":"footer-top___2hhSW","footer-bottom":"footer-bottom___1H5NH","footer-main-links":"footer-main-links___1FinL","footer-group":"footer-group___2oJ6l","footer-headline":"footer-headline___3aRCZ","horizontal-separator":"horizontal-separator___1Hzpm","footer-disclaimer":"footer-disclaimer___1uI3T","footer-mobile":"footer-mobile___1x-1H","footer-mobile-item":"footer-mobile-item___1cu7Y","footer-legal":"footer-legal___2tJJX","footer-legal-item":"footer-legal-item___1t4Gx","full-width":"full-width___1UI6L","country-selector":"country-selector___30O0P","language-selector":"language-selector___1PWGp","footer-copyright":"footer-copyright___29I3Q"}}}]);
