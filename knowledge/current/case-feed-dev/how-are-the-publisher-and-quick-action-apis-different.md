---
title: "How Are the Publisher and Quick Action APIs Different?"
domain: case-feed-dev
topic: how-are-the-publisher-and-quick-action-apis-different
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.383Z
estimatedTokens: 743
keywords: [How, Publisher, Quick, Action, APIs, Different, user, org, dictate, development, tools, interact, actions, Salesforce, Classic]
---

# How Are the Publisher and Quick Action APIs Different?

> The user interface in your org can dictate which development tools you can use to
    interact with actions. In Salesforce Classic, you use the Salesforce Classic Publisher
    JavaScript APIs with Visualforce components to interact with actions. In Lightning Experience,
    you use the lightning:quickActionAPI component to call the
    Lightning Quick Action JavaScript APIs to interact with actions.

# How Are the Publisher and Quick Action APIs Different?

The user interface in your org can dictate which development tools you can use to interact with actions. In Salesforce Classic, you use the Salesforce Classic Publisher JavaScript APIs with Visualforce components to interact with actions. In Lightning Experience, you use the lightning:quickActionAPI component to call the Lightning Quick Action JavaScript APIs to interact with actions.

| Different How? | Salesforce Classic Publisher JavaScript APIs | Lightning Quick Action JavaScript APIs |
| --- | --- | --- |
| Implementation | To implement, load the publisher script in your Visualforce page or component. For example:<script    type='text/javascript'    src='/canvas/sdk/js/43.0/publisher.js'/>Then you can reference the Publisher APIs through the Sfdc.canvas.publisher object. For example:Sfdc.canvas.publisher.selectAction({...}) | To implement, use the component lightning:quickActionAPI in your custom Aura component. For example:<aura:component    implements="flexipage:availableForRecordHome"    description="My Aura component">       <lightning:quickActionAPI          aura:id="quickActionAPI" /> </aura:component>Then you can reference the Quick Action APIs in your controller code. |
| Supported Actions, Apps, and Pages | Works with any quick action on a record page in Salesforce Classic apps for objects that are feed-enabled. Supports apps with standard navigation and console navigation. | Works with any quick actions on a record page in any Lightning Experience app. Supports apps with standard navigation and console navigation. |
| Available Methods | Provides the following methods:publisher.customActionMessagepublisher.invokeActionrefreshpublisher.selectActionpublisher.setActionInputValues | Provides the following methods:getAvailableActionsgetAvailableActionFieldsgetCustomActiongetSelectedActionsinvokeActionrefreshselectActionsetActionFieldValues |
| Lightning Experience and Salesforce Classic Support | Works in Salesforce Classic and Lightning Experience.Starting with API version 43.0 of the Salesforce Classic JavaScript Publisher API, the methods used in Visualforce components and pages work in Lightning Experience. Just point to the latest version of the Publisher API script in your Visualforce pages.<script    src="/canvas/sdk/js/43.0/publisher.js"    type="text/javascript"> </script>The portalPostFields input value is not supported in Lightning Experience. | Works only in Lightning Experience.Before implementing, review the Quick Action API Considerations |

-   **[Method Parity Between the Publisher API and the Quick Action API](atlas.en-us.case_feed_dev.meta/case_feed_dev/publisher_quickaction_method_parity.htm)**
    The Lightning Quick Action JavaScript API allows you to interact with actions within Aura components similar to how the Salesforce Classic Publisher JavaScript API allows you to interact with publisher actions within Visualforce pages.

## Code Examples

```
<script 
  type='text/javascript' 
  src='/canvas/sdk/js/43.0/publisher.js'/>
```

```
<aura:component 
  implements="flexipage:availableForRecordHome" 
  description="My Aura component">
      <lightning:quickActionAPI 
        aura:id="quickActionAPI" />
</aura:component>
```

```
<script 
  src="/canvas/sdk/js/43.0/publisher.js" 
  type="text/javascript">
</script>
```

## Related Topics

- publisher.customActionMessage (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- publisher.invokeAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- refresh (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- publisher.selectAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- publisher.setActionInputValues (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- getAvailableActions (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActions.htm)
- getAvailableActionFields (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActionFields.htm)
- getCustomAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getCustomAction.htm)
- getSelectedActions (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getSelectedActions.htm)
- invokeAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_invokeAction.htm)
