---
title: "Migrate to  lightning:isUrlAddressable from from force:navigateToComponent"
domain: lightning
topic: migrate-to-lightningisurladdressable-from-from-forcenavigatetocomponent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.343Z
estimatedTokens: 567
keywords: [Migrate, lightning, isUrlAddressable, force, navigateToComponent, pageReference, JavaScript, URL, instead, parsing, creating, directly, approach, helps, avoid]
---

# Migrate to  lightning:isUrlAddressable from from force:navigateToComponent

> The pageReference JavaScript object represents
    a URL for a page. You can use a pageReference instead of
    parsing or creating a URL directly. This approach helps you avoid broken navigation if
    Salesforce changes URL formats in the future.

# Migrate to lightning:isUrlAddressable from from force:navigateToComponent

The pageReference JavaScript object represents a URL for a page. You can use a pageReference instead of parsing or creating a URL directly. This approach helps you avoid broken navigation if Salesforce changes URL formats in the future.

If you’re currently using the force:navigateToComponent event, you can provide backward compatibility for bookmarked links by redirecting requests to a component that uses lightning:isUrlAddressable.

First, copy your original component, including its definition, controller, helper, renderer, and CSS. Make the new component implement the lightning:isUrlAddressable interface.

Change the new component to read the values passed through the navigation request from cmp.get("v.pageReference").state.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You can’t use two-way binding to map values from pageReference.state to a subcomponent that sets those values. You can’t modify the state object. As a workaround, copy the values from pageReference.state into your own component’s attribute using a handler.

```

```

In the new component, remove the attributes mapped from the URL that aren’t used to copy values from the page state in the component’s init handler.

Change the instances that navigate to your old component to the new API and address of your new component. For example, remove instances of force:navigateToComponent, like $A.get("e.force:navigateToComponent").setParams({componentDef: "c:oldCmp", attributes: {"myAttr": "foo"}}).fire();.

Add <lightning:navigation aura:id="navigationService" /> to your component markup, and update it to use navigationService. Pass in a pageReference.

```

```

In the original component’s init handler, send a navigation redirect request to navigate to the new component. Pass the third argument in the navigate API call as true. This argument indicates that the request replaces the current entry in the browser history and avoids an extra entry when using a browser’s navigation buttons.

```

```

Remove all other code from the original component’s definition, controller, helper, renderer, and CSS. Leave only the navigation redirect call.

## Code Examples

```
// Add a handler to your component 
<aura:handler name="init" value="{!this}" action="{!c.init}" />

// Controller example
({
    init: function(cmp, event, helper) {
        var pageReference = cmp.get("v.pageReference");
        cmp.set("v.myAttr", pageReference.state.c__myAttr);
        // myAttr can be modified, but isn’t reflected in the URL 
    }
})
```

```
cmp.find("navigationService").navigate({
    type: "standard__component",
    attributes: {
        componentName: "c__myCmpCopy" 
    },
    state: { 
        "c__myAttr": "foo" 
    }
});
```

```
({
    init: function(cmp, event, helper) {
        cmp.find("navigation").navigate({
            type: "standard__component",
            attributes: {
                componentName: "c__componentB" },
            state: {
                c__myAttr: cmp.get("v.myAttr")
            } 
        }, true); // replace = true 
    }
})
```
