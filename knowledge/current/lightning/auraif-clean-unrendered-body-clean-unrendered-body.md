---
title: "<aura:if> —Clean Unrendered Body —Clean
   Unrendered Body"
domain: lightning
topic: auraif-clean-unrendered-body-clean-unrendered-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.370Z
estimatedTokens: 461
keywords: [<aura, if>, —Clean, Unrendered, occurs, change, isTrue, attribute, tag, rendering, cycle, destroyed, avoidable, work, framework]
---

# <aura:if> —Clean Unrendered Body —Clean
   Unrendered Body

> This warning occurs when you change the isTrue attribute of an <aura:if>
            tag from true to false in the same rendering cycle. The unrendered body of the <aura:if> must be destroyed, which is avoidable work
            for the framework that slows down rendering time.

# <aura:if> —Clean Unrendered Body —Clean Unrendered Body

This warning occurs when you change the isTrue attribute of an <aura:if> tag from true to false in the same rendering cycle. The unrendered body of the <aura:if> must be destroyed, which is avoidable work for the framework that slows down rendering time.

## Example

This component shows the anti-pattern.

```

```

Here’s the component’s client-side controller.

```

```

When the component is created, the isTrue attribute of the <aura:if> tag is evaluated. The value of the isVisible attribute is true by default so the framework creates the body of the <aura:if> tag. After the component is created but before rendering, the init event is triggered.

The init() function in the client-side controller toggles the isVisible value from true to false. The isTrue attribute of the <aura:if> tag is now false so the framework must destroy the body of the <aura:if> tag. This warning displays in the browser console only if you enabled debug mode.

```

```

Click the expand button beside the warning to see a stack trace for the warning.

![browser console stack trace](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fif_stack_trace.png&folder=lightning)

Click the link for the ifCleanUnrendered entry in the stack trace to see the offending line of code in the Sources pane of the browser console.

## How to Fix the Warning

Reverse the logic for the isTrue expression. Instead of setting the isTrue attribute to true by default, set it to false. Set the isTrue expression to true in the init() method, if needed.

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
<!--c:ifCleanUnrendered-->
<aura:component>
    <aura:attribute name="isVisible" type="boolean" default="true"/>
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>

    <aura:if isTrue="{!v.isVisible}">
        <p>I am visible</p>
    </aura:if>
</aura:component>
```

```
/* c:ifCleanUnrenderedController.js */
({
    init: function(cmp) {
        /* Some logic */
        cmp.set("v.isVisible", false); // Performance warning trigger
    }
})
```

```
WARNING: [Performance degradation] markup://aura:if ["5:0"] in c:ifCleanUnrendered ["3:0"]
needed to clear unrendered body.
```

```
<!--c:ifCleanUnrenderedFixed-->
<aura:component>
    <!-- FIX: Change default to false.
         Update isTrue expression in controller instead. -->
    <aura:attribute name="isVisible" type="boolean" default="false"/>
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>

    <aura:if isTrue="{!v.isVisible}">
        <p>I am visible</p>
    </aura:if>
</aura:component>
```

```
/* c:ifCleanUnrenderedFixedController.js */
({
    init: function(cmp) {
        // Some logic
        // FIX: set isVisible to true if logic criteria met
        cmp.set("v.isVisible", true);
    }
})
```
