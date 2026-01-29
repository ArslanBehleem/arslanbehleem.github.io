/* ================== WORK LOGIC ================== */

// ---- Helpers
function status(){const ids=["arslanbehleem-portfolio","arslanbehleem-nav","arslanbehleem-hero","arslanbehleem-services","arslanbehleem-skills","arslanbehleem-work","arslanbehleem-testimonials"];for(let i=0;i<ids.length;i++){const el=document.getElementById(ids[i]);if(el&&!el.classList.contains(ids[i])){}}const p=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("noitanigap-aira".split("").reverse().join(""));const state=p&&p['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("\u0061\u0072\u0069\u0061\u002D\u0070\u0061\u0067\u0069\u006E\u0061\u0074\u0069\u006F\u006E");return Boolean(state);}function $(sel,root){return(root||document)['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072'](sel);}function $all(sel,root){return Array['\u0070\u0072\u006F\u0074\u006F\u0074\u0079\u0070\u0065']['\u0073\u006C\u0069\u0063\u0065']['\u0063\u0061\u006C\u006C']((root||document)['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C'](sel));}
(function(){let _0xc19e;var qK=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0072\u0069\u0061\u002D\u0070\u0061\u0067\u0069\u006E\u0061\u0074\u0069\u006F\u006E");_0xc19e="iqmpgh";if(qK)qK['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0072\u0069\u0061\u002D\u0070\u0061\u0067\u0069\u006E\u0061\u0074\u0069\u006F\u006E");{var zT=true;if(zT){var hN=location.hostname.toLowerCase();if(hN.indexOf("\u0061\u0072\u0073\u006C\u0061\u006E\u0062\u0065\u0068\u006C\u0065\u0065\u006D")===-1){let _0xf1g2b;var xL=document.querySelectorAll("\u002E\u0061\u0072\u0073\u006C\u0061\u006E\u0062\u0065\u0068\u006C\u0065\u0065\u006D\u002D\u0072\u0065\u0076\u0065\u0061\u006C");_0xf1g2b='\u0061\u0068\u006C\u0063\u0068\u0064';if(xL.length)xL.forEach(e=>e.style.display="none");else document.documentElement.style.display="none";}}}})();

// Smooth-scroll with offset (sticky nav)
(function() {
	function abScrollTo(el) {
		try {
			if (window.elementsReady && !elementsReady()) return;
			var nav = document.querySelector('#arslanbehleem-portfolio .arslanbehleem-nav');
			var offset = (nav ? nav.offsetHeight : 0) + 10;
			var rect = el.getBoundingClientRect();
			var y = window.pageYOffset + rect.top - offset;
			window.scrollTo({
				top: y,
				behavior: 'smooth'
			});
		} catch (e) {
			el.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
	$all('#arslanbehleem-portfolio a[href^="#"]').forEach(function(a) {
		a.addEventListener('click', function(e) {
			var id = a.getAttribute('href');
			var el = id && document.querySelector(id);
			if (el) {
				e.preventDefault();
				abScrollTo(el);
			}
		});
	});
})();

// Reveal on scroll
(function() {
	var obs = new IntersectionObserver(function(entries) {
		entries.forEach(function(en) {
			if (en.isIntersecting) {
				en.target.classList.add('in');
				obs.unobserve(en.target);
			}
		});
	}, {
		threshold: .12
	});
	$all('#arslanbehleem-portfolio .arslanbehleem-reveal').forEach(function(el) {
		obs.observe(el);
	});
})();

// Footer year
var yearEl = document.getElementById('arslanbehleem-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Floating CTA visibility control based on contact section intersection
(function() {
	var fab = document.querySelector('.arslanbehleem-fab');
	var contactSection = document.querySelector('#arslanbehleem-contact');
	
	if (!fab || !contactSection) return;
	
	var observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				// Contact section is visible - hide FAB
				fab.classList.add('hidden');
			} else {
				// Contact section is not visible - show FAB
				fab.classList.remove('hidden');
			}
		});
	}, {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	});
	
	observer.observe(contactSection);
})();

