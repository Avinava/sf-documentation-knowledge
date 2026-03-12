---
title: "Associate Actions with Records"
domain: salesforce-guided-engagement
topic: associate-actions-with-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.905Z
estimatedTokens: 652
keywords: [Associate, Actions, Records, declaratively, configure, channel-specific, defaults, Recommendations, deployment, Process, Builder, flows, programmatically, SOAP, Apex]
---

# Associate Actions with Records

> To associate actions to records declaratively, configure channel-specific defaults in an
  Actions & Recommendations deployment or use Process Builder. To associate flows to records
  programmatically, use SOAP or Apex. After you add the Actions & Recommendations component to
  your Lightning pages, you can display RecordActions that you’ve configured.

# Associate Actions with Records

To associate actions to records declaratively, configure channel-specific defaults in an Actions & Recommendations deployment or use Process Builder. To associate flows to records programmatically, use SOAP or Apex. After you add the Actions & Recommendations component to your Lightning pages, you can display RecordActions that you’ve configured.

-   **[Associate Actions to Records with a Deployment](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate_deployment.htm)**
    Use an Actions & Recommendations deployment to show default actions when records open from phone screen popups, chats, list views, or related records. A deployment also lets you show recommendations from Next Best Action strategies. After you create a deployment, select it in the Actions & Recommendations component on your Lightning record pages.
-   **[Associate Actions to Records with Process Builder](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_builder.htm)**
    Process Builder is a point-and-click automation tool that you can use to design processes that kick off when a new or updated record meets specific criteria. After you create flows and quick actions, you can associate them with a record by building a process. Use Process Builder to create a process that, when triggered, creates a RecordAction. The RecordAction represents an association between an action and the record that kicked off the process.
-   **[Associate Actions to Records with SOAP](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_soap.htm)**
    If your business maintains code outside the Salesforce platform, you can use SOAP API to create, retrieve, update, or delete a RecordAction.
-   **[Associate Actions to Records with Apex](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_apex.htm)**
    If you want to control how you trigger the creation of a RecordAction, you can use Apex to associate actions to records. The RecordAction object is exposed as a standard object in Apex. You can trigger it before a DML operation or on delete or undelete. You can also provide custom error handling.

#### See Also

-   [Developer Documentation: *Process Automation Cheatsheet*](https://resources.docs.salesforce.com/rel1/doc/en-us/static/pdf/SF_Process_Automation_cheatsheet_web.pdf "Developer Documentation: Process Automation Cheatsheet - Adobe Acrobat PDF (New Window)")

## Related Topics

- Associate Actions to Records with a Deployment (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate_deployment.htm)
- Associate Actions to Records with Process Builder (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_builder.htm)
- Associate Actions to Records with SOAP (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_soap.htm)
- Associate Actions to Records with Apex (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_apex.htm)
