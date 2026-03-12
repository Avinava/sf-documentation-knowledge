---
title: "createComponent()"
domain: lightning
topic: createcomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.715Z
estimatedTokens: 366
keywords: [createComponent, component, attributes, accepts, map, callback, notify, caller]
---

# createComponent()

> Create a component from a type and a set of attributes. This method
   accepts the name of a type of component, a map of attributes, and a callback to notify the
   caller.

# createComponent()

Create a component from a type and a set of attributes. This method accepts the name of a type of component, a map of attributes, and a callback to notify the caller.

## Signature

createComponent(String type, Object attributes, function callback)

## Parameters

type

Type: String

The type of component to create. For example, "lightning:button".

attributes

Type: Object

A map of attributes to send to the component. These attributes take the same form as in the markup, including events {"press":component.getReference("c.handlePress")}, and id {"aura:id":"myComponentId"}.

callback(cmp, status, errorMessage)

Type: function

The callback to invoke after the component is created. The callback has three parameters.

1.  cmp—The component that was created. This parameter enables you to do something with the new component, such as add it to the body of the component that creates it. If there’s an error, cmp is null.
2.  status—The status of the call. The possible values are SUCCESS, INCOMPLETE, or ERROR. Always check that the status is SUCCESS before you try to use the component.
3.  errorMessage—The error message if the status is ERROR.

#### See Also

-   [Dynamically Creating Components](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm "Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().")

## Related Topics

- Dynamically Creating Components (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)
