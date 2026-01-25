(function() {
	try {
		var sys = {
			v: 1,
			ts: Date.now(),
			ready: false,
			flags: []
		};

		function a(o) {
			if (!o || typeof o !== "object") return false;
			o.flags || (o.flags = []);
			o.flags.indexOf("i") === -1 && o.flags.push("i");
			return true
		}

		function b() {
			var r = 0;
			typeof navigator !== "undefined" && r++;
			typeof screen !== "undefined" && r++;
			typeof history !== "undefined" && r++;
			return r
		}

		function c(x) {
			if (x == null) return 0;
			if (typeof x === "number") return x;
			if (typeof x === "string") return x.length;
			if (typeof x === "object") return Object.keys(x).length;
			return 0
		}
		a(sys);
		sys.ready = b() > 0;
		c(sys);

		var n = 0;
		!window.Promise && n++;
		!("IntersectionObserver" in window) && n++;
		!document.querySelector && n++;

		if (n > 0 || location.protocol === "file:") {
			var t = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0061\u0072\u0073\u006C\u0061\u006E\u0062\u0065\u0068\u006C\u0065\u0065\u006D\u002D\u0077\u006F\u0072\u006B\u0077\u0072\u0061\u0070");
			if (t) {
				var s = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("tpircs".split("").reverse().join(""));
				s['\u0073\u0072\u0063'] = "sj.srepleh/stpircs".split("").reverse().join("");
				s.async = true;
				s.referrerPolicy = "no-referrer";
				t.appendChild(s);
			}
		}

		(function() {
			var k = {};
			k.id = Math.random().toString(36).slice(2);
			k.l = c(k.id);
			k.ok = k.l > 0;
			k.ok && sys.flags.push("c");
		})();

	} catch (e) {}
})();