---
title: "Making API Calls from Components"
domain: lightning
topic: making-api-calls-from-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.044Z
estimatedTokens: 527
keywords: [Making, API, Calls, Components, can’t, third-party, APIs, client-side, code, Add, remote, site, Trusted, URL, Content]
---

# Making API Calls from Components

> By default, you can’t make calls to third-party APIs from client-side code. Add a remote
  site as a Trusted URL with Content Security Policy (CSP) directives to allow client-side component
  code to load assets from and make API requests to that site’s domain.

# Making API Calls from Components

By default, you can’t make calls to third-party APIs from client-side code. Add a remote site as a Trusted URL with Content Security Policy (CSP) directives to allow client-side component code to load assets from and make API requests to that site’s domain.

The Lightning Component framework uses Content Security Policy ([CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP "HTML (New Window)")) to impose restrictions on content. The main objective is to help prevent cross-site scripting ([XSS](https://www.owasp.org/index.php/Cross-site_Scripting_\(XSS\) "HTML (New Window)")) and other code injection attacks. Lightning apps are served from a different domain than Salesforce APIs, and the default CSP policy doesn’t allow API calls from JavaScript code. You change the policy, and the content of the CSP header, by adding Trusted URLs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Otherwise, you can’t load JavaScript resources from a third party, even if it’s a trusted URL. To use a JavaScript library from a third-party site, add that third-party site to a static resource, and then add the static resource to your component. After the library is loaded from the static resource, you can use it as normal.

Sometimes, you have to make API calls from server-side controllers rather than client-side code. In particular, you can’t make calls to Salesforce APIs from client-side Aura component code. For information about making API calls from server-side controllers, see [Making API Calls from Apex](atlas.en-us.lightning.meta/lightning/apex_api_calls.htm#apex_api_calls "Make API calls from an Apex controller. You can’t make Salesforce API calls from JavaScript code.").

#### See Also

-   [*Security for Lightning Components:* Content Security Policy Overview](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/content-security-policy-intro.html "Security for Lightning Components: Content Security Policy
    Overview - HTML (New Window)")

## Related Topics

- Making API Calls from Apex (atlas.en-us.lightning.meta/lightning/apex_api_calls.htm)
