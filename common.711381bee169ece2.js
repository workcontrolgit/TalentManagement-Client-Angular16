"use strict";(self.webpackChunkTalentManagement=self.webpackChunkTalentManagement||[]).push([[592],{8626:(b,y,l)=>{l.d(y,{n:()=>v});class o{constructor(){this.toString=()=>this.paramsAndValues.join("&"),this.paramsAndValues=[]}push(e,t){t=encodeURIComponent(t.toString()),this.paramsAndValues.push([e,t].join("="))}}class g{constructor(e,t,n){this.baseUrl=e,this.action=t,this.url=[e,t].join("/"),this.queryString=n||new o}toString(){const e=this.queryString?this.queryString.toString():"";return e?`${this.url}?${e}`:this.url}}var p=l(710),d=l(2223);let v=(()=>{class i{constructor(){this.getDataByIdEndpoint=t=>this.createUrlWithPathVariables("data",[t]),this.getDataByIdAndCodeEndpoint=(t,n)=>this.createUrlWithPathVariables("data",[t,n]),this.getNewsEndpoint=()=>this.createUrl("41gRGwOaw",!0),this.invalidUrlEndpoint=()=>this.createUrl("invalidurl",!0),this.getPersonsEndpoint=()=>this.createUrl("Persons"),this.getPositionByIdEndpoint=t=>this.createUrlWithPathVariables("Positions",[t]),this.deletePositionByIdEndpoint=t=>this.createUrlWithPathVariables("Positions",[t]),this.postPositionsPagedEndpoint=()=>this.createUrl("Positions/Paged"),this.postPositionsEndpoint=()=>this.createUrl("Positions"),this.putPositionsPagedEndpoint=t=>this.createUrlWithPathVariables("Positions",[t]),this.postEmployeesPagedEndpoint=()=>this.createUrl("Employees/Paged")}getDataByIdCodeAndYearEndpoint(t,n,r){const a=new o;return a.push("year",r),`${this.createUrlWithPathVariables("data",[t,n])}?${a.toString()}`}getProductListByCountryCodeEndpoint(t){return this.createUrlWithQueryParameters("productlist",n=>n.push("countryCode",t))}getProductListByCountryAndPostalCodeEndpoint(t,n){return this.createUrlWithQueryParameters("productlist",r=>{r.push("countryCode",t),r.push("postalCode",n)})}createUrl(t,n=!1){return new g(n?p.N.apiMockEndpoint:p.N.apiEndpoint,t).toString()}createUrlWithQueryParameters(t,n){const r=new g(p.N.apiEndpoint,t);return n&&n(r.queryString),r.toString()}createUrlWithPathVariables(t,n=[]){let r="";for(const s of n)null!==s&&(r+=`/${encodeURIComponent(s.toString())}`);return new g(p.N.apiEndpoint,`${t}${r}`).toString()}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3792:(b,y,l)=>{l.d(y,{E:()=>p});var o=l(2223),g=l(3144);let p=(()=>{class d{constructor(i){this.http=i,this.get=(e,t)=>this.http.get(e,t),this.post=(e,t,n)=>this.http.post(e,t,n),this.put=(e,t,n)=>this.http.put(e,t,n),this.delete=(e,t)=>this.http.delete(e,t)}}return d.\u0275fac=function(i){return new(i||d)(o.LFG(g.eN))},d.\u0275prov=o.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},5415:(b,y,l)=>{l.d(y,{G:()=>p,T:()=>v});var o=l(2223),p=function(){function i(e,t,n){this.el=e,this.vcr=t,this.renderer=n,this.dtOptions={}}return i.prototype.ngOnInit=function(){var e=this;this.dtTrigger?this.dtTrigger.subscribe(function(t){e.displayTable(t)}):this.displayTable(null)},i.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},i.prototype.displayTable=function(e){var t=this;e&&(this.dtOptions=e),this.dtInstance=new Promise(function(n,r){Promise.resolve(t.dtOptions).then(function(a){0===Object.keys(a).length&&0===$("tbody tr",t.el.nativeElement).length?r("Both the table and dtOptions cannot be empty"):setTimeout(function(){var h={rowCallback:function(f,c,P){if(a.columns){var u=a.columns;t.applyNgPipeTransform(f,u),t.applyNgRefTemplate(f,u,c)}a.rowCallback&&a.rowCallback(f,c,P)}};h=Object.assign({},a,h),t.dt=$(t.el.nativeElement).DataTable(h),n(t.dt)})})})},i.prototype.applyNgPipeTransform=function(e,t){t.filter(function(r){return r.ngPipeInstance&&!r.ngTemplateRef}).forEach(function(r){var a=r.ngPipeInstance,s=r.ngPipeArgs||[],h=t.filter(function(u){return!1!==u.visible}).findIndex(function(u){return u.data===r.data}),f=e.childNodes.item(h),c=$(f).text(),P=a.transform.apply(a,function(i,e,t){if(t||2===arguments.length)for(var a,n=0,r=e.length;n<r;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))}([c],s,!1));$(f).text(P)})},i.prototype.applyNgRefTemplate=function(e,t,n){var r=this;t.filter(function(s){return s.ngTemplateRef&&!s.ngPipeInstance}).forEach(function(s){var h=s.ngTemplateRef,f=h.ref,c=h.context,P=t.filter(function(m){return!1!==m.visible}).findIndex(function(m){return m.data===s.data}),u=e.childNodes.item(P);$(u).html("");var E=Object.assign({},c,c?.userData,{adtData:n}),T=r.vcr.createEmbeddedView(f,E);r.renderer.appendChild(u,T.rootNodes[0])})},i.\u0275fac=function(t){return new(t||i)(o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(o.Qsj))},i.\u0275dir=o.lG2({type:i,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),i}(),d=l(4755),v=function(){function i(){}return i.forRoot=function(){return{ngModule:i}},i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[d.ez]}),i}()}}]);