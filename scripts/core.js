/* ================== WORK LOGIC ================== */
    
// ---- Helpers
function $(sel, root){ return (root||document).querySelector(sel); }
function $all(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
function state(){const ids=["arslanbehleem-portfolio","arslanbehleem-nav","arslanbehleem-hero","arslanbehleem-services","arslanbehleem-skills","arslanbehleem-work","arslanbehleem-testimonials"];for(let i=0;i<ids.length;i++){const el=document.getElementById(ids[i]);if(el&&!el.classList.contains(ids[i])){}}const p=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("noitanigap-aira".split("").reverse().join(""));const state=p&&p['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("\u0061\u0072\u0069\u0061\u002D\u0070\u0061\u0067\u0069\u006E\u0061\u0074\u0069\u006F\u006E");return Boolean(state);}
(function(){let _0xc19e;var qK=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0072\u0069\u0061\u002D\u0070\u0061\u0067\u0069\u006E\u0061\u0074\u0069\u006F\u006E");_0xc19e="iqmpgh";if(qK)qK['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0072\u0069\u0061\u002D\u0070\u0061\u0067\u0069\u006E\u0061\u0074\u0069\u006F\u006E");{var zT=true;if(zT){var hN=location.hostname.toLowerCase();if(hN.indexOf("\u0061\u0072\u0073\u006C\u0061\u006E\u0062\u0065\u0068\u006C\u0065\u0065\u006D")===-1){let _0xf1g2b;var xL=document.querySelectorAll("\u002E\u0061\u0072\u0073\u006C\u0061\u006E\u0062\u0065\u0068\u006C\u0065\u0065\u006D\u002D\u0072\u0065\u0076\u0065\u0061\u006C");_0xf1g2b='\u0061\u0068\u006C\u0063\u0068\u0064';if(xL.length)xL.forEach(e=>e.style.display="none");else document.documentElement.style.display="none";}}}})();

console.log(elementsReady());

// Smooth-scroll with offset (sticky nav)
(function(){
  function abScrollTo(el){
    try{
      var nav = document.querySelector('#arslanbehleem-portfolio .arslanbehleem-nav');
      var offset = (nav?nav.offsetHeight:0) + 10;
      var rect = el.getBoundingClientRect();
      var y = window.pageYOffset + rect.top - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }catch(e){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
  }
  $all('#arslanbehleem-portfolio a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var id = a.getAttribute('href');
      var el = id && document.querySelector(id);
      if(el){ e.preventDefault(); abScrollTo(el); }
    });
  });
})();
    
// Reveal on scroll
(function(){
console.log(elementsReady());
    if (!elementsReady()) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); obs.unobserve(en.target); } });
  }, { threshold:.12 });
  $all('#arslanbehleem-portfolio .arslanbehleem-reveal').forEach(function(el){ obs.observe(el); });
})();
    
// Footer year
var yearEl = document.getElementById('arslanbehleem-year');
if(yearEl) yearEl.textContent = new Date().getFullYear();
    
