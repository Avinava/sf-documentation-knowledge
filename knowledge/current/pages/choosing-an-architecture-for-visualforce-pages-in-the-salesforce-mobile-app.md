---
title: "Choosing an Architecture for Visualforce Pages in the Salesforce Mobile
      App"
domain: pages
topic: choosing-an-architecture-for-visualforce-pages-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.489Z
estimatedTokens: 873
keywords: [Choosing, Architecture, Visualforce, Pages, Salesforce, Mobile, App, There, several, ways, design, structure, different, trade-offs, respect]
---

# Choosing an Architecture for Visualforce Pages in the Salesforce Mobile
      App

> There are several ways to design and structure Visualforce pages, each with different
    trade-offs with respect to development time, developer skill required, and how thoroughly you
    want your custom functionality to match the Salesforce mobile app.

# Choosing an Architecture for Visualforce Pages in the Salesforce Mobile App

There are several ways to design and structure Visualforce pages, each with different trade-offs with respect to development time, developer skill required, and how thoroughly you want your custom functionality to match the Salesforce mobile app.

Use one of the following approaches for the structure of your pages:

-   [Standard Visualforce Pages](atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_standard.htm "Normal Visualforce pages render well on mobile browsers, and can be used as-is, with a modest reduction of the user experience compared to mobile-optimized Web pages. Pages display as they would on the full Salesforce site, and won’t visually match other Salesforce app features.")
-   [Mixed Visualforce and HTML](atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_mixed.htm "Combine Visualforce tags for form elements and output text with static HTML for page structure to create mobile-friendly pages that more closely match the visual design of the Salesforce mobile app. For mobile-only pages, you can quickly convert an existing Visualforce page, but this doesn’t work as well for pages that are used in both the Salesforce mobile app and the full Salesforce site.")
-   [JavaScript Remoting and Static HTML](atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_remoting.htm "Combine JavaScript remoting and static HTML to offer the best user experience, with the best performance and user interface match to the Salesforce mobile app. This architecture avoids most Visualforce tags in favor of rendering page elements in JavaScript. This option requires the most developer expertise, and can take a little longer to set up than standard Visualforce or mixed Visualforce and HTML. Use the Salesforce Mobile Packs for a fast start and to work with the very latest in mobile Web application technology.")

-   **[Standard Visualforce Pages](atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_standard.htm)**
    Normal Visualforce pages render well on mobile browsers, and can be used as-is, with a modest reduction of the user experience compared to mobile-optimized Web pages. Pages display as they would on the full Salesforce site, and won’t visually match other Salesforce app features.
-   **[Mixed Visualforce and HTML](atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_mixed.htm)**
    Combine Visualforce tags for form elements and output text with static HTML for page structure to create mobile-friendly pages that more closely match the visual design of the Salesforce mobile app. For mobile-only pages, you can quickly convert an existing Visualforce page, but this doesn’t work as well for pages that are used in both the Salesforce mobile app and the full Salesforce site.
-   **[JavaScript Remoting and Static HTML](atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_remoting.htm)**
    Combine JavaScript remoting and static HTML to offer the best user experience, with the best performance and user interface match to the Salesforce mobile app. This architecture avoids most Visualforce tags in favor of rendering page elements in JavaScript. This option requires the most developer expertise, and can take a little longer to set up than standard Visualforce or mixed Visualforce and HTML. Use the Salesforce Mobile Packs for a fast start and to work with the very latest in mobile Web application technology.

## Related Topics

- Standard Visualforce Pages (atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_standard.htm)
- Mixed Visualforce and HTML (atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_mixed.htm)
- JavaScript Remoting and Static HTML (atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches_remoting.htm)
