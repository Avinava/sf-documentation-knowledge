---
title: "InvoiceBatchRunRecovery"
domain: object-reference
topic: invoicebatchrunrecovery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.342Z
estimatedTokens: 1332
keywords: [InvoiceBatchRunRecovery, invoice, batch, run, recovery, procedure, API, version, 57.0, later, Calls, Special, Access, Rules, Associated]
---

# InvoiceBatchRunRecovery

> Provides information about an invoice batch run recovery procedure. This
      object is available in API version 57.0 and later.

# InvoiceBatchRunRecovery

Provides information about an invoice batch run recovery procedure. This object is available in API version 57.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoicebatchrunrecovery.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesFilter, Nillable, Sort, UpdateDescriptionOptional user-defined information about the scheduler. |
| CompletionTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the invoice batch run recovery procedure was completed. |
| InvoiceBatchRunId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique identifier of the invoice batch run related to this recovery run.This field is a relationship field.Relationship NameInvoiceBatchRunRelationship TypeLookupRefers ToInvoiceBatchRun |
| InvoiceBatchRunRecoveryNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique identifier of the invoice batch run recovery process. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user indirectly accessed this record (LastReferencedDate), but did not view it. |
| StartTime | TypedateTimePropertiesFilter, SortDescriptionThe timestamp when the invoice batch run recovery started. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe final state of the invoice batch run recovery process.Possible values are:Completed—The recovery run successfully reset all billing schedules to Ready for Invoicing.CompletedWithErrors—Some, but not all, billing schedules included in the recovery run were reset to Ready for Invoicing. The billing schedules that were recovered are included in the next scheduled invoice batch run. The billing schedules that weren’t successfully recovered must be manually reset to Ready for Invoicing so they can be processed.Failed—The recovery run was unable to complete the reset process.Started—Indicates that the recovery run reset process began, is ongoing, and has not yet produced a result.The default value is Started. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceBatchRunRecoveryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InvoiceBatchRunRecoveryFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InvoiceBatchRunRecoveryHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InvoiceBatchRunRecoveryOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InvoiceBatchRunRecoveryShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InvoiceBatchRunRecoveryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- InvoiceBatchRunRecoveryFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- InvoiceBatchRunRecoveryHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- InvoiceBatchRunRecoveryOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InvoiceBatchRunRecoveryShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
