---
title: "Implementing the Example Use Case"
domain: salesforce-guided-engagement
topic: implementing-the-example-use-case
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.881Z
estimatedTokens: 1771
keywords: [Implementing, Case, configure, Actions, Recommendations, component, several, ways, Creating, deployment, Setup, easy, way, RecordActions, appear]
---

# Implementing the Example Use Case

> You can configure the Actions & Recommendations component in several ways. Creating
    a deployment in Setup is an easy way to create RecordActions that appear in the list.

# Implementing the Example Use Case

You can configure the Actions & Recommendations component in several ways. Creating a deployment in Setup is an easy way to create RecordActions that appear in the list.

Maria, the admin at Awesome Bank, is ready to set up Lightning Flow for Service for her agents. She wants to configure actions as channel defaults so that agents see the loan application steps on a contact or case page. In addition, she wants to integrate Lightning Flow for Service with Awesome Bank’s Open CTI implementation. That way, agents can quickly create a contact record when there's an unknown caller.

Maria completes the following tasks.

1.  Create flows in Flow Builder.
    -   To handle unknown callers, Maria builds a flow called Create Contact that walks agents through creating a contact record.
    -   To guide agents and portal customers through the loan application, she creates a flow called New Loan.
    -   To determine a customer’s credit score, she creates a flow called Check Credit Score.
    -   To let agents submit a loan application, she builds an autolaunched flow called Process Loan.
    -   To walk agents through the wrap-up steps, she creates a flow called Wrap Up Loan.
2.  Update the Screen Pop Settings for the softphone layout in Setup (in Lightning Experience).

    To handle unknown callers, Maria updates the No Matching Records setting to pop to the unknown caller flow, Create Contact. This setting ensures that when an agent accepts a call from an unknown caller, the agent is presented with a flow that creates a contact record.

3.  Create an Actions & Recommendations deployment in Setup.
    1.  From Setup, in the Quick Find box, enter Actions & Recommendations, and select **Actions & Recommendations**.
    2.  Click **New Deployment**. Name your deployment.
    3.  Select at least one type of guidance. Select **Flows and quick actions**, or to display actions and offers that result from Next Best Action strategies, select **Recommendations** .

        Maria selects **Flows and quick actions**. After she gets the component to show the right steps, she can come back, edit the deployment, and configure settings to show recommendations too.

    4.  Select objects to use for object-specific quick actions and Next Best Action strategies.

        Maria adds the Case and Contact objects. That way, she can show agents object-specific quick actions, such as Log a Call.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

        #### Note

        To use object-specific quick actions in deployment settings, add them to the record page layout.

    5.  Configure channel defaults.

        On each channel, select the actions to show as defaults. For example, Maria wants to configure the flows defined in Step 1 as channel defaults. She drags those flows to the preview pane, and adds the Log a Call quick action too. She assigns attributes to indicate which actions users can remove at run time, and which are mandatory, such as the Check Credit Score flow.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

        #### Note

        Agents see the channel defaults when no other RecordActions are defined for the record page when it opens in a channel. If you create RecordActions using Process Builder or APIs, your users don’t see the actions that you configure as channel defaults.

    6.  Define which actions are available for users to start as needed. At run time, an agent can click **Add** and select an action from this subset.
4.  Edit the Lightning record page, and add the Actions & Recommendations component.

    To display a list of actions associated with the contact and case records, Maria adds the component to those pages. In component properties, she selects her deployment.


## The Agent Experience

The component gives the loan agents at Awesome Bank a clear set of steps to follow when they speak to customers. Under Recommendations (1), they see offers or actions from a Next Best Action strategy when the deployment is configured to show them. When the record page has a paused flow, it’s listed in under Resume Paused Actions (2). If there’s a handoff between agents, an agent can use the History tab (3) to learn which steps in the loan process have been started or completed. If agents don’t see a step, they can click Add and find a different action (4) to run. And agents see an asterisk next to mandatory actions that are important to complete (5).

![The component shows agents a list of actions, including recommendations and paused flows, for the record.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fguided_engagement_service_console_contact_use_case.png&folder=salesforce_guided_engagement)

## Example Customer Scenarios

Yolanda is a business owner who is hoping to expand and open a new location. She’s looking for a small business loan to jump-start the new venture, so she calls Awesome Bank. Yolanda has never done business with the bank before, so her phone number isn’t recognized. Because Maria configured settings to pop to the Create Contact flow for unknown callers, the agent that takes Yolanda's call sees the flow and completes a new contact record. The agent also sees other steps to complete for the loan application because Maria configured default actions for the Phone channel. One of the other steps is the mandatory step to check Yolanda’s credit score.

Erika is buying a new car. She heads to Awesome Bank’s website and starts an application for an auto loan. Midway through, she realizes that she doesn’t have the required vehicle information. She pauses the application. Later that day, Erika finds the information she needs and calls to finish the application. Because the paused flow is associated with Erika’s contact record, when the agent takes the call, the paused flow appears on the Actions & Recommendations component on Erika’s contact page. The agent resumes the flow, enters the missing information, and completes the application, picking up right where Erika left off.

#### See Also

-   [Associate Actions to Records with a Deployment](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate_deployment.htm "Use an Actions & Recommendations deployment to show default actions when records open from phone screen popups, chats, list views, or related records. A deployment also lets you show recommendations from Next Best Action strategies. After you create a deployment, select it in the Actions & Recommendations component on your Lightning record pages.")

-   [Customize Your Lightning Pages with the Component](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_component.htm "The Actions & Recommendations component displays RecordActions associated to the parent record. Add the component to your Lightning pages so that users can see the actions that they can take.")

## Related Topics

- Associate Actions to Records with a Deployment (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate_deployment.htm)
- Customize Your Lightning Pages with the Component (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_component.htm)
