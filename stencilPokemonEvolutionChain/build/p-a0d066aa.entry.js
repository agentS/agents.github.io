import{r as t,h as i,F as s,g as e}from"./p-09e97601.js";import{s as o,v as l,w as n,m as h,x as a}from"./p-c35eee47.js";import{A as r}from"./p-1cf8aa3a.js";let u=class{constructor(i){t(this,i)}componentWillLoad(){o.mapStateToProps(this,(t=>{const{pokemonSearchReducer:{pokemon:i}}=t;return{pokemon:i}})),o.mapDispatchToProps(this,{})}render(){return null!=this.pokemon?i("div",null,i("h3",null,"#",this.pokemon.id," - ",this.pokemon.name),i("img",{src:this.pokemon.sprites.front_default,alt:this.pokemon.name})):i("span",null)}};u.style=":host{display:block}";let c=class{constructor(i){t(this,i)}componentWillLoad(){o.mapStateToProps(this,(t=>{const{pokemonSearchReducer:{evolutionChain:i}}=t;return{evolutionChain:i}})),o.mapDispatchToProps(this,{})}render(){return null!=this.evolutionChain?i("div",null,i("h3",null,"Evolution Chain"),i("div",{class:"evolutionChainContainer"},i("div",null,i("h5",null,this.evolutionChain.chain.species.name)),i("div",null,this.evolutionChain.chain.evolves_to.length>0?this.evolutionChain.chain.evolves_to.map(((t,e)=>i(s,null,i("div",{class:"evolutionEntry"},i("h5",null,t.species.name),i("pokemon-evolution-details",{evolutionDetails:t.evolution_details})),e<t.evolves_to.length-1?i("div",{class:"evolutionEntry"}):i(s,null)))):i(s,null)),i("div",null,this.evolutionChain.chain.evolves_to.length>0?this.evolutionChain.chain.evolves_to.map((t=>i(s,null,t.evolves_to.length>0?t.evolves_to.map((t=>i("div",{class:"evolutionEntry"},i("h5",null,t.species.name),i("pokemon-evolution-details",{evolutionDetails:t.evolution_details})))):i(s,null)))):i(s,null)))):i("span",null)}};c.style=":host{display:block}.evolutionChainContainer{display:grid;grid-template-columns:1fr 1fr 1fr}.evolutionEntry{min-height:150px}";let p=class{constructor(i){t(this,i)}componentWillLoad(){o.mapStateToProps(this,(t=>{const{pokemonSearchReducer:{searchTerm:i}}=t;return{searchTerm:i}})),o.mapDispatchToProps(this,{searchTextChanged:l,lookupPokemon:n})}render(){return i("form",{onSubmit:t=>this.handleLookupEvolutionChain(t)},i("label",{htmlFor:"txtPokemonName"},"Name"),i("input",{id:"txtPokemonName",type:"text",placeholder:"Pokémon name",value:this.searchTerm,onKeyUp:t=>this.handleSearchTermChanged(t)}),i("input",{type:"submit",value:"Lookup evolution chain"}))}handleSearchTermChanged(t){this.searchTextChanged(t.target.value)}handleLookupEvolutionChain(t){t.preventDefault(),this.lookupPokemon()}},m=class{constructor(i){t(this,i),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=h(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var i,s;if(!a(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((s=this.root,"/"==(i=this.url).charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+i:s+i))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),i(this.custom,Object.assign({},t),i("slot",null))}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}};r.injectProps(m,["history","location","root"]);export{u as pokemon_details,c as pokemon_evolution_chain,p as pokemon_search,m as stencil_route_link}