---
title: "Testing Visualforce Pages in the Salesforce Mobile App"
domain: pages
topic: testing-visualforce-pages-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.834Z
estimatedTokens: 369
keywords: [Testing, Visualforce, Pages, Salesforce, Mobile, App, you’re, creating, Lightning, Experience, Classic, review, environments, working, test]
---

# Testing Visualforce Pages in the Salesforce Mobile App

> If you’re creating pages that will be used in Lightning Experience, Salesforce Classic,
  and the Salesforce mobile app, review your pages in all environments while you’re working on them.
  To test thoroughly, use multiple browsers, or even multiple devices, to view your pages. You’ll
  want to have access to at least one additional test user as well.

# Testing Visualforce Pages in the Salesforce Mobile App

If you’re creating pages that will be used in Lightning Experience, Salesforce Classic, and the Salesforce mobile app, review your pages in all environments while you’re working on them. To test thoroughly, use multiple browsers, or even multiple devices, to view your pages. You’ll want to have access to at least one additional test user as well.

Here’s an example of how you might set up your development environment.

## Main Development Environment

This environment is where you work in Setup to make changes to your organization, like adding custom objects and fields, and maybe where you write actual code, if you use the Developer Console. Review your page’s design and behavior in Salesforce Classic in this environment.

-   **Browser:** Chrome
-   **User:** Your developer user
-   **User interface setting:** Salesforce Classic

## Lightning Experience Review Environment

This environment is where you check your page’s design and behavior in Lightning Experience.

-   **Browser:** Safari or Firefox
-   **User:** Your test user
-   **User interface setting:** Lightning Experience

## Salesforce App Review Environment

This environment is for checking your page’s design and behavior in the Salesforce mobile app.

-   **Device:** iOS or Android phone or tablet
-   **Browser:** Salesforce app
-   **User:** Your test user
-   **User interface setting:** Lightning Experience or Salesforce Classic
