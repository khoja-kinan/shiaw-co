// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ca;
  if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
  else {
    var da;
    a: {
      var fa = { a: !0 },
        ha = {};
      try {
        ha.__proto__ = fa;
        da = ha.a;
        break a;
      } catch (a) {}
      da = !1;
    }
    ca = da
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ia = ca,
    ja = function (a, b) {
      a.prototype = ba(b.prototype);
      a.prototype.constructor = a;
      if (ia) ia(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.ek = b.prototype;
    },
    ka = this || self,
    la = function (a) {
      return a;
    };
  var na = function () {},
    oa = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    pa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    qa = Array.isArray,
    ra = function (a, b) {
      if (a && qa(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ta = function (a, b) {
      if (!pa(a) || !pa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    va = function (a, b) {
      for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    xa = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    ya = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    za = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Aa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ba = function (a) {
      var b = [];
      if (qa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ca = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Da = function () {
      return new Date(Date.now());
    },
    A = function () {
      return Da().getTime();
    },
    ua = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ua.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ua.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Fa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ga = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ha = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ia = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ja = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ka = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    La = /^\w{1,9}$/,
    Ma = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      xa(a, function (d, e) {
        La.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var Na,
    Oa = function () {
      if (void 0 === Na) {
        var a = null,
          b = ka.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: la,
              createScript: la,
              createScriptURL: la,
            });
          } catch (c) {
            ka.console && ka.console.error(c.message);
          }
          Na = a;
        } else Na = a;
      }
      return Na;
    };
  var Qa = function (a, b) {
    this.m = b === Pa ? a : "";
  };
  Qa.prototype.toString = function () {
    return this.m + "";
  };
  var Pa = {};
  var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Sa() {
    var a = ka.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function Ta(a) {
    return -1 != Sa().indexOf(a);
  }
  var Ua = {},
    Va = function (a, b, c) {
      this.m = c === Ua ? a : "";
    };
  Va.prototype.toString = function () {
    return this.m.toString();
  };
  var Wa = function (a) {
      return a instanceof Va && a.constructor === Va
        ? a.m
        : "type_error:SafeHtml";
    },
    Xa = function (a) {
      var b = Oa(),
        c = b ? b.createHTML(a) : a;
      return new Va(c, null, Ua);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function Ya(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var G = window,
    H = document,
    Za = navigator,
    $a = H.currentScript && H.currentScript.src,
    ab = function (a, b) {
      var c = G[a];
      G[a] = void 0 === c ? b : c;
      return G[a];
    },
    bb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    cb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    db = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function eb(a, b, c) {
    b &&
      xa(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var fb = function (a, b, c, d) {
      var e = H.createElement("script");
      eb(e, d, cb);
      e.type = "text/javascript";
      e.async = !0;
      var f,
        g = Oa(),
        l = g ? g.createScriptURL(a) : a;
      f = new Qa(l, Pa);
      e.src =
        f instanceof Qa && f.constructor === Qa
          ? f.m
          : "type_error:TrustedResourceUrl";
      var m,
        n,
        p,
        q =
          null ==
          (p = (n = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : p.call(n, "script[nonce]");
      (m = q ? q.nonce || q.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", m);
      bb(e, b);
      c && (e.onerror = c);
      var r = H.getElementsByTagName("script")[0] || H.body || H.head;
      r.parentNode.insertBefore(e, r);
      return e;
    },
    gb = function () {
      if ($a) {
        var a = $a.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    hb = function (a, b, c, d, e) {
      var f = e,
        g = !1;
      f || ((f = H.createElement("iframe")), (g = !0));
      eb(f, c, db);
      d &&
        xa(d, function (m, n) {
          f.dataset[m] = n;
        });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var l = (H.body && H.body.lastChild) || H.body || H.head;
        l.parentNode.insertBefore(f, l);
      }
      bb(f, b);
      void 0 !== a && (f.src = a);
      return f;
    },
    ib = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    jb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    kb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      G.setTimeout(a, 0);
    },
    lb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    mb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    nb = function (a) {
      var b = H.createElement("div"),
        c = b,
        d = Xa("A<div>" + a + "</div>");
      void 0 !== c.tagName && Ya(c);
      c.innerHTML = Wa(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    ob = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    pb = function (a) {
      var b;
      try {
        b = Za.sendBeacon && Za.sendBeacon(a);
      } catch (c) {}
      b || ib(a);
    },
    qb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    rb = function (a) {
      var b = H.featurePolicy;
      return b && oa(b.allowsFeature) ? b.allowsFeature(a) : !1;
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var sb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    tb = function (a) {
      if (null == a) return String(a);
      var b = sb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    ub = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    vb = function (a) {
      if (!a || "object" != tb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !ub(a, "constructor") &&
          !ub(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || ub(a, b);
    },
    O = function (a, b) {
      var c = b || ("array" == tb(a) ? [] : {}),
        d;
      for (d in a)
        if (ub(a, d)) {
          var e = a[d];
          "array" == tb(e)
            ? ("array" != tb(c[d]) && (c[d] = []), (c[d] = O(e, c[d])))
            : vb(e)
            ? (vb(c[d]) || (c[d] = {}), (c[d] = O(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var wb = function (a) {
    if (void 0 === a || qa(a) || vb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var xb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      nh: a("consent"),
      oh: a("consent_always_fire"),
      qf: a("convert_case_to"),
      rf: a("convert_false_to"),
      sf: a("convert_null_to"),
      tf: a("convert_true_to"),
      uf: a("convert_undefined_to"),
      Mj: a("debug_mode_metadata"),
      tb: a("function"),
      Xh: a("instance_name"),
      ai: a("live_only"),
      bi: a("malware_disabled"),
      ci: a("metadata"),
      hi: a("original_activity_id"),
      Rj: a("original_vendor_template_id"),
      Qj: a("once_on_load"),
      gi: a("once_per_event"),
      Xf: a("once_per_load"),
      Tj: a("priority_override"),
      Uj: a("respected_consent_types"),
      ag: a("setup_tags"),
      cg: a("tag_id"),
      dg: a("teardown_tags"),
    };
  })();
  var Ub;
  var Vb = [],
    Wb = [],
    Xb = [],
    Yb = [],
    Zb = [],
    bc = {},
    cc,
    dc,
    ec,
    fc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = bc[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.sg && d.sg(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === xb.oh.toString() && a[g]) {
          }
      e && d && d.rg && (f.vtp_gtmCachedValues = d.rg);
      return void 0 !== e ? e(f) : Ub(c, f, b);
    },
    hc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = gc(a[e], b, c));
      return d;
    },
    gc = function (a, b, c) {
      if (qa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(gc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = Vb[f];
            if (!g || b.Ve(g)) return;
            c[f] = !0;
            try {
              var l = hc(g, b, c);
              l.vtp_gtmEventId = b.id;
              b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
              d = fc(l, { event: b, index: f, type: 2 });
              ec && (d = ec.xi(d, l));
            } catch (y) {
              b.Lg && b.Lg(y, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var m = 1; m < a.length; m += 2)
              d[gc(a[m], b, c)] = gc(a[m + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = gc(a[p], b, c);
              dc && (n = n || q === dc.od);
              d.push(q);
            }
            return dc && n ? dc.Ci(d) : d.join("");
          case "escape":
            d = gc(a[1], b, c);
            if (dc && qa(a[1]) && "macro" === a[1][0] && dc.Xi(a))
              return dc.lj(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) yb[a[r]] && (d = yb[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Yb[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { zg: a[2], index: u });
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t["function"] = a[1];
            var v = ic(t, b, c),
              x = !!a[4];
            return x || 2 !== v ? x !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    ic = function (a, b, c) {
      try {
        return cc(hc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var lc = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = jc(a), f = 0; f < Wb.length; f++) {
        var g = Wb[f],
          l = kc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < Yb.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    kc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    jc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ic(Xb[c], a));
        return b[c];
      };
    };
  var mc = {
    xi: function (a, b) {
      b[xb.qf] &&
        "string" === typeof a &&
        (a = 1 == b[xb.qf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(xb.sf) && null === a && (a = b[xb.sf]);
      b.hasOwnProperty(xb.uf) && void 0 === a && (a = b[xb.uf]);
      b.hasOwnProperty(xb.tf) && !0 === a && (a = b[xb.tf]);
      b.hasOwnProperty(xb.rf) && !1 === a && (a = b[xb.rf]);
      return a;
    },
  };

  var R = {
    sb: "_ee",
    Gc: "_syn_or_mod",
    Vj: "_uei",
    Wj: "_upi",
    Ec: "_eu",
    Sj: "_pci",
    Wf: "_is_passthrough_cid",
    Vf: "_is_linker_valid",
    De: "_ntg",
    Mb: "event_callback",
    dd: "event_timeout",
    Ca: "gtag.config",
    Ia: "gtag.get",
    oa: "purchase",
    Jb: "refund",
    lb: "begin_checkout",
    Gb: "add_to_cart",
    Hb: "remove_from_cart",
    xh: "view_cart",
    wf: "add_to_wishlist",
    qa: "view_item",
    Ib: "view_promotion",
    Yd: "select_promotion",
    Xd: "select_item",
    nb: "view_item_list",
    vf: "add_payment_info",
    wh: "add_shipping_info",
    Ra: "value_key",
    ab: "value_callback",
    W: "allow_ad_personalization_signals",
    Ac: "restricted_data_processing",
    ic: "allow_google_signals",
    va: "cookie_expires",
    Lb: "cookie_update",
    Bc: "session_duration",
    hd: "session_engaged_time",
    bd: "engagement_time_msec",
    Fa: "user_properties",
    xa: "transport_url",
    aa: "ads_data_redaction",
    ya: "user_data",
    vc: "first_party_collection",
    D: "ad_storage",
    K: "analytics_storage",
    nf: "region",
    pf: "wait_for_update",
    sa: "conversion_linker",
    Ja: "conversion_cookie_prefix",
    fa: "value",
    ca: "currency",
    Qf: "trip_type",
    X: "items",
    Hf: "passengers",
    ae: "allow_custom_scripts",
    rb: "session_id",
    Mf: "quantity",
    fb: "transaction_id",
    eb: "language",
    ad: "country",
    $c: "allow_enhanced_conversions",
    fe: "aw_merchant_id",
    de: "aw_feed_country",
    ee: "aw_feed_language",
    ce: "discount",
    T: "developer_id",
    Ef: "global_developer_id_string",
    Cf: "event_developer_id_string",
    jd: "delivery_postal_code",
    ne: "estimated_delivery_date",
    ke: "shipping",
    te: "new_customer",
    he: "customer_lifetime_value",
    me: "enhanced_conversions",
    hc: "page_view",
    ka: "linker",
    M: "domains",
    Ob: "decorate_forms",
    Bf: "enhanced_conversions_automatic_settings",
    Eh: "auto_detection_enabled",
    pe: "ga_temp_client_id",
    Zd: "user_engagement",
    rh: "app_remove",
    sh: "app_store_refund",
    th: "app_store_subscription_cancel",
    uh: "app_store_subscription_convert",
    vh: "app_store_subscription_renew",
    yh: "first_open",
    zh: "first_visit",
    Ah: "in_app_purchase",
    Bh: "session_start",
    Ch: "allow_display_features",
    Qa: "campaign",
    jc: "campaign_content",
    kc: "campaign_id",
    mc: "campaign_medium",
    nc: "campaign_name",
    oc: "campaign_source",
    qc: "campaign_term",
    ia: "client_id",
    ja: "cookie_domain",
    Kb: "cookie_name",
    Za: "cookie_path",
    Ka: "cookie_flags",
    sc: "custom_map",
    qe: "groups",
    Gf: "non_interaction",
    Sa: "page_location",
    ue: "page_path",
    La: "page_referrer",
    zc: "page_title",
    wa: "send_page_view",
    qb: "send_to",
    Cc: "session_engaged",
    uc: "euid_logged_in_state",
    Dc: "session_number",
    Uh: "tracking_id",
    hb: "url_passthrough",
    Nb: "accept_incoming",
    yc: "url_position",
    Kf: "phone_conversion_number",
    If: "phone_conversion_callback",
    Jf: "phone_conversion_css_class",
    Lf: "phone_conversion_options",
    Ph: "phone_conversion_ids",
    Oh: "phone_conversion_country_code",
    ob: "aw_remarketing",
    be: "aw_remarketing_only",
    $d: "gclid",
    Dh: "auid",
    Jh: "affiliation",
    Af: "tax",
    je: "list_name",
    zf: "checkout_step",
    yf: "checkout_option",
    Kh: "coupon",
    Lh: "promotions",
    Ea: "user_id",
    Sh: "retoken",
    Da: "cookie_prefix",
    xf: "disable_merchant_reported_purchases",
    Ih: "dc_natural_search",
    Hh: "dc_custom_params",
    Ff: "method",
    Th: "search_term",
    Gh: "content_type",
    Nh: "optimize_id",
    Mh: "experiments",
    cb: "google_signals",
  };
  R.fd = "google_tld";
  R.ld = "update";
  R.oe = "firebase_id";
  R.wc = "ga_restrict_domain";
  R.cd = "event_settings";
  R.ie = "dynamic_event_settings";
  R.Pb = "user_data_settings";
  R.Of = "screen_name";
  R.we = "screen_resolution";
  R.pb = "_x_19";
  R.$a = "enhanced_client_id";
  R.ed = "_x_20";
  R.se = "internal_traffic_results";
  R.kd = "traffic_type";
  R.gd = "referral_exclusion_definition";
  R.xc = "ignore_referrer";
  R.Fh = "content_group";
  R.ra = "allow_interest_groups";
  var Kc = {};
  R.Tf = Object.freeze(
    ((Kc[R.vf] = 1),
    (Kc[R.wh] = 1),
    (Kc[R.Gb] = 1),
    (Kc[R.Hb] = 1),
    (Kc[R.xh] = 1),
    (Kc[R.lb] = 1),
    (Kc[R.Xd] = 1),
    (Kc[R.nb] = 1),
    (Kc[R.Yd] = 1),
    (Kc[R.Ib] = 1),
    (Kc[R.oa] = 1),
    (Kc[R.Jb] = 1),
    (Kc[R.qa] = 1),
    (Kc[R.wf] = 1),
    Kc)
  );
  R.ye = Object.freeze([R.W, R.ic, R.Lb]);
  R.ei = Object.freeze([].concat(R.ye));
  R.ze = Object.freeze([R.va, R.dd, R.Bc, R.hd, R.bd]);
  R.fi = Object.freeze([].concat(R.ze));
  var Lc = {};
  R.Vd = ((Lc[R.D] = "1"), (Lc[R.K] = "2"), Lc);
  var Nc = { Bi: "SY", sj: "SY-DI" };
  var Oc = {},
    Sc = function (a, b) {
      Oc[a] = Oc[a] || [];
      Oc[a][b] = !0;
    },
    Tc = function (a) {
      for (var b = [], c = Oc[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    Uc = function () {
      for (var a = [], b = Oc.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var S = function (a) {
    Sc("GTM", a);
  };
  var Vc = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Xc = function () {
    var a = Wc,
      b = "Te";
    if (a.Te && a.hasOwnProperty(b)) return a.Te;
    var c = new a();
    a.Te = c;
    a.hasOwnProperty(b);
    return c;
  };
  var Wc = function () {
    var a = {};
    this.m = function () {
      var b = Vc.m,
        c = Vc.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.o = function () {
      a[Vc.m] = !0;
    };
  };
  var Yc = [];
  function Zc() {
    var a = ab("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: $c,
        update: ad,
        addListener: bd,
        notifyListeners: cd,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function $c(a, b, c, d, e, f) {
    var g = Zc();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) l[a] = r;
        q &&
          G.setTimeout(function () {
            l[a] === r &&
              r.quiet &&
              ((r.quiet = !1), dd(a), cd(), Sc("TAGGING", 2));
          }, f);
      }
    }
  }
  function ad(a, b) {
    var c = Zc();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = ed(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = ed(c, a);
      f.quiet ? ((f.quiet = !1), dd(a)) : g !== d && dd(a);
    }
  }
  function bd(a, b) {
    Yc.push({ Ne: a, Ki: b });
  }
  function dd(a) {
    for (var b = 0; b < Yc.length; ++b) {
      var c = Yc[b];
      qa(c.Ne) && -1 !== c.Ne.indexOf(a) && (c.Rg = !0);
    }
  }
  function cd(a, b) {
    for (var c = 0; c < Yc.length; ++c) {
      var d = Yc[c];
      if (d.Rg) {
        d.Rg = !1;
        try {
          d.Ki({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function ed(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var fd = function (a) {
      var b = Zc();
      b.accessedAny = !0;
      return ed(b, a);
    },
    gd = function (a) {
      var b = Zc();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    hd = function (a) {
      var b = Zc();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    id = function () {
      if (!Xc().m()) return !1;
      var a = Zc();
      a.accessedAny = !0;
      return a.active;
    },
    jd = function () {
      var a = Zc();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    kd = function (a, b) {
      Zc().addListener(a, b);
    },
    ld = function (a, b) {
      Zc().notifyListeners(a, b);
    },
    md = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!hd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        kd(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    nd = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === fd(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = k(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        kd(d, function (f) {
          var g = c();
          0 < g.length && ((f.Ne = g), a(f));
        });
    };
  function od() {}
  function pd() {}
  function sd(a) {
    for (var b = [], c = 0; c < td.length; c++) {
      var d = a(td[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var td = [R.D, R.K],
    ud = function (a) {
      var b = a[R.nf];
      b && S(40);
      var c = a[R.pf];
      c && S(41);
      for (
        var d = qa(b) ? b : [b], e = { $b: 0 };
        e.$b < d.length;
        e = { $b: e.$b }, ++e.$b
      )
        xa(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== R.nf && g !== R.pf) {
                var m = d[f.$b],
                  n = Nc.Bi,
                  p = Nc.sj;
                Zc().set(g, l, m, n, p, c);
              }
            };
          })(e)
        );
    },
    vd = 0,
    wd = function (a, b) {
      xa(a, function (e, f) {
        Zc().update(e, f);
      });
      ld(b.eventId, b.priorityId);
      var c = A(),
        d = c - vd;
      vd && 0 <= d && 1e3 > d && S(66);
      vd = c;
    },
    xd = function (a) {
      var b = fd(a);
      return void 0 != b ? b : !0;
    },
    yd = function () {
      return "G1" + sd(fd);
    },
    zd = function (a, b) {
      nd(a, b);
    },
    Ad = function (a, b) {
      md(a, b);
    };
  var Cd = function (a) {
      return Bd ? H.querySelectorAll(a) : null;
    },
    Dd = function (a, b) {
      if (!Bd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Ed = !1;
  if (H.querySelectorAll)
    try {
      var Fd = H.querySelectorAll(":root");
      Fd && 1 == Fd.length && Fd[0] == H.documentElement && (Ed = !0);
    } catch (a) {}
  var Bd = Ed;
  var Zd = {},
    T = (G.google_tag_manager = G.google_tag_manager || {}),
    $d = Math.random();
  Zd.ud = "3u0";
  Zd.V = "dataLayer";
  Zd.qh =
    "ChEI8IDKkgYQlruH+Yfp2OmdARInALbNgJQA3pcGKAAfJpxYa5L1lXzUcU+SSr+tTlalvhBfGy/nEZVxGgJH1A\x3d\x3d";
  var ae = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    be = { __paused: !0, __tg: !0 },
    ce;
  for (ce in ae) ae.hasOwnProperty(ce) && (be[ce] = !0);
  Zd.fc = "www.googletagmanager.com";
  var de,
    ee = Zd.fc + "/gtm.js";
  ee = Zd.fc + "/gtag/js";
  de = ee;
  var fe = Aa(""),
    ge = null,
    he = null,
    ie = {},
    je = {},
    ke = function () {
      var a = T.sequence || 1;
      T.sequence = a + 1;
      return a;
    };
  Zd.ph = "";
  var le = "";
  Zd.vd = le;
  var me = new ua(),
    ne = {},
    oe = {},
    ue = {
      name: Zd.V,
      set: function (a, b) {
        O(Ka(a, b), ne);
        pe();
      },
      get: function (a) {
        return te(a, 2);
      },
      reset: function () {
        me = new ua();
        ne = {};
        pe();
      },
    },
    te = function (a, b) {
      return 2 != b ? me.get(a) : ve(a);
    },
    ve = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = ne, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    we = function (a, b) {
      oe.hasOwnProperty(a) || (me.set(a, b), O(Ka(a, b), ne), pe());
    },
    pe = function (a) {
      xa(oe, function (b, c) {
        me.set(b, c);
        O(Ka(b, void 0), ne);
        O(Ka(b, c), ne);
        a && delete oe[b];
      });
    },
    xe = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? ve(a) : me.get(a);
      "array" === tb(d) || "object" === tb(d) ? (c = O(d)) : (c = d);
      return c;
    };
  var ye,
    ze = !1,
    Ae = function (a) {
      if (!ze) {
        ze = !0;
        ye = ye || {};
      }
      return ye[a];
    };
  var Be = function (a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle)
      return !0;
    var c = G.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var l = g.indexOf("opacity(");
        0 <= l &&
          ((g = g.substring(l + 8, g.indexOf(")", l))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = G.getComputedStyle(d, null));
    }
    return !1;
  };
  var Ke = /:[0-9]+$/,
    Le = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Oe = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Me(a.protocol) || Me(G.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : G.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || G.location.hostname)
            .replace(Ke, "")
            .toLowerCase());
      return Ne(a, b, c, d, e);
    },
    Ne = function (a, b, c, d, e) {
      var f,
        g = Me(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Pe(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Ke, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Sc("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Le(f, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Me = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Pe = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Qe = function (a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Sc("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Ke, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Re = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Qe(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var Se = {};
  var jf = {},
    kf = function (a, b) {
      if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a))
        return G._gtmexpgrp[a];
      void 0 === jf[a] && (jf[a] = Math.floor(Math.random() * b));
      return jf[a];
    };
  var lf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var mf = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var nf = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    of = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function pf(a) {
    return "null" !== a.origin;
  }
  var sf = function (a, b, c, d) {
      return qf(d) ? mf(a, String(b || rf()), c) : [];
    },
    vf = function (a, b, c, d, e) {
      if (qf(e)) {
        var f = tf(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = uf(
            f,
            function (g) {
              return g.Cd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = uf(
            f,
            function (g) {
              return g.Oc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function wf(a, b, c, d) {
    var e = rf(),
      f = window;
    pf(f) && (f.document.cookie = a);
    var g = rf();
    return e != g || (void 0 != c && 0 <= sf(b, g, !1, d).indexOf(c));
  }
  var Af = function (a, b, c) {
      function d(u, t, v) {
        if (null == v) return delete g[t], u;
        g[t] = v;
        return u + "; " + t + "=" + v;
      }
      function e(u, t) {
        if (null == t) return delete g[t], u;
        g[t] = !0;
        return u + "; " + t;
      }
      if (!qf(c.Ua)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = xf(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.$j);
      f = d(f, "samesite", c.ck);
      c.dk && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = yf(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!zf(q, c.path) && wf(r, a, b, c.Ua)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return zf(m, c.path) ? 1 : wf(f, a, b, c.Ua) ? 0 : 1;
    },
    Bf = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Af(a, b, c);
    };
  function uf(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function tf(a, b, c) {
    for (var d = [], e = sf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Cd: 1 * m[0] || 1, Oc: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var xf = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Cf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Df = /(^|\.)doubleclick\.net$/i,
    zf = function (a, b) {
      return (
        Df.test(window.document.location.hostname) || ("/" === b && Cf.test(a))
      );
    },
    rf = function () {
      return pf(window) ? window.document.cookie : "";
    },
    yf = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Df.test(e) || Cf.test(e) || a.push("none");
      return a;
    },
    qf = function (a) {
      if (!Xc().m() || !a || !id()) return !0;
      if (!hd(a)) return !1;
      var b = fd(a);
      return null == b ? !0 : !!b;
    };
  var Ef = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (lf(a) & 2147483647)) : String(b);
    },
    Ff = function (a) {
      return [Ef(a), Math.round(A() / 1e3)].join(".");
    },
    If = function (a, b, c, d, e) {
      var f = Gf(b);
      return vf(a, f, Hf(c), d, e);
    },
    Jf = function (a, b, c, d) {
      var e = "" + Gf(c),
        f = Hf(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Gf = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Hf = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function Kf(a, b, c) {
    var d,
      e = Number(null != a.Ab ? a.Ab : void 0);
    0 !== e && (d = new Date((b || A()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var Lf = ["1"],
    Mf = {},
    Nf = {},
    Rf = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Of(a.prefix);
      if (!Mf[c] && !Pf(c, a.path, a.domain) && b) {
        var d = Of(a.prefix),
          e = Ff();
        if (0 === Qf(d, e, a)) {
          var f = ab("google_tag_data", {});
          f._gcl_au ? Sc("GTM", 57) : (f._gcl_au = e);
        }
        Pf(c, a.path, a.domain);
      }
    };
  function Qf(a, b, c, d) {
    var e = Jf(b, "1", c.domain, c.path),
      f = Kf(c, d);
    f.Ua = "ad_storage";
    return Bf(a, e, f);
  }
  function Pf(a, b, c) {
    var d = If(a, b, c, Lf, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((Mf[a] = e.slice(0, 2).join(".")),
        (Nf[a] = { id: e.slice(2, 4).join("."), Jg: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Nf[a] = { id: e.slice(0, 2).join("."), Jg: Number(e[2]) || 0 })
      : (Mf[a] = d);
    return !0;
  }
  function Of(a) {
    return (a || "_gcl") + "_au";
  }
  var Sf = function (a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          jf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function Tf(a, b) {
    var c = Sf(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].jf] || (d[c[e].jf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), za: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].jf].push(g);
      }
    }
    return d;
  }
  function Uf() {
    for (var a = Vf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Wf() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Vf, Xf;
  function Yf(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Xf[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Vf = Vf || Wf();
    Xf = Xf || Uf();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Zf;
  var cg = function () {
      var a = $f,
        b = ag,
        c = bg(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        jb(H, "mousedown", d);
        jb(H, "keyup", d);
        jb(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    dg = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      bg().decorators.push(f);
    },
    eg = function (a, b, c) {
      for (var d = bg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== H.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ha(e, g.callback());
        }
      }
      return e;
    };
  function bg() {
    var a = ab("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var fg = /(.*?)\*(.*?)\*(.*)/,
    ng = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    og = /^(?:www\.|m\.|amp\.)+/,
    pg = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function qg(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var sg = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            l = String(d);
          Vf = Vf || Wf();
          Xf = Xf || Uf();
          for (var m = [], n = 0; n < l.length; n += 3) {
            var p = n + 1 < l.length,
              q = n + 2 < l.length,
              r = l.charCodeAt(n),
              u = p ? l.charCodeAt(n + 1) : 0,
              t = q ? l.charCodeAt(n + 2) : 0,
              v = r >> 2,
              x = ((r & 3) << 4) | (u >> 4),
              y = ((u & 15) << 2) | (t >> 6),
              w = t & 63;
            q || ((w = 64), p || (y = 64));
            m.push(Vf[v], Vf[x], Vf[y], Vf[w]);
          }
          g = m.join("");
          f.call(e, g);
        }
      }
    var B = b.join("*");
    return ["1", rg(B), B].join("*");
  };
  function rg(a, b) {
    var c = [
        G.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Za.userLanguage || Za.language,
        Math.floor(A() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Zf)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Zf = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Zf[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function tg() {
    return function (a) {
      var b = Qe(G.location.href),
        c = b.search.replace("?", ""),
        d = Le(c, "_gl", !0) || "";
      a.query = ug(d) || {};
      var e = Oe(b, "fragment").match(qg("_gl"));
      a.fragment = ug((e && e[3]) || "") || {};
    };
  }
  function vg(a, b) {
    var c = qg(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var wg = function (a, b) {
      b || (b = "_gl");
      var c = pg.exec(a);
      if (!c) return "";
      var d = c[1],
        e = vg(b, (c[2] || "").slice(1)),
        f = vg(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    xg = function (a) {
      var b = tg(),
        c = bg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ha(d, e.query), a && Ha(d, e.fragment));
      return d;
    },
    ug = function (a) {
      try {
        var b = yg(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Yf(d[e + 1]);
            c[f] = g;
          }
          Sc("TAGGING", 6);
          return c;
        }
      } catch (l) {
        Sc("TAGGING", 8);
      }
    };
  function yg(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = fg.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === rg(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        Sc("TAGGING", 7);
      }
    }
  }
  function zg(a, b, c, d) {
    function e(p) {
      p = vg(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = pg.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function Ag(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = eg(b, 1, c),
      e = eg(b, 2, c),
      f = eg(b, 3, c);
    if (Ia(d)) {
      var g = sg(d);
      c ? Bg("_gl", g, a) : Cg("_gl", g, a, !1);
    }
    if (!c && Ia(e)) {
      var l = sg(e);
      Cg("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Cg(n, p, q, void 0);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Bg(n, p, q);
              break a;
            }
          }
          "string" == typeof q && zg(n, p, q, void 0);
        }
  }
  function Cg(a, b, c, d) {
    if (c.href) {
      var e = zg(a, b, c.href, void 0 === d ? !1 : d);
      Ra.test(e) && (c.href = e);
    }
  }
  function Bg(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = H.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = zg(a, b, c.action);
        Ra.test(n) && (c.action = n);
      }
    }
  }
  function $f(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Ag(e, e.hostname);
      }
    } catch (g) {}
  }
  function ag(a) {
    try {
      if (a.action) {
        var b = Oe(Qe(a.action), "host");
        Ag(a, b);
      }
    } catch (c) {}
  }
  var Dg = function (a, b, c, d) {
      cg();
      dg(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Eg = function (a, b) {
      cg();
      dg(a, [Ne(G.location, "host", !0)], b, !0, !0);
    },
    Fg = function () {
      var a = H.location.hostname,
        b = ng.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(og, ""),
        m = e.replace(og, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    Gg = function (a, b) {
      return !1 === a ? !1 : a || b || Fg();
    };
  var Hg = {};
  var Ig = /^\w+$/,
    Jg = /^[\w-]+$/,
    Kg = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Lg = function () {
      if (!Xc().m() || !id()) return !0;
      var a = fd("ad_storage");
      return null == a ? !0 : !!a;
    },
    Mg = function (a, b) {
      hd("ad_storage")
        ? Lg()
          ? a()
          : nd(a, "ad_storage")
        : b
        ? Sc("TAGGING", 3)
        : md(
            function () {
              Mg(a, !0);
            },
            ["ad_storage"]
          );
    },
    Og = function (a) {
      return Ng(a).map(function (b) {
        return b.za;
      });
    },
    Ng = function (a) {
      var b = [];
      if (!pf(G) || !H.cookie) return b;
      var c = sf(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Xc: d.Xc }, e++) {
        var f = Pg(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.Xc = g.za;
          var m = g.timestamp,
            n = g.labels,
            p = ra(
              b,
              (function (q) {
                return function (r) {
                  return r.za === q.Xc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Qg(p.labels, n || [])))
            : b.push({ version: l, za: d.Xc, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Rg(b);
    };
  function Qg(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Sg(a) {
    return a && "string" == typeof a && a.match(Ig) ? a : "_gcl";
  }
  var Ug = function () {
      var a = Qe(G.location.href),
        b = Oe(a, "query", !1, void 0, "gclid"),
        c = Oe(a, "query", !1, void 0, "gclsrc"),
        d = Oe(a, "query", !1, void 0, "wbraid"),
        e = Oe(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Le(f, "gclid", void 0);
        c = c || Le(f, "gclsrc", void 0);
        d = d || Le(f, "wbraid", void 0);
      }
      return Tg(b, c, e, d);
    },
    Tg = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Jg.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Jg))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Wg = function (a) {
      var b = Ug();
      Mg(function () {
        Vg(b, !1, a);
      });
    };
  function Vg(a, b, c, d, e) {
    function f(x, y) {
      var w = Xg(x, g);
      w && (Bf(w, y, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Sg(c.prefix);
    d = d || A();
    var l = Kf(c, d, !0);
    l.Ua = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ["GCL", n, x];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Hg.enable_gbraid_cookie_write
        ? 0
        : Hg.enable_gbraid_cookie_write) &&
      !m &&
      a.gb
    ) {
      var q = a.gb[0],
        r = Xg("gb", g),
        u = !1;
      if (!b)
        for (var t = Ng(r), v = 0; v < t.length; v++)
          t[v].za === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var Zg = function (a, b) {
      var c = xg(!0);
      Mg(function () {
        for (var d = Sg(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Kg[f]) {
            var g = Xg(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Yg(l), A()),
                n;
              b: {
                var p = m;
                if (pf(G))
                  for (
                    var q = sf(g, H.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Yg(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Kf(b, m, !0);
                u.Ua = "ad_storage";
                Bf(g, l, u);
              }
            }
          }
        }
        Vg(Tg(c.gclid, c.gclsrc), !1, b);
      });
    },
    Xg = function (a, b) {
      var c = Kg[a];
      if (void 0 !== c) return b + c;
    },
    Yg = function (a) {
      return 0 !== $g(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Pg(a) {
    var b = $g(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          za: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function $g(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Jg.test(a[2])
      ? []
      : a;
  }
  var ah = function (a, b, c, d, e) {
      if (qa(b) && pf(G)) {
        var f = Sg(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Xg(a[m], f);
              if (n) {
                var p = sf(n, H.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Mg(function () {
          Dg(g, b, c, d);
        });
      }
    },
    Rg = function (a) {
      return a.filter(function (b) {
        return Jg.test(b.za);
      });
    },
    bh = function (a, b) {
      if (pf(G)) {
        for (var c = Sg(b.prefix), d = {}, e = 0; e < a.length; e++)
          Kg[a[e]] && (d[a[e]] = Kg[a[e]]);
        Mg(function () {
          xa(d, function (f, g) {
            var l = sf(c + g, H.cookie, void 0, "ad_storage");
            l.sort(function (u, t) {
              return Yg(t) - Yg(u);
            });
            if (l.length) {
              var m = l[0],
                n = Yg(m),
                p = 0 !== $g(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== $g(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Vg(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function ch(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var dh = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (id()) {
      var c = Ug();
      if (ch(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Eg(function () {
          return d;
        }, 3);
        Eg(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function eh(a, b) {
    var c = Sg(b),
      d = Xg(a, c);
    if (!d) return 0;
    for (var e = Ng(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function fh(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var zh = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Ah = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Bh = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Ch =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Dh = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Fh = function (a) {
      var b = te("gtm.allowlist") || te("gtm.whitelist");
      b && S(9);
      Dh() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Ja(Ba(b), Ah),
        d = te("gtm.blocklist") || te("gtm.blacklist");
      d || ((d = te("tagTypeBlacklist")) && S(3));
      d ? S(8) : (d = []);
      Eh() &&
        ((d = Ba(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ba(d).indexOf("google") && S(2);
      var e = d && Ja(Ba(d), Bh),
        f = {};
      return function (g) {
        var l = g && g[xb.tb];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = je[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      S(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= e.indexOf(l);
          if (u) r = u;
          else {
            var t = va(e, m || []);
            t && S(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = va(e, Ch));
        return (f[l] = v);
      };
    },
    Eh = function () {
      return zh.test(G.location && G.location.hostname);
    };
  var Gh = { F: "UA-23581568-13", cc: "" },
    Hh = { Pg: "UA-23581568-13", Qg: "UA-23581568-13" },
    Ih = function () {
      var a = [Gh.F];
      return a;
    },
    Jh = function () {
      var a = [];
      Hh.Qg && (a = Hh.Qg.split("|"));
      return a;
    };
  var Lh = function () {
      var a = T.tidr;
      a || ((a = new Kh()), (T.tidr = a));
      return a;
    },
    Kh = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Mh = function (a) {
      return Lh().container.hasOwnProperty(a);
    };
  var Ph = function (a) {},
    Th = function (a) {},
    Uh = function () {
      return (
        "&tc=" +
        Yb.filter(function (a) {
          return a;
        }).length
      );
    },
    Xh = function () {
      2022 <= Vh().length && Wh();
    },
    Yh = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    $h = function () {
      Zh || (Zh = G.setTimeout(Wh, 500));
    },
    Wh = function () {
      Zh && (G.clearTimeout(Zh), (Zh = void 0));
      if (void 0 !== ai && (!bi[ai] || ci || di))
        if (ei[ai] || fi.Yi() || 0 >= gi--) S(1), (ei[ai] = !0);
        else {
          fi.tj();
          var a = Vh(!0);
          ib(a);
          bi[ai] = !0;
          ii = hi = ki = li = mi = di = ci = "";
          ji = [];
        }
    },
    Vh = function (a) {
      var b = ai;
      if (void 0 === b) return "";
      var c = Tc("GTM"),
        d = Tc("TAGGING");
      return [
        ni,
        bi[b] ? "" : "&es=1",
        oi[b],
        Ph(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        Uh(),
        ci,
        di,
        mi,
        li,
        Th(a),
        ki,
        hi,
        ii ? "&dl=" + encodeURIComponent(ii) : "",
        0 < ji.length ? "&tdp=" + ji.join(".") : "",
        "&z=0",
      ].join("");
    },
    qi = function () {
      ni = pi();
    },
    pi = function () {
      return [ri, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Zd.ud].join("");
    },
    Sh = ["L", "S", "Y"],
    Oh = ["S", "E"],
    si = { sampleRate: "0.005000", jh: "", ih: Number("5") },
    ti =
      0 <= H.location.search.indexOf("?gtm_latency=") ||
      0 <= H.location.search.indexOf("&gtm_latency="),
    ui;
  if (!(ui = ti)) {
    var vi = Math.random(),
      wi = si.sampleRate;
    ui = vi < wi;
  }
  var xi = ui,
    ri = "https://www.googletagmanager.com/a?id=" + Gh.F + "&cv=1",
    yi = {
      label: Gh.F + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    ni = pi(),
    bi = {},
    ci = "",
    di = "",
    ki = "",
    li = "",
    hi = "",
    ji = [],
    ii = "",
    Rh = {},
    Qh = !1,
    Nh = {},
    zi = {},
    mi = "",
    ai = void 0,
    oi = {},
    ei = {},
    Zh = void 0,
    Ai = 5;
  0 < si.ih && (Ai = si.ih);
  var fi = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Yi: function () {
          return c < a ? !1 : A() - d[c % a] < b;
        },
        tj: function () {
          var f = c++ % a;
          d[f] = A();
        },
      };
    })(Ai, 1e3),
    gi = 1e3,
    Ci = function (a, b) {
      if (xi && !ei[a] && ai !== a) {
        Wh();
        ai = a;
        ki = ci = "";
        oi[a] = "&e=" + Yh(b) + "&eid=" + a;
        $h();
      }
    },
    Di = function (a, b, c, d) {
      if (xi && b) {
        var e,
          f = String(b[xb.tb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!ei[a]) {
          a !== ai && (Wh(), (ai = a));
          ci = ci ? ci + "." + g : "&tr=" + g;
          var l = b["function"];
          if (!l)
            throw Error("Error: No function name given for function call.");
          var m = (bc[l] ? "1" : "2") + e;
          ki = ki ? ki + "." + m : "&ti=" + m;
          $h();
          Xh();
        }
      }
    };
  var Ki = function (a, b, c) {
      if (xi && !ei[a]) {
        a !== ai && (Wh(), (ai = a));
        var d = c + b;
        di = di ? di + "." + d : "&epr=" + d;
        $h();
        Xh();
      }
    },
    Li = function (a, b, c) {};
  var Mi = { initialized: 11, complete: 12, interactive: 13 },
    Ni = {},
    Oi = Object.freeze(((Ni[R.sb] = !0), (Ni[R.Gc] = !0), Ni)),
    Pi = {},
    Qi = Object.freeze(((Pi[R.wa] = !0), Pi)),
    Ri = {},
    Si =
      0 <= H.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= H.location.search.indexOf("&gtm_diagnostics="),
    Ui = function (a, b, c) {};
  function Vi(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Ti(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var u = r[q];
        return void 0 === u ? Qi[q] : u;
      },
      f;
    for (f in Vi(a, b))
      if (!Oi[f]) {
        var g = (d ? d + "." : "") + f,
          l = e(f, a),
          m = e(f, b),
          n = "object" === tb(l) || "array" === tb(l),
          p = "object" === tb(m) || "array" === tb(m);
        if (n && p) Ti(l, m, c, g);
        else if (n || p || l !== m) c[g] = !0;
      }
    return Object.keys(c);
  }
  var Wi = !1,
    Xi = 0,
    Yi = [];
  function Zi(a) {
    if (!Wi) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Wi = !0;
        for (var e = 0; e < Yi.length; e++) J(Yi[e]);
      }
      Yi.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }
  function $i() {
    if (!Wi && 140 > Xi) {
      Xi++;
      try {
        H.documentElement.doScroll("left"), Zi();
      } catch (a) {
        G.setTimeout($i, 50);
      }
    }
  }
  var aj = function (a) {
    Wi ? a() : Yi.push(a);
  };
  var cj = function (a, b) {
      this.m = !1;
      this.C = [];
      this.I = { tags: [] };
      this.U = !1;
      this.o = this.s = 0;
      bj(this, a, b);
    },
    dj = function (a, b, c, d) {
      if (be.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      vb(d) && (e = O(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    ej = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    fj = function (a) {
      if (!a.m) {
        for (var b = a.C, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.C.length = 0;
      }
    },
    bj = function (a, b, c) {
      void 0 !== b && gj(a, b);
      c &&
        G.setTimeout(function () {
          return fj(a);
        }, Number(c));
    },
    gj = function (a, b) {
      var c = Ga(function () {
        return J(function () {
          b(Gh.F, a.I);
        });
      });
      a.m ? c() : a.C.push(c);
    },
    xj = function (a) {
      a.s++;
      return Ga(function () {
        a.o++;
        a.U && a.o >= a.s && fj(a);
      });
    },
    yj = function (a) {
      a.U = !0;
      a.o >= a.s && fj(a);
    };
  var zj = function () {
      function a(d) {
        return !pa(d) || 0 > d ? 0 : d;
      }
      if (!T._li && G.performance && G.performance.timing) {
        var b = G.performance.timing.navigationStart,
          c = pa(ue.get("gtm.start")) ? ue.get("gtm.start") : 0;
        T._li = { cst: a(c - b), cbt: a(he - b) };
      }
    },
    Aj = function (a) {
      G.performance && G.performance.mark(Gh.F + "_" + a + "_start");
    },
    Bj = function (a) {
      if (G.performance) {
        var b = Gh.F + "_" + a + "_start",
          c = Gh.F + "_" + a + "_duration";
        G.performance.measure(c, b);
        var d = G.performance.getEntriesByName(c)[0];
        G.performance.clearMarks(b);
        G.performance.clearMeasures(c);
        var e = T._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (T._p = e));
        return d.duration;
      }
    },
    Cj = function () {
      if (G.performance && G.performance.now) {
        var a = T._p || {};
        a.PAGEVIEW = G.performance.now();
        T._p = a;
      }
    };
  var Dj = {},
    Ej = function () {
      return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject];
    },
    Fj = !1;
  var Gj = function (a) {
      G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
      var b = G.GoogleAnalyticsObject;
      if (G[b]) G.hasOwnProperty(b) || S(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Da());
        G[b] = c;
      }
      zj();
      return G[b];
    },
    Hj = function (a) {
      if (id()) {
        var b = Ej();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Ij() {
    return G.GoogleAnalyticsObject || "ga";
  }
  var Jj = function (a) {},
    Kj = function (a, b) {
      return function () {
        var c = Ej(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Pj(a, b, c, d) {
    var e = Yb[a],
      f = Qj(a, b, c, d);
    if (!f) return null;
    var g = gc(e[xb.ag], c, []);
    if (g && g.length) {
      var l = g[0];
      f = Pj(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.zg ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Qj(a, b, c, d) {
    function e() {
      if (f[xb.bi]) l();
      else {
        var x = hc(f, c, []);
        var y = x[xb.nh];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!xd(y[w])) {
              l();
              return;
            }
        var B = dj(c.ub, String(f[xb.tb]), Number(f[xb.cg]), x[xb.ci]),
          z = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!z) {
            z = !0;
            var E = A() - C;
            Di(c.id, Yb[a], "5", E);
            ej(c.ub, B, "success", E);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!z) {
            z = !0;
            var E = A() - C;
            Di(c.id, Yb[a], "6", E);
            ej(c.ub, B, "failure", E);
            l();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Di(c.id, f, "1");
        var D = function () {
          var E = A() - C;
          Di(c.id, f, "7", E);
          ej(c.ub, B, "exception", E);
          z || ((z = !0), l());
        };
        var C = A();
        try {
          fc(x, { event: c, index: a, type: 1 });
        } catch (E) {
          D(E);
        }
      }
    }
    var f = Yb[a],
      g = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.Ve(f)) return null;
    var n = gc(f[xb.dg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Pj(p.index, { onSuccess: g, onFailure: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.zg ? m : q;
    }
    if (f[xb.Xf] || f[xb.gi]) {
      var r = f[xb.Xf] ? Zb : c.Gj,
        u = g,
        t = l;
      if (!r[a]) {
        e = Ga(e);
        var v = Rj(a, r, e);
        g = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function Rj(a, b, c) {
    var d = [],
      e = [];
    b[a] = Sj(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Tj;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Uj;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Sj(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Tj(a) {
    a();
  }
  function Uj(a, b) {
    b();
  }
  function Vj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Qe("" + c + b).href;
    }
  }
  function Wj(a, b) {
    return Xj() ? Vj(a, b) : void 0;
  }
  function Xj() {
    var a = !1;
    return a;
  }
  function Yj() {
    return !!Zd.vd && "SGTM_TOKEN" !== Zd.vd.replaceAll("@@", "");
  }
  var Zj = function () {
    var a = !1;
    return a;
  };
  var bk = function (a, b, c, d) {
      return (2 === ak() || d || "http:" != G.location.protocol ? a : b) + c;
    },
    ak = function () {
      var a = gb(),
        b;
      if (1 === a)
        a: {
          var c = de;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = H.getElementsByTagName("script"),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var ck = !1;
  var ek = function (a, b, c) {
      if (!dk()) {
        if (Mh(a)) return;
        var d = "/gtm.js";
        d = "/gtag/js";
        c && (d = "/gtag/js");
        var e = "?id=" + encodeURIComponent(a) + "&l=" + Zd.V,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = Yj();
        g && (e += "&sign=" + Zd.vd);
        var l = Wj(b, d + e);
        if (!l) {
          var m = Zd.fc + d;
          g &&
            $a &&
            f &&
            (m = $a.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          l = bk("https://", "http://", m + e);
        }
        Lh().container[a] = !0;
        fb(l);
      }
    },
    fk = function (a, b) {
      if (!ck) ek(a, b, !0);
      else if (!dk()) {
        if (Lh().destination.hasOwnProperty(a)) return;
        var c =
          "/gtag/destination?id=" +
          encodeURIComponent(a) +
          "&l=" +
          Zd.V +
          "&cx=c";
        Yj() && (c += "&sign=" + Zd.vd);
        var d = Wj(b, c);
        d || (d = bk("https://", "http://", Zd.fc + c));
        Lh().destination[a] = !0;
        fb(d);
      }
    };
  function dk() {
    if (Zj()) {
      return !0;
    }
    return !1;
  }
  var gk = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.priorityId = this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    hk = function (a) {
      var b = new gk();
      b.eventModel = a;
      return b;
    },
    ik = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    jk = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    kk = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    lk = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    mk = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    nk = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    ok = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    pk = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    qk = function (a, b) {
      a.onFailure = b;
      return a;
    };
  h = gk.prototype;
  h.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    rk(this, this.globalConfig[a], this.dataLayerConfig[a]) && S(71);
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  h.getTopLevelKeys = function () {
    function a(e) {
      for (var f = Object.keys(e), g = 0; g < f.length; ++g) b[f[g]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++)
      if (!b.hasOwnProperty(c[d])) {
        S(71);
        break;
      }
    return Object.keys(b);
  };
  h.getMergedValues = function (a, b) {
    function c(l) {
      vb(l) &&
        xa(l, function (m, n) {
          e = !0;
          d[m] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    (e !== f || rk(this, d, g)) && S(71);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  h.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var l = 0; l < a.length; l++)
          void 0 !== g[a[l]] && ((b[a[l]] = g[a[l]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
      return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    rk(this, b, e) && S(71);
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  h.getEventModelKeys = function () {
    var a = [],
      b;
    for (b in this.eventModel)
      b !== R.sb &&
        this.eventModel.hasOwnProperty(b) &&
        void 0 !== this.eventModel[b] &&
        a.push(b);
    return a;
  };
  var rk = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = tb(b);
      if (d !== tb(c) || !((vb(b) && vb(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (rk(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b)
          if (!c.hasOwnProperty(g) || rk(a, b[g], c[g])) return !0;
      }
    } catch (l) {
      S(72);
    }
    return !1;
  };
  function sk() {
    T.dedupe_gclid || (T.dedupe_gclid = "" + Ff());
    return T.dedupe_gclid;
  }
  var tk;
  if (3 === Zd.ud.length) tk = "g";
  else {
    var uk = "G";
    uk = "g";
    tk = uk;
  }
  var vk = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: tk,
      OPT: "o",
    },
    wk = function (a) {
      var b = Gh.F.split("-"),
        c = b[0].toUpperCase(),
        d = vk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Zd.ud.length) {
        var g = "w";
        g = Zj() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Zd.ud + e;
    };
  function xk(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var yk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function zk() {
    return Ta("iPhone") && !Ta("iPod") && !Ta("iPad");
  }
  Ta("Opera");
  Ta("Trident") || Ta("MSIE");
  Ta("Edge");
  !Ta("Gecko") ||
    (-1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge")) ||
    Ta("Trident") ||
    Ta("MSIE") ||
    Ta("Edge");
  -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
  Ta("Macintosh");
  Ta("Windows");
  Ta("Linux") || Ta("CrOS");
  var Ak = ka.navigator || null;
  Ak && (Ak.appVersion || "").indexOf("X11");
  Ta("Android");
  zk();
  Ta("iPad");
  Ta("iPod");
  zk() || Ta("iPad") || Ta("iPod");
  Sa().toLowerCase().indexOf("kaios");
  var Bk = function (a) {
    if (!a || !H.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var Ck = function () {};
  var Dk = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Ek = function (a, b) {
      this.o = a;
      this.m = null;
      this.C = {};
      this.U = 0;
      this.I = void 0 === b ? 500 : b;
      this.s = null;
    };
  ja(Ek, Ck);
  Ek.prototype.addEventListener = function (a) {
    var b = {},
      c = of(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.I &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.I));
    var e = function (f, g) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Dk(b)),
          (g && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Fk(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Ek.prototype.removeEventListener = function (a) {
    a && a.listenerId && Fk(this, "removeEventListener", null, a.listenerId);
  };
  var Hk = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Gk(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Gk(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? Gk(a.purpose.legitimateInterests, b) &&
                Gk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Gk = function (a, b) {
      return !(!a || !a[b]);
    },
    Fk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (Ik(a)) {
        Jk(a);
        var f = ++a.U;
        a.C[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Ik = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    Jk = function (a) {
      a.s ||
        ((a.s = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.C[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        yk(a.o, a.s));
    };
  var Kk = !0;
  Kk = !1;
  var Lk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Mk = xk("", 550),
    Nk = xk("", 500);
  function Ok() {
    var a = T.tcf || {};
    return (T.tcf = a);
  }
  var Tk = function () {
    var a = Ok(),
      b = new Ek(G, Kk ? 3e3 : -1);
    if (
      !0 === G.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof G.__tcfapi ||
        "function" === typeof b.o.__tcfapi ||
        null != Ik(b))
    ) {
      a.active = !0;
      a.Qc = {};
      Pk();
      var c = null;
      Kk
        ? (c = G.setTimeout(function () {
            Qk(a);
            Rk(a);
            c = null;
          }, Nk))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Qk(a), Rk(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Sk()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Lk)
                if (Lk.hasOwnProperty(g))
                  if ("1" === g) {
                    var l = d,
                      m = !0;
                    m = void 0 === m ? !1 : m;
                    var n;
                    var p = l;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = Dk(p)),
                        (n =
                          "error" === p.cmpStatus ||
                          0 !== p.internalErrorState ||
                          ("loaded" === p.cmpStatus &&
                            ("tcloaded" === p.eventStatus ||
                              "useractioncomplete" === p.eventStatus))
                            ? !0
                            : !1));
                    f["1"] = n
                      ? !1 === l.gdprApplies ||
                        "tcunavailable" === l.tcString ||
                        (void 0 === l.gdprApplies && !m) ||
                        "string" !== typeof l.tcString ||
                        !l.tcString.length
                        ? !0
                        : Hk(l, "1", 0)
                      : !1;
                  } else f[g] = Hk(d, g, Lk[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Qc = e), Rk(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Qk(a), Rk(a);
      }
    }
  };
  function Qk(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Kk && (a.Qc = Sk());
  }
  function Pk() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Mk), a);
    ud(b);
  }
  function Sk() {
    var a = {},
      b;
    for (b in Lk) Lk.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Rk(a) {
    var b = {},
      c = ((b.ad_storage = a.Qc["1"] ? "granted" : "denied"), b);
    wd(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Uk() }
    );
  }
  var Uk = function () {
      var a = Ok();
      return a.active ? a.tcString || "" : "";
    },
    Vk = function () {
      var a = Ok();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Wk = function (a) {
      if (!Lk.hasOwnProperty(String(a))) return !0;
      var b = Ok();
      return b.active && b.Qc ? !!b.Qc[String(a)] : !0;
    };
  var cl = !1;
  var dl = function () {
      this.m = {};
    },
    el = function (a, b, c) {
      null != c && (a.m[b] = c);
    },
    fl = function (a) {
      return Object.keys(a.m)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]);
        })
        .join("&");
    },
    hl = function (a, b, c, d, e) {};
  var jl = /[A-Z]+/,
    kl = /\s/,
    ll = function (a) {
      if (k(a)) {
        a = Ca(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (jl.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (kl.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], J: d };
          }
        }
      }
    },
    nl = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = ll(a[c]);
        d && (b[d.id] = d);
      }
      ml(b);
      var e = [];
      xa(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function ml(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.J[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var pl = function (a, b, c) {
      if (G[a.functionName]) return b.$e && J(b.$e), G[a.functionName];
      var d = ol();
      G[a.functionName] = d;
      if (a.yd)
        for (var e = 0; e < a.yd.length; e++) G[a.yd[e]] = G[a.yd[e]] || ol();
      a.Jd && void 0 === G[a.Jd] && (G[a.Jd] = c);
      fb(bk("https://", "http://", a.hf), b.$e, b.gj);
      return d;
    },
    ol = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    ql = {
      functionName: "_googWcmImpl",
      Jd: "_googWcmAk",
      hf: "www.gstatic.com/wcm/loader.js",
    },
    rl = {
      functionName: "_gaPhoneImpl",
      Jd: "ga_wpid",
      hf: "www.gstatic.com/gaphone/loader.js",
    },
    sl = { mh: "", ii: "5" },
    tl = {
      functionName: "_googCallTrackingImpl",
      yd: [rl.functionName, ql.functionName],
      hf:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (sl.mh || sl.ii) +
        ".js",
    },
    ul = {},
    vl = function (a, b, c, d) {
      S(22);
      if (c) {
        d = d || {};
        var e = pl(ql, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Ta && (f.autoreplace = c);
        e(2, d.Ta, f, c, 0, Da(), d.options);
      }
    },
    wl = function (a, b, c, d) {
      S(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Da(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          ul[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length
              ? ((e.adData = { ak: g.J[0], cl: g.J[1] }), (ul[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.containerId }), (ul[g.id] = !0)));
        }
        (e.gaData || e.adData) && pl(tl, d)(d.Ta, e, d.options);
      }
    },
    xl = function () {
      var a = !1;
      return a;
    },
    yl = function (a, b) {
      if (a)
        if (Zj()) {
        } else {
          if (k(a)) {
            var c = ll(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(R.Ph);
          if (f && qa(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var l = ll(f[g]);
              l &&
                (d.push(l),
                (a.id === l.id ||
                  (a.id === a.containerId &&
                    a.containerId === l.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var m = b.getWithConfig(R.Kf),
              n;
            if (m) {
              qa(m) ? (n = m) : (n = [m]);
              var p = b.getWithConfig(R.If),
                q = b.getWithConfig(R.Jf),
                r = b.getWithConfig(R.Lf),
                u = b.getWithConfig(R.Oh),
                t = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var x = 0; x < n.length; x++)
                if (x < v)
                  if (d) wl(d, n[x], u, { Ta: t, options: r });
                  else if ("AW" === a.prefix && a.J[1])
                    xl()
                      ? wl([a], n[x], u || "US", { Ta: t, options: r })
                      : vl(a.J[0], a.J[1], n[x], { Ta: t, options: r });
                  else if ("UA" === a.prefix)
                    if (xl()) wl([a], n[x], u || "US", { Ta: t });
                    else {
                      var y = a.containerId,
                        w = n[x],
                        B = { Ta: t };
                      S(23);
                      if (w) {
                        B = B || {};
                        var z = pl(rl, B, y),
                          D = {};
                        void 0 !== B.Ta ? (D.receiver = B.Ta) : (D.replace = w);
                        D.ga_wpid = y;
                        D.destination = w;
                        z(2, Da(), D);
                      }
                    }
            }
          }
        }
    };
  var Gl = !1;
  function Hl() {
    if (oa(Za.joinAdInterestGroup)) return !0;
    Gl || (Bk(""), (Gl = !0));
    return oa(Za.joinAdInterestGroup);
  }
  function Il(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > A() - d) {
        Sc("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          H.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Sc("TAGGING", 10);
          return;
        }
      } catch (e) {}
    hb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: A() },
      c
    );
  }
  var rm = function (a, b, c) {
      this.s = a;
      this.eventName = b;
      this.m = c;
      this.o = {};
      this.metadata = {};
      this.I = !1;
    },
    sm = function (a, b, c) {
      var d = a.m.getWithConfig(b);
      void 0 !== d ? (a.o[b] = d) : void 0 !== c && (a.o[b] = c);
    },
    tm = function (a, b, c) {
      var d = Ae(a.s);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function um(a) {
    return {
      getDestinationId: function () {
        return a.s;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.o[b];
      },
      setHitData: function (b, c) {
        return void (a.o[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.o[b] && (a.o[b] = c);
      },
      copyToHitData: function (b, c) {
        sm(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.I = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var Sm = function () {
      var a = !0;
      (Wk(7) && Wk(9) && Wk(10)) || (a = !1);
      return a;
    },
    Tm = function () {
      var a = !0;
      (Wk(3) && Wk(4)) || (a = !1);
      return a;
    };
  var Xm = function (a, b) {
      var c = b.getWithConfig(R.Ra),
        d = b.getWithConfig(R.ab),
        e = b.getWithConfig(c);
      if (void 0 === e) {
        var f = void 0;
        Um.hasOwnProperty(c)
          ? (f = Um[c])
          : Vm.hasOwnProperty(c) && (f = Vm[c]);
        1 === f && (f = Wm(c));
        k(f)
          ? Ej()(function () {
              var g = Ej().getByName(a).get(f);
              d(g);
            })
          : d(void 0);
      } else d(e);
    },
    Ym = function (a, b) {
      var c = a[R.yc],
        d = b + ".",
        e = a[R.M] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[R.Ob];
      e = String(e).replace(/\s+/g, "").split(",");
      var l = Ej();
      l(d + "require", "linker");
      l(d + "linker:autoLink", e, f, g);
    },
    bn = function (a, b, c) {
      if (id() && (!c.isGtmEvent || !Zm[a])) {
        var d = !xd(R.K),
          e = function (f) {
            var g,
              l,
              m = Ej(),
              n = $m(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || an(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + ke()),
                (l = n.createOnlyFields),
                n.gtmTrackerName && (l.name = g));
              m(function () {
                var u = m.getByName(b);
                u && (p = u.get("clientId"));
                c.isGtmEvent || m.remove(b);
              });
              m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
              d &&
                xd(R.K) &&
                ((d = !1),
                m(function () {
                  var u = Ej().getByName(c.isGtmEvent ? g : b);
                  !u ||
                    (u.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = R.Vd[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = R.Vd[f])),
                    u.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? u.send("pageview")
                      : u.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        zd(function () {
          return e(R.K);
        }, R.K);
        zd(function () {
          return e(R.D);
        }, R.D);
        c.isGtmEvent && (Zm[a] = !0);
      }
    },
    cn = function (a, b) {
      Yj() && b && (a[R.pb] = b);
    },
    mn = function (a, b, c) {
      function d() {
        var I = c.getWithConfig(R.sc);
        l(function () {
          if (!c.isGtmEvent && vb(I)) {
            var P = t.fieldsToSend,
              N = m().getByName(n),
              L;
            for (L in I)
              if (
                I.hasOwnProperty(L) &&
                /^(dimension|metric)\d+$/.test(L) &&
                void 0 != I[L]
              ) {
                var K = N.get(Wm(I[L]));
                dn(P, L, K);
              }
          }
        });
      }
      function e() {
        if (t.displayfeatures) {
          var I = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: I });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        l = c.isGtmEvent ? Gj(c.getWithConfig("gaFunctionName")) : Gj();
      if (oa(l)) {
        var m = Ej,
          n;
        c.isGtmEvent
          ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (I) {
            var P = [].slice.call(arguments, 0);
            P[0] = n ? n + "." + P[0] : "" + P[0];
            l.apply(window, P);
          },
          q = function (I) {
            var P = function (Q, ea) {
                for (var sa = 0; ea && sa < ea.length; sa++) p(Q, ea[sa]);
              },
              N = c.isGtmEvent,
              L = N ? en(t) : fn(b, c);
            if (L) {
              var K = {};
              cn(K, I);
              p("require", "ec", "ec.js", K);
              N && L.Oe && p("set", "&cu", L.Oe);
              var U = L.action;
              if (N || "impressions" === U)
                if ((P("ec:addImpression", L.Ig), !N)) return;
              if ("promo_click" === U || "promo_view" === U || (N && L.Pc)) {
                var V = L.Pc;
                P("ec:addPromo", V);
                if (V && 0 < V.length && "promo_click" === U) {
                  N ? p("ec:setAction", U, L.ib) : p("ec:setAction", U);
                  return;
                }
                if (!N) return;
              }
              "promo_view" !== U &&
                "impressions" !== U &&
                (P("ec:addProduct", L.Bb), p("ec:setAction", U, L.ib));
            }
          },
          r = function (I) {
            if (I) {
              var P = {};
              if (vb(I))
                for (var N in gn) gn.hasOwnProperty(N) && hn(gn[N], N, I[N], P);
              cn(P, y);
              p("require", "linkid", P);
            }
          },
          u = function () {
            if (Zj()) {
            } else {
              var I = c.getWithConfig(R.Nh);
              I &&
                (p("require", I, { dataLayer: Zd.V }), p("require", "render"));
            }
          },
          t = $m(n, b, c),
          v = function (I, P, N) {
            N && (P = "" + P);
            t.fieldsToSend[I] = P;
          };
        !c.isGtmEvent &&
          an(n, t.createOnlyFields) &&
          (l(function () {
            m() && m().remove(n);
          }),
          (jn[n] = !1));
        l("create", f, t.createOnlyFields);
        if (t.createOnlyFields[R.pb] && !c.isGtmEvent) {
          var x = Wj(t.createOnlyFields[R.pb], "/analytics.js");
          x && (g = x);
        }
        var y = c.isGtmEvent ? t.fieldsToSet[R.pb] : t.createOnlyFields[R.pb];
        if (y) {
          var w = c.isGtmEvent ? t.fieldsToSet[R.ed] : t.createOnlyFields[R.ed];
          w && !jn[n] && ((jn[n] = !0), l(Kj(n, w)));
        }
        c.isGtmEvent
          ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(t.linkAttribution));
        var B = t[R.ka];
        B && B[R.M] && Ym(B, n);
        p("set", t.fieldsToSet);
        if (c.isGtmEvent) {
          if (t.enableLinkId) {
            var z = {};
            cn(z, y);
            p("require", "linkid", "linkid.js", z);
          }
          id() && bn(f, n, c);
        }
        if (b === R.hc)
          if (c.isGtmEvent) {
            e();
            if (t.remarketingLists) {
              var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: D });
            }
            q(y);
            p("send", "pageview");
            t.createOnlyFields._useUp && Hj(n + ".");
          } else u(), p("send", "pageview", t.fieldsToSend);
        else
          b === R.Ca
            ? (u(),
              yl(f, c),
              c.getWithConfig(R.hb) && (dh(["aw", "dc"]), Hj(n + ".")),
              0 != t.sendPageView && p("send", "pageview", t.fieldsToSend),
              bn(f, n, c),
              !c.isGtmEvent &&
                0 < c.getEventModelKeys().length &&
                (S(68), 1 < T.configCount && S(69)))
            : b === R.Ia
            ? Xm(n, c)
            : "screen_view" === b
            ? p("send", "screenview", t.fieldsToSend)
            : "timing_complete" === b
            ? ((t.fieldsToSend.hitType = "timing"),
              v("timingCategory", t.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", t.timingVar, !0)
                : v("timingVar", t.name, !0),
              v("timingValue", za(t.value)),
              void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0),
              p("send", t.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", t.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((t.fieldsToSend.hitType = "social"),
                  v("socialNetwork", t.socialNetwork, !0),
                  v("socialAction", t.socialAction, !0),
                  v("socialTarget", t.socialTarget, !0))
                : ((c.isGtmEvent || kn[b]) && q(y),
                  c.isGtmEvent && e(),
                  (t.fieldsToSend.hitType = "event"),
                  v("eventCategory", t.eventCategory, !0),
                  v("eventAction", t.eventAction || b, !0),
                  void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0),
                  void 0 !== t.value && v("eventValue", za(t.value))),
              p("send", t.fieldsToSend));
        var C = !1;
        var E = ln;
        C && (E = c.getContainerTypeLoaded("UA"));
        if (!E && !c.isGtmEvent) {
          ln = !0;
          C && c.setContainerTypeLoaded("UA", !0);
          zj();
          var F = function () {
              C && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            M = function () {
              m().loaded || F();
            };
          Zj() ? J(M) : fb(g, M, F);
        }
      } else J(c.onFailure);
    },
    nn = function (a, b, c, d) {
      Ad(
        function () {
          mn(a, b, d);
        },
        [R.K, R.D]
      );
    },
    pn = function (a, b) {
      function c(f) {
        function g(p, q) {
          for (var r = 0; r < q.length; r++) {
            var u = q[r];
            if (f[u]) {
              m[p] = f[u];
              break;
            }
          }
        }
        function l() {
          if (f.category) m.category = f.category;
          else {
            for (var p = "", q = 0; q < on.length; q++)
              void 0 !== f[on[q]] && (p && (p += "/"), (p += f[on[q]]));
            p && (m.category = p);
          }
        }
        var m = O(f),
          n = !1;
        if (n || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            l();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return m;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && vb(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    qn = function (a) {
      return xd(a);
    },
    rn = !1;
  var ln,
    jn = {},
    Zm = {},
    sn = {},
    Um = Object.freeze(
      ((sn.client_storage = "storage"),
      (sn.sample_rate = 1),
      (sn.site_speed_sample_rate = 1),
      (sn.store_gac = 1),
      (sn.use_amp_client_id = 1),
      (sn[R.ia] = 1),
      (sn[R.sa] = "storeGac"),
      (sn[R.ja] = 1),
      (sn[R.va] = 1),
      (sn[R.Ka] = 1),
      (sn[R.Kb] = 1),
      (sn[R.Za] = 1),
      (sn[R.Lb] = 1),
      sn)
    ),
    tn = {},
    un = Object.freeze(
      ((tn._cs = 1),
      (tn._useUp = 1),
      (tn.allowAnchor = 1),
      (tn.allowLinker = 1),
      (tn.alwaysSendReferrer = 1),
      (tn.clientId = 1),
      (tn.cookieDomain = 1),
      (tn.cookieExpires = 1),
      (tn.cookieFlags = 1),
      (tn.cookieName = 1),
      (tn.cookiePath = 1),
      (tn.cookieUpdate = 1),
      (tn.legacyCookieDomain = 1),
      (tn.legacyHistoryImport = 1),
      (tn.name = 1),
      (tn.sampleRate = 1),
      (tn.siteSpeedSampleRate = 1),
      (tn.storage = 1),
      (tn.storeGac = 1),
      (tn.useAmpClientId = 1),
      (tn._cd2l = 1),
      tn)
    ),
    vn = Object.freeze({ anonymize_ip: 1 }),
    wn = {},
    Vm = Object.freeze(
      ((wn.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (wn.app_id = 1),
      (wn.app_installer_id = 1),
      (wn.app_name = 1),
      (wn.app_version = 1),
      (wn.description = "exDescription"),
      (wn.fatal = "exFatal"),
      (wn.language = 1),
      (wn.page_hostname = "hostname"),
      (wn.transport_type = "transport"),
      (wn[R.ca] = "currencyCode"),
      (wn[R.Gf] = 1),
      (wn[R.Sa] = "location"),
      (wn[R.ue] = "page"),
      (wn[R.La] = "referrer"),
      (wn[R.zc] = "title"),
      (wn[R.Of] = 1),
      (wn[R.Ea] = 1),
      wn)
    ),
    xn = {},
    yn = Object.freeze(
      ((xn.content_id = 1),
      (xn.event_action = 1),
      (xn.event_category = 1),
      (xn.event_label = 1),
      (xn.link_attribution = 1),
      (xn.name = 1),
      (xn[R.ka] = 1),
      (xn[R.Ff] = 1),
      (xn[R.wa] = 1),
      (xn[R.fa] = 1),
      xn)
    ),
    zn = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    on = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    An = {},
    gn = Object.freeze(
      ((An.levels = 1), (An[R.va] = "duration"), (An[R.Kb] = 1), An)
    ),
    Bn = {},
    Cn = Object.freeze(
      ((Bn.anonymize_ip = 1),
      (Bn.fatal = 1),
      (Bn.send_page_view = 1),
      (Bn.store_gac = 1),
      (Bn.use_amp_client_id = 1),
      (Bn[R.sa] = 1),
      (Bn[R.Gf] = 1),
      Bn)
    ),
    hn = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (Cn[b] && (c = Aa(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Wm(b)] = c;
        else if (k(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Wm = function (a) {
      return a && k(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    Dn = {},
    kn = Object.freeze(
      ((Dn.checkout_progress = 1),
      (Dn.select_content = 1),
      (Dn.set_checkout_option = 1),
      (Dn[R.Gb] = 1),
      (Dn[R.Hb] = 1),
      (Dn[R.lb] = 1),
      (Dn[R.nb] = 1),
      (Dn[R.Ib] = 1),
      (Dn[R.oa] = 1),
      (Dn[R.Jb] = 1),
      (Dn[R.qa] = 1),
      Dn)
    ),
    En = {},
    Fn = Object.freeze(
      ((En.checkout_progress = 1),
      (En.set_checkout_option = 1),
      (En[R.vf] = 1),
      (En[R.Gb] = 1),
      (En[R.Hb] = 1),
      (En[R.lb] = 1),
      (En[R.oa] = 1),
      (En[R.Jb] = 1),
      (En[R.wf] = 1),
      En)
    ),
    Gn = {},
    Hn = Object.freeze(
      ((Gn.generate_lead = 1),
      (Gn.login = 1),
      (Gn.search = 1),
      (Gn.select_content = 1),
      (Gn.share = 1),
      (Gn.sign_up = 1),
      (Gn.view_search_results = 1),
      (Gn[R.nb] = 1),
      (Gn[R.Ib] = 1),
      (Gn[R.qa] = 1),
      Gn)
    ),
    In = function (a) {
      var b = "general";
      Fn[a]
        ? (b = "ecommerce")
        : Hn[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Jn = {},
    Kn = Object.freeze(
      ((Jn.view_search_results = 1),
      (Jn[R.nb] = 1),
      (Jn[R.Ib] = 1),
      (Jn[R.qa] = 1),
      Jn)
    ),
    dn = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    Ln = function (a) {
      if (qa(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    $m = function (a, b, c) {
      var d = function (M) {
          return c.getWithConfig(M);
        },
        e = {},
        f = {},
        g = {},
        l = {},
        m = Ln(d(R.Mh));
      !c.isGtmEvent && m && dn(f, "exp", m);
      g["&gtm"] = wk(!0);
      id() && (l._cs = qn);
      var n = d(R.sc);
      if (!c.isGtmEvent && vb(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && dn(f, p, q);
          }
      for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
        var t = r[u];
        if (c.isGtmEvent) {
          var v = d(t);
          zn.hasOwnProperty(t)
            ? (e[t] = v)
            : un.hasOwnProperty(t)
            ? (l[t] = v)
            : (g[t] = v);
        } else {
          var x = void 0;
          x = t !== R.T ? d(t) : c.getMergedValues(t);
          if (yn.hasOwnProperty(t)) hn(yn[t], t, x, e);
          else if (vn.hasOwnProperty(t)) hn(vn[t], t, x, g);
          else if (Vm.hasOwnProperty(t)) hn(Vm[t], t, x, f);
          else if (Um.hasOwnProperty(t)) hn(Um[t], t, x, l);
          else if (/^(dimension|metric|content_group)\d+$/.test(t))
            hn(1, t, x, f);
          else if (t === R.T) {
            if (!rn) {
              var y = Ma(x);
              y && (f["&did"] = y);
            }
            var w = void 0,
              B = void 0;
            b === R.Ca
              ? (w = Ma(c.getMergedValues(t), "."))
              : ((w = Ma(c.getMergedValues(t, 1), ".")),
                (B = Ma(c.getMergedValues(t, 2), ".")));
            w && (f["&gdid"] = w);
            B && (f["&edid"] = B);
          } else
            t === R.Da && 0 > r.indexOf(R.Kb) && (l.cookieName = x + "_ga");
        }
      }
      (!1 !== d(R.Ch) && !1 !== d(R.ic) && Sm()) || (g.allowAdFeatures = !1);
      (!1 !== d(R.W) && Tm()) || (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(R.hb) && (l._useUp = !0);
      if (c.isGtmEvent) {
        l.name = l.name || e.gtmTrackerName;
        var z = g.hitCallback;
        g.hitCallback = function () {
          oa(z) && z();
          c.onSuccess();
        };
      } else {
        dn(l, "cookieDomain", "auto");
        dn(g, "forceSSL", !0);
        dn(e, "eventCategory", In(b));
        Kn[b] && dn(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? dn(e, "eventLabel", d(R.Ff))
          : "search" === b || "view_search_results" === b
          ? dn(e, "eventLabel", d(R.Th))
          : "select_content" === b && dn(e, "eventLabel", d(R.Gh));
        var D = e[R.ka] || {},
          C = D[R.Nb];
        C || (0 != C && D[R.M])
          ? (l.allowLinker = !0)
          : !1 === C && dn(l, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        l.name = a;
      }
      id() &&
        ((g["&gcs"] = yd()),
        xd(R.K) || (l.storage = "none"),
        xd(R.D) || ((g.allowAdFeatures = !1), (l.storeGac = !1)));
      var E = d(R.xa) || d(R.pb),
        F = d(R.ed);
      E && (c.isGtmEvent || (l[R.pb] = E), (l._cd2l = !0));
      F && !c.isGtmEvent && (l[R.ed] = F);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = l;
      return e;
    },
    en = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Oe = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Ig = "impressions" === b.translateIfKeyEquals ? pn(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Pc = "promoView" === b.translateIfKeyEquals ? pn(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Pc = "promoClick" === b.translateIfKeyEquals ? pn(f, !0) : f;
        c.ib = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var l = b[g].products;
          c.Bb = "products" === b.translateIfKeyEquals ? pn(l, !0) : l;
          c.ib = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    fn = function (a, b) {
      function c(u) {
        return {
          id: d(R.fb),
          affiliation: d(R.Jh),
          revenue: d(R.fa),
          tax: d(R.Af),
          shipping: d(R.ke),
          coupon: d(R.Kh),
          list: d(R.je) || u,
        };
      }
      for (
        var d = function (u) {
            return b.getWithConfig(u);
          },
          e = d(R.X),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][R.je]);
        g++
      );
      var l = d(R.sc);
      if (vb(l))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in l)
            l.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != l[p] &&
              dn(n, p, n[l[p]]);
        }
      var q = null,
        r = d(R.Lh);
      a === R.oa || a === R.Jb
        ? (q = { action: a, ib: c(), Bb: pn(e) })
        : a === R.Gb
        ? (q = { action: "add", Bb: pn(e) })
        : a === R.Hb
        ? (q = { action: "remove", Bb: pn(e) })
        : a === R.qa
        ? (q = { action: "detail", ib: c(f), Bb: pn(e) })
        : a === R.nb
        ? (q = { action: "impressions", Ig: pn(e) })
        : "view_promotion" === a
        ? (q = { action: "promo_view", Pc: pn(r) })
        : "select_content" === a && r && 0 < r.length
        ? (q = { action: "promo_click", Pc: pn(r) })
        : "select_content" === a
        ? (q = { action: "click", ib: { list: d(R.je) || f }, Bb: pn(e) })
        : a === R.lb || "checkout_progress" === a
        ? (q = {
            action: "checkout",
            Bb: pn(e),
            ib: { step: a === R.lb ? 1 : d(R.zf), option: d(R.yf) },
          })
        : "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            ib: { step: d(R.zf), option: d(R.yf) },
          });
      q && (q.Oe = d(R.ca));
      return q;
    },
    Mn = {},
    an = function (a, b) {
      var c = Mn[a];
      Mn[a] = O(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var Nn = null,
    On = !1;
  function Pn(a) {
    return On && !a ? (Nn = Nn || new Qn()) : (T.gcq = T.gcq || new Qn());
  }
  var Rn = function (a, b, c) {
      Pn().register(a, b, c);
    },
    Sn = function (a, b, c, d) {
      Pn().push("event", [b, a], c, d);
    },
    Tn = function (a, b) {
      Pn().push("config", [a], b);
    },
    Un = function (a, b, c, d) {
      Pn().push("get", [a, b], c, d);
    },
    Vn = {},
    Wn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.s = null;
      this.claimed = this.m = !1;
    },
    Xn = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.O = c || "";
      this.m = d;
      this.o = e;
    },
    Qn = function () {
      this.o = {};
      this.s = {};
      this.m = [];
      this.C = { AW: !1, UA: !1 };
    },
    Yn = function (a, b) {
      var c = ll(b);
      return (a.o[c.containerId] = a.o[c.containerId] || new Wn());
    },
    Zn = function (a, b, c, d) {
      if (b) {
        var e = ll(b);
        if (e && 1 === Yn(a, b).status) {
          Yn(a, b).status = 2;
          var f = {};
          xi &&
            (f.timeoutId = G.setTimeout(function () {
              S(38);
              $h();
            }, 3e3));
          a.push("require", [f], e.containerId);
          Vn[e.containerId] = A();
          if (Zj()) {
          } else 2 === d ? fk(e.containerId, c) : ek(e.containerId, c, !0);
        }
      }
    },
    $n = function (a, b, c, d) {
      if (d.O) {
        var e = Yn(a, d.O),
          f = e.s;
        if (f) {
          var g = O(c),
            l = O(e.targetConfig[d.O]),
            m = O(e.containerConfig),
            n = O(e.remoteConfig),
            p = O(a.s),
            q = {};
          try {
            q = O(ne);
          } catch (x) {
            S(72);
          }
          var r = te("gtm.uniqueEventId"),
            u = ll(d.O).prefix,
            t = Ga(function () {
              var x = g[R.Mb];
              x && J(x);
            }),
            v = pk(
              ok(
                qk(
                  nk(lk(kk(mk(jk(ik(hk(g), l), m), n), p), q), function () {
                    Ki(r, u, "2");
                    t();
                  }),
                  function () {
                    Ki(r, u, "3");
                    t();
                  }
                ),
                function (x, y) {
                  a.C[x] = y;
                }
              ),
              function (x) {
                return a.C[x];
              }
            );
          try {
            Ki(r, u, "1"), Ui(d.type, d.O, v);
            f(d.O, b, d.s, v);
          } catch (x) {
            Ki(r, u, "4");
          }
        }
      }
    };
  h = Qn.prototype;
  h.register = function (a, b, c) {
    var d = Yn(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (O(d.remoteConfig, c), (d.remoteConfig = c));
      var e = ll(a),
        f = Vn[e.containerId];
      if (void 0 !== f) {
        var g = T[e.containerId].bootstrap,
          l = e.prefix.toUpperCase();
        T[e.containerId]._spx && (l = l.toLowerCase());
        var m = te("gtm.uniqueEventId"),
          n = l,
          p = A() - g;
        if (xi && !ei[m]) {
          m !== ai && (Wh(), (ai = m));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          li = li ? li + "," + q : "&cl=" + q;
        }
        delete Vn[e.containerId];
      }
      this.flush();
    }
  };
  h.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (ll(f)) {
          var g = Yn(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  h.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!ll(c)) return;
      Zn(this, c, b[0][R.xa] || this.s[R.xa], "event" === a ? 2 : 1);
      Yn(this, c).m && (d = !1);
    }
    this.m.push(new Xn(a, Math.floor(A() / 1e3), c, b, d));
    d || this.flush();
  };
  h.insert = function (a, b, c) {
    var d = Math.floor(A() / 1e3);
    0 < this.m.length
      ? this.m.splice(1, 0, new Xn(a, d, c, b, !1))
      : this.m.push(new Xn(a, d, c, b, !1));
  };
  h.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
      var f = this.m[0];
      if (f.o)
        !f.O || Yn(this, f.O).m ? ((f.o = !1), this.m.push(f)) : c.push(f),
          this.m.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = Yn(this, f.O);
            if (3 !== g.status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            xi && G.clearTimeout(f.m[0].timeoutId);
            break;
          case "set":
            xa(f.m[0], function (r, u) {
              O(Ka(r, u), b.s);
            });
            break;
          case "config":
            g = Yn(this, f.O);
            if (g.claimed) break;
            e.Pa = {};
            xa(
              f.m[0],
              (function (r) {
                return function (u, t) {
                  O(Ka(u, t), r.Pa);
                };
              })(e)
            );
            var l = !!e.Pa[R.ld];
            delete e.Pa[R.ld];
            var m = ll(f.O),
              n = m.containerId === m.id;
            l || (n ? (g.containerConfig = {}) : (g.targetConfig[f.O] = {}));
            (g.m && l) || $n(this, R.Ca, e.Pa, f);
            g.m = !0;
            delete e.Pa[R.sb];
            n
              ? O(e.Pa, g.containerConfig)
              : (O(e.Pa, g.targetConfig[f.O]), S(70));
            d = !0;
            break;
          case "event":
            g = Yn(this, f.O);
            if (g.claimed) break;
            e.Wc = {};
            xa(
              f.m[0],
              (function (r) {
                return function (u, t) {
                  O(Ka(u, t), r.Wc);
                };
              })(e)
            );
            $n(this, f.m[1], e.Wc, f);
            break;
          case "get":
            if (((g = Yn(this, f.O)), !g.claimed)) {
              var p = {},
                q = ((p[R.Ra] = f.m[0]), (p[R.ab] = f.m[1]), p);
              $n(this, R.Ia, q, f);
            }
        }
        this.m.shift();
        ao(this, f);
      }
      e = { Pa: e.Pa, Wc: e.Wc };
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var ao = function (a, b) {
    if ("require" !== b.type)
      if (b.O)
        for (
          var c = a.getCommandListeners(b.O)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o)
              for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]();
          }
  };
  Qn.prototype.getRemoteConfig = function (a) {
    return Yn(this, a).remoteConfig;
  };
  Qn.prototype.getCommandListeners = function (a) {
    return Yn(this, a).o;
  };
  var co = function (a, b) {
      return 1 === arguments.length ? bo("config", a) : bo("config", a, b);
    },
    eo = function (a, b) {
      return 1 === arguments.length ? bo("event", a) : bo("event", a, b);
    };
  function bo(a) {
    return arguments;
  }
  var go = function (a) {
    if (fo(a)) return a;
    this.m = a;
  };
  go.prototype.getUntrustedMessageValue = function () {
    return this.m;
  };
  var fo = function (a) {
      return !a || "object" !== tb(a) || vb(a)
        ? !1
        : "getUntrustedMessageValue" in a;
    },
    ho = function (a) {
      if (fo(a)) return a.getUntrustedMessageValue();
    };
  go.prototype.getUntrustedMessageValue = go.prototype.getUntrustedMessageValue;
  var io = function () {
    this.m = [];
    this.o = [];
  };
  io.prototype.push = function (a, b, c) {
    var d = this.m.length + 1;
    fo(a) && (a = ho(a) || a);
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    a = new go(a);
    var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d };
    this.m.push(e);
    for (var f = 0; f < this.o.length; f++)
      try {
        this.o[f](e);
      } catch (g) {}
  };
  io.prototype.listen = function (a) {
    this.o.push(a);
  };
  io.prototype.get = function () {
    for (var a = {}, b = 0; b < this.m.length; b++) {
      var c = this.m[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  var ko = function (a, b) {
      jo().push(a, b, {});
    },
    mo = function () {
      var a = lo;
      jo().listen(a);
    },
    no = function (a, b) {
      return (
        a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
      );
    };
  function jo() {
    var a = T.mb;
    a || ((a = new io()), (T.mb = a));
    return a;
  }
  var oo = !1;
  var po = !1;
  var qo = function (a, b) {
    T.addDestinationToContainer
      ? T.addDestinationToContainer(a, b)
      : ((T.pendingDestinationIds = T.pendingDestinationIds || []),
        T.pendingDestinationIds.push([a, b]));
  };
  var ro = {},
    so = {},
    to = function (a, b) {
      var c = so[b] || [];
      c.push(a);
      so[b] = c;
    },
    vo = function () {
      T.addTargetToGroup = function (e) {
        uo(e, "default");
      };
      T.addDestinationToContainer = function (e, f) {
        to(e, f);
      };
      var a = T.pendingDefaultTargets;
      delete T.pendingDefaultTargets;
      if (Array.isArray(a))
        for (var b = 0; b < a.length; ++b) uo(a[b], "default");
      var c = T.pendingDestinationIds;
      delete T.pendingDestinationIds;
      if (Array.isArray(c))
        for (var d = 0; d < c.length; ++d) to(c[d][0], c[d][1]);
    },
    uo = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = ro[b[c]] || [];
        ro[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    wo = function (a) {
      for (var b = [], c = {}, d = 0; d < a.length; c = { bc: c.bc }, d++) {
        var e = a[d];
        if (0 <= e.indexOf("-"))
          po
            ? ((c.bc = ll(e)),
              c.bc &&
                (oo
                  ? ra(
                      so[Gh.F] || [],
                      (function (n) {
                        return function (p) {
                          return n.bc.containerId === p;
                        };
                      })(c)
                    ) && b.push(e)
                  : c.bc.containerId === Gh.F && b.push(e)))
            : b.push(e);
        else {
          var f = ro[e] || [];
          if (po)
            if (oo) {
              if (-1 < f.indexOf(Gh.F)) {
                var g = so[Gh.F];
                g && g.length && (b = b.concat(g));
              }
            } else
              for (var l = 0; l < f.length; l++) {
                var m = ll(f[l]);
                m && m.containerId === Gh.F && b.push(m.id);
              }
          else f && f.length && (b = b.concat(f));
        }
      }
      return b;
    },
    xo = function (a) {
      xa(ro, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Go = function (a) {
      var b = T.zones;
      return b
        ? b.getIsAllowedFn(Gh.F, a)
        : function () {
            return !0;
          };
    },
    Ho = function (a) {
      var b = T.zones;
      return b ? b.isActive(Gh.F, a) : !0;
    };
  var Ko = function (a, b) {
    for (var c = [], d = 0; d < Yb.length; d++)
      if (a[d]) {
        var e = Yb[d];
        var f = xj(b.ub);
        try {
          var g = Pj(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = bc[p];
            m.call(l, {
              ah: n,
              Sg: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else Io(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(Jo);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  function Jo(a, b) {
    var c,
      d = b.Sg,
      e = a.Sg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.ah,
        l = b.ah;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function Io(a, b) {
    if (!xi) return;
    var c = function (d) {
      var e = b.Ve(Yb[d]) ? "3" : "4",
        f = gc(Yb[d][xb.ag], b, []);
      f && f.length && c(f[0].index);
      Di(b.id, Yb[d], e);
      var g = gc(Yb[d][xb.dg], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var No = !1,
    Lo;
  var So = function (a) {
    var b = A(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (No) return !1;
      No = !0;
    }
    var l,
      m = !1;
    if (Ho(c)) l = Go(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      m = !0;
      l = Go(Number.MAX_SAFE_INTEGER);
    }
    Ci(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Ve: Fh(l),
        Gj: [],
        Lg: function () {
          S(6);
        },
        rg: Oo(),
        sg: Po(c),
        ub: new cj(q, p),
      },
      u = lc(r);
    m && (u = Qo(u));
    var t = Ko(u, r),
      v = !1;
    yj(r.ub);
    ("gtm.js" !== e && "gtm.sync" !== e) || Jj(Gh.F);
    return Ro(u, t) || v;
  };
  function Po(a) {
    return function (b) {
      xi && (wb(b) || Li(a, "input", b));
    };
  }
  function Oo() {
    var a = {};
    a.event = xe("event", 1);
    a.ecommerce = xe("ecommerce", 1);
    a.gtm = xe("gtm");
    a.eventModel = xe("eventModel");
    return a;
  }
  function Qo(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] &&
        (ae[String(Yb[c][xb.tb])] && (b[c] = !0),
        void 0 !== Yb[c][xb.hi] && (b[c] = !0));
    return b;
  }
  function Ro(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Yb[c] && !be[String(Yb[c][xb.tb])]) return !0;
    return !1;
  }
  var To = !1;
  var Uo = "HA GF G UA AW DC".split(" "),
    Vo = !1,
    Wo = !1,
    Xo = 0;
  function Yo(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: ke() });
    return a["gtm.uniqueEventId"];
  }
  function Zo() {
    if (On) return !1;
    Vo || T.gtagRegistered || ((Vo = T.gtagRegistered = !0), vo());
    return Vo;
  }
  var tp = {
      config: function (a) {
        Yo(a);
        if (2 > a.length || !k(a[1])) return;
        var b = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !vb(a[2])) || 3 < a.length) return;
          b = a[2];
        }
        var c = ll(a[1]);
        if (!c || (On && -1 === Ih().indexOf(c.containerId))) return;
        var d = Zo() || On;
        b[R.De] ? delete b[R.De] : (xo(c.id), uo(c.id, b[R.qe] || "default"));
        delete b[R.qe];
        Wo || S(43);
        if (d && -1 !== Uo.indexOf(c.prefix)) {
          "G" === c.prefix && (b[R.sb] = !0);
          delete b[R.Mb];
          c.id === c.containerId && (T.configCount = ++Xo);
          Tn(b, c.id);
          return;
        }
        we("gtag.targets." + c.id, void 0);
        we("gtag.targets." + c.id, O(b));
      },
      consent: function (a) {
        if (3 === a.length) {
          S(39);
          var b = { eventId: Yo(a), priorityId: a["gtm.priorityId"] },
            c = a[1];
          "default" === c ? ud(a[2]) : "update" === c && wd(a[2], b);
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && k(b)) {
          var c;
          if (2 < a.length) {
            if ((!vb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = c,
            e = {},
            f = ((e.event = b), e);
          d &&
            ((f.eventModel = O(d)),
            d[R.Mb] && (f.eventCallback = d[R.Mb]),
            d[R.dd] && (f.eventTimeout = d[R.dd]));
          var g = Yo(a),
            l = a["gtm.priorityId"];
          f["gtm.uniqueEventId"] = g;
          l && (f["gtm.priorityId"] = l);
          if ("optimize.callback" === b)
            return (f.eventModel = f.eventModel || {}), f;
          var m;
          var n = c && c[R.qb];
          void 0 === n && ((n = te(R.qb, 2)), void 0 === n && (n = "default"));
          if (k(n) || qa(n)) {
            var p = n.toString().replace(/\s+/g, "").split(",");
            m = nl(wo(p));
          } else m = void 0;
          var q = m;
          if (!q) return;
          for (var r = Zo() || On, u = [], t = 0; r && t < q.length; t++) {
            var v = q[t];
            if (-1 !== Uo.indexOf(v.prefix)) {
              var x = O(c);
              "G" === v.prefix && (x[R.sb] = !0);
              delete x[R.Mb];
              Sn(b, x, v.id);
            }
            u.push(v.id);
          }
          f.eventModel = f.eventModel || {};
          0 < q.length
            ? (f.eventModel[R.qb] = u.join())
            : delete f.eventModel[R.qb];
          Wo || S(43);
          return f;
        }
      },
      get: function (a) {
        S(53);
        if (4 !== a.length || !k(a[1]) || !k(a[2]) || !oa(a[3])) return;
        var b = ll(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        Wo || S(43);
        if (On)
          if (To) {
            if (
              !ra(Jh(), function (f) {
                return b.containerId === f;
              })
            )
              return;
          } else {
            if (b.containerId !== Gh.F) return;
          }
        else if (!Zo()) return;
        if (-1 === Uo.indexOf(b.prefix)) return;
        Yo(a);
        var e = {};
        od(O(((e[R.Ra] = c), (e[R.ab] = d), e)));
        Un(
          c,
          function (f) {
            J(function () {
              return d(f);
            });
          },
          b.id
        );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          Wo = !0;
          Zo();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = Yo(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && vb(a[1])
          ? (b = O(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((b = {}),
            vb(a[2]) || qa(a[2]) ? (b[a[1]] = O(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          var c = Yo(a),
            d = a["gtm.priorityId"];
          O(b);
          if (Zo() || On) {
            var e = O(b);
            Pn().push("set", [e]);
          }
          b["gtm.uniqueEventId"] = c;
          d && (b["gtm.priorityId"] = d);
          b._clear = !0;
          return b;
        }
      },
    },
    up = { policy: !0 };
  var vp = function (a) {
      var b = G[Zd.V].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    wp = function (a) {
      var b = G[Zd.V],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var xp = !1,
    yp = [];
  function zp() {
    if (!xp) {
      xp = !0;
      for (var a = 0; a < yp.length; a++) J(yp[a]);
    }
  }
  var Ap = function (a) {
    xp ? J(a) : yp.push(a);
  };
  var Qp = 0,
    Rp = {},
    Sp = [],
    Tp = [],
    Up = !1,
    Vp = !1,
    Wp = function (a) {
      return G[Zd.V].push(a);
    },
    Xp = function (a, b) {
      var c = T[Zd.V],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = G.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (G.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Yp(a) {
    var b = a._clear;
    xa(a, function (d, e) {
      "_clear" !== d && (b && we(d, void 0), we(d, e));
    });
    ge || (ge = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = ke()), (a["gtm.uniqueEventId"] = c), we("gtm.uniqueEventId", c));
    return So(a);
  }
  function Zp(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (ya(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function $p() {
    for (var a = !1; !Vp && (0 < Sp.length || 0 < Tp.length); ) {
      if (!Up && Zp(Sp[0])) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d),
          f = Sp[0]["gtm.uniqueEventId"];
        f &&
          ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
        Sp.unshift(c, e);
        Up = !0;
      }
      Vp = !0;
      delete ne.eventModel;
      pe();
      var n = null,
        p = void 0;
      if (Tp.length) {
        var q = Tp.shift();
        n = q.message;
        p = q.debugContext;
      }
      null == n && (n = Sp.shift());
      if (null != n) {
        var r = fo(n);
        if (r) {
          n = ho(n);
          for (
            var u = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              t = 0;
            t < u.length;
            t++
          ) {
            var v = u[t],
              x = te(v, 1);
            if (qa(x) || vb(x)) x = O(x);
            oe[v] = x;
          }
        }
        try {
          if (oa(n))
            try {
              n.call(ue);
            } catch (I) {}
          else if (qa(n)) {
            var y = n;
            if (k(y[0])) {
              var w = y[0].split("."),
                B = w.pop(),
                z = y.slice(1),
                D = te(w.join("."), 2);
              if (null != D)
                try {
                  D[B].apply(D, z);
                } catch (I) {}
            }
          } else {
            if (ya(n)) {
              a: {
                var C = n,
                  E = p;
                if (C.length && k(C[0])) {
                  var F = tp[C[0]];
                  if (F && (!r || !up[C[0]])) {
                    n = F(C, E);
                    break a;
                  }
                }
                n = void 0;
              }
              if (!n) {
                Vp = !1;
                continue;
              }
            }
            a = Yp(n) || a;
            if (Zp(n)) {
              var M = n["gtm.uniqueEventId"];
              void 0 !== M && (aq(M), (Qp = M));
            }
          }
        } finally {
          r && pe(!0);
        }
      }
      Vp = !1;
    }
    return !a;
  }
  function bq() {
    var b = $p();
    try {
      vp(Gh.F);
    } catch (c) {}
    return b;
  }
  function lo(a) {
    var b = a.notBeforeEventId;
    Qp < b
      ? ((Rp[String(b)] = Rp[String(b)] || []), Rp[String(b)].push(a))
      : (Tp.push(a),
        Tp.sort(no),
        J(function () {
          Vp || $p();
        }));
  }
  function aq(a) {
    for (var b = Rp[String(a)] || [], c = 0; c < b.length; c++) Tp.push(b[c]);
    b.length && Tp.sort(no);
    delete Rp[String(a)];
  }
  var dq = function () {
      var a = ab(Zd.V, []),
        b = ab("google_tag_manager", {});
      Rp = jo().get();
      aq(0);
      mo();
      b = b[Zd.V] = b[Zd.V] || {};
      aj(function () {
        if (!b.gtmDom) {
          b.gtmDom = !0;
          var e = {};
          a.push(((e.event = "gtm.dom"), e));
        }
      });
      Ap(function () {
        if (!b.gtmLoad) {
          b.gtmLoad = !0;
          var e = {};
          a.push(((e.event = "gtm.load"), e));
        }
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < T.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++)
            e[f] = new go(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        Sp.push.apply(Sp, e);
        var g = c.apply(a, e);
        if (300 < this.length) for (S(4); 300 < this.length; ) this.shift();
        var l = "boolean" !== typeof g || g;
        return $p() && l;
      };
      var d = a.slice(0);
      Sp.push.apply(Sp, d);
      if (cq()) {
        J(bq);
      }
    },
    cq = function () {
      var a = !0;
      return a;
    };
  function eq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = A();
    return b < c + 3e5 && b > c - 9e5;
  }
  var fq = {};
  fq.od = new String("undefined");
  var Gq = G.clearTimeout,
    Hq = G.setTimeout,
    W = function (a, b, c, d) {
      if (Zj()) {
        b && J(b);
      } else return fb(a, b, c, d);
    },
    Iq = function () {
      return new Date();
    },
    Jq = function () {
      return G.location.href;
    },
    Kq = function (a) {
      return Oe(Qe(a), "fragment");
    },
    Lq = function (a) {
      return Pe(Qe(a));
    },
    Mq = function (a, b) {
      return te(a, b || 2);
    },
    Nq = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Wp(a)))
        : (d = Wp(a));
      return d;
    },
    Oq = function (a, b) {
      G[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === G[a] || (c && !G[a])) && (G[a] = b);
      return G[a];
    },
    Pq = function (a, b, c) {
      return sf(a, b, void 0 === c ? !0 : !!c);
    },
    Qq = function (a, b, c) {
      return 0 === Bf(a, b, c);
    },
    Rq = function (a, b) {
      if (Zj()) {
        b && J(b);
      } else hb(a, b);
    },
    Sq = function (a) {
      return !!mq(a, "init", !1);
    },
    Tq = function (a) {
      kq(a, "init", !0);
    },
    Uq = function (a, b, c) {
      xi && (wb(a) || Li(c, b, a));
    };

  var rr = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function sr(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var tr = new ua();
  function ur(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = tr.get(e);
      f || ((f = new RegExp(b, d)), tr.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function vr(a, b) {
    function c(g) {
      var l = Qe(g),
        m = Oe(l, "protocol"),
        n = Oe(l, "host", !0),
        p = Oe(l, "port"),
        q = Oe(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function wr(a) {
    return xr(a) ? 1 : 0;
  }
  function xr(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = O(a, {});
        O({ arg1: c[d], any_of: void 0 }, e);
        if (wr(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < rr.length; g++) {
                var l = rr[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return sr(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return ur(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return vr(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var Cr = encodeURI,
    Y = encodeURIComponent,
    Dr = ib;
  var Er = function (a, b) {
    if (!a) return !1;
    var c = Oe(Qe(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Fr = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  function dt() {
    return (G.gaGlobal = G.gaGlobal || {});
  }
  var et = function () {
      var a = dt();
      a.hid = a.hid || ta();
      return a.hid;
    },
    ft = function (a, b) {
      var c = dt();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Nt = function () {
    if (oa(G.__uspapi)) {
      var a = "";
      try {
        G.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var uu = window,
    vu = document,
    wu = function (a) {
      var b = uu._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === uu["ga-disable-" + a]))
        return !0;
      try {
        var c = uu.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = mf("AMP_TOKEN", String(vu.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return vu.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var xu = {};
  function Iu(a) {
    delete a.eventModel[R.sb];
    Pu(a.eventModel);
  }
  var Pu = function (a) {
    xa(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[R.Fa] || {};
    xa(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var ev = function (a, b, c) {
      Sn(b, c, a);
    },
    fv = function (a, b, c) {
      Sn(b, c, a, !0);
    },
    hv = function (a, b) {};
  function gv(a, b) {}
  var Z = { g: {} };

  (Z.g.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.h = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();

  (Z.g.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.h = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Mq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Uq(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (Z.g.rep = ["google"]),
    (function () {
      var a = !1;
      (function (b) {
        Z.__rep = b;
        Z.__rep.h = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
      })(function (b) {
        var c = ll(b.vtp_containerId),
          d;
        switch (c.prefix) {
          case "AW":
            d = em;
            break;
          case "DC":
            d = qm;
            break;
          case "GF":
            d = Jm;
            break;
          case "HA":
            d = Om;
            break;
          case "UA":
            d = nn;
            break;
          default:
            J(b.vtp_gtmOnFailure);
            return;
        }
        J(b.vtp_gtmOnSuccess);
        if (a) {
          var e = c.containerId,
            f = Jh();
          Pn(!0).notifyContainerLoaded(e, f);
        }
        Rn(b.vtp_containerId, d, b.vtp_remoteConfig || {});
      });
    })();

  (Z.g.cid = ["google"]),
    (function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.h = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
      })(function () {
        return Gh.F;
      });
    })();

  (Z.g.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.h = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable
          ? fv
          : ev)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
      });
    })();

  var iv = {};
  iv.dataLayer = ue;
  iv.callback = function (a) {
    ie.hasOwnProperty(a) && oa(ie[a]) && ie[a]();
    delete ie[a];
  };
  iv.bootstrap = 0;
  iv._spx = !1;
  (function (a) {
    if (!G["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (H.referrer) {
        var c = Qe(H.referrer);
        b = "cct.google" === Ne(c, "host");
      }
      if (!b) {
        var d = sf("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((G["__TAGGY_INSTALLED"] = !0),
        fb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          u = "GTM";
        (r = "OGT"), (u = "GTAG");
        var t = G["google.tagmanager.debugui2.queue"];
        t ||
          ((t = []),
          (G["google.tagmanager.debugui2.queue"] = t),
          fb(
            "https://" +
              Zd.fc +
              "/debug/bootstrap?id=" +
              Gh.F +
              "&src=" +
              u +
              "&cond=" +
              q +
              "&gtm=" +
              wk()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: $a, containerProduct: r, debug: !1, id: Gh.F },
        };
        v.data.resume = function () {
          a();
        };
        Zd.ph && (v.data.initialPublish = !0);
        t.push(v);
      },
      g = void 0,
      l = Oe(G.location, "query", !1, void 0, "gtm_debug");
    eq(l) && (g = 2);
    if (!g && H.referrer) {
      var m = Qe(H.referrer);
      "tagassistant.google.com" === Ne(m, "host") && (g = 3);
    }
    if (!g) {
      var n = sf("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = H.documentElement.getAttribute("data-tag-assistant-present");
      eq(p) && (g = 5);
    }
    g && $a ? f(g) : a();
  })(function () {
    var a = !1;
    a && Aj("INIT");
    Xc().o();
    Tk();
    Hg.enable_gbraid_cookie_write = !0;
    var b = !!T[Gh.F];
    if (b) {
      var c = T.zones;
      c && c.unregisterChild(Gh.F);
    } else {
      for (var d = Jh(), e = 0; e < d.length; e++) qo(d[e], Gh.F);
      for (
        var f = data.resource || {}, g = f.macros || [], l = 0;
        l < g.length;
        l++
      )
        Vb.push(g[l]);
      for (var m = f.tags || [], n = 0; n < m.length; n++) Yb.push(m[n]);
      for (var p = f.predicates || [], q = 0; q < p.length; q++) Xb.push(p[q]);
      for (var r = f.rules || [], u = 0; u < r.length; u++) {
        for (var t = r[u], v = {}, x = 0; x < t.length; x++)
          v[t[x][0]] = Array.prototype.slice.call(t[x], 1);
        Wb.push(v);
      }
      bc = Z;
      cc = wr;
      T[Gh.F] = iv;
      for (var y = Lh(), w = Ih(), B = 0; B < w.length; B++)
        y.container[w[B]] = !0;
      for (var z = Jh(), D = 0; D < z.length; D++) y.destination[z[D]] = !0;
      y.canonical[Gh.cc] = !0;
      Ha(je, Z.g);
      ec = mc;
      dq();
      Wi = !1;
      Xi = 0;
      if (
        ("interactive" == H.readyState && !H.createEventObject) ||
        "complete" == H.readyState
      )
        Zi();
      else {
        jb(H, "DOMContentLoaded", Zi);
        jb(H, "readystatechange", Zi);
        if (H.createEventObject && H.documentElement.doScroll) {
          var C = !0;
          try {
            C = !G.frameElement;
          } catch (P) {}
          C && $i();
        }
        jb(G, "load", Zi);
      }
      xp = !1;
      "complete" === H.readyState ? zp() : jb(G, "load", zp);
      xi && G.setInterval(qi, 864e5);
      he = A();
      iv.bootstrap = he;
      if (a) {
        var I = Bj("INIT");
      }
    }
  });
})();
