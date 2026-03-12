---
title: "AcctMgrTarget"
domain: mfg-api-devguide
topic: acctmgrtarget
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:55.067Z
estimatedTokens: 1326
keywords: [AcctMgrTarget, target, created, account, manager, stores, fiscal, year, measure, start, date, end, assignment, API, version]
---

# AcctMgrTarget

> Represents a target created by an account manager. It stores the
      fiscal year, measure, target value, start date, end date, and assignment information of an
      account manager target. This object is available in API version 49.0 and
    later.

# AcctMgrTarget

Represents a target created by an account manager. It stores the fiscal year, measure, target value, start date, end date, and assignment information of an account manager target. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedTargetPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the parent account manager target value assigned to a team member. |
| AssignedToUserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of a user who has been assigned an account manager target. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis date is populated based on the end date of the fiscal year that is selected for an account manager target. It’s a read-only field. |
| FiscalYearId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the fiscal year selected for an account manager target. It’s a read-only field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user last referenced an account manager target record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user last viewed an account manager target record. |
| Measure | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field stores the measure of an account manager target. The measure can be a custom value but it must map to at least one of the predefined measure types. The value Revenue is provided by default. |
| MeasureType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThere are two predefined measure types for an account manager target. The valid values are:Currency (default)Other |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-defined name of an account manager target. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of a user who owns an account manager target record. |
| ParentAcctMgrTargetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent account manager target. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis date is populated based on the start date of the fiscal year that is selected for an account manager target. |
| TargetCurrencyValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of an account manager target that has the measure type as Currency. |
| TargetValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of an account manager target that has the measure type as Other. |
| TeamMemberHierarchyType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe hierarchy type of team members for account manager target assignments. The valid values are:ForecastsHierarchy—Derived from the Forecasts Hierarchy. setupManagerHierarchy (Default)—Derived from the Manager field of a user. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AcctMgrTargetChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[AcctMgrTargetFeed](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AcctMgrTargetHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AcctMgrTargetShare](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AcctMgrTargetChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- AcctMgrTargetFeed (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_feed.htm)
- AcctMgrTargetHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
- AcctMgrTargetShare (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_share.htm)
