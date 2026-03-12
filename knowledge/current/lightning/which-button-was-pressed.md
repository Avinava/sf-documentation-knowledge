---
title: "Which Button Was Pressed?"
domain: lightning
topic: which-button-was-pressed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.102Z
estimatedTokens: 301
keywords: [Button, Pressed, component, containing, multiple, buttons, Component.getLocalId]
---

# Which Button Was Pressed?

> To find out which button was pressed in a component containing multiple buttons, use
            Component.getLocalId().

# Which Button Was Pressed?

To find out which button was pressed in a component containing multiple buttons, use Component.getLocalId().

Let’s look at an example with multiple lightning:button components. Each button has a unique local ID, set by an aura:id attribute.

```

```

Use event.getSource() in the client-side controller to get the button component that was clicked. Call getLocalId() to get the aura:id of the clicked button.

```

```

In the client-side controller, you can use one of the following methods to find out which button was clicked.

-   event.getSource().getLocalId() returns the aura:id of the clicked button.
-   event.getSource().get("v.name") returns the name of the clicked button.

#### See Also

-   [Component IDs](atlas.en-us.lightning.meta/lightning/components_ids.htm "A component has two types of IDs: a local ID and a global ID. You can retrieve a component using its local ID in your JavaScript code. A global ID can be useful to differentiate between multiple instances of a component or for debugging purposes.")

-   [Finding Components by ID](atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm "Retrieve a component by its ID in JavaScript code.")

## Code Examples

```
<!--c:buttonPressed-->
<aura:component>
    <aura:attribute name="whichButton" type="String" />
    
    <p>You clicked: {!v.whichButton}</p>

    <lightning:button aura:id="button1" label="Click me" onclick="{!c.nameThatButton}"/>
    <lightning:button aura:id="button2" label="Click me too" onclick="{!c.nameThatButton}"/>
</aura:component>
```

```
/* buttonPressedController.js */
({
    nameThatButton : function(cmp, event, helper) {
        var whichOne = event.getSource().getLocalId();
        console.log(whichOne);
        cmp.set("v.whichButton", whichOne);
    }
})
```

## Related Topics

- Component IDs (atlas.en-us.lightning.meta/lightning/components_ids.htm)
- Finding Components by ID (atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm)
