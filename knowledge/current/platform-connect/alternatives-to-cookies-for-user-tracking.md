---
title: "Alternatives to Cookies for User Tracking"
domain: platform-connect
topic: alternatives-to-cookies-for-user-tracking
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.250Z
estimatedTokens: 1370
keywords: [Alternatives, Cookies, User, Tracking, creating, websites, applications, HTML, <iframe>, element, lets, display, third-party, content, current]
---

# Alternatives to Cookies for User Tracking

> When creating websites and applications, the HTML <iframe> element lets you display third-party content within the current
        page window. As modern browsers have increased privacy for end users, the iframe structure
        is becoming more scrutinized and restricted. Third-party applications exposed as Canvas apps
        are surfaced in the Salesforce user interface via an iframe. To avoid problems loading your
        Canvas apps in Salesforce, design applications that don’t rely on cookies, session storage,
        or local storage to track users.

# Alternatives to Cookies for User Tracking

When creating websites and applications, the HTML <iframe\> element lets you display third-party content within the current page window. As modern browsers have increased privacy for end users, the iframe structure is becoming more scrutinized and restricted. Third-party applications exposed as Canvas apps are surfaced in the Salesforce user interface via an iframe. To avoid problems loading your Canvas apps in Salesforce, design applications that don’t rely on cookies, session storage, or local storage to track users.

Cookies and other storage have traditionally been reliable ways to add application state on top of the state-less HTTP protocol. However, cookies and storage also allow applications to track users in ways that users don’t suspect. Modern browsers are working to enhance privacy and security on the web. Applications written years ago may not behave the same way in modern browsers or when used in iframe containers by applications, such as Salesforce. In the past, content hosted in an iframe would access its own storage, as if it was hosted in a first-party context. Browsers now treat content hosted in an iframe as third-party applications.

Third-party applications exposed as Canvas apps work outside of Salesforce, but when exposed in Salesforce via an iframe, the content may not load properly because the content is served from a different domain. Browsers place tracking and user-privacy restrictions on these applications when they’re used in Salesforce. For example:

-   Cookies are not sent in page requests and XHRs.
-   Session storage and local storage access are denied.
-   JavaScript APIs, such as alert() and confirm(), are blocked.

To avoid problems late in development, test Canvas apps in a Salesforce container early. To design applications that don’t rely on cookies, session storage, or local storage to track users, build your Canvas apps as single-page applications (SPAs).

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=platform_connect)

#### Warning

One side effect of not using cookies or storage is that you may not be logged into your application in multiple tabs. If SPAs don’t work for your development scenarios, ask your users to temporarily allow tracking for the browser where your Canvas app is used. Modifying settings in your web browser typically affects all websites, not just Salesforce. In Chrome and Firefox, you may add specific domains to always allow cookies, and can instruct your users to do the same. See [this list of Salesforce’s standard domains](https://help.salesforce.com/articleView?id=setup_domains.htm&type=5&language=en_US), and add any third-party applications domains.

## Use the Signed Request for Authentication

SPAs work with Canvas and iframes. These applications don’t use page-level navigation after their first page load. Instead, they dynamically rewrite the page as the user interacts, which means that the same JavaScript execution context is kept for the lifetime of the app. To authorize users within your application, use the CanvasRequest object. After the first request, store the authorization token for your app in JavaScript instead of in cookies or local storage. Authorize HTTPS requests using authorization headers through the fetch() or XMLHttpRequest standard web APIs.

See [Signed Request Authentication](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm) for details on the CanvasRequest object.

Single-page applications can also request temporary access to cookies and other tracking data using the Storage Access API. This API relies on explicit user interaction to allow access to cookies. Access is granted until the application navigates, which is why a single-page application is preferred over multi-page applications.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

The storage access API is not available in all browsers, and behaves differently in each browser. See [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API) for details.

## Stay Up-to-Date with Browser Changes

Different browsers behave differently and are actively changing their behaviors as privacy on the web evolves. Refer to each browser’s guidelines for the most up-to-date information.

-   [Apple Safari](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)
-   [Microsoft Edge](https://docs.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention)
-   [Mozilla Firefox](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)
-   [Google Chrome](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html)

#### See Also

-   [*Salesforce Developers Blog*: Prepare for the Google Chrome Privacy Sandbox Initiative](https://developer.salesforce.com/blogs/2024/05/prepare-for-the-google-chrome-privacy-sandbox-initiative "Salesforce Developers Blog: Prepare for the Google Chrome
    Privacy Sandbox Initiative - HTML (New Window)")

-   [*Knowledge Article*: Understand How Google's Privacy Sandbox Initiative Impacts Salesforce](https://help.salesforce.com/s/articleView?id=000578150&type=1&language=en_US "Knowledge Article: Understand How Google's Privacy Sandbox
    Initiative Impacts Salesforce - HTML (New Window)")
