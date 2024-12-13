"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1367],{21748:function(e,n,t){t.d(n,{BB:function(){return y},Ey:function(){return k},GR:function(){return C},HD:function(){return d},Ke:function(){return p},Kf:function(){return _},Kz:function(){return I},WI:function(){return g},ff:function(){return b},iW:function(){return h},in:function(){return N},n$:function(){return m},r2:function(){return s},u1:function(){return f},vQ:function(){return o},xJ:function(){return r},xN:function(){return u},zn:function(){return c}});var a=t(60884),i=t(87138),l=t(51923);let r=l.zo.div.withConfig({displayName:"TableContainer",componentId:"sc-a15595c2-0"})(["&& .ant-table-thead > tr > th{height:36px;padding:0px 8px;}&& .ant-table-cell{padding:0px;}&&&{.ant-table-cell-fix-right{text-align:center;padding:0;cursor:pointer;border:0;}.ant-table-cell-fix-right:hover{background:#2d2d2d;}.ant-table-column-title{color:rgba(255,255,255,0.65);}}"]),o=l.zo.div.withConfig({displayName:"CellContainer",componentId:"sc-a15595c2-1"})(["display:flex;flex-direction:row;align-items:center;gap:4px;padding:12px;color:#fff;span{&.--white-cell{color:rgba(255,255,255,1);}}",""],e=>e.overflow&&(0,l.iv)(["max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"])),c=l.zo.div.withConfig({displayName:"CellContainerClean",componentId:"sc-a15595c2-2"})(["display:flex;flex-direction:row;align-items:center;gap:4px;color:rgba(255,255,255,1);"]),p=l.zo.div.withConfig({displayName:"CellSupplyContainer",componentId:"sc-a15595c2-3"})(["flex-direction:row;gap:4px;padding:4px 10px;&& .ant-progress{line-height:0.6;}"]),d=l.zo.div.withConfig({displayName:"TextName",componentId:"sc-a15595c2-4"})(["color:rgba(255,255,255,0.65);"]),s=l.zo.div.withConfig({displayName:"UpdateFilterBox",componentId:"sc-a15595c2-5"})(["width:100%;height:100%;align-content:center;"]),u=l.zo.span.withConfig({displayName:"CellCoinSymbol",componentId:"sc-a15595c2-6"})(["color:rgba(255,255,255,0.65);padding-inline-start:4px;"]),g=l.zo.div.withConfig({displayName:"ChildrenVerticalContainer",componentId:"sc-a15595c2-7"})(["display:flex;flex-direction:column;gap:2px;"]),C=l.zo.div.withConfig({displayName:"CoinCellMobile",componentId:"sc-a15595c2-8"})(["display:flex;align-items:center;gap:4px;"]);l.zo.div.withConfig({displayName:"CoinCellMobileNumber",componentId:"sc-a15595c2-9"})(["text-align:center;width:28px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:12px;color:",";"],a.i_.Text.colorTextBase);let h=l.zo.div.withConfig({displayName:"CoinCellMobileMain",componentId:"sc-a15595c2-10"})(["display:flex;align-items:center;gap:4px;"]),f=l.zo.div.withConfig({displayName:"CoinCellMobileLogo",componentId:"sc-a15595c2-11"})(["width:21px;height:21px;flex-shrink:0;"]),y=l.zo.div.withConfig({displayName:"CoinCellMobileInfo",componentId:"sc-a15595c2-12"})(["display:flex;flex-direction:column;"]),m=l.zo.div.withConfig({displayName:"CoinCellMobileName",componentId:"sc-a15595c2-13"})(["max-width:95px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:",";font-size:14px;line-height:20px;"],a.i_.Text.colorTextBase),b=l.zo.div.withConfig({displayName:"CoinCellMobileSymbol",componentId:"sc-a15595c2-14"})(["max-width:95px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:12px;line-height:20px;color:rgba(246,246,246,0.45);"]),I=l.zo.div.withConfig({displayName:"PriceCellMobile",componentId:"sc-a15595c2-15"})(["display:flex;flex-direction:column;"]),k=l.zo.div.withConfig({displayName:"PriceCellMobileDiff",componentId:"sc-a15595c2-16"})(["font-size:12px;"]),N=(0,l.zo)(i.default).withConfig({displayName:"PricePredicationLink",componentId:"sc-a15595c2-17"})(["font-size:10px;margin:0px;color:rgba(255,255,255,0.45);text-decoration-line:underline;"]),_=l.zo.a.withConfig({displayName:"PricePredicationAnocher",componentId:"sc-a15595c2-18"})(["font-size:10px;margin:0px;color:rgba(255,255,255,0.45);text-decoration-line:underline;"])},69323:function(e,n,t){var a=t(57437),i=t(2265),l=t(26257);let r=i.memo(e=>{let{sparklineData:n,color:t}=e,[r,o]=(0,i.useState)("");return(0,i.useEffect)(()=>((async()=>{try{let e=await fetch("/api/sparkline/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sparklineData:n,color:t})});if(!e.ok)throw Error("Failed to fetch sparkline image");let a=await e.blob(),i=URL.createObjectURL(a);o(i)}catch(e){console.error("Error fetching sparkline image:",e)}})(),()=>{r&&URL.revokeObjectURL(r)}),[n,t]),r?(0,a.jsx)(l.Z,{src:r,alt:"Sparkline",width:120,height:30,priority:!0}):(0,a.jsx)("div",{children:"Loading sparkline..."})});r.displayName="SparklineImage",n.Z=r},78084:function(e,n,t){t.d(n,{f:function(){return i}});var a=t(78975);let i=e=>[{key:"general",label:e("app.table.general"),items:[{key:a.I.marketCapRank,label:e("app.table.rank"),isSelected:!0,isDisabled:!0,hideSettings:!0,order:1},{key:a.I.name,label:e("app.table.name"),isSelected:!0,isDisabled:!0,hideSettings:!0,order:2},{key:a.I.affiliate,label:e("app.table.affiliate"),isSelected:!0,isDisabled:!0,hideInOptions:!0,hideSettings:!0,order:3}]},{key:"price",label:e("app.table.price"),items:[{key:a.I.currentPrice,label:e("app.table.currentPrice"),isSelected:!0,order:4}]},{key:"price_change",label:e("app.table.priceChange"),items:[{key:a.I.priceChangePercentage1HInCurrency,label:e("app.table.changeIn1hPerc"),isSelected:!0,order:5},{key:a.I.priceChangePercentage24HInCurrency,label:e("app.table.changeIn24hPerc"),isSelected:!0,order:6},{key:a.I.priceChangePercentage7DInCurrency,label:e("app.table.changeIn7dPerc"),isSelected:!0,order:7},{key:a.I.priceChangePercentage14DInCurrency,label:e("app.table.changeIn14dPerc"),isSelected:!1,order:8},{key:a.I.priceChangePercentage30DInCurrency,label:e("app.table.changeIn30dPerc"),isSelected:!1,order:9},{key:a.I.priceChangePercentage1YInCurrency,label:e("app.table.changeIn1yPerc"),isSelected:!1,order:10}]},{key:"market_cap",label:e("app.table.marketCap"),items:[{key:a.I.marketCap,label:e("app.table.marketCap"),isSelected:!0,order:11}]},{key:"market_cap_change",label:e("app.table.marketCapChange"),items:[{key:a.I.marketCapChange24H,label:e("app.coinTable.marketCapChange24"),isSelected:!1,order:12},{key:a.I.marketCapChangePercentage24H,label:e("app.coinTable.marketCapPercent24"),isSelected:!1,order:13}]},{key:"volume",label:e("app.table.volume"),items:[{key:a.I.fullyDilutedValuation,label:e("app.table.fullyDilutedValuation"),isSelected:!1,order:14},{key:a.I.totalVolume,label:e("app.table.totalValue"),isSelected:!0,order:15}]},{key:"supply",label:e("app.table.supply"),items:[{key:a.I.circulatingSupply,label:e("app.table.circulatingSupply"),isSelected:!1,order:16},{key:a.I.totalSupply,label:e("app.table.totalSupply"),isSelected:!1,order:17},{key:a.I.maxSupply,label:e("app.table.maxSupply"),isSelected:!1,order:18}]},{key:"high_and_low_24h",label:e("app.table.highLow24h"),items:[{key:a.I.high24H,label:e("app.table.high24h"),isSelected:!1,order:19},{key:a.I.low24H,label:e("app.table.low24h"),isSelected:!1,order:20}]},{key:"ath_and_atl",label:"".concat(e("app.coinTable.ath_atl")),items:[{key:a.I.ath,label:e("app.table.ath"),isSelected:!1,order:21},{key:a.I.athChangePercentage,label:e("app.table.athChange%"),isSelected:!1,order:22},{key:a.I.atl,label:e("app.table.atl"),isSelected:!1,order:23},{key:a.I.atlChangePercentage,label:e("app.table.atlChange%"),isSelected:!1,order:24}]},{key:"sparkline",label:e("app.table.sparkline"),items:[{key:a.I.sparkline7D,label:e("app.coinSidebar.7d"),isSelected:!1,order:25}]}]},78975:function(e,n,t){t.d(n,{I:function(){return a},W:function(){return i}});let a={name:"NAME",currentPrice:"PRICE",marketCap:"MARKET_CAP",marketCapRank:"MARKET_CAP_RANK",fullyDilutedValuation:"FULLY_DILUTED_VALUATION",totalVolume:"TOTAL_VOLUME",high24H:"HIGH_24H",low24H:"LOW_24H",priceChange24H:"PRICE_CHANGE_24H",priceChangePercentage24H:"PRICE_CHANGE_PERCENTAGE_24H",marketCapChange24H:"MARKET_CAP_CHANGE_24H",marketCapChangePercentage24H:"MARKET_CAP_CHANGE_PERCENTAGE_24H",circulatingSupply:"CIRCULATING_SUPPLY",totalSupply:"TOTAL_SUPPLY",maxSupply:"MAX_SUPPLY",ath:"ATH",athChangePercentage:"ATH_CHANGE_PERCENTAGE",atl:"ATL",atlChangePercentage:"ATL_CHANGE_PERCENTAGE",priceChangePercentage1HInCurrency:"PRICE_CHANGE_PERCENTAGE_1H_IN_CURRENCY",priceChangePercentage24HInCurrency:"PRICE_CHANGE_PERCENTAGE_24H_IN_CURRENCY",priceChangePercentage14DInCurrency:"PRICE_CHANGE_PERCENTAGE_14D_IN_CURRENCY",priceChangePercentage7DInCurrency:"PRICE_CHANGE_PERCENTAGE_7D_IN_CURRENCY",priceChangePercentage30DInCurrency:"PRICE_CHANGE_PERCENTAGE_30D_IN_CURRENCY",priceChangePercentage1YInCurrency:"PRICE_CHANGE_PERCENTAGE_1Y_IN_CURRENCY",sparkline7D:"SPARKLINE_7D",affiliate:"AFFILIATE"},i={ascend:"ASC",descend:"DESC"}},4786:function(e,n,t){t.d(n,{Nh:function(){return i},c0:function(){return o},oG:function(){return r}});var a=t(25663);function i(e,n,t){let i=!(arguments.length>3)||void 0===arguments[3]||arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"currency",o=function(e,n,t){let i=!(arguments.length>3)||void 0===arguments[3]||arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"currency",o=null!=n?n:"USD",c=a.m.find(e=>e.key===o),p=function(e){let n=e.toString().split("."),t=n[1]||"0",a=0;for(;a<t.length&&"0"===t[a];)a++;let i=a<t.length?a+1:a;return"0"===n[0]?Math.max(4,i+3):Math.min(i,t.length)}(e||0);return l.getInstance(t,{notation:i?"compact":"standard",style:r,currency:(null==c?void 0:c.key)||"USD",maximumFractionDigits:p<=2?2:p})}(e,n,t,i,r);switch(e=null!=e?e:0,t){case"en-US":case"nl-NL":return c(e,n,o);default:return o.format(e)}}class l{static getInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",n=arguments.length>1?arguments[1]:void 0,t="".concat(e,"-").concat(JSON.stringify(n));return l.instances.has(t)||l.instances.set(t,new Intl.NumberFormat(e,n)),l.instances.get(t)}}function r(e,n){let t=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=null!=e?e:"USD",l=a.m.find(e=>e.key===i);return new Intl.NumberFormat(n,{notation:t?"compact":"standard",style:"currency",currency:(null==l?void 0:l.key)||"USD"})}function o(e,n){return new Intl.DisplayNames([n],{type:"currency"}).of(e)||""}l.instances=new Map;let c=(e,n,t)=>"USD"!=n?t.format(e):"$"+t.formatToParts(e).map(e=>"currency"==e.type?"":"compact"==e.type?e.value.replace("mil\xa0M","MM"):e.value).join("")},38574:function(e,n){n.Z=function(e){return function(n){function t(n){try{return e.raw(n)!==n&&""!==e(n)}catch(e){return!1}}return Array.isArray(n)?n.map(t).every(e=>!!e):t(n)}}},12826:function(e,n,t){t.d(n,{v:function(){return a}});let a=(e,n,t)=>{if(e===n)return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n||Array.isArray(e)!==Array.isArray(n))return!1;let i=t?Object.keys(e).filter(e=>!(null==t?void 0:t.includes(e))):Object.keys(e),l=t?Object.keys(n).filter(e=>!(null==t?void 0:t.includes(e))):Object.keys(n);return i.length===l.length&&i.every(t=>l.includes(t)&&a(e[t],n[t]))}},56926:function(e,n,t){t.d(n,{p:function(){return a}});let a=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("string"==typeof e||"number"==typeof e){let n=parseInt(e);if(!isNaN(n))return n}return n}}}]);