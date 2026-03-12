---
title: "Order of Execution in a Visualforce Page"
domain: pages
topic: order-of-execution-in-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.307Z
estimatedTokens: 455
keywords: [Order, Execution, Visualforce, user, views, instances, controller, extensions, components, associated, created, server, elements, executed, affect]
---

# Order of Execution in a Visualforce Page

> When a user views a Visualforce page, instances of the controller, extensions, and components
   associated with the page are created by the server. The order in which these elements are
   executed can affect how the page is displayed to the user.

# Order of Execution in a Visualforce Page

When a user views a Visualforce page, instances of the controller, extensions, and components associated with the page are created by the server. The order in which these elements are executed can affect how the page is displayed to the user.

To fully understand the order of execution of elements on a Visualforce page, you must first understand the page's lifecycle–that is, how the page is created and destroyed during the course of a user session. The lifecycle of a page is determined not just by the content of the page, but also by how the page was requested. There are two types of Visualforce page requests:

-   A get request is an initial request for a page either made when a user enters an URL or when a link or button is clicked that takes the user to a new page.
-   A postback request is made when user interaction requires a page update, such as when a user clicks on a **Save** button and triggers a save action.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The maximum response size from a Visualforce page request must be below 15 MB.

-   **[Order of Execution for Visualforce Page Get Requests](atlas.en-us.pages.meta/pages/pages_controller_get_request.htm)**

-   **[Order of Execution for Visualforce Page Postback Requests](atlas.en-us.pages.meta/pages/pages_controller_postback_request.htm)**
    Learn how a Visualforce page interacts with a controller extension or a custom controller class during a postback request.
-   **[Order of Execution Example](atlas.en-us.pages.meta/pages/pages_controller_lifecycle_example.htm)**
    Follow the lifecycle of a Visualforce page. Learn how the order of execution differs when the user retrieves the page with a get request instead of a postback request.

## Related Topics

- Order of Execution for Visualforce Page Get Requests (atlas.en-us.pages.meta/pages/pages_controller_get_request.htm)
- Order of Execution for Visualforce Page Postback Requests (atlas.en-us.pages.meta/pages/pages_controller_postback_request.htm)
- Order of Execution Example (atlas.en-us.pages.meta/pages/pages_controller_lifecycle_example.htm)
