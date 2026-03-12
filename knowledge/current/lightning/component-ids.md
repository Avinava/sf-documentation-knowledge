---
title: "Component IDs"
domain: lightning
topic: component-ids
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.283Z
estimatedTokens: 611
keywords: [Component, IDs, two, local, retrieve, JavaScript, code, useful, differentiate, multiple, instances, debugging, purposes]
---

# Component IDs

> A component has two types of IDs: a local ID and a global ID. You can
            retrieve a component using its local ID in your JavaScript code. A
                global ID can be useful to differentiate between multiple instances of a component
                or for debugging purposes.

# Component IDs

A component has two types of IDs: a local ID and a global ID. You can retrieve a component using its local ID in your JavaScript code. A global ID can be useful to differentiate between multiple instances of a component or for debugging purposes.

## Local IDs

A local ID is an ID that is only scoped to the component. A local ID is often unique but it’s not required to be unique.

Create a local ID by using the aura:id attribute. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

aura:id doesn't support expressions. You can only assign literal string values to aura:id.

Find the button component by calling cmp.find("button1") in your client-side controller, where cmp is a reference to the component containing the button.

find() returns different types depending on the result.

-   If the local ID is unique, find() returns the component.
-   If there are multiple components with the same local ID, find() returns an array of the components.
-   If there is no matching local ID, find() returns undefined.

To find the local ID for a component in JavaScript, use cmp.getLocalId().

## Global IDs

Every component has a unique globalId, which is the generated runtime-unique ID of the component instance. A global ID (1) is not guaranteed to be the same beyond the lifetime of a component, so it should never be relied on. A global ID can be useful to differentiate between multiple instances of a component or for debugging purposes.

![Every component has a unique global ID.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2FglobalID.png&folder=lightning)

To create a unique ID for an HTML element, you can use the globalId as a prefix or suffix for your element. For example:

```

```

In your browser’s developer console, retrieve the element using document.getElementById("<globalId>\_footer"), where <globalId> is the generated runtime-unique ID.

To retrieve a component’s global ID in JavaScript, use the getGlobalId() function.

```

```

#### See Also

-   [Finding Components by ID](atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm "Retrieve a component by its ID in JavaScript code.")

-   [Which Button Was Pressed?](atlas.en-us.lightning.meta/lightning/js_cb_which_button_pressed.htm "To find out which button was pressed in a component containing multiple buttons, use Component.getLocalId().")

## Code Examples

```
<lightning:button aura:id="button1" label="button1"/>
```

```apex
<div id="{!globalId + '_footer'}"></div>
```

```apex
var globalId = cmp.getGlobalId();
```

## Related Topics

- Finding Components by ID (atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm)
- Which Button Was Pressed? (atlas.en-us.lightning.meta/lightning/js_cb_which_button_pressed.htm)
