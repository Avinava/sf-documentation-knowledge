---
title: "AccountingPeriod"
domain: revenue-cloud
topic: accountingperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.340Z
estimatedTokens: 1214
keywords: [AccountingPeriod, Represents, information, time, period, which, businesses, prepare, reports, analyze, performance., billing, transaction, associated, accounting, period., API, version, 62.0, later.]
---

# AccountingPeriod

> Represents information about a time period for which businesses
         prepare reports and analyze performance. Each billing transaction is associated with an
         accounting period. This object is available in API version 62.0 and later.

# AccountingPeriod

Represents information about a time period for which businesses prepare reports and analyze performance. Each billing transaction is associated with an accounting period. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Accounts Receivables Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The end date of an accounting period. |
| FinancialYear | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The financial year in which an accounting period falls. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed an accounting period indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed an accounting period. If this value is null, it’s possible that the user only accessed the accounting period or a related list view (LastReferencedDate), but not viewed the accounting period itself. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The auto-generated name of an accounting period. The name is a combination of the accounting period's start date, start month, end date, and end month. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The user who owns an Accounting Period record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The start date of an accounting period. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of an accounting period.Valid values are:ClosedOpen |
| TotalAssetsAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all the assets from legal entity accounting periods associated with the accounting period. This field is available in API version 65.0 and later. |
| TotalEquitiesAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all the equities from legal entity accounting periods associated with the accounting period. This field is available in API version 65.0 and later. |
| TotalExpensesAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all the expenses from legal entity accounting periods associated with the accounting period. This field is available in API version 65.0 and later. |
| TotalLiabilitiesAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all the liabilities from legal entity accounting periods associated with the accounting period. This field is available in API version 65.0 and later. |
| TotalRevenueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all the revenue from legal entity accounting periods associated with the accounting period. This field is available in API version 65.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountingPeriodShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[AccountingPeriodFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountingPeriodHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountingPeriodShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
- AccountingPeriodFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- AccountingPeriodHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
