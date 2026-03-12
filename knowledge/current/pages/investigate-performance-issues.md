---
title: "Investigate Performance Issues"
domain: pages
topic: investigate-performance-issues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.894Z
estimatedTokens: 697
keywords: [Investigate, Performance, Issues, Visualforce, designed, provide, developers, ability, match, functionality, behavior, standard, Salesforce, pages, users]
---

# Investigate Performance Issues

> Visualforce is designed to provide developers with the ability to match the
  functionality, behavior, and performance of standard Salesforce pages. If your users experience
  delays, unexpected behavior, or other issues specifically around Visualforce, first investigate
  the possible sources of the problem.

# Investigate Performance Issues

Visualforce is designed to provide developers with the ability to match the functionality, behavior, and performance of standard Salesforce pages. If your users experience delays, unexpected behavior, or other issues specifically around Visualforce, first investigate the possible sources of the problem.

Verify that your pages follow general best practices for web design, such as:

-   JavaScript and CSS minification.
-   Image optimization for the web.
-   Avoidance of iframes whenever possible.

## Investigate Visualforce Performance with Testing

To ensure that the problem isn’t limited to a single user’s computer, test your Visualforce page on multiple machines and with multiple browsers. Check the load time of other Salesforce pages and other websites. If Salesforce pages load slowly, check the status of the Salesforce servers at [https://status.salesforce.com](https://status.salesforce.com/ "HTML (New Window)"). If all web pages load slowly, check your network configuration.

To test for and help prevent performance regressions:

-   Use the Lightning Platform Developer Console to investigate the performance of your Visualforce markup and other Lightning Platform features on the page. With the Developer Console, you can see what’s consuming system resources and identify issues in your code. The Developer Console has a debug log that details the performance of requests as the server processes them. The details show every execution step for methods, queries, workflows, callouts, DML, validations, triggers, and pages by type and time.
-   Use tools such as Selenium to automate the testing of tedious or complex workflows that can produce inconsistent results. Automated tests can click links, enter and retrieve data, and record execution times to uncover bottlenecks and defects that manual testing can miss.
-   Test in as many browsers and with as many versions as possible.
-   Test with large data volumes. These tests can reveal scenarios with data skews where certain users have access to too many records. Avoid unbounded data, implement pagination, and display only relevant data.
-   Use HTML, CSS, and JavaScript profiling and debugging tools to provide insight into network latency, load times, and code efficiency.
-   Test on real mobile devices to uncover performance issues that aren’t apparent on developer machines. Mobile clients have different performance profiles because of slower processors, limited memory, and slower network connections.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

Use tools such as [WebPageTest](https://www.webpagetest.org/ "HTML (New Window)") for initial mobile browser testing, but use real devices for in-depth testing.
