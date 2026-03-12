---
title: "ExpenseReport"
domain: object-reference
topic: expensereport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.831Z
estimatedTokens: 724
keywords: [ExpenseReport, report, summarizes, expenses, API, version, 50.0, later, Calls, Associated, Objects]
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

[ExpenseReportFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ExpenseReportHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ExpenseReportShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ExpenseReportFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ExpenseReportHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ExpenseReportShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
