---
title: "Lightning Web Security in LWR Sites"
domain: exp-cloud-lwr
topic: lightning-web-security-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.791Z
estimatedTokens: 524
keywords: [Lightning, Web, Security, LWR, Sites, Instead, Locker, Experience, Cloud, LWS, new, architecture, components, supports, cross-namespace]
---

# Lightning Web Security in LWR Sites

> Instead of Lightning Locker, LWR sites in Experience Cloud use Lightning Web Security
  (LWS), the new security architecture for Lightning web components. LWS supports cross-namespace
  communication for Lightning web components, in addition to the usual security features that
  Lightning Locker provides. Cross-namespace communication lets you import components from other
  namespaces and use them via composition or extension.

# Lightning Web Security in LWR Sites

Instead of Lightning Locker, LWR sites in Experience Cloud use Lightning Web Security (LWS), the new security architecture for Lightning web components. LWS supports cross-namespace communication for Lightning web components, in addition to the usual security features that Lightning Locker provides. Cross-namespace communication lets you import components from other namespaces and use them via composition or extension.

Lightning Web Security makes it easier to take advantage of third-party libraries, such as analytics and charting that work within your Lightning web components.

Also, interactions with global objects are no longer restricted. Because each namespace is given its own sandbox, we can expose document, window, and element globals directly without secure object wrappers. In turn, more standard DOM APIs can work successfully, and exposed APIs within your namespace behave the same as any web context without secure wrappers.

See [Lightning Web Security](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_intro "HTML (New Window)") in the Lightning Web Components Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

LWR sites use their own instance of LWS. The **Use Lightning Web Security for Lightning web components (GA) and Aura components (Beta)** setting in Session Settings in Setup, described in [Enable Lightning Web Security in an Org](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_enable "HTML (New Window)"), has no effect on LWR sites. Instead, the site-level setting in Experience Builder controls whether the site uses LWS, regardless of the org-level setting.

#### See Also

-   [LWR Template Limitations](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_limitations.htm "LWR templates in Experience Cloud don’t include the same features as Aura templates. Check out the current differences and limitations before you begin creating your site.")

## Related Topics

- LWR Template Limitations (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_limitations.htm)