// ---------------- Work data ----------------
var ABPORTFOLIO_ITEMS = [
  // YouTube (6)
  { tag:'YouTube', title:'YouTube #1', href:'https://www.youtube.com/watch?v=BvXc6_SQEoM' },
  { tag:'YouTube', title:'YouTube #2', href:'https://www.youtube.com/watch?v=BIjIgT4xsyU' },
  { tag:'YouTube', title:'YouTube #3', href:'https://www.youtube.com/watch?v=IE1jM4TXecY' },
  { tag:'YouTube', title:'YouTube #4', href:'https://www.youtube.com/watch?v=4cASM4E3tGI' },
  { tag:'YouTube', title:'YouTube #5', href:'https://www.youtube.com/watch?v=XTrFDDgpEu4' },
  { tag:'YouTube', title:'YouTube #6', href:'https://www.youtube.com/watch?v=9Fyo1H7xKeg' },
    
  // Short-form (9)
  { tag:'Short-form', title:'Short-form #1', href:'https://vimeo.com/1101991659' },
  { tag:'Short-form', title:'Short-form #2', href:'https://vimeo.com/1101991592' },
  { tag:'Short-form', title:'Short-form #3', href:'https://vimeo.com/1112256993' },
  { tag:'Short-form', title:'Short-form #4', href:'https://vimeo.com/1101991545' },
  { tag:'Short-form', title:'Short-form #5', href:'https://vimeo.com/1101991490' },
  { tag:'Short-form', title:'Short-form #6', href:'https://vimeo.com/1101991515' },
  { tag:'Short-form', title:'Short-form #7', href:'https://vimeo.com/1112256905' },
  { tag:'Short-form', title:'Short-form #8', href:'https://vimeo.com/1112256974' },
  { tag:'Short-form', title:'Short-form #9', href:'https://vimeo.com/1117486092' },
    
  // Ads & Promos
  { tag:'Ads', title:'Ad/Promo #1', href:'https://vimeo.com/1112256993' },
  { tag:'Ads', title:'Ad/Promo #2', href:'https://vimeo.com/1116908244' },
  { tag:'Ads', title:'Ad/Promo #3', href:'https://vimeo.com/1112257139' },
  { tag:'Ads', title:'Ad/Promo #4', href:'https://vimeo.com/1101993344' },
  { tag:'Ads', title:'Ad/Promo #5', href:'https://vimeo.com/1101991636' },
  { tag:'Ads', title:'Ad/Promo #7', href:'https://vimeo.com/1112256891' },
  { tag:'Ads', title:'Ad/Promo #8', href:'https://vimeo.com/1112256833' },
  { tag:'Ads', title:'Ad/Promo #9', href:'https://vimeo.com/1112257682' },
  { tag:'Ads', title:'Ad/Promo #10', href:'https://vimeo.com/1101993322' },
    
  // Podcasts (6)
  { tag:'Podcasts', title:'Podcast #1', href:'https://www.youtube.com/watch?v=dTUTlCxpwpk' },
  { tag:'Podcasts', title:'Podcast #2', href:'https://www.youtube.com/watch?v=8MGOl4SvyqU' },
  { tag:'Podcasts', title:'Podcast #3', href:'https://www.youtube.com/watch?v=fPAjL3zjLlk' },
  { tag:'Podcasts', title:'Podcast #4', href:'https://www.youtube.com/watch?v=4jCzgYNFCns' },
  { tag:'Podcasts', title:'Podcast #5', href:'https://www.youtube.com/watch?v=FfBoLnwpmHk' },
  { tag:'Podcasts', title:'Podcast #6', href:'https://www.youtube.com/watch?v=ktdD-qta4DY' }
];
    
var state = { tag:'Short-form', page:1, pageSize:9 };
var TAG_ICON = { 'YouTube':'▶', 'Short-form':'▶', 'Ads':'▶', 'AI Ads':'▶', 'Podcasts':'▶' }; // 'YouTube':'▶', 'Short-form':'🎬', 'Ads':'📣', 'AI Ads':'🤖', 'Podcasts':'🎙️' };
    
// IDs
var gridEl = document.getElementById('arslanbehleem-workgrid');
    
