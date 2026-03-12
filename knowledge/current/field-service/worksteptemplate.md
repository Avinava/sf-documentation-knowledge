---
title: "WorkStepTemplate"
domain: field-service
topic: worksteptemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.923Z
estimatedTokens: 612
keywords: [WorkStepTemplate, Represents, template, work, step., API, version, 52.0, later., Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# WorkStepTemplate

> Represents a template for a work step. This object is available in API
    version 52.0 and later.

# WorkStepTemplate

Represents a template for a work step. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionDefinition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe platform action that the work step executes. The possible values are the names of the flow and quick actions configured in your org. |
| ActionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of platform action that the work step is associated with.Possible values are:FlowQuickAction |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the work step template. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether this work step template is active true or not false. Default is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-defined name of the work step template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner who created the work step template. |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

WorkStepTemplateChangeEvent

Change events are available for the object.

WorkStepTemplateFeed

Feed tracking is available for the object.

WorkStepTemplateHistory

History is available for tracked fields of the object.

WorkStepTemplateOwnerSharingRule

Sharing rules are available for the object.

WorkStepTemplateShare

Sharing is available for the object.
