---
title: "Differences in Behavior in LWR Sites"
domain: exp-cloud-lwr
topic: differences-in-behavior-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.783Z
estimatedTokens: 552
keywords: [Differences, Behavior, LWR, Sites, templates, Experience, Cloud, things, work, little, differently, Aura]
---

# Differences in Behavior in LWR Sites

> With LWR templates in Experience Cloud, some things work a little differently than with
  our Aura templates.

# Differences in Behavior in LWR Sites

With LWR templates in Experience Cloud, some things work a little differently than with our Aura templates.

-   **[New Publishing Model for LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_publish.htm)**
    LWR sites in Experience Cloud take advantage of a new publishing paradigm, where components are frozen when the site is published and served statically at runtime.
-   **[Custom URL Paths in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_url.htm)**
    Unlike Aura sites, LWR sites in Experience Cloud support custom URL paths, meaning no more /s cluttering up your site’s URL—for example, https://mycustomdomain.com/mypage.
-   **[Lightning Web Security in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_locker.htm)**
    Instead of Lightning Locker, LWR sites in Experience Cloud use Lightning Web Security (LWS), the new security architecture for Lightning web components. LWS supports cross-namespace communication for Lightning web components, in addition to the usual security features that Lightning Locker provides. Cross-namespace communication lets you import components from other namespaces and use them via composition or extension.
-   **[Caching Policy in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_caching.htm)**
    LWR sites in Experience Cloud make heavy use of caching to improve performance and scalability on the live site. Except for the initial document request and data API calls, all requests required to load a page are HTTP cacheable.
-   **[Head Markup in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_markup.htm)**
    With LWR sites in Experience Cloud, you have complete control over the head markup included on the page. Now, when you open the Head Markup window, you can access this default markup.
-   **[Accessibility in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_accessibility.htm)**
    LWR sites in Experience Cloud include several important accessibility features and best practices, such as screen reader support and F6 navigation.

## Related Topics

- New Publishing Model for LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_publish.htm)
- Custom URL Paths in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_url.htm)
- Lightning Web Security in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_locker.htm)
- Caching Policy in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_caching.htm)
- Head Markup in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_markup.htm)
- Accessibility in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_accessibility.htm)
