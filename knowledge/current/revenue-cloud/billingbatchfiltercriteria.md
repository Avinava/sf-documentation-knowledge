---
title: "BillingBatchFilterCriteria"
domain: revenue-cloud
topic: billingbatchfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.938Z
estimatedTokens: 1490
keywords: [BillingBatchFilterCriteria, filter, eligible, billing, schedules, satisfy, order, picked, invoice, run, API, version, 62.0, later, Calls]
---

# BillingBatchFilterCriteria

> Represents the filter that all eligible billing schedules must satisfy in
         order to be picked up by an invoice run. This object is available in API version 62.0
      and later.

# BillingBatchFilterCriteria

Represents the filter that all eligible billing schedules must satisfy in order to be picked up by an invoice run. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BatchCriteriaId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the batch criteria record.This field is a polymorphic relationship field.Relationship NameBatchCriteriaRefers ToInvoiceBatchRunCriteria |
| BillingBatchFilterCriteriaNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the billing batch filter criteria. |
| ColumnEnum | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The column or field to which the filter criteria are applied. |
| CriteriaFieldType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe data type of the custom or standard criteria field.Valid values are:CustomBooleanCustomCurrencyCustomDateCustomLookupCustomNumberCustomPercentCustomTextAvailable in API version 63.0 and later. |
| CriteriaSequence | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order in which the filter criteria are applied on the billing batch. |
| CustomCriteriaFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the custom field on the object specified in the ObjectName field. The filter criteria is applied on the custom field. This object is available in API version 65.0 and later. |
| InvoiceRunMatchingValue | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionA value to match during an invoice run. This field is useful for filtering the invoices based on specific criteria during the billing process. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| ObjectName | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The object on which the filter criteria are applied.Valid values are:AccountBillingAccount — Available in API version 63.0 and later.BillingAccount — Available in API version 63.0 and later.BillingScheduleBillingScheduleGroupCreditMemo — Available in API version 63.0 and later.CreditMemoInvApplication — Available in API version 63.0 and later.CreditMemoLine — Available in API version 63.0 and later.CreditMemoLineInvoiceLine — Available in API version 63.0 and later.CreditMemoLineTax — Available in API version 63.0 and later.DebitMemoLine — Available in API version 65.0 and later.Invoice — Available in API version 63.0 and later.InvoiceLine — Available in API version 63.0 and later.InvoiceLineTax — Available in API version 63.0 and later.Payment — Available in API version 64.0 and later.PaymentGateway — Available in API version 64.0 and later.PaymentLineInvoice — Available in API version 64.0 and later.PaymentLineInvoiceLine — Available in API version 64.0 and later.PaymentSchedule — Available in API version 64.0 and later.PaymentScheduleItem — Available in API version 64.0 and later.Refund — Available in API version 64.0 and later.RefundLinePayment — Available in API version 64.0 and later. |
| Operation | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The type of comparison or logical operation to be performed on the specified column or field.Valid values are:Contains — Available in API version 63.0 and later.EqualsGreaterThan — Available in API version 63.0 and later.GreaterThanOrEqualTo — Available in API version 63.0 and later.InListLessThan — Available in API version 63.0 and later.LessThanOrEqualToNotEquals — Available in API version 63.0 and later.OfTypeStartsWith — Available in API version 63.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the user who created the billing batch filter criteria.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PaymentRunMatchingValue | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionA value to match during a payment run. This field is useful for filtering the payments based on specific criteria during the billing process. This field is visible but isn't used in API version 62.0. |
| StandardCriteriaField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the standard field for the object specified in the ObjectName field. The filter criteria is applied on the standard field. Available in API version 63.0 and later. |
| Value | TypestringPropertiesFilter, Group, SortDescriptionRequired. The value to be used in the filter criteria. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BillingBatchFilterCriteriaHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BillingBatchFilterCriteriaHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