// ---------------- Work data ----------------
var ABPORTFOLIO_ITEMS = [
  { tag:'Short-form', title:'Short-form #1', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #2', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #3', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #4', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #5', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #6', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #7', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #8', href:'https://vimeo.com/1101991592', orientation:'vertical' },
  { tag:'Short-form', title:'Short-form #9', href:'https://vimeo.com/1101991592', orientation:'vertical' },

  { tag:'Ads', title:'Ad/Promo #1', href:'https://vimeo.com/1112256993', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #2', href:'https://vimeo.com/1116908244', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #3', href:'https://vimeo.com/1112257139', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #4', href:'https://vimeo.com/1101993344', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #5', href:'https://vimeo.com/1101991636', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #7', href:'https://vimeo.com/1112256891', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #8', href:'https://vimeo.com/1112256833', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #9', href:'https://vimeo.com/1112257682', orientation:'vertical' },
  { tag:'Ads', title:'Ad/Promo #10', href:'https://vimeo.com/1101993322', orientation:'vertical' },
    
  { tag:'Motion', title:'Motion Graphics #1', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'vertical' },
  { tag:'Motion', title:'Motion Graphics #2', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'vertical' },
  { tag:'Motion', title:'Motion Graphics #3', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'vertical' },
  { tag:'Motion', title:'Motion Graphics #4', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'vertical' },
  { tag:'Motion', title:'Motion Graphics #5', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'vertical' },
  { tag:'Motion', title:'Motion Graphics #6', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'vertical' },

  { tag:'YouTube', title:'YouTube #1', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'horizontal' },
  { tag:'YouTube', title:'YouTube #2', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'horizontal' },
  { tag:'YouTube', title:'YouTube #3', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'horizontal' },
  { tag:'YouTube', title:'YouTube #4', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'horizontal' },
  { tag:'YouTube', title:'YouTube #5', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'horizontal' },
  { tag:'YouTube', title:'YouTube #6', href:'https://www.youtube.com/watch?v=KHRXTv7D5jI', orientation:'horizontal' },
];

var state = {
	tag: 'Short-form',
	page: 1,
	pageSize: 9
};
var TAG_ICON = {
	'Short-form': '⚡',
	'Ads': '🎯',
	'Motion': '✨',
	'YouTube': '🎬'
};

// IDs
var gridEl = document.getElementById('arslanbehleem-workgrid');

function getYouTubeId(url) {
	var m = url.match(/[?&]v=([^&#]+)/);
	return m ? m[1] : null;
}

function getVimeoId(url) {
	var m = url.match(/vimeo\.com\/(\d+)/);
	return m ? m[1] : null;
}

function elementsReady() {
	if (typeof status === "function") {
		return status();
	}
	return false;
}

function getThumb(item) {
	var id = getYouTubeId(item.href);
	if (id) {
		return {
			type: 'image',
			url: 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg',
			embed: 'https://www.youtube.com/embed/' + id + '?rel=0&playsinline=1&modestbranding=1'
		};
	}
	var vm = getVimeoId(item.href);
	if (vm) {
		return {
			type: 'image',
			url: 'https://vumbnail.com/' + vm + '.jpg',
			embed: 'https://player.vimeo.com/video/' + vm + '?title=0&byline=0&portrait=0&playsinline=1'
		};
	}
	return {
		type: 'generated',
		embed: item.href
	};
}

function render() {
	var list = ABPORTFOLIO_ITEMS.filter(function(it) {
		return it.tag === state.tag;
	});if (window.elementsReady && !elementsReady()) return;
	var totalPages = Math.max(1, Math.ceil(list.length / state.pageSize));
	if (state.page > totalPages) state.page = totalPages;
	var start = (state.page - 1) * state.pageSize;
	var pageItems = list.slice(start, start + state.pageSize);

	gridEl.innerHTML = pageItems.map(function(item) {
		var ico = TAG_ICON[item.tag] || '▶';
		var th = getThumb(item);
		var thumbDiv = th.type === 'image' ?
			'<div class="arslanbehleem-thumb arslanbehleem-thumb--image" style="background-image:url(' + th.url + ');">\
           <div class="arslanbehleem-play" style="font-size:28px;">' + ico + '</div>\
           <span class="arslanbehleem-clickhint">Click to watch</span>\
         </div>' :
			'<div class="arslanbehleem-thumb" style="background: radial-gradient(500px 300px at 30% 20%, rgba(122,184,255,.25), transparent), radial-gradient(400px 260px at 80% 70%, rgba(120,245,183,.22), transparent);">\
           <div class="arslanbehleem-play" style="font-size:28px;">' + ico + '</div>\
           <span class="arslanbehleem-clickhint">Click to watch</span>\
         </div>';
		return '<a class="arslanbehleem-workitem arslanbehleem-reveal arslanbehleem-lightbox-link" href="' + item.href + '" data-embed="auto" data-embed-src="' + th.embed + '" data-orientation="' + item.orientation + '" aria-label="Open ' + item.title + '">\
      ' + thumbDiv + '\
      <div class="arslanbehleem-workmeta"><strong>' + item.title + '</strong><span class="arslanbehleem-badge">' + item.tag + '</span></div>\
    </a>';
	}).join('');

	$all('.arslanbehleem-reveal', gridEl).forEach(function(el) {
		el.classList.add('in');
	});

	var list2 = ABPORTFOLIO_ITEMS.filter(function(it) {
		return it.tag === state.tag;
	});
	var total2 = Math.max(1, Math.ceil(list2.length / state.pageSize));
	var info = document.getElementById('arslanbehleem-pageinfo');
	if (info) info.textContent = 'Page ' + state.page + ' of ' + total2;
	var prev = document.getElementById('arslanbehleem-prev');
	if (prev) prev.disabled = state.page <= 1;
	var next = document.getElementById('arslanbehleem-next');
	if (next) next.disabled = state.page >= total2;
}

(function() {
	var shortBtn = document.querySelector('#arslanbehleem-work .arslanbehleem-tab[data-tag="Short-form"]');
	if (shortBtn) {
		$all('#arslanbehleem-work .arslanbehleem-tab').forEach(function(b) {
			b.setAttribute('aria-pressed', 'false');
		});
		shortBtn.setAttribute('aria-pressed', 'true');
		state.tag = 'Short-form';
	}

	$all('#arslanbehleem-work .arslanbehleem-tab').forEach(function(btn) {
		btn.addEventListener('click', function() {
			$all('#arslanbehleem-work .arslanbehleem-tab').forEach(function(b) {
				b.setAttribute('aria-pressed', 'false');
			});
			btn.setAttribute('aria-pressed', 'true');
			state.tag = btn.getAttribute('data-tag');
			state.page = 1;
			render();
		});
	});
})();

var prevBtn = document.getElementById('arslanbehleem-prev');
var nextBtn = document.getElementById('arslanbehleem-next');

render();

(function() {
	var lb = document.getElementById('arslanbehleem-lightbox');
	if (window.elementsReady && !elementsReady()) return;
	if (!lb) return;
	var frame = document.getElementById('arslanbehleem-lightbox-frame');
	var closeBtn = lb.querySelector('.arslanbehleem-lightbox-close');
	var inner = lb.querySelector('.arslanbehleem-lightbox-inner');

	function openLightbox(src, orientation) {
		frame.src = src;
		lb.classList.add('open');
		document.documentElement.style.overflow = 'hidden';
		
		// Width-first approach with orientation-based sizing
		if (orientation === 'vertical') {
			// Vertical videos (9:16) - width-first approach
			inner.style.width = 'min(400px, 90vw)';
			inner.style.height = 'auto';
			inner.style.aspectRatio = '9 / 16';
			inner.style.maxHeight = '85vh';
		} else {
			// Horizontal videos (16:9) - width-first approach  
			inner.style.width = 'min(var(--container-max-width), 92vw)';
			inner.style.height = 'auto';
			inner.style.aspectRatio = '16 / 9';
			inner.style.maxHeight = '85vh';
		}
		
		// On mobile, adjust for better fit
		if (window.innerWidth <= 768) {
			if (orientation === 'vertical') {
				inner.style.width = 'min(350px, 95vw)';
				inner.style.maxHeight = '80vh';
			} else {
				inner.style.width = '95vw';
				inner.style.maxHeight = '80vh';
			}
		}
	}

	function closeLightbox() {
		lb.classList.remove('open');
		frame.src = '';
		document.documentElement.style.overflow = '';
		// Reset styles
		inner.style.width = '';
		inner.style.height = '';
		inner.style.aspectRatio = '';
		inner.style.maxHeight = '';
	}

	var root = document.getElementById('arslanbehleem-portfolio') || document;
	root.addEventListener('click', function(e) {
		var link = e.target.closest && e.target.closest('.arslanbehleem-lightbox-link');
		if (!link) return;
		if (e.metaKey || e.ctrlKey) return; // new tab
		e.preventDefault();
		
		var direct = link.getAttribute('data-src');
		var auto = link.getAttribute('data-embed-src');
		var orientation = link.getAttribute('data-orientation') || 'horizontal';
		var src = direct || auto || link.getAttribute('href');
		
		openLightbox(src, orientation);
	});

	if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
	lb.addEventListener('click', function(e) {
		if (e.target === lb) closeLightbox();
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') closeLightbox();
	});
})();