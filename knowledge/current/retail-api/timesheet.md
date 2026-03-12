---
title: "TimeSheet"
domain: retail-api
topic: timesheet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.639Z
estimatedTokens: 1227
keywords: [TimeSheet, schedule, assignee's, time, Consumer, Goods, Cloud, API, v65.0, later, sheets, composed, sheet, entries, typically]
---

# TimeSheet

> Represents a schedule of an assignee's time in Consumer Goods Cloud. This object is
		available in API v65.0 and later. Time sheets are composed of time sheet entries, which
		typically track individual tasks.

# TimeSheet

Represents a schedule of an assignee's time in Consumer Goods Cloud. This object is available in API v65.0 and later. Time sheets are composed of time sheet entries, which typically track individual tasks.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Consumer Goods Cloud must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe related record to which this timesheet is assigned. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization. The label in the user interface is Currency ISO Code. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe last day the time sheet covers. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the time sheet. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe first day the time sheet covers. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the time sheet. The picklist includes the following values, which can be customized:NewSubmittedApproved |
| TimeSheetEntryCount | TypeintPropertiesFilter, Group, Nillable, SortDescription(Read Only) The number of related time sheet entries. |
| TimeSheetNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the time sheet. |
| TotalDurationInHours | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum total of the duration field of all the time sheet entries related to the time sheet object in hours. |
| TotalDurationInMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the sum total of the duration field of all the time sheet entries related to the time sheet object in minutes. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[TimeSheetChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[TimeSheetFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TimeSheetHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TimeSheetOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TimeSheetShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TimeSheetChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- TimeSheetFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- TimeSheetHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- TimeSheetOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- TimeSheetShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
