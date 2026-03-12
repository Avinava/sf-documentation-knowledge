---
title: "PaymentBatchRun"
domain: revenue-cloud
topic: paymentbatchrun
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.731Z
estimatedTokens: 1170
keywords: [PaymentBatchRun, Represents, batch, processing, job, processes, payments, Billing., During, payment, run, schedules, meet, specified, criteria, processed, corresponding, Payment, records, created.]
---

# PaymentBatchRun

> Represents a batch processing job that processes payments in Billing. During
         a payment batch run, all the payment schedules that meet the specified criteria are
         processed and the corresponding Payment records are created. These payments are then
         applied to invoices or invoice lines. This object is available in API version 64.0 and
      later.

# PaymentBatchRun

Represents a batch processing job that processes payments in Billing. During a payment batch run, all the payment schedules that meet the specified criteria are processed and the corresponding Payment records are created. These payments are then applied to invoices or invoice lines. This object is available in API version 64.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingBatchSchedulerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. The ID of the billing batch scheduler that's used to schedule the payment batch run.This field is a relationship field.Relationship NameBillingBatchSchedulerRefers ToBillingBatchScheduler |
| Comments | TypetextareaPropertiesFilter, Nillable, Sort, UpdateDescriptionAdditional details about the payment batch run. |
| CompletionTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the payment batch run completed processing payments. |
| IsPaymentRetry | TypebooleanPropertiesFilter, Nillable, SortDescriptionIndicates whether the payment batch run is for retrying a failed payment (true) or not (false).The default value is false. Available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionRequired. The ID of the owner of the Payment Batch Run record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PaymentBatchRunNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the payment batch run. |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the payment batch run started processing payments. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The status of the payment batch run.Valid values are:CompletedFailedNewStartedStoppedThe default value is New. |
| TotalFailedScheduleItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of payment schedules that weren’t processed by the payment batch run. When a payment schedule isn’t processed, the system doesn’t generate a Payment record for it. For details about errors, check the Revenue Transaction Error Log records for the payment batch run. |
| TotalFilteredScheduleItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of payment schedule items that meet the payment run scheduler’s matching criteria. The matching criteria identifies the payment schedule items that are included for processing by the payment batch run. |
| TotalProcessedScheduleItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of payment schedule items that were processed by the payment batch run. |
| TotalScheduleItemsApplied | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of payment schedule items that were processed and had corresponding payments also applied to invoices or invoice lines. |
| TotalScheduleItemsApplyFailed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of payment schedule items that were processed but had corresponding payments that weren't applied to invoices or invoice lines. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentBatchRunShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PaymentBatchRunShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
