---
title: "Batch Apex"
domain: apex-guide
topic: batch-apex
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.285Z
keywords: [Batch, Apex, Warning]
---

# Batch Apex

# Batch Apex

A developer can now employ batch Apex to build complex, long-running processes that run on thousands of records on the Lightning Platform. Batch Apex operates over small batches of records, covering your entire record set and breaking the processing down to manageable chunks. For example, a developer could build an archiving solution that runs on a nightly basis, looking for records past a certain date and adding them to an archive. Or a developer could build a data cleansing operation that goes through all Accounts and Opportunities on a nightly basis and updates them if necessary, based on custom criteria.

Batch Apex is exposed as an interface that must be implemented by the developer. Batch jobs can be programmatically invoked at runtime using Apex.

You can only have five queued or active batch jobs at one time. You can evaluate your current count by viewing the Scheduled Jobs page in Salesforce or programmatically using SOAP API to query the AsyncApexJob object.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Use extreme care if you are planning to invoke a batch job from a trigger. You must be able to guarantee that the trigger does not add more batch jobs than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time.

Batch jobs can also be programmatically scheduled to run at specific times using the [Apex scheduler](atlas.en-us.apexcode.meta/apexcode/apex_scheduler.htm "Use the Apex Scheduler to delay execution so that you can run Apex classes at a specified time. This is ideal for daily or weekly maintenance tasks using Batch Apex."), or scheduled using the Schedule Apex page in the Salesforce user interface. For more information on the Schedule Apex page, see “Schedule Apex Jobs” in the Salesforce online help.

The batch Apex interface is also used for [Apex managed sharing recalculations](atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_recalc.htm).

For more information on batch jobs, continue to [Using Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm "To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke the class programmatically. To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box and then select Apex Jobs.").

For more information on Apex managed sharing, see [Understanding Apex Managed Sharing](atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing.htm "Sharing is the act of granting a user or group of users permission to perform a set of actions on a record or set of records. Sharing access can be granted using the Salesforce user interface and Lightning Platform, or programmatically using Apex.").

For more information on firing platform events from batch Apex, see [Firing Platform Events from Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch_platformevents.htm#apex_batch_platformevents "Batch Apex classes can fire platform events when encountering an error or exception. Clients listening on an event can obtain actionable information, such as how often the event failed and which records were in scope at the time of failure. Events are also fired for Salesforce Platform internal errors and other uncatchable Apex exceptions such as LimitExceptions, which are caused by reaching governor limits.")

-   **[Use Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)**  
    To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke the class programmatically. To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box and then select **Apex Jobs**.
-   **[Firing Platform Events from Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch_platformevents.htm)**  
    Batch Apex classes can fire platform events when encountering an error or exception. Clients listening on an event can obtain actionable information, such as how often the event failed and which records were in scope at the time of failure. Events are also fired for Salesforce Platform internal errors and other uncatchable Apex exceptions such as LimitExceptions, which are caused by reaching governor limits.