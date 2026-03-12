---
title: "InvoiceBatchRunRecovery"
domain: revenue-cloud
topic: invoicebatchrunrecovery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.508Z
estimatedTokens: 638
keywords: [InvoiceBatchRunRecovery, Represents, information, recovery, procedure, invoice, batch, run., API, version, 62.0, later., Important, Supported, Calls, Special, Access, Rules, Fields]
---

# InvoiceBatchRunRecovery

> Represents information about the recovery procedure of an invoice
         batch run. This object is available in API version 62.0 and later.

# InvoiceBatchRunRecovery

Represents information about the recovery procedure of an invoice batch run. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesFilter, Nillable, Sort, UpdateDescriptionAdditional notes or comments for the invoice batch run recovery. |
| CompletionTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the invoice batch run recovery finished processing. |
| InvoiceBatchRunId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. A unique identifier of the invoice batch run that's related to this recovery run.This field is a relationship field.Relationship NameInvoiceBatchRunRelationship TypeMaster-detailRefers ToInvoiceBatchRun (the master object) |
| InvoiceBatchRunRecoveryNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. A unique identifier of the recovery process for the invoice batch run. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed an invoice batch run recovery record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed an invoice batch run recovery record. If this value is null, it’s possible that the user only accessed the invoice batch run recovery record or a related list view (LastReferencedDate), but not viewed the invoice batch run recovery record itself. |
| StartTime | TypedateTimePropertiesFilter, SortDescriptionRequired. The timestamp when the invoice batch run recovery started processing. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The final state of the recovery process for the invoice batch runs.Valid values are:CompletedCompletedWithErrorsFailedStartedThe default value is Started. |
