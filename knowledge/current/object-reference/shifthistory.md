---
title: "ShiftHistory"
domain: object-reference
topic: shifthistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.036Z
estimatedTokens: 366
keywords: [ShiftHistory, history, changes, made, tracked, time, sheet, API, versions, 46.0, later, Calls, Special, Access, Rules]
---

# ShiftHistory

> Represents the history of changes made to tracked fields on a time
         sheet. Available in API versions 46.0 and later.

# ShiftHistory

Represents the history of changes made to tracked fields on a time sheet. Available in API versions 46.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

Field Service must be enabled in your organization, and field tracking for shift fields must be configured.

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe value of the field before it was changed. |
| ShiftId | TypereferencePropertiesFilter, Group, SortDescriptionID of the shift being tracked. The history is displayed on the detail page for this record.This is a relationship field.Relationship NameShiftRelationship TypeLookupRefers ToShift |

## Usage

Scheduling and dispatching service resources using shift data is not supported in API version 46.0.
