---
title: "Configure the Client-Side Controller for a Flow Local Action"
domain: lightning
topic: configure-the-client-side-controller-for-a-flow-local-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.174Z
estimatedTokens: 553
keywords: [Configure, Client-Side, Controller, Flow, Local, Action, component, executed, calls, invoke, run, code, asynchronously, you're, making]
---

# Configure the Client-Side Controller for a Flow Local Action

> When a component is executed as a flow local action, the flow calls the invoke method in the client-side controller. To run the code
      asynchronously in your client-side controller, such as when you're making an XML HTTP request
      (XHR), return a Promise. When the method finishes or the Promise is fulfilled, control is
      returned back to the flow.

# Configure the Client-Side Controller for a Flow Local Action

When a component is executed as a flow local action, the flow calls the invoke method in the client-side controller. To run the code asynchronously in your client-side controller, such as when you're making an XML HTTP request (XHR), return a Promise. When the method finishes or the Promise is fulfilled, control is returned back to the flow.

## Asynchronous Code

When a Promise is resolved, the next element in the flow is executed. When a Promise is rejected or hits the timeout, the flow takes the local action's fault connector and sets $Flow.FaultMessage to the error message.

By default, the error message is “An error occurred when the elementName element tried to execute the c:myComponent component.” To customize the error message in $Flow.FaultMessage, return it as a new Error object in the reject() call.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If you’re making callouts to an external server, add the external server to the allowlist in your org and enable or configure CORS in the external server.

## Synchronous Code

When the method finishes, the next element in the flow is executed.

```

```

#### See Also

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")

-   [Cancel an Asynchronous Request in a Flow Local Action](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_abort.htm "If an asynchronous request times out, the flow executes the local action's fault connector and sets $Flow.FaultMessage to the error message. However, the original request isn't automatically canceled. To abort an asynchronous request, use the cancelToken parameter available in the invoke method.")

-   [Using External JavaScript Libraries](atlas.en-us.lightning.meta/lightning/js_libs_platform.htm "To reference a JavaScript library, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.")

## Code Examples

```
({
   invoke : function(component, event, helper) {
      return new Promise(function(resolve, reject) {
         // Do something asynchronously, like get data from
         // an on-premise database

         // Complete the call and return to the flow
         if (/* request was successful */) {
            // Set output values for the appropriate attributes
            resolve();
         } else {
            reject(new Error("My error message")); }
      });
   }
})
```

```
({
   invoke : function(component, event, helper) { 
      // Do something synchronously, like open another browser tab
      // with a specified URL

      // Set output values for the appropriate attributes
    }
 })
```

## Related Topics

- Cancel an Asynchronous Request in a Flow Local Action (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_abort.htm)
- Using External JavaScript Libraries (atlas.en-us.lightning.meta/lightning/js_libs_platform.htm)
