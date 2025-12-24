(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const s of t.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
document.addEventListener("DOMContentLoaded", () => {
  const r = document.querySelector(".logo");
  r &&
    (r.addEventListener("mouseenter", () => {
      r.style.transform = "scale(1.1) rotate(5deg)";
    }),
    r.addEventListener("mouseleave", () => {
      r.style.transform = "scale(1) rotate(0deg)";
    }));
});
