---
title: "Developing Secure Code"
domain: lightning
topic: developing-secure-code
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.868Z
estimatedTokens: 427
keywords: [Developing, Secure, Code, Aura, components, client-side, security, architecture, helps, protect, custom, automatically, blocking, modifying, any]
---

# Developing Secure Code

> Aura components have a client-side security architecture that helps protect your
                custom components by automatically blocking or modifying any insecure behavior of
                APIs. This layer prevents components from accessing data that belongs to platform
                code or components from other namespaces without explicit permission.

# Developing Secure Code

Aura components have a client-side security architecture that helps protect your custom components by automatically blocking or modifying any insecure behavior of APIs. This layer prevents components from accessing data that belongs to platform code or components from other namespaces without explicit permission.

To learn how to build components that work with [Lightning Web Security (LWS)](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/lws-intro.html "HTML (New Window)") or the legacy architecture [Lightning Locker](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/locker-intro.html "HTML (New Window)"), see the *[Security for Lightning Components](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/get-started-intro.html "HTML (New Window)")* guide.

The framework also uses [JavaScript strict mode](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/js-strict-mode-intro.html "HTML (New Window)") to turn on native security features in the browser, and [Content Security Policy (CSP) rules](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/content-security-policy-intro.html "HTML (New Window)") to control the source of content that can be loaded on a page.

#### See Also

-   [*Security for Lightning Components*: Compare Lightning Web Security to Lightning Locker](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/get-started-compare-lws-locker.html "Security for Lightning Components: Compare Lightning Web Security to
    Lightning Locker - HTML (New Window)")
