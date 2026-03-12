---
title: "Optimize
    JavaScript"
domain: pages
topic: optimize-javascript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.897Z
estimatedTokens: 582
keywords: [Optimize, JavaScript, ensure, efficient, delivery, client, Visualforce, pages, Optimized, improves, caching, reduces, load, times]
---

# Optimize
    JavaScript

> To ensure
    efficient delivery to the client,
    optimize
    the JavaScript in Visualforce
    pages
    Optimized JavaScript also improves caching and
    reduces
    load times.

# Optimize JavaScript

To ensure efficient delivery to the client, optimize the JavaScript in Visualforce pages Optimized JavaScript also improves caching and reduces load times.

To improve the JavaScript in a Visualforce page:

-   Externalize JavaScript files. This process increases the number of initial HTTP requests, but it also reduces the size of individual pages and takes advantage of browser caching.
-   Build custom versions of JavaScript libraries with only the functions that you need. This process significantly reduces the size of a JavaScript file. Many open-source JavaScript libraries, such as jQuery, provide this option.
-   Reduce HTTP requests by combining all JavaScript files into a single file. Remove duplicate functions that can result in more than one HTTP request.
-   Remove comments and whitespace. Compress the resulting file for faster downloads.
-   Use static resources to serve JavaScript files. JavaScript served this way benefits from the caching and the content distribution network (CDN) built into Salesforce.
-   Put scripts at the bottom of the page. If the scripts load directly before the closing </body\> tag, the page can download other components first and render the page progressively.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    Only move JavaScript to the bottom of the page if you’re certain that it doesn’t have any adverse effects. For example, don’t move JavaScript code snippets that require document.write or event handlers from the <head\> element.

-   Instead of using the <apex:includeScript> tag, consider using a standard HTML <script\> tag directly before your closing </apex:page> tag. The <apex:includeScript> tag places JavaScript right before the closing </head\> element, which causes the browser to attempt to load the JavaScript before rendering any other content on the page.

#### See Also

-   [Using Static Resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.")

## Related Topics

- Using Static Resources (atlas.en-us.pages.meta/pages/pages_resources.htm)
