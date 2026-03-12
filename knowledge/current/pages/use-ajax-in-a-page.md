---
title: "Use Ajax in a Page"
domain: pages
topic: use-ajax-in-a-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.911Z
estimatedTokens: 362
keywords: [Ajax, Visualforce, components, aware, add, behaviors, writing, any, JavaScript]
---

# Use Ajax in a Page

> Some Visualforce components are Ajax aware. With these components,
  you can add Ajax behaviors to a page without writing any
  JavaScript.

# Use Ajax in a Page

Some Visualforce components are Ajax aware. With these components, you can add Ajax behaviors to a page without writing any JavaScript.

-   **[Implement Partial Page Updates with Command Links and Buttons](atlas.en-us.pages.meta/pages/pages_quick_start_ajax_partial_page_updates.htm)**
    One of the most widely used Ajax behaviors is a partial page update, in which only a specific portion of a page updates following some user action, rather than a reload of the entire page. The simplest way to implement a partial page update is to use the reRender attribute on an <apex:commandLink\> or <apex:commandButton\> tag. When a user clicks the button or link, only the identified component and all of its child components refresh.
-   **[Provide Status for Asynchronous Operations](atlas.en-us.pages.meta/pages/pages_quick_start_ajax_async_status.htm)**
    Ajax behaviors, such as partial page updates, are asynchronous events that occur in the background while a user continues to work. With the <apex:actionStatus> component, you can display status messages that alert the user of any background activity currently in progress.
-   **[Apply Ajax Behavior to Events on Any Component](atlas.en-us.pages.meta/pages/pages_quick_start_ajax_partial_page_update_any_component.htm)**
    Implement a partial page update without using command links or buttons. For example, a user can hover over a component to trigger the update.

## Related Topics

- Implement Partial Page Updates with Command Links and Buttons (atlas.en-us.pages.meta/pages/pages_quick_start_ajax_partial_page_updates.htm)
- Provide Status for Asynchronous Operations (atlas.en-us.pages.meta/pages/pages_quick_start_ajax_async_status.htm)
- Apply Ajax Behavior to Events on Any Component (atlas.en-us.pages.meta/pages/pages_quick_start_ajax_partial_page_update_any_component.htm)
