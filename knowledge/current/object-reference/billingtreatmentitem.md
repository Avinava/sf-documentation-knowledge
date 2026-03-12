---
title: "BillingTreatmentItem"
domain: object-reference
topic: billingtreatmentitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.581Z
estimatedTokens: 1825
keywords: [BillingTreatmentItem, billing, treatment, item, how, order, item's, total, amount, distributed, schedules, over, course, lifecycle, Subscription]
---

# BillingTreatmentItem

> A billing treatment item defines how the order item's total amount is
         distributed into billing schedules over the course of the order item's lifecycle. In the
         Subscription Management pilot, billing treatments must have only one billing treatment
         item, so that the billing treatment item covers 100% of the order item's total
         value.
      This object is available in API version 55.0 and later.

# BillingTreatmentItem

A billing treatment item defines how the order item's total amount is distributed into billing schedules over the course of the order item's lifecycle. In the Subscription Management pilot, billing treatments must have only one billing treatment item, so that the billing treatment item covers 100% of the order item's total value. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingtreatmentitem.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent billing treatment for the billing treatment item.This field is a relationship field.Relationship NameBillingTreatmentRelationship TypeLookupRefers ToBillingTreatment |
| BillingType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines when Subscription Management invoices a product or service relative to when it’s provided to the customer. Advance billing invoices a product or service before it's provided, while arrears billing invoices a product or service after it has provided Subscription Management evaluates billing type when calculating an order product’s next billing date.Possible values are:Advance – If the order item is billed in advance, Subscription Management evaluates the order’s billing day of month to choose the nearest date on or before the order product’s start date. For example, if a monthly order product’s start date is January 1, and the order’s billing day of month is 15, the next billing date is December 15.Arrears – If the order item is billed in arrears, Subscription Management evaluates the order’s billing day of month to choose the nearest date after the order product’s start date. For example, if a monthly order product’s start date is January 1 and the order’s billing day of month is 15, the order product’s next billing date is January 15.ImportantArrears billing isn't available in Subscription Management API Version 54.0. |
| Controller | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDuring the invoicing process, this field determines which value Subscription Management uses when the billing schedule group and billing schedule have a shared field with different values. For example, when Controller has a value of BillingScheduleGroup, if the billing schedule's billing day of month is 5 while the billing schedule group's billing day of month is 10, Subscription Management uses the value of 10.In the Subscription Management API version 54.0, only BillingScheduleGroup is supported.Possible values are:BillingScheduleGroup— |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree-letter ISO 4217 currency code associated with the billing treatment item. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOptional user-defined description for the billing treatment item. |
| FlatAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount in terms of units of currency (such as $10 or $21.52) to invoice from the order item. Used only when Type has a value of FlatAmount. |
| Handling0Amount | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionShows how Subscription Management invoices billing period items that have an amount of $0.Possible values are:CreateInvoice—Create a $0 invoice line.Null —No invoice line is created. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Default name of this record. |
| Percentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage (such as 10% or 12.5%) to invoice from the order item. Used only when Type has a value of Percentage. |
| ProcessingOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDefines the order in which Subscription Management creates billing schedules based on each billing treatment item. Lower numbers are evaluated first. For example, if your billing treatment has a billing treatment item that invoices at 25 Percentage and a ProcessingOrder of 1, and another item that invoices at 75 Percentage and a ProcessingOrder of 2, your first billing schedule will be for 25 percent of the order item's total amount, and your second billing schedule will be for 75% of the order item's total amount. |
| Sequencing | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAllows users to define the number used to start invoice numbers on invoices generated from this billing treatment item.Subscription Management API Version 54.0 supports only manual sequencing.Possible values are:Manual—Invoices created from this billing treatment item begin with an invoice number of 1. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDraft billing treatment items aren't evaluated for creating billing schedules.Possible values are:ActiveDraft |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines whether billing schedules created from this billing treatment item are based on a flat amount or a percentage of the order item's total amount.Possible values are:FlatAmount—The billing schedule is for a flat currency amount of the order item's total amount (for example, $50 or $200.50.)Percentage—The billing schedule is for a percentage of the order item's total amount (for example, 12.5% or 54%). |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BillingTreatmentItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 55.0)

History is available for tracked fields of the object.

## Related Topics

- BillingTreatmentItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
