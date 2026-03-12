---
title: "Automate How Agents Accept and Decline Shift Assignments"
domain: workforce-engagement
topic: automate-how-agents-accept-and-decline-shift-assignments
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.658Z
estimatedTokens: 3962
keywords: [Automate, How, Agents, Accept, Decline, Shift, Assignments, approval, process, link, flow, acknowledge, planner, tentatively, assigns]
---

# Automate How Agents Accept and Decline Shift Assignments

> Create an approval process and link it to a flow so that agents can acknowledge shift
  assignments. When a planner tentatively assigns a shift, the agent can accept or reject the shift
  assignment in Agent Home.

# Automate How Agents Accept and Decline Shift Assignments

Create an approval process and link it to a flow so that agents can acknowledge shift assignments. When a planner tentatively assigns a shift, the agent can accept or reject the shift assignment in Agent Home.

| Workforce Engagement is available in Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


Set up an approval process for Shift records that’s triggered by a flow. When a planner assigns or creates a shift, the flow starts an approval process that lets the agent approve or decline the shift assignment.

After you create and activate them, the flow triggers the approval process when these conditions are true.

-   The shift status is Tentative.
-   The shift is assigned to an agent's service resource.
-   The owner of the shift record is the assigned service resource.

The flow also triggers the approval process when planners create and assign themselves to a shift.

You can extend the approval process and flow examples provided here, or use them as is. For example, if you customize shift status values, you can use a custom value instead of Tentative. If you want to turn off the ability for agents to approve shifts, be sure to deactivate both the approval process and flow.

Because there are many steps, we break them into sections.

