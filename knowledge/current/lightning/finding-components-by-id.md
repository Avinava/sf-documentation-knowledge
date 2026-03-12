---
title: "Finding Components by ID"
domain: lightning
topic: finding-components-by-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.075Z
estimatedTokens: 313
keywords: [Finding, Components, Retrieve, component, JavaScript, code]
---

# Finding Components by ID

> Retrieve a component by its ID in JavaScript code.

# Finding Components by ID

Retrieve a component by its ID in JavaScript code.

Use aura:id to add a local ID of button1 to the lightning:button component.

```

```

You can find the component by calling cmp.find("button1"), where cmp is a reference to the component containing the button. The find() function has one parameter, which is the local ID of a component within the markup.

find() returns different types depending on the result.

-   If the local ID is unique, find() returns the component.
-   If there are multiple components with the same local ID, find() returns an array of the components.
-   If there is no matching local ID, find() returns undefined.

#### See Also

-   [Component IDs](atlas.en-us.lightning.meta/lightning/components_ids.htm "A component has two types of IDs: a local ID and a global ID. You can retrieve a component using its local ID in your JavaScript code. A global ID can be useful to differentiate between multiple instances of a component or for debugging purposes.")

-   [Value Providers](atlas.en-us.lightning.meta/lightning/expr_source.htm "Value providers are a way to access data. Value providers encapsulate related values together, similar to how an object encapsulates properties and methods.")

## Code Examples

```
<lightning:button aura:id="button1" label="button1"/>
```

## Related Topics

- Component IDs (atlas.en-us.lightning.meta/lightning/components_ids.htm)
- Value Providers (atlas.en-us.lightning.meta/lightning/expr_source.htm)
