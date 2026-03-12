---
title: "InvoiceBatchRun"
domain: object-reference
topic: invoicebatchrun
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.328Z
estimatedTokens: 2788
keywords: [InvoiceBatchRun, batch, processing, job, Subscription, Management, Billing, Revenue, Cloud, invoice, run, schedules, meet, criteria, processed]
---

# InvoiceBatchRun

> Represents a batch processing job in Subscription Management or
			Billing (Revenue Cloud). During an invoice batch run, all billing schedules that meet
			the specified criteria are processed, resulting in the generation of invoices. This
		object is available in API version 55.0 and later.

# InvoiceBatchRun

Represents a batch processing job in Subscription Management or Billing (Revenue Cloud). During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices. This object is available in API version 55.0 and later.

An invoice batch run, controlled by a scheduler, tells the system to start the run at a scheduled date and time. The scheduler also includes matching criteria, which are used to evaluate the billing schedules. Billing schedules that meet the specified criteria are included for processing in the invoice batch run.

When an invoice batch run is started, Subscription Management or Billing (Revenue Cloud):

-   Evaluates the billing schedule to see if it meets the criteria for inclusion in the batch invoice run.
-   Generates an invoice record with a pending state.
-   Makes calls to an external tax provider.
-   Adds the tax to the invoice.
-   Summarizes information about the billing schedules that were included in the invoice batch run and displays this information in the Invoice Batch Run record.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoicebatchrun.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BillingBatchSchedulerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related billing batch scheduler.This field is a relationship field.Relationship NameBillingBatchSchedulerRelationship TypeLookupRefers ToBillingBatchScheduler |
| Comments | TypetextareaPropertiesFilter, Nillable, Sort, UpdateDescriptionOptional user-defined information about the scheduler. |
| CompletionTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the invoice batch run finished processing. |
| InvoiceBatchRunNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-generated sequential number. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the invoice batch run was last modified. Its UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the invoice batch run was last viewed. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionSystem-generated field. The ID of the user who created the BillingBatchScheduler record. Its UI label is Owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecoveryStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the state of the invoice batch run recovery process. This field is available in API version 56.0 and later.Possible values are:CompletelyRecovered—All billing schedules included in the recovery run were reset to Ready for Invoicing. These billing schedules are included in the next scheduled invoice batch run.PartiallyRecovered—Some, but not all, billing schedules that were part of the recovery run were reset to Ready for Invoicing. The billing schedules that were recovered are included in the next scheduled invoice batch run. The billing schedules that weren’t successfully recovered must be manually reset to Ready for Invoicing so they can be processed.RecoveryFailed—The recovery job was unsuccessful. This value is available in API version 57.0 and later.RecoveryStarted—The recovery job is in process. |
| StartTime | TypedateTimePropertiesFilter, SortDescriptionTimestamp when the invoice batch run started processing. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe state of the invoice batch run.Possible values are:Canceled—This value is available in API version 57.0 and later.CompletedFailedStartedStopped—This value is available in API version 57.0 and later.The default value is Started. |
| TotalBillSchedRecovered | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of billing schedules that were part of the recovery run that were reset to Ready for Invoicing. These billing schedules are included in the next scheduled invoice batch run.This field is available in API version 57.0 and later. |
| TotalBillSchedUnrecovered | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of billing schedules that were part of the recovery run that weren't reset to Ready for Invoicing. These billing schedules that weren’t successfully recovered must be manually reset to Ready for Invoicing so they can be processed.This field is available in API version 57.0 and later. |
| TotalBillingSchedulesFailed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of billing schedules that weren’t successfully processed. When a billing schedule isn’t successfully processed, then the system doesn’t generate an invoice for it. For details about errors, check the Revenue Transaction Error Log. This field is available in API version 56.0 and later. |
| TotalBsSuccessfullyProcessed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of billing schedules for which the system was able to generate and process invoices. This field is available in API version 56.0 and later. |
| TotalDraftInvoiceAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the invoice amounts for invoices in Draft status.This field is available when Billing (Revenue Cloud) is enabled.This field is available in API version 62.0 and later. |
| TotalDraftInvoices | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of invoices in Draft status generated in the batch run.This field is available when Billing (Revenue Cloud) is enabled.This field is available in API version 62.0 and later. |
| TotalFilteredBillingSchedules | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of billing schedules that met the invoice run scheduler’s matching criteria. The matching criteria specify which billing schedules are included in the invoice batch run. Its field label is Total Matching Billing Schedules. This field is available in API version 56.0 and later. |
| TotalInvSuccessfullyProcessed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of invoices that were successfully processed.When Billing (Revenue Cloud) is enabled, the field's value is either the same as TotalPostedInvoices or TotalDraftInvoices based on the Invoice Status selected when the Invoice Scheduler is set up.This field is available in API version 56.0 and later. |
| TotalInvoicedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of income including taxes represented by the successfully processed invoices. This field is available in API version 56.0 and later. |
| TotalInvoicesCanceled | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of invoices that weren't processed. To find out what went wrong, check the Revenue Transaction Error Log. Fix the errors, then run the invoice batch run recovery process.This field is available in API version 57.0 and later. |
| TotalInvoicesFailed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of invoices that weren’t processed successfully. To find out what went wrong, check the Revenue Transaction Error Log. Then fix the errors and run the invoice batch run recovery process. This field is available in API version 56.0 and later. |
| TotalInvoicesGenerated | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of invoices that were generated from the billing schedules processed by the invoice batch run. This field is available in API version 56.0 and later. |
| TotalPostedInvoices | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of invoices in Posted status generated during the batch run.This field is available when Billing (Revenue Cloud) is enabled.This field is available in API version 62.0 and later. |
| TotBillSchdUpdtDurDrftToPost | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total billing schedules updated during the draft to posted run.This field is available when Billing (Revenue Cloud) is enabled.This field is available in API version 62.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceBatchRunChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InvoiceBatchRunFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InvoiceBatchRunHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InvoiceBatchRunOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InvoiceBatchRunShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InvoiceBatchRunChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- InvoiceBatchRunFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- InvoiceBatchRunHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- InvoiceBatchRunOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InvoiceBatchRunShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
