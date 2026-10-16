/* Chiesa EverGrace — one place for every social address.
   Paste a URL between the quotes and the icon appears on every page.
   Leave it empty and that icon stays hidden, so there are never dead links. */
(function () {
  var LINKS = {
    instagram: "https://www.instagram.com/chiesaevergrace/",
    facebook:  "",
    youtube:   "https://www.youtube.com/@ChiesaEverGrace",
    whatsapp:  "https://wa.me/18325857297"
  };

  // Email is assembled at run time so harvesters don't find it in the source.
  var ADDR = ["ci", "ao"].join("") + String.fromCharCode(64) + "evergrace" + "." + "it";

  var ICONS = {
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"/>',
    facebook:  '<path d="M14.5 8.5h2V5.6h-2.3C12 5.6 11 7 11 9v1.6H9v2.9h2V21h3v-7.5h2.2l.4-2.9H14V9.3c0-.5.2-.8.5-.8z" fill="currentColor" stroke="none"/>',
    youtube:   '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.2 9.4l5 2.6-5 2.6z" fill="currentColor" stroke="none"/>',
    whatsapp:  '<path d="M20 12a8 8 0 0 1-11.9 7L4 20l1.1-3.9A8 8 0 1 1 20 12z"/><path d="M9.2 9c.3-.1.6 0 .8.3l.7 1.2c.1.3.1.5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.8 1.1 1.4 1.9 1.9.2.1.4.1.6-.1l.5-.4c.2-.2.4-.2.7-.1l1.2.7c.3.2.4.5.3.8-.2.6-.8 1-1.5 1-2.4-.1-5.2-2.9-5.3-5.3 0-.7.4-1.3 1-1.5z" fill="currentColor" stroke="none"/>',
    email:     '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M4 7.5l8 5.5 8-5.5"/>'
  };

  var LABEL = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", whatsapp: "WhatsApp", email: "Email" };

  function icon(key, href) {
    return '<a class="soc" href="' + href + '" aria-label="' + LABEL[key] + '" title="' + LABEL[key] + '"' +
           (key === "email" ? "" : ' target="_blank" rel="noopener"') + '>' +
           '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" ' +
           'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
           ICONS[key] + '</svg></a>';
  }

  function render() {
    var rows = document.querySelectorAll(".social-row");
    if (!rows.length) return;
    var html = "";
    ["instagram", "facebook", "youtube", "whatsapp"].forEach(function (k) {
      if (LINKS[k]) html += icon(k, LINKS[k]);
    });
    html += icon("email", "mailto:" + ADDR);
    rows.forEach(function (el) { el.innerHTML = html; });
  }

  // Let the pages share one set of addresses for their own buttons too.
  window.EG = { links: LINKS, email: ADDR, renderSocial: render };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
