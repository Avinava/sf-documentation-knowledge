---
title: "PaymentTermItem"
domain: object-reference
topic: paymenttermitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.688Z
estimatedTokens: 799
keywords: [PaymentTermItem, attributes, payment, term, company, uses, determine, due, date, invoices, API, version, 55.0, later, Calls]
---

# PaymentTermItem

> Defines the attributes of a payment term that your company uses. The
         PaymentTermItem is used to determine the due date on invoices. This object is
      available in API version 55.0 and later.

# PaymentTermItem

Defines the attributes of a payment term that your company uses. The PaymentTermItem is used to determine the due date on invoices. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_paymenttermitem.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser-defined field that describes the details of the payment term item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated sequential number, such as PTI-000001. |
| PaymentTermId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the payment term that this payment term item is associated with.This field is a relationship field.Relationship NamePaymentTermRelationship TypeLookupRefers ToPaymentTerm |
| PaymentTimeframe | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the time period when the payment is expected.Possible values are:Standard—Indicates that payment is expected by the date specified in the payment term. If payment isn't received by the due date, the payment becomes overdue.The default value is Standard. |
| Period | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the number of units in the payment period. Used with the PeriodUnit field.For example, to define a payment term of Net 30, enter 30 as the Period and select Days as the PeriodUnit. |
| PeriodUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of time for the payment period. Used with the Period field.For example, to define a payment term of Net 30, enter 30 as the Period and select Days as the PeriodUnit.Possible values are:Days |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies how the payment term and invoice due date are derived.Possible values are:Period-Based—Tells the system to use the Period and PeriodUnit fields to calculate the invoice due date.The default value is Period-Based. |
