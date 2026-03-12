---
title: "Salesforce Platform Development Process"
domain: pages
topic: salesforce-platform-development-process
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.828Z
estimatedTokens: 504
keywords: [Salesforce, Platform, Development, Process, processes, developing, Lightning, Experience, mobile, app, you’re, Classic, few, differences, much]
---

# Salesforce Platform Development Process

> The processes used for developing in Lightning Experience and the Salesforce mobile app
  are the same. If you’re used to developing for Salesforce Classic, the development process for
  Lightning Experience and the Salesforce mobile app has a few differences, but much of it will be
  familiar to you.

# Salesforce Platform Development Process

The processes used for developing in Lightning Experience and the Salesforce mobile app are the same. If you’re used to developing for Salesforce Classic, the development process for Lightning Experience and the Salesforce mobile app has a few differences, but much of it will be familiar to you.

When creating Visualforce pages for the Salesforce mobile app, it’s important that you set up your tools and testing environments correctly. In this section, we will go over the best practices for the Salesforce mobile platform development process.

-   **[Setting Up Your Development System](atlas.en-us.pages.meta/pages/pages_mobile_platform_dev_process_system.htm)**
    Salesforce provides several different tools and ways to write, edit, and view your code.
-   **[The Development Process and the Importance of Testing](atlas.en-us.pages.meta/pages/pages_mobile_platform_dev_process_importance_testing.htm)**
    It’s important to test your Visualforce pages before deploying them in production. Test your pages across different environments, devices, and users.
-   **[Testing Visualforce Pages in the Salesforce Mobile App](atlas.en-us.pages.meta/pages/pages_mobile_platform_dev_process_testing_salesforce1.htm)**
    If you’re creating pages that will be used in Lightning Experience, Salesforce Classic, and the Salesforce mobile app, review your pages in all environments while you’re working on them. To test thoroughly, use multiple browsers, or even multiple devices, to view your pages. You’ll want to have access to at least one additional test user as well.
-   **[Understanding the Salesforce Mobile App Container](atlas.en-us.pages.meta/pages/pages_mobile_salesforce1_container.htm)**
    In Salesforce Classic, Visualforce “owns” the page, the request, and the environment. Visualforce is the application container. But in the Salesforce mobile app and Lightning Experience, Visualforce runs inside an iframe that’s inside the larger /lightning container.

## Related Topics

- Setting Up Your Development System (atlas.en-us.pages.meta/pages/pages_mobile_platform_dev_process_system.htm)
- The Development Process and the Importance of Testing (atlas.en-us.pages.meta/pages/pages_mobile_platform_dev_process_importance_testing.htm)
- Testing Visualforce Pages in the Salesforce Mobile App (atlas.en-us.pages.meta/pages/pages_mobile_platform_dev_process_testing_salesforce1.htm)
- Understanding the Salesforce Mobile App Container (atlas.en-us.pages.meta/pages/pages_mobile_salesforce1_container.htm)
