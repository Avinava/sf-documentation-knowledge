---
title: "Remind Users to Complete Mandatory Steps"
domain: salesforce-guided-engagement
topic: remind-users-to-complete-mandatory-steps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.893Z
estimatedTokens: 539
keywords: [Remind, Users, Mandatory, Steps, Highlight, configuring, actions, agents, try, close, flow, that’s, they, reminder, step]
---

# Remind Users to Complete Mandatory Steps

> Highlight required steps by configuring them as mandatory actions. When agents try to
    close a  flow that’s mandatory, they see a reminder that the step is required.

# Remind Users to Complete Mandatory Steps

Highlight required steps by configuring them as mandatory actions. When agents try to close a flow that’s mandatory, they see a reminder that the step is required.

Maria, the Salesforce admin at Awesome Bank, wants to make sure that agents complete the Check Credit Score step. This step is required for every loan application. To help agents remember to complete this step, Maria defines this screen flow as a mandatory action.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

The reminder appears for screen flows and field service mobile flows. We don’t show the reminder for quick actions or autolaunched flows that are marked as mandatory.

Maria can set up an action as mandatory in several ways. Which method Maria uses depends on how she creates the RecordActions that display in the component.

-   When Maria configures channel defaults in an Actions & Recommendations deployment, she can select an action in the preview area and mark it as mandatory.
-   If Maria uses Process Builder to create RecordActions, she can set the Is Mandatory attribute to **True**.
-   If Maria uses an API to define RecordActions, she can set the mandatory field for the action to **True**.

For example, when an agent tries to close a mandatory screen flow before completing it, a message reminds the agent that the flow is required. Clicking **Cancel** dismisses the warning and continues the flow. Or, the agent can click **Finish Later**, which closes the tab or window. The agent can start a new instance of the flow later.![Users see a reminder to complete a mandatory action.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_mandatory_message.png&folder=salesforce_guided_engagement)

#### See Also

-   [Keep Steps Visible on Your List](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_sample_user_removable.htm "Hide the remove option for actions that you want agents to complete. Agents can’t remove these steps, so they remain on the list unless they’re completed.")

## Related Topics

- Keep Steps Visible on Your List (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_sample_user_removable.htm)
