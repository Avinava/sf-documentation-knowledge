---
title: "Keep Steps Visible on Your List"
domain: salesforce-guided-engagement
topic: keep-steps-visible-on-your-list
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.902Z
estimatedTokens: 331
keywords: [Keep, Steps, Visible, Hide, remove, option, actions, want, agents, can’t, they, remain, unless, they’re, completed]
---

# Keep Steps Visible on Your List

> Hide the remove option for actions that you want agents to complete. Agents can’t
    remove these steps, so they remain on the list unless they’re completed.

# Keep Steps Visible on Your List

Hide the remove option for actions that you want agents to complete. Agents can’t remove these steps, so they remain on the list unless they’re completed.

By default, steps on the Actions & Recommendations component are removable. However, if you choose, you can hide the remove option from users.![Remove option on an action.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_action_remove_pinned.png&folder=salesforce_guided_engagement)

Maria, the Salesforce admin at Awesome Bank, wants to make sure that agents complete the Check Credit Score flow. In addition to marking the flow mandatory, she can hide the remove option in one of these ways.

-   When Maria configures channel defaults in a deployment, she selects the Check Credit Score flow in the preview area and marks it as not removable.
-   If Maria uses Process Builder and creates RecordActions, she can set the Hide Remove Action in UI attribute in the RecordAction to **True**.
-   If Maria uses an API to define RecordActions, she can set the attribute in the RecordAction.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

Even if you hide the remove option from users, actions can still be removed from the component using an API.
