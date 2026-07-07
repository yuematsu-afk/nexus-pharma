# Analytics setup

This site includes a lightweight GA4 tracking scaffold.

## 1. Add a GA4 measurement ID

1. Create a GA4 property in Google Analytics.
2. Add a Web data stream for `https://nexus-pharma.sasa-eru.com/`.
3. Copy the measurement ID, such as `G-ABC123DE45`.
4. Paste it into `assets/analytics.js`.

```js
var GA_MEASUREMENT_ID = '';
```

Example:

```js
var GA_MEASUREMENT_ID = 'G-ABC123DE45';
```

When the ID is blank, no GA4 script is loaded and no external tracking request is sent.

## 2. Events included

- `page_view`
- CTA clicks to `#contact`
- Clicks to `members.html`
- Clicks to `anonymous-consult.html`
- Clicks to `sale-readiness-diagnosis.html`
- Clicks on `.btn`, `.btn-primary`, and `.nav-cta`
- `generate_lead` can be sent from future form completion logic through `window.nexusTrackEvent`

The event payload also includes:

- `page_location`
- `page_path`
- `page_title`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

## 3. Search Console

Register the site in Google Search Console:

- Property: `https://nexus-pharma.sasa-eru.com/`
- Sitemap: `https://nexus-pharma.sasa-eru.com/sitemap.xml`

If Google asks for an HTML tag verification, add the issued `google-site-verification` meta tag to the `<head>` of the public pages.

## 4. First metrics to watch

- Organic Search clicks
- Search queries
- Impressions
- Average position
- Views by page
- CTA clicks
- Form submissions
- Consultations by UTM source and campaign

## 5. Privacy note

The private owner insight pages (`owner-insight-*.html`) are intentionally excluded from this analytics script.
