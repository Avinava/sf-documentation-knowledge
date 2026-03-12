---
title: "Optimizing the Performance of Visualforce Pages in the Salesforce
   Mobile App"
domain: pages
topic: optimizing-the-performance-of-visualforce-pages-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:24.560Z
estimatedTokens: 590
keywords: [Optimizing, Performance, Visualforce, Pages, Salesforce, Mobile, App, designed, provide, developers, ability, match, functionality, behavior, standard]
---

# Optimizing the Performance of Visualforce Pages in the Salesforce
   Mobile App

> Visualforce was designed to provide developers with the ability to match the
  functionality, behavior, and performance of standard Salesforce pages. If your users experience
  delays, unexpected behavior, or other issues specifically around Visualforce, there are several
  actions you can take to not only improve their experience, but to also make for improved coding.
  In the Salesforce mobile app, following best practices for optimization is important. Mobile
  devices have more limited compute resources and users expect a fast, responsive
  application.

# Optimizing the Performance of Visualforce Pages in the Salesforce Mobile App

Visualforce was designed to provide developers with the ability to match the functionality, behavior, and performance of standard Salesforce pages. If your users experience delays, unexpected behavior, or other issues specifically around Visualforce, there are several actions you can take to not only improve their experience, but to also make for improved coding. In the Salesforce mobile app, following best practices for optimization is important. Mobile devices have more limited compute resources and users expect a fast, responsive application.

For more guidelines, see the [Visualforce Performance: Best Practices](https://resources.docs.salesforce.com/sfdc/pdf/salesforce_visualforce_best_practices.pdf) guide.

## Visualforce

-   Don’t use <apex:form\> or <apex:inputField\>, which increase the page’s view state size. A view state is the encrypted data that maintains a Visualforce page’s state. It’s sent back and forth with every page request, increasing the size of the request and response. Large view states slow the page’s response time.
-   Use <apex:repeat\> to send the data necessary to the browser as the page is rendered. This process improves page loading time.
-   Set <apex:page cache="true" expires="600"\> to enable caching for a Visualforce page.

## CSS and JavaScript

-   Create single-page applications (SPAs) instead of multi-page applications. Consider using JavaScript and third-party frameworks to build SPAs.
-   Minify CSS and JavaScript code using compressors.
-   Avoid CSS techniques that affect page performance, such as drop shadows or gradients.
-   Move <script> statements to the end of the Visualforce page. By loading scripts just before the closing </body> tag, the page can download other components first and render the page progressively.

## Images

-   Use fewer and smaller images.
-   Compress all images.
-   Use PNG or JPG images, not GIFs.
-   Use CSS sprites instead of images.

## General Best Practices

-   Use lazy loading. Lazy loading is a technique that loads a page’s key features first and the remaining data later or when the user requires the information.
-   Use infinite scroll. Infinite scroll is a technique where additional page content is loaded only when the user approaches the end of the content.
