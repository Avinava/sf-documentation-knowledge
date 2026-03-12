---
title: "Let Users Resume Paused Flows from the Actions & Recommendations Component"
domain: salesforce-guided-engagement
topic: let-users-resume-paused-flows-from-the-actions-recommendations-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.898Z
estimatedTokens: 636
keywords: [Let, Users, Resume, Paused, Flows, Actions, Recommendations, Component, configure, Process, Automation, Settings, allow, pause, Show]
---

# Let Users Resume Paused Flows from the Actions & Recommendations Component

> When you configure Process Automation Settings, you can allow users to pause flows.
    Show agents paused flows associated with the current record page in the Actions &
    Recommendations component. When there’s a handoff or a customer calls back, the agent can easily
    find and resume the paused flow. The component shows all paused flows associated with the
    current record, including flows not started from the list.

# Let Users Resume Paused Flows from the Actions & Recommendations Component

When you configure Process Automation Settings, you can allow users to pause flows. Show agents paused flows associated with the current record page in the Actions & Recommendations component. When there’s a handoff or a customer calls back, the agent can easily find and resume the paused flow. The component shows all paused flows associated with the current record, including flows not started from the list.

For example, Erika is a customer at the fictitious Awesome Bank. Erika is completing an online auto loan application that uses a flow. She pauses the flow because she’s missing some required information. She calls the bank later to complete the application. Because the current record variable in the flow is set to Erika’s contact record, when her contact page opens, the agent sees the paused flow in the Actions & Recommendations component. To resume the flow, the agent clicks **Resume Paused Actions** and selects the flow.![Click Resume Paused Actions to see paused flows.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_action_paused_flow.png&folder=salesforce_guided_engagement)

When an agent resumes a flow, it opens, and the list updates to include it. If the flow was started from a pinned region of the list, it’s added at the end of that region. Otherwise, it’s added to the bottom of the unpinned region.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

A flow can use the variable Flow.CurrentRecord to track the current record associated with the flow. Sometimes API or flow logic updates this variable. For example, if a flow is associated with a lead record and the lead is converted to a contact, the record association is updated. When a user pauses a flow, the component checks the currently associated record. If the record context changed, the paused flow doesn’t appear on the record page’s list. Instead, to resume the flow, a message directs the user to the new record that is associated with the flow.

#### See Also

-   [*Salesforce Help*: Let Users Pause Flow Interviews](https://help.salesforce.com/articleView?id=flow_pause.htm&language=en_US "Salesforce Help: Let Users Pause Flow Interviews - HTML (New Window)")

-   [*Salesforce Help*: Add Record Context to Your Flows](https://help.salesforce.com/articleView?id=flow_pause_recordassoc.htm&language=en_US "Salesforce Help: Add Record Context to Your Flows - HTML (New Window)")
