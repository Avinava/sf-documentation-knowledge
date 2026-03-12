---
title: "Using Apex"
domain: lightning
topic: using-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.943Z
estimatedTokens: 740
keywords: [Apex, write, server-side, code, controllers, test, classes, customize, user, Lightning, Data, Service, SOQL, query, select]
---

# Using Apex

> Use Apex to write server-side code, such as controllers and test classes. Use Apex only
    if you need to customize your user interface to do more than what Lightning Data Service allows,
    such as using a SOQL query to select certain records. Apex provisions data that’s not managed
    and you must handle data refresh on your own.

# Using Apex

Use Apex to write server-side code, such as controllers and test classes. Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.

Apex controllers handle requests from client-side controllers. For example, a client-side controller might handle an event and call an Apex controller action to persist a record. An Apex controller can also load your record data.

Use Apex in these scenarios:

-   To work with objects that aren’t [supported by User Interface API](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm "HTML (New Window)"), such as Task and Event.
-   To work with operations that User Interface API doesn’t support, like loading a list of records by criteria (for example, to load the first 200 Accounts with Amount > $1M).
-   To perform a transactional operation. For example, to create an account and create an opportunity associated with the new account. If either create fails, the entire transaction is rolled back.
-   To call a method imperatively, such as in response to clicking a button, or to delay loading to outside the critical path.

-   **[Creating Server-Side Logic with Controllers](atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm)**
    The framework supports client-side (JavaScript) and server-side (Apex) controllers. An event is always wired to a client-side controller action, which can in turn call an Apex controller action. For example, a client-side controller might handle an event and call an Apex controller action to persist a record.
-   **[Testing Your Apex Code](atlas.en-us.lightning.meta/lightning/apps_packaging_tests.htm)**
    Before you can upload a managed package, you must write and execute tests for your Apex code to meet minimum code coverage requirements. Also, all tests must run without errors when you upload your package to AppExchange.
-   **[Making API Calls from Apex](atlas.en-us.lightning.meta/lightning/apex_api_calls.htm)**
    Make API calls from an Apex controller. You can’t make Salesforce API calls from JavaScript code.
-   **[Make Long-Running Callouts with Continuations](atlas.en-us.lightning.meta/lightning/apex_continuations.htm)**
    Use the Continuation class in Apex to make a long-running request to an external web service. Process the response in a callback method. Continuations are the preferred way to manage callouts because they can provide substantial improvements to the user experience.
-   **[Creating Components in Apex](atlas.en-us.lightning.meta/lightning/apex_using_components.htm)**
    Creating components on the server side in Apex, using the Cmp.<myNamespace>.<myComponent> syntax, is deprecated. Use $A.createComponent() in client-side JavaScript code instead.

## Related Topics

- Creating Server-Side Logic with Controllers (atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm)
- Testing Your Apex Code (atlas.en-us.lightning.meta/lightning/apps_packaging_tests.htm)
- Making API Calls from Apex (atlas.en-us.lightning.meta/lightning/apex_api_calls.htm)
- Make Long-Running Callouts with Continuations (atlas.en-us.lightning.meta/lightning/apex_continuations.htm)
- Creating Components in Apex (atlas.en-us.lightning.meta/lightning/apex_using_components.htm)
