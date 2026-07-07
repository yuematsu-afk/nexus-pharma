(function () {
  var GA_MEASUREMENT_ID = '';
  var PLACEHOLDER_IDS = ['G-XXXXXXXXXX', ''];

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  function hasAnalyticsId() {
    return PLACEHOLDER_IDS.indexOf(GA_MEASUREMENT_ID) === -1;
  }

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name) || '';
    } catch (e) {
      return '';
    }
  }

  function eventParams(extra) {
    return Object.assign({
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
      utm_source: getParam('utm_source'),
      utm_medium: getParam('utm_medium'),
      utm_campaign: getParam('utm_campaign'),
      utm_term: getParam('utm_term'),
      utm_content: getParam('utm_content')
    }, extra || {});
  }

  window.nexusTrackEvent = function (eventName, params) {
    window.gtag('event', eventName, eventParams(params));
  };

  if (hasAnalyticsId()) {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      page_path: window.location.pathname
    });
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    var text = (link.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
    var isConversionLink =
      href.indexOf('#contact') !== -1 ||
      href.indexOf('members.html') !== -1 ||
      href.indexOf('anonymous-consult.html') !== -1 ||
      href.indexOf('sale-readiness-diagnosis.html') !== -1 ||
      link.classList.contains('btn') ||
      link.classList.contains('btn-primary') ||
      link.classList.contains('nav-cta');

    if (isConversionLink) {
      window.nexusTrackEvent('cta_click', {
        cta_text: text,
        cta_url: href,
        cta_location: link.closest('header') ? 'header' : (link.closest('footer') ? 'footer' : 'body')
      });
    }
  });
})();
