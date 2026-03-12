---
title: "Cancel an Asynchronous Request in a Flow Local Action"
domain: lightning
topic: cancel-an-asynchronous-request-in-a-flow-local-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.170Z
estimatedTokens: 484
keywords: [Cancel, Asynchronous, Flow, Local, Action, times, executes, action's, fault, connector, $Flow.FaultMessage, error, message, However, original]
---

# Cancel an Asynchronous Request in a Flow Local Action

> If an asynchronous request times out, the flow executes the local action's
    fault connector and sets $Flow.FaultMessage to the error message. However,
    the original request isn't automatically canceled. To abort an asynchronous request, use the
      cancelToken parameter available in the invoke method.

# Cancel an Asynchronous Request in a Flow Local Action

If an asynchronous request times out, the flow executes the local action's fault connector and sets $Flow.FaultMessage to the error message. However, the original request isn't automatically canceled. To abort an asynchronous request, use the cancelToken parameter available in the invoke method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

By default, requests time out after 120 seconds. To override the default, assign a different Integer to the component's timeout attribute.

## Example

In this client-side controller, the invoke method returns a Promise. When the method has done all it needs to do, it completes the call and control returns to the flow.

-   If the request is successful, the method uses resolve() to execute the next element in the flow after this action.
-   If the request isn't successful, it uses reject() to execute the local action’s fault connector and sets $Flow.FaultMessage to “My error message”.
-   If the request takes too long, it uses cancelToken.promise.then to abort the request.

```

```

#### See Also

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")

-   [Configure the Client-Side Controller for a Flow Local Action](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_controller.htm "When a component is executed as a flow local action, the flow calls the invoke method in the client-side controller. To run the code asynchronously in your client-side controller, such as when you're making an XML HTTP request (XHR), return a Promise. When the method finishes or the Promise is fulfilled, control is returned back to the flow.")

## Code Examples

```
({
   invoke : function(component, event, helper) {
      var cancelToken = event.getParam("arguments").cancelToken;
        
      return new Promise(function(resolve, reject) {
         var xhttp = new XMLHttpRequest();
        
         // Do something, like get data from
         // a database behind your firewall
         xhttp.onreadystatechange = $A.getCallback(function() {
            if (/* request was successful */) {                    
               // Complete the call and return to the flow
               resolve();
            } else {
               reject(new Error("My error message"));
            }
         });
         
         // If the Promise times out, abort the request and 
         // pass set $Flow.FaultMessage to "Request timed out"
         cancelToken.promise.then(function(error) {
            xhttp.abort();
            reject(new Error("Request timed out."));
         });
        
      });
   }
})
```

## Related Topics

- Configure the Client-Side Controller for a Flow Local Action (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_controller.htm)
