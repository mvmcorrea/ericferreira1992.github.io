(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{61:function(e,t,o){"use strict";o.d(t,"a",(function(){return r.a})),o.d(t,"b",(function(){return c}));var r=o(22);class i{constructor(e){Object.assign(this,e)}}class s{constructor(e){this.description="",this.keywords="",this.og={},Object.assign(this,e),this.og&&(this.og=new i(this.og))}}class a{constructor(e){this.template="",this.style="",this.title="",this.meta={},Object.assign(this,e),this.meta&&(this.meta=new s(this.meta))}}var n=o(3);o(23);function c(e){return function(t){return e=new a(e),Object.assign(t.prototype,e),Reflect.defineMetadata(n.a,!0,t),t}}},81:function(e,t){e.exports='<div class="open-sources-page animated fadeIn"> <h2 class=mb-7>Principais repositórios</h2> <div class=repositories> <section @for="repository of repositories.main" [class]=repository.tecnology> <h4> <a [href]=repository.url target=_blank> {{repository.name}} </a> </h4> <div> <p> <span>{{repository.description}}</span> </p> </div> </section> </div> <h2 class="mt-7 mb-7">Outros repositórios</h2> <div class=repositories> <section @for="repository of repositories.others" [class]=repository.tecnology> <h4> <a [href]=repository.url target=_blank> {{repository.name}} </a> </h4> <div> <p> <span>{{repository.description}}</span> </p> </div> </section> </div> </div>'},82:function(e,t,o){},91:function(e,t,o){"use strict";o.r(t),o.d(t,"OpenSourcesPage",(function(){return a}));var r=o(61),i=function(e,t,o,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s<3?i(a):s>3?i(t,o,a):i(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=(()=>{let e=class extends r.a{constructor(){super(),this.repositories={main:[{name:"nimble/core",description:"Dependência principal do Nimble framework.",url:"https://github.com/ericferreira1992/nimble",tecnology:"ts"},{name:"nimble/cli",description:"CLI para desenvolvimento do Nimble framework, que também é uma dependência de desenvolvimento de um projeto Nimble.",url:"https://github.com/ericferreira1992/nimble-cli",tecnology:"ts"},{name:"ag-table",description:"Componente desenvolvido para aplicações Angular, com objeto de ser um data-table simples e completo.",url:"https://github.com/ericferreira1992/ag-table",tecnology:"ts"},{name:"ag-virtual-scroll",description:"Componente de virtualização de dados (elementos) através do conceito de virtual-scroll, para aplicações Angular.",url:"https://github.com/ericferreira1992/ag-virtual-scroll",tecnology:"ts"},{name:"slider-carousel",description:"Um slider de imagens em formato de carrossel e com visulização em full-screen, para aplicações Angular.",url:"https://github.com/ericferreira1992/slider-carousel",tecnology:"ts"},{name:"alphabet-filter",description:"Componente que lembra bastante uma agenda de contatos de forma alfabética, contendo todas as letras do alfabeto, indicando a letra correspondente ao nomes que estão sendo visualizados naquele momento.",url:"https://github.com/ericferreira1992/alphabet-filter",tecnology:"ts"}],others:[{name:"pac-coin",description:"Remake do jogo Pac-man, feito em TypeScript utilizando HTML5 Canvas.",url:"https://github.com/ericferreira1992/pac-coin",tecnology:"ts"},{name:"web-components",description:"Repositório de estudo sobre web-components.",url:"https://github.com/ericferreira1992/web-components",tecnology:"js"},{name:"hunger-time",description:"Aplicação de um e-commerce feita em Flutter para estudos.",url:"https://github.com/ericferreira1992/hunger-time",tecnology:"dart"},{name:"dirty-check-zonejs",description:"Repositório de estudo sobre dirty-check usando ZoneJs (o mesmo utilizado pelo Angular).",url:"https://github.com/ericferreira1992/dirty-check-zonejs",tecnology:"js"},{name:"dynamicToObject",description:"Classe em C# para .NET, que transforma um objeto dynamic em uma classe específica, utilizando Reflection.",url:"https://github.com/ericferreira1992/dynamicToObject",tecnology:"csharp"},{name:"pong",description:"Remake simples do jogo Pong utilizando HTML5 Canvas.",url:"https://github.com/ericferreira1992/pong",tecnology:"js"}],contributions:[]}}onEnter(){}onExit(){}};return e=i([Object(r.b)({template:o(81),style:o(82),title:"Eric Ferreira - Open Sources"}),s("design:paramtypes",[])],e),e})()}}]);