---
title: "Lazy Load Page Components"
domain: pages
topic: lazy-load-page-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.899Z
estimatedTokens: 500
keywords: [Lazy, Load, Components, reduce, delay, expensive, calculations, loading, loads, essential, delays, features, until, user, performs]
---

# Lazy Load Page Components

> To reduce or delay expensive calculations, use lazy loading. With lazy loading, a page
    loads its essential components first and delays the other features until the user performs an
    action that requires the information. This technique gives users faster access to essential
    features and makes a large page appear more responsive, even though the entire page takes the
    same total time to load.

# Lazy Load Page Components

To reduce or delay expensive calculations, use lazy loading. With lazy loading, a page loads its essential components first and delays the other features until the user performs an action that requires the information. This technique gives users faster access to essential features and makes a large page appear more responsive, even though the entire page takes the same total time to load.

To lazy load parts of a Visualforce page, use the following techniques:

-   Use the rerender attribute on Visualforce components to update the component without updating the entire page.
-   Use JavaScript remoting to call functions in your controller and to retrieve ancillary or static data.
-   Create a custom component to show and hide data according to user actions.

When you lazy load a page, consider the number of users and the amount of data you expect the page to use. Watch out for limits such as the concurrent API call limit. For example, if a navigation tree only loads elements as needed, the number of queries can end up out of proportion to the data.

#### See Also

-   [Implement Partial Page Updates with Command Links and Buttons](atlas.en-us.pages.meta/pages/pages_quick_start_ajax_partial_page_updates.htm "One of the most widely used Ajax behaviors is a partial page update, in which only a specific portion of a page updates following some user action, rather than a reload of the entire page. The simplest way to implement a partial page update is to use the reRender attribute on an <apex:commandLink> or <apex:commandButton> tag. When a user clicks the button or link, only the identified component and all of its child components refresh.")

-   [JavaScript Remoting for Apex Controllers](atlas.en-us.pages.meta/pages/pages_js_remoting.htm "Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.")

## Related Topics

- Implement Partial Page Updates with Command Links and Buttons (atlas.en-us.pages.meta/pages/pages_quick_start_ajax_partial_page_updates.htm)
- JavaScript Remoting for Apex Controllers (atlas.en-us.pages.meta/pages/pages_js_remoting.htm)
