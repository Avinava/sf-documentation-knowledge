---
title: "Show Users Which Steps to Complete First or Last"
domain: salesforce-guided-engagement
topic: show-users-which-steps-to-complete-first-or-last
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.900Z
estimatedTokens: 324
keywords: [Show, Users, Steps, Pin, actions, top, bottom, Recommendations, component, know]
---

# Show Users Which Steps to Complete First or Last

> Pin actions to the top or bottom of the Actions & Recommendations component so that
    users know to complete them first or last.

# Show Users Which Steps to Complete First or Last

Pin actions to the top or bottom of the Actions & Recommendations component so that users know to complete them first or last.

Maria, the Salesforce admin at Awesome Bank, can assign actions to the top, bottom, or unpinned regions of the component. The method by which she sets up RecordActions determines how she assigns an action to a region.

-   When Maria configures channel defaults in a Actions & Recommendations deployment, she can select an action and drag it to a region in the preview area.![In channel defaults, you can drag actions to the pinned regions in the preview area. ](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_action_deployment_channel.png&folder=salesforce_guided_engagement)
-   If Maria uses Process Builder and creates RecordActions, she can assign the Top, Bottom, or None value to the RecordAction’s Pinned attribute.
-   If Maria uses an API to define RecordActions, she can set the Pinned attribute for the action.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

Each step in the component has a pulldown menu. The Move Up and Move Down menu options let users reorder actions, but only within a pinned or unpinned region.
