---
title: "Modifying Components Outside the Framework Lifecycle"
domain: lightning
topic: modifying-components-outside-the-framework-lifecycle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.092Z
estimatedTokens: 905
keywords: [Modifying, Components, Outside, Framework, Lifecycle, $A.getCallback, wrap, any, code, modifies, component, normal, rerendering, setTimeout, call]
---

# Modifying Components Outside the Framework Lifecycle

> Use $A.getCallback() to wrap any code that
        modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified
        component and processes any enqueued actions.

# Modifying Components Outside the Framework Lifecycle

Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

$A.run() is deprecated. Use $A.getCallback() instead.

You don't need to use $A.getCallback() if your code is executed as part of the framework's call stack; for example, your code is handling an event or in the callback for a server-side controller action. An exception is when you want to pass the callback to Lightning Data Service, such as when you are creating a record using force:recordData. If the callback is passed in without being wrapped in $A.getCallback(), any attempt to access private attributes of your component results in access check failures.

An example of where you need to use $A.getCallback() is calling window.setTimeout() in an event handler to execute some logic after a time delay. This puts your code outside the framework's call stack.

This sample sets the visible attribute on a component to true after a five-second delay.

```

```

Note how the code updating a component attribute is wrapped in $A.getCallback(), which ensures that the framework rerenders the modified component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You don't need a cmp.isValid() check within this setTimeout() call as the cmp.set() call doesn't do anything when the component is invalid.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

Don't save a reference to a function wrapped in $A.getCallback(). If you use the reference later to send actions, the saved transaction state will cause the actions to be aborted.

#### See Also

-   [Creating a Record](atlas.en-us.lightning.meta/lightning/data_service_create_record.htm "The simplest way to create a form that enables users create a record is to use lightning:recordForm. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you need more customization than the form-based components allow, use force:recordData.")

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Checking Component Validity](atlas.en-us.lightning.meta/lightning/js_cmp_isvalid.htm "If you navigate elsewhere in the UI while asynchronous code is executing, the framework unrenders and destroys the component that made the asynchronous request. You can still have a reference to that component, but it is no longer valid. The cmp.isValid() call returns false for an invalid component.")

-   [Firing Events from Non-Aura Code](atlas.en-us.lightning.meta/lightning/events_external.htm "You can fire Aura events from JavaScript code outside an Aura app. For example, your Aura app might need to call out to some non-Aura code, and then have that code communicate back to your Aura app once it's done.")

-   [Communicating with Events](atlas.en-us.lightning.meta/lightning/events_intro.htm "The framework uses event-driven programming. You write handlers that respond to interface events as they occur. The events may or may not have been triggered by user interaction.")

## Code Examples

```
window.setTimeout(
    $A.getCallback(function() {
        cmp.set("v.visible", true);
    }), 5000
);
```

## Related Topics

- Creating a Record (atlas.en-us.lightning.meta/lightning/data_service_create_record.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Checking Component Validity (atlas.en-us.lightning.meta/lightning/js_cmp_isvalid.htm)
- Firing Events from Non-Aura Code (atlas.en-us.lightning.meta/lightning/events_external.htm)
- Communicating with Events (atlas.en-us.lightning.meta/lightning/events_intro.htm)
