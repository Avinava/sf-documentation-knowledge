---
title: "Quick Action APIs in Lightning Experience"
domain: case-feed-dev
topic: quick-action-apis-in-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.388Z
estimatedTokens: 1195
keywords: [Quick, Action, APIs, Lightning, Experience, quickActionAPI, component, access, programmatically, controlling, actions, record, pages, supports, utility]
---

# Quick Action APIs in Lightning Experience

> A lightning:quickActionAPI component allows you
        to access methods for programmatically controlling quick actions on record pages. This
        component is supported in Lightning Experience and supports utility pop-out. This component
        requires API version 43.0 and later.

# Quick Action APIs in Lightning Experience

A lightning:quickActionAPI component allows you to access methods for programmatically controlling quick actions on record pages. This component is supported in Lightning Experience and supports utility pop-out. This component requires API version 43.0 and later.

| Available in: Lightning Experience |
| --- |
| Available in: Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


For example, if you have a custom Aura component that displays Knowledge articles, you can use the lightning:quickActionAPI component to attach and send a Knowledge article from your custom component using the Email quick action on the case record page.

To access these methods, create an instance of the lightning:quickActionAPI component inside your Aura component or page and assign an aura:id attribute to it.

```

```

This component provides similar functionality to the [Publisher APIs in Salesforce Classic](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm#case_feed_dev_guide_component_interactions "The Salesforce Classic Publisher JavaScript API lets your Visualforce pages and components interact with actions you’ve added to a record page in a Salesforce Classic app for objects that are feed-enabled. The Publisher API works in Salesforce Classic apps with standard navigation and console navigation. For example, you could develop a component that generates customized, pre-written text, adds that text to a new post in the Case Feed portal action, and submits the post to the portal, all with one click.").

## Sample Code

This example creates two buttons that interact with the Update Case quick action on a case record page in Lightning Experience. The controller code uses the following Quick Action API methods: [selectAction](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_selectAction.htm "Allows custom components to select and focus on a quick action on a record page."), [setActionFieldValues](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_setActionFieldValues.htm "Allows custom components to select a quick action on a record page and then specify field values for that action."), and [invokeAction](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_invokeAction.htm "Allows custom components to save or submit the quick action on a record page.").

Component code:

```

```

Controller code:

```

```

-   **[Quick Action API Considerations](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_considerations.htm)**
    Before working with the Lightning Quick Action JavaScript API methods, review some considerations that might impact your implementation.
-   **[getAvailableActions](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActions.htm)**
    Allows custom components to get a list of the available actions on a record page.
-   **[getAvailableActionFields](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActionFields.htm)**
    Allows custom components to get a list of the available fields for a specific action on a record page.
-   **[getCustomAction](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getCustomAction.htm)**
    Allows custom components to access a custom quick action and pass data or messages to it.
-   **[getSelectedActions](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getSelectedActions.htm)**
    Allows custom components to access selected quick actions on a record page.
-   **[invokeAction](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_invokeAction.htm)**
    Allows custom components to save or submit the quick action on a record page.
-   **[refresh](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_refresh.htm)**
    Refreshes the current record page.
-   **[selectAction](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_selectAction.htm)**
    Allows custom components to select and focus on a quick action on a record page.
-   **[setActionFieldValues](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_setActionFieldValues.htm)**
    Allows custom components to select a quick action on a record page and then specify field values for that action.

#### See Also

-   [Lightning Component Library: lightning:quickActionAPI](https://developer.salesforce.com/docs/component-library/bundle/lightning:quickActionAPI/documentation "Lightning Component Library: lightning:quickActionAPI - HTML (New Window)")

-   [*Lightning Components Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "
    Lightning Components Developer Guide
    - HTML (New Window)")

## Code Examples

```
<lightning:quickActionAPI aura:id="quickActionAPI"/>
```

```
<aura:component implements="flexipage:availableForRecordHome" description="My Lightning Component">
    <lightning:quickActionAPI aura:id="quickActionAPI" />
    <div>
        <lightning:button label="Select Update Case Action" onclick="{!c.selectUpdateCaseAction}"/>
        <lightning:button label="Update Case Status Field" onclick="{!c.updateCaseStatusAction}"/>
    </div>
</aura:component>
```

```
({
    selectUpdateCaseAction : function( cmp, event, helper) {
        var actionAPI = cmp.find("quickActionAPI");
        var args = { actionName :"Case.UpdateCase" };
        actionAPI.selectAction(args).then(function(result) {
            // Action selected; show data and set field values
        }).catch(function(e) {
            if (e.errors) {
                // If the specified action isn't found on the page, 
                // show an error message in the my component 
            }
        });
    },
    
    updateCaseStatusAction : function( cmp, event, helper ) {
        var actionAPI = cmp.find("quickActionAPI");
        var fields = { Status : { value : "Closed"}, 
                       Subject : { value : "Sets by lightning:quickActionAPI component" }, 
                       accountName : { Id : "accountId" } };
        var args = { actionName : "Case.UpdateCase", 
                     entityName : "Case",
                     targetFields : fields };
        actionAPI.setActionFieldValues(args).then(function() {
            actionAPI.invokeAction(args);
        }).catch(function(e) {
            console.error(e.errors);
        });
    }
})
```

## Related Topics

- Publisher APIs in Salesforce Classic (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- selectAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_selectAction.htm)
- setActionFieldValues (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_setActionFieldValues.htm)
- invokeAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_invokeAction.htm)
- Quick Action API Considerations (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_considerations.htm)
- getAvailableActions (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActions.htm)
- getAvailableActionFields (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActionFields.htm)
- getCustomAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getCustomAction.htm)
- getSelectedActions (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getSelectedActions.htm)
- refresh (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_refresh.htm)
