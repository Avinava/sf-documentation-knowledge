---
title: "<aura:iteration> —Multiple Items Set —Multiple Items Set"
domain: lightning
topic: auraiteration-multiple-items-set-multiple-items-set
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.376Z
estimatedTokens: 524
keywords: [<aura, iteration>, —Multiple, Items, occurs, attribute, tag, multiple, times, rendering, cycle, How, Fix]
---

# <aura:iteration> —Multiple Items Set —Multiple Items Set

> This warning occurs when you set the items attribute of an <aura:iteration> tag multiple times in the same rendering
        cycle.

# <aura:iteration> —Multiple Items Set —Multiple Items Set

This warning occurs when you set the items attribute of an <aura:iteration> tag multiple times in the same rendering cycle.

There’s no easy and performant way to check if two collections are the same in JavaScript. Even if the old value of items is the same as the new value, the framework deletes and replaces the previously created body of the <aura:iteration> tag.

## Example

This component shows the anti-pattern.

```

```

Here’s the component’s client-side controller.

```

```

When the component is created, the items attribute of the <aura:iteration> tag is set to the default value of the groceries attribute. After the component is created but before rendering, the init event is triggered.

The init() function in the client-side controller sets the groceries attribute, which resets the items attribute of the <aura:iteration> tag. This warning displays in the browser console only if you enabled debug mode.

```

```

Click the expand button beside the warning to see a stack trace for the warning.

![browser console stack trace](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fiteration_stack_trace.png&folder=lightning)

Click the link for the iterationMultipleItemsSet entry in the stack trace to see the offending line of code in the Sources pane of the browser console.

## How to Fix the Warning

Make sure that you don’t modify the items attribute of an <aura:iteration> tag multiple times. The easiest solution is to remove the default value for the groceries attribute in the markup. Set the value for the groceries attribute in the controller instead.

The alternate solution is to create a second attribute whose only purpose is to store the default value. When you’ve completed your logic in the controller, set the groceries attribute.

Here’s the fixed component:

```

```

Here’s the fixed controller:

```

```

#### See Also

-   [*Salesforce Help:* **Enable Debug Mode for Lightning Components**](https://help.salesforce.com/articleView?id=aura_debug_mode.htm&language=en_US)

## Code Examples

```
<!--c:iterationMultipleItemsSet-->
<aura:component>
    <aura:attribute name="groceries" type="List" 
                  default="[ 'Eggs', 'Bacon', 'Bread' ]"/>
    
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>

    <aura:iteration items="{!v.groceries}" var="item">
        <p>{!item}</p>
    </aura:iteration>
</aura:component>
```

```
/* c:iterationMultipleItemsSetController.js */
({
    init: function(cmp) {
        var list = cmp.get('v.groceries');
        // Some logic
        cmp.set('v.groceries', list); // Performance warning trigger
    }
})
```

```
WARNING: [Performance degradation] markup://aura:iteration [id:5:0] in c:iterationMultipleItemsSet ["3:0"]
had multiple items set in the same Aura cycle.
```

```
<!--c:iterationMultipleItemsSetFixed-->
<aura:component>
    <!-- FIX: Remove the default from the attribute -->
    <aura:attribute name="groceries" type="List" />
    <!-- FIX (ALTERNATE): Create a separate attribute containing the default -->
    <aura:attribute name="groceriesDefault" type="List" 
                  default="[ 'Eggs', 'Bacon', 'Bread' ]"/>

    <aura:handler name="init" value="{!this}" action="{!c.init}"/>

    <aura:iteration items="{!v.groceries}" var="item">
        <p>{!item}</p>
    </aura:iteration>
</aura:component>
```

```
/* c:iterationMultipleItemsSetFixedController.js */
({
    init: function(cmp) {
        // FIX (ALTERNATE) if need to set default in markup
        // use a different attribute
        // var list = cmp.get('v.groceriesDefault');
        // FIX: Set the value in code
        var list = ['Eggs', 'Bacon', 'Bread'];
        // Some logic
        cmp.set('v.groceries', list);
    }
})
```
