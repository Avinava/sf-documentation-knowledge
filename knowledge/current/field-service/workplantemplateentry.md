---
title: "WorkPlanTemplateEntry"
domain: field-service
topic: workplantemplateentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:13.172Z
keywords: [WorkPlanTemplateEntry, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# WorkPlanTemplateEntry

# WorkPlanTemplateEntry

Represents an object that associates a work step template with a work plan template. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ExecutionOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number of when this entry is executed. Only positive values are supported. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| WorkPlanTemplateEntryNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number of the work plan template entry, for example, WPTE-0001. |
| WorkPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the work plan template. |
| WorkStepTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the work step template. |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

WorkPlanTemplateEntryChangeEvent

Change events are available for the object.

WorkPlanTemplateEntryFeed

Feed tracking is available for the object.

WorkPlanTemplateEntryHistory

History is available for tracked fields of the object.