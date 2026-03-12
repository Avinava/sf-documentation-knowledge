---
title: "Order of Execution for Visualforce Page Postback Requests"
domain: pages
topic: order-of-execution-for-visualforce-page-postback-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.332Z
estimatedTokens: 953
keywords: [Order, Execution, Visualforce, Postback, Requests, how, interacts, controller, extension, custom]
---

# Order of Execution for Visualforce Page Postback Requests

> Learn how a Visualforce page interacts with a controller extension
  or a custom controller class during a postback request.

# Order of Execution for Visualforce Page Postback Requests

Learn how a Visualforce page interacts with a controller extension or a custom controller class during a postback request.

A postback request is made when user interaction requires a page update, such as when a user clicks on a **Save** button and triggers a save action.

![A diagram of how a Visualforce page interacts with a controller extention or a custom controller class during a postback request](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpostback_request.png&folder=pages)

1.  During a postback request, the view state is decoded and used as the basis for updating the values on the page.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    A component with the immediate attribute set to true bypasses this phase of the request. In other words, the action executes, but no validation is performed on the inputs and no data changes on the page. See [Use the immediate Attribute Carefully](atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm "Visualforce components with the immediate attribute set to true execute an action without processing any validation rules for the associated fields on the page. This attribute should only be used if the component executes an action that navigates away from the page after completion.").

2.  After the view state is decoded, expressions are evaluated and set methods on the controller and any controller extensions, including set methods in controllers defined for custom components, are executed.

    These method calls do not update the data unless all methods are executed successfully. For example, if one of the methods updates a property and the update is not valid due to validation rules or an incorrect data type, the data is not updated and the page redisplays with the appropriate error messages.

3.  The action that triggered the postback request is executed. If that action completes successfully, the data is updated. If the postback request returns the user to the same page, the view state is updated.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    The action attribute on the <apex:page\> component is not evaluated during a postback request. It is only evaluated during a get request.

4.  The resulting HTML is sent to the browser.

If the postback request indicates a page redirect and the redirect is to a page that uses the same controller and a proper subset of controller extensions of the originating page, a postback request is executed for that page. Otherwise, a get request is executed for the page. If the postback request contains an <apex:form\> component, only the ID query parameter on a postback request is returned.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

You can use the setRedirect attribute on a pageReference to control whether a postback or get request is executed. If setRedirect is set to true, a get request is executed. Setting it to false does not ignore the restriction that a postback request will be executed if and only if the target uses the same controller and a proper subset of extensions. If setRedirect is set to false, and the target does not meet those requirements, a get request will be made.

Once the user is redirected to another page, the view state and controller objects are deleted.

For a specific example of a postback request, see [Order of Execution Example](atlas.en-us.pages.meta/pages/pages_controller_lifecycle_example.htm "Follow the lifecycle of a Visualforce page. Learn how the order of execution differs when the user retrieves the page with a get request instead of a postback request.").

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- Order of Execution Example (atlas.en-us.pages.meta/pages/pages_controller_lifecycle_example.htm)
