---
title: "Manage Synchronous Action Dependencies"
domain: lightning
topic: manage-synchronous-action-dependencies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.595Z
estimatedTokens: 990
keywords: [Manage, Synchronous, Action, Dependencies, code, require, prior, don’t, call, dependent, actions, until, earlier, completes, render]
---

# Manage Synchronous Action Dependencies

> When your code has dependencies that require a prior action to complete, don’t call the
        dependent actions until the earlier action completes. For example, render a dependent
        element conditionally, based on the result of the earlier action being available. Or call
        the dependent action from the earlier action’s callback function. This ensures that the
        dependent call isn’t made until after the earlier call completes.

# Manage Synchronous Action Dependencies

When your code has dependencies that require a prior action to complete, don’t call the dependent actions until the earlier action completes. For example, render a dependent element conditionally, based on the result of the earlier action being available. Or call the dependent action from the earlier action’s callback function. This ensures that the dependent call isn’t made until after the earlier call completes.

## Hidden Dependencies in a Canvas Component

When a child component calls hidden lifecycle actions, timing errors can occur more frequently with dynamic boxcar optimization. For example, this Aura component uses the fetchCanvasParameters action to retrieve values from a server-side Apex controller in its init handler, and then passes the retrieved values as parameters to a child component.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The component helper and server-side Apex controller aren’t relevant to understanding this issue, and don’t require changes. They are included after the explanation and fix, for completeness.

Behind the scenes, the child <force:canvasApp> component calls its own lifecycle action getCanvasAppData to retrieve the Canvas app’s metadata. The order of these two action calls—fetchCanvasParameters and getCanvasAppData—isn’t obvious because the call to getCanvasAppData is implicit. More importantly, the order in which they return isn’t guaranteed. With standard boxcar grouping, both calls were *usually* grouped together in the same boxcar, which *usually* ensured that they completed in the correct order.

With dynamic boxcar optimization, the framework has more flexibility in how it groups actions into boxcars, using more XHR slots to send actions separately to avoid bottlenecks. It's much more likely that the two actions are sent in different boxcars. The use of separate boxcars greatly increases the possibility that the <force:canvasApp> component is instantiated and makes another call in another boxcar before the component parameters are returned in the parent component’s init handler. As you can imagine, this change in sequence can cause any number of problems.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

**This behavior of the framework is intentional**. Even with standard boxcar grouping, it was always possible for the original code to have timing problems because of its dependency on sequential action in an asynchronous framework. Boxcar grouping behavior is an implementation detail, and the behavior changes with dynamic boxcar optimization. Design your components and apps to avoid synchronous dependencies because synchronous behavior isn’t guaranteed by the framework, regardless of boxcar implementation.

The simplest and easiest way to resolve this issue is to conditionally render the <force:canvasApp> component only if the initial response values are available, that is, after the fetchCanvasParameters action has completed.

```

```

By wrapping the child <force:canvasApp> component in an <aura:if> block, the creation of the <force:canvasApp> component is deferred until after the call to the fetchCanvasParameters action completes.

For completeness, here’s the Aura component helper, which contains the fetchCanvasParameters action, and the server-side Apex controller method that returns the Canvas app parameters that the child <force:canvasApp> component can use.

```

```

```

```

#### See Also

-   [Boxcar Grouping and Optimization](atlas.en-us.lightning.meta/lightning/controllers_server_actions_boxcar_dynamic.htm "On the client, the Aura Framework uses a process called boxcar’ing to group together multiple server-side controller actions into one network request. Boxcar’ing requests uses network resources more efficiently than sending each action separately.")

## Code Examples

```
<!-- canvasExample.cmp -->
<aura:component controller="CanvasExampleController" >
    <aura:attribute name="canvasParameters" type="Map"/>
    <aura:handler name="init" value="{!this}"
          action="{!c.fetchCanvasParameters}"/>

    <force:canvasApp developerName="{!v.AppName}" scrolling="auto" 
           width="100%" height="100%" title="{!v.title}" 
           parameters="{!v.canvasParameters}" />
</aura:component>
```

```
<!--  canvasExampleFixed.cmp -->
<aura:component controller="CanvasExampleController" >
    <aura:attribute name="canvasParameters" type="Map"/>
    <aura:handler name="init" value="{!this}"
          action="{!c.fetchCanvasParameters}"/>

     <aura:if isTrue="{!v.canvasParameters}">
        <force:canvasApp developerName="{!v.AppName}" scrolling="auto" 
           width="100%" height="100%" title="{!v.title}" 
           parameters="{!v.canvasParameters}" />
     </aura:if>

</aura:component>
```

```
# canvasExampleHelper.js
({
    fetchCanvasParameters : function(component, event, helper) {
        var action = component.get("c.getCanvasParameters");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.canvasParameters",
                    response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
```

```apex
# CanvasExampleController.apex
public with sharing class CanvasExampleController {
    @AuraEnabled
    public static Map<String, Object> getCanvasParameters() {
        // Example: return some parameters
        Map<String, Object> params = new Map<String, Object>();
        params.put('param1', 'value1');
        params.put('param2', 123);
        return params;
    }
}
```

## Related Topics

- Boxcar Grouping and Optimization (atlas.en-us.lightning.meta/lightning/controllers_server_actions_boxcar_dynamic.htm)
