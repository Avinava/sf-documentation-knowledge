---
title: "createComponents()"
domain: lightning
topic: createcomponents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.720Z
estimatedTokens: 330
keywords: [createComponents, array, components, attributes, accepts, component, attribute, maps, callback, notify, caller]
---

# createComponents()

> Create an array of components from a list of types and attributes.
   This method accepts a list of component names and attribute maps, and a callback to notify the
   caller.

# createComponents()

Create an array of components from a list of types and attributes. This method accepts a list of component names and attribute maps, and a callback to notify the caller.

## Signature

createComponents(Array components, function callback)

## Parameters

components

Type: Array

The list of components to create. For example, \["lightning:button", {"onclick":component.getReference("c.handlePress")}\]

callback(components, status, errorMessage)

Type: function

The callback to invoke after the components are created. The callback has three parameters.

1.  components—The components that were created. This parameter enables you to do something with the new components, such as add them to the body of the component that created them. If there’s an error, components is null.
2.  status—The status of the call. The possible values are SUCCESS, INCOMPLETE, or ERROR. Always check that the status is SUCCESS before you try to use the components.
3.  errorMessage—The error message if the status is ERROR.

#### See Also

-   [Dynamically Creating Components](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm "Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().")

## Related Topics

- Dynamically Creating Components (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)
