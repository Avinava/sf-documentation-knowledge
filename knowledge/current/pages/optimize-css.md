---
title: "Optimize CSS"
domain: pages
topic: optimize-css
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.872Z
estimatedTokens: 370
keywords: [Optimize, CSS, ensure, efficient, delivery, client, Visualforce, Optimized, improves, caching, reduces, load, times]
---

# Optimize CSS

> To ensure
    efficient delivery to the client,
    optimize
    the CSS in a Visualforce
    page.
    Optimized CSS also improves caching and reduces
    load
    times.

# Optimize CSS

To ensure efficient delivery to the client, optimize the CSS in a Visualforce page. Optimized CSS also improves caching and reduces load times.

To improve the CSS in a Visualforce page:

-   Externalize style sheets. Remove inline CSS code from the Visualforce page and put it in a separate CSS file. This practice increases the number of initial HTTP requests, but reduces the size of individual pages. After the browser caches the style sheets, the overall request size decreases.
-   Combine all CSS files into a single file, which reduces the number of HTTP requests.
-   Remove comments and extra whitespace. Compress the resulting file for faster downloads.
-   Use static resources to serve CSS files. Style sheets served this way benefit from the caching and the content distribution network (CDN) built into Salesforce.
-   For pages that don't use Salesforce CSS files, set the <apex:page> tag’s showHeaders and standardStylesheets attributes to false. This practice excludes the standard Salesforce CSS files from the generated page header.

#### See Also

-   [Using Static Resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.")

## Related Topics

- Using Static Resources (atlas.en-us.pages.meta/pages/pages_resources.htm)
