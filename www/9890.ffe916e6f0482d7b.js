"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9890],{9890:(d,s,o)=>{o.r(s),o.d(s,{CartPage:()=>m});var c=o(177),l=o(4341),e=o(9364),_=o(2781),t=o(4438);function u(r,E){if(1&r){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-label")(2,"h2"),t.EFF(3),t.k0s(),t.j41(4,"p"),t.EFF(5),t.k0s()(),t.j41(6,"ion-button",7),t.bIt("click",function(){const i=t.eBV(n).index,F=t.XpG();return t.Njj(F.removeFromCart(i))}),t.EFF(7,"Remove"),t.k0s()()}if(2&r){const n=E.$implicit;t.R7$(3),t.JRh(n.name),t.R7$(2),t.SpI("Total: $ ",n.total,"")}}let m=(()=>{class r{constructor(){this.cartItems=_.eu,this.totalPrice=0}ngOnInit(){this.totalPrice=this.cartItems.reduce((n,a)=>n+a.total,0)}removeFromCart(n){this.cartItems.splice(n,1),this.totalPrice=this.cartItems.reduce((a,i)=>a+i.total,0)}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-cart"]],standalone:!0,features:[t.aNF],decls:24,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[2,"padding","1%"],[4,"ngFor","ngForOf"],[1,"ion-text-center"],["color","danger",3,"click"]],template:function(a,i){1&a&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Cart"),t.k0s()()(),t.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.EFF(8,"Cart"),t.k0s()()(),t.j41(9,"ion-card",4)(10,"h1"),t.EFF(11,"Cart"),t.k0s(),t.j41(12,"ion-list"),t.DNE(13,u,8,2,"ion-item",5),t.k0s()(),t.j41(14,"ion-card")(15,"ion-list")(16,"ion-card-header",6)(17,"ion-card-title"),t.EFF(18,"Total Price"),t.k0s(),t.j41(19,"ion-card-subtitle"),t.EFF(20),t.k0s(),t.nrm(21,"br"),t.j41(22,"ion-button"),t.EFF(23,"Checkout"),t.k0s()()()()()),2&a&&(t.Y8G("translucent",!0),t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(9),t.Y8G("ngForOf",i.cartItems),t.R7$(7),t.SpI("$",i.totalPrice,""))},dependencies:[e.bv,e.Jm,e.b_,e.ME,e.HW,e.tN,e.W9,e.eU,e.uz,e.he,e.nf,e.BC,e.ai,c.MD,c.Sq,l.YN]})}return r})()}}]);