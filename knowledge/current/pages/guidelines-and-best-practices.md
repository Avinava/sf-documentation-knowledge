---
title: "Guidelines and Best Practices"
domain: pages
topic: guidelines-and-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:24.486Z
estimatedTokens: 1932
keywords: [Guidelines, Best, Practices, Visualforce, pages, aren’t, automatically, mobile, friendly, Salesforce, app, standard, sidebar, disabled, favor]
---

# Guidelines and Best Practices

> Visualforce pages aren’t automatically mobile friendly in the Salesforce mobile app. The
  standard Salesforce header and sidebar are disabled in favor of the mobile controls, and a
  JavaScript API is available to make it possible for Visualforce pages to connect with mobile
  navigation management. In other respects the pages remain as they are and, although usable within
  the app, desktop focused Visualforce pages will feel desktop focused.

# Guidelines and Best Practices

Visualforce pages aren’t automatically mobile friendly in the Salesforce mobile app. The standard Salesforce header and sidebar are disabled in favor of the mobile controls, and a JavaScript API is available to make it possible for Visualforce pages to connect with mobile navigation management. In other respects the pages remain as they are and, although usable within the app, desktop focused Visualforce pages will *feel* desktop focused.

Fortunately, making your apps look great in the Salesforce mobile app is straightforward. You can either revise your code so that your pages work in both the full Salesforce site and the mobile app, or you can create mobile-specific pages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Visualforce pages and custom iframes aren’t supported in Lightning Experience on iPad Safari.

In this chapter, you’ll learn best practices for how to:

-   Share Visualforce pages between mobile and desktop.
-   Exclude Visualforce from mobile or desktop.
-   Choose the best architecture for your Visualforce pages.
-   Choose an effective page layout for your pages.
-   Manage user input and navigation.
-   Use Visualforce pages as custom actions.
-   Tune your pages for the best performance.

-   **[Sharing Visualforce Pages Between Mobile and Desktop](atlas.en-us.pages.meta/pages/vf_dev_best_practices_dual_use_pages.htm)**
    Revise Visualforce pages that appear in both the Salesforce mobile app and in the full Salesforce site to support both environments. This includes Visualforce pages used as custom actions and Visualforce pages added to standard page layouts.
-   **[Excluding Visualforce Pages from Mobile or Desktop](atlas.en-us.pages.meta/pages/vf_dev_best_practices_exclusive_pages.htm)**
    To add Visualforce pages to either the Salesforce mobile app or the full Salesforce site, use tab and navigation settings.
-   **[Creating Visualforce Pages That Work in Mobile and Desktop](atlas.en-us.pages.meta/pages/vf_dev_best_practices_pages_multipurpose.htm)**
    Create Visualforce pages that work well in both the Salesforce mobile app and the full Salesforce site by writing code that adapts to the context it’s running in.
-   **[Choosing an Architecture for Visualforce Pages in the Salesforce Mobile App](atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches.htm)**
    There are several ways to design and structure Visualforce pages, each with different trade-offs with respect to development time, developer skill required, and how thoroughly you want your custom functionality to match the Salesforce mobile app.
-   **[Optimizing the Performance of Visualforce Pages in the Salesforce Mobile App](atlas.en-us.pages.meta/pages/vf_dev_best_practices_optimizing_performance.htm)**
    Visualforce was designed to provide developers with the ability to match the functionality, behavior, and performance of standard Salesforce pages. If your users experience delays, unexpected behavior, or other issues specifically around Visualforce, there are several actions you can take to not only improve their experience, but to also make for improved coding. In the Salesforce mobile app, following best practices for optimization is important. Mobile devices have more limited compute resources and users expect a fast, responsive application.
-   **[Visualforce Components and Features to Avoid in the Salesforce Mobile App](atlas.en-us.pages.meta/pages/vf_dev_best_practices_components_to_avoid.htm)**
    Most core Visualforce components (those components in the apex namespace) function normally within the Salesforce mobile app. Unfortunately, that doesn’t mean they’re optimized for mobile, or that every feature works with the app. You can improve the mobile user experience of your Visualforce pages by following some straightforward rules.
-   **[Known Visualforce Mobile Issues](atlas.en-us.pages.meta/pages/vf_dev_best_practices_known_issues_intro.htm)**
    Salesforce publishes known issues to enhance trust and support customer success.
-   **[Considerations and Limitations for Using Visualforce in the Salesforce Mobile App](atlas.en-us.pages.meta/pages/vf_dev_best_practices_considerations.htm)**
    Visualforce allows developers to build sophisticated, custom user interfaces that can be hosted natively on the Lightning Platform. Visualforce is Salesforce’s tried and true model, giving developers access to data and robust tools and functionality. There are many benefits to using Visualforce in the Salesforce mobile app, but also some limitations.
