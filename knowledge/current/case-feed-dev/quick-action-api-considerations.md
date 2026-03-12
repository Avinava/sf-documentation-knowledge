---
title: "Quick Action API Considerations"
domain: case-feed-dev
topic: quick-action-api-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.394Z
estimatedTokens: 671
keywords: [Quick, Action, API, Considerations, working, Lightning, JavaScript, review, impact, implementation]
---

# Quick Action API Considerations

> Before working with the Lightning Quick Action JavaScript API methods, review some
  considerations that might impact your implementation.

# Quick Action API Considerations

Before working with the Lightning Quick Action JavaScript API methods, review some considerations that might impact your implementation.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=case_feed_dev)

#### Tip

The Lightning Quick Action JavaScript APIs can only interact with quick actions that are targetable on the page. Review the following support.

-   Targetable: An action that displays in the highlights panel, including the dropdown action overflow
-   Targetable: An action that displays in the publisher, including the More overflow
-   Targetable: An action that’s nested in an accordion component section or tab that’s expanded by default
-   Not targetable: An action that’s nested in an accordion component section or tab that’s not expanded by default\*

    \*The action becomes targetable after a user opens the accordion section or tab containing the action.


If you use the Lightning Quick Action JavaScript APIs in custom code in a Lightning app, the targeted quick actions must be visible on the page. If you target an action that isn’t visible on the page, it fails.

The Quick Action APIs work with most action types.

| Action Type | Supported? | Notes |
| --- | --- | --- |
| Create a Record | Yes | Supported in all Lightning apps, on any object. |
| Custom Visualforce | Yes | Supported in all Lightning apps, on any object.NoteTo work with these action types, use the getCustomAction method. Other methods aren’t supported for this action type. |
| Flow | No | Results in error. |
| Log a Call | Yes | Supported in all Lightning apps, on any object. |
| Aura Component | Yes | Supported in all Lightning apps, on any object.NoteTo work with these action types, use the getCustomAction method. Other methods aren’t supported for this action type. |
| Send Email | Yes | Supported in all Lightning apps, on any object. |
| Update a Record | Yes | Supported in all Lightning apps, on any object. |

The lightning:quickActionAPI component supports utility popout. However, the getCustomAction method doesn’t work with utility popout yet. The Salesforce Classic Publisher APIs also support utility popout if you place them in a Visualforce page that’s used in the utility bar. The customActionMessage doesn’t support utility popout either.

The Quick Action APIs don’t support the following items.

-   Opportunity products
-   Knowledge articles
-   Crew Size field on the Service Crew object
-   Social quick action in the case feed publisher provided with Social Customer Service
-   Experience Cloud sites—the lightning:quickActionAPI component doesn’t work in Experience Cloud sites
