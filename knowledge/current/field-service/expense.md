---
title: "Expense"
domain: field-service
topic: expense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.312Z
estimatedTokens: 1076
keywords: [Expense, linked, work, order, Service, resource, technicians, log, expenses, tools, travel, costs, API, version, 49.0]
---

# Expense

> Represents an expense linked to a work order. Service resource technicians can
      log expenses, such as tools or travel costs. This object is available in API version 49.0
    and later.

# Expense

Represents an expense linked to a work order. Service resource technicians can log expenses, such as tools or travel costs. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account associated with the linked work order. |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount of the expense. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description for the expense. |
| Discount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage deducted from the Subtotal price. Available in version 51.0 and later. |
| ExpenseEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the expense was incurred over multiple days, the Expense End Date is the last day that the expense covers. |
| ExpenseNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe number that uniquely identifies the expense. |
| ExpenseStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the expense was incurred over multiple days, the Expense Start Date is the first day that the expense covers. |
| ExpenseType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of expense. Possible values are:BillableNon-BillableThe default value is Billable. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the expense record. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of items purchased in this record. Available in version 51.0 and later. |
| Subtotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe subtotal price calculated as the product of Quantity and UnitPrice. Available in version 51.0 and later.This is a calculated field. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA title that identifies the expense.This field is available in API version 50.0 and later. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total price of the transaction which is equal to the discounted subtotal: Subtotal - (Discount * Subtotal). Available in version 51.0 and later.This is a calculated field. |
| TransactionDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe day that the expense was incurred, or the payment date for the expense. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of one item on the record. Available in version 51.0 and later. |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work order associated with the expense. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ExpenseChangeEvent (API version 55.0)

Change events are available for the object.

ExpenseFeed

Feed tracking is available for the object.

ExpenseHistory

History is available for tracked fields of the object.

ExpenseOwnerSharingRule

Sharing rules are available for the object.

ExpenseShare

Sharing is available for the object.
