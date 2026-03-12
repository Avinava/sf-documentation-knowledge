---
title: "Associate Actions to Records with Process Builder"
domain: salesforce-guided-engagement
topic: associate-actions-to-records-with-process-builder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.930Z
estimatedTokens: 1475
keywords: [Associate, Actions, Records, Process, Builder, point-and-click, automation, tool, design, processes, kick, off, new, updated, record]
---

# Associate Actions to Records with Process Builder

> Process Builder is a point-and-click automation tool that you can use to design
        processes that kick off when a new or updated record meets specific criteria. After you
        create flows and quick actions, you can associate them with a record by building a process.
        Use Process Builder to create a process that, when triggered, creates a RecordAction. The
        RecordAction represents an association between an action and the record that kicked off the
        process.

# Associate Actions to Records with Process Builder

Process Builder is a point-and-click automation tool that you can use to design processes that kick off when a new or updated record meets specific criteria. After you create flows and quick actions, you can associate them with a record by building a process. Use Process Builder to create a process that, when triggered, creates a RecordAction. The RecordAction represents an association between an action and the record that kicked off the process.

RecordActions appear in the Actions & Recommendations component on the record page, ready for your users to start.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

When you associate actions to records using Process Builder, you override any channel defaults that you configured in an Actions & Recommendations deployment.

1.  [Define the process properties](https://help.salesforce.com/articleView?id=process_properties.htm&language=en_US "HTML (New Window)").

    The process properties uniquely identify your process.

2.  [Configure the process trigger](https://help.salesforce.com/articleView?id=process_start.htm&language=en_US "HTML (New Window)").

    Every process includes a trigger, which tells the process when to start. How you configure that trigger depends on what type of process you’re creating.

3.  [Add process criteria](https://help.salesforce.com/articleView?id=process_criteria.htm&language=en_US "HTML (New Window)").

    Define the criteria that must be true before the process can execute the associated actions.

4.  [Add actions to your process](https://help.salesforce.com/articleView?id=process_action.htm&language=en_US "HTML (New Window)") and [create a record from the process](https://help.salesforce.com/articleView?id=process_action_create.htm&language=en_US "HTML (New Window)").

    After you define a criteria node, create a record from the process when criteria are met. Actions are executed in the order in which they appear in the Process Builder.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

    #### Note

    Flows is a supported Action Type in Process Builder. This type is different from creating a RecordAction. An Action Type of Flows supports only flows that don’t have screens, and is invoked immediately when the process is triggered. Creating a RecordAction doesn’t invoke the flow; rather, it associates a record with the flow so that your users can run it.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_guided_engagement)

    #### Important

    To associate flows or quick actions to records, you must create a RecordAction.

    Specify the following.

    -   Action Type: Create a Record
    -   Record Type: RecordAction

    Set field values for the Create a Record action.

    | Field | Type | Value |
    | --- | --- | --- |
    | Action | Picklist | Specify the action that you want to associate with the record. |
    | Action Type | Picklist | Specify whether the action is a flow or a quick action. |
    | Order | Number | Specify the order of the action among all actions associated with this record. Actions are ordered in comparison to other actions in their pinned or unpinned region. If two actions have the same order, then they are sorted by their last modified date. |
    | Parent Record ID | Field Reference | Specify the record associated with the action. For most use cases, select the ID for the object you’ve selected for your process trigger. For example, if you used the contact object, set the value to [Contact].Id. |
    | Is Mandatory | Boolean | If set to True, the flow is required. When a mandatory screen flow is launched, if the user tries to close the tab or window, a message appears and reminds the user to complete the flow. The reminder doesn’t appear for quick actions or autolaunched flows. |
    | Hide Remove Action in UI | Boolean | If set to True, users can’t see the Remove option for the action in the component. However, actions can still be deleted using the API. |
    | Pinned | Picklist | Specify whether the action is pinned to the top or bottom of the component. To display the action in the unpinned region, use None. |

5.  Activate your process.

When your criteria are met and your process runs, the actions that you specified are associated with the parent record.

## Example

Create a process that adds a required flow for users to verify a contact’s information, like an email address, when their phone number changes.

1.  Choose the contact object, and start the process when a record is created or edited. ![Screen shot of the Process Builder start screen.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_process_builder_start.png&folder=salesforce_guided_engagement)
2.  Create criteria for when the \[Contact\].MobilePhone field changes. ![Screen shot of the criteria window with specified changes.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_process_builder_criteria.png&folder=salesforce_guided_engagement)
3.  Add a Create a Record action, and specify RecordAction for the Record Type
4.  Set field values for the record, pointing to your Verify\_Information flow and the parent record ID. To encourage the user to complete this flow, specify the Is Mandatory field as True.![Screen shot of the create a record window with specified changes.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_process_builder_create_record_action.png&folder=salesforce_guided_engagement)
5.  Activate the process.

    When the contact’s MobilePhone field changes, the Verify Information flow opens as a subtab on the contact record. An asterisk next to the flow indicates that it is mandatory.
