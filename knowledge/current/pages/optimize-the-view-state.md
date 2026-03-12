---
title: "Optimize the View State"
domain: pages
topic: optimize-the-view-state
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.907Z
estimatedTokens: 619
keywords: [Optimize, View, State, maintain, Visualforce, page’s, Lightning, Platform, stores, components, controller, encrypted, hidden, form, element]
---

# Optimize the View State

> To maintain a Visualforce page’s view state, Lightning Platform stores the state of
    components, field values, and the controller as an encrypted string in a hidden form element.
    The view state has a limit of 170 KB. A large view state requires longer processing times for
    each request, including serialization and deserialization time, and encryption and decryption
    time. If you reduce the view state size, then your page can load faster and stall less
    often.

# Optimize the View State

To maintain a Visualforce page’s view state, Lightning Platform stores the state of components, field values, and the controller as an encrypted string in a hidden form element. The view state has a limit of 170 KB. A large view state requires longer processing times for each request, including serialization and deserialization time, and encryption and decryption time. If you reduce the view state size, then your page can load faster and stall less often.

To examine a Visualforce page’s view state, set the Development Mode and the Show View State in Development Mode user permissions. The View State tab in the development mode footer displays the distribution of the view state. Make sure you know the view state size of each page, and test with large data volumes to prevent issues that can occur after deployment.

To reduce the view state:

-   Use filters and pagination to reduce data that requires state.
-   Declare an instance variable with a transient keyword if the variable is only useful for the current request. A transient variable isn’t included in the view state.
-   Refine your SOQL calls to return only data that's relevant to the Visualforce page.
-   Reduce the number of components that your page depends on.
-   Make data read-only. Use the <apex:outputText> component instead of the <apex:inputField> component.
-   Use JavaScript remoting. Unlike the <apex:actionFunction> component, JavaScript remoting doesn’t require an <apex:form> component. JavaScript remoting doesn’t reduce the overall view state of a page, but your page generally performs better without the need to transmit, serialize, and deserialize the view state. The tradeoffs are the loss of the reRender attribute and the necessity of additional JavaScript code to handle callbacks.

#### See Also

-   [Using the Development Mode Footer](atlas.en-us.pages.meta/pages/pages_tools_edit_toolbar.htm)

-   [*Apex Developer Guide*: Using the transient Keyword](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_transient.htm "Apex Developer Guide: Using the transient Keyword - HTML (New Window)")

-   [JavaScript Remoting for Apex Controllers](atlas.en-us.pages.meta/pages/pages_js_remoting.htm "Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.")

## Related Topics

- Using the Development Mode Footer (atlas.en-us.pages.meta/pages/pages_tools_edit_toolbar.htm)
- JavaScript Remoting for Apex Controllers (atlas.en-us.pages.meta/pages/pages_js_remoting.htm)
