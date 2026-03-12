---
title: "When to Use JavaScript Remoting"
domain: pages
topic: when-to-use-javascript-remoting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.791Z
estimatedTokens: 448
keywords: [JavaScript, Remoting, optimized, mobile, pages, third-party, libraries, dynamic, interactive, feel, responsive, traditional, Visualforce]
---

# When to Use JavaScript Remoting

> JavaScript remoting is
  optimized for use on mobile pages and on pages that use third-party JavaScript
  libraries. It enables dynamic, interactive pages that feel more responsive than
  traditional Visualforce
  pages.

# When to Use JavaScript Remoting

JavaScript remoting is optimized for use on mobile pages and on pages that use third-party JavaScript libraries. It enables dynamic, interactive pages that feel more responsive than traditional Visualforce pages.

JavaScript remoting is an alternative to standard Visualforce AJAX components and Visualforce Remote Objects. It provides a more idiomatic way of interacting with the Lightning platform from JavaScript. JavaScript remoting allows you to use familiar JavaScript practices and structures and makes leveraging other JavaScript frameworks and tool kits easier for front-end developers. Remoting creates a more responsive experience that’s ideal for mobile pages or any other page where your use case requires maximum efficiency and performance. Because it’s asynchronous, you can load only the initial page and the data that you need to display the page, and then lazily load additional data that might not be used on the page immediately. You can even use this method to pre-load data for pages or views that the user hasn’t accessed.

Although JavaScript remoting can provide an efficient, responsive, and optimized user experience, it’s not without limitations. It can take extra time to develop pages that use it, and you need to change how you develop and think about the flow of the page. Because you aren’t using forms and there’s no view state associated with the request, you have to manage the state of the page yourself, on the client side. On the other hand, there’s nothing that prevents you from combining JavaScript remoting with the standard Visualforce MVC design paradigm. As always, keep the problem that you’re trying to solve foremost when determining your design. JavaScript remoting is one of many tools available to you.
