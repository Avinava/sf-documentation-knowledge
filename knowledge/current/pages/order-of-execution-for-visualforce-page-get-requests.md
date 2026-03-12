---
title: "Order of Execution for Visualforce Page Get Requests"
domain: pages
topic: order-of-execution-for-visualforce-page-get-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.304Z
estimatedTokens: 800
keywords: [Order, Execution, Visualforce, Requests, initial, either, made, user, enters, URL, link, button, clicked, new, diagram]
---

# Order of Execution for Visualforce Page Get Requests

> A get request is an initial request for a page either
     made when a user enters an URL or when a link or button is clicked that takes the user to a new
     page. The following diagram shows how a Visualforce page interacts with a controller extension or a custom controller
class during a get req

# Order of Execution for Visualforce Page Get Requests

A get request is an initial request for a page either made when a user enters an URL or when a link or button is clicked that takes the user to a new page. The following diagram shows how a Visualforce page interacts with a controller extension or a custom controller class during a get request:

![A diagram of how a Visualforce page interacts with a controller extention or a custom controller class during a get request](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fget_request.png&folder=pages)

In the diagram above the user initially requests a page, either by entering a URL or clicking a link or button. This initial page request is called the get request.

1.  The constructor methods on the associated custom controller or controller extension classes are called, instantiating the controller objects.
2.  If the page contains any custom components, they are created and the constructor methods on any associated custom controllers or controller extensions are executed. If attributes are set on the custom component using expressions, the expressions are evaluated after the constructors are evaluated.
3.  The page then executes any assignTo attributes on any custom components on the page. After the assignTo methods are executed, expressions are evaluated, the action attribute on the <apex:page\> component is evaluated, and all other method calls, such as getting or setting a property value, are made.
4.  If the page contains an <apex:form\> component, all of the information necessary to maintain the state of the database between page requests is saved as an encrypted view state. The view state is updated whenever the page is updated.
5.  The resulting HTML is sent to the browser. If there are any client-side technologies on the page, such as JavaScript, the browser executes them.

As the user interacts with the page, the page contacts the controller objects as required to execute action, getter, and setter methods.

Once a new get request is made by the user, the view state and controller objects are deleted.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If the user is redirected to a page that uses the same controller and the same or a proper subset of controller extensions, a postback request is made. When a postback request is made, the view state is maintained.

If the user interaction requires a page update, such as when the user clicks a **Save** button that triggers a save action, a postback request is made. For more information on postback requests, see [Order of Execution for Visualforce Page Postback Requests](atlas.en-us.pages.meta/pages/pages_controller_postback_request.htm "Learn how a Visualforce page interacts with a controller extension or a custom controller class during a postback request.").

For a specific example of a get request, see [Order of Execution Example](atlas.en-us.pages.meta/pages/pages_controller_lifecycle_example.htm "Follow the lifecycle of a Visualforce page. Learn how the order of execution differs when the user retrieves the page with a get request instead of a postback request.").

## Related Topics

- Order of Execution for Visualforce Page Postback Requests (atlas.en-us.pages.meta/pages/pages_controller_postback_request.htm)
- Order of Execution Example (atlas.en-us.pages.meta/pages/pages_controller_lifecycle_example.htm)
