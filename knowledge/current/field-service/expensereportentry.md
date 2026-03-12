---
title: "ExpenseReportEntry"
domain: field-service
topic: expensereportentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.328Z
estimatedTokens: 584
keywords: [ExpenseReportEntry, entry, expense, report, API, version, 50.0, later, Calls, Associated, Objects]
---

# ExpenseReportEntry

> Represents an entry in an expense report. This object is available in API
    version 50.0 and later.

# ExpenseReportEntry

Represents an entry in an expense report. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the expense. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization. |
| ExpenseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe expense that corresponds to the expense report entry. |
| ExpenseReportEntryNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the expense report entry. |
| ExpenseReportId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe expense report that’s associated with the expense report entry. |
| ExpenseType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe type of expense. Possible values are:BillableNon-BillableThe default value is Billable. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA title that identifies the expense. |
| TransactionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe day that the expense was incurred, or the payment date for the expense. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ExpenseReportEntryFeed

Feed tracking is available for the object.

ExpenseReportEntryHistory

History is available for tracked fields of the object.