1.  [Create an Approval Process for Shift Records](#create-approval-process)
2.  [Create a Flow to Trigger the Approval Process](#create-flow)
3.  [Test Your Approval Process and Flow](#test-approval)

## Create an Approval Process for Shift Records

An approval process automates how records are approved in Salesforce. When you create the flow, you specify the approval process as the action that the flow takes.

From Setup, in the Quick Find box, enter Approval Processes, and select **Approval Processes**. Under Manage Approval Process For, select **Shift** as the record type. Under Create New Approval Process, select **Use Standard Setup Wizard**. The wizard walks you through steps to create the approval process.

## Create an Approval Process with the Standard Setup Wizard

1.  For Step 1: Enter Name and Description, enter a name, a unique name, and an optional description for the approval process. You specify the unique name, such as Let\_Agents\_Accept\_and\_Reject\_Shifts, when you create your flow, so remember it. Click **Next**.![Enter a name for the approval process.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_process_step1.png&folder=workforce_engagement)
2.  Click **Next** to skip Step 2: Specify Entry Criteria.
3.  For Step 3: Specify Approver Field and Record Editability Properties, select **Administrators OR the currently assigned approver can edit records during the approval process**. Click **Next**.![Specify record editability.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_process_step3.png&folder=workforce_engagement)
4.  Click **Next** to skip Step 4: Select Notification Templates.
5.  For Step 5: Select Fields to Display on Approval Page Layout, make these changes.
    1.  Add Shift Number, Owner Name, and Status to the selected fields.
    2.  Under Approval Page Fields, select **Display approval history information in addition to the fields selected above**.
    3.  Under Security Settings, select **Allow approvers to access the approval page from within the Salesforce application, or externally from a wireless-enabled mobile device**.
    4.  Click **Next**.![Select fields to display on approval page layout](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_process_step5.png&folder=workforce_engagement)
6.  For Step 6: Specify Initial Submitters, make these changes.
    1.  Under Submitter Type, in Search, select Creator.
    2.  Add Record Creator and Shift Owner as allowed submitters. Record Creator allows planners who create shifts to approve or reject shifts that are assigned to them.
    3.  Select **Add the Submit for Approval button and Approval History related list to all Shift page layouts**.
    4.  Save your approval process.![Specify initial submitters.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_process_step6.png&folder=workforce_engagement)

## Create an Approval Step

Create an approval step in your process. Select **Yes, I’d like to create an approval step now**, and click **Go**.

1.  For Step 1: Enter Name and Description, enter a name, a unique name, a step number, and an optional description for the approval step. Click **Next**.![Enter a name for approval step.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_step_step1.png&folder=workforce_engagement)
2.  For Step 2: Specify Step Criteria, select **All records should enter this step**, and click **Next**.![Specify step criteria.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_step_step2.png&folder=workforce_engagement)
3.  For Step 3: Select Assigned Approver, under Select Approver, select **Automatically assign to approver(s)**. For the approver, select **Related user** and **Owner Name**. Save your work.![Select assigned approver.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_step_step3.png&folder=workforce_engagement)
4.  You created an approval step, but you can skip specifying workflow actions right now. Select **No, I will do this later. Take me to the approval process detail page to review what I’ve just created** and click **Go**.

## Create an Approval Action

Create an approval action that updates the shift status to Published when the agent approves their shift assignment in Agent Home.

1.  Click the name of your approval process to open it.
2.  In the Approval Steps section, click **Show Actions**.
3.  Under Approval Actions, click **Add New** and select **Field Update**.![Create an approver action.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_action.png&folder=workforce_engagement)
4.  Under Identification, enter a name, unique name, and optional description. For example, name the action Update Status to Published. For the Shift object, select **Status** as the Field to Update.
5.  Under Specify New Field Value and Picklist Options, select **A specific value**. Select **Published** as that value.
6.  Save your approval action. You can skip defining a rejection action. If the agent rejects the shift assignment, the shift status remains set to Tentative.
7.  In the **Final Approval Actions** section of your approval process, click **Edit** for the Record Lock type. Select **Unlock the record for editing**.

    Unlocking the Shift record is necessary so that the approval process can update shift status. Otherwise an error occurs when the agent tries to approve the shift assignment. ![Unlock the record for editing.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_finalapp_rec_lock.png&folder=workforce_engagement)

8.  Save your settings.
9.  Review your approval process. If it looks OK, activate it. ![Activate the approval process.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_app_activate.png&folder=workforce_engagement)

## Create a Flow to Trigger the Approval Process

To trigger the approval process, you define outcomes in your flow that check for these conditions when a Shift record is updated.

-   The shift status is changed to Tentative.
-   A service resource is assigned the shift.
-   The owner of the shift record is changed to the assigned service resource.

If any two conditions are true, the flow starts when the third condition becomes true. A fourth outcome covers the scenario when a planner creates a shift and self-assigns it.

1.  From Setup, in the Quick Find box, enter Flows, and select **Flows**.
2.  Click **New Flow** to get started creating your flow. Select Record-Triggered Flow as the flow type and click **Create**.
3.  Configure when the flow starts.

    1.  Select the Shift object​​ as the object whose records trigger the flow.
    2.  Select **A record is created or updated** as the trigger.
    3.  Select **Action and Related Records**, and click **Done**.

    ![Configure when the flow starts.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_start.png&folder=workforce_engagement)
4.  Click + on the Flow Builder and add a decision element to the flow.![Add a decision element.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_add_decision.png&folder=workforce_engagement)
5.  Enter a label, API name, and optional description for your flow. For example, enter Trigger Accept or Reject Shift Assignment as the name.
6.  Add the first outcome and the conditions that must be met. This outcome starts the flow when the shift status is changed to Tentative and the other conditions are met.
    1.  Enter a label and an outcome API name. For example, Status is Changed to Tentative.
    2.  Select **All Conditions are Met(AND)**.
    3.  Specify resource, operator, and value fields to define each condition. For example, set {!$Record.Status} as the resource, is Changed as the operator, and {!$GlobalConstant.True} as the value. After it’s defined, the condition appears as $Record > Status Is Changed True. Set these conditions for the first outcome.

        -   {!$Record.Status} is Changed {!$GlobalConstant.True}
        -   {!$Record.Status} Equals Tentative
        -   {!$Record.OwnerId} Equals {!$Record.ServiceResource.RelatedRecordId}

        ![Define conditions for the first outcome.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_outcome1.png&folder=workforce_engagement)
7.  Next to Outcome Order, click **+** to add the second outcome and the conditions that must be met. This outcome starts the flow when the shift owner is changed to the agent and the other conditions are met.

    1.  Enter a label and an outcome API name. For example, Owner is Changed to Agent.
    2.  Select **All Conditions are Met(AND)**.
    3.  Set these conditions.
        -   {!$Record.OwnerId} is Changed {!$GlobalConstant.True}
        -   {!$Record.OwnerId} Equals {!$Record.ServiceResource.RelatedRecordId}
        -   {!$Record.Status} Equals Tentative

    ![Define conditions for the second outcome.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_outcome2.png&folder=workforce_engagement)
8.  Next to Outcome Order, click **+** to add the third outcome. This outcome starts the flow when the shift is assigned to a service resource and the other conditions are met.

    1.  Enter a label and an outcome API name. For example, Service Resource is Changed to Agent.
    2.  Select **All Conditions are Met(AND)**.
    3.  Set these conditions.
        -   {!$Record.ServiceResourceId} is Changed {!$GlobalConstant.True}
        -   {!$Record.OwnerId} Equals {!$Record.ServiceResource.RelatedRecordId}
        -   {!$Record.Status} Equals Tentative

    ![Define conditions for the third outcome.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_outcome3.png&folder=workforce_engagement)
9.  Next to Outcome Order, click **+** to add the fourth outcome. This outcome starts the flow when planners create and assign themselves a shift and the other conditions are met.

    1.  Enter a label and an outcome API name. For example, Shift is Created and Assigned to Creator.
    2.  Select **All Conditions are Met(AND)**.
    3.  Set these conditions.
        -   {!$Record.OwnerId} Equals {!$Record.CreatedBy.Id}
        -   {!$Record.OwnerId} Equals {!$Record.ServiceResource.RelatedRecordId}
        -   {!$Record.Status} Equals Tentative
        -   {!$Record\_\_Prior} is Null {!$GlobalConstant.True}

    ![Define conditions for the fourth outcome.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_outcome4.png&folder=workforce_engagement)
10.  Under Outcome Order, click **Default Outcome**. Enter No Action as the label of the default outcome. ![Enter a label for the default outcome..](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_outcome_default.png&folder=workforce_engagement)
11.  In the Flow Builder, click **+** above the End element and add an action element. ![Add an action in flow builder.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_add_action.png&folder=workforce_engagement)

     1.  Select the **Submit for Approval** action. To make it easy to find this action, select **Approvals** as the filter category.
     2.  Enter a label, API name, and optional description for the action. For example, enter Accept or Reject Shift as the name.
     3.  Set the input value for the record ID to the shift record ID {!$Record.Id}.
     4.  Turn on the toggle to Include the approval process name.
     5.  Specify the exact API name of the approval process that you created earlier. For example, Let\_Agents\_Accept\_and\_Reject\_Shifts.
     6.  Click **Done**.

     ![Define the submit for approval action and specify your approval process.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_approval_action.png&folder=workforce_engagement)
12.  In the Flow Builder, link these outcomes to the Accept or Reject Shift action.
     -   Status is Changed to Tentative
     -   Owner is Changed to Agent
     -   Service Resource is Changed to Agent
     -   Shift is Created and Assigned to Creator
13.  In the Flow Builder, link the No Action outcome to the End element. ![Link outcomes to the action in flow builder.](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fworkforce_engagement_flow_final.png&folder=workforce_engagement)
14.  Save and name your flow, for example, Trigger Shift Approval.
15.  Activate your flow.

## Test Your Approval Process and Flow

Now you’re ready to see the results of your work.

1.  As a planner, create or select a shift. Set the shift status to Tentative.
2.  Assign it to a service resource.
3.  Change the shift owner to the service resource.
4.  In Agent Home for that service resource, the agent can then accept or reject the shift.

If the agent approves the shift, its status changes to Published. If the agent rejects the shift, the shift’s status remains as Tentative. When the agent refreshes Agent Home, the shift no longer appears on the agent’s schedule.

If a planner assigns a shift to the wrong agent, the planner must terminate the approval process in the shift’s Approval History related list. Otherwise, the agent can reject the erroneously assigned shift. The planner can then reassign the shift to the right agent.

#### See Also

-   [*Salesforce Help:* Approvals](https://help.salesforce.com/s/articleView?id=platform.what_are_approvals.htm&type=5&language=en_US "Salesforce Help: Approvals - HTML (New Window)")

-   [*Salesforce Help:* Flows](https://help.salesforce.com/s/articleView?id=platform.flow.htm&type=5&language=en_US "Salesforce Help: Flows - HTML (New Window)")

-   [*Salesforce Help:* Email Notifications for Intraday Management](https://help.salesforce.com/s/articleView?id=service.workforce_engagement_about_intraday_management_notifications.htm&type=5&language=en_US "Salesforce Help: Email Notifications for Intraday
    Management - HTML (New Window)")
