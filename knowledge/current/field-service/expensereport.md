---
title: "ExpenseReport"
domain: field-service
topic: expensereport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.084Z
estimatedTokens: 521
keywords: [ExpenseReport, Represents, report, summarizes, expenses., API, version, 50.0, later., Supported, Calls, Fields, Associated, Objects]
---

# ExpenseReport

> Represents a report that summarizes expenses. This object is available in
    API version 50.0 and later.

# ExpenseReport

Represents a report that summarizes expenses. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description for the expense report. |
| ExpenseReportNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the expense report. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the expense report record. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA title that identifies the expense report. |
| TotalExpenseAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all expense entries in the report.This is a calculated field. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ExpenseReportFeed

Feed tracking is available for the object.

ExpenseReportHistory

History is available for tracked fields of the object.

ExpenseReportShare

Sharing is available for the object.
