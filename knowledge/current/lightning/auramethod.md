---
title: "aura:method"
domain: lightning
topic: auramethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.855Z
estimatedTokens: 937
keywords: [aura, <aura, method>, define, part, component's, API, directly, call, component’s, client-side, controller, instead, firing, handling]
---

# aura:method

> Use <aura:method> to
            define a method as part of a component's API. This enables you to directly call a method
            in a component’s client-side controller instead of firing and handling a component
            event. Using <aura:method> simplifies the code
            needed for a parent component to call a method on a child component that it
            contains.

# aura:method

Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.

The <aura:method> tag has these system attributes.

| Attribute | Type | Description |
| --- | --- | --- |
| name | String | The method name. Use the method name to call the method in JavaScript code. For example:cmp.sampleMethod(param1); |
| action | Expression | The client-side controller action to execute. For example:action="{!c.sampleAction}"sampleAction is an action in the client-side controller. If you don’t specify an action value, the controller action defaults to the value of the method name. |
| access | String | The access control for the method. Valid values are:public—Any component in the same namespace can call the method. This is the default access level.global—Any component in any namespace can call the method. |
| description | String | The method description. |

## Declaring Parameters

An <aura:method> can optionally include parameters. Use an <aura:attribute> tag within an <aura:method> to declare a parameter for the method. For example:

```

```

For more information, see the **Returning a Value** section below.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You don’t need an access system attribute in the <aura:attribute> tag for a parameter.

## Creating a Handler Action

This handler action shows how to access the arguments passed to the method.

```

```

Retrieve the arguments using event.getParam('arguments'). It returns an object if there are arguments or an empty array if there are no arguments.

## Returning a Value

aura:method executes synchronously.

-   A synchronous method finishes executing before it returns. Use the return statement to return a value from synchronous JavaScript code. See [Return Result for Synchronous Code](atlas.en-us.lightning.meta/lightning/js_cmp_methods_sync.htm "aura:method executes synchronously. A synchronous method finishes executing before it returns. Use the return statement to return a value from synchronous JavaScript code.").
-   An asynchronous method may continue to execute after it returns. Use a callback to return a value from asynchronous JavaScript code. See [Return Result for Asynchronous Code](atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm "aura:method executes synchronously. Use the return statement to return a value from synchronous JavaScript code. JavaScript code that calls a server-side action is asynchronous. Asynchronous code can continue to execute after it returns. You can’t use the return statement to return the result of an asynchronous call because the aura:method returns before the asynchronous code completes. For asynchronous code, use a callback instead of a return statement.").

#### See Also

-   [Calling Component Methods](atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.")

-   [Component Events](atlas.en-us.lightning.meta/lightning/events_component.htm "A component event is fired from an instance of a component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

## Code Examples

```
<aura:method name="sampleMethod" action="{!c.doAction}" 
  description="Sample method with parameters"> 
    <aura:attribute name="param1" type="String" default="parameter 1"/> 
    <aura:attribute name="param2" type="Object" /> 
</aura:method>
```

```
({
    doAction : function(cmp, event) {
        var params = event.getParam('arguments');
        if (params) {
            var param1 = params.param1;
            // add your code here
        }
    }
})
```

## Related Topics

- Return Result for Synchronous Code (atlas.en-us.lightning.meta/lightning/js_cmp_methods_sync.htm)
- Return Result for Asynchronous Code (atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm)
- Calling Component Methods (atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm)
- Component Events (atlas.en-us.lightning.meta/lightning/events_component.htm)
