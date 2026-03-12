---
title: "BillingTreatmentItem"
domain: revenue-cloud
topic: billingtreatmentitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.827Z
estimatedTokens: 1930
keywords: [BillingTreatmentItem, Represents, information, allocation, total, amount, order, item, billing, schedules, throughout, item's, lifecycle., API, version, 62.0, later., Important, Supported, Calls]
---

# BillingTreatmentItem

> Represents information about allocation of the total amount of an
         order item to billing schedules throughout the order item's lifecycle. This object is
      available in API version 62.0 and later.

# BillingTreatmentItem

Represents information about allocation of the total amount of an order item to billing schedules throughout the order item's lifecycle. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The parent billing treatment for the billing treatment item.This field is a relationship field.Relationship NameBillingTreatmentRelationship TypeMaster-detailRefers ToBillingTreatment (the master object) |
| BillingType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The timing of invoicing for a product or service relative to its delivery to the customer. Advance billing invoices a product or service before its delivery, whereas arrears billing invoices it after delivery. The billing system assesses the billing type to determine the next billing date for an order product. Valid values are:Advance—If the order item is billed in advance, the order’s billing day of month is evaluated to choose the nearest date on or before the order product’s start date. For example, if a monthly order product’s start date is January 1, and the order’s billing day of month is 15, the next billing date is December 15.Arrears—If the order item is billed in arrears, the order’s billing day of month is evaluated to choose the nearest date after the order product’s start date. For example, if a monthly order product’s start date is January 1, and the order’s billing day of month is 15, the order product’s next billing date is January 15.None |
| Controller | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. During the invoicing process, this field determines which value is used when the billing schedule group and billing schedule have a shared field with different values. For example, when Controller has a value of BillingScheduleGroup, if the billing schedule's billing day of month is 5 while the billing schedule group's billing day of month is 10, the value of 10 is used.Valid values are:BillingScheduleGroupNone |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the billing treatment item. |
| FlatAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount in terms of units of currency (such as $10 or $21.52) to invoice from the order item. Used only when Type has a value of FlatAmount. |
| Handling0Amount | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies how invoices are generated for billing period items that have an amount of $0.Valid values are:CreateInvoiceNone |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a billing treatment item indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a billing treatment item. If this value is null, it’s possible that the user only accessed the billing treatment item or a related list view (LastReferencedDate), but not viewed the billing treatment item itself. |
| MilestoneStartDate | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe occurrence whose date is used to calculate the milestone accomplishment date for the associated billing milestone plan item based on the provided offset details.Valid value is:OrderProductActivationThis field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| MilestoneStartDateOffset | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe calculated value that determines the time difference from the start of a milestone. This value is calculated from the milestone start date record. This field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| MilestoneStartDateOffsetUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit type to use with the milestone start date offset, which defines the milestone date.Valid values are:DaysMonthsYearsThis field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| MilestoneType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe milestone type for the billing treatment item.Valid values are:DateEventThis field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the billing treatment item. |
| Percentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage (such as 10% or 12.5%) to invoice from the order item. Used only when Type field has a value of Percentage. |
| ProcessingOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The order in which billing schedules are created based on each billing treatment item. Lower numbers are evaluated first. For example, if your billing treatment has a billing treatment item that invoices at 25 percentage and a ProcessingOrder of 1, and another item that invoices at 75 percentage and a ProcessingOrder of 2, your first billing schedule will be for 25% of the order item's total amount, and your second billing schedule will be for 75% of the order item's total amount. |
| Sequencing | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The number used to start invoice numbers on invoices generated from this billing treatment item. Valid values are:ManualNone |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the billing treatment item.Valid values are:ActiveDraft– Draft billing treatment items aren't evaluated for creating billing schedules. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether billing schedules created from this billing treatment item are based on a flat amount or a percentage of the order item's total amount. Valid values are:FlatAmountPercentageRemainder |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BillingTreatmentItemHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BillingTreatmentItemHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
