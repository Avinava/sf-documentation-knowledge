---
title: "TimeSheetEntry"
domain: field-service
topic: timesheetentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:13.054Z
keywords: [TimeSheetEntry, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# TimeSheetEntry

# TimeSheetEntry

Represents a span of time that a service resource spends on a field service task. This object is available in API version 47.0 and later.

Time sheets are composed of time sheet entries. Time sheet entries typically track individual tasks like travel or asset repair.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization. The label in the user interface is Currency ISO Code.Time sheet entries inherit their time sheet’s currency code. Updates to a time sheet’s currency code aren’t reflected in existing time sheet entries’ currency code. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes on how the time was spent. For example, “This service took longer than normal because the machine was jammed.” |
| DurationInMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionMinutes recorded on the time sheet entry. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the activity finished. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| LocationTimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionTime zone of the location where the activity occurred.This field is available in API version 50.0 and later. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the activity began. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the time sheet entry. The picklist includes the following values, which can be customized:NewSubmittedApproved |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionActivity performed; for example, repair, lunch, or travel. |
| TimeSheetEntryNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number identifying the time sheet entry. |
| TimeSheetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe time sheet associated with the time sheet entry. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of work performed. The picklist includes the following values, which can be customized:DirectIndirect |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order related to the time sheet entry. Work orders are searchable by their content. |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order line item related to the time sheet entry. Work order line items are searchable by their content. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

TimeSheetEntryChangeEvent (API version 48.0)

Change events are available for the object.

TimeSheetEntryFeed

Feed tracking is available for the object.

TimeSheetEntryHistory

History is available for tracked fields of the object.