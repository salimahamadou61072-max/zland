const translations = {
  fr: {
    announcement:"Une vision. Plusieurs opportunités. Construisons la suite ensemble.",navActivities:"Activités",navShop:"Boutique",navServices:"Services",navAbout:"À propos",navContact:"Contact",cart:"Panier",
    heroEyebrow:"INNOVATION · TECHNOLOGIE · BUSINESS",heroTitle:"Les idées d’aujourd’hui.<br><em>Les solutions de demain.</em>",heroCopy:"ZLAND explore, conçoit et développe des projets à la croisée de la technologie, des services et du commerce.",discover:"Découvrir ZLAND",shopNow:"Voir la boutique",heroNote:"Une plateforme indépendante, pensée pour évoluer.",scroll:"DÉFILER POUR EXPLORER ↓",
    aboutKicker:"01 — NOTRE VISION",aboutTitle:"Un terrain de jeu pour <span>les idées ambitieuses.</span>",aboutCopy:"ZLAND est une plateforme entrepreneuriale conçue pour faire grandir plusieurs activités sous une même identité. Nous commençons avec des services et le commerce, avec une ambition à long terme : concevoir des systèmes et des technologies utiles.",talk:"Parlons de votre projet ↗",
    activitiesKicker:"02 — NOS UNIVERS",activitiesTitle:"Plusieurs domaines.<br><span>Une même énergie.</span>",activitiesCopy:"Des activités complémentaires, développées progressivement autour d'une même vision.",innovation:"Innovation & ingénierie",innovationCopy:"Conception de systèmes, prototypage et exploration technologique.",energy:"Énergie",energyCopy:"Imaginer des solutions énergétiques plus intelligentes.",commerce:"Commerce",commerceCopy:"Sélection de produits et expériences d'achat en ligne.",services:"Services numériques",servicesCopy:"Sites web, présence digitale et automatisation.",future:"PÔLE EN DÉVELOPPEMENT",
    shopKicker:"03 — ZLAND STORE",shopTitle:"La sélection <span>du moment.</span>",shopCopy:"Une première vitrine commerciale. Les articles affichés sont des exemples de démonstration à remplacer avant toute vente.",demoNotice:"Catalogue de démonstration — aucun produit n'est actuellement proposé à la vente.",
    servicesKicker:"04 — TRAVAILLONS ENSEMBLE",servicesTitle:"Une idée à concrétiser ?<br><span>Commençons ici.</span>",servicesIntro:"ZLAND souhaite accompagner les projets qui ont besoin d'une présence numérique claire et efficace.",formName:"Votre nom",formEmail:"Votre e-mail",formNeed:"Que souhaitez-vous développer ?",choose:"Choisir un service",formMessage:"Quelques détails",sendRequest:"Préparer ma demande ↗",formHint:"Le bouton prépare un e-mail dans votre messagerie. Aucun message n'est envoyé automatiquement.",
    closingTitle:"Imagine. Build. <span>Evolve.</span>",closingCopy:"Chaque grand projet commence par une première version.",contactUs:"Entrer en contact ↗",contactKicker:"05 — CONTACT",contactTitle:"Créons quelque chose<br><span>qui compte.</span>",emailPlaceholder:"Adresse provisoire à remplacer avant publication.",footerLine:"Une vision. Plusieurs opportunités.",
    add:"Ajouter",added:"Ajouté",yourCart:"Votre panier",total:"Total indicatif",checkout:"Passer au paiement",checkoutHint:"Paiement désactivé tant que le compte Stripe et le catalogue réel ne sont pas configurés.",empty:"Votre panier est vide.",remove:"Retirer",formSuccess:"Votre messagerie va s'ouvrir avec votre demande préremplie.",demoProduct:"Produit de démonstration",checkoutUnavailable:"Le paiement n'est pas encore configuré. Ajoutez vos vrais produits et configurez Stripe avant l'ouverture."
  },
  en: {
    announcement:"One vision. Many opportunities. Let's build what comes next.",navActivities:"Activities",navShop:"Shop",navServices:"Services",navAbout:"About",navContact:"Contact",cart:"Cart",
    heroEyebrow:"INNOVATION · TECHNOLOGY · BUSINESS",heroTitle:"Today's ideas.<br><em>Tomorrow's solutions.</em>",heroCopy:"ZLAND explores, designs and develops projects at the crossroads of technology, services and commerce.",discover:"Discover ZLAND",shopNow:"Explore the shop",heroNote:"An independent platform, built to evolve.",scroll:"SCROLL TO EXPLORE ↓",
    aboutKicker:"01 — OUR VISION",aboutTitle:"A playground for <span>ambitious ideas.</span>",aboutCopy:"ZLAND is an entrepreneurial platform designed to grow multiple activities under one identity. We are starting with services and commerce, with a long-term ambition: designing useful systems and technologies.",talk:"Let's talk about your project ↗",
    activitiesKicker:"02 — OUR WORLDS",activitiesTitle:"Different fields.<br><span>One shared drive.</span>",activitiesCopy:"Complementary activities, developed step by step around one shared vision.",innovation:"Innovation & engineering",innovationCopy:"System design, prototyping and technology exploration.",energy:"Energy",energyCopy:"Imagining smarter energy solutions.",commerce:"Commerce",commerceCopy:"Curated products and online shopping experiences.",services:"Digital services",servicesCopy:"Websites, digital presence and automation.",future:"IN DEVELOPMENT",
    shopKicker:"03 — ZLAND STORE",shopTitle:"The current <span>selection.</span>",shopCopy:"An initial storefront. Displayed items are demo examples and must be replaced before any sale.",demoNotice:"Demo catalogue — no products are currently offered for sale.",
    servicesKicker:"04 — LET'S WORK TOGETHER",servicesTitle:"An idea to bring to life?<br><span>Start here.</span>",servicesIntro:"ZLAND aims to support projects that need a clear and effective digital presence.",formName:"Your name",formEmail:"Your email",formNeed:"What would you like to build?",choose:"Choose a service",formMessage:"A few details",sendRequest:"Prepare my request ↗",formHint:"This button prepares an email in your mail app. Nothing is sent automatically.",
    closingTitle:"Imagine. Build. <span>Evolve.</span>",closingCopy:"Every great project starts with a first version.",contactUs:"Get in touch ↗",contactKicker:"05 — CONTACT",contactTitle:"Let's create something<br><span>that matters.</span>",emailPlaceholder:"Temporary address — replace before publishing.",footerLine:"One vision. Many opportunities.",
    add:"Add",added:"Added",yourCart:"Your cart",total:"Estimated total",checkout:"Proceed to checkout",checkoutHint:"Payments remain disabled until Stripe and the real product catalogue are configured.",empty:"Your cart is empty.",remove:"Remove",formSuccess:"Your mail app will open with your request pre-filled.",demoProduct:"Demo product",checkoutUnavailable:"Payments are not configured yet. Add real products and configure Stripe before launch."
  }
};
const products = [
  {id:"desk-kit",icon:"⌘",category:"ACCESSOIRES",name:{fr:"Kit bureau essentiel",en:"Essential desk kit"},description:{fr:"Exemple de fiche produit à personnaliser.",en:"Example product listing to customize."},price:29.90},
  {id:"travel-bottle",icon:"◉",category:"LIFESTYLE",name:{fr:"Gourde nomade",en:"Everyday travel bottle"},description:{fr:"Exemple de fiche produit à personnaliser.",en:"Example product listing to customize."},price:19.90},
  {id:"tech-organizer",icon:"▤",category:"TECH",name:{fr:"Organisateur tech",en:"Tech organizer"},description:{fr:"Exemple de fiche produit à personnaliser.",en:"Example product listing to customize."},price:24.90}
];
let lang = "fr";
let cart = [];
const $ = (s)=>document.querySelector(s);
const money = (n)=>new Intl.NumberFormat(lang==="fr"?"fr-FR":"en-GB",{style:"currency",currency:"EUR"}).format(n);
function renderProducts(){
  $("#productGrid").innerHTML = products.map(p=>`<article class="product-card"><div class="product-visual" aria-hidden="true">${p.icon}</div><div class="product-info"><small>${p.category}</small><h3>${p.name[lang]}</h3><p>${p.description[lang]}</p><div class="product-bottom"><span class="product-price">${money(p.price)}</span><button class="add-button" data-add="${p.id}" disabled title="${translations[lang].demoProduct}">${translations[lang].add} +</button></div></div></article>`).join("");
}
function applyLanguage(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});
  $("#languageToggle").textContent=lang==="fr"?"EN":"FR";
  renderProducts();renderCart();
}
function renderCart(){
  $("#cartCount").textContent=cart.reduce((n,x)=>n+x.qty,0);
  $("#cartItems").innerHTML=cart.length?cart.map(item=>{const p=products.find(x=>x.id===item.id);return `<div class="cart-row"><span>${p.name[lang]} × ${item.qty}</span><span>${money(p.price*item.qty)} <button data-remove="${p.id}">${translations[lang].remove}</button></span></div>`}).join(""):`<p class="empty-cart">${translations[lang].empty}</p>`;
  $("#cartTotal").textContent=money(cart.reduce((n,item)=>n+products.find(p=>p.id===item.id).price*item.qty,0));
}
$("#languageToggle").addEventListener("click",()=>{lang=lang==="fr"?"en":"fr";applyLanguage()});
$("#cartOpen").addEventListener("click",()=>$("#cartOverlay").hidden=false);
function closeCart(){$("#cartOverlay").hidden=true}
$("#cartClose").addEventListener("click",closeCart);$("#cartCloseBackdrop").addEventListener("click",closeCart);
$("#productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const item=cart.find(x=>x.id===b.dataset.add);item?item.qty++:cart.push({id:b.dataset.add,qty:1});renderCart()});
$("#cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;cart=cart.filter(x=>x.id!==b.dataset.remove);renderCart()});
$("#checkoutButton").addEventListener("click",()=>alert(translations[lang].checkoutUnavailable));
$("#serviceForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent("Demande de service ZLAND — "+d.get("need"));const body=encodeURIComponent("Nom : "+d.get("name")+"\nE-mail : "+d.get("email")+"\nBesoin : "+d.get("need")+"\n\n"+d.get("message"));window.location.href="mailto:hello@zland.example?subject="+subject+"&body="+body;$("#formFeedback").textContent=translations[lang].formSuccess});
$("#menuToggle").addEventListener("click",()=>$(".main-nav").classList.toggle("open"));
$(".main-nav").addEventListener("click",e=>{if(e.target.tagName==="A")$(".main-nav").classList.remove("open")});
$("#year").textContent=new Date().getFullYear();
applyLanguage();
