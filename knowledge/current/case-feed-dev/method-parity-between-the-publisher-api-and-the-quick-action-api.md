---
title: "Method Parity Between the Publisher API and the Quick Action API"
domain: case-feed-dev
topic: method-parity-between-the-publisher-api-and-the-quick-action-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.376Z
estimatedTokens: 189
keywords: [Parity, Publisher, API, Quick, Action, Lightning, JavaScript, interact, actions, Aura, components, similar, how, Salesforce, Classic]
---

# Method Parity Between the Publisher API and the Quick Action API

> The Lightning Quick Action JavaScript API allows you to interact with actions within
    Aura components similar to how the Salesforce Classic Publisher JavaScript API allows you to
    interact with publisher actions within Visualforce pages.

# Method Parity Between the Publisher API and the Quick Action API

The Lightning Quick Action JavaScript API allows you to interact with actions within Aura components similar to how the Salesforce Classic Publisher JavaScript API allows you to interact with publisher actions within Visualforce pages.

This table shows which Quick Action API methods map to Publisher API methods.

| Quick Action API Method (in Aura Component) | Publisher API Method (in Visualforce) |
| --- | --- |
| getAvailableActions | N/A |
| getAvailableActionFields | N/A |
| getCustomAction | customActionMessage |
| getSelectedActions | N/A |
| invokeAction | invokeAction |
| refresh | refresh |
| selectAction | selectAction |
| setActionFieldValues | setActionInputValues |

## Related Topics

- getAvailableActions (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActions.htm)
- getAvailableActionFields (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getAvailableActionFields.htm)
- getCustomAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getCustomAction.htm)
- customActionMessage (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- getSelectedActions (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_getSelectedActions.htm)
- invokeAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_invokeAction.htm)
- invokeAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- refresh (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_refresh.htm)
- refresh (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- selectAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api_selectAction.htm)