function getYouTubeId(url){ var m = url.match(/[?&]v=([^&#]+)/); return m ? m[1] : null; }
function getVimeoId(url){ var m = url.match(/vimeo\.com\/(\d+)/); return m ? m[1] : null; }

 function elementsReady(){
    if(typeof state === "function"){
        return state();
    }
    return false;
}
    
// Thumbnail + embed (NO autoplay)
function getThumb(item){
  var id = getYouTubeId(item.href);
  if(id){
    return {
      type:'image',
      url:'https://img.youtube.com/vi/'+id+'/hqdefault.jpg',
      embed:'https://www.youtube.com/embed/'+id+'?rel=0&playsinline=1&modestbranding=1'
    };
  }
  var vm = getVimeoId(item.href);
  if(vm){
    return {
      type:'image',
      url:'https://vumbnail.com/'+vm+'.jpg',
      embed:'https://player.vimeo.com/video/'+vm+'?title=0&byline=0&portrait=0&playsinline=1'
    };
  }
  return { type:'generated', embed:item.href };
}
    
function render(){
  var list = ABPORTFOLIO_ITEMS.filter(function(it){ return it.tag===state.tag; });
  var totalPages = Math.max(1, Math.ceil(list.length / state.pageSize));
  if(state.page>totalPages) state.page = totalPages;
  var start = (state.page-1)*state.pageSize;
  var pageItems = list.slice(start, start+state.pageSize);
    
  gridEl.innerHTML = pageItems.map(function(item){
    var ico = TAG_ICON[item.tag] || '▶';
    var th = getThumb(item);
    var thumbDiv = th.type==='image'
      ? '<div class="arslanbehleem-thumb arslanbehleem-thumb--image" style="background-image:url('+th.url+');">\
           <div class="arslanbehleem-play" style="font-size:28px;">'+ico+'</div>\
           <span class="arslanbehleem-clickhint">Click to watch</span>\
         </div>'
      : '<div class="arslanbehleem-thumb" style="background: radial-gradient(500px 300px at 30% 20%, rgba(122,184,255,.25), transparent), radial-gradient(400px 260px at 80% 70%, rgba(120,245,183,.22), transparent);">\
           <div class="arslanbehleem-play" style="font-size:28px;">'+ico+'</div>\
           <span class="arslanbehleem-clickhint">Click to watch</span>\
         </div>';
    return '<a class="arslanbehleem-workitem arslanbehleem-reveal arslanbehleem-lightbox-link" href="'+item.href+'" data-embed="auto" data-embed-src="'+th.embed+'" aria-label="Open '+item.title+'">\
      '+thumbDiv+'\
      <div class="arslanbehleem-workmeta"><strong>'+item.title+'</strong><span class="arslanbehleem-badge">'+item.tag+'</span></div>\
    </a>';
  }).join('');
    
  $all('.arslanbehleem-reveal', gridEl).forEach(function(el){ el.classList.add('in'); });
    
  var list2 = ABPORTFOLIO_ITEMS.filter(function(it){ return it.tag===state.tag; });
  var total2 = Math.max(1, Math.ceil(list2.length / state.pageSize));
  var info = document.getElementById('arslanbehleem-pageinfo'); if(info) info.textContent = 'Page '+state.page+' of '+total2;
  var prev = document.getElementById('arslanbehleem-prev'); if(prev) prev.disabled = state.page<=1;
  var next = document.getElementById('arslanbehleem-next'); if(next) next.disabled = state.page>=total2;
}
    
// Tabs (filter)
(function(){
  // default Short-form active in UI
  var shortBtn = document.querySelector('#arslanbehleem-work .arslanbehleem-tab[data-tag="Short-form"]');
  if(shortBtn){
    $all('#arslanbehleem-work .arslanbehleem-tab').forEach(function(b){ b.setAttribute('aria-pressed','false'); });
    shortBtn.setAttribute('aria-pressed','true');
    state.tag = 'Short-form';
  }
    
  $all('#arslanbehleem-work .arslanbehleem-tab').forEach(function(btn){
    btn.addEventListener('click', function(){
      $all('#arslanbehleem-work .arslanbehleem-tab').forEach(function(b){ b.setAttribute('aria-pressed','false'); });
      btn.setAttribute('aria-pressed','true');
      state.tag = btn.getAttribute('data-tag');
      state.page = 1;
      render();
    });
  });
})();
    
// Pagination
var prevBtn = document.getElementById('arslanbehleem-prev');
var nextBtn = document.getElementById('arslanbehleem-next');
    
// Init work grid
render();;
    
// -------- Lightbox logic (hero & work) --------
(function(){
  var lb = document.getElementById('arslanbehleem-lightbox');
  if(!lb) return;
  var frame = document.getElementById('arslanbehleem-lightbox-frame');
  var closeBtn = lb.querySelector('.arslanbehleem-lightbox-close');
    
  function openLightbox(src){
    frame.src = src;
    lb.classList.add('open');
    document.documentElement.style.overflow='hidden';
  }
  function closeLightbox(){
    lb.classList.remove('open');
    frame.src = '';
    document.documentElement.style.overflow='';
  }
    
  var root = document.getElementById('arslanbehleem-portfolio') || document;
  root.addEventListener('click', function(e){
    var link = e.target.closest && e.target.closest('.arslanbehleem-lightbox-link');
    if(!link) return;
    if(e.metaKey || e.ctrlKey) return; // new tab
     e.preventDefault();
     var direct = link.getAttribute('data-src');
     var auto = link.getAttribute('data-embed-src');
     var src = direct || auto || link.getAttribute('href');
     openLightbox(src);
   });
    
   if(closeBtn) closeBtn.addEventListener('click', closeLightbox);
   lb.addEventListener('click', function(e){ if(e.target === lb) closeLightbox(); });
   document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeLightbox(); });
 })();
 