-   **[Prepare a Support Request for Problems with Visualforce Pages in the Salesforce App](atlas.en-us.pages.meta/pages/vf_dev_best_practices_support_request.htm)**
    Salesforce provides resources to help developers find answers to their questions and resolve their problems. We suggest you first take a look at the Developer Discussion Forum, Salesforce Stack Exchange, and the Known Issues page to see if you can immediately find the solution to your problem. If your question is still unanswered, you can submit a case to Salesforce’s support team, which will route your question to the best person to answer it.
-   **[Choosing an Effective Page Layout](atlas.en-us.pages.meta/pages/vf_dev_best_practices_page_layout.htm)**
    Design Visualforce pages that look good and work well within the Salesforce mobile app by using a page layout appropriate for the context that the page is used in. Pages added as main navigation tabs or as custom actions in the action bar can use nearly the full screen of the device, and can scroll vertically, while Visusalforce added to an object’s page layout has to fit within a specific, limited space.
-   **[User Input and Interaction](atlas.en-us.pages.meta/pages/vf_dev_best_practices_user_input.htm)**
    Use <apex:input\>, the type attribute, and pass-through HTML attributes to create mobile-friendly forms and user interfaces that are efficient and take advantage of native mobile browser features.
-   **[Managing Navigation](atlas.en-us.pages.meta/pages/vf_dev_best_practices_navigation.htm)**
    The Salesforce mobile app manages navigation using events. The navigation event framework is made available as a JavaScript object that provides a number of utility functions that make creating programmatic navigation that “just works” a breeze. The advantage is a navigation experience that’s more natural for a mobile context. It also makes creating post-completion navigation, such as redirecting to an order page after the order is successfully submitted, easier for Salesforce developers.
-   **[Introduction to the Salesforce Lightning Design System](atlas.en-us.pages.meta/pages/vf_dev_best_practices_slds_intro.htm)**
    The Salesforce Lightning Design System (SLDS) helps you build applications with the look and feel of Lightning Experience without writing a single line of CSS. SLDS is a CSS framework that gives you access to the icons, color palettes, and font that our developers use to create Lightning Experience.
-   **[Using Visualforce Pages as Custom Actions](atlas.en-us.pages.meta/pages/vf_dev_best_practices_pages_custom_actions.htm)**
    If your Visualforce page is used as a custom action, design it so that it either acts upon a single record provided by a standard controller, or finds and acts upon a record, or records your custom controller code retrieves.
-   **[Performance Tuning for Visualforce Pages](atlas.en-us.pages.meta/pages/vf_dev_best_practices_performance.htm)**
    Performance is an important aspect of mobile Visualforce pages. Visualforce has a caching mechanism to help you tune the performance of your pages.

## Related Topics

- Sharing Visualforce Pages Between Mobile and Desktop (atlas.en-us.pages.meta/pages/vf_dev_best_practices_dual_use_pages.htm)
- Excluding Visualforce Pages from Mobile or Desktop (atlas.en-us.pages.meta/pages/vf_dev_best_practices_exclusive_pages.htm)
- Creating Visualforce Pages That Work in Mobile and Desktop (atlas.en-us.pages.meta/pages/vf_dev_best_practices_pages_multipurpose.htm)
- Choosing an Architecture for Visualforce Pages in the Salesforce Mobile App (atlas.en-us.pages.meta/pages/vf_dev_best_practices_approaches.htm)
- Optimizing the Performance of Visualforce Pages in the Salesforce Mobile App (atlas.en-us.pages.meta/pages/vf_dev_best_practices_optimizing_performance.htm)
- Visualforce Components and Features to Avoid in the Salesforce Mobile App (atlas.en-us.pages.meta/pages/vf_dev_best_practices_components_to_avoid.htm)
- Known Visualforce Mobile Issues (atlas.en-us.pages.meta/pages/vf_dev_best_practices_known_issues_intro.htm)
- Considerations and Limitations for Using Visualforce in the Salesforce Mobile App (atlas.en-us.pages.meta/pages/vf_dev_best_practices_considerations.htm)
- Prepare a Support Request for Problems with Visualforce Pages in the Salesforce App (atlas.en-us.pages.meta/pages/vf_dev_best_practices_support_request.htm)
- Choosing an Effective Page Layout (atlas.en-us.pages.meta/pages/vf_dev_best_practices_page_layout.htm)
