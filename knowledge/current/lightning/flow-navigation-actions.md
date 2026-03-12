---
title: "Flow Navigation Actions"
domain: lightning
topic: flow-navigation-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.194Z
estimatedTokens: 351
keywords: [Flow, Navigation, Actions, availableActions, attribute, screen]
---

# Flow Navigation Actions

> The availableActions attribute lists the valid
      navigation actions for that screen.

# Flow Navigation Actions

The availableActions attribute lists the valid navigation actions for that screen.

A screen’s available actions are determined by:

-   Where in the flow the screen is. For example, Previous isn't supported on the first screen in a flow, Finish is supported for only the last screen in a flow, and you can never have both Next and Finish.
-   Whether the flow creator opted to hide any of the actions in the screen's Control Navigation settings. For example, if Pause is de-selected, the Pause action isn't included in availableActions.

Here are the possible actions, their default button label, and what's required for that action to be valid.

| Action | Button Label | Description |
| --- | --- | --- |
| NEXT | Next | Navigates to the next screen |
| BACK | Previous | Navigates to the previous screen |
| PAUSE | Pause | Saves the interview in its current state to the database, so that the user can resume it later |
| RESUME | Resume | Resumes a paused interview |
| FINISH | Finish | Finishes the interview. This action is available only before the final screen in the flow. |

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")
